import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "cs",
  },
  reducers: {
    updateLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { updateLang } = langSlice.actions;

export default langSlice.reducer;
