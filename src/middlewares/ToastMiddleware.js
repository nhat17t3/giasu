import {
  newPost,
  editPost,
  deletePost,
  setPosts,
  setPostError,
  newPostError,
  editPostError,
  deletePostError,
} from "../features/student/PostSlice";
import {
  newTutor,
  editTutor,
  deleteTutor,
  setTutors,
  setTutorError,
  newTutorError,
  editTutorError,
  deleteTutorError,
} from "../features/tutor/TutorSlice";

import {
  setLoginError,
  setLoginSuccess,
  setSignupError,
  setSignupSuccess,
  setUpdatePassSucess,
  setUpdatePassError,
} from "../components/auth/authenticationSlice";

import {
  updateProfileError,
  updateProfileSuccess,
} from "../components/auth/userSlice.js";

import { toast } from "react-toastify";

const ToastMiddleware = () => (next) => (action) => {
  switch (action.type) {
    // case setPosts.type:
    //   toast.success("call api posts successfully");
    //   break;
    case newPost.type:
      toast.success("New post added successfully");
      break;
    case editPost.type:
      toast.success("Post edited successfully");
      break;
    case deletePost.type:
      toast.success("Post deleted successfully");
      break;
    case setPostError.type:
      toast.error("Error loading post");
      break;
    case newPostError.type:
      toast.error("Error adding new post");
      break;
    case editPostError.type:
      toast.error("Error editing post");
      break;
    case deletePostError.type:
      toast.error("Error deleting post");
      break;
    // case setTutors.type:
    //   toast.success("call api TuTor successfully");
    //   break;
    case newTutor.type:
      toast.success("New TuTor added successfully");
      break;
    case editTutor.type:
      toast.success("TuTor edited successfully");
      break;
    case deleteTutor.type:
      toast.success("TuTor deleted successfully");
      break;
    case setTutorError.type:
      toast.error("Error loading TuTor");
      break;
    case newTutorError.type:
      toast.error("Error adding new TuTor");
      break;
    case editTutorError.type:
      toast.error("Error editing TuTor");
      break;
    case deleteTutorError.type:
      toast.error("Error deleting TuTor");
      break;
    case setLoginError.type:
      toast.error("Login fail, please valid username or password");
      break;
    case setLoginSuccess.type:
      toast.success("Login success");
      break;
    case setSignupError.type:
      toast.error("Sign up  fail, username or email already taken");
      break;
    case setSignupSuccess.type:
      toast.success("sign up success");
      break;
    case updateProfileError.type:
      toast.error("error updateprofile");
      break;
    case updateProfileSuccess.type:
      toast.success("updateprofile success");
      break;
    case setUpdatePassSucess.type:
      toast.success("update password success");
      break;
    case setUpdatePassError.type:
      toast.error("update password error");
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleware;
