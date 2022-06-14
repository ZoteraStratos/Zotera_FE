import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReuseableTank from "../ReuseableComponents/ReusableTank";
import GlobalChart from "../ReuseableComponents/Chart/GlobalChart";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
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
    top: "60%",
    left: "55%",
    transform: "translate(-50 %, -50 %)",
  },
  lowerImageStyle: {
    position: "absolute",
    top: "60%",
    right: "14%",
    transform: "translate(-50 %, -50 %)",
  },
  centerText: {
    flexGrow: 1,
    textAlign: "center",
    alignItems: "center",
  },
  boxHeightForLineChart: {
    height: "42%",
  },
});

const Tanks = () => {
  const classes = useStyles();

  const sensorTypes = [
    "UpperTankLevel",
    "LowerTankLevel",
    "Flow/UpperTankOutgoing",
    "Flow/UpperTankIncoming",
    "PumpInletPressure/Value",
    "UpperTankIncomingPressure/Value",
  ];
  const [values, loading] = useChartValuesSubscription(sensorTypes.join(","));
  const [
    UpperTankLevels = [],
    LowerTankLevels = [],
    flowUprTnkOutgng,
    flowUprTnkIncmng,
    pmpInltPresrValue,
    uprTnkIncmngPresurValue,
  ] = values;
  const UpperTankLevel = UpperTankLevels[0] ? UpperTankLevels[0].y : 0;
  const LowerTankLevel = LowerTankLevels[0] ? LowerTankLevels[0].y : 0;

  return (
    <>
      <Grid container spacing={2} display="flex">
        <Grid xs={3} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={"Model Number : "} labelValue={"SV8050"} />
          </Box>
        </Grid>
        <Grid xs={3} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard
              lableName={"Serial Number : "}
              labelValue={"LR000B-ER34 "}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1} justifyContent="flex-start">
        <Grid item xs={12} sm={6} md={2} lg={2}>
          <ReuseableTank
            imageName={"Upper Tank Level"}
            imagetank="/tankImage.png"
            tankValue={`${parseFloat(UpperTankLevel).toFixed(2)}%`}
            classsForImage={classes.upperImageStyle}
          />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography
            component="h4"
            variant="h6"
            className={classes.centerText}
          >
            <b>Upper Tank Outgoing Flow</b>
          </Typography>
          <Box className={classes.boxHeightForLineChart}>
            <GlobalChart
              newBackGrndColr={"#87CEEB"}
              newBorderColr={"#87CEEB"}
              allLabelNames={["Flow/UpperTankOutgoing"]}
              arrayOfRespectiveDataset={[flowUprTnkOutgng]}
              dataSetbackgroundColor={["black"]}
              siUnit={"dP [mbar] DN25"}
              heightForChart={250}
              loading={loading}
              history="lasthour"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={2}>
          <ReuseableTank
            imageName={"Lower Tank Level"}
            imagetank="/tankImage.png"
            tankValue={`${parseFloat(LowerTankLevel).toFixed(2)}%`}
            classsForImage={classes.lowerImageStyle}
          />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography
            component="h4"
            variant="h6"
            className={classes.centerText}
          >
            <b>Upper Tank Incoming Flow</b>
          </Typography>
          <Box className={classes.boxHeightForLineChart}>
            <GlobalChart
              newBackGrndColr={"#87CEEB"}
              newBorderColr={"#87CEEB"}
              allLabelNames={["Flow/UpperTankIncoming"]}
              arrayOfRespectiveDataset={[flowUprTnkIncmng]}
              dataSetbackgroundColor={["black"]}
              siUnit={"dP [mbar] DN25"}
              heightForChart={250}
              loading={loading}
              history="lasthour"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} display="flex">
        <Grid xs={6} item>
          <Box className={classes.centerText}>
            <br />
            <Typography gutterBottom>
              <b>Pump Inlet Pressure</b>
            </Typography>

            <GlobalChart
              newBackGrndColr={"cyan"}
              newBorderColr={"cyan"}
              allLabelNames={["PumpInletPressure/Value"]}
              arrayOfRespectiveDataset={[pmpInltPresrValue]}
              dataSetbackgroundColor={["cyan"]}
              siUnit={"PSI"}
              heightForChart={250}
              loading={loading}
              history="lasthour"
            />
          </Box>
        </Grid>
        <Grid xs={6} item>
          <Box className={classes.centerText}>
            <br />
            <Typography gutterBottom>
              <b>Upper Tank Incoming</b>
            </Typography>
            <GlobalChart
              newBackGrndColr={"red"}
              newBorderColr={"red"}
              allLabelNames={["UpperTankIncomingPressure/Value"]}
              arrayOfRespectiveDataset={[uprTnkIncmngPresurValue]}
              dataSetbackgroundColor={["red"]}
              siUnit={"PSI"}
              heightForChart={250}
              loading={loading}
              history="lasthour"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Tanks;
