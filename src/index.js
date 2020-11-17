import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { SeatContextProvider } from "./components/SeatContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <SeatContextProvider>
    <App />
  </SeatContextProvider>,
  rootElement
);
