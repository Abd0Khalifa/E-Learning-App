// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // Store the logged-in user's data
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Set the logged-in user
    },
    clearUser: (state) => {
      state.user = null; // Clear the logged-in user
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
