import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSeat } from "./Contexts/SeatContext";
import seatIcon from "../assets/seat-available.svg";
import Loader from "./Loader";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import NewSeatComponent from "./Seat";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";

const TicketWidget = () => {
  const {
    state: { hasLoaded, seats, numOfRows, seatsPerRow },
  } = useSeat();

  // TODO: use values from Context
  // // const numOfRows = 6;
  // // const seatsPerRow = 6;

  // TODO: implement the loading spinner <CircularProgress />
  // with the hasLoaded flag

  return (
    <>
      {hasLoaded == false && <Loader />}
      {hasLoaded == true && (
        <Wrapper>
          {range(numOfRows).map((rowIndex) => {
            const rowName = getRowName(rowIndex);
            return (
              <Row key={rowIndex}>
                <RowLabel>Row {rowName}</RowLabel>
                {range(seatsPerRow).map((seatIndex) => {
                  const seatId = `${rowName}-${getSeatNum(seatIndex)}`;

                  return (
                    <SeatWrapper key={seatId}>
                      <NewSeatComponent
                        seatId={seatId}
                        seats={seats}
                        seatIcon={seatIcon}
                        rowName={rowName}
                        seatIndex={seatIndex}
                      />
                    </SeatWrapper>
                  );
                })}
              </Row>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  /* background: #eee; */
  border-radius: 3px;
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  padding-right: 15px;
  font-weight: bold;
`;

const SeatWrapper = styled.div`
  background: #eee;
  padding: 10px;
`;

export default TicketWidget;
