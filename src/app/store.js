import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/student/PostSlice';
import tutorReducer from '../features/tutor/TutorSlice';
// import userReducer from "./userSlice";

const rootReducer = {
  posts: postReducer,
  tutors: tutorReducer
//   user: userReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;