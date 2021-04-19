import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ListPost from "./features/student/ListPost";
import ListTutor from "./features/tutor/ListTutor";
import UpdateTutor from "./features/tutor/UpdateTutor";
import InforTutor from "./features/tutor/InforTutor";
import InforPost from "./features/student/InforPost";
import AddEditPost from "./features/student/AddEditPost";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetProfile } from "./api/authenticationAPI";

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      GetProfile(dispatch, token);
      // dispatch(userAuthenticated({ token: token }));
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (isLoggedIn ? <Main /> : <Main />)}
          />
          <Route
            path="/register"
            render={() => (isLoggedIn ? <Redirect to="/home" /> : <Register />)}
          />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Redirect to="/home" /> : <Login />)}
          />

          <Redirect exact from="/" to="/home" />

          {/* <Route path="/home" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> */}

          <Route path="/listpost" component={ListPost} />
          <Route path="/listpostedit/:postId" component={AddEditPost} />
          <Route path="/addpost" component={AddEditPost} />
          <Route path="/postview/:postId" component={InforPost} />

          <Route path="/listtutor" component={ListTutor} />
          <Route path="/tutorview/:tutorId" component={InforTutor} />
          <Route path="/updatetutor" component={UpdateTutor} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
