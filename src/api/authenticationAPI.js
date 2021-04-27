import { userAuthenticated } from "../components/auth/authenticationSlice";
import * as axios from "axios";
import { GetProfile } from "./userApi";

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/Authentication`,
});

export const SignUp = async (dispatch, credentials) => {
  try {
    // api call
    // const { data } = await axiosInstance.post('/signup', credentials);
    const data = {
      token:
        "token cua student",
    };

    dispatch(userAuthenticated(data));
    GetProfile(dispatch);
  } catch {
    console.log("Error sign up!");
  }
};

export const SignIn = async (dispatch, credentials) => {
  try {
    // api call
    // const { data } = await axiosInstance.post("/signup", credentials);
    const data = {
      token:
        "token cua tutor",
    };

    dispatch(userAuthenticated(data));
    GetProfile(dispatch);
  } catch {
    console.log("Error sign up!");
  }
};
