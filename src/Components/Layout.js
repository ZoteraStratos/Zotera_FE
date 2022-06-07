import { Component, lazy } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlantProcessFlow from "../Pages/Dashboard/PlantProcessFlow";

const LeftMenuItem = lazy(() => import("./Menu/LeftMenuItem"));
const Home = lazy(() => import("../Pages/Home/Home"));
const ProcessFlow = lazy(() => import("../Pages/Dashboard/ProcessFlow"));
const PumpStation = lazy(() => import("../Pages/Dashboard/pumpStation"));
const Alarm = lazy(() => import("../Pages/Dashboard/Alarm"));
const Video = lazy(() => import("../Pages/Dashboard/Video"));
const Gateways = lazy(() => import("../Pages/Devices/Gateways"));
const Lorawan = lazy(() => import("../Pages/Devices/Lorawan"));
const Nodes = lazy(() => import("../Pages/Devices/Nodes"));
const Pumps = lazy(() => import("../Pages/Devices/Pumps"));

const PumpOne = lazy(() => import("../Pages/Devices/Pumps/PumpOne"));
const PumpTwo = lazy(() => import("../Pages/Devices/Pumps/PumpTwo"));
const PumpThree = lazy(() => import("../Pages/Devices/Pumps/PumpThree"));
const PumpFour = lazy(() => import("../Pages/Devices/Pumps/PumpFour"));
const PumpFive = lazy(() => import("../Pages/Devices/Pumps/PumpFive"));
const PumpSix = lazy(() => import("../Pages/Devices/Pumps/PumpSix"));

const Rtus = lazy(() => import("../Pages/Devices/Rtus"));
const Tanks = lazy(() => import("../Pages/Devices/Tanks"));
const FlowMeter = lazy(() => import("../Pages/Sensors/FlowMeter"));
const PressureSensors = lazy(() => import("../Pages/Sensors/PressureSensors"));
const PumpMonitor = lazy(() => import("../Pages/Sensors/PumpMonitor"));
const SensorTemperature = lazy(() =>
  import("../Pages/Sensors/SensorsTemperature")
);
const Valves = lazy(() => import("../Pages/Sensors/Valves"));
const Settings = lazy(() => import("../Pages/Settings/Setting"));
const Temperature = lazy(() => import("../Pages/Temperature/Temperature"));
const SensorLevel = lazy(() => import("../Pages/Sensors/SensorLevel"));
const PageNotFound = lazy(() => import("../Pages/Error/PageNotFound"));

const drawerWidth = 220;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#1e496c",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(0deg)",
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(180deg)",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#426887",
    color: "#729fcf",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: "#426887",
    color: "#729fcf",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing() - 29,

    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(0.3),
  },
  grow: {
    flexGrow: 1,
  },
  links: {
    textDecoration: "none",
    color: "#729fcf",
  },
  imageStyle: {
    height: "66px",
    position: "absolute",
    top: "3px",
  },
});

class MiniDrawer extends Component {
  state = {
    open: true,
    anchorEl: null,
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick(item) {
    this.setState((prevState) => ({ [item]: !prevState[item] }));
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* Navigatrion bar top  start */}
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon
                classes={{
                  root: this.state.open
                    ? classes.menuButtonIconOpen
                    : classes.menuButtonIconClosed,
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
            >
              <img
                src="/zoteraLogo.png"
                alt="ZoteraLogo"
                className={classes.imageStyle}
              />
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Router>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar} />
            <List>
              <ListItem key="menuHeading" disableGutters></ListItem>
              <LeftMenuItem />
            </List>
          </Drawer>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/dashboard/plantProcessFlow"
                  element={<PlantProcessFlow />}
                />
                <Route
                  exact
                  path="/dashboard/pumpStation"
                  element={<PumpStation />}
                />
                <Route
                  exact
                  path="/dashboard/processFlow"
                  element={<ProcessFlow />}
                />
                <Route exact path="/dashboard/alarm" element={<Alarm />} />
                <Route exact path="/dashboard/video" element={<Video />} />

                <Route exact path="/devices/pumps" element={<Pumps />} />
                <Route
                  exact
                  path="/devices/pumps/pumpOne"
                  element={<PumpOne />}
                />
                <Route
                  exact
                  path="/devices/pumps/pumpTwo"
                  element={<PumpTwo />}
                />
                <Route
                  exact
                  path="/devices/pumps/pumpThree"
                  element={<PumpThree />}
                />
                <Route
                  exact
                  path="/devices/pumps/pumpFour"
                  element={<PumpFour />}
                />
                <Route
                  exact
                  path="/devices/pumps/pumpFive"
                  element={<PumpFive />}
                />
                <Route
                  exact
                  path="/devices/pumps/pumpSix"
                  element={<PumpSix />}
                />
                <Route exact path="/devices/tanks" element={<Tanks />} />

                <Route exact path="/devices/gateways" element={<Gateways />} />
                <Route exact path="/devices/rtus" element={<Rtus />} />
                <Route exact path="/devices/nodes" element={<Nodes />} />
                <Route exact path="/devices/lorawan" element={<Lorawan />} />
                <Route
                  exact
                  path="/sensors/flowMeter"
                  element={<FlowMeter />}
                />
                <Route
                  exact
                  path="/sensors/presureSensor"
                  element={<PressureSensors />}
                />
                <Route
                  exact
                  path="/sensors/levelSensors"
                  element={<SensorLevel />}
                />
                <Route
                  exact
                  path="/sensors/temperatureSensor"
                  element={<SensorTemperature />}
                />
                <Route exact path="/sensors/valves" element={<Valves />} />
                <Route
                  exact
                  path="/sensors/pumpMonitor"
                  element={<PumpMonitor />}
                />
                <Route exact path="/temperature" element={<Temperature />} />
                <Route exact path="/settings" element={<Settings />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </>
          </main>
        </Router>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
