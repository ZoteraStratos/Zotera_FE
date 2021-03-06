import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RowRadioButtonsGroup from "./RadioButtons";
import Temp from "./Thermometer";
import Grid from "@material-ui/core/Grid";
import GlobalChart from "./Chart/GlobalChart";
import "../../Components/pumptable.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  allLabelNames,
  arrayOfRespectiveDataset,
  iCOMOX_Temperature_Value,
  siUnit = " HZ",
  dataSetbackgroundColor,
  loading,
  history,
}) {
  const [value, setValue] = useState(0);

  const [areaSection, setAreaSection] = useState({
    allLabelNames: [allLabelNames[0], allLabelNames[1]],
    dataSetbackgroundColor: [
      dataSetbackgroundColor[0],
      dataSetbackgroundColor[1],
    ],
    arrayOfRespectiveDataset: [
      arrayOfRespectiveDataset[0],
      arrayOfRespectiveDataset[1],
    ],
  });

  const [selectedRadioButtons, setselectedRadioButtons] = useState("x");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeArea = (areaName) => {
    setselectedRadioButtons(areaName);
  };

  useEffect(() => {
    if (selectedRadioButtons) {
      if (selectedRadioButtons === "x") {
        setAreaSection({
          allLabelNames: [allLabelNames[0], allLabelNames[1]],
          dataSetbackgroundColor: [
            dataSetbackgroundColor[0],
            dataSetbackgroundColor[1],
          ],
          arrayOfRespectiveDataset: [
            arrayOfRespectiveDataset[0],
            arrayOfRespectiveDataset[1],
          ],
        });
      } else if (selectedRadioButtons === "y") {
        setAreaSection({
          allLabelNames: [allLabelNames[2], allLabelNames[2]],
          dataSetbackgroundColor: [
            dataSetbackgroundColor[2],
            dataSetbackgroundColor[3],
          ],
          arrayOfRespectiveDataset: [
            arrayOfRespectiveDataset[2],
            arrayOfRespectiveDataset[3],
          ],
        });
      } else {
        setAreaSection({
          allLabelNames: [allLabelNames[4], allLabelNames[5]],
          dataSetbackgroundColor: [
            dataSetbackgroundColor[4],
            dataSetbackgroundColor[5],
          ],
          arrayOfRespectiveDataset: [
            arrayOfRespectiveDataset[4],
            arrayOfRespectiveDataset[5],
          ],
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRadioButtons]);

  useEffect(() => {
    setselectedRadioButtons("x");
  }, []);

  useEffect(() => {
    if (selectedRadioButtons === "x") {
      setAreaSection({
        allLabelNames: [allLabelNames[0], allLabelNames[1]],
        dataSetbackgroundColor: [
          dataSetbackgroundColor[0],
          dataSetbackgroundColor[1],
        ],
        arrayOfRespectiveDataset: [
          arrayOfRespectiveDataset[0],
          arrayOfRespectiveDataset[1],
        ],
      });
    } else if (selectedRadioButtons === "y") {
      setAreaSection({
        allLabelNames: [allLabelNames[2], allLabelNames[2]],
        dataSetbackgroundColor: [
          dataSetbackgroundColor[2],
          dataSetbackgroundColor[3],
        ],
        arrayOfRespectiveDataset: [
          arrayOfRespectiveDataset[2],
          arrayOfRespectiveDataset[3],
        ],
      });
    } else {
      setAreaSection({
        allLabelNames: [allLabelNames[4], allLabelNames[5]],
        dataSetbackgroundColor: [
          dataSetbackgroundColor[4],
          dataSetbackgroundColor[5],
        ],
        arrayOfRespectiveDataset: [
          arrayOfRespectiveDataset[4],
          arrayOfRespectiveDataset[5],
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayOfRespectiveDataset]);

  return (
    <Box sx={{ height: "25%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Live Data"
            {...a11yProps(0)}
            style={{ textTransform: "none" }}
          />
          <Tab
            label="Statistics"
            {...a11yProps(1)}
            style={{ textTransform: "none" }}
          />
          <Tab
            label="Configuration"
            {...a11yProps(2)}
            style={{ textTransform: "none" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <RowRadioButtonsGroup
              selectedRadioButtons={selectedRadioButtons}
              handleChangeArea={handleChangeArea}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={8} sm={8}>
            <GlobalChart
              newBackGrndColr={"#87CEEB"}
              newBorderColr={"#87CEEB"}
              allLabelNames={areaSection.allLabelNames}
              arrayOfRespectiveDataset={areaSection.arrayOfRespectiveDataset}
              dataSetbackgroundColor={areaSection.dataSetbackgroundColor}
              siUnit={siUnit}
              heightForChart={250}
              pluginsTitleText={"Vibrations Spectrum"}
              loading={loading}
              history={history}
            />
          </Grid>
          <Grid item xs={2} sm={2} ml={2}>
            <Temp
              id="dial7"
              value={`${parseFloat(iCOMOX_Temperature_Value).toFixed(2)}`}
              title=""
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
