import { TableBody, TableCell, TableHead, TableRow, Table, TableContainer, Paper } from '@material-ui/core'
import React from 'react'
import { useCallback } from 'react'
import "./pumptable.css"
import { ReactComponent as Img } from "../Images/bluePumpImage.svg";
import { Typography, Box } from '@material-ui/core';


export const PumpTable = (props) => {

    const BlackTypographyStyle = {
        backgroundColor: '#73c1cc',
        color: 'black',
        height: "0.5%",
        borderRadius: 3,
        border: `3px solid #73c1cc`
    }
    const WhiteTypographyStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 3,
        border: `4px solid white`
    }


    console.log(props.columns)
    const getColumns = () => {
        return <TableHead>
            <TableRow>
                <TableCell></TableCell>
                {props.columns.map((c) => {
                    return <TableCell>{c}</TableCell>
                })}
            </TableRow>
        </TableHead>

    }
    const getRows = useCallback(() => {
        return <TableBody>

            {props.rows.map((c) => {
                return (<>
                    <TableRow>
                        <TableCell><Img width="150" height="100" /></TableCell>
                        <TableCell>
                            <TableContainer component={Paper} ><Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Box display='flex' >
                                                <Box style={WhiteTypographyStyle}>
                                                    <Typography>
                                                        <span >
                                                            <b>Location ::</b>
                                                        </span>
                                                        <span style={BlackTypographyStyle}>
                                                            <b>{c.location} </b>
                                                        </span>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Box display='flex' >
                                                <Box style={WhiteTypographyStyle}>
                                                    <Typography>
                                                        <span >
                                                            <b>Model Number ::</b>
                                                        </span>
                                                        <span style={BlackTypographyStyle}>
                                                            <b>{c.modelNumber} </b>
                                                        </span>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Box display='flex' >
                                                <Box style={WhiteTypographyStyle}>
                                                    <Typography>
                                                        <span >
                                                            <b>Serial Number ::</b>
                                                        </span>
                                                        <span style={BlackTypographyStyle}>
                                                            <b>{c.serialNumber}</b>
                                                        </span>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </TableCell>

                        <TableCell>
                            <TableContainer component={Paper} ><Table>
                                <TableBody>
                                    {c.status.map((status) => {
                                        return <TableRow>
                                            <TableCell className='statustable' style={status.style?.key}>{status.key}</TableCell>
                                            <TableCell className='statustable' style={status.style?.value}>{status.value}</TableCell>
                                        </TableRow>
                                    })}

                                </TableBody>
                            </Table>
                            </TableContainer>
                        </TableCell>
                        <TableCell>{c.pumpStatus}</TableCell>
                    </TableRow>
                </>
                )
            })}
        </TableBody>

    }, [props.rows])
    return (<>
        {/* <TableContainer component={Paper} style={{margin: "2%"}}> */}
        <TableContainer component={Paper} >
            <Table style={{ width: "100%" }} >
                {/* {getColumns()} */}
                {getRows()}
            </Table>
        </TableContainer>
    </>)
}


