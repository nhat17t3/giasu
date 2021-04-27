import axiosClient from "./axiosClient";
import {
  setStudents,
  newStudent,
  deleteStudent,
  editStudent,
  newStudentError,
  editStudentError,
  deleteStudentError,
  setStudentError,
} from "../features/student/StudentSlice";

export const GetStudents = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/students");
    dispatch(setStudents(data));
    return { data };
  } catch {
    dispatch(setStudentError());
  }
};

export const NewStudent = async (dispatch, student) => {
  try {
    // api call
    const { data } = await axiosClient.post("/students", student);
    dispatch(newStudent(data));
  } catch {
    dispatch(newStudentError());
  }
};

export const EditStudent = async (dispatch, student) => {
  try {
    // api call
    await axiosClient.put(`/students/${student.id}`, student);
    dispatch(editStudent(student));
  } catch {
    dispatch(editStudentError());
  }
};

export const DeleteStudent = async (dispatch, student) => {
  try {
    // api call
    await axiosClient.delete(`/students/${student.id}`);
    // await axiosClient.delete('/students/${student.id}', { data: { ...student } });
    dispatch(deleteStudent(student));
  } catch {
    dispatch(deleteStudentError());
  }
};
