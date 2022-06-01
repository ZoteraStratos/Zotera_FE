import React ,{memo} from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Warning from "@material-ui/icons/Warning";

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
  return (
    <>
      <Typography componet="h2" variant="h5" gutterBottom>
        Water Treatment Plant Alerts & Alarms
      </Typography>

      <Paper className={classes.paper}>
        <ListItem >
          <ListItemIcon>
            <Warning color="disabled" />
          </ListItemIcon>
          <ListItemText primary={' Water Treatment Plant Alerts & Alarms'} />
        </ListItem>
      </Paper>
      <br />
      <Paper className={classes.paper}>
        <ListItem >
          <ListItemIcon>
            <Warning color="disabled" />
          </ListItemIcon>
          <ListItemText primary={' Water Treatment Plant Alerts & Alarms'} />
        </ListItem>
      </Paper>
      <br />
      <Paper className={classes.paper}>
        <ListItem >
          <ListItemIcon>
            <Warning color="disabled" />
          </ListItemIcon>
          <ListItemText primary={' Water Treatment Plant Alerts & Alarms'} />
        </ListItem>
      </Paper>


    </>
  )
}
export default memo(Alarm);
