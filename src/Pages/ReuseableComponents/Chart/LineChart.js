import { Box, CircularProgress } from "@material-ui/core";
import { Component } from "react";
import { Line } from "react-chartjs-2";

const chartAreaBorder = {
  id: "chartAreaBorder",
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { left, top, width, height },
    } = chart;
    ctx.save();
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.setLineDash(options.borderDash || []);
    ctx.lineDashOffset = options.borderDashOffset;
    ctx.strokeRect(left, top, width, height);
    ctx.restore();
  },
};

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Tours",
          "St Cyr",
          "St Avertin",
          "Fondettes",
          "La Ville Aux Dames",
          "Montlouis",
          "Joué-lès-Tours",
        ],
        datasets: [
          {
            label: "Population",
            data: [136252, 15911, 14954, 10493, 5305, 10609, 37535],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
          },
          scales: {
            y: {
              title: {
                display: true,
                text: "PSI",
              },
            },
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
              display: false,
            },
            title: {
              display: true,
              text: "Chart.js Bar Chart",
            },
            chartAreaBorder: {
              borderColor: "black",
              borderWidth: 0.5,
              borderDash: [0],
              borderDashOffset: 2,
            },
          },
        },
      },
    };
  }

  componentDidMount() {
    this.getChartData(this.props);
  }

  getChartData(propsReceived) {
    this.setState({
      chartData: {
        labels: propsReceived.labelNames,
        datasets: [
          {
            label: propsReceived.datasetsLabel,
            data: propsReceived.datasetData,
            backgroundColor: propsReceived.datasetBackgroundColor,
            borderColor: propsReceived.datasetBackgroundColor,
            type: "line",
            pointRadius: 0,
            lineTension: 0,
            borderWidth: 2,
          },
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
          },
          scales: {
            y: {
              title: {
                display: true,
                text: propsReceived.scalesYTitleText,
              },
              ticks: {
                stepSize: 5,
              },
            },
            x: {
              title: {
                display: true,
                text: propsReceived.scalesXTitleText,
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
              display: false,
            },
            title: {
              display: true,
              text: propsReceived.pluginsTitleText,
            },
            chartAreaBorder: {
              borderColor: "black",
              borderWidth: 0.5,
              borderDash: [0],
              borderDashOffset: 2,
            },
          },
        },
      },
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <div style={{ height: 250 }}>
            {this.props.loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Line
                data={this.state.chartData}
                options={this.state.chartData.options}
                plugins={[chartAreaBorder]}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
export default LineChart;
