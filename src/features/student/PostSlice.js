import { createSlice, createAction } from "@reduxjs/toolkit";

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
      return { ...state, posts: [...action.payload] };
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
