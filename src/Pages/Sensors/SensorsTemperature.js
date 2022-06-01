import React, { useState, useEffect } from "react";
import { Typography, Box, FormControl, Select, MenuItem, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import PumpMonitor from '../../Images/pumpMonitor.png'
import TemperatureSensorImage from '../../Images/temperatureSensor.png';
import Charts from "../ReuseableComponents/Chart/Charts";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import DonutChart from "../ReuseableComponents/Chart/DonutChart";
import { useGlobalContext } from "../../Components/context";
import GlobalChart from '../ReuseableComponents/Chart/GlobalChart'


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
    top: '41%',
    left: '24%',
    transform: 'translate(-50 %, -50 %)',
  },
  lowerImageStyle: {
    position: "absolute",
    top: '41%',
    right: '32%',
    transform: 'translate(-50 %, -50 %)',
  },
  centerText: {
    flexGrow: 1,
    textAlign: 'center',
    alignItems: 'center'
  },
  root: {
    width: '100%',

  },
  media: {
    width: '10%'
  },
  headerCardCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonColor: {
    backgroundColor: '#26616a',
    color: 'white'
  },
  dropDownBtnStyle: {
    backgroundColor: '#26616a',
    color: 'white',
    paddingTop: '4px',
    paddingLeft: '15px',
    paddingBottom: '4px',
    paddingRight: '14px',
    borderRadius: '5px'
  },
  alignCenter: {
    textAlign: 'center'
  },
  pumpMonitorImage: {
    width: '40%'
  }
});


const SensorsTemperature = () => {


  const { waterTempsRawWaterTemp, iCOMOXTemperatureValue, globalData, TemperatureSensor } = useGlobalContext();

  console.log("TemperatureSensor", TemperatureSensor)
  // const [values, setValues] = React.useState([
  //   "1 week",
  //   "2 week",
  //   "3 week",
  //   "4 week",
  // ]);
  const [selected, setSelectedHistory] = useState("Last 1 Hour");

  const [iCOMOXTmpertrValue, setiCOMOXTmpertrValue] = useState([]);
  const [wtrTmpsRawWtrTmp, setWaterTempsRawWaterTemp] = useState([]);
  const [temperatureSensor, setTemperatureSensor] = useState(0);

  const pmpInletHistoryOption = {
    lasthour: "Last 1 Hour",
    lastday: "Last 1 Day",
    lastWeek: "Last 1 Week",
    lastTwoweeks: "Last 2 Week",
  };

  const pmpInletHistoryOptionKeys = Object.keys(pmpInletHistoryOption);


  const pmpInletHandleChange = (event) => {
    event.preventDefault();
    setSelectedHistory(event.target.value);

    fetch(`https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=Water/Temps/RawWaterTemp`)
    //fetch(`http://localhost:8080/getListData?history=${event.target.value}&sensorType=Water/Temps/RawWaterTemp`)
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataPmpInlet(responseJson)
        validateAndSetFunction([], setWaterTempsRawWaterTemp, "clear")
        for(var i=responseJson.length-1; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setWaterTempsRawWaterTemp, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });

    fetch(`https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=iCOMOX/Temperature/Value`)
    //fetch(`http://localhost:8080/getListData?history=${event.target.value}&sensorType=iCOMOX/Temperature/Value`)
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataUpperTank(responseJson)
        validateAndSetFunction([], setiCOMOXTmpertrValue, "clear")
        for(var i=responseJson.length-1; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setiCOMOXTmpertrValue, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });
  }

  function handleChange(event) {
    setSelectedHistory(event.target.value);
  }
  const validateAndSetFunction = (recivedArrayName, setFunctionName, action) => {
    if (recivedArrayName.length > 0) {
      //  setFunctionName(recivedArrayName)

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
    else if (action=='clear'){
      setFunctionName(oldArray => {
        return []
      })
    }
  }

  useEffect(() => {
    validateAndSetFunction(iCOMOXTemperatureValue, setiCOMOXTmpertrValue)
    validateAndSetFunction(waterTempsRawWaterTemp, setWaterTempsRawWaterTemp)
  }, [globalData])

  useEffect(() => {
    fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=Water/Temps/RawWaterTemp')
    //fetch('http://localhost:8080/getListData?history=lasthour&sensorType=Water/Temps/RawWaterTemp')
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataPmpInlet(responseJson)
        for(var i=14; i>=0; i--){             
          validateAndSetFunction([responseJson[i]], setWaterTempsRawWaterTemp, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });

    fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=iCOMOX/Temperature/Value')
    //fetch('http://localhost:8080/getListData?history=lasthour&sensorType=iCOMOX/Temperature/Value')
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataUpperTank(responseJson)
        for(var i=14; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setiCOMOXTmpertrValue, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });
  }, [])

  useEffect(() => {

    if (TemperatureSensor) {
      //setTemperatureSensor( parseFloat(TemperatureSensor).toFixed(3) )
      console.log("TemperatureSensor new ", TemperatureSensor)
      setTemperatureSensor(TemperatureSensor)
    }

  }, [TemperatureSensor])

  const classes = useStyles();

  return (
    <React.Fragment className={classes.container}>
      <Grid container spacing={2} display="flex"  >
        <Grid xs={4} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={'Description : '} labelValue={'Temperature Sensor'} />
          </Box>
        </Grid>
        <Grid xs={3} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={'Model Number : '} labelValue={'TA2303'} />
          </Box>
        </Grid>
        <Grid xs={3} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={'Location : '} labelValue={'Centennial '} />
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
            imagePath={TemperatureSensorImage}
            deviceNameBlueClr={'Temperature Sensor '}
            deviceDetailBlackColor={' '}
            deviceDetailBlackColorSiUnit={''}
            deviceReading={''}
            classNameUsed={classes.media} />

        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          {/* <DonutChart labelName={'Temp'} siUnit={' F'} values={27} /> */}
          {/* <DonutChart labelName={'Temperature'} siUnit={' F'} presentRpm={temperatureSensor} maxRpm={increment(100)} /> */}
          <DonutChart labelName={'Temperature'} siUnit={' F'} presentRpm={temperatureSensor} customSegmentStops={increment(100)} maxValue={100} />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3} >
          <br />
          <DeviceDetailCard
            imagePath={PumpMonitor}
            deviceNameBlueClr={'Pump Monitor '}
            deviceDetailBlackColor={' '}
            deviceDetailBlackColorSiUnit={''}
            deviceReading={''}
            classNameUsed={classes.pumpMonitorImage} />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          {/* <DonutChart labelName={'Speed'} siUnit={' F'} presentRpm={98.4} maxRpm={increment(100)} /> */}
          <DonutChart labelName={'Temperature'} siUnit={' F'} presentRpm={0} customSegmentStops={increment(100)} maxValue={100} />

        </Grid>
      </Grid>

      <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
        <Grid xs={4} item  >
          <Card className={classes.root} >
            <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
              <Grid xs={7} item >
                <b> Status History </b>
              </Grid>
              <Grid xs={2} item>
                <FormControl>
                  {/* <Select className={classes.dropDownBtnStyle}
                    value={selected}
                    onChange={handleChange}
                    inputProps={{
                      name: "statusHistory",
                      id: "statusHistory",

                    }}
                  >
                    {values.map((value, index) => {
                      return <MenuItem value={value} key={index * 2.54}>{value}</MenuItem>;
                    })}
                  </Select> */}
                  <Select className={classes.dropDownBtnStyle}
                      // value={selected ? selected : ''}
                      onChange={pmpInletHandleChange}
                      inputProps={{
                        name: "statusHistory",
                        id: "statusHistory",
                      }}
                      defaultValue='lasthour'
                    >

                      {pmpInletHistoryOptionKeys.map((value, index) => {
                        return <MenuItem value={value} key={index * 2.54}>{pmpInletHistoryOption[value]}</MenuItem>;
                      })}
                    </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
        <Grid xs={4} item >
          <Card className={classes.root} >
            <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
              <Grid xs={7} item >
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
            <Typography gutterBottom  >
              <b>Water Temperature Levels</b>
            </Typography>
            {/* <Charts newBackGrndColr={'red'} newBorderColr={'red'} newLabelName={'Water/Temps/RawWaterTemp'} /> */}

            <GlobalChart
              newBackGrndColr={'red'}
              newBorderColr={'red'}
              allLabelNames={['Water/Temps/RawWaterTemp']}
              arrayOfRespectiveDataset={[wtrTmpsRawWtrTmp]}
              dataSetbackgroundColor={['red']}
              siUnit={'F'}
              heightForChart={250}
            />

          </Box>
        </Grid>
        <Grid xs={6} item>
          <Box className={classes.centerText}>
            <br />
            <Typography gutterBottom  >
              <b>Pump Motor Temperature Levels</b>
            </Typography>
            {/* <Charts newBackGrndColr={'yellow'} newBorderColr={'yellow'} newLabelName={'iCOMOX/Temperature/Value'} /> */}
            <GlobalChart
              newBackGrndColr={'rgb(56, 213, 169)'}
              newBorderColr={'rgb(56, 213, 169)'}
              allLabelNames={['iCOMOX/Temperature/Value']}
              arrayOfRespectiveDataset={[iCOMOXTmpertrValue]}
              dataSetbackgroundColor={['rgb(56, 213, 169)']}
              siUnit={'F'}
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
    newArray.push(counter)
  }
  return newArray;
}


export default SensorsTemperature;