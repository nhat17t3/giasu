import { getprofile, updateprofile } from "../components/auth/userSlice";
import * as axios from "axios";
import axiosClient from "./axiosClient";

// const axiosInstance = axios.create({
//   baseURL: `http://localhost:3000/profile`,
// });

export const GetProfile = async (dispatch) => {
  try {
    // api call
    // const { data } = await axiosClient.get("/profile");
    let data = {};
    const token = localStorage.getItem("token");
    if (token === "token cua tutor") {
      data = {
        user: {
          id: 1,
          avatar:
            "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC",
          name: "Hoàng Long Nhật TUTOR ",
          grade: "Lớp 1",
          subject: "Lịch sử",
          qualification: "Giáo viên",
          phonenumber: "0369621657",
          price: "1000000",
          address: "Hà Nội",
          time: "Thứ 3 thứ 7",
          description:
            "Sinh viên có kinh nghiệm luyện thi,luyện chữ kèm các con nhỏ lớp 1 học đánh vần chuẩn bị vào lớp 1,Nhận dạy từ lớp 1-5 môn Toán ,TV.Học sinh giỏi huyện",
          schedule: {
            sang_2: true,
            chieu_2: true,
            toi_2: true,
            sang_3: false,
            chieu_3: false,
            toi_3: false,
            sang_4: false,
            chieu_4: false,
            toi_4: false,
            sang_5: true,
            chieu_5: true,
            toi_5: true,
            sang_6: false,
            chieu_6: false,
            toi_6: false,
            sang_7: false,
            chieu_7: false,
            toi_7: false,
            sang_8: true,
            chieu_8: true,
            toi_8: true,
          },
          email: "hoanglongnhat0605@gmail.com",
          password: "123456789",
          role: "tutor",
        },
      };
    } else {
      data = {
        user: {
          id: 2,
          name: "Hoang Long Nhat STUDENT",
          email: "nhat@gmail.com",
          phonenumber: 84369621657,
          password: "123456789",
          role: "student",
        },
      };
    }

    dispatch(getprofile(data));
  } catch {
    console.log("Error get profile!");
  }
};

export const UpdateProfile = async (dispatch, user) => {
  try {
    // api call
    // await axiosClient.post(`/updateprofile`, user);

    GetProfile(dispatch);
    // dispatch(updateprofile(user));
  } catch {
    console.log("Error update profile!");
  }
};