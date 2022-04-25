import React, { useState, memo, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link, useLocation } from 'react-router-dom';
import { menu } from "./menu";
import { hasChildren } from "./utils";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '&$selected': {
      backgroundColor: '#426887',
      '&:hover': {
        backgroundColor: 'white',
        color: 'black'
      }
    },
  },
  selected: {
    backgroundColor: 'red',
  },
});


function LeftMenuItem() {
  const location = useLocation()

  return menu.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {

  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  const classes = useStyles();

  return (
    <ListItem component={Link} to={item.path} button
      classes={{ root: classes.root, selected: classes.selected }}
      selected >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const classes = useStyles();

  const { items: children } = item;
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen((prev) => !prev);
  };



  return (
    <React.Fragment>
      <ListItem onClick={handleClick} button
        classes={{ root: classes.root, selected: classes.selected }} selected >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};


export default memo(LeftMenuItem)