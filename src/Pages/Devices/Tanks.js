import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReuseableTank from '../ReuseableComponents/ReusableTank';
import TankImage from '../../Images/tankImage.png'
import LineChart from "../ReuseableComponents/Chart/LineChart";
import { DeviceValue, DeviceValueWithStatus } from "../ReuseableComponents/DeviceValue";
import Charts from "../ReuseableComponents/Chart/Charts";
import { useGlobalContext } from "../../Components/context";
import GlobalChart from '../ReuseableComponents/Chart/GlobalChart'
import { HeaderCard } from "../ReuseableComponents/HeaderCard";

const useStyles = makeStyles({
  container: {
    display: "flex"
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
    top: '60%',
    left: '55%',
    transform: 'translate(-50 %, -50 %)',
  },
  lowerImageStyle: {
    position: "absolute",
    top: '60%',
    right: '14%',
    transform: 'translate(-50 %, -50 %)',
  },
  centerText: {
    flexGrow: 1,
    textAlign: 'center',
    alignItems: 'center'
  },
  boxHeightForLineChart: {
    height: "42%"
  }
});


const Tanks = () => {

  const classes = useStyles();
  // const [lineChartData, setLineChartData] = useState([]);
  const [globalDataForTank, setGlobalDataForTank] = useState([]);

  const [flowUprTnkOutgng, setFlowUprTnkOutgng] = useState([]);
  const [flowUprTnkIncmng, setFlowUprTnkIncmng] = useState([]);
  const [pmpInltPresrValue, setPmpInltPresrValue] = useState([]);
  const [uprTnkIncmngPresurValue, setUprTnkIncmngPresurValue] = useState([]);

  const { UpperTankLevel = 0,
    LowerTankLevel = 0,
    globalData,
    flowUpperTankOutgoing,
    flowUpperTankIncoming,
    pumpInletPressure_Value,
    upperTankIncomingPressureValue
  } = useGlobalContext();

  const validateAndSetFunction = (recivedArrayName, setFunctionName) => {
    if (recivedArrayName.length > 0) {
      // setFunctionName(recivedArrayName)
      setFunctionName(oldArray => {
        let oldData = [...oldArray];
        if (oldData.length > 15) {
          oldData.shift();
          return [...oldData, recivedArrayName[0]]
        } else {
          return [...oldData, recivedArrayName[0]]
        }
      })
      
    }
  }

  useEffect(() => {
    validateAndSetFunction(flowUpperTankOutgoing, setFlowUprTnkOutgng)
    validateAndSetFunction(flowUpperTankIncoming, setFlowUprTnkIncmng)
    validateAndSetFunction(pumpInletPressure_Value, setPmpInltPresrValue)
    validateAndSetFunction(upperTankIncomingPressureValue, setUprTnkIncmngPresurValue)
  }, [globalData])

  useEffect(() => {
     fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=Flow/UpperTankOutgoing')
    //fetch('http://localhost:8080/getListData?history=lasthour&sensorType=Flow/UpperTankOutgoing')
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataPmpInlet(responseJson)
        for(var i=responseJson.length-1; i>=0; i--){             
          validateAndSetFunction([responseJson[i]], setFlowUprTnkOutgng)
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });

     fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=Flow/UpperTankIncoming')
    //fetch('http://localhost:8080/getListData?history=lasthour&sensorType=Flow/UpperTankIncoming')
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataUpperTank(responseJson)
        for(var i=responseJson.length-1; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setFlowUprTnkIncmng)
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });

    fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=PumpInletPressure/Value')
    //fetch('http://localhost:8080/getListData?history=lasthour&sensorType=PumpInletPressure/Value')
    .then((response) => response.json())
    .then((responseJson) => {
      // setOldDataUpperTank(responseJson)
      for(var i=responseJson.length-1; i>=0; i--){
        validateAndSetFunction([responseJson[i]], setPmpInltPresrValue)
      }
    })
    .catch(error => {
      // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
      // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
    });

    fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=UpperTankIncomingPressure/Value')
     //fetch('http://localhost:8080/getListData?history=lasthour&sensorType=UpperTankIncomingPressure/Value')
     .then((response) => response.json())
     .then((responseJson) => {
       // setOldDataUpperTank(responseJson)
       for(var i=responseJson.length-1; i>=0; i--){
         validateAndSetFunction([responseJson[i]], setUprTnkIncmngPresurValue)
       }
     })
     .catch(error => {
       // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
       // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
     });
  }, [])

  // useEffect(() => {

  //   if (lineChartData) {
  //     // console.log("lineChartData", lineChartData)
  //   }
  // }, [lineChartData])

  return (
    <React.Fragment className={classes.container}>

      <Grid container spacing={2} display="flex"  >
        <Grid xs={3} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={'Model Number : '} labelValue={'SV8050'} />
          </Box>
        </Grid>
        <Grid xs={3} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={'Serial Number : '} labelValue={'LR000B-ER34 '} />
          </Box>
        </Grid>

      </Grid>

      <Grid container spacing={1} justify="flex-start">
        <Grid item xs={12} sm={6} md={2} lg={2}>
          {/* <ReuseableTank imageName={"Upper Tank Level"} imagetank={TankImage} tankValue={`${parseFloat(UpperTankLevel).toFixed(2)}%`} classsForImage={classes.upperImageStyle} /> */}
          <ReuseableTank imageName={"Upper Tank Level"} imagetank={TankImage} tankValue={`${parseFloat(UpperTankLevel).toFixed(2)}%`} classsForImage={classes.upperImageStyle} />
          <br />
          <br />
          <br />
          {/* <Box className={classes.Box}>
            <Grid container justify="flex-start">
              <Grid item md={6} lg={6}>
                <b>Upper Tank Outgoing Valve</b>
              </Grid>
              <Grid item md={6} lg={6}>
                <DeviceValueWithStatus classNameUsed={classes.ltovVal} valueOne={'33'} deviceStatus={' Open '} />
              </Grid>
            </Grid>
          </Box> */}

        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}  >
          <Typography component="h4" variant="h6" className={classes.centerText}><b>Upper Tank Outgoing Flow</b></Typography>
          <Box className={classes.boxHeightForLineChart}>
            {/* <LineChart
              labelNames={[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300]}
              datasetsLabel={'Temperature 1'}
              datasetData={[0, 10, 20, 30, 40, 50, 60, 0, 80, 90, 100, 110, 120, 130, 140, 150]}
              datasetBackgroundColor={'black'}
              scalesYTitleText={'dP [mbar] DN25'}
              scalesXTitleText={'Q [I/min]'}
              pluginsTitleText={''}
              labelNameOne={'Flow/UpperTankOutgoing'}
            /> */}
            <GlobalChart
              newBackGrndColr={'#87CEEB'}
              newBorderColr={'#87CEEB'}
              allLabelNames={['Flow/UpperTankOutgoing']}
              arrayOfRespectiveDataset={[flowUprTnkOutgng]}
              dataSetbackgroundColor={['black']}
              siUnit={'dP [mbar] DN25'}
              heightForChart={250}
            />

          </Box>
          {/* <Box >
            <Grid container spacing={1} justify="flex-start">
              <Grid item md={9} lg={9}>
                <b>Upper Tank Outgoing Flow </b>
              </Grid>
              <Grid item md={1} lg={1}>
                <DeviceValue classNameUsed={classes.classsForImage} valueOne={" 70 "} />
              </Grid>
              <Grid item md={1} lg={1}>
                <b>GPM</b>
              </Grid>
            </Grid>
          </Box>  <Box>
            <Grid container spacing={1} justify="flex-start">
              <Grid item md={9} lg={9}>
                <b>Pump Inlet Pressure</b>
              </Grid>
              <Grid item md={1} lg={1}>
                <DeviceValue classNameUsed={classes.classsForImage} valueOne={" 17 "} />
              </Grid>
              <Grid item md={1} lg={1}>
                <b>PSI</b>
              </Grid>
            </Grid>
          </Box>  <Box className={classes.Box}>
            <Grid container spacing={1} justify="flex-start" className={classes.centerText}>
              <Grid item md={8} lg={8}>
                <b>Lower Tank Outgoing Valve</b>
              </Grid>
              <Grid item md={4} lg={4}>
                <DeviceValueWithStatus classNameUsed={classes.ltovVal} valueOne={'80'} deviceStatus={' Open '} />
              </Grid>
            </Grid>
          </Box> */}
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={2}>

          <ReuseableTank imageName={"Lower Tank Level"} imagetank={TankImage} tankValue={`${parseFloat(LowerTankLevel).toFixed(2)}%`} classsForImage={classes.lowerImageStyle} />
          <br />
          <br />
          <br />
          {/* <Box className={classes.Box}>
            <Grid container justify="flex-start">
              <Grid item md={6} lg={6}>
                <b>Upper Tank Incoming Valve</b>
              </Grid>
              <Grid item md={6} lg={6}>
                <DeviceValueWithStatus classNameUsed={classes.ltovVal} valueOne={'38'} deviceStatus={' Open '} />
              </Grid>
            </Grid>
          </Box> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography component="h4" variant="h6" className={classes.centerText}><b>Upper Tank Incoming Flow</b></Typography>
          <Box className={classes.boxHeightForLineChart}>
            {/* <LineChart
              labelNames={[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300]}
              datasetsLabel={'Temperature 1'}
              datasetData={[0, 10, 20, 30, 40, 50, 50, 50, 50, 90, 100, 110, 120, 130, 140, 150]}
              datasetBackgroundColor={'black'}
              scalesYTitleText={'dP [mbar] DN25'}
              scalesXTitleText={'Q [I/min]'}
              pluginsTitleText={''}
              labelNameOne={'Flow/UpperTankIncoming'}
              lineChartData={lineChartData}
            /> */}

            <GlobalChart
              newBackGrndColr={'#87CEEB'}
              newBorderColr={'#87CEEB'}
              allLabelNames={['Flow/UpperTankIncoming']}
              arrayOfRespectiveDataset={[flowUprTnkIncmng]}
              dataSetbackgroundColor={['black']}
              siUnit={'dP [mbar] DN25'}
              heightForChart={250}
            />
          </Box>
          {/* <Box >
            <Grid container spacing={1} justify="flex-start">
              <Grid item md={9} lg={9}>
                <b>Upper Tank Incoming Flow  </b>
              </Grid>
              <Grid item md={1} lg={1}>
                <DeviceValue classNameUsed={classes.classsForImage} valueOne={" 70 "} />
              </Grid>
              <Grid item md={1} lg={1}>
                <b>GPM</b>
              </Grid>
            </Grid>
          </Box> */}

          {/* <Box>
            <Grid container spacing={1} justify="flex-start">
              <Grid item md={9} lg={9}>
                <b>Upper Tank Incoming Pressure </b>
              </Grid>
              <Grid item md={1} lg={1}>
                <DeviceValue classNameUsed={classes.classsForImage} valueOne={" 17 "} />
              </Grid>
              <Grid item md={1} lg={1}>
                <b>PSI</b>
              </Grid>
            </Grid>
          </Box> */}

          {/* <Box className={classes.Box}>
            <Grid container spacing={1} justify="flex-start" className={classes.centerText}>
              <Grid item md={8} lg={9}>
                <b>Pump Motor Speed (RPM)</b>
              </Grid>
              <Grid item md={1} lg={1}>
                <DeviceValue classNameUsed={classes.classsForImage} valueOne={" 70 "} />
              </Grid>
              <Grid item md={1} lg={1}>
                <b>GPM</b>
              </Grid>
            </Grid>
          </Box> */}
        </Grid>
      </Grid>


      <Grid container spacing={2} display="flex">
        <Grid xs={6} item>
          <Box className={classes.centerText}>
            <br />
            <Typography gutterBottom  >
              <b>Pump Inlet Pressure</b>
            </Typography>
            {/* <Charts newBackGrndColr={'cyan'} newBorderColr={'cyan'} newLabelName={'PumpInletPressure/Value'} /> */}

            <GlobalChart
              newBackGrndColr={'cyan'}
              newBorderColr={'cyan'}
              allLabelNames={['PumpInletPressure/Value']}
              arrayOfRespectiveDataset={[pmpInltPresrValue]}
              dataSetbackgroundColor={['cyan']}
              siUnit={'PSI'}
              heightForChart={250}
            />
          </Box>
        </Grid>
        <Grid xs={6} item>
          <Box className={classes.centerText}>
            <br />
            <Typography gutterBottom  >
              <b>Upper Tank Incoming</b>
            </Typography>
            {/* <Charts newBackGrndColr={'red'} newBorderColr={'red'} newLabelName={'UpperTankIncomingPressure/Value'} /> */}
            <GlobalChart
              newBackGrndColr={'red'}
              newBorderColr={'red'}
              allLabelNames={['UpperTankIncomingPressure/Value']}
              arrayOfRespectiveDataset={[uprTnkIncmngPresurValue]}
              dataSetbackgroundColor={['red']}
              siUnit={'PSI'}
              heightForChart={250}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};



function labelsData(globalData, labelName) {
  let testFilterDataX = globalData.filter((element) => element.name === labelName).map(({ value, timestamp }) => {
    let microtimestamp = new Date(timestamp * 1);
    let dateToStr = microtimestamp.toUTCString().split(' ');
    let cleanDate = dateToStr[2] + ' ' + dateToStr[1] + ' ' + dateToStr[4];
    return cleanDate
  })

  return testFilterDataX

}


function dataForDataset(globalData, labelName) {
  let testFilterDataY = globalData.filter((element) => element.name === labelName).map(({ value, timestamp }) => {
    return value
  })

  return testFilterDataY
}
export default Tanks;