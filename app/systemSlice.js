import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice({
  name: "system",
  initialState: {
    status: {
      isLoading: false,
      connectedWallet: "",
    },
  },

  reducers: {
    setIsLoading: (state, { payload }) => {
      state.status.isLoading = payload;
    },
    setConnectedWallet: (state, { payload }) => {
      state.status.connectedWallet = payload;
    },
  },
});

export const { setIsLoading, setConnectedWallet } = systemSlice.actions;
export default systemSlice.reducer;
