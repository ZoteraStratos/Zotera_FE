import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Dashboard from "@material-ui/icons/Dashboard";
import Devices from "@material-ui/icons/Devices";
import Sensor from "@material-ui/icons/Send";
import Settings from "@material-ui/icons/Settings";

export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Home",
    items: [],
    path: "/",
  },
  {
    icon: <Dashboard />,
    title: "Dashboard",
    items: [
      {
        title: "Plant Process Flow",
        items: [],
        path: "/dashboard/plantProcessFlow",
      },
      {
        title: "Pump Process Flow",
        items: [],
        path: "/dashboard/processFlow",
      },

      {
        title: "Alarms",
        items: [],
        path: "/dashboard/alarm",
      },
      {
        title: "Video",
        items: [],
        path: "/dashboard/video",
      },
    ],
  },
  {
    icon: <Devices />,
    title: "Devices",
    items: [
      {
        title: "Pumps",
        path: "/devices/pumps",
        items: [
          {
            title: " Pump Station",
            items: [],
            path: "/devices/pumps",
          },
          {
            title: " Pump #1",
            items: [],
            path: "/devices/pumps/pumpOne",
          },
          {
            title: " Pump #2",
            items: [],
            path: "/devices/pumps/pumpTwo",
          },
          {
            title: " Pump #3",
            items: [],
            path: "/devices/pumps/pumpThree",
          },
          {
            title: " Pump #4",
            items: [],
            path: "/devices/pumps/pumpFour",
          },
          {
            title: " Pump #5",
            items: [],
            path: "/devices/pumps/pumpFive",
          },
          {
            title: " Pump #6",
            items: [],
            path: "/devices/pumps/pumpSix",
          },
        ],
      },
      {
        title: "Tanks",
        items: [],
        path: "/devices/tanks",
      },
      {
        title: "Gateways",
        items: [],
        path: "/devices/gateways",
      },
      {
        title: "RTUs",
        items: [],
        path: "/devices/rtus",
      },
      {
        title: "Nodes",
        items: [],
        path: "/devices/nodes",
      },
      {
        title: "LoRaWAN",
        items: [],
        path: "/devices/lorawan",
      },
    ],
  },
  {
    icon: <Sensor />,
    title: "Sensors",
    items: [
      {
        title: "Flow Meters",
        items: [],
        path: "/sensors/flowMeter",
      },
      {
        title: "Pressure Sensor",
        items: [],
        path: "/sensors/presureSensor",
      },
      {
        title: "Level Sensors",
        items: [],
        path: "/sensors/levelSensors",
      },
      {
        title: "Temperature Sensor",
        items: [],
        path: "/sensors/temperatureSensor",
      },
      {
        title: "Valves",
        items: [],
        path: "/sensors/valves",
      },
      {
        title: "Pump Monitor",
        items: [],
        path: "/sensors/pumpMonitor",
      },
    ],
  },
  {
    icon: <Settings />,
    title: "Settings",
    items: [],
    path: "/settings",
  },
];
