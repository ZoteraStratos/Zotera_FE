import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider, SocketProvider } from "./Components/context";

ReactDOM.render(
  <SocketProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </SocketProvider>,
  document.getElementById("root")
);
