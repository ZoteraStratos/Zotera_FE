import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Chart from "./ChartingComponent";

import { Chart as charts, registerables } from 'chart.js';
charts.register(...registerables);

const styles = theme => ({
    "chart-container": {
        height: 220
    }
});
class Charts extends React.Component {
    state = {
        lineChartData: {
            labels: [],
            datasets: [
                {
                    label: '',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: []
                },
            ]
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
                        text: 'PSI'
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
                        stepSize: 0.0001
                    }
                }
            },

        },
        labelName: 'Z'
    };

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.labelName !== props.newLabelName) {
            return {
                labelName: props.newLabelName,
                backgroundColor: props.newBackGrndColr,
                borderColor: props.newBorderColr
            }
            return null
        }
        return null
    }


    componentDidMount() {
        // const protocol = window.location.protocol.startsWith('https') ? 'wss://' : 'ws://';
        // const protocol = document.location.protocol.startsWith('https') ? 'wss://' : 'ws://';
        this.ws = new WebSocket('wss://wastewatertreatmentarrowdemoserver.azurewebsites.net/');
        //this.ws =  new WebSocket("ws://localhost:9000");
        this.ws.onmessage = e => {
            const value = JSON.parse(e.data);
           
            if (value.DeviceId !== "Ignition-InductiveDemo") {
                return;
            }
            var testFilterDataX = value.IotData.payload.metrics.filter((element) => element.name === this.state.labelName).map(({ value, timestamp }) => {
                var microtimestamp = new Date(timestamp * 1);
                var dateToStr = microtimestamp.toUTCString().split(' ');
                var cleanDate = dateToStr[2] + ' ' + dateToStr[1] + ' ' + dateToStr[4];
                return cleanDate

            })
            var testFilterDataY = value.IotData.payload.metrics.filter((element) => element.name === this.state.labelName).map(({ value, timestamp }) => {
                return value
            })
            this.setState({
                lineChartData: {
                    labels: testFilterDataX,
                    datasets: [
                        {
                            label: this.props.newLabelName,
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: this.props.newBackGrndColr,
                            borderColor: this.props.newBorderColr,
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: testFilterDataY
                        },
                    ]
                }
            })
        };
    }

    componentWillUnmount() {
        this.ws.close();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes["chart-container"]}>
                <Chart
                    data={this.state.lineChartData}
                    options={this.state.lineChartOptions}
                />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Charts);