import "./App.css";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ListPost from "./features/student/ListPost";
import ListTutor from "./features/tutor/ListTutor";
import UpdateTutor from "./features/tutor/UpdateTutor";
import InforTutor from "./features/tutor/InforTutor";
import InforPost from "./features/student/InforPost";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetProfile } from "./api/userApi";
import AddPost from "./features/student/AddPost";
import EditPost1 from "./features/student/EditPost";
import ListPostShare from "./features/student/ListPostShare";
import ManageInvitation from "./features/invitation/ManageInvitation";
import ManageSuggestion from "./features/suggestion/ManageSuggestion";
import ListNotification from "./features/notification/ListNotification";
import AddComment from "./features/comment/AddComment";
import ListComment from "./features/comment/ListComment";

import { userAuthenticated } from "./components/auth/authenticationSlice";
import { GetTutorsByToken } from "./api/mytutorApi";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const { role } = useSelector((state) => state.user.user);
  // console.log("role", role);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      dispatch(userAuthenticated({ accessToken: token }));
      GetProfile(dispatch);
      // GetTutorsByToken(dispatch);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Main} />
          <Route
            path="/register"
            render={() => (isLoggedIn ? <Redirect to="/home" /> : <Register />)}
          />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Redirect to="/home" /> : <Login />)}
          />

          <Route
            exact
            path="/listpost"
            render={() => (!isLoggedIn ? <Login /> : <ListPost />)}
          />

          <Route
            path="/listpostedit/:postId"
            render={() => (!isLoggedIn ? <Login /> : <EditPost1 />)}
          />
          <Route
            path="/addpost"
            render={() => (!isLoggedIn ? <Login /> : <AddPost />)}
          />
          <Route
            path="/postview/:postId"
            render={() => (!isLoggedIn ? <Login /> : <InforPost />)}
          />
          <Route
            path="/listpostshare"
            render={() => (!isLoggedIn ? <Login /> : <ListPostShare />)}
          />

          <Route
            path="/listtutor"
            render={() => (!isLoggedIn ? <Login /> : <ListTutor />)}
          />
          <Route
            path="/tutorview/:tutorId"
            render={() => (!isLoggedIn ? <Login /> : <InforTutor />)}
          />
          <Route
            path="/updatetutor"
            render={() => (!isLoggedIn ? <Login /> : <UpdateTutor />)}
          />

          <Route
            path="/manageinvitation"
            render={() => (!isLoggedIn ? <Login /> : <ManageInvitation />)}
          />
          <Route
            path="/managesuggestion"
            render={() => (!isLoggedIn ? <Login /> : <ManageSuggestion />)}
          />
          <Route
            path="/notifycation"
            render={() => (!isLoggedIn ? <Login /> : <ListNotification />)}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {
//   /* <Route
//             path="/f"
//             render={() => (!isLoggedIn ? <Login /> : <AddComment />)}
//           /> */
// }
// {
//   /* <Route
//             path="/comment"
//             render={() => (!isLoggedIn ? <Login /> : <ListComment />)}
//           /> */
// }
// {
//   /* <Route path="/listpost" component={ListPost} />
//           <Route path="/listpostedit/:postId" component={EditPost1} />
//           <Route path="/addpost" component={AddPost} />
//           <Route path="/postview/:postId" component={InforPost} />
//           <Route path="/listpostshare" component={ListPostShare} />

//           <Route path="/listtutor" component={ListTutor} />
//           <Route path="/tutorview/:tutorId" component={InforTutor} />
//           <Route path="/updatetutor" component={UpdateTutor} />

//           <Route path="/manageinvitation" component={ManageInvitation} />
//           <Route path="/managesuggestion" component={ManageSuggestion} />
//           <Route path="/notifycation" component={ListNotification} />

//           <Route path="/f" component={AddComment} />
//           <Route path="/comment" component={ListComment} /> */
// }
