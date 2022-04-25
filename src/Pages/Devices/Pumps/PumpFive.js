import React, { useState, useEffect, memo } from "react";
import { Link } from 'react-router-dom';
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";
import { ErrorRounded } from "@material-ui/icons";
import { FormControl, Select, MenuItem, Box, Typography, Grid, Card, Button, Tabs, Tab, TableBody, TableCell, Table, TableRow } from "@material-ui/core";
import PropTypes from 'prop-types';
import { HeaderCard } from "../../ReuseableComponents/HeaderCard";
import { useGlobalContext } from "../../../Components/context";
import { ReactComponent as SoundImage } from "../../../Images/soundImage.svg";
import { ReactComponent as CavitationImage } from "../../../Images/cavitationImage.svg";
import { ReactComponent as ImpellerImage } from "../../../Images/impellerImage.svg";
import { ReactComponent as VibrationImage } from "../../../Images/vibrationImageTwo.svg";
import { ReactComponent as TemperatureImage } from "../../../Images/temperatureImage.svg";
import { ReactComponent as BluePumpImage } from "../../../Images/bluePumpImage.svg";
import { ReactComponent as PumpMotorCadImage } from "../../../Images/pumpMotorCadImage.svg";
import { ReactComponent as ListOfComponent } from "../../../Images/listOfComponent.svg";
import { ReactComponent as BluePumpImageOpen } from "../../../Images/BluePumpImageOpen.svg";
import GlobalChart from '../../ReuseableComponents/Chart/GlobalChart';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: "100%",
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: "100%",
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: "100%",
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: "100%",
        },
    },
    headerCardCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    headerCardCenterForChart: {
        alignItems: "center",
        justifyContent: "center"
    },
    buttonColor: {
        backgroundColor: '#26616a',
        color: 'white'
    },
    imageBorder: {
        border: '2px solid #459aa6'
    },
    imageStyle: {
        width: '50',
        height: '50',
    },
    tempImgStyle: {
        width: '100',
        height: '100'
    },
    tablePanelStyle: {
        '& div': {
            padding: '0',
        }
    },
    paddingStyle: {
        paddingTop: '8px',
        paddingBottom: '8px'
    },
    dropDownBtnStyle: {
        backgroundColor: '#26616a',
        color: 'white',
        borderRadius: '5px',
        '& div': {
            padding: '10px'
        },
        '& svg': {
            color: 'white'
        }
    },
    headingStyle: {
        marginTop: '0px',
        marginBottom: '0px'
    },
    marginTop: {
        marginTop: '-40px'
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PumpFive = () => {
    const classes = useStyles();
    const { globalData,
        iCOMOXAccPrimaryZMaxValue,
        iCOMOXAccPrimaryZMinValue,
        iCOMOXAcousticMaxValue,
        iCOMOXAcousticMinValue,
        iCOMOXAcousticRMSValue,
        iCOMOXAcousticAvgValue,
        iCOMOXTemperatureValue,
        AutomationSetpoints_Motor30RPM,
        AutomationSetpoints_MotorFullRPM
    } = useGlobalContext();

    const [value, setValue] = React.useState(0);
    const [selectedWeek, setSelectedWeek] = useState("1 week");
    const [valuesWeek, setValuesWeek] = useState([
        "1 week",
        "2 week",
        "3 week",
        "4 week",
    ]);
    const [iCOMOXAPrmyZMaxValue, setiCOMOXAPrmyZMaxValue] = useState([]);
    const [iCOMOXAPrmyZMinValue, setiCOMOXAPrmyZMinValue] = useState([]);
    const [iCOMOXAcMaxValue, setiCOMOXAcMaxValue] = useState([]);
    const [iCOMOXAcMinValue, setiCOMOXAcMinValue] = useState([]);
    const [iCOMOXAcRMSValue, setiCOMOXAcRMSValue] = useState([]);
    const [iCOMOXAcAvgValue, setiCOMOXAcAvgValue] = useState([]);
    const [iCOMOXTmpertrValue, setiCOMOXTmpertrValue] = useState([]);
    const [atmtnSetPointsMotor30Rpm, setAtmtnSetPointsMotor30Rpm] = useState([]);
    const [atmtnSetPointMotorFullRpm, setAtmtnSetPointMotorFullRpm] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    function handleChangeWeek(event) {
        setSelectedWeek(event.target.value);
    }


    useEffect(() => {
        validateAndSetFunction(iCOMOXTemperatureValue, setiCOMOXTmpertrValue);
        validateAndSetFunction(iCOMOXAccPrimaryZMaxValue, setiCOMOXAPrmyZMaxValue);
        validateAndSetFunction(iCOMOXAccPrimaryZMinValue, setiCOMOXAPrmyZMinValue);
        validateAndSetFunction(iCOMOXAcousticMaxValue, setiCOMOXAcMaxValue);
        validateAndSetFunction(iCOMOXAcousticMinValue, setiCOMOXAcMinValue);
        validateAndSetFunction(iCOMOXAcousticRMSValue, setiCOMOXAcRMSValue);
        validateAndSetFunction(iCOMOXAcousticAvgValue, setiCOMOXAcAvgValue);
        validateAndSetFunction(AutomationSetpoints_Motor30RPM, setAtmtnSetPointsMotor30Rpm);
        validateAndSetFunction(AutomationSetpoints_MotorFullRPM, setAtmtnSetPointMotorFullRpm);

    }, [globalData])


    return (
        <>
            <ThemeProvider theme={theme}>
                <Card className={classes.root}>
                    <Grid container spacing={1} display="flex"  >
                        <Grid xs={12} item>
                            <Box >
                                <HeaderCard lableName={'Pump Station : '} labelValue={'Influent Pump Station Pump: #5'} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} display="flex"  >
                        <Grid xs={4} item>
                            <Box className={classes.headerCardCenter}>
                                <HeaderCard lableName={'Description : '} labelValue={'Centrifugal Pump'} />
                            </Box>
                        </Grid>
                        <Grid xs={4} item>
                            <Box className={classes.headerCardCenter}>
                                <HeaderCard lableName={'Model Number : '} labelValue={'CP 600'} />
                            </Box>
                        </Grid>
                        <Grid xs={4} item>
                            <Box className={classes.headerCardCenter}>
                                <HeaderCard lableName={'Location : '} labelValue={'Centennial '} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Box >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Live Data" {...a11yProps(0)} style={{ textTransform: 'none' }} />
                                <Tab label="Pump Detail" {...a11yProps(1)} style={{ textTransform: 'none' }} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0} className={classes.tablePanelStyle}>
                            <Grid container spacing={2} display="flex"  >
                                <Grid xs={4} item>
                                    <Box className={classes.headerCardCenter}>
                                        <Card style={{ width: "100%" }}>
                                            <Table>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className={classes.paddingStyle} ><div style={{ display: "flex", width: "max-content" }}><ErrorRounded style={{ color: "#FDDA0D", background: "white", marginRight: "10px" }} /><span>Warning</span></div></TableCell>
                                                        <TableCell className={classes.paddingStyle} ><b>4hrs 21 mins</b></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={classes.paddingStyle} ><b>Pump Status</b></TableCell>
                                                        <TableCell className={classes.paddingStyle} >
                                                            <FormControl>
                                                                <Select className={classes.dropDownBtnStyle}
                                                                    value={selectedWeek}
                                                                    onChange={handleChangeWeek}
                                                                    inputProps={{
                                                                        name: "statusHistory",
                                                                        id: "statusHistory",
                                                                    }} >
                                                                    {valuesWeek.map((value, index) => {
                                                                        return <MenuItem value={value} key={index * 2.54}>{value}</MenuItem>;
                                                                    })}
                                                                </Select>
                                                            </FormControl>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={classes.paddingStyle} ><b>Alerts 7</b></TableCell>
                                                        <TableCell className={classes.paddingStyle} ><Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/dashboard/alarm" style={{ color: "white", textDecoration: 'none' }}>Details</Link></Button></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={classes.paddingStyle} ><b>Availability</b></TableCell>
                                                        <TableCell className={classes.paddingStyle} ><b>62%</b></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Card>
                                    </Box>
                                    <Box className={classes.headerCardCenter} style={{ marginBottom: '-20px' }}>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Sound</h5>
                                            </div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Cavitation</h5>
                                            </div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Impeller</h5>
                                            </div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Vibration</h5>
                                            </div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Temperature</h5>
                                            </div>
                                        </Grid>
                                    </Box>
                                    <Box className={classes.headerCardCenter} >
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <SoundImage className={classes.imageBorder} width="50" height="50" />
                                            </div>
                                        </Grid>
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <CavitationImage className={classes.imageStyle} width="50" height="50" />
                                            </div>
                                        </Grid>
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <ImpellerImage className={classes.imageBorder} width="50" height="50" />
                                            </div>
                                        </Grid>
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <VibrationImage className={classes.imageBorder} width="50" height="50" />
                                            </div>
                                        </Grid>
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <TemperatureImage className={classes.imageBorder} width="50" height="50" style={{ backgroundColor: 'yellow' }} />
                                            </div>
                                        </Grid>
                                    </Box>
                                    <Box className={classes.headerCardCenter}>
                                        <Grid xs={12} item>
                                            <Box className={classes.headerCardCenter}>
                                                <BluePumpImage width="500" height="150" style={{ marginTop: '10px' }} />
                                            </Box>
                                        </Grid>

                                    </Box>
                                </Grid>
                                <Grid xs={4} item className={classes.marginTop}>
                                    <div className={classes.headerCardCenter}>
                                        <h4 className={classes.headingStyle}>Vibration Spectrum</h4>
                                    </div>
                                    <Box className={classes.headerCardCenterForChart}>
                                        <GlobalChart
                                            newBackGrndColr={'#87CEEB'}
                                            newBorderColr={'#87CEEB'}
                                            allLabelNames={['iCOMOX/AccelerometerPrimary/Z/Max/Value', 'iCOMOX/AccelerometerPrimary/Z/Min/Value']}
                                            arrayOfRespectiveDataset={[iCOMOXAPrmyZMaxValue, iCOMOXAPrmyZMinValue]}
                                            dataSetbackgroundColor={['rgba(255, 99, 132, 1)', 'cyan', 'green', 'pink', 'red', 'blue']}
                                            siUnit={'Amplitude [dB g]'}
                                            heightForChart={300}
                                            pluginsTitleText={'Vibrations Spectrum'}
                                        />
                                    </Box>
                                    <div className={classes.headerCardCenter}>
                                        <h4 className={classes.headingStyle}>Pump Temperature</h4>
                                    </div>
                                    <Box className={classes.headerCardCenterForChart}>
                                        <GlobalChart
                                            newBackGrndColr={'rgb(56, 213, 169)'}
                                            newBorderColr={'rgb(56, 213, 169)'}
                                            allLabelNames={['iCOMOX/Temperature/Value']}
                                            arrayOfRespectiveDataset={[iCOMOXTmpertrValue]}
                                            dataSetbackgroundColor={['rgb(56, 213, 169)']}
                                            siUnit={'F'}
                                            heightForChart={300}
                                        />
                                    </Box>
                                </Grid>
                                <Grid xs={4} item className={classes.marginTop}>
                                    <div className={classes.headerCardCenter}>
                                        <h4 className={classes.headingStyle}>Accoustic Spectrum</h4>
                                    </div>
                                    <Box className={classes.headerCardCenterForChart}>
                                        <GlobalChart
                                            newBackGrndColr={'#87CEEB'}
                                            newBorderColr={'#87CEEB'}
                                            allLabelNames={['iCOMOX/Acoustic/Max/Value', 'iCOMOX/Acoustic/Min/Value', 'iCOMOX/Acoustic/RMS/Value', 'iCOMOX/Acoustic/Avg/Value']}
                                            arrayOfRespectiveDataset={[iCOMOXAcMaxValue, iCOMOXAcMinValue, iCOMOXAcRMSValue, iCOMOXAcAvgValue]}
                                            dataSetbackgroundColor={['rgba(255, 99, 132, 1)', 'cyan', 'green', 'pink', 'red', 'blue']}
                                            siUnit={'Amplitude [dB g]'}
                                            heightForChart={300}
                                            pluginsTitleText={'Vibrations Spectrum'}
                                        />
                                    </Box>
                                    <div className={classes.headerCardCenter}>
                                        <h4 className={classes.headingStyle}>Pump Motor Speed</h4>
                                    </div>
                                    <Box className={classes.headerCardCenterForChart}>
                                        <GlobalChart
                                            newBackGrndColr={'yellow'}
                                            newBorderColr={'yellow'}
                                            allLabelNames={['AutomationSetpoints/Motor30RPM', 'AutomationSetpoints/MotorFullRPM']}
                                            arrayOfRespectiveDataset={[atmtnSetPointsMotor30Rpm, atmtnSetPointMotorFullRpm]}
                                            dataSetbackgroundColor={['red', 'green']}
                                            siUnit={'RPM'}
                                            heightForChart={300}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1} className={classes.tablePanelStyle}>
                            <Grid container spacing={2} display="flex"  >
                                <Grid xs={4} item>
                                    <Box className={classes.headerCardCenter}>
                                        <Card style={{ width: "100%" }}>
                                            <Table>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className={classes.paddingStyle} ><div style={{ display: "flex", width: "max-content" }}><ErrorRounded style={{ color: "#FDDA0D", background: "white", marginRight: "10px" }} /><span>Warning</span></div></TableCell>
                                                        <TableCell className={classes.paddingStyle} ><b>4hrs 21 mins</b></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={classes.paddingStyle} ><b>Pump Status</b></TableCell>
                                                        <TableCell className={classes.paddingStyle} >
                                                            <FormControl>
                                                                <Select className={classes.dropDownBtnStyle}
                                                                    value={selectedWeek}
                                                                    onChange={handleChangeWeek}
                                                                    inputProps={{
                                                                        name: "statusHistory",
                                                                        id: "statusHistory",
                                                                    }} >
                                                                    {valuesWeek.map((value, index) => {
                                                                        return <MenuItem value={value} key={index * 2.54}>{value}</MenuItem>;
                                                                    })}
                                                                </Select>
                                                            </FormControl>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={classes.paddingStyle} ><b>Alerts 7</b></TableCell>
                                                        <TableCell className={classes.paddingStyle} ><Button style={{ backgroundColor: '#26616a', color: 'white', fontWeight: '700', textTransform: 'none' }}><Link to="/dashboard/alarm" style={{ color: "white", textDecoration: 'none' }}>Details</Link></Button></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={classes.paddingStyle} ><b>Availability</b></TableCell>
                                                        <TableCell className={classes.paddingStyle} ><b>62%</b></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Card>
                                    </Box>
                                    <Box className={classes.headerCardCenter} style={{ marginBottom: '-20px' }}>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Sound</h5>
                                            </div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Cavitation</h5>
                                            </div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Impeller</h5>
                                            </div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Vibration</h5>
                                            </div>
                                        </Grid>
                                        <Grid xs={3} item>
                                            <div className={classes.headerCardCenter}>
                                                <h5>Temperature</h5>
                                            </div>
                                        </Grid>
                                    </Box>
                                    <Box className={classes.headerCardCenter} >
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <SoundImage className={classes.imageBorder} width="50" height="50" />
                                            </div>
                                        </Grid>
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <CavitationImage className={classes.imageStyle} width="50" height="50" />
                                            </div>
                                        </Grid>
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <ImpellerImage className={classes.imageBorder} width="50" height="50" />
                                            </div>
                                        </Grid>
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <VibrationImage className={classes.imageBorder} width="50" height="50" />
                                            </div>
                                        </Grid>
                                        <Grid xs={3} >
                                            <div className={classes.headerCardCenter}>
                                                <TemperatureImage className={classes.imageBorder} width="50" height="50" style={{ backgroundColor: 'yellow' }} />
                                            </div>
                                        </Grid>
                                    </Box>
                                    <Box className={classes.headerCardCenter}>
                                        <Grid xs={12} item>
                                            <Box className={classes.headerCardCenter}>
                                                <BluePumpImageOpen width="500" height="150" style={{ marginTop: '10px' }} />
                                            </Box>
                                        </Grid>

                                    </Box>
                                </Grid>
                                <Grid xs={8} item>
                                    <Box className={classes.headerCardCenter}>
                                        <PumpMotorCadImage width="600" height="300" style={{ marginTop: '-40px' }} />
                                    </Box>
                                    <Box className={classes.headerCardCenter}>
                                        <ListOfComponent width="700" height="300" style={{ marginTop: '-40px' }} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </Box>
                </Card>
            </ThemeProvider>
        </>
    );
};

export default memo(PumpFive);