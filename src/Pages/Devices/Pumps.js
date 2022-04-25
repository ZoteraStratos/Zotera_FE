import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import DeviceDetailCard from "../ReuseableComponents/DeviceDetailCard";
import CurrentMotorImage from "../../Images/currentMotor.png";
import Charts from "../ReuseableComponents/Chart/Charts";
import MultipleTabs from "../ReuseableComponents/MultipleTabs";
import LineChart from "../ReuseableComponents/Chart/LineChart";
import RowRadioButtonsGroup from '../ReuseableComponents/RadioButtons';
import { useGlobalContext } from "../../Components/context";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import GlobalChart from "../ReuseableComponents/Chart/GlobalChart";
import { PumpTable } from "../../Components/PumpTable";
import { CheckCircleRounded, ErrorRounded } from "@material-ui/icons";
import { Link } from 'react-router-dom';

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
    color: 'white'
  },
  dropDownBtnStyle: {
    backgroundColor: '#73c1cc',
    color: 'black',
    paddingTop: '4px',
    paddingLeft: '15px',
    paddingBottom: '4px',
    paddingRight: '14px',
    borderRadius: '5px',
    fontWeight: 600
  },
  alignCenter: {
    textAlign: 'center'
  },
  currentMotorImageWidth: {
    maxWidth: '22%'
  },
  marginForGrid: {
    marginTop: '8%'
  }

});

const PresureSensor = () => {
  const classes = useStyles();
  const { globalData, iCOMOX_Temperature_Value,
    AutomationSetpoints_Motor30RPM,
    AutomationSetpoints_MotorFullRPM,
    UpperTankLevel,
    LowerTankLevel,
    pumpInletPressure_Value,
    upperTankIncomingPressureRaw,
    pumpInletPressureRaw,
    upperTankIncomingPressureValue,
    iCOMOXAccPrimaryXMaxValue,
    iCOMOXAccPrimaryXMinValue,
    iCOMOXAccPrimaryYMaxValue,
    iCOMOXAccPrimaryYMinValue,
    iCOMOXAccPrimaryZMaxValue,
    iCOMOXAccPrimaryZMinValue, } = useGlobalContext();

  const [values, setValues] = useState([
    "Influent Pump Station  Pump: #1",
    "Influent Pump Station  Pump: #2",
    "Influent Pump Station  Pump: #3",
    "Influent Pump Station  Pump: #4",
    "Influent Pump Station  Pump: #5",
    "Influent Pump Station  Pump: #6",
  ]);
  const [valuesWeek, setValuesWeek] = useState([
    "1 week",
    "2 week",
    "3 week",
    "4 week",
  ]);
  const [selected, setSelected] = useState("Influent Pump Station  Pump: #6");
  const [uprTnkIncmngPrsurValue, setUprTnkIncmngPrsurValue] = useState([]);
  const [pmpInltPrsureRaw, setPmpInltPrsureRaw] = useState([]);

  const [iCOMOXAPrmyXMaxValue, setiCOMOXAPrmyXMaxValue] = useState([]);
  const [iCOMOXAPrmyXMinValue, setiCOMOXAPrmyXMinValue] = useState([]);

  const [iCOMOXAPrmyYMaxValue, setiCOMOXAPrmyYMaxValue] = useState([]);
  const [iCOMOXAPrmyYMinValue, setiCOMOXAPrmyYMinValue] = useState([]);

  const [iCOMOXAPrmyZMaxValue, setiCOMOXAPrmyZMaxValue] = useState([]);
  const [iCOMOXAPrmyZMinValue, setiCOMOXAPrmyZMinValue] = useState([]);

  const [atmtnSetPointsMotor30Rpm, setAtmtnSetPointsMotor30Rpm] = useState([]);
  const [atmtnSetPointMotorFullRpm, setAtmtnSetPointMotorFullRpm] = useState([]);

  function handleChange(event) {
    setSelected(event.target.value);
  }

  const [selectedWeek, setSelectedWeek] = useState("1 week");

  function handleChangeWeek(event) {
    setSelectedWeek(event.target.value);
  }

  const handleChangeArea = (areaName) => {

  }

  const validateAndSetFunction = (recivedArrayName, setFunctionName) => {
    if (recivedArrayName.length > 0) {
      // setFunctionName(recivedArrayName)
      setFunctionName(oldArray => {
        let oldData = [...oldArray];
        if (oldData.length > 5) {
          oldData.shift();
          return [...oldData, recivedArrayName[0]]
        } else {
          return [...oldData, recivedArrayName[0]]
        }
      })
    }
  }

  const WhiteTypographyStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 3,
    border: `4px solid white`
  }
  const BlackTypographyStyle = {
    backgroundColor: '#73c1cc',
    color: 'black',
    height: "0.5%",
    borderRadius: 3,
    border: `3px solid #73c1cc`
  }

  const currentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return mm + '/' + dd + '/' + yyyy;
  }

  const oldDate = () => {
    let nowDate = new Date();
    let onldDate = nowDate.setDate(nowDate.getDate() - 14);
    const Otoday = new Date(onldDate);
    const Oyyyy = Otoday.getFullYear();
    let Omm = Otoday.getMonth() + 1; // Months start at 0!
    let Odd = Otoday.getDate();
    if (Odd < 10) Odd = '0' + Odd;
    if (Omm < 10) Omm = '0' + Omm
    return Omm + '/' + Odd + '/' + Oyyyy;
  }

  useEffect(() => {

    validateAndSetFunction(upperTankIncomingPressureValue, setUprTnkIncmngPrsurValue);
    validateAndSetFunction(pumpInletPressureRaw, setPmpInltPrsureRaw);

    validateAndSetFunction(iCOMOXAccPrimaryXMaxValue, setiCOMOXAPrmyXMaxValue);
    validateAndSetFunction(iCOMOXAccPrimaryXMinValue, setiCOMOXAPrmyXMinValue);

    validateAndSetFunction(iCOMOXAccPrimaryYMaxValue, setiCOMOXAPrmyYMaxValue);
    validateAndSetFunction(iCOMOXAccPrimaryYMinValue, setiCOMOXAPrmyYMinValue);

    validateAndSetFunction(iCOMOXAccPrimaryZMaxValue, setiCOMOXAPrmyZMaxValue);
    validateAndSetFunction(iCOMOXAccPrimaryZMinValue, setiCOMOXAPrmyZMinValue);

    validateAndSetFunction(AutomationSetpoints_Motor30RPM, setAtmtnSetPointsMotor30Rpm);
    validateAndSetFunction(AutomationSetpoints_MotorFullRPM, setAtmtnSetPointMotorFullRpm);

  }, [globalData]);

  useEffect(() => {

  }, []);


  const columns = ["Model Number: ", "Location: ", "Status History", "", "Pump Status"]
  const rows = [
    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#6 ",
      serialNumber: "CXJS179456",
      status: [{
        key: <div style={{ display: "flex", width: "max-content" }}><ErrorRounded style={{ color: "red", background: "white", marginRight: "10px" }} /><span>Unplanned Outage</span></div>,
        value: "4hrs 21 mins",
      }, {
        key: "Alerts 7",
        //value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Details </Button>
        value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/dashboard/alarm" style={{ color: "white", textDecoration: 'none' }}>Details</Link></Button>
      },
      {
        key: "Availability",
        value: "62%",
        style: { value: { color: "red" } }
      }],
      // pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Pump Status </Button>

      pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/devices/pumps/pumpSix" style={{ color: "white", textDecoration: 'none' }}>Pump Status</Link></Button>
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#5 ",
      serialNumber: "CXJS179425",
      status: [{
        key: <div style={{ display: "flex", width: "max-content" }}><ErrorRounded style={{ color: "#FDDA0D", background: "white", marginRight: "10px" }} /><span>Warning</span></div>,
        value: "1day 14hrs",
      }, {
        key: "Alerts 4",
        //  value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Details </Button>
        value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/dashboard/alarm" style={{ color: "white", textDecoration: 'none' }}>Details</Link></Button>
      },
      {
        key: "Availability",
        value: "85%",
        style: { value: { color: "#FDDA0D" } }
      }],
      //pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Pump Status </Button>
      pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/devices/pumps/pumpFive" style={{ color: "white", textDecoration: 'none' }}>Pump Status</Link></Button>
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#4 ",
      serialNumber: "CXJS179437",
      status: [{
        key: <div style={{ display: "flex", width: "max-content" }}><CheckCircleRounded style={{ color: "green", background: "white", marginRight: "10px" }} /><span>Running</span></div>,
        value: "6days 20hrs",
      }, {
        key: "Alerts: None",
        // value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Details </Button>
        value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/dashboard/alarm" style={{ color: "white", textDecoration: 'none' }}>Details</Link></Button>
      },
      {
        key: "Availability",
        value: "95%",
        style: { value: { color: "green" } }
      }],
      //   pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Pump Status </Button>
      pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/devices/pumps/pumpFour" style={{ color: "white", textDecoration: 'none' }}>Pump Status</Link></Button>
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#3 ",
      serialNumber: "CXJS179456",
      status: [{
        key: <div style={{ display: "flex", width: "max-content" }}><CheckCircleRounded style={{ color: "green", background: "white", marginRight: "10px" }} /><span>Running</span></div>,
        value: "6days 20hrs",
      }, {
        key: "Alerts: None",
        //value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Details </Button>
        value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/dashboard/alarm" style={{ color: "white", textDecoration: 'none' }}>Details</Link></Button>
      },
      {
        key: "Availability",
        value: "95%",
        style: { value: { color: "green" } }
      }],
      // pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Pump Status </Button>
      pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/devices/pumps/pumpThree" style={{ color: "white", textDecoration: 'none' }}>Pump Status</Link></Button>
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#2 ",
      serialNumber: "CXJS179425",
      status: [{
        key: <div style={{ display: "flex", width: "max-content" }}><CheckCircleRounded style={{ color: "green", background: "white", marginRight: "10px" }} /><span>Running</span></div>,
        value: "6days 20hrs",
      }, {
        key: "Alerts: None",
        //value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Details </Button>
        value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/dashboard/alarm" style={{ color: "white", textDecoration: 'none' }}>Details</Link></Button>
      },
      {
        key: "Availability",
        value: "95%",
        style: { value: { color: "green" } }
      }],
      // pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Pump Status </Button>
      pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/devices/pumps/pumpTwo" style={{ color: "white", textDecoration: 'none' }}>Pump Status</Link></Button>
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#1 ",
      serialNumber: "CXJS179437",
      status: [{
        key: <div style={{ display: "flex", width: "max-content" }}><CheckCircleRounded style={{ color: "green", background: "white", marginRight: "10px" }} /><span>Running</span></div>,
        value: "6days 20hrs",
      }, {
        key: "Alerts: None",
        // value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Details </Button>
        value: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/dashboard/alarm" style={{ color: "white", textDecoration: 'none' }}>Details</Link></Button>
      },
      {
        key: "Availability",
        value: "95%",
        style: { value: { color: "green" } }
      }],
      //  pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}> Pump Status </Button>
      pumpStatus: <Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/devices/pumps/pumpOne" style={{ color: "white", textDecoration: 'none' }}>Pump Status</Link></Button>
    },
  ]


  return (
    <>
      <div>
        <Card className={classes.root}  >
          <h3 style={{ fontWeight: "800", fontSize: "20px" }}>Influent Pump Station Status</h3>

          <Grid container spacing={2} display="flex"  >
            <Grid xs={3} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span >
                      <b>Description :</b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={3} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span >
                      <b>Location :</b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={4} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span >
                      <b>Status History :</b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} display="flex"  >
            <Grid xs={3} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span style={BlackTypographyStyle}>
                      <b> Centrifugal Pump </b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={3} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span style={BlackTypographyStyle}>
                      <b> Centennial </b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={4} item>
              <Box className={classes.headerCardCenter}>
                <HeaderCard lableName={'From : '} labelValue={oldDate()} />
                <HeaderCard lableName={'To : '} labelValue={currentDate()} />
              </Box>
            </Grid>
          </Grid>

          <PumpTable columns={columns} rows={rows} />
        </Card>
        {/* <div style={{ display: "flex" }}>
          <h3 style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "800", }}>Description: <i style={{ fontWeight: "600", fontSize: "16px" }}>Centrifugal Pump</i></h3>
          <h3 style={{ marginLeft: "10px", fontWeight: "800", fontSize: "20px" }}>Location: <i style={{ fontWeight: "600", fontSize: "16px" }}>Centennial</i></h3>
          <h3 style={{ marginLeft: "10px", fontWeight: "800", fontSize: "20px" }}>Status History: <i style={{ fontWeight: "600", fontSize: "16px" }}>From {oldDate()} To  {currentDate()}</i></h3>
        </div> */}


      </div>


      {/* <Card className={classes.root}  >
        <Grid container spacing={2} display="flex"  >
          <Grid xs={5} item>
            <Box className={classes.headerCardCenter}>
              <Typography variant="h6" gutterBottom component="div">
                Pump Status:
              </Typography>
              <Select
                inputProps={{
                  name: "agent",
                  id: "age-simple"
                }}
                value={selected}
                onChange={handleChange}
                className={classes.dropDownBtnStyle}
              >
                {values.map((value, index) => {
                  return <MenuItem value={value}>{value}</MenuItem>;
                })}
              </Select>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} display="flex"  >
          <Grid xs={4} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={'Description : '} labelValue={'Centrifugal Pump'} />
            </Box>
          </Grid>
          <Grid xs={3} item>
            <Box className={classes.headerCardCenter}>
              <HeaderCard lableName={'Model Number : '} labelValue={'CP 600 '} />
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
          <Grid item xs={3} className={classes.marginForGrid} >
            <DeviceDetailCard
              imagePath={CurrentMotorImage}
              deviceNameBlueClr={''}
              deviceDetailBlackColor={''}
              deviceDetailBlackColorSiUnit={''}
              deviceReading={''}
              classNameUsed={classes.currentMotorImageWidth} />
            <Card className={classes.root} >
              <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
                <Grid xs={6} item >
                  <b> Status History </b>
                </Grid>
                <Grid xs={3} item>
                  <FormControl>
                    <Select className={classes.dropDownBtnStyle}
                      value={selectedWeek}
                      onChange={handleChangeWeek}
                      inputProps={{
                        name: "statusHistory",
                        id: "statusHistory",
                      }}>
                      {valuesWeek.map((value, index) => {
                        return <MenuItem value={value} key={index * 2.54}>{value}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Card>
            <Card style={{ marginTop: '5px' }} className={classes.root} >
              <Grid container spacing={2} display="flex" className={classes.headerCardCenter}>
                <Grid xs={6} item >
                  <b> Alerts : 7 </b>
                </Grid>
                <Grid xs={3} item>
                  <Button style={{ width: '134%' }} className={classes.buttonColor} variant="contained">
                    Details
                  </Button>
                </Grid>
              </Grid>
            </Card>

          </Grid>
          <Grid item xs={8}>
            <MultipleTabs
              newBackGrndColr={'rgba(255, 99, 132, 1)'}
              newBorderColr={'rgba(255, 99, 132, 1)'}
              allLabelNames={['iCOMOX/AccelerometerPrimary/X/Max/Value', 'iCOMOX/AccelerometerPrimary/X/Min/Value', 'iCOMOX/AccelerometerPrimary/Y/Max/Value', 'iCOMOX/AccelerometerPrimary/Y/Min/Value', 'iCOMOX/AccelerometerPrimary/Z/Max/Value', 'iCOMOX/AccelerometerPrimary/Z/Min/Value']}
              arrayOfRespectiveDataset={[iCOMOXAPrmyXMaxValue, iCOMOXAPrmyXMinValue, iCOMOXAPrmyYMaxValue, iCOMOXAPrmyYMinValue, iCOMOXAPrmyZMaxValue, iCOMOXAPrmyZMinValue]}
              dataSetbackgroundColor={['rgba(255, 99, 132, 1)', 'cyan', 'green', 'pink', 'red', 'blue']}
              siUnit={'Amplitude [dB g]'}
              iCOMOX_Temperature_Value={iCOMOX_Temperature_Value}
              atmtnSetPointsMotor30Rpm={atmtnSetPointsMotor30Rpm}
              atmtnSetPointMotorFullRpm={atmtnSetPointMotorFullRpm}
              siUnitForDonut={'RPM'} />

          </Grid>
        </Grid>

        <Grid container spacing={1} display="flex">
          <Grid xs={4} item>
            <Box className={classes.alignCenter}>
              <br />
              <Typography gutterBottom  >
                Pump Motor Speed
              </Typography>

              <GlobalChart
                newBackGrndColr={'#87CEEB'}
                newBorderColr={'#87CEEB'}
                allLabelNames={['AutomationSetpoints/Motor30RPM', 'AutomationSetpoints/MotorFullRPM']}
                arrayOfRespectiveDataset={[atmtnSetPointsMotor30Rpm, atmtnSetPointMotorFullRpm]}
                dataSetbackgroundColor={['red', 'green']} siUnit={'RPM'}
                heightForChart={200} />
              {/* <Charts newBackGrndColr={'#87CEEB'} newBorderColr={'#87CEEB'} newLabelName={'AutomationSetpoints/Motor30RPM'} siUnit={'RPM'} /> */}
      {/* </Box>
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
                  labelNames={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000]}
                  datasetsLabel={'Temperature 1'}
                  datasetData={[0.0050, 0.0065, 0.0060, 0.0080, 0, 0.0085, 0, 0.0080, 0.0050, 0.0065, 0.0060, 0.0080, 0.0050, 0.0065, 0.0060, 0]}
                  datasetBackgroundColor={'rgba(255, 206, 86, 1)'}
                  scalesYTitleText={'Amplitude [dB g]'}
                  scalesXTitleText={'Frequency (Hz)'}
                  pluginsTitleText={'Magnetic Field Spectrum'}
                />
              </Grid>

              <Grid item xs={6} sm={6}>
                <LineChart
                  labelNames={[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]}
                  datasetsLabel={'Temperature 1'}
                  datasetData={[80, 50, 65, 60, 80, 50, 65, 60, 0, 50, 65, 60, 80, 0, 85, 0]}
                  datasetBackgroundColor={'rgba(75, 192, 192, 1)'}
                  scalesYTitleText={'Amplitude [dB g]'}
                  scalesXTitleText={'Frequency (Hz)'}
                  pluginsTitleText={'Accoustic Spectrum'}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card> */}
    </>
  );
};


export default PresureSensor;