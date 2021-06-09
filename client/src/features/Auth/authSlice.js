import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: [
    {
      authLoading: true,
      isAuthenticated: false,
      user: null,
    },
  ],
  reducers: {
    setAuth: (state, action) => {
      const { isAuthenticated, user } = action.payload;
      return { authLoading: false, isAuthenticated, user };
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
