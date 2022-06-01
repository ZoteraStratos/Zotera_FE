import React from 'react';
import { Typography, Box } from '@material-ui/core';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

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

theme.typography.h3 = {
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '0.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.7rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },
};

const DeviceLabelName = ({ classNameUsed, children }) => {
   
    const TypographyStyle = {
        color: "black",
        fontWeight: 'bolder'
    }
    return (
        <Box display='flex' alignItems='center' className={classNameUsed} >
            <ThemeProvider theme={theme}>
                <Typography variant="h3" style={TypographyStyle} >
                    {children}
                </Typography>
            </ThemeProvider>
        </Box>
    )
}

export default DeviceLabelName;