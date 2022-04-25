import React from 'react';
import { Typography, Box } from '@material-ui/core';



export const HeaderCard = ({ classNameUsed=null, lableName, labelValue }) => {

    const WhiteTypographyStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 3,
        border: `4px solid white`
    }
    const BlackTypographyStyle = {
        backgroundColor: '#73c1cc',
        color: 'black',
        height: "0.5%",
        borderRadius: 3,
        border: `3px solid #73c1cc`
    }

    return (
        <Box display='flex'  className={classNameUsed}>
            <Box style={WhiteTypographyStyle}>
                <Typography>
                    <span >
                        <b> {lableName}</b>
                    </span>
                    <span style={BlackTypographyStyle}>
                    <b> {labelValue} </b>
                    </span>
                    <br />
                </Typography>
            </Box>
        </Box>
    )
}

