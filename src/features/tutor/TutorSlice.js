
import { createSlice,createAction } from "@reduxjs/toolkit";

export const setTutorError = createAction("setTutorError");
export const newTutorError = createAction("newTutorError");
export const editTutorError = createAction("editTutorError");
export const deleteTutorError = createAction("deleteTutorError");

const TutorSlice = createSlice({
  name: "tutors",
  // initialState: initialTutors,
  initialState: {
    tutors: [],
    status: "idle",
  },
  reducers: {
    setTutors: (state, action) => {
      return { ...state, tutors: [...action.payload.tutors] };
    },

    newTutor: (state, action) => {
      state.tutors.push(action.payload);
    },

    deleteTutor: (state, action) => {
      const tutors = state.tutors.filter((tutor) => tutor.id !== action.payload.id);
      return { ...state, tutors: [...tutors] };
    },

    editTutor: (state, action) => {
      const newTutor = action.payload;
      const tutorIndex = state.tutors.findIndex((tutor) => tutor.id === newTutor.id);

      if (tutorIndex >= 0) {
        state.tutors[tutorIndex] = newTutor;
      }
    },
  },
});

const { reducer, actions } = TutorSlice;
export const { setTutors, newTutor, deleteTutor, editTutor } = actions;
export default reducer;
