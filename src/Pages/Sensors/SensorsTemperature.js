import React, { useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import DonutChart from "../ReuseableComponents/Chart/DonutChart";
import GlobalChart from "../ReuseableComponents/Chart/GlobalChart";
import { useChartValuesSubscription } from "../../Hooks/useChartValuesSubscription";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
  Box: {
    height: 110,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  upperImageStyle: {
    position: "absolute",
    top: "41%",
    left: "24%",
    transform: "translate(-50 %, -50 %)",
  },
  lowerImageStyle: {
    position: "absolute",
    top: "41%",
    right: "32%",
    transform: "translate(-50 %, -50 %)",
  },
  centerText: {
    flexGrow: 1,
    textAlign: "center",
    alignItems: "center",
  },
  root: {
    width: "100%",
  },
  media: {
    width: "10%",
  },
  headerCardCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonColor: {
    backgroundColor: "#26616a",
    color: "white",
  },
  dropDownBtnStyle: {
    backgroundColor: "#26616a",
    color: "white",
    paddingTop: "4px",
    paddingLeft: "15px",
    paddingBottom: "4px",
    paddingRight: "14px",
    borderRadius: "5px",
  },
  alignCenter: {
    textAlign: "center",
  },
  pumpMonitorImage: {
    width: "40%",
  },
});

const pmpInletHistoryOption = {
  lasthour: "Last 1 Hour",
  lastday: "Last 1 Day",
  lastWeek: "Last 1 Week",
  lastTwoweeks: "Last 2 Week",
};

const pmpInletHistoryOptionKeys = Object.keys(pmpInletHistoryOption);

const SensorsTemperature = () => {
  const classes = useStyles();
  const [history, setHistory] = useState();

  const iCOMOXTmpertrValue = useChartValuesSubscription(
    "iCOMOX/Temperature/Value",
    history
  );

  const wtrTmpsRawWtrTmp = useChartValuesSubscription(
    "TemperatureSensor1",
    history
  );
  const temperatureSensor = wtrTmpsRawWtrTmp[0] ? wtrTmpsRawWtrTmp[0].y : 0;

  const pmpInletHandleChange = (event) => {
    setHistory(event.target.value);
  };

  return (
    <React.Fragment className={classes.container}>
      <Grid container spacing={2} display="flex">
        <Grid xs={4} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard
              lableName={"Description : "}
              labelValue={"Temperature Sensor"}
            />
          </Box>
        </Grid>
        <Grid xs={3} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={"Model Number : "} labelValue={"TA2303"} />
          </Box>
        </Grid>
        <Grid xs={3} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={"Location : "} labelValue={"Centennial "} />
          </Box>
        </Grid>
        <Grid xs={2} item>
          <Box className={classes.headerCardCenter}>
            <Button className={classes.buttonColor} variant="contained">
              More
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="flex-start">
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <DeviceDetailCard
            imagePath="/temperatureSensor.png"
            deviceNameBlueClr={"Temperature Sensor "}
            deviceDetailBlackColor={" "}
            deviceDetailBlackColorSiUnit={""}
            deviceReading={""}
            classNameUsed={classes.media}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <DonutChart
            labelName={"Temperature"}
            siUnit={" F"}
            presentRpm={`${parseFloat(temperatureSensor).toFixed(2)}`}
            customSegmentStops={increment(100)}
            maxValue={100}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <br />
          <DeviceDetailCard
            imagePath="/pumpMonitor.png"
            deviceNameBlueClr={"Pump Monitor "}
            deviceDetailBlackColor={" "}
            deviceDetailBlackColorSiUnit={""}
            deviceReading={""}
            classNameUsed={classes.pumpMonitorImage}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <DonutChart
            labelName={"Temperature"}
            siUnit={" F"}
            presentRpm={0}
            customSegmentStops={increment(100)}
            maxValue={100}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        display="flex"
        className={classes.headerCardCenter}
      >
        <Grid xs={4} item>
          <Card className={classes.root}>
            <Grid
              container
              spacing={2}
              display="flex"
              className={classes.headerCardCenter}
            >
              <Grid xs={7} item>
                <b> Status History </b>
              </Grid>
              <Grid xs={2} item>
                <FormControl>
                  <Select
                    className={classes.dropDownBtnStyle}
                    onChange={pmpInletHandleChange}
                    inputProps={{
                      name: "statusHistory",
                      id: "statusHistory",
                    }}
                    defaultValue="lasthour"
                  >
                    {pmpInletHistoryOptionKeys.map((value, index) => {
                      return (
                        <MenuItem value={value} key={index * 2.54}>
                          {pmpInletHistoryOption[value]}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        display="flex"
        className={classes.headerCardCenter}
      >
        <Grid xs={4} item>
          <Card className={classes.root}>
            <Grid
              container
              spacing={2}
              display="flex"
              className={classes.headerCardCenter}
            >
              <Grid xs={7} item>
                <b> Alerts : 7 </b>
              </Grid>
              <Grid xs={2} item>
                <Button className={classes.buttonColor} variant="contained">
                  Details
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} display="flex">
        <Grid xs={6} item>
          <Box className={classes.centerText}>
            <br />
            <Typography gutterBottom>
              <b>Water Temperature Levels</b>
            </Typography>

            <GlobalChart
              newBackGrndColr={"red"}
              newBorderColr={"red"}
              allLabelNames={["Water/Temps/RawWaterTemp"]}
              arrayOfRespectiveDataset={[wtrTmpsRawWtrTmp]}
              dataSetbackgroundColor={["red"]}
              siUnit={"F"}
              heightForChart={250}
            />
          </Box>
        </Grid>
        <Grid xs={6} item>
          <Box className={classes.centerText}>
            <br />
            <Typography gutterBottom>
              <b>Pump Motor Temperature Levels</b>
            </Typography>
            <GlobalChart
              newBackGrndColr={"rgb(56, 213, 169)"}
              newBorderColr={"rgb(56, 213, 169)"}
              allLabelNames={["iCOMOX/Temperature/Value"]}
              arrayOfRespectiveDataset={[iCOMOXTmpertrValue]}
              dataSetbackgroundColor={["rgb(56, 213, 169)"]}
              siUnit={"F"}
              heightForChart={250}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

function increment(maxValue) {
  let newArray = [0];
  let reminder = maxValue / 10;
  let counter = 0;
  while (counter < maxValue) {
    counter = counter + reminder;
    newArray.push(counter);
  }
  return newArray;
}

export default SensorsTemperature;
