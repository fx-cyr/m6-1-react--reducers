import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { SeatContextProvider } from "./components/Contexts/SeatContext";
import { BookingContextProvider } from "./components/Contexts/BookingContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BookingContextProvider>
    <SeatContextProvider>
      <App />
    </SeatContextProvider>
  </BookingContextProvider>,
  rootElement
);
