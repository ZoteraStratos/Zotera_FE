import React from "react";
import { Line, Scatter } from "react-chartjs-2";

const ChartLine = props => <Line data={props.data} options={props.options} />;

export default ChartLine;