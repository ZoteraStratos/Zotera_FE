// import './animaiton.css'
// export const PlantProcessFlow = () => {
//     return <>
//         <div>
//             <div style={{ display: "flex", color: "black", fontSize: "16px", fontWeight: "800" }}>
//                 <span>Water Treatment Plant Process Flow</span >
//                 <span style={{ flexGrow: "1", maxWidth: "20%" }}>
//                 </span><span style={{ justifyContent: "end" }}>Location: Centennial</span>
//             </div>
//             <div>
//                 <img src={`/pipeflow.png`} width={"862.609px"} height={"499.609px"} />
//             </div>
//             <div className='blink' style={{ position: "absolute", top: "70px", width: "862.609px", height: "499.609px" }}>
//                 <img style={{ position: "absolute", top: "53%", left: '48%', overflow: "auto" }} src={`/blink.png`} width="43" height={"33"} />
//             </div>
//         </div>
//     </>
// }


import React, { memo } from "react";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
//import CardTitle from "@material-ui/core/CardTitle"; 
import DeviceLabelName from "../ReuseableComponents/DeviceLabelName";
import pipeflow from "../../Images/imageOne.svg";
import { ReactComponent as Img } from "../../Images/pumpImage.svg";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, FormControl, Select, MenuItem } from "@material-ui/core";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import Button from "@material-ui/core/Button";

import { DeviceValue, DeviceValueWithUnit, DeviceValueWithStatus, DeviceStatus, DeviceValueWithStatusAndUnit, ForImage } from "../ReuseableComponents/DeviceValue";
//import {CardTitle} from '@material-ui';
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
            maxWidth: "80%",
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: "100%",
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: "81.5%",
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: "80%",
        },
    },
    media: {
        height: "100%",
        marginTop: '-37px'
    },
    lts: {
        position: "absolute",
        bottom: '48.6%',
        left: '50.2%',
        transform: 'translate(-50 %, -50 %)',
        width: '6.2%',
        transform: "scale(1)",
        animation: "$pulse 1s infinite"
    },
    container: {
        position: "relative",
        textAlign: "center",
    },
    content: {
        backgroundColor: '#c0c0c0'
    },
    "@keyframes pulse": {
        "0%": {
            visibility: 'visible',
        },
        "70%": {
            visibility: 'hidden',
        },
        "100%": {
            visibility: 'hidden',
        }
    },
    background: {
        width: '100px',
        height: '100px',
        position: 'relative',
        backgroundColor: '#0000ff00',
        '&::after': {
            content: '',
            position: 'absolute',
            width: '20px',
            height: '20px',
            top: '5px',
            left: '5px',
            backgroundColor: 'red',
        }
    }
    , img: {
        display: 'inline-block',
        width: '128px',
        height: '128px',
        position: 'relative',
        // background: 'url(http://dl.dropbox.com/u/51558405/big.png) no-repeat',
        '&::after': {
            content: '',
            display: 'inline-block',
            position: 'absolute',
            width: '48px',
            height: '48px',
            top: '40px',
            left: '40px',
            //background: 'url(http://dl.dropbox.com/u/51558405/small.png) no-repeat'
        }
    },
    styleWatrTrtlbl: {
        fontSize: '19px'
    }

}));

function ProcessFlow() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} display="flex"  >
                <Grid xs={8} item>
                    <Typography >
                        <b className={classes.styleWatrTrtlbl}>Water Treatment Plant Process Flow</b>
                    </Typography>
                </Grid>

                <Grid xs={4} item>
                    <Box className={classes.headerCardCenter}>
                        <HeaderCard lableName={'Location : '} labelValue={'Centennial '} />
                    </Box>
                </Grid>
            </Grid>

            <Card className={classes.root + " " + classes.container} title="Water Treatment Plant Process Flow">

                <CardMedia
                    className={classes.media}
                    component="img" src={pipeflow}
                    title="Process Flow Image"
                />
                {/* <DeviceLabelName classNameUsed={classes.lts}>Lower Tank <br />Level Sensor <br />LTS</DeviceLabelName> */}

                {/* <Img className={classes.lts} /> */}
                {/* <ForImage classNameUsed={classes.lts} deviceName={'Pump Motor Speed (RPM) '} valueOne={'2,400'} pathNam={Img} /> */}


                <Box display='flex' alignItems='center' className={classes.lts}>
                    <ThemeProvider theme={theme}>

                        {/* <Img/> */}
                        <Img />
                    </ThemeProvider>
                </Box>

                <div className={classes.background}></div>

                <div className={classes.img}></div>
                {/* Equipment Label name */}
                {/* <CardContent className={classes.content}> <br /></CardContent>
                <DeviceLabelName classNameUsed={classes.lts}>Lower Tank <br />Level Sensor <br />LTS</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.utofm}> Upper Tank <br />Outgoing Flow Meter <br />UTOFM</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.utov}>  Upper Tank <br />Outgoing Valve <br />UTOV</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.utls}> Upper Tank <br />Level Sensor <br />UTLS</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.utiv}>Upper Tank <br />Incoming Valve <br />UTIV</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.utips}> Upper Tank Incoming<br />Presure Sensor <br />UTIPS</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.tempSensr}>Temperature <br />Sensor</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.utifm}>Upper Tank <br />Incoming Flow Meter <br />UTIFM</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.digitalPrsSnsr}>Digital <br />Pressure <br /> Sensor</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.pump}>Pump</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.pmtr}>Pump <br />Monitor <br /> PMTR</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.pips}>Presure <br /> Inlet <br />Pressure <br /> Sensor <br />PIPS</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.afs}>Air <br /> Flow <br />Solenoid <br />AFS</DeviceLabelName>
                <DeviceLabelName classNameUsed={classes.ltov}>Lower <br /> Tank <br />Outgoing Valve <br />LTOV</DeviceLabelName> */}

                {/* Equipment Values */}
                {/* <DeviceValue classNameUsed={classes.ltlsVal} valueOne={'36%'} />
                <DeviceValueWithUnit classNameUsed={classes.utofmVal} valueOne={8.4} unitOne={'GPM'} />
                <DeviceValueWithStatus classNameUsed={classes.utovVal} valueOne={'45'} deviceStatus={'Open'} />
                <DeviceValue classNameUsed={classes.utlsVal} valueOne={'64%'} />
                <DeviceValueWithStatus classNameUsed={classes.utivVal} valueOne={'70'} deviceStatus={'Open'} />
                <DeviceValueWithUnit classNameUsed={classes.utipsVal} valueOne={17.4} unitOne={'PSI'} />
                <DeviceValueWithUnit classNameUsed={classes.tempSensrVal} valueOne={81.4} unitOne={'F'} />
                <DeviceValueWithUnit classNameUsed={classes.utifmVal} valueOne={8.4} unitOne={'GPM'} />
                <DeviceStatus classNameUsed={classes.digitalPrsSnsrVal} valueOne={8.4} status={true} />

                <DeviceValueWithStatusAndUnit classNameUsed={classes.pmsUnitVal} deviceName={'Pump Motor Speed (RPM) '} valueOne={'2,400'} />
                <DeviceValueWithStatusAndUnit classNameUsed={classes.motorTemp} deviceName={'Motor Temp(F) '} valueOne={'>81.5'} />
                <DeviceValueWithStatusAndUnit classNameUsed={classes.accousticMinMax} deviceName={'Accoustic Min/Max '} valueOne={'-13/12'} />

                <DeviceValueWithUnit classNameUsed={classes.pipsVal} valueOne={' ?? '} unitOne={'PSI'} />

                <DeviceValueWithStatus classNameUsed={classes.ltovVal} valueOne={'33'} deviceStatus={'Open'} /> */}
            </Card>
        </ThemeProvider>
    );
}

export default memo(ProcessFlow)