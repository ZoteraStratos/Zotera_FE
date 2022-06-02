import ReactSpeedometer from "react-d3-speedometer";
import { Box } from "@material-ui/core";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function DonutChart({
  labelName,
  siUnit,
  presentRpm = 0,
  maxValue = 2400,
  customSegmentStops = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150],
}) {
  let currentValueTextNew = `${labelName}  ${presentRpm}  ${siUnit}`;

  return (
    <Box
      style={{
        height: "20vh",
      }}
    >
      {customSegmentStops.length > 0 && (
        <ReactSpeedometer
          maxValue={maxValue}
          ringWidth={20}
          customSegmentStops={customSegmentStops}
          segmentColors={[
            "green",
            "green",
            "cyan",
            "cyan",
            "yellow",
            "yellow",
            "orange",
            "orange",
            "red",
            "red",
          ]}
          needleHeightRatio={0.55}
          valueTextFontSize="19px"
          needleTransitionDuration={90}
          needleTransition="easeElastic"
          currentValueText={currentValueTextNew}
          value={presentRpm}
          width={270}
          height={500}
        />
      )}
    </Box>
  );
}
