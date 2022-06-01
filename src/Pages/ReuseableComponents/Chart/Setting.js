
import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createTheme  } from "@material-ui/core/styles";
import Charts from "./Charts";
import Chart from 'chart.js/auto'

const theme = createTheme();

const Setting = () => {
  return (
    // <MuiThemeProvider theme={theme}>
      <Charts />
    // </MuiThemeProvider>
  );
};

export default Setting;