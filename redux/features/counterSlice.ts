import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  totalCount: number;
  totalAmount: number;
};

const initialState = {
  totalCount: 0,
  totalAmount: 0
} as CounterState;

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state, action: PayloadAction<{
      count: number;
      totalPrice: number;
    }>) => {
      state.totalCount += action.payload.count;
      state.totalAmount += action.payload.totalPrice;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.totalCount - 1;
      state.totalAmount - action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
} = counter.actions;
export default counter.reducer;