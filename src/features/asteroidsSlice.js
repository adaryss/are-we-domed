import { createSlice } from "@reduxjs/toolkit";

const asteroidsSlice = createSlice({
  name: 'asteroids',
  initialState: {
    isFetching: false,
    error: null,
    asteroidsData: null,
  },
  reducers: {
    isFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    error: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    hasFetched: (state, action) => {
      state.isFetching = action.payload.isFetching;
      state.asteroidsData = action.payload.data;
    },
  },
});

export const { isFetching, error, hasFetched } = asteroidsSlice.actions;

export default asteroidsSlice.reducer;
