import { createSlice } from "@reduxjs/toolkit";
import { getAsteroids } from "../fetcher/getAsteroids";

const asteroidsSlice = createSlice({
  name: 'asteroids',
  initialState: {
    isFetching: false,
    error: null,
    asteroidsData: null,
  },
  extraReducers: {
    [getAsteroids.pending]: (state) => {
      state.isFetching = true;
    },
    [getAsteroids.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    [getAsteroids.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.asteroidsData = action.payload;
    },
  },
});

export default asteroidsSlice.reducer;
