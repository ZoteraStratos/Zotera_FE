import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import ProgressBar from "./ProgressBar";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { ReactComponent as Img } from "../../Images/pumpImage.svg";
import { ReactComponent as MotorDamage } from "../../Images/damageMotor.svg";


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

theme.typography.h3 = {
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.45rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '0.6rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.9rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },
};

export const DeviceValue = React.memo(function DeviceValue({ classNameUsed, valueOne }) {
    const TypographyStyle = {
        backgroundColor: 'black',
        color: 'white',
        // height: "0.5%",
        borderRadius: 3,
        border: `2px solid black`

    }
    return (
        <>
        <Box display='flex' alignItems='center' className={classNameUsed} >
            <ThemeProvider theme={theme}>
                <Typography variant="h3" style={TypographyStyle} >
                    {valueOne}
                </Typography>
            </ThemeProvider>
        </Box>
        </>
    )
});

export const DeviceStatus = React.memo(function DeviceStatus({ classNameUsed, status }) { 
    const WhiteTypographyStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 3,
        border: `4px solid white`
    }

    const TypographyStyleTrue = {
        backgroundColor: '#84E766',
        color: 'black',
        height: "0.%8",
        borderRadius: 0,
        border: `1px solid white`
    }

    const TypographyStyleFalse = {
        backgroundColor: 'white',
        color: 'black',
        height: "0.5%",
        borderRadius: 3,
        border: `3px solid white`
    }
    return (
        <Box display='flex' alignItems='center' className={classNameUsed}>
            <Paper style={WhiteTypographyStyle}>
                <Typography>
                    <span style={status ? TypographyStyleTrue : TypographyStyleFalse}>
                        <b> True</b>
                    </span>
                    <span style={status ? TypographyStyleFalse : TypographyStyleTrue}>
                        <b> False</b>
                    </span>
                    <br />
                </Typography>
            </Paper>
        </Box>
    )
});


export const DeviceValueWithUnit = React.memo(function DeviceValueWithUnit({ classNameUsed, valueOne, unitOne }) {
    const WhiteTypographyStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 3,
        border: `4px solid white`
    }
    const BlackTypographyStyle = {
        backgroundColor: 'black',
        color: 'white',
        height: "0.5%",
        borderRadius: 3,
        border: `3px solid black`
    }

    return (
        <Box display='flex' alignItems='center' className={classNameUsed} >
            <ThemeProvider theme={theme}>
                <Paper style={WhiteTypographyStyle}>
                    <Typography variant="h3" >
                        <span style={BlackTypographyStyle}>
                            {valueOne}
                        </span>
                        <span >
                            <b> {unitOne}</b>
                        </span>
                    </Typography>
                </Paper>
            </ThemeProvider>
        </Box>
    )
});


export const DeviceValueWithStatus = React.memo(function DeviceValueWithStatus({ classNameUsed, valueOne, deviceStatus }) {
       const WhiteTypographyStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 3,
        border: `4px solid white`
    }
    const BlackTypographyStyle = {
        backgroundColor: 'black',
        color: 'white',
        height: "0.5%",
        borderRadius: 3,
        border: `3px solid black`
    }

    return (
        <Box display='flex' alignItems='center' className={classNameUsed}>
            <ThemeProvider theme={theme}>
                <Paper style={WhiteTypographyStyle}>
                    <Typography variant="h3" >
                        <span >
                            <b> {deviceStatus}</b>
                        </span>
                        <span style={BlackTypographyStyle}>
                            {valueOne} %
                        </span>
                        <br />
                        <ProgressBar bgcolor="#4ecf2d" progress={valueOne} height={10} />
                    </Typography>
                </Paper>
            </ThemeProvider>
        </Box>
    )

});


export const DeviceValueWithStatusAndUnit = React.memo(function DeviceValueWithStatusAndUnit({ classNameUsed, valueOne, deviceName, deviceUnit }) {
    const WhiteTypographyStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 3,
        border: `4px solid white`
    }
    const BlackTypographyStyle = {
        backgroundColor: 'black',
        color: 'white',
        height: "0.5%",
        borderRadius: 3,
        border: `3px solid black`
    }

    return (
        <Box display='flex' alignItems='center' className={classNameUsed}>
            <ThemeProvider theme={theme}>
                <Paper style={WhiteTypographyStyle}>
                    <Typography variant="h3" >
                        <span >
                            <b> {deviceName}</b>
                        </span>
                        <span style={BlackTypographyStyle}>
                            {valueOne}
                        </span>
                        <br />
                    </Typography>
                </Paper>
            </ThemeProvider>
        </Box>
    )
});



export const ForImage = React.memo(function ForImage({ classNameUsed, valueOne, deviceName, deviceUnit ,PathName }) {
    const WhiteTypographyStyle = {

        color: 'black',
        borderRadius: 3,
        border: `4px solid white`
    }
    const BlackTypographyStyle = {
        backgroundColor: 'black',
        color: 'white',
        height: "0.5%",
        borderRadius: 3,
        border: `3px solid black`
    }

    return (
        <Box display='flex' alignItems='center' className={classNameUsed}>
            <ThemeProvider theme={theme}>
               
                {/* <Img/> */}
            <MotorDamage style={{width:'100%', height:'100%'}}/>
            </ThemeProvider>
        </Box>
    )
});


// export const DeviceValueWithStatusAndUnit = ({ classNameUsed, valueOne, deviceName, deviceUnit }) => {


// }

