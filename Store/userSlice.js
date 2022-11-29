import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    compare: [],
  },
  reducers: {
    setCompare: (state, action) => {
      return {
        ...state,
        compare: [...state.compare, action.payload.compData],
      };
    },
    setReset: (state, action) => {
      return {
        compare: action.payload.resetData,
      };
    },
    setRemove: (state, action) => {
      return {
        compare: action.payload.newData,
      };
    },
  },
});

export const { setCompare, setReset, setRemove } = userSlice.actions;
export default userSlice.reducer;
