import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsApi from "../../api/postsApi";

// const initialPosts = [
//   {
//     id: 1,
//     idcustomer:1,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 2,
//     idcustomer:2,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id:3,
//     idcustomer:3,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 4,
//     idcustomer:4,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 5,
//     idcustomer:5,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
// ];

// export const getPostsById = createAsyncThunk(
//   "getPostsById",
//   async (id) => {
//     const response = await postsApi.get(id);
//     console.log(response.data);
//     return await  response.data;
//   }
// );
// export const addPosts = createAsyncThunk(
//   "addPosts",
//   async (data) => {
//     const response = await postsApi.add(data);
//     console.log(response.data);
//     return await  response.data;
//   }
// );
// export const editPosts = createAsyncThunk(
//   "editPosts",
//   async (id, data) => {
//     const response = await postsApi.edit(id,data);
//     console.log(response.data);
//     return await  response.data;
//   }
// );
// export const deletePosts = createAsyncThunk(
//   "deletePosts",
//   async (id) => {
//     const response = await postsApi.delete(id);
//     console.log(response.data);
//     return await  response.data;
//   }
// );
export const getAllPosts = createAsyncThunk("getAllPosts", async (params) => {
  const response = await postsApi.getAll(params);
  console.log(response.data);
  return response.data;
});
const initialState = { posts: [], status: "idle" };
const post = createSlice({
  name: "posts",
  // initialState: initialPosts,
  initialState,
  reducers: {
    addPost: (state, action) => {
      // const newPhoto = action.payload;
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      // console.log(action.payload);
      const removePostId = action.payload;
      return state.posts.filter((post) => post.id !== removePostId);
    },
    updatePost: (state, action) => {
      const newPost = action.payload;
      const postIndex = state.posts.findIndex((post) => post.id === newPost.id);

      if (postIndex >= 0) {
        state.posts[postIndex] = newPost;
      }
    },
  },
  extraReducers: {
    // [getPostsById.fulfilled]: (state, action) => {
    //   state.entities[action.payload.id] = action.payload;
    // },

    // [editPosts.fulfilled]: (state, action) => {
    //   state.entities[action.payload.id] = action.payload;
    // },
    // [deletePosts.fulfilled]: (state, action) => {
    //   delete state.entities[action.payload.id];
    //   return state;
    // },
    // [addPosts.fulfilled]: (state, action) => {

    //   state.entities[action.payload.id] = action.payload;
    // },
    [getAllPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

const { reducer, actions } = post;
export const { addPost, removePost, updatePost } = actions;
export default reducer;
