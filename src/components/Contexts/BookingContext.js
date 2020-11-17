import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

export const BookingContext = createContext(null);

const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};

const reducer = (state, action) => {
  if (action.type === "begin-booking-process") {
    return {
      ...state,
      status: "seat-selected",
      selectedSeatId: action.seatId,
      price: action.price,
    };
  } else {
    throw new Error(`Unrecognized action: ${action.type}`);
  }
};

export const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const beginBookingProcess = (data) => {
    dispatch({
      type: "begin-booking-process",
      ...data,
    });
  };
  console.log(state);
  return (
    <BookingContext.Provider
      value={{
        ...state,
        actions: {
          beginBookingProcess,
        },
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  return useContext(BookingContext);
};
