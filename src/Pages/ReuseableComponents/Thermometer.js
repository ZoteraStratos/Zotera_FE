import Thermometer from "react-thermometer-component";

const Temp = ({ value }) => (
  <Thermometer
    theme="light"
    value={value}
    max="100"
    steps="1"
    format="°C"
    size="normal"
    height="150"
  />
);

export default Temp;
