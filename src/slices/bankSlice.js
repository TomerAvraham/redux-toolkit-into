import { createSlice } from "@reduxjs/toolkit";

const initialBankState = {
  money: 300,
};

const bankSlice = createSlice({
  name: "bank",
  initialState: initialBankState,
  reducers: {
    deposit10: (state) => {
      // doing state change logic
      state.money += 10;
    },
    withdraw5: (state) => {
      state.money -= 5;
    },
    depositByAmount: (state, { payload: amount }) => {
      state.money += +amount;
    },
  },
});

export const { deposit10, withdraw5, depositByAmount } = bankSlice.actions;
export default bankSlice.reducer;
