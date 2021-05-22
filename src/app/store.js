import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postReducer from "../features/student/PostSlice";
import tutorReducer from "../features/tutor/TutorSlice";
import invitationReducer from "../features/invitation/InvitationSlice";
import suggestionReducer from "../features/suggestion/SuggestionSlice";
import authenticationSlice from "../components/auth/authenticationSlice";
import commentReducer from "../features/comment/CommentSlice";
import studentReducer from "../features/student/StudentSlice";
import userReducer from "../components/auth/userSlice";
import mytutorReducer from "../features/tutor/MyTutorSlice";
import ToastMiddleware from "../middlewares/ToastMiddleware";

const rootReducer = {
  posts: postReducer,
  tutors: tutorReducer,
  auth: authenticationSlice,
  invitations: invitationReducer,
  suggestions: suggestionReducer,
  comments: commentReducer,
  students: studentReducer,
  user: userReducer,
  mytutor: mytutorReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ToastMiddleware),
});

export default store;
