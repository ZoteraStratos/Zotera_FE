// import React from "react";
// import { Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import LiveVideoImage from '../../Images/liveVideoImage.png';
// import './animaiton.css'
// import { Tile } from "../../Components/Tile";
// const useStyles = makeStyles(theme => ({
//   paper: {
//     padding: theme.spacing(0),
//     backgroundColor: "red",
//     color: 'white',
//     maxWidth: '50%'
//   },
//   titles: {
//     backgroundColor:"yellow",
//     width:"200px",
//     height:"150px"
//   },
//   root: {
//     maxWidth: '60%'
//   },
//   centerText: {
//     flexGrow: 1,
//     textAlign: "center"
//   }

// }));


// function Video() {
//   const classes = useStyles();
//   const getStyle = (top, left, right)=>({
//     position: "absolute",
//     top,
//     left,
//     right
//   })
//   return (
//     <div style={{ width: "1000px", height: "550px" }}>
//       <img src="/video.png" width={"100%"} height="100%" />
//       <Tile style={{
//         width: "81px", height: "44px", position: "absolute",  top: "202px", left: "1066px"

//       }} src="/inf4.png"/>
//       <Tile style={{
//         width: "94px", height: "50px", position: "absolute",  top: "222px", left: "1016px"

//       }} src="/inf3.png"/>
//       <Tile style={{
//        width: "99px", height: "55px", position: "absolute",  top: "241px", left: "968px"

//       }} src="/inf2.png"/>
// <Tile style={{
//         width: "115px", height: "62px", position: "absolute", top: "254px", left: "896px"

//       }} src="/inf1.png"/>
//       <Tile style={{
//          width: "145px", height: "81px", position: "absolute", top: "283px", left: "821px"
//       }} src="/err.png" />
//       <div id="imgMotor" style={{ top: "343px", left: "959px", position: "absolute", }}>
//         <img className="blink " width="225px" height="120px" src="/blink-motor.png" />
//       </div>
//     </div>
//   )
// }
// export default Video;


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


import React , {memo} from "react";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import video from "../../Images/video.svg";
import { ReactComponent as Img } from "../../Images/video.svg";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, FormControl, Select, MenuItem } from "@material-ui/core";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import { ReactComponent as MotorDamage } from "../../Images/damageMotor.svg";
import { ReactComponent as MotorDamageLbl } from "../../Images/damageImageLbl.svg";
import { ReactComponent as MotorFiveLbl } from "../../Images/motorFiveLbl.svg";
import { ReactComponent as MotorFourLbl } from "../../Images/motorFourLbl.svg";
import { ReactComponent as MotorThreeLbl } from "../../Images/motorThree.svg";
import { ReactComponent as MotorTwoLbl } from "../../Images/motorTwoLbl.svg";


import { DeviceValue, DeviceValueWithUnit, DeviceValueWithStatus, DeviceStatus, DeviceValueWithStatusAndUnit, ForImage } from "../ReuseableComponents/DeviceValue";
import zIndex from "@material-ui/core/styles/zIndex";
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
  media: {
    height: "100%",
    marginTop: '-37px'
  },
  dmgMtrLbl: {
    position: "absolute",
    bottom: '42.7%',
    right: '28.8%',
    transform: 'translate(-50 %, -50 %)',
    width: '22.2%',
  },
  motorFiveLbl: {
    position: "absolute",
    bottom: '60.7%',
    right: '20.8%',
    transform: 'translate(-50 %, -50 %)',
    width: '13.2%',
    border: '2px solid #1edbb8',
    zIndex:'20'
  },
  motorFourLbl: {
    position: "absolute",
    bottom: '67.7%',
    right: '16.8%',
    transform: 'translate(-50 %, -50 %)',
    width: '10.2%',
    border: '2px solid #1edbb8',
    zIndex:'19'
  },
  motorThreeLbl: {
    position: "absolute",
    bottom: '73.7%',
    right: '13.8%',
    transform: 'translate(-50 %, -50 %)',
    width: '8.2%',
    border: '2px solid #1edbb8',
    zIndex:'18'
  },
  motorTwoLbl: {
    position: "absolute",
    bottom: '77.7%',
    right: '10.8%',
    transform: 'translate(-50 %, -50 %)',
    width: '6.2%',
    border: '2px solid #1edbb8',
    zIndex:'17'
  },
  lts: {
    position: "absolute",
    bottom: '30.7%',
    right: '2.8%',
    transform: 'translate(-50 %, -50 %)',
    width: '22.2%',
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
  },
  parent: {
    position: 'relative'
  },
  frontImage: {
    position: 'relative'
  },
  backImage: {
    position: 'absolute'
  }

}));

function ProcessFlow() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root + " " + classes.container} title="Video">

        <CardMedia
          className={classes.media}
          component="img" src={video}
          title="Video"
        />
        {/* <DeviceLabelName classNameUsed={classes.lts}>Lower Tank <br />Level Sensor <br />LTS</DeviceLabelName> */}

        {/* <Img className={classes.lts} /> */}
        {/* <ForImage classNameUsed={classes.lts} deviceName={'Pump Motor Speed (RPM) '} valueOne={'2,400'} pathNam={<MotorDamage />} /> */}

        <Box display='flex' alignItems='center' className={classes.lts}>
          <ThemeProvider theme={theme}>
            <MotorDamage style={{ width: '100%', height: '100%' }} />
          </ThemeProvider>
        </Box>

        <Box display='flex' alignItems='center' className={classes.dmgMtrLbl}>
          <ThemeProvider theme={theme}>
            <MotorDamageLbl style={{ width: '100%', height: '100%' }} />
          </ThemeProvider>
        </Box>

        <Box display='flex' alignItems='center' className={classes.motorFiveLbl}>
          <ThemeProvider theme={theme}>
            <MotorFiveLbl style={{ width: '100%', height: '100%' }} />
          </ThemeProvider>
        </Box>

        <Box display='flex' alignItems='center' className={classes.motorFourLbl}>
          <ThemeProvider theme={theme}>
            <MotorFourLbl style={{ width: '100%', height: '100%' }} />
          </ThemeProvider>
        </Box>

        <Box display='flex' alignItems='center' className={classes.motorThreeLbl}>
          <ThemeProvider theme={theme}>
            <MotorThreeLbl style={{ width: '100%', height: '100%' }}  />
          </ThemeProvider>
        </Box>

        <Box display='flex' alignItems='center' className={classes.motorTwoLbl}>
          <ThemeProvider theme={theme}>
              <MotorTwoLbl style={{ width: '100%', height: '100%' }}  />
          </ThemeProvider>
        </Box>



      </Card>
    </ThemeProvider>
  );
}


export default memo(ProcessFlow)