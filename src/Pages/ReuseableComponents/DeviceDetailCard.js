import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Box } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        textAlign: 'center'
    },
    media: {
        maxWidth: "3%",
        height: '10px',
    },
    typographyStyle: {
        backgroundColor: 'black',
        color: 'white',
        height: "0.4%",
        borderRadius: 3,
        border: `3px solid black`
    },
    marginAutoContainer: {
        width: 500,
        height: 80,
        display: 'flex',
        backgroundColor: 'gold',
    },
    marginAutoItem: {
        margin: 'auto'
    },
    alignItemsAndJustifyContent: {
        width: 500,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    deviceNameColor: {
        color: "#426887"
    },
    hide: {
        display: "none"
      },
    // typographyStyle: {
    //     color: "black",
    //     fontSize: '10px',
    //     fontWeight: 'bolder'
    // }

});

export default function DeviceDetailCard({ imagePath, deviceNameBlueClr, deviceDetailBlackColor = null, deviceDetailBlackColorSiUnit = null, deviceReading, classNameUsed }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box m="auto">
                    <img src={imagePath} alt="Image " className={classNameUsed} />
                </Box>
                <CardContent>
                    <Typography variant="subtitle1" gutterBottom className={classes.deviceNameColor} >
                        {deviceNameBlueClr}
                        <br />
                    </Typography>
                    <span><b>{deviceDetailBlackColor}</b> </span>
                    <span { ...deviceReading? { className: classes.typographyStyle }: { className: classes.hide}}> {deviceReading}</span>
                    <span><b>{deviceDetailBlackColorSiUnit}</b> </span>
                </CardContent>
            </Box>

            

        </React.Fragment>
    )
}
