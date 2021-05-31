import { getprofile, updateprofile, updateProfileError, updateProfileSuccess } from "../components/auth/userSlice";
import * as axios from "axios";
import axiosClient from "./axiosClient";
import { setUpdatePassError, setUpdatePassSucess } from "../components/auth/authenticationSlice";

export const GetProfile = async (dispatch) => {
  try {
    // api call
    const role = localStorage.getItem("role");
    const { data } =
      role == "ROLE_STUDENT"
        ? await axiosClient.get("/api/student/profile")
        : await axiosClient.get("/api/tutor/profile");

    dispatch(getprofile(data));
  } catch {
    console.log("Error get profile!");
  }
};

export const UpdateProfile = async (dispatch, user) => {
  try {
    const role = localStorage.getItem("role");
    // api call
    role == "ROLE_TUTOR"
      ? await axiosClient.put(`/api/tutor`, user)
      : await axiosClient.put(`/api/student`, user);
    dispatch(updateProfileSuccess());
    GetProfile(dispatch);

  } catch {
    console.log("Error update profile!");
    dispatch(updateProfileError())
    GetProfile(dispatch);
  }
};


export const UpdateAvatar = async (dispatch, avatar) => {
  try {
    // api call
    await axiosClient.post(`/api/uploadImage`, avatar);
    dispatch(updateProfileSuccess());
    GetProfile(dispatch);

  } catch {
    console.log("Error update avatar!");
    dispatch(updateProfileError())
    GetProfile(dispatch);
  }
};

// export const UpdatePassword = async (dispatch, pass) => {
//   try {
//     // api call
//     await axiosClient.put(`/api/user/password`, pass);
//     dispatch(setUpdatePassSucess());
//   } catch {
//     dispatch(setUpdatePassError());
//   }
// };