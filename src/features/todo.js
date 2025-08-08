import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload,
        status: false,
      });
    },

    changeStatus: (state, action) => {
      const done = state.find((item) => item.id === action.payload);
      if (done) {
        done.status = !done.status;
      }
    },
  },
});

export const { addTodo, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;