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
// class Charts extends React.Component {
//     state = {
//         lineChartData: {
//             labels: [],
//             datasets: [
//                 {
//                     label: '',
//                     fill: false,
//                     lineTension: 0.1,
//                     backgroundColor: 'rgba(75,192,192,0.4)',
//                     borderColor: 'rgba(75,192,192,1)',
//                     borderCapStyle: 'butt',
//                     borderDash: [],
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: 'miter',
//                     pointBorderColor: 'rgba(75,192,192,1)',
//                     pointBackgroundColor: '#fff',
//                     pointBorderWidth: 1,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                     pointHoverBorderColor: 'rgba(220,220,220,1)',
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 1,
//                     pointHitRadius: 10,
//                     data: []
//                 },
//             ]
//         },
//         lineChartOptions: {
//             responsive: true,
//             maintainAspectRatio: false,
//             tooltips: {
//                 enabled: true
//             },
//             scales: {
//                 y: {
//                     title: {
//                         display: true,
//                         text: '-'
//                     },
//                     ticks: {
//                         stepSize: 0.0001
//                     }
//                 },
//                 x: {
//                     title: {
//                         display: true,
//                         text: 'Date'
//                     },
//                     ticks: {
//                         stepSize: 0.0001
//                     }
//                 }
//             },

//         },
//         labelName: 'Z'
//     };

//     static getDerivedStateFromProps(props, current_state) {
//         if (current_state.labelName !== props.newLabelName) {
//             return {
//                 labelName: props.newLabelName,
//                 backgroundColor: props.newBackGrndColr,
//                 borderColor: props.newBorderColr
//             }
//             return null
//         }
//         return null
//     }


//     componentDidMount(props) {
//         const { allLabelNames, arrayOfRespectiveDataset, dataSetbackgroundColor } = this.props;

//         const labelN = allLabelNames.map((lblName, index) => {
//             let dataSet = {
//                 label: lblName,
//                 pointRadius: 4,
//                 pointBackgroundColor: "rgb(0,0,255)",
//                 data: arrayOfRespectiveDataset[index],
//                 fill: false,
//                 lineTension: 0,
//                 backgroundColor: dataSetbackgroundColor[index],
//                 borderColor: dataSetbackgroundColor[index],
//                 showLine: true
//             }
//             return dataSet

//         })

//        

//         var xyValues = [
//             { x: 50, y: 7 },
//             { x: 60, y: 8 },
//             { x: 70, y: 8 },
//             { x: 80, y: 9 },
//             { x: 90, y: 9 },
//             { x: 100, y: 9 },
//             { x: 110, y: 10 },
//             { x: 120, y: 11 },
//             { x: 130, y: 14 },
//             { x: 140, y: 14 },
//             { x: 150, y: 15 }
//         ];

//         this.setState({
//             lineChartData: {
//                 datasets: [{
//                     label: 'Hi',
//                     pointRadius: 4,
//                     pointBackgroundColor: "rgb(0,0,255)",
//                     data: xyValues,
//                     fill: false,
//                     lineTension: 0,
//                     backgroundColor: "rgba(0,0,255,1.0)",
//                     borderColor: "rgba(0,0,255,0.1)",
//                     showLine: true
//                 }]
//             },
//             lineChartOptions: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 tooltips: {
//                     enabled: true
//                 },
//                 scales: {
//                     y: {
//                         title: {
//                             display: true,
//                             text: this.props.siUnit
//                         },
//                         ticks: {
//                             stepSize: 0.0001
//                         }
//                     },
//                     x: {
//                         title: {
//                             display: true,
//                             text: 'Date'
//                         },
//                         ticks: {
//                             stepSize: 0.0001
//                         }
//                     }
//                 },

//             },
//         })

//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("componentDidUpdate prevProps", prevProps);
//         console.log("componentDidUpdate prevState", prevState);

//         const labelN = prevProps.allLabelNames.map((lblName, index) => {
//             let dataSet = {
//                 label: lblName,
//                 pointRadius: 4,
//                 pointBackgroundColor: "rgb(0,0,255)",
//                 data: prevProps.arrayOfRespectiveDataset[index],
//                 fill: false,
//                 lineTension: 0,
//                 backgroundColor: prevProps.dataSetbackgroundColor[index],
//                 borderColor: prevProps.dataSetbackgroundColor[index],
//                 showLine: true
//             }
//             return dataSet

//         })

//         console.log("labelN", labelN)

//         var xyValues = [
//             { x: 50, y: 7 },
//             { x: 60, y: 8 },
//             { x: 70, y: 8 },
//             { x: 80, y: 9 },
//             { x: 90, y: 9 },
//             { x: 100, y: 9 },
//             { x: 110, y: 10 },
//             { x: 120, y: 11 },
//             { x: 130, y: 14 },
//             { x: 140, y: 14 },
//             { x: 150, y: 15 }
//         ];

//         // this.setState({
//         //     lineChartData: {
//         //         datasets: [{
//         //             label: 'Hi',
//         //             pointRadius: 4,
//         //             pointBackgroundColor: "rgb(0,0,255)",
//         //             data: xyValues,
//         //             fill: false,
//         //             lineTension: 0,
//         //             backgroundColor: "rgba(0,0,255,1.0)",
//         //             borderColor: "rgba(0,0,255,0.1)",
//         //             showLine: true
//         //         }]
//         //     },
//         //     lineChartOptions: {
//         //         responsive: true,
//         //         maintainAspectRatio: false,
//         //         tooltips: {
//         //             enabled: true
//         //         },
//         //         scales: {
//         //             y: {
//         //                 title: {
//         //                     display: true,
//         //                     text: this.props.siUnit
//         //                 },
//         //                 ticks: {
//         //                     stepSize: 0.0001
//         //                 }
//         //             },
//         //             x: {
//         //                 title: {
//         //                     display: true,
//         //                     text: 'Date'
//         //                 },
//         //                 ticks: {
//         //                     stepSize: 0.0001
//         //                 }
//         //             }
//         //         },

//         //     },
//         // })
//     }

//     componentWillUnmount() {
//         this.ws.close();
//     }

//     render() {
//         const { classes } = this.props;
//         return (
//             <div className={classes["chart-container"]}>
//                 <ChartScatter
//                     data={this.state.lineChartData}
//                     options={this.state.lineChartOptions}
//                     type={"scatter"}
//                 />
//             </div>
//         );
//     }
// }

function ChartTest(props) {
    const [dataChart, setDataChart] = useState({});
    const { allLabelNames, arrayOfRespectiveDataset, dataSetbackgroundColor, siUnit, heightForChart = 120  , pluginsTitleText} = props;

    console.log("allLabelNames:-", allLabelNames);
     console.log("arrayOfRespectiveDataset:-", arrayOfRespectiveDataset);


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
                            callback: function (value, index, ticks) {
                                let microtimestamp = new Date(value * 1);
                                let dateToStr = microtimestamp.toUTCString().split(' ');
                                let cleanDate = dateToStr[2] + ' ' + dateToStr[1] + ' ' + dateToStr[4];
                                return cleanDate;
                            }
                            , stepSize: 0.00001
                        }
                    }
                },
            },
        }
        setDataChart(data)

    }, [arrayOfRespectiveDataset]);


    return (
        <div className='container'>
            <div style={{ height: heightForChart }}>
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

export default withStyles(styles, { withTheme: true })(ChartTest);