import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import postReducer from "../features/Home/postSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
