import React from "react";
import { Paper, Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Warning from "@material-ui/icons/Warning";


export const AlertMaker = (props) => {


  return <><div style={{ display: "flex", marginLeft: "2%" }}>
    <Warning style={{ color: props.color || "red", fontSize: "30px", borderRadius: "50%" }} />
    <Paper style={{
      padding: "0px",
      backgroundColor: props.color || "red",
      color: 'black',
      height: "max-content",
      marginLeft: "10px"
    }}>
      <ListItem style={{ padding: "0px 16px" }}>
        <ListItemText style={{ width: "100%", "&>span": "font" }} ><span style={{ fontWeight: "800" }}>{props.title}</span></ListItemText>
      </ListItem>
    </Paper>
    <div style={{ flexGrow: "0.7" }}></div>
    <Typography componet="h2" variant="h5" gutterBottom>
      {props.timestamp}
    </Typography>
  </div>
    <div style={{ marginLeft: "14%", fontSize: "18px", fontWeight: "600" }}>{props.value}</div>
  </>
}