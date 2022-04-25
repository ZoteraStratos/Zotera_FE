import React, { useEffect, useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import ChartScatter from "./ChartingComponent";

import { Chart as charts, registerables } from 'chart.js';
charts.register(...registerables);

const styles = theme => ({
    "chart-container": {
        height: 220
    }
});


function ChartWIthoutDate(props) {
    const [dataChart, setDataChart] = useState({});
    const { allLabelNames, arrayOfRespectiveDataset, dataSetbackgroundColor ,siUnit} = props;
    useEffect(() => {
        var xyValues = [
            { y: 0.014612198, x: 1644486328515 },
            { y: 0.0097408295, x: 1644486329520 },
            { y: 0.019481659, x: 1644486330521 },
            { y: 0.017045975, x: 1644486331523 },
        ];

        let data = {
            lineChartData: {
                datasets: [{
                    label: 'Hi',
                    pointRadius: 1,
                    pointBackgroundColor: "rgb(0,0,255)",
                    data: xyValues,
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    showLine: true
                }]
            },
            lineChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: true
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: siUnit
                        },
                        ticks: {
                            stepSize: 0.0001
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        },
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, ticks) {
                                let microtimestamp = new Date(value * 1);
                                let dateToStr = microtimestamp.toUTCString().split(' ');
                                let cleanDate = dateToStr[2] + ' ' + dateToStr[1] + ' ' + dateToStr[4];
                                return cleanDate;
                            }
                        }
                    }
                },

            },
        }
        setDataChart(data)
    }, []);

    useEffect(() => {

        const labelN = allLabelNames.map((lblName, index) => {
            let dataSet = {
                label: lblName,
                pointRadius: 1,
                pointBackgroundColor: 'black',
                data: arrayOfRespectiveDataset[index],
                fill: false,
                lineTension: 0,
                backgroundColor: dataSetbackgroundColor[index],
                borderColor: dataSetbackgroundColor[index],
                showLine: true
            }
            return dataSet
        })


        let data = {
            lineChartData: {
                datasets: labelN
            },
            lineChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: true
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: siUnit
                        },
                        ticks: {
                            stepSize: 0.0001
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        },
                        ticks: {
                            // Include a dollar sign in the ticks
                            // callback: function (value, index, ticks) {
                            //     let microtimestamp = new Date(value * 1);
                            //     let dateToStr = microtimestamp.toUTCString().split(' ');
                            //     let cleanDate = dateToStr[2] + ' ' + dateToStr[1] + ' ' + dateToStr[4];
                            //     return cleanDate;
                            // }
                        }
                    }
                },

            },
        }
        setDataChart(data)
        // console.log("labelN", labelN)
        // console.log("data", data)
    }, [arrayOfRespectiveDataset]);



    return (
        <div className='container'>
            <div style={{ height: 240 }}>
                {
                    dataChart && dataChart?.lineChartData && <ChartScatter
                        data={dataChart.lineChartData}
                        options={dataChart.lineChartOptions}
                        type={"scatter"}
                    />
                }
            </div>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(ChartWIthoutDate);