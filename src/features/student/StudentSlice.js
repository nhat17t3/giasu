import { createSlice, createAction } from "@reduxjs/toolkit";

export const setStudentError = createAction("setStudentError");
export const newStudentError = createAction("newStudentError");
export const editStudentError = createAction("editStudentError");
export const deleteStudentError = createAction("deleteStudentError");

const StudentSlice = createSlice({
  name: "students",
  // initialState: initialStudents,
  initialState: {
    students: [],
    status: "idle",
  },
  
  reducers: {
    setStudents: (state, action) => {
      return { ...state, students: [...action.payload.students] };
    },

    newStudent: (state, action) => {
      state.students.push(action.payload);
    },

    deleteStudent: (state, action) => {
      const students = state.students.filter((student) => student.id !== action.payload.id);
      return { ...state, students: [...students] };
    },

    editStudent: (state, action) => {
      const newStudent = action.payload;
      const studentIndex = state.students.findIndex((student) => student.id === newStudent.id);

      if (studentIndex >= 0) {
        state.students[studentIndex] = newStudent;
      }
    },
  },
});

const { reducer, actions } = StudentSlice;
export const { setStudents, newStudent, deleteStudent, editStudent } = actions;
export default reducer;
