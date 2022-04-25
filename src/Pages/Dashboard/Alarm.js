import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Warning from "@material-ui/icons/Warning";
import { AlertMaker } from "../../Components/AlarmReuse";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(0),
    backgroundColor: "red",
    color: 'white',
    maxWidth: '50%'
  }
}));


function Alarm() {
  const classes = useStyles();
  const date = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
  return (
    <>
    <div style={{display: "flex"}}>
      <Typography componet="h2" variant="h5" gutterBottom>
          <h3 style={{ fontWeight: "800", fontSize: "20px" }}> Water Treatment Plant Alerts & Alarms</h3>
      </Typography> 
      <div style={{flexGrow: "0.7"}}></div>
      <Typography componet="h2" variant="h5" gutterBottom>
      <h3 style={{ fontWeight: "800", fontSize: "20px" }}> Location: Centennial</h3>    
      </Typography>
      </div>
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date} />
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date} />
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date} />
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date} />
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date} />
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date} />
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date} />
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date} color="#ffc000"/>
      <AlertMaker title="Influent Pump Station  Pump:#6  Vibration Error Code V-255" timestamp = {date}  color="#ffc000"/>

    </>
  )
}
export default Alarm;
