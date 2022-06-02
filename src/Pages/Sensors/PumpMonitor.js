import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography, Box } from "@material-ui/core";

import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import Button from "@material-ui/core/Button";
import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import PumpMonitorImage from "../../Images/pumpMonitor.png";

import MultipleTabs from "../ReuseableComponents/MultipleTabs";
import LineChart from "../ReuseableComponents/Chart/LineChart";

import RowRadioButtonsGroup from "../ReuseableComponents/RadioButtons";
import { useGlobalContext } from "../../Components/context";
import GlobalChart from "../ReuseableComponents/Chart/GlobalChart";
import { FormControl, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    width: "4%",
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
  currentMotorImageWidth: {
    maxWidth: "22%",
  },
  marginForGrid: {
    marginTop: "4%",
  },
});

const PumpMonitor = () => {
  const classes = useStyles();
  const pmpInletHistoryOption = {
    lasthour: "Last 1 Hour",
    lastday: "Last 1 Day",
    lastWeek: "Last 1 Week",
    lastTwoweeks: "Last 2 Week",
  };

  const pmpInletHistoryOptionKeys = Object.keys(pmpInletHistoryOption);

  const pmpInletHandleChange = (event) => {
    event.preventDefault();

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=iCOMOX/AccelerometerPrimary/X/Max/Value`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setiCOMOXAPrmyXMaxValue, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyXMaxValue,
            "add"
          );
        }
      });

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=iCOMOX/AccelerometerPrimary/X/Min/Value`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setiCOMOXAPrmyXMinValue, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyXMinValue,
            "add"
          );
        }
      });

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=iCOMOX/AccelerometerPrimary/Y/Max/Value`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setiCOMOXAPrmyYMaxValue, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyYMaxValue,
            "add"
          );
        }
      });

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=iCOMOX/AccelerometerPrimary/Y/Min/Value`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setiCOMOXAPrmyYMinValue, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyYMinValue,
            "add"
          );
        }
      });

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=iCOMOX/AccelerometerPrimary/Z/Max/Value`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setiCOMOXAPrmyZMaxValue, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyZMaxValue,
            "add"
          );
        }
      });

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=iCOMOX/AccelerometerPrimary/Z/Min/Value`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setiCOMOXAPrmyZMinValue, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyZMinValue,
            "add"
          );
        }
      });

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=AutomationSetpoints/Motor30RPM`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setAtmtnSetPointsMotor30Rpm, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setAtmtnSetPointsMotor30Rpm,
            "add"
          );
        }
      });

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=AutomationSetpoints/MotorFullRPM`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setAtmtnSetPointMotorFullRpm, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setAtmtnSetPointMotorFullRpm,
            "add"
          );
        }
      });

    fetch(
      `https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=ABBDriveSpeed`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validateAndSetFunction([], setABBDriveSpeed, "clear");
        for (var i = responseJson.length - 1; i >= 0; i--) {
          validateAndSetFunction([responseJson[i]], setABBDriveSpeed, "add");
        }
      });
  };

  const {
    globalData,
    iCOMOX_Temperature_Value,
    AutomationSetpoints_Motor30RPM,
    AutomationSetpoints_MotorFullRPM,
    iCOMOXAccPrimaryXMaxValue,
    iCOMOXAccPrimaryXMinValue,
    iCOMOXAccPrimaryYMaxValue,
    iCOMOXAccPrimaryYMinValue,
    iCOMOXAccPrimaryZMaxValue,
    iCOMOXAccPrimaryZMinValue,
    ABBDrive_Speed,
  } = useGlobalContext();

  const [iCOMOXAPrmyXMaxValue, setiCOMOXAPrmyXMaxValue] = useState([]);
  const [iCOMOXAPrmyXMinValue, setiCOMOXAPrmyXMinValue] = useState([]);

  const [iCOMOXAPrmyYMaxValue, setiCOMOXAPrmyYMaxValue] = useState([]);
  const [iCOMOXAPrmyYMinValue, setiCOMOXAPrmyYMinValue] = useState([]);

  const [iCOMOXAPrmyZMaxValue, setiCOMOXAPrmyZMaxValue] = useState([]);
  const [iCOMOXAPrmyZMinValue, setiCOMOXAPrmyZMinValue] = useState([]);

  const [atmtnSetPointsMotor30Rpm, setAtmtnSetPointsMotor30Rpm] = useState([]);
  const [atmtnSetPointMotorFullRpm, setAtmtnSetPointMotorFullRpm] = useState(
    []
  );

  const [aBBDriveSpeed, setABBDriveSpeed] = useState([]);

  const handleChangeArea = (areaName) => {};

  const validateAndSetFunction = (
    recivedArrayName,
    setFunctionName,
    action
  ) => {
    if (recivedArrayName.length > 0) {
      setFunctionName((oldArray) => {
        let oldData = [...oldArray];
        if (oldData.length > 5) {
          oldData.shift();
          return [...oldData, recivedArrayName[0]];
        } else {
          return [...oldData, recivedArrayName[0]];
        }
      });
    } else if (action === "clear") {
      setFunctionName((oldArray) => {
        return [];
      });
    }
  };

  useEffect(() => {
    validateAndSetFunction(
      iCOMOXAccPrimaryXMaxValue,
      setiCOMOXAPrmyXMaxValue,
      "add"
    );
    validateAndSetFunction(
      iCOMOXAccPrimaryXMinValue,
      setiCOMOXAPrmyXMinValue,
      "add"
    );

    validateAndSetFunction(
      iCOMOXAccPrimaryYMaxValue,
      setiCOMOXAPrmyYMaxValue,
      "add"
    );
    validateAndSetFunction(
      iCOMOXAccPrimaryYMinValue,
      setiCOMOXAPrmyYMinValue,
      "add"
    );

    validateAndSetFunction(
      iCOMOXAccPrimaryZMaxValue,
      setiCOMOXAPrmyZMaxValue,
      "add"
    );
    validateAndSetFunction(
      iCOMOXAccPrimaryZMinValue,
      setiCOMOXAPrmyZMinValue,
      "add"
    );

    validateAndSetFunction(
      AutomationSetpoints_Motor30RPM,
      setAtmtnSetPointsMotor30Rpm,
      "add"
    );
    validateAndSetFunction(
      AutomationSetpoints_MotorFullRPM,
      setAtmtnSetPointMotorFullRpm,
      "add"
    );

    validateAndSetFunction(ABBDrive_Speed, setABBDriveSpeed, "add");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalData]);

  useEffect(() => {
    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=iCOMOX/AccelerometerPrimary/X/Max/Value"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyXMaxValue,
            "add"
          );
        }
      });

    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=iCOMOX/AccelerometerPrimary/X/Min/Value"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyXMinValue,
            "add"
          );
        }
      });

    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=iCOMOX/AccelerometerPrimary/Y/Max/Value"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyYMaxValue,
            "add"
          );
        }
      });

    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=iCOMOX/AccelerometerPrimary/Y/Min/Value"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyYMinValue,
            "add"
          );
        }
      });

    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=iCOMOX/AccelerometerPrimary/Z/Max/Value"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyZMaxValue,
            "add"
          );
        }
      });

    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=iCOMOX/AccelerometerPrimary/Z/Min/Value"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setiCOMOXAPrmyZMinValue,
            "add"
          );
        }
      });

    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=AutomationSetpoints/Motor30RPM"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setAtmtnSetPointsMotor30Rpm,
            "add"
          );
        }
      });

    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=AutomationSetpoints/MotorFullRPM"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction(
            [responseJson[i]],
            setAtmtnSetPointMotorFullRpm,
            "add"
          );
        }
      });

    fetch(
      "https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=ABBDriveSpeed"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 4; i >= 0; i--) {
          validateAndSetFunction([responseJson[i]], setABBDriveSpeed, "add");
        }
      });
  }, []);

  return (
    <>
      <Card className={classes.root}>
        <Grid container spacing={2} display="flex">
          <Grid xs={2.5} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={"Model Number : "} labelValue={"SV8050"} />
            </Box>
          </Grid>
          <Grid xs={2.5} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard
                lableName={"Serial Number : "}
                labelValue={"LR000B-ER34 "}
              />
            </Box>
          </Grid>
          <Grid xs={2.5} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard
                lableName={"Description : "}
                labelValue={"iCOMAX Monitor "}
              />
            </Box>
          </Grid>
          <Grid xs={2.5} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard
                lableName={"Location : "}
                labelValue={"Centennial "}
              />
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

        <Grid container spacing={2} display="flex">
          <Grid item xs={3} className={classes.marginForGrid}>
            <DeviceDetailCard
              imagePath={PumpMonitorImage}
              deviceNameBlueClr={"Pump Monitor"}
              deviceDetailBlackColor={""}
              deviceDetailBlackColorSiUnit={""}
              deviceReading={""}
              classNameUsed={classes.currentMotorImageWidth}
            />
            <Card className={classes.root}>
              <Grid
                container
                spacing={2}
                display="flex"
                className={classes.headerCardCenter}
              >
                <Grid xs={6} item>
                  <b> Status History </b>
                </Grid>
                <Grid xs={3} item>
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

            <Card style={{ marginTop: "5px" }} className={classes.root}>
              <Grid
                container
                spacing={2}
                display="flex"
                className={classes.headerCardCenter}
              >
                <Grid xs={6} item>
                  <b> Alerts : 7 </b>
                </Grid>
                <Grid xs={3} item>
                  <Button
                    style={{ width: "134%" }}
                    className={classes.buttonColor}
                    variant="contained"
                  >
                    Details
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={8}>
            <MultipleTabs
              newBackGrndColr={"rgba(255, 99, 132, 1)"}
              newBorderColr={"rgba(255, 99, 132, 1)"}
              allLabelNames={[
                "iCOMOX/AccelerometerPrimary/X/Max/Value",
                "iCOMOX/AccelerometerPrimary/X/Min/Value",
                "iCOMOX/AccelerometerPrimary/Y/Max/Value",
                "iCOMOX/AccelerometerPrimary/Y/Min/Value",
                "iCOMOX/AccelerometerPrimary/Z/Max/Value",
                "iCOMOX/AccelerometerPrimary/Z/Min/Value",
              ]}
              arrayOfRespectiveDataset={[
                iCOMOXAPrmyXMaxValue,
                iCOMOXAPrmyXMinValue,
                iCOMOXAPrmyYMaxValue,
                iCOMOXAPrmyYMinValue,
                iCOMOXAPrmyZMaxValue,
                iCOMOXAPrmyZMinValue,
              ]}
              dataSetbackgroundColor={[
                "rgba(255, 99, 132, 1)",
                "cyan",
                "green",
                "pink",
                "red",
                "blue",
              ]}
              siUnit={"Amplitude [dB g]"}
              iCOMOX_Temperature_Value={iCOMOX_Temperature_Value}
              atmtnSetPointsMotor30Rpm={atmtnSetPointsMotor30Rpm}
              atmtnSetPointMotorFullRpm={atmtnSetPointMotorFullRpm}
              siUnitForDonut={"RPM"}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} display="flex">
          <Grid xs={4} item>
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom>
                <b>Pump Motor Speed</b>
              </Typography>

              <GlobalChart
                newBackGrndColr={"yellow"}
                newBorderColr={"yellow"}
                allLabelNames={[
                  "AutomationSetpoints/Motor30RPM",
                  "AutomationSetpoints/MotorFullRPM",
                  "ABBDriveSpeed",
                ]}
                arrayOfRespectiveDataset={[
                  atmtnSetPointsMotor30Rpm,
                  atmtnSetPointMotorFullRpm,
                  aBBDriveSpeed,
                ]}
                dataSetbackgroundColor={["red", "green", "blue"]}
                siUnit={"RPM"}
                heightForChart={300}
              />
            </Box>
          </Grid>
          <Grid xs={8} item>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <RowRadioButtonsGroup handleChangeArea={handleChangeArea} />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6}>
                <LineChart
                  labelNames={[
                    0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
                    10000, 11000, 12000, 13000, 14000, 15000,
                  ]}
                  datasetsLabel={"Temperature 1"}
                  datasetData={[
                    0.005, 0.0065, 0.006, 0.008, 0, 0.0085, 0, 0.008, 0.005,
                    0.0065, 0.006, 0.008, 0.005, 0.0065, 0.006, 0,
                  ]}
                  datasetBackgroundColor={"rgba(89, 206, 86, 1)"}
                  scalesYTitleText={"Amplitude [dB g]"}
                  scalesXTitleText={"Frequency (Hz)"}
                  pluginsTitleText={"Magnetic Field Spectrum"}
                />
              </Grid>

              <Grid item xs={6} sm={6}>
                <LineChart
                  labelNames={[
                    0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100,
                    1200, 1300, 1400, 1500,
                  ]}
                  datasetsLabel={"Temperature 1"}
                  datasetData={[
                    80, 50, 65, 60, 80, 50, 65, 60, 0, 50, 65, 60, 80, 0, 85, 0,
                  ]}
                  datasetBackgroundColor={"rgba(75, 192, 192, 1)"}
                  scalesYTitleText={"Amplitude [dB g]"}
                  scalesXTitleText={"Frequency (Hz)"}
                  pluginsTitleText={"Accoustic Spectrum"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default PumpMonitor;
