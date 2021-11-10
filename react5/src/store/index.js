import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import formSlice from "../reducers/formSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formSlice,
  },
});

export default store;
