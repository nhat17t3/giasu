import axiosClient from "./axiosClient";
import {
  setPosts,
  newPost,
  deletePost,
  editPost,
  newPostError,
  editPostError,
  deletePostError,
  setPostError,
} from "../features/student/PostSlice";

export const GetPosts = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/post");
    dispatch(setPosts(data));
    return { data };
  } catch {
    dispatch(setPostError());
  }
};

export const GetPostsByToken = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/api/post");
    dispatch(setPosts(data));
    return { data };
  } catch {
    dispatch(setPostError());
  }
};

export const NewPost = async (dispatch, post) => {
  try {
    // api call
    await axiosClient.post("/api/post", post);
    dispatch(newPost(post));
  } catch {
    dispatch(newPostError());
  }
};

export const EditPost = async (dispatch, post) => {
  try {
    // api call
    await axiosClient.put(`/api/post/${post.id}`, post);
    dispatch(editPost(post));
  } catch {
    dispatch(editPostError());
  }
};

export const DeletePost = async (dispatch, post) => {
  try {
    // api call
    await axiosClient.delete(`/api/post/${post.id}`);
    // await axiosClient.delete('/posts/${post.id}', { data: { ...post } });
    dispatch(deletePost(post));
  } catch {
    dispatch(deletePostError());
  }
};
