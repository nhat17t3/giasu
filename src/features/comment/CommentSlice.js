import { createSlice, createAction } from "@reduxjs/toolkit";

export const setCommentError = createAction("setCommentError");
export const newCommentError = createAction("newCommentError");
export const editCommentError = createAction("editCommentError");
export const deleteCommentError = createAction("deleteCommentError");

const CommentSlice = createSlice({
  name: "comments",
  // initialState: initialComments,
  initialState: {
    comments: [],
    status: "idle",
  },
  reducers: {
    setComments: (state, action) => {
      return { ...state, comments: [...action.payload.comments] };
    },

    newComment: (state, action) => {
      state.comments.push(action.payload);
    },

    deleteComment: (state, action) => {
      const comments = state.comments.filter((comment) => comment.id !== action.payload.id);
      return { ...state, comments: [...comments] };
    },

    editComment: (state, action) => {
      const newComment = action.payload;
      const commentIndex = state.comments.findIndex((comment) => comment.id === newComment.id);

      if (commentIndex >= 0) {
        state.comments[commentIndex] = newComment;
      }
    },
  },
});

const { reducer, actions } = CommentSlice;
export const { setComments, newComment, deleteComment, editComment } = actions;
export default reducer;
