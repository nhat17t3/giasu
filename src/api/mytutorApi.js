import { getMyTutor, setMyTutorError, updateMyTutorError } from "../features/tutor/MyTutorSlice";
import * as axios from "axios";
import axiosClient from "./axiosClient";

export const GetTutorsByToken = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/api/tutor/profile");
    dispatch(getMyTutor(data));
  } catch {
    dispatch(setMyTutorError());
  }
};

export const UpdateMyTutor = async (dispatch, tutor) => {
  try {
    // api call
    await axiosClient.put(`/api/tutor`, tutor);
    // await dispatch(GetTutorsByToken(dispatch));
  } catch {
    dispatch(updateMyTutorError());
  }
};
