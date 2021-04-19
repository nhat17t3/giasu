import { configureStore , getDefaultMiddleware  } from "@reduxjs/toolkit";
import postReducer from '../features/student/PostSlice';
import tutorReducer from '../features/tutor/TutorSlice';
import authenticationSlice from "../components/auth/authenticationSlice"
// import userReducer from "./userSlice";
import ToastMiddleware from '../middlewares/ToastMiddleware';

const rootReducer = {
  posts: postReducer,
  tutors: tutorReducer,
  user: authenticationSlice,
//   user: userReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
});

export default store;