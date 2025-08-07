import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ title: "Hello", status: true }];

const todoSlice = createSlice({
  name: "Todo-App",
  initialState,
  reducers: {
    add: (state) => {
      state;
    },
  },
});

export const { add } = todoSlice.actions;
export default todoSlice.reducer;