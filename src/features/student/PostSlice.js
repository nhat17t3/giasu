import { createSlice, createAction } from "@reduxjs/toolkit";

export const setPostError = createAction("setPostError");
export const newPostError = createAction("newPostError");
export const editPostError = createAction("editPostError");
export const deletePostError = createAction("deletePostError");

const PostSlice = createSlice({
  name: "posts",
  // initialState: initialPosts,
  initialState: {
    posts: [],
    status: "idle",
  },
  reducers: {
    setPosts: (state, action) => {
      return { ...state, posts: [...action.payload.post] };
    },

    newPost: (state, action) => {
      state.posts.push(action.payload);
    },

    deletePost: (state, action) => {
      const posts = state.posts.filter((post) => post.id !== action.payload.id);
      return { ...state, posts: [...posts] };
    },

    editPost: (state, action) => {
      const newPost = action.payload;
      const postIndex = state.posts.findIndex((post) => post.id === newPost.id);

      if (postIndex >= 0) {
        state.posts[postIndex] = newPost;
      }
    },
  },
});

const { reducer, actions } = PostSlice;
export const { setPosts, newPost, deletePost, editPost } = actions;
export default reducer;
