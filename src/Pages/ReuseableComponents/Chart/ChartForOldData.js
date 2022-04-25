import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Chart from "./LineChartingComponent";

import { Chart as charts, registerables } from 'chart.js';
charts.register(...registerables);

const styles = theme => ({
    "chart-container": {
        height: 220
    }
});
class ChartForOldData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                            stepSize: 0.00001
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        },
                        ticks: {
                            stepSize: 0.00001
                        }
                    }
                },

            },
            labelName: 'Z'
        };

    }

    handleDataInInterval(oldDataReceived) {

        const oldDataset = this.state.lineChartData
        const newFirstDataSet = { ...oldDataset };
        if (newFirstDataSet.datasets[0].data.length > 5) {
            newFirstDataSet.datasets[0].data.shift()
            newFirstDataSet.labels.shift();
        }


        var testFilterDataX = oldDataReceived.payload.metrics.filter((element) => element.name === this.state.labelName).map(({ value, timestamp }) => {
            var microtimestamp = new Date(timestamp * 1);
            var dateToStr = microtimestamp.toUTCString().split(' ');
            var cleanDate = dateToStr[2] + ' ' + dateToStr[1] + ' ' + dateToStr[4];
            return cleanDate

        })

        var testFilterDataY = oldDataReceived.payload.metrics.filter((element) => element.name === this.state.labelName).map(({ value, timestamp }) => {
            return value
        })

        newFirstDataSet.data = testFilterDataY;
        newFirstDataSet.label = this.props.newLabelName;
        newFirstDataSet.backgroundColor = this.props.newBackGrndColr;
        newFirstDataSet.borderColor = this.props.newBorderColr;
        newFirstDataSet.type = "line";
        newFirstDataSet.pointRadius = 0;
        newFirstDataSet.lineTension = 0;
        newFirstDataSet.borderWidth = 2;
        newFirstDataSet.fill = false;


        const newChartData = {
            ...this.state.lineChartData,
            datasets: [newFirstDataSet],
            labels: testFilterDataX,
        };

        if (newChartData.datasets[0].data.length > 0) {
            this.setState({ lineChartData: newChartData });
        }


    }

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

        let counter = 0
        this.intervalId = setInterval(() => {
            if (counter >= this.props.oldData.length) {
                clearInterval(this.intervalId);
                return;
            }
            this.handleDataInInterval(this.props.oldData[counter])
            counter++
        }, 10000);

    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
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

export default withStyles(styles, { withTheme: true })(ChartForOldData);