import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import { PumpTable } from "../../Components/PumpTable";
import { CheckCircleRounded, ErrorRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    width: "4%",
  },
  headerCardCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonColor: {
    backgroundColor: "#26616a",
    color: "white",
  },
  dropDownBtnStyle: {
    backgroundColor: "#73c1cc",
    color: "black",
    paddingTop: "4px",
    paddingLeft: "15px",
    paddingBottom: "4px",
    paddingRight: "14px",
    borderRadius: "5px",
    fontWeight: 600,
  },
  alignCenter: {
    textAlign: "center",
  },
  currentMotorImageWidth: {
    maxWidth: "22%",
  },
  marginForGrid: {
    marginTop: "8%",
  },
});

const PresureSensor = () => {
  const classes = useStyles();

  const WhiteTypographyStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: 3,
    border: `4px solid white`,
  };
  const BlackTypographyStyle = {
    backgroundColor: "#73c1cc",
    color: "black",
    height: "0.5%",
    borderRadius: 3,
    border: `3px solid #73c1cc`,
  };

  const currentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return mm + "/" + dd + "/" + yyyy;
  };

  const oldDate = () => {
    let nowDate = new Date();
    let onldDate = nowDate.setDate(nowDate.getDate() - 14);
    const Otoday = new Date(onldDate);
    const Oyyyy = Otoday.getFullYear();
    let Omm = Otoday.getMonth() + 1; // Months start at 0!
    let Odd = Otoday.getDate();
    if (Odd < 10) Odd = "0" + Odd;
    if (Omm < 10) Omm = "0" + Omm;
    return Omm + "/" + Odd + "/" + Oyyyy;
  };

  useEffect(() => {}, []);

  const columns = [
    "Model Number: ",
    "Location: ",
    "Status History",
    "",
    "Pump Status",
  ];
  const rows = [
    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#6 ",
      serialNumber: "CXJS179456",
      status: [
        {
          key: (
            <div style={{ display: "flex", width: "max-content" }}>
              <ErrorRounded
                style={{
                  color: "red",
                  background: "white",
                  marginRight: "10px",
                }}
              />
              <span>Unplanned Outage</span>
            </div>
          ),
          value: "4hrs 21 mins",
        },
        {
          key: "Alerts 7",
          value: (
            <Button
              style={{
                backgroundColor: "#26616a",
                color: "white",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              <Link
                to="/dashboard/alarm"
                style={{ color: "white", textDecoration: "none" }}
              >
                Details
              </Link>
            </Button>
          ),
        },
        {
          key: "Availability",
          value: "62%",
          style: { value: { color: "red" } },
        },
      ],
      pumpStatus: (
        <Button
          style={{
            backgroundColor: "#26616a",
            color: "white",
            fontWeight: "700",
            textTransform: "none",
          }}
        >
          <Link
            to="/devices/pumps/pumpSix"
            style={{ color: "white", textDecoration: "none" }}
          >
            Pump Status
          </Link>
        </Button>
      ),
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#5 ",
      serialNumber: "CXJS179425",
      status: [
        {
          key: (
            <div style={{ display: "flex", width: "max-content" }}>
              <ErrorRounded
                style={{
                  color: "#FDDA0D",
                  background: "white",
                  marginRight: "10px",
                }}
              />
              <span>Warning</span>
            </div>
          ),
          value: "1day 14hrs",
        },
        {
          key: "Alerts 4",
          value: (
            <Button
              style={{
                backgroundColor: "#26616a",
                color: "white",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              <Link
                to="/dashboard/alarm"
                style={{ color: "white", textDecoration: "none" }}
              >
                Details
              </Link>
            </Button>
          ),
        },
        {
          key: "Availability",
          value: "85%",
          style: { value: { color: "#FDDA0D" } },
        },
      ],
      pumpStatus: (
        <Button
          style={{
            backgroundColor: "#26616a",
            color: "white",
            fontWeight: "700",
            textTransform: "none",
          }}
        >
          <Link
            to="/devices/pumps/pumpFive"
            style={{ color: "white", textDecoration: "none" }}
          >
            Pump Status
          </Link>
        </Button>
      ),
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#4 ",
      serialNumber: "CXJS179437",
      status: [
        {
          key: (
            <div style={{ display: "flex", width: "max-content" }}>
              <CheckCircleRounded
                style={{
                  color: "green",
                  background: "white",
                  marginRight: "10px",
                }}
              />
              <span>Running</span>
            </div>
          ),
          value: "6days 20hrs",
        },
        {
          key: "Alerts: None",
          value: (
            <Button
              style={{
                backgroundColor: "#26616a",
                color: "white",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              <Link
                to="/dashboard/alarm"
                style={{ color: "white", textDecoration: "none" }}
              >
                Details
              </Link>
            </Button>
          ),
        },
        {
          key: "Availability",
          value: "95%",
          style: { value: { color: "green" } },
        },
      ],
      pumpStatus: (
        <Button
          style={{
            backgroundColor: "#26616a",
            color: "white",
            fontWeight: "700",
            textTransform: "none",
          }}
        >
          <Link
            to="/devices/pumps/pumpFour"
            style={{ color: "white", textDecoration: "none" }}
          >
            Pump Status
          </Link>
        </Button>
      ),
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#3 ",
      serialNumber: "CXJS179456",
      status: [
        {
          key: (
            <div style={{ display: "flex", width: "max-content" }}>
              <CheckCircleRounded
                style={{
                  color: "green",
                  background: "white",
                  marginRight: "10px",
                }}
              />
              <span>Running</span>
            </div>
          ),
          value: "6days 20hrs",
        },
        {
          key: "Alerts: None",
          value: (
            <Button
              style={{
                backgroundColor: "#26616a",
                color: "white",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              <Link
                to="/dashboard/alarm"
                style={{ color: "white", textDecoration: "none" }}
              >
                Details
              </Link>
            </Button>
          ),
        },
        {
          key: "Availability",
          value: "95%",
          style: { value: { color: "green" } },
        },
      ],
      pumpStatus: (
        <Button
          style={{
            backgroundColor: "#26616a",
            color: "white",
            fontWeight: "700",
            textTransform: "none",
          }}
        >
          <Link
            to="/devices/pumps/pumpThree"
            style={{ color: "white", textDecoration: "none" }}
          >
            Pump Status
          </Link>
        </Button>
      ),
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#2 ",
      serialNumber: "CXJS179425",
      status: [
        {
          key: (
            <div style={{ display: "flex", width: "max-content" }}>
              <CheckCircleRounded
                style={{
                  color: "green",
                  background: "white",
                  marginRight: "10px",
                }}
              />
              <span>Running</span>
            </div>
          ),
          value: "6days 20hrs",
        },
        {
          key: "Alerts: None",
          value: (
            <Button
              style={{
                backgroundColor: "#26616a",
                color: "white",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              <Link
                to="/dashboard/alarm"
                style={{ color: "white", textDecoration: "none" }}
              >
                Details
              </Link>
            </Button>
          ),
        },
        {
          key: "Availability",
          value: "95%",
          style: { value: { color: "green" } },
        },
      ],
      pumpStatus: (
        <Button
          style={{
            backgroundColor: "#26616a",
            color: "white",
            fontWeight: "700",
            textTransform: "none",
          }}
        >
          <Link
            to="/devices/pumps/pumpTwo"
            style={{ color: "white", textDecoration: "none" }}
          >
            Pump Status
          </Link>
        </Button>
      ),
    },

    {
      modelNumber: "CPW376936",
      location: "Influent Pump Station  Pump:#1 ",
      serialNumber: "CXJS179437",
      status: [
        {
          key: (
            <div style={{ display: "flex", width: "max-content" }}>
              <CheckCircleRounded
                style={{
                  color: "green",
                  background: "white",
                  marginRight: "10px",
                }}
              />
              <span>Running</span>
            </div>
          ),
          value: "6days 20hrs",
        },
        {
          key: "Alerts: None",
          value: (
            <Button
              style={{
                backgroundColor: "#26616a",
                color: "white",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              <Link
                to="/dashboard/alarm"
                style={{ color: "white", textDecoration: "none" }}
              >
                Details
              </Link>
            </Button>
          ),
        },
        {
          key: "Availability",
          value: "95%",
          style: { value: { color: "green" } },
        },
      ],
      pumpStatus: (
        <Button
          style={{
            backgroundColor: "#26616a",
            color: "white",
            fontWeight: "700",
            textTransform: "none",
          }}
        >
          <Link
            to="/devices/pumps/pumpOne"
            style={{ color: "white", textDecoration: "none" }}
          >
            Pump Status
          </Link>
        </Button>
      ),
    },
  ];

  return (
    <>
      <div>
        <Card className={classes.root}>
          <h3 style={{ fontWeight: "800", fontSize: "20px" }}>
            Influent Pump Station Status
          </h3>

          <Grid container spacing={2} display="flex">
            <Grid xs={3} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span>
                      <b>Description :</b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={3} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span>
                      <b>Location :</b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={4} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span>
                      <b>Status History :</b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} display="flex">
            <Grid xs={3} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span style={BlackTypographyStyle}>
                      <b> Centrifugal Pump </b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={3} item>
              <Box className={classes.headerCardCenter}>
                <Box style={WhiteTypographyStyle}>
                  <Typography>
                    <span style={BlackTypographyStyle}>
                      <b> Centennial </b>
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={4} item>
              <Box className={classes.headerCardCenter}>
                <HeaderCard lableName={"From : "} labelValue={oldDate()} />
                <HeaderCard lableName={"To : "} labelValue={currentDate()} />
              </Box>
            </Grid>
          </Grid>

          <PumpTable columns={columns} rows={rows} />
        </Card>
      </div>
    </>
  );
};

export default PresureSensor;
