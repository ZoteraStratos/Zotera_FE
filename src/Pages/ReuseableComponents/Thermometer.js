import React from "react";
import Thermometer from "react-thermometer-component";

const styles = {
  dial: {
    display: "inline-block",
    width: `200px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "1px"
  },
  title: {
    fontSize: "1px",
    color: "#000",
    marginTop: "5px"
  }
};

const Temp = ({ id, value }) => {
  return (
   // <div style={styles.dial}>
      <Thermometer
        theme="light"
        value={value}
        max="100"
        steps="1"
        format="°C"
        size="normal"
        height="150"
      />
     
  //  </div>
  );
};

export default Temp;
