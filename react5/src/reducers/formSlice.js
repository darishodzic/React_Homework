import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    value: "",
  },
  reducers: {
    firstInput: (state, action) => {
      state.value = "asd";
    },
  },
});

// Action creators are generated for each case reducer function
export const { firstInput } = formSlice.actions;

export default formSlice.reducer;
