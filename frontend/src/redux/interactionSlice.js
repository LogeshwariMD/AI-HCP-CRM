import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hcpName: "",
  interactionType: "",
  date: "",
  time: "",
  topics: "",
  materials: [],
  samples: "",
  sentiment: "",
  outcome: "",
  followUp: "",
};

const interactionSlice = createSlice({
  name: "interaction",

  initialState,

  reducers: {
    updateInteraction: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    clearInteraction: () => initialState,
  },
});

export const {
  updateInteraction,
  clearInteraction,
} = interactionSlice.actions;

export default interactionSlice.reducer;