import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import { DeviceValue } from '../ReuseableComponents/DeviceValue';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(0),
        backgroundColor: "red",
        color: 'white',
        maxWidth: '50%'
    },
    root: {
        maxWidth: '60%'
    },
    centerText: {
        flexGrow: 1,
        textAlign: "center"
    },
    container: {
        position: 'relative',

    }
}));


function ReuseableTank({ imageName, imagetank, tankValue, classsForImage }) {
    const classes = useStyles();
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box className={[classes.root, classes.container]} >
                    <Typography component="h4" variant="h6" className={classes.centerText}><b>{imageName}</b></Typography>
                    <CardMedia
                        className={[classes.media]}
                        component="img" src={imagetank}
                        title={imageName}
                    />
                    <DeviceValue classNameUsed={classsForImage} valueOne={tankValue} />
                </Box>
            </Box>
        </>
    )
}
export default ReuseableTank;
