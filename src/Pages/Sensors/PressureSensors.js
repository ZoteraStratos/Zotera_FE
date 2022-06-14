import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";

import GlobalChart from "../ReuseableComponents/Chart/GlobalChart";
import { useChartValuesSubscription } from "../../Hooks/useChartValuesSubscription";
import { useHistoryOptions } from "../../Hooks/useHistoryOptions";

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
    width: "153%",
  },
  dropDownBtnStyle: {
    backgroundColor: "#26616a",
    color: "white",
    paddingTop: "4px",
    paddingLeft: "15px",
    paddingBottom: "4px",
    paddingRight: "14px",
    borderRadius: "5px",
    width: "162%",
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

const PresureSensor = () => {
  const classes = useStyles();
  const { history, handleChangeHistory } = useHistoryOptions();

  const sensorTypes = [
    "PumpInletPressure/Value",
    "UpperTankIncomingPressure/Value",
  ];
  const [values, loading] = useChartValuesSubscription(
    sensorTypes.join(","),
    history
  );
  const [pmpInltPresrValue, uprTnkIncmngPrsurValue] = values;

  return (
    <>
      <Card className={classes.root}>
        <Grid container spacing={2} display="flex">
          <Grid xs={4} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard
                lableName={"Description : "}
                labelValue={"Pressure Sensor"}
              />
            </Box>
          </Grid>
          <Grid xs={3} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={"Model Number : "} labelValue={"PN2694"} />
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
              imagePath="/pressureSensorDeviceIndicator.png"
              deviceNameBlueClr={"Pump Inlet Pressure Sensor"}
              deviceDetailBlackColor={""}
              deviceDetailBlackColorSiUnit={""}
              deviceReading={""}
              classNameUsed={classes.media}
            />
          </Grid>
          <Grid xs={6} item>
            <DeviceDetailCard
              imagePath="/pressureSensorDeviceIndicator.png"
              deviceNameBlueClr={"Upper Tank Incoming Pressure Sensor "}
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
                <Grid xs={6} item>
                  <b>Status History </b>
                </Grid>
                <Grid xs={3} item>
                  <FormControl>
                    <Select
                      className={classes.dropDownBtnStyle}
                      onChange={handleChangeHistory}
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
                <Grid xs={6} item>
                  <b> Alerts : 7 </b>
                </Grid>
                <Grid xs={3} item>
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
              <Typography gutterBottom>Pump Inlet Pressure Levels</Typography>
              <GlobalChart
                newBackGrndColr={"blue"}
                newBorderColr={"blue"}
                allLabelNames={["PumpInletPressure/Value"]}
                arrayOfRespectiveDataset={[pmpInltPresrValue]}
                dataSetbackgroundColor={["blue"]}
                siUnit={"PSI"}
                heightForChart={250}
                loading={loading}
              />
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom>
                Upper Tank Incoming Pressure Levels
              </Typography>
              <GlobalChart
                newBackGrndColr={"blue"}
                newBorderColr={"blue"}
                allLabelNames={["UpperTankIncomingPressure/Value"]}
                arrayOfRespectiveDataset={[uprTnkIncmngPrsurValue]}
                dataSetbackgroundColor={["rgb(234, 57, 169)"]}
                siUnit={"PSI"}
                heightForChart={250}
                loading={loading}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default PresureSensor;
