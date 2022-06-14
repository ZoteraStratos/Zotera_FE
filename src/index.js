import ReactDOM from "react-dom";
import App from "./App";
import { SocketProvider } from "./Components/context";

ReactDOM.render(
  <SocketProvider>
    <App />
  </SocketProvider>,
  document.getElementById("root")
);
