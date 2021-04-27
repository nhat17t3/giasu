
import axiosClient from "./axiosClient";
import {
  setComments,
  newComment,
  deleteComment,
  editComment,
  newCommentError,
  editCommentError,
  deleteCommentError,
  setCommentError,
} from "../features/comment/CommentSlice";

export const GetComments = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/comments");
    dispatch(setComments(data));
    return {data};
  } catch {
    dispatch(setCommentError());
  }
};

export const NewComment = async (dispatch, comment) => {
  try {
    // api call
    const { data } = await axiosClient.post("/comments", comment);
    dispatch(newComment(data));
  } catch {
    dispatch(newCommentError());
  }
};

export const EditComment = async (dispatch, comment) => {
  try {
    // api call
    await axiosClient.put(`/comments/${comment.id}`, comment);
    dispatch(editComment(comment));
  } catch {
    dispatch(editCommentError());
  }
};

export const DeleteComment = async (dispatch, comment) => {
  try {
    // api call
    await axiosClient.delete(`/comments/${comment.id}`);
    // await axiosClient.delete('/comments/${comment.id}', { data: { ...comment } });
    dispatch(deleteComment(comment));
  } catch {
    dispatch(deleteCommentError());
  }
};
