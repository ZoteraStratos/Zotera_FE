import React, { memo, useState } from "react";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import processFlow from "../../Images/testImage6.png";
import { DeviceValue, DeviceValueWithUnit, DeviceValueWithStatus, DeviceStatus, DeviceValueWithStatusAndUnit } from "../ReuseableComponents/DeviceValue";
import Grid from "@material-ui/core/Grid";
import { Typography, Box, FormControl, Select, MenuItem } from "@material-ui/core";
import { HeaderCard } from "../ReuseableComponents/HeaderCard";
import { ReactComponent as Img } from "../../Images/pumpProcessFlow.svg";
//import pumpProcessFlow from "../../Images/pumpProcessFlow.svg";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});


const useStyles = makeStyles((theme) => ({
    root: {

        [theme.breakpoints.up('sm')]: {
            maxWidth: "80%",
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: "100%",
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: "76%",
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: "80%",
        },
    },
    media: {
        height: "70%"
    },
    fiberManualRecordIcon: {
        fontSize: "12px"
    },
    greenColorIcon: {
        color: "#56ff54"
    },
    redColorIcon: {
        color: "#FF2E2E"
    },
    typographyStyle: {
        color: "black",
        fontSize: '10px',
        fontWeight: 'bolder'
    },
    container: {
        position: "relative",
        textAlign: "center",
    },
    content: {
        backgroundColor: '#c0c0c0'
    },
    lts: {
        position: "absolute",
        bottom: '36%',
        left: '1.3%',
        transform: 'translate(-50 %, -50 %)',
    },
    utofm: {
        position: "absolute",
        bottom: '49%',
        left: '10%',
        transform: 'translate(-50 %, -50 %)',
    },
    utov: {
        position: "absolute",
        bottom: '49%',
        left: '23%',
        transform: 'translate(-50 %, -50 %)',
    },
    utls: {
        position: "absolute",
        top: '09%',
        left: '29%',
        transform: 'translate(-50 %, -50 %)',
    },
    utiv: {
        position: "absolute",
        top: '23%',
        left: '45%',
        transform: 'translate(-50 %, -50 %)',
    },
    utips: {
        position: "absolute",
        top: '23%',
        right: '33%',
        transform: 'translate(-50 %, -50 %)',
    },
    tempSensr: {
        position: "absolute",
        top: '23%',
        right: '24.5%',
        transform: 'translate(-50 %, -50 %)',
    },
    utifm: {
        position: "absolute",
        top: '23%',
        right: '10.5%',
        transform: 'translate(-50 %, -50 %)',
    },
    digitalPrsSnsr: {
        position: "absolute",
        top: '34%',
        right: '0.5%',
        transform: 'translate(-50 %, -50 %)',
    },
    pump: {
        position: "absolute",
        bottom: '18%',
        left: '38.5%',
        transform: 'translate(-50 %, -50 %)',
    },
    pmtr: {
        position: "absolute",
        bottom: '04%',
        left: '37.5%',
        transform: 'translate(-50 %, -50 %)',
    },
    pips: {
        position: "absolute",
        bottom: '01%',
        left: '28%',
        transform: 'translate(-50 %, -50 %)',
    },
    afs: {
        position: "absolute",
        bottom: '03%',
        left: '22%',
        transform: 'translate(-50 %, -50 %)',
    },
    ltov: {
        position: "absolute",
        bottom: '03%',
        left: '12%',
        transform: 'translate(-50 %, -50 %)',
    },
    blackTypographyStyle: {
        backgroundColor: 'black',
        color: 'white',
        height: "0.5%",
        borderRadius: 3,
        border: `3px solid black`
    },
    whitePaperStyle: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 3,
        border: `4px solid white`
    },
    ltlsVal: {
        position: "absolute",
        bottom: '18%',
        left: '9.5%',
        transform: 'translate(-50 %, -50 %)',
    },
    dropDownBtnStyle: {
        backgroundColor: 'rgb(115, 193, 204)',
        color: 'black',
        paddingTop: '2px',
        paddingLeft: '15px',
        paddingBottom: '2px',
        paddingRight: '14px',
        borderRadius: '5px',
        fontWeight: 600
    },
    fontSize: {
        fontSize: '19px'
    },
    headerCardCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
}));

 function ProcessFlow() {
    const classes = useStyles();

    const [selected, setSelected] = useState("Influent Pump Station Pump: #6");
    const [values, setValues] = React.useState([
        "Influent Pump Station Pump: #1",
        "Influent Pump Station Pump: #2",
        "Influent Pump Station Pump: #3",
        "Influent Pump Station Pump: #4",
        "Influent Pump Station Pump: #5",
        "Influent Pump Station Pump: #6",
    ]);

    function handleChange(event) {
        setSelected(event.target.value);
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container >
                <Grid xs={3} item>
                    <Box className={classes.whitePaperStyle}>
                        <Typography>
                            <span >
                                <b className={classes.fontSize}>Pump Process Flow :</b>
                            </span>
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={4} item>
                    <Box className={classes.headerCardCenter}>
                        <FormControl>
                            <Select className={classes.dropDownBtnStyle}
                                value={selected}
                                onChange={handleChange}
                                inputProps={{
                                    name: "pumpStation",
                                    id: "pumpStation",
                                }}
                            >
                                {values.map((value, index) => {
                                    return <MenuItem value={value} key={index * 2.54}>{value}</MenuItem>;
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <br />
            <div className={classes.headerCardCenter}>
                <Grid container >
                    <Grid xs={4} item>
                        <Box className={classes.headerCardCenter}>
                            <HeaderCard lableName={'Description : '} labelValue={'Centrifugal Pump'} />
                        </Box>
                    </Grid>
                    <Grid xs={4} item>
                        <Box className={classes.headerCardCenter}>
                            <HeaderCard lableName={'Site Location : '} labelValue={'Centennial'} />
                        </Box>
                    </Grid>
                    <Grid xs={4} item>
                        <Box className={classes.headerCardCenter}>
                            <HeaderCard lableName={'Pump Location : '} labelValue={'Pump Stattion 5N '} />
                        </Box>
                    </Grid>
                </Grid>

            </div>

            <Card className={classes.root + " " + classes.container} title="Pump Process Flow :">
                {/* <CardMedia
                    className={classes.media}
                    component="img" src={pumpProcessFlow}
                    title="Pump Process Flow"
                /> */}
            </Card>
            <div className={classes.root + " " + classes.container + " " + classes.headerCardCenter} >
                <Grid container >
                    <Grid xs={12} item>
                    <Img style={{ width: '100%', height: '100%' , marginLeft:'16%'}} />
                    </Grid>
                </Grid>
               
            </div>

        </ThemeProvider>
    );
}

export default memo(ProcessFlow)