import React, { useState, useContext, useEffect } from "react";
import { SOCKET_URL } from "../constants";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState(0);
  const [iCOMOX_Temperature_Value, setiCOMOXTemperatureValue] = useState(0);
  const [AutomationSetpoints_Motor30RPM, setAutomationSetpointsMotor30RPM] =
    useState(0);
  const [AutomationSetpoints_MotorFullRPM, setAutomationSetpointsMotorFullRPM] =
    useState(0);
  const [ABBDrive_Speed, setABBDriveSpeed] = useState(0);
  const [UpperTankLevel, setUpperTankLevel] = useState(0);
  const [LowerTankLevel, setLowerTankLevel] = useState(0);
  const [pumpInletPressure_Value, setPumpInletPressureValue] = useState([]);
  const [upperTankIncomingPressureRaw, setUpperTankIncomingPressureRaw] =
    useState([]);
  const [upperTankIncomingPressureValue, setUpperTankIncomingPressureValue] =
    useState([]);
  const [pumpInletPressureRaw, setPumpInletPressureRaw] = useState([]);

  const [iCOMOXAccPrimaryXMaxValue, setiCOMOXAccPrimaryXMaxValue] = useState(
    []
  );
  const [iCOMOXAccPrimaryXMinValue, setiCOMOXAccPrimaryXMinValue] = useState(
    []
  );

  const [iCOMOXAccPrimaryYMaxValue, setiCOMOXAccPrimaryYMaxValue] = useState(
    []
  );
  const [iCOMOXAccPrimaryYMinValue, setiCOMOXAccPrimaryYMinValue] = useState(
    []
  );

  const [iCOMOXAccPrimaryZMaxValue, setiCOMOXAccPrimaryZMaxValue] = useState(
    []
  );
  const [iCOMOXAccPrimaryZMinValue, setiCOMOXAccPrimaryZMinValue] = useState(
    []
  );

  const [flowUpperTankOutgoing, setflowUpperTankOutgoing] = useState([]);
  const [flowUpperTankIncoming, setflowUpperTankIncoming] = useState([]);

  const [UpperTankLevelForChart, setUpperTankLevelForChart] = useState([]);
  const [LowerTankLevelForChart, setLowerTankLevelForChart] = useState([]);

  const [waterTempsRawWaterTemp, setWaterTempsRawWaterTemp] = useState([]);
  const [iCOMOXTemperatureValue, setICOMOXTemperatureValue] = useState([]);

  const [upperTankOutgoingValve, setUpperTankOutgoingValve] = useState([]);
  const [lowerTankOutgoingValve, setLowerTankOutgoingValve] = useState([]);
  const [upperTankIncomingValve, setUpperTankIncomingValve] = useState([]);

  const [TemperatureSensor, setTemperatureSensor] = useState([]);

  const [iCOMOXAcousticMaxValue, setiCOMOXAcousticMaxValue] = useState([]);
  const [iCOMOXAcousticMinValue, setiCOMOXAcousticMinValue] = useState([]);
  const [iCOMOXAcousticRMSValue, setiCOMOXAcousticRMSValue] = useState([]);
  const [iCOMOXAcousticAvgValue, setiCOMOXAcousticAvgValue] = useState([]);

  useEffect(() => {
    let socket = new WebSocket(SOCKET_URL);
    socket.onmessage = function (event) {
      const value = JSON.parse(event.data);
      setGlobalData(value.IotData.payload.metrics);
    };
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (globalData) {
      avoidUndefineValue(
        valueForKey(globalData, "iCOMOX/Temperature/Value"),
        setiCOMOXTemperatureValue
      );

      avoidUndefineValue(
        valueForKey(globalData, "UpperTankLevel"),
        setUpperTankLevel
      );
      avoidUndefineValue(
        valueForKey(globalData, "LowerTankLevel"),
        setLowerTankLevel
      );

      avoidUndefineValue(
        valueForKey(globalData, "UpperTankIncomingPressure/Raw"),
        setUpperTankIncomingPressureRaw
      );

      let PumpInletPressure_Value = valueForKeyWithTimeStamp(
        globalData,
        "PumpInletPressure/Value"
      );
      setPumpInletPressureValue(PumpInletPressure_Value);

      let upperTankIncomingPressureValue = valueForKeyWithTimeStamp(
        globalData,
        "UpperTankIncomingPressure/Value"
      );
      setUpperTankIncomingPressureValue(upperTankIncomingPressureValue);

      let pumpInletPressureRaw = valueForKeyWithTimeStamp(
        globalData,
        "PumpInletPressure/Raw"
      );
      setPumpInletPressureRaw(pumpInletPressureRaw);

      let iCOMOXAccelerometerPrimaryXMaxValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/AccelerometerPrimary/X/Max/Value"
      );
      setiCOMOXAccPrimaryXMaxValue(iCOMOXAccelerometerPrimaryXMaxValue);

      let iCOMOXAccelerometerPrimaryXMinValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/AccelerometerPrimary/X/Min/Value"
      );
      setiCOMOXAccPrimaryXMinValue(iCOMOXAccelerometerPrimaryXMinValue);

      let iCOMOXAccelerometerPrimaryYMaxValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/AccelerometerPrimary/Y/Max/Value"
      );
      setiCOMOXAccPrimaryYMaxValue(iCOMOXAccelerometerPrimaryYMaxValue);

      let iCOMOXAccelerometerPrimaryYMinValue = valueForKeyWithTimeStamp(
        globalData,
        " iCOMOX/AccelerometerPrimary/Y/Min/Value"
      );
      setiCOMOXAccPrimaryYMinValue(iCOMOXAccelerometerPrimaryYMinValue);

      let iCOMOXAccelerometerPrimaryZMaxValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/AccelerometerPrimary/Z/Max/Value"
      );
      setiCOMOXAccPrimaryZMaxValue(iCOMOXAccelerometerPrimaryZMaxValue);

      let iCOMOXAccelerometerPrimaryZMinValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/AccelerometerPrimary/Z/Min/Value"
      );
      setiCOMOXAccPrimaryZMinValue(iCOMOXAccelerometerPrimaryZMinValue);

      let FlowUpperTankOutgoing = valueForKeyWithTimeStamp(
        globalData,
        "Flow/UpperTankOutgoing"
      );
      setflowUpperTankOutgoing(FlowUpperTankOutgoing);

      let FlowUpperTankIncoming = valueForKeyWithTimeStamp(
        globalData,
        "Flow/UpperTankIncoming"
      );
      setflowUpperTankIncoming(FlowUpperTankIncoming);

      let UpperTankLevelForChart = valueForKeyWithTimeStamp(
        globalData,
        "UpperTankLevel"
      );
      setUpperTankLevelForChart(UpperTankLevelForChart);

      let LowerTankLevelForChart = valueForKeyWithTimeStamp(
        globalData,
        "LowerTankLevel"
      );
      setLowerTankLevelForChart(LowerTankLevelForChart);

      let WaterTempsRawWaterTemp = valueForKeyWithTimeStamp(
        globalData,
        "Water/Temps/RawWaterTemp"
      );
      setWaterTempsRawWaterTemp(WaterTempsRawWaterTemp);

      let ICOMOXTemperatureValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/Temperature/Value"
      );
      setICOMOXTemperatureValue(ICOMOXTemperatureValue);

      let UpperTankOutgoingValve = valueForKeyWithTimeStamp(
        globalData,
        "UpperTankOutgoingValve"
      );
      setUpperTankOutgoingValve(UpperTankOutgoingValve);

      let LowerTankOutgoingValve = valueForKeyWithTimeStamp(
        globalData,
        "LowerTankOutgoingValve"
      );
      setLowerTankOutgoingValve(LowerTankOutgoingValve);

      let UpperTankIncomingValve = valueForKeyWithTimeStamp(
        globalData,
        "UpperTankIncomingValve"
      );
      setUpperTankIncomingValve(UpperTankIncomingValve);

      avoidUndefineValue(
        valueForKey(globalData, "TemperatureSensor1"),
        setTemperatureSensor
      );

      let iCOMOXAcousticMaxValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/Acoustic/Max/Value"
      );
      setiCOMOXAcousticMaxValue(iCOMOXAcousticMaxValue);

      let iCOMOXAcousticMinValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/Acoustic/Min/Value"
      );
      setiCOMOXAcousticMinValue(iCOMOXAcousticMinValue);

      let iCOMOXAcousticRMSValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/Acoustic/RMS/Value"
      );
      setiCOMOXAcousticRMSValue(iCOMOXAcousticRMSValue);

      let iCOMOXAcousticAvgValue = valueForKeyWithTimeStamp(
        globalData,
        "iCOMOX/Acoustic/Avg/Value"
      );
      setiCOMOXAcousticAvgValue(iCOMOXAcousticAvgValue);

      let AutomationSetpoints_MotorFullRPM = valueForKeyWithTimeStamp(
        globalData,
        "AutomationSetpoints/MotorFullRPM"
      );
      setAutomationSetpointsMotorFullRPM(AutomationSetpoints_MotorFullRPM);

      let AutomationSetpoints_Motor30RPM = valueForKeyWithTimeStamp(
        globalData,
        "AutomationSetpoints/Motor30RPM"
      );
      setAutomationSetpointsMotor30RPM(AutomationSetpoints_Motor30RPM);

      let ABBDrive_Speed = valueForKeyWithTimeStamp(
        globalData,
        "ABBDriveSpeed"
      );
      setABBDriveSpeed(ABBDrive_Speed);
    }
  }, [globalData]);

  return (
    <AppContext.Provider
      value={{
        globalData,
        iCOMOX_Temperature_Value,
        AutomationSetpoints_Motor30RPM,
        AutomationSetpoints_MotorFullRPM,
        ABBDrive_Speed,
        UpperTankLevel,
        LowerTankLevel,
        pumpInletPressure_Value,
        upperTankIncomingPressureRaw,
        pumpInletPressureRaw,
        upperTankIncomingPressureValue,
        iCOMOXAccPrimaryXMaxValue,
        iCOMOXAccPrimaryXMinValue,
        iCOMOXAccPrimaryYMaxValue,
        iCOMOXAccPrimaryYMinValue,
        iCOMOXAccPrimaryZMaxValue,
        iCOMOXAccPrimaryZMinValue,
        flowUpperTankOutgoing,
        flowUpperTankIncoming,
        UpperTankLevelForChart,
        LowerTankLevelForChart,
        waterTempsRawWaterTemp,
        iCOMOXTemperatureValue,
        upperTankOutgoingValve,
        upperTankIncomingValve,
        lowerTankOutgoingValve,
        TemperatureSensor,
        iCOMOXAcousticMaxValue,
        iCOMOXAcousticMinValue,
        iCOMOXAcousticRMSValue,
        iCOMOXAcousticAvgValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function valueForKeyWithTimeStamp(globalData, keyName) {
  var valueOfKeyName = globalData
    .filter((element) => element.name === keyName)
    .map(({ value, timestamp }) => {
      let data = { y: value, x: timestamp };
      return data;
    });
  return valueOfKeyName;
}

function valueForKey(globalData, keyName) {
  var valueOfKeyName = globalData
    .filter((element) => element.name === keyName)
    .map(({ value }) => value);
  return valueOfKeyName;
}

function avoidUndefineValue(values, setFunction) {
  let completeData = values;
  let lastData = completeData[completeData.length - 1];
  if (lastData !== undefined) {
    setFunction(lastData);
  }
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
