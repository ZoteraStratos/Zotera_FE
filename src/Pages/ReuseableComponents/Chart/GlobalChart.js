import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Chart as charts, registerables } from "chart.js";
import ChartScatter from "./ChartingComponent";
import { Box } from "@material-ui/core";

charts.register(...registerables);

const styles = () => ({
  "chart-container": {
    height: 220,
  },
});

const GlobalChart = ({
  allLabelNames,
  arrayOfRespectiveDataset,
  dataSetbackgroundColor,
  siUnit,
  heightForChart = 120,
  loading,
  history,
}) => {
  const labelN = allLabelNames.map((lblName, index) => ({
    label: lblName,
    pointRadius: 1,
    pointBackgroundColor: "black",
    data: arrayOfRespectiveDataset[index],
    fill: false,
    lineTension: 0,
    backgroundColor: dataSetbackgroundColor[index],
    borderColor: dataSetbackgroundColor[index],
    showLine: true,
  }));

  let unit = "day";
  if (history === "lastday") {
    unit = "hour";
  } else if (history === "lasthour") {
    unit = "minute";
  }
  console.log(history);
  console.log(unit);

  let dataChart = {
    lineChartData: {
      datasets: labelN,
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      spanGaps: true,
      scales: {
        y: {
          display: true,
          title: {
            display: true,
            text: siUnit,
          },
          axis: "y",
        },
        x: {
          type: "time",
          display: true,
          title: {
            display: true,
            text: "Date",
          },
          axis: "x",
          time: {
            unit,
          },
        },
      },
    },
  };

  return (
    <div className="container">
      <div style={{ height: heightForChart }}>
        {loading ? (
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
          dataChart &&
          dataChart?.lineChartData && (
            <ChartScatter
              data={dataChart.lineChartData}
              options={dataChart.lineChartOptions}
              type={"scatter"}
            />
          )
        )}
      </div>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(GlobalChart);
