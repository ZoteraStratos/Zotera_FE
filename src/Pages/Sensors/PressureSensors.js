
import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography, Box, FormControl, Select, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import PressureSensorIndicator from "../../Images/pressureSensorDeviceIndicator.png"
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import Charts from "../ReuseableComponents/Chart/Charts";
import ListOfFileModal from "../ReuseableComponents/ListOfFileModal";
import ChartForCosmoData from "../ReuseableComponents/Chart/ChartForCosmoData";
import ChartForOldData from "../ReuseableComponents/Chart/ChartForOldData";

import { useGlobalContext } from "../../Components/context";
import GlobalChart from "../ReuseableComponents/Chart/GlobalChart";

const useStyles = makeStyles({
  root: {
    width: '100%',

  },
  media: {
    width: '4%'
  },
  headerCardCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonColor: {
    backgroundColor: '#26616a',
    color: 'white',
    width: '153%',
  },
  dropDownBtnStyle: {
    backgroundColor: '#26616a',
    color: 'white',
    paddingTop: '4px',
    paddingLeft: '15px',
    paddingBottom: '4px',
    paddingRight: '14px',
    borderRadius: '5px',
    width: '162%',
  },
  alignCenter: {
    textAlign: 'center'
  },

});


const PresureSensor = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [values, setValues] = useState([
    "Last 1 Hour",
    "Last 1 Day",
    "Last 1 Week",
    "Last 2 Week",
  ]);
  const [selectedPmpInlet, setSelectedPmpInlet] = useState("Last 1 Hour");
  const [oldData, setOldData] = useState([]);
  const [oldDataPmpInlet, setOldDataPmpInlet] = useState([]);
  const [oldDataUpperTank, setOldDataUpperTank] = useState([]);
  const [pmpInltPresrValue, setPmpInltPresrValue] = useState([]);
  const [uprTnkIncmngPrsurValue, setUprTnkIncmngPrsurValue] = useState([]);
  const { pumpInletPressure_Value, upperTankIncomingPressureValue, globalData } = useGlobalContext();

  const pmpInletHistoryOption = {
    lasthour: "Last 1 Hour",
    lastday: "Last 1 Day",
    lastWeek: "Last 1 Week",
    lastTwoweeks: "Last 2 Week",
  };

  const pmpInletHistoryOptionKeys = Object.keys(pmpInletHistoryOption);


  const pmpInletHandleChange = (event) => {
    event.preventDefault();
    setSelectedPmpInlet(event.target.value);

    // this.setState({
    //   [target.name]: target.value
    // });
    // fetch('https://wastewatertreatmentarrowdemoserver.azurewebsites.net/store-data', {
    //   method: 'POST',
    //   // We convert the React state to JSON and send it as the POST body
    //   body: JSON.stringify(this.state)
    // }).then(function (response) {
    //   // console.log(response)
    //   return response.json();
    // });

    fetch(`https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=PumpInletPressure/Value`)
    // fetch(`http://localhost:8080/getListData?history=${event.target.value}&sensorType=PumpInletPressure/Value`)
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataPmpInlet(responseJson)
          validateAndSetFunction([], setPmpInltPresrValue, "clear")
        for(var i=responseJson.length-1; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setPmpInltPresrValue, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });

    fetch(`https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=UpperTankIncomingPressure/Value`)
    // fetch(`http://localhost:8080/getListData?history=${event.target.value}&sensorType=UpperTankIncomingPressure/Value`)
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataUpperTank(responseJson)
          validateAndSetFunction([], setUprTnkIncmngPrsurValue, "clear")
        for(var i=responseJson.length-1; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setUprTnkIncmngPrsurValue, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });
  }

  const handleModalOpen = () => {
    setModalStatus(true)
  }

  const handleModalClose = () => {
    setModalStatus(false)
  }

  const handleOldDataPmpInlet = (data) => {
    setOldDataPmpInlet(data)
  }
  const handleOldData = (data) => {
    setOldData(data)
  }

  const classes = useStyles();


  useEffect(() => {
    if (oldData.length > 0) {
      const timer = setTimeout(() => {
        setModalStatus(false)
      }, 10000);
      return () => clearTimeout(timer);
    }

  }, [oldData]);


  const validateAndSetFunction = (recivedArrayName, setFunctionName, action) => {
    if (recivedArrayName.length > 0) {
      // setFunctionName(recivedArrayName)      
      setFunctionName(oldArray => {
        let oldData = [...oldArray];
        if (oldData.length > 15) {
          oldData.shift();
          return [...oldData,recivedArrayName[0]]
        } else {
          return [...oldData,recivedArrayName[0]]
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
    validateAndSetFunction(upperTankIncomingPressureValue, setUprTnkIncmngPrsurValue)
    validateAndSetFunction(pumpInletPressure_Value, setPmpInltPresrValue)
  }, [globalData])

  useEffect(() => {
    fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=PumpInletPressure/Value')
    // fetch('http://localhost:8080/getListData?history=lasthour&sensorType=PumpInletPressure/Value')
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataPmpInlet(responseJson)
        for(var i=14; i>=0; i--){             
          validateAndSetFunction([responseJson[i]], setPmpInltPresrValue, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });

    fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=UpperTankIncomingPressure/Value')
    // fetch('http://localhost:8080/getListData?history=lasthour&sensorType=UpperTankIncomingPressure/Value')
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataUpperTank(responseJson)
        for(var i=14; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setUprTnkIncmngPrsurValue, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });
  }, [])

  // useEffect(() => {
  //   setUprTnkIncmngPrsurValue(upperTankIncomingPressureValue);
  //   setPmpInltPresrValue(pumpInletPressure_Value);
  // }, [globalData])


  return (
    <>
      <Card className={classes.root}  >
        <Grid container spacing={2} display="flex"  >
          <Grid xs={4} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={'Description : '} labelValue={'Pressure Sensor'} />
            </Box>
          </Grid>
          <Grid xs={3} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={'Model Number : '} labelValue={'PN2694'} />
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

        <Grid container spacing={2} display="flex">
          <Grid xs={6} item>
            <DeviceDetailCard
              imagePath={PressureSensorIndicator}
              deviceNameBlueClr={'Pump Inlet Pressure Sensor'}
              deviceDetailBlackColor={''}
              deviceDetailBlackColorSiUnit={''}
              deviceReading={''}
              classNameUsed={classes.media} />
          </Grid>
          <Grid xs={6} item>
            <DeviceDetailCard
              imagePath={PressureSensorIndicator}
              deviceNameBlueClr={'Upper Tank Incoming Pressure Sensor '}
              deviceDetailBlackColor={''}
              deviceDetailBlackColorSiUnit={''}
              deviceReading={''}
              classNameUsed={classes.media} />
          </Grid>
        </Grid>

        <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
          <Grid xs={4} item  >
            <Card className={classes.root} >
              <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
                <Grid xs={6} item >
                  <b>Status History </b>
                </Grid>
                <Grid xs={3} item>
                  <FormControl>

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
                <Grid xs={6} item >
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

        {/* <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
          <Grid xs={4} item className={classes.headerCardCenter}>
            <Grid item>
              <Button className={classes.buttonColor} variant="contained" onClick={handleModalOpen}>
                View Previous Data
              </Button>
            </Grid>
          </Grid>
        </Grid> */}

        <Grid container spacing={2} display="flex">
          <Grid xs={6} item>
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom  >
                Pump Inlet Pressure Levels
              </Typography>
              {/* {(oldData.length > 0)
                ?
                <ChartForOldData newBackGrndColr={'blue'} newBorderColr={'blue'} newLabelName={'PumpInletPressure/Value'} oldData={oldData} />
                :
                // <Charts newBackGrndColr={'blue'} newBorderColr={'blue'} newLabelName={'PumpInletPressure/Value'} chartData={pumpInletPressure_Value}/>
                <GlobalChart
                  newBackGrndColr={'blue'}
                  newBorderColr={'blue'}
                  allLabelNames={['PumpInletPressure/Value']}
                  arrayOfRespectiveDataset={[pmpInltPresrValue]}
                  dataSetbackgroundColor={['blue']} siUnit={'PSI'}
                  heightForChart={220}
                />

              } */}
              {/* {(oldDataPmpInlet.length > 0)
                ?
                <ChartForCosmoData newBackGrndColr={'blue'} newBorderColr={'blue'} newLabelName={'PumpInletPressure/Value'} oldData={oldDataPmpInlet} />
                // <ChartForCosmoData newBackGrndColr={'blue'} newBorderColr={'blue'} newLabelName={'PumpInletPressure/Value'} oldData={pmpInltPresrValue} />
                : */}
                <GlobalChart
                  newBackGrndColr={'blue'}
                  newBorderColr={'blue'}
                  allLabelNames={['PumpInletPressure/Value']}
                  arrayOfRespectiveDataset={[pmpInltPresrValue]}
                  dataSetbackgroundColor={['blue']} siUnit={'PSI'}
                  heightForChart={250}
                />
              {/* } */}

            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom  >
                Upper Tank Incoming Pressure Levels
              </Typography>


              {/* {(oldData.length > 0)
                ?
                <ChartForOldData newBackGrndColr={'rgb(234, 57, 169)'} newBorderColr={'rgb(234, 57, 169)'} newLabelName={'UpperTankIncomingPressure/Value'} oldData={oldData} />
                :
                // <Charts newBackGrndColr={'yellow'} newBorderColr={'yellow'} newLabelName={'UpperTankIncomingPressure/Value'} />
                <GlobalChart
                  newBackGrndColr={'rgb(234, 57, 169)'}
                  newBorderColr={'rgb(234, 57, 169)'}
                  allLabelNames={['UpperTankIncomingPressure/Value']}
                  arrayOfRespectiveDataset={[uprTnkIncmngPrsurValue]}
                  dataSetbackgroundColor={['rgb(234, 57, 169)']} siUnit={'PSI'}
                  heightForChart={220} />
              } */}

              {/* {(oldDataUpperTank.length > 0)
                ?
                <ChartForCosmoData newBackGrndColr={'rgb(234, 57, 169)'} newBorderColr={'rgb(234, 57, 169)'} newLabelName={'UpperTankIncomingPressure/Value'} oldData={oldDataUpperTank} />
                // <ChartForCosmoData newBackGrndColr={'rgb(234, 57, 169)'} newBorderColr={'rgb(234, 57, 169)'} newLabelName={'UpperTankIncomingPressure/Value'} oldData={uprTnkIncmngPrsurValue} />
                : */}
                <GlobalChart
                  newBackGrndColr={'blue'}
                  newBorderColr={'blue'}
                  allLabelNames={['UpperTankIncomingPressure/Value']}
                  arrayOfRespectiveDataset={[uprTnkIncmngPrsurValue]}
                  dataSetbackgroundColor={['rgb(234, 57, 169)']} siUnit={'PSI'}
                  heightForChart={250}
                />
              {/* } */}
            </Box>
          </Grid>
        </Grid>

        <ListOfFileModal modalStatus={modalStatus} handleModalClose={handleModalClose} receiveOldData={handleOldData} />
      </Card>
    </>
  );
};

export default PresureSensor;