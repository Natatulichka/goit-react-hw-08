import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changefilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changefilter } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
