import React from "react";
import styled from "styled-components";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { useBooking } from "../components/Contexts/BookingContext";

const NewSeatComponent = ({ seatId, seats, seatIcon, rowName, seatIndex }) => {
  const seat = seats[seatId];
  const price = seat.price;
  const { actions } = useBooking();
  const { beginBookingProcess } = actions;
  return (
    <>
      {seat.isBooked == true ? (
        <BookedSeat src={seatIcon} />
      ) : (
        <Tippy
          content={
            <ToolTip>{`Row ${rowName}, Seat ${seatIndex + 1} - $${
              seat.price
            }`}</ToolTip>
          }
        >
          <Btn
            onClick={() => {
              beginBookingProcess({ seatId, price });
            }}
          >
            <Seat src={seatIcon} />
          </Btn>
        </Tippy>
      )}
    </>
  );
};

const BookedSeat = styled.img`
  width: 36px;
  height: 36px;
  filter: grayscale(1);

  &:hover {
    cursor: not-allowed;
  }
`;

const Seat = styled.img`
  width: 36px;
  height: 36px;
`;

const ToolTip = styled.span``;

const Btn = styled.button`
  margin: 0;
  border: none;
`;

export default NewSeatComponent;
