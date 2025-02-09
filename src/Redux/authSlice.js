import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    favorites: [],
    lang: "en",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.favorites = [];
    },
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
    },
    toggleLang: (state) => {
      state.lang = state.lang === "en" ? "ar" : "en";
    },
  },
});

export const { setUser, clearUser, addFavorite, removeFavorite, toggleLang } =
  authSlice.actions;
export default authSlice.reducer;
