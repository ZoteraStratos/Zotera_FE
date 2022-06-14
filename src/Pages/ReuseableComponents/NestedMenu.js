import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import InsertDriveFileOutlined from "@material-ui/icons/InsertDriveFileOutlined";
import SubdirectoryArrowRight from "@material-ui/icons/SubdirectoryArrowRight";
import { hasChildren } from "./utils";
import FolderOpen from "@material-ui/icons/FolderOpen";

export default function NestedMenu({ menu, handleSelectedFilePath }) {
  return menu.map((item, key) => (
    <MenuItem
      key={key}
      item={item}
      handleSelectedFilePath={handleSelectedFilePath}
    />
  ));
}

const MenuItem = ({ item, handleSelectedFilePath }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return (
    <Component item={item} handleSelectedFilePath={handleSelectedFilePath} />
  );
};

const SingleLevel = ({ item, handleSelectedFilePath }) => {
  const handleSelectFileClick = (filePathname) => {
    handleSelectedFilePath(filePathname);
  };

  return (
    <>
      <ListItem button onClick={() => handleSelectFileClick(item.filePath)}>
        <ListItemIcon>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SubdirectoryArrowRight />
          <InsertDriveFileOutlined />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </>
  );
};

const MultiLevel = ({ item, handleSelectedFilePath }) => {
  const { items } = item;
  const [open, setOpen] = useState(false);
  const [depth, setDepth] = useState(5);

  const handleClick = () => {
    setOpen((prev) => !prev);
    setDepth(depth + 1);
  };

  return (
    <>
      <ListItem button onClick={() => handleClick(item.title)}>
        {open ? (
          <ListItemIcon>
            <FolderOpen />
          </ListItemIcon>
        ) : (
          <ListItemIcon>{item.icon}</ListItemIcon>
        )}
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((child, key) => (
            <MenuItem
              key={key}
              item={child}
              handleSelectedFilePath={handleSelectedFilePath}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};
