import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Typography, Box, FormControl, Select, MenuItem } from "@material-ui/core";
import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import FlowMeterImage from "../../Images/flowMeter.png"
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import { useGlobalContext } from "../../Components/context"
import GlobalChart from '../ReuseableComponents/Chart/GlobalChart'

import Charts from "../ReuseableComponents/Chart/Charts";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const useStyles = makeStyles({
  root: {
    width: '100%',

  },
  media: {
    width: '18%'
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
  }
  // btnPadding:{
  //   //padding: '6.5px 18px'
  // }
});


const FlowMeter = () => {
  const classes = useStyles();

  const {
    globalData,
    flowUpperTankOutgoing,
    flowUpperTankIncoming,
  } = useGlobalContext();
  const [values, setValues] = React.useState([
    "1 week",
    "2 week",
    "3 week",
    "4 week",
  ]);
  const [selected, setSelectedHistory] = useState("Last 1 Hour");

  const [flowUprTnkOutgng, setFlowUprTnkOutgng] = useState([]);
  const [flowUprTnkIncmng, setFlowUprTnkIncmng] = useState([]);

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
    fetch(`https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=Flow/UpperTankOutgoing`)
    //fetch(`http://localhost:8080/getListData?history=${event.target.value}&sensorType=Flow/UpperTankOutgoing`)
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataPmpInlet(responseJson)
        validateAndSetFunction([], setFlowUprTnkOutgng, "clear")
        for(var i=responseJson.length-1; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setFlowUprTnkOutgng, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });

    fetch(`https://test-zotera-server-dev.azurewebsites.net/getListData?history=${event.target.value}&sensorType=Flow/UpperTankIncoming`)
    //fetch(`http://localhost:8080/getListData?history=${event.target.value}&sensorType=Flow/UpperTankIncoming`)
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataUpperTank(responseJson)
        validateAndSetFunction([], setFlowUprTnkIncmng, "clear")
        for(var i=responseJson.length-1; i>=0; i--){
          validateAndSetFunction([responseJson[i]], setFlowUprTnkIncmng, "add")
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
      //   setFunctionName(recivedArrayName)
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
    fetch('https://test-zotera-server-dev.azurewebsites.net/getListData?history=lasthour&sensorType=Flow/UpperTankOutgoing')
    //fetch('http://localhost:8080/getListData?history=lasthour&sensorType=Flow/UpperTankOutgoing')
      .then((response) => response.json())
      .then((responseJson) => {
        // setOldDataPmpInlet(responseJson)
        for(var i=responseJson.length-1; i>=0; i--){             
          validateAndSetFunction([responseJson[i]], setFlowUprTnkOutgng, "add")
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
          validateAndSetFunction([responseJson[i]], setFlowUprTnkIncmng, "add")
        }
      })
      .catch(error => {
        // setMsg('Please refresh page and try one more time .There has been a problem with your fetch operation:', error)
        // console.error('Please refresh page and try one more time .There has been a problem with your fetch operation:', error);
      });
  }, [])

  useEffect(() => {
    validateAndSetFunction(flowUpperTankOutgoing, setFlowUprTnkOutgng, "add")
    validateAndSetFunction(flowUpperTankIncoming, setFlowUprTnkIncmng, "add")
  }, [globalData])

  return (
    <>
      <Card className={classes.root}  >

        <Grid container spacing={2} display="flex"  >
          <Grid xs={4} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={'Description : '} labelValue={'Vortex Flow Meter'} />
            </Box>
          </Grid>
          <Grid xs={3} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={'Model Number : '} labelValue={'SV8050'} />
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
              imagePath={FlowMeterImage}
              deviceNameBlueClr={'Upper Tank Outgoing Flow Meter '}
              deviceDetailBlackColor={''}
              deviceDetailBlackColorSiUnit={''}
              deviceReading={''}
              classNameUsed={classes.media} />
          </Grid>
          <Grid xs={6} item>
            <DeviceDetailCard
              imagePath={FlowMeterImage}
              deviceNameBlueClr={'Upper Tank Incoming Flow Meter '}
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
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom  >
                <b>Upper Tank Outgoing Flow Levels</b>
              </Typography>
              {/* <Charts newBackGrndColr={'brown'} newBorderColr={'brown'} newLabelName={'Flow/UpperTankOutgoing'}/> */}

              <GlobalChart
                newBackGrndColr={'brown'}
                newBorderColr={'brown'}
                allLabelNames={['Flow/UpperTankOutgoing']}
                arrayOfRespectiveDataset={[flowUprTnkOutgng]}
                dataSetbackgroundColor={['brown']}
                siUnit={'GPM'}
                heightForChart={260}
              />

            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom  >
                <b>Upper Tank Incoming Flow Levels</b>
              </Typography>
              {/* <Charts newBackGrndColr={'#40E0D0'} newBorderColr={'#40E0D0'} newLabelName={'Flow/UpperTankIncoming'} /> */}
              <GlobalChart
                newBackGrndColr={'#40E0D0'}
                newBorderColr={'#40E0D0'}
                allLabelNames={['Flow/UpperTankIncoming']}
                arrayOfRespectiveDataset={[flowUprTnkIncmng]}
                dataSetbackgroundColor={['#40E0D0']}
                siUnit={'GPM'}
                heightForChart={260}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default FlowMeter;