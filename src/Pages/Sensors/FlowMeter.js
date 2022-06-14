import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import GlobalChart from "../ReuseableComponents/Chart/GlobalChart";

import { Chart, registerables } from "chart.js";
import { useChartValuesSubscription } from "../../Hooks/useChartValuesSubscription";
import {
  historyOptions,
  historyOptionsKeys,
  useHistoryOptions,
} from "../../Hooks/useHistoryOptions";

Chart.register(...registerables);

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    width: "18%",
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

const FlowMeter = () => {
  const classes = useStyles();

  const { history, handleChangeHistory } = useHistoryOptions();
  const sensorTypes = ["Flow/UpperTankOutgoing", "Flow/UpperTankIncoming"];
  const [values, loading] = useChartValuesSubscription(
    sensorTypes.join(","),
    history
  );
  const [flowUprTnkOutgng, flowUprTnkIncmng] = values;

  return (
    <>
      <Card className={classes.root}>
        <Grid container spacing={2} display="flex">
          <Grid xs={4} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard
                lableName={"Description : "}
                labelValue={"Vortex Flow Meter"}
              />
            </Box>
          </Grid>
          <Grid xs={3} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={"Model Number : "} labelValue={"SV8050"} />
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
              imagePath="/flowMeter.png"
              deviceNameBlueClr={"Upper Tank Outgoing Flow Meter "}
              deviceDetailBlackColor={""}
              deviceDetailBlackColorSiUnit={""}
              deviceReading={""}
              classNameUsed={classes.media}
            />
          </Grid>
          <Grid xs={6} item>
            <DeviceDetailCard
              imagePath="/flowMeter.png"
              deviceNameBlueClr={"Upper Tank Incoming Flow Meter "}
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
                      onChange={handleChangeHistory}
                      inputProps={{
                        name: "statusHistory",
                        id: "statusHistory",
                      }}
                      defaultValue="lasthour"
                    >
                      {historyOptionsKeys.map((value, index) => {
                        return (
                          <MenuItem value={value} key={index * 2.54}>
                            {historyOptions[value]}
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
                <b>Upper Tank Outgoing Flow Levels</b>
              </Typography>

              <GlobalChart
                newBackGrndColr={"brown"}
                newBorderColr={"brown"}
                allLabelNames={["Flow/UpperTankOutgoing"]}
                arrayOfRespectiveDataset={[flowUprTnkOutgng]}
                dataSetbackgroundColor={["brown"]}
                siUnit={"GPM"}
                heightForChart={260}
                loading={loading}
                history={history}
              />
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom>
                <b>Upper Tank Incoming Flow Levels</b>
              </Typography>
              <GlobalChart
                newBackGrndColr={"#40E0D0"}
                newBorderColr={"#40E0D0"}
                allLabelNames={["Flow/UpperTankIncoming"]}
                arrayOfRespectiveDataset={[flowUprTnkIncmng]}
                dataSetbackgroundColor={["#40E0D0"]}
                siUnit={"GPM"}
                heightForChart={260}
                loading={loading}
                history={history}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default FlowMeter;
