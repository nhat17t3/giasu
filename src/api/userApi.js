import { getprofile, updateprofile } from "../components/auth/userSlice";
import * as axios from "axios";
import axiosClient from "./axiosClient";

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
    // api call
    // await axiosClient.post(`/updateprofile`, user);

    GetProfile(dispatch);
    // dispatch(updateprofile(user));
  } catch {
    console.log("Error update profile!");
  }
};
