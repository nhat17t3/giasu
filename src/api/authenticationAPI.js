import * as axios from "axios";
import {
  setLoginError,
  setLoginSuccess,
  setSignupError,
  setSignupSuccess,
  userAuthenticated
} from "../components/auth/authenticationSlice";
import { GetProfile } from "./userApi";

const axiosInstance = axios.create({
  baseURL: `https://manage-tutor-123.herokuapp.com/api`,
});

export const SignUp = async (dispatch, credentials) => {
  try {
    // api call
    const { data } = await axiosInstance.post("/auth/signup", credentials);
    // const data = {
    //   token:
    //     "token cua student",
    // };
    console.log(data);
    dispatch(setSignupSuccess());

    // dispatch(userAuthenticated(data));
    // GetProfile(dispatch);
  } catch {
    console.log("Error sign up!");
    dispatch(setSignupError());
  }
};

export const SignIn = async (dispatch, credentials) => {
  try {
    // api call
    const { data, status } = await axiosInstance.post(
      "/auth/signin",
      credentials
    );
    // const data = {
    //   token:
    //     "token cua tutor",
    // };

    console.log(data, status);
    dispatch(userAuthenticated(data));
    dispatch(setLoginSuccess());
    GetProfile(dispatch);
  } catch {
    console.log("Error sign in!");
    dispatch(setLoginError());
  }
};
