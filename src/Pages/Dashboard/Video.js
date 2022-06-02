import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import video from "../../Images/video.svg";
import { Box } from "@material-ui/core";
import { ReactComponent as MotorDamage } from "../../Images/damageMotor.svg";
import { ReactComponent as MotorDamageLbl } from "../../Images/damageImageLbl.svg";
import { ReactComponent as MotorFiveLbl } from "../../Images/motorFiveLbl.svg";
import { ReactComponent as MotorFourLbl } from "../../Images/motorFourLbl.svg";
import { ReactComponent as MotorThreeLbl } from "../../Images/motorThree.svg";
import { ReactComponent as MotorTwoLbl } from "../../Images/motorTwoLbl.svg";

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
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "100%",
    },
  },
  media: {
    height: "100%",
    marginTop: "-37px",
  },
  dmgMtrLbl: {
    position: "absolute",
    bottom: "42.7%",
    right: "28.8%",
    transform: "translate(-50 %, -50 %)",
    width: "22.2%",
  },
  motorFiveLbl: {
    position: "absolute",
    bottom: "60.7%",
    right: "20.8%",
    transform: "translate(-50 %, -50 %)",
    width: "13.2%",
    border: "2px solid #1edbb8",
    zIndex: "20",
  },
  motorFourLbl: {
    position: "absolute",
    bottom: "67.7%",
    right: "16.8%",
    transform: "translate(-50 %, -50 %)",
    width: "10.2%",
    border: "2px solid #1edbb8",
    zIndex: "19",
  },
  motorThreeLbl: {
    position: "absolute",
    bottom: "73.7%",
    right: "13.8%",
    transform: "translate(-50 %, -50 %)",
    width: "8.2%",
    border: "2px solid #1edbb8",
    zIndex: "18",
  },
  motorTwoLbl: {
    position: "absolute",
    bottom: "77.7%",
    right: "10.8%",
    transform: "translate(-50 %, -50 %)",
    width: "6.2%",
    border: "2px solid #1edbb8",
    zIndex: "17",
  },
  lts: {
    position: "absolute",
    bottom: "30.7%",
    right: "2.8%",
    width: "22.2%",
    transform: "scale(1)",
    animation: "$pulse 1s infinite",
  },
  container: {
    position: "relative",
    textAlign: "center",
  },
  content: {
    backgroundColor: "#c0c0c0",
  },
  "@keyframes pulse": {
    "0%": {
      visibility: "visible",
    },
    "70%": {
      visibility: "hidden",
    },
    "100%": {
      visibility: "hidden",
    },
  },
  background: {
    width: "100px",
    height: "100px",
    position: "relative",
    backgroundColor: "#0000ff00",
    "&::after": {
      content: "",
      position: "absolute",
      width: "20px",
      height: "20px",
      top: "5px",
      left: "5px",
      backgroundColor: "red",
    },
  },
  img: {
    display: "inline-block",
    width: "128px",
    height: "128px",
    position: "relative",
    "&::after": {
      content: "",
      display: "inline-block",
      position: "absolute",
      width: "48px",
      height: "48px",
      top: "40px",
      left: "40px",
    },
  },
  styleWatrTrtlbl: {
    fontSize: "19px",
  },
  parent: {
    position: "relative",
  },
  frontImage: {
    position: "relative",
  },
  backImage: {
    position: "absolute",
  },
}));

const ProcessFlow = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root + " " + classes.container} title="Video">
        <CardMedia
          className={classes.media}
          component="img"
          src={video}
          title="Video"
        />
        <Box display="flex" alignItems="center" className={classes.lts}>
          <ThemeProvider theme={theme}>
            <MotorDamage style={{ width: "100%", height: "100%" }} />
          </ThemeProvider>
        </Box>

        <Box display="flex" alignItems="center" className={classes.dmgMtrLbl}>
          <ThemeProvider theme={theme}>
            <MotorDamageLbl style={{ width: "100%", height: "100%" }} />
          </ThemeProvider>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          className={classes.motorFiveLbl}
        >
          <ThemeProvider theme={theme}>
            <MotorFiveLbl style={{ width: "100%", height: "100%" }} />
          </ThemeProvider>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          className={classes.motorFourLbl}
        >
          <ThemeProvider theme={theme}>
            <MotorFourLbl style={{ width: "100%", height: "100%" }} />
          </ThemeProvider>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          className={classes.motorThreeLbl}
        >
          <ThemeProvider theme={theme}>
            <MotorThreeLbl style={{ width: "100%", height: "100%" }} />
          </ThemeProvider>
        </Box>

        <Box display="flex" alignItems="center" className={classes.motorTwoLbl}>
          <ThemeProvider theme={theme}>
            <MotorTwoLbl style={{ width: "100%", height: "100%" }} />
          </ThemeProvider>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default ProcessFlow;
