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
    },
    setDay(state) {
      state.dark = false;
    },
  },
});

function setDark() {
  return function (dispatch, getState) {
    dispatch(slice.actions.setDark());
    localStorage.setItem("mode", JSON.stringify(getState().mode.dark));
  };
}

function setDay() {
  return function (dispatch, getState) {
    dispatch(slice.actions.setDay());
    localStorage.setItem("mode", JSON.stringify(getState().mode.dark));
  };
}

export default slice.reducer;

export { setDark, setDay };
