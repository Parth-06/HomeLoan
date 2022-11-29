import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    compare: [],
  },
  reducers: {
    //adding product to compare array
    setCompare: (state, action) => {
      return {
        ...state,
        compare: [...state.compare, action.payload.compData],
      };
    },

    //reseting array to initial state
    setReset: (state, action) => {
      return {
        compare: action.payload.resetData,
      };
    },

    //returning the new removed data array
    setRemove: (state, action) => {
      return {
        compare: action.payload.newData,
      };
    },
  },
});

export const { setCompare, setReset, setRemove } = userSlice.actions;
export default userSlice.reducer;
