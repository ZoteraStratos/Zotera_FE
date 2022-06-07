import React, { memo } from "react";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { ReactComponent as Img } from "./pumpImage.svg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Typography, Box } from "@material-ui/core";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";

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
      maxWidth: "80%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "81.5%",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "80%",
    },
  },
  media: {
    height: "100%",
    marginTop: "-37px",
  },
  lts: {
    position: "absolute",
    bottom: "48.6%",
    left: "50.2%",
    width: "6.2%",
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
}));

const ProcessFlow = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} display="flex">
        <Grid xs={8} item>
          <Typography>
            <b className={classes.styleWatrTrtlbl}>
              Water Treatment Plant Process Flow
            </b>
          </Typography>
        </Grid>

        <Grid xs={4} item>
          <Box className={classes.headerCardCenter}>
            <HeaderCard lableName={"Location : "} labelValue={"Centennial "} />
          </Box>
        </Grid>
      </Grid>

      <Card
        className={classes.root + " " + classes.container}
        title="Water Treatment Plant Process Flow"
      >
        <CardMedia
          className={classes.media}
          component="img"
          src="/imageOne.svg"
          title="Process Flow Image"
        />

        <Box display="flex" alignItems="center" className={classes.lts}>
          <ThemeProvider theme={theme}>
            <Img />
          </ThemeProvider>
        </Box>

        <div className={classes.background}></div>

        <div className={classes.img}></div>
      </Card>
    </ThemeProvider>
  );
};

export default memo(ProcessFlow);
