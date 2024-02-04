import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./stateSlices/modeSlice";
import tasksSlice from "./stateSlices/tasksSlice";
import groupSlice from "./stateSlices/groupsSlice";

const store = configureStore({
  reducer: {
    mode: modeSlice,
    tasks: tasksSlice,
    groups: groupSlice,
  },
});

export default store;
