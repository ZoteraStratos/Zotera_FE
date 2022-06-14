import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useSocketContext } from "../Components/context";
import { BASE_URL } from "../constants";

const fetchDataPromise = ({ history, sensorType }) =>
  axios
    .get(`${BASE_URL}/list`, {
      params: {
        history,
        sensorType,
      },
    })
    .then((r) =>
      r.data.reduce(
        (acc, { name, x, y }) => ({
          ...acc,
          [name]: acc[name] ? acc[name].concat({ x, y }) : [{ x, y }],
        }),
        {}
      )
    );

export const useChartValuesSubscription = (
  sensorTypes = "",
  history = "lasthour"
) => {
  const socket = useSocketContext();
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);

  const sensorTypeArray = sensorTypes.split(",");
  const computed = sensorTypeArray.map((key) => values[key]);

  const getData = useCallback(
    async (promise) => {
      try {
        const result = await promise;
        setValues(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [setValues, setLoading]
  );

  if (socket) {
    socket.onmessage = ({ data }) => {
      try {
        const {
          IotData: {
            payload: { metrics },
          },
        } = JSON.parse(data);
        const newMetrics = metrics.filter((metric) => values[metric.name]);
        if (
          newMetrics.length &&
          (history === "lasthour" || history === "lastDay")
        ) {
          getData(
            fetchDataPromise({
              history,
              sensorType: sensorTypeArray,
            })
          );
        }
      } catch (error) {
        console.log("Error processing socket data", error);
      }
    };
  }

  useEffect(() => {
    setLoading(true);
    const sensorTypeArray = sensorTypes.split(",");
    getData(
      fetchDataPromise({
        history,
        sensorType: sensorTypeArray,
      })
    );
  }, [history, sensorTypes, getData]);

  return [computed, loading];
};
