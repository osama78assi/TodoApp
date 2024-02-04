import { createSlice } from "@reduxjs/toolkit";

function getMode() {
  const mode = localStorage.getItem("mode");
  if (mode) {
    return JSON.parse(mode);
  } else {
    return false;
  }
}

const initialState = { dark: getMode() };

const slice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDark(state) {
      state.dark = true;
      localStorage.setItem("mode", state.dark);
    },
    setDay(state) {
      state.dark = false;
      localStorage.setItem("mode", state.dark);
    },
  },
});

const { setDark, setDay } = slice.actions;

export default slice.reducer;

export { setDark, setDay };
