import React, { createContext, useContext, useReducer } from "react";

export const SeatContext = createContext(null);

const reducer = (state, action) => {
  if (action.type === "receive-seat-info-from-server") {
    return {
      ...state,
      hasLoaded: true,
      seats: action.seats,
      numOfRows: action.numOfRows,
      seatsPerRow: action.seatsPerRow,
    };
  } else {
    throw new Error(`Unrecognized action: ${action.type}`);
  }
};

const initialState = {
  hasLoaded: false,
  seats: 0,
  numOfRow: 0,
  seatsPerRow: 0,
};

export const SeatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveSeatInfoFromServer = (data) => {
    dispatch({
      type: "receive-seat-info-from-server",
      ...data,
    });
  };

  return (
    <SeatContext.Provider
      value={{
        state,
        actions: {
          receiveSeatInfoFromServer,
        },
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};

export const useSeat = () => {
  return useContext(SeatContext);
};
