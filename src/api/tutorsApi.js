import axiosClient from "./axiosClient";
import {
  setTutors,
  newTutor,
  deleteTutor,
  editTutor,
  newTutorError,
  editTutorError,
  deleteTutorError,
  setTutorError,
} from "../features/tutor/TutorSlice";

export const GetTutors = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/tutors");
    dispatch(setTutors(data));
    return { data };
  } catch {
    dispatch(setTutorError());
  }
};

export const NewTutor = async (dispatch, tutor) => {
  try {
    // api call
    const { data } = await axiosClient.post("/tutors", tutor);
    dispatch(newTutor(data));
  } catch {
    dispatch(newTutorError());
  }
};

export const EditTutor = async (dispatch, tutor) => {
  try {
    // api call
    await axiosClient.put(`/tutors/${tutor.id}`, tutor);
    dispatch(editTutor(tutor));
  } catch {
    dispatch(editTutorError());
  }
};

export const DeleteTutor = async (dispatch, tutor) => {
  try {
    // api call
    await axiosClient.delete(`/tutors/${tutor.id}`);
    // await axiosClient.delete('/tutors/${tutor.id}', { data: { ...tutor } });
    dispatch(deleteTutor(tutor));
  } catch {
    dispatch(deleteTutorError());
  }
};
