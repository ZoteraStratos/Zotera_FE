import { useState } from "react";

export const historyOptions = {
  lasthour: "Last 1 Hour",
  lastday: "Last 1 Day",
  lastWeek: "Last 1 Week",
  lastTwoweeks: "Last 2 Week",
};
export const historyOptionsKeys = Object.keys(historyOptions);

export const useHistoryOptions = () => {
  const [history, setHistory] = useState();
  const handleChangeHistory = (event) => {
    setHistory(event.target.value);
  };

  return { history, handleChangeHistory };
};
