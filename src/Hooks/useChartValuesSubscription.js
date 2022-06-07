import axios from "axios";
import { useState, useEffect } from "react";
import { useDataContext } from "../Components/context";
import { BASE_URL } from "../constants";

export const useChartValuesSubscription = (
  sensorType,
  history = "lasthour"
) => {
  const { register, unregister, data } = useDataContext();
  const [keyData, setKeyData] = useState([]);

  useEffect(() => {
    register(sensorType);

    axios
      .get(
        `${BASE_URL}/getListData?history=${history}&sensorType=${sensorType}`
      )
      .then((r) => r.data)
      .then(setKeyData);
    return () => {
      unregister(sensorType);
    };
  }, [sensorType, history, register, unregister]);

  useEffect(() => {
    if (data[sensorType] && !data[sensorType].closed) {
      data[sensorType].subscribe((point) =>
        setKeyData((data) => {
          const array = JSON.parse(JSON.stringify(data));
          array.pop();
          return [{ y: point.value, x: point.timestamp }].concat(array);
        })
      );
      return () => {
        data[sensorType].unsubscribe();
      };
    }
  }, [data, sensorType]);

  return keyData;
};
