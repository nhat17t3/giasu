// const postsApi = {
//   getAll: async (params) => {
//     const url = "/posts";
//     return await axiosClient.get(url, { params });
//   },

//   get: (id) => {
//     const url = `/posts/${id}`;
//     return axiosClient.get(url);
//   },
//   add: (data) => {
//     const url = `/posts`;
//     return axiosClient.post(url, { data });
//   },
//   edit: ({id, data}) => {
//     const url = `/posts/${id}`;
//     return axiosClient.put(url, { data });
//   },
//   delete: (id) => {
//     const url = `/posts/${id}`;
//     return axiosClient.delete(url);
//   },
// };

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
    const { data } = await axiosClient.get("/posts");
    dispatch(setPosts(data));
    return {data};
  } catch {
    dispatch(setPostError());
  }
};

export const NewPost = async (dispatch, post) => {
  try {
    // api call
    const { data } = await axiosClient.post("/posts", post);
    dispatch(newPost(data));
  } catch {
    dispatch(newPostError());
  }
};

export const EditPost = async (dispatch, post) => {
  try {
    // api call
    await axiosClient.put(`/posts/${post.id}`, post);
    dispatch(editPost(post));
  } catch {
    dispatch(editPostError());
  }
};

export const DeletePost = async (dispatch, post) => {
  try {
    // api call
    await axiosClient.delete(`/posts/${post.id}`);
    // await axiosClient.delete('/posts/${post.id}', { data: { ...post } });
    dispatch(deletePost(post));
  } catch {
    dispatch(deletePostError());
  }
};
