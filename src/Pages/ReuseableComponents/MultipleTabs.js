import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RowRadioButtonsGroup from "./RadioButtons";
import Temp from './Thermometer';
import Grid from "@material-ui/core/Grid";
import DonutChart from "./Chart/DonutChart";
import LineChart from './Chart/LineChart';
import ChartWithoutDate from './Chart/ChartWIthoutDate';
import GlobalChart from './Chart/GlobalChart';
import "../../Components/pumptable.css"


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

export default function BasicTabs(props) {

    const {
        allLabelNames,
        arrayOfRespectiveDataset,
        AutomationSetpoints_Motor30RPM,
        AutomationSetpoints_MotorFullRPM,
        iCOMOX_Temperature_Value,
        siUnit = ' HZ',
        siUnitForDonut = 'RPM',
        dataSetbackgroundColor,
        atmtnSetPointsMotor30Rpm,
        atmtnSetPointMotorFullRpm=2400
    } = props

    // console.log("allLabelNames:- ",allLabelNames)

    const [value, setValue] = React.useState(0);

    const [areaSection, setAreaSection] = useState({
        allLabelNames: [allLabelNames[0], allLabelNames[1]],
        dataSetbackgroundColor: [dataSetbackgroundColor[0], dataSetbackgroundColor[1]],
        arrayOfRespectiveDataset: [arrayOfRespectiveDataset[0], arrayOfRespectiveDataset[1]]
    })

    const [selectedRadioButtons, setselectedRadioButtons] = useState('x');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeArea = (areaName) => {
        setselectedRadioButtons(areaName);
    }


    useEffect(() => {
        if (selectedRadioButtons) {
            if (selectedRadioButtons === 'x') {
                setAreaSection({
                    allLabelNames: [allLabelNames[0], allLabelNames[1]],
                    dataSetbackgroundColor: [dataSetbackgroundColor[0], dataSetbackgroundColor[1]],
                    arrayOfRespectiveDataset: [arrayOfRespectiveDataset[0], arrayOfRespectiveDataset[1]]
                })
            } else if (selectedRadioButtons === 'y') {
                setAreaSection({
                    allLabelNames: [allLabelNames[2], allLabelNames[2]],
                    dataSetbackgroundColor: [dataSetbackgroundColor[2], dataSetbackgroundColor[3]],
                    arrayOfRespectiveDataset: [arrayOfRespectiveDataset[2], arrayOfRespectiveDataset[3]]
                })
            } else {
                setAreaSection({
                    allLabelNames: [allLabelNames[4], allLabelNames[5]],
                    dataSetbackgroundColor: [dataSetbackgroundColor[4], dataSetbackgroundColor[5]],
                    arrayOfRespectiveDataset: [arrayOfRespectiveDataset[4], arrayOfRespectiveDataset[5]]
                })
            }
        }
    }, [selectedRadioButtons])


    useEffect(() => {
        setselectedRadioButtons("x");
    }, [])


    useEffect(() => {
        if (selectedRadioButtons === 'x') {
            setAreaSection({
                allLabelNames: [allLabelNames[0], allLabelNames[1]],
                dataSetbackgroundColor: [dataSetbackgroundColor[0], dataSetbackgroundColor[1]],
                arrayOfRespectiveDataset: [arrayOfRespectiveDataset[0], arrayOfRespectiveDataset[1]]
            })
        } else if (selectedRadioButtons === 'y') {
            setAreaSection({
                allLabelNames: [allLabelNames[2], allLabelNames[2]],
                dataSetbackgroundColor: [dataSetbackgroundColor[2], dataSetbackgroundColor[3]],
                arrayOfRespectiveDataset: [arrayOfRespectiveDataset[2], arrayOfRespectiveDataset[3]]
            })
        } else {
            setAreaSection({
                allLabelNames: [allLabelNames[4], allLabelNames[5]],
                dataSetbackgroundColor: [dataSetbackgroundColor[4], dataSetbackgroundColor[5]],
                arrayOfRespectiveDataset: [arrayOfRespectiveDataset[4], arrayOfRespectiveDataset[5]]
            })
        }
    }, [arrayOfRespectiveDataset])


    return (
        <Box sx={{ height: '25%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Live Data" {...a11yProps(0)} style={{ textTransform: 'none' }} />
                    <Tab label="Statistics" {...a11yProps(1)} style={{ textTransform: 'none' }} />
                    <Tab label="Configuration" {...a11yProps(2)} style={{ textTransform: 'none' }} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <RowRadioButtonsGroup selectedRadioButtons={selectedRadioButtons} handleChangeArea={handleChangeArea} />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={8} sm={8}>
                        {/* <LineChart
                            labelNames={[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]}
                            datasetsLabel={'Temperature 1'}
                            datasetData={[-50, -65, -60, -80, 0, -85, 0, -80, -50, -65, -60, -80, -50, -65, -60, 0]}
                            datasetBackgroundColor={'rgba(255, 99, 132, 1)'}
                            scalesYTitleText={'Amplitude [dB g]'}
                            scalesXTitleText={'Frequency (Hz)'}
                            pluginsTitleText={'Vibrations Spectrum'}
                            labelNameOne={'iCOMOX/AccelerometerPrimary/Z/Max/Value'}
                            labelNameTwo={'iCOMOX/AccelerometerPrimary/Z/Min/Value'}
                        /> */}
                        <GlobalChart
                            newBackGrndColr={'#87CEEB'}
                            newBorderColr={'#87CEEB'}
                            allLabelNames={areaSection.allLabelNames}
                            arrayOfRespectiveDataset={areaSection.arrayOfRespectiveDataset}
                            dataSetbackgroundColor={areaSection.dataSetbackgroundColor}
                            siUnit={siUnit}
                            heightForChart={250}
                            pluginsTitleText={'Vibrations Spectrum'}
                        />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        {/* iCOMOX/Temperature/Value */}
                        <Temp id="dial7" value={`${parseFloat(iCOMOX_Temperature_Value).toFixed(2)}`} title="" />
                    </Grid>

                    <Grid item xs={2} sm={2} style={{ transform: 'scale(0.8)' }}>
                        <DonutChart labelName={'Speed'} siUnit={' RPM'} presentRpm={0} customSegmentStops={increment(2400)}  maxValue={2400}/>
                        {/* <DonutChart labelName={'Speed'} siUnit={siUnitForDonut} presentRpm={AutomationSetpoints_Motor30RPM} maxRpm={increment(AutomationSetpoints_MotorFullRPM)} /> */}
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}



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
