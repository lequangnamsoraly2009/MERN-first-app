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
      return { posts: action.payload, postsLoading: false };
    },
    loadingPostFail: (state, action) => {
      return { posts: [], postsLoading: false };
    },
    addPost: (state, action) => {
      const newPost = action.payload;
      // return state.posts.push(newPost);
      return { posts: [...state.posts,newPost] };
    },
    deletePost: (state, action) => {
      const postDelete = action.payload;
      state.posts =  state.posts.filter(post=>post._id !== postDelete);
    },
    updatePost: (state, action) => {
      const newPost = state.posts.map(post => post._id===action.payload._id ? action.payload : post);
      return {posts: newPost};
    }
  },
});

export const { loadingPostSuccess, loadingPostFail, addPost ,deletePost,updatePost} =
  postSlice.actions;

export default postSlice.reducer;
