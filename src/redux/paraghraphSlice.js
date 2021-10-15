import { createSlice } from "@reduxjs/toolkit";

export const paraghraphSlice = createSlice({
  name: "paraghraph",
  initialState: {
    number: 1,
    include: "text",
    paras: [],
  },
  reducers: {
    changeNumber: (state, action) => {
      state.number = action.payload;
    },
    changeInclude: (state, action) => {
      state.include = action.payload;
    },
    changeParas: (state, action) => {
      state.paras = action.payload;
    },
  },
});

export const { changeNumber, changeInclude, changeParas } =
  paraghraphSlice.actions;
export default paraghraphSlice.reducer;
