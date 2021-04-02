import { createSlice } from "@reduxjs/toolkit";

const initialTutors = [
  {
    id: 1,
    avatar:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC',
    name: "Hoàng Long Nhật",
    grade: "3",
    subject: "2",
    qualification: "1",
    phonenumber: "0369621657",
    address: "Hà Nội",
    time: "Thứ 3 thứ 7",
    description: "Sinh viên có kinh nghiệm luyện thi,luyện chữ kèm các con nhỏ lớp 1 học đánh vần chuẩn bị vào lớp 1,Nhận dạy từ lớp 1-5 môn Toán ,TV.Học sinh giỏi huyện",
  },
  {
    id: 2,
    avatar:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC',
    name: "Hoàng Long Nhật",
    grade: "3",
    subject: "2",
    qualification: "1",
    phonenumber: "0369621657",
    address: "Hà Nội",
    time: "Thứ 3 thứ 7",
    description: "Sinh viên có kinh nghiệm luyện thi,luyện chữ kèm các con nhỏ lớp 1 học đánh vần chuẩn bị vào lớp 1,Nhận dạy từ lớp 1-5 môn Toán ,TV.Học sinh giỏi huyện",
  },
  {
    id: 3,
    avatar:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC',
    name: "Hoàng Long Nhật",
    grade: "3",
    subject: "2",
    qualification: "1",
    phonenumber: "0369621657",
    address: "Hà Nội",
    time: "Thứ 3 thứ 7",
    description: "Sinh viên có kinh nghiệm luyện thi,luyện chữ kèm các con nhỏ lớp 1 học đánh vần chuẩn bị vào lớp 1,Nhận dạy từ lớp 1-5 môn Toán ,TV.Học sinh giỏi huyện",
  },
  {
    id: 4,
    avatar:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC',
    name: "Hoàng Long Nhật",
    grade: "3",
    subject: "2",
    qualification: "1",
    phonenumber: "0369621657",
    address: "Hà Nội",
    time: "Thứ 3 thứ 7",
    description: "Sinh viên có kinh nghiệm luyện thi,luyện chữ kèm các con nhỏ lớp 1 học đánh vần chuẩn bị vào lớp 1,Nhận dạy từ lớp 1-5 môn Toán ,TV.Học sinh giỏi huyện",
  },
  {
    id: 5,
    avatar:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC',
    name: "Hoàng Long Nhật",
    grade: "3",
    subject: "2",
    qualification: "1",
    phonenumber: "0369621657",
    address: "Hà Nội",
    time: "Thứ 3 thứ 7",
    description: "Sinh viên có kinh nghiệm luyện thi,luyện chữ kèm các con nhỏ lớp 1 học đánh vần chuẩn bị vào lớp 1,Nhận dạy từ lớp 1-5 môn Toán ,TV.Học sinh giỏi huyện",
  },
  {
    id: 6,
    avatar:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC',
    name: "Hoàng Long Nhật",
    grade: "3",
    subject: "2",
    qualification: "1",
    phonenumber: "0369621657",
    address: "Hà Nội",
    time: "Thứ 3 thứ 7",
    description: "Sinh viên có kinh nghiệm luyện thi,luyện chữ kèm các con nhỏ lớp 1 học đánh vần chuẩn bị vào lớp 1,Nhận dạy từ lớp 1-5 môn Toán ,TV.Học sinh giỏi huyện",
  },
  {
    id: 7,
    avatar:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC',
    name: "Hoàng Long Nhật",
    grade: "3",
    subject: "2",
    qualification: "1",
    phonenumber: "0369621657",
    address: "Hà Nội",
    time: "Thứ 3 thứ 7",
    description: "Sinh viên có kinh nghiệm luyện thi,luyện chữ kèm các con nhỏ lớp 1 học đánh vần chuẩn bị vào lớp 1,Nhận dạy từ lớp 1-5 môn Toán ,TV.Học sinh giỏi huyện",
  },
  
];

const tutor = createSlice({
  name: "tutors",
  initialState: initialTutors,
  reducers: {
    addTutor: (state, action) => {
      // const newPhoto = action.payload;
      state.push(action.payload);
    },
    removeTutor: (state, action) => {
      // console.log(action.payload);
      const removePostId = action.payload;
      return state.filter((tutor) => tutor.id !== removePostId);
    },
    updateTutor: (state, action) => {
      const newPost = action.payload;
      const postIndex = state.findIndex(
        (tutor) => tutor.id === newPost.id
      );

      if (postIndex >= 0) {
        state[postIndex] = newPost;
      }
    },
  },
});

const { reducer, actions } = tutor;
export const { addTutor, removeTutor, updateTutor } = actions;
export default reducer;
