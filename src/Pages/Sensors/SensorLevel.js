import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import Button from "@material-ui/core/Button";
import GlobalChart from "../ReuseableComponents/Chart/GlobalChart";

import { Chart, registerables } from "chart.js";
import { useChartValuesSubscription } from "../../Hooks/useChartValuesSubscription";
Chart.register(...registerables);

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    width: "8%",
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
});

const pmpInletHistoryOption = {
  lasthour: "Last 1 Hour",
  lastday: "Last 1 Day",
  lastWeek: "Last 1 Week",
  lastTwoweeks: "Last 2 Week",
};

const pmpInletHistoryOptionKeys = Object.keys(pmpInletHistoryOption);

const SensorLevel = () => {
  const classes = useStyles();
  const [history, setHistory] = useState();

  const uprTnkLvlFrChart = useChartValuesSubscription(
    "UpperTankLevel",
    history
  );

  const lowrTnkLvlFrChart = useChartValuesSubscription(
    "LowerTankLevel",
    history
  );

  const pmpInletHandleChange = (event) => {
    setHistory(event.target.value);
  };

  return (
    <>
      <Card className={classes.root}>
        <Grid container spacing={2} display="flex">
          <Grid xs={4} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard
                lableName={"Description : "}
                labelValue={"Level Sensor"}
              />
            </Box>
          </Grid>
          <Grid xs={3} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={"Model Number : "} labelValue={"LR2050"} />
            </Box>
          </Grid>
          <Grid xs={3} item>
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
          <Grid xs={6} item>
            <DeviceDetailCard
              imagePath="/upperTankLevelSensorImage.png"
              deviceNameBlueClr={"Upper Tank Level Sensor "}
              deviceDetailBlackColor={""}
              deviceDetailBlackColorSiUnit={""}
              deviceReading={""}
              classNameUsed={classes.media}
            />
          </Grid>
          <Grid xs={6} item>
            <DeviceDetailCard
              imagePath="/upperTankLevelSensorImage.png"
              deviceNameBlueClr={"Lower Tank Level Sensor "}
              deviceDetailBlackColor={""}
              deviceDetailBlackColorSiUnit={""}
              deviceReading={""}
              classNameUsed={classes.media}
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
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom>
                <b>Upper Tank Levels</b>
              </Typography>
              {/* <Charts newBackGrndColr={'pink'} newBorderColr={'pink'} newLabelName={'UpperTankLevel'}/> */}
              <GlobalChart
                newBackGrndColr={"rgb(17, 160, 2)"}
                newBorderColr={"rgb(17, 160, 2)"}
                allLabelNames={["UpperTankLevel"]}
                arrayOfRespectiveDataset={[uprTnkLvlFrChart]}
                dataSetbackgroundColor={["rgb(17, 160, 2)"]}
                siUnit={"Level %"}
                heightForChart={250}
              />
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom>
                <b>Lower Tank Levels</b>
              </Typography>
              {/* <Charts newBackGrndColr={'green'} newBorderColr={'green'} newLabelName={'LowerTankLevel'} /> */}
              <GlobalChart
                newBackGrndColr={"pink"}
                newBorderColr={"pink"}
                allLabelNames={["LowerTankLevel"]}
                arrayOfRespectiveDataset={[lowrTnkLvlFrChart]}
                dataSetbackgroundColor={["pink"]}
                siUnit={"Level %"}
                heightForChart={250}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SensorLevel;
