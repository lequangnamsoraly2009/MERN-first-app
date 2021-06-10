import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      posts: [],
      postsLoading: true,
    },
  ],
  reducers: {
    loadingPostSuccess: (state, action) => {
      return {  posts: action.payload, postsLoading: false };
    },
    loadingPostFail: (state, action) => {
      return {posts: [],postsLoading: false }
    }
  },
});

export const {loadingPostSuccess,loadingPostFail } = postSlice.actions;

export default postSlice.reducer;
