import React, { useEffect } from "react";
import TicketWidget from "./TicketWidget";

import GlobalStyles from "./GlobalStyles";
import { useSeat } from "./Contexts/SeatContext";

function App() {
  const {
    actions: { receiveSeatInfoFromServer },
  } = useSeat();

  useEffect(() => {
    fetch("/api/seat-availability")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return receiveSeatInfoFromServer(data);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      {/* TODO: write code */}
      <TicketWidget />
    </>
  );
}

export default App;
