import { Scatter } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const ChartScatter = (props) => (
  <Scatter data={props.data} options={props.options} />
);

export default ChartScatter;
