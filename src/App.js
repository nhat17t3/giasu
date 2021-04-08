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
import React, { Suspense, useEffect, useState } from "react";
import postsApi from "../src/api/postsApi";
import { getAllPosts } from "./features/student/PostSlice";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route path="/home" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/listpost" component={ListPost} />
          <Route path="/listpostedit/:postId" component={AddEditPost} />
          <Route path="/addpost" component={AddEditPost} />
          <Route path="/listpostview/:postId" component={InforPost} />

          <Route path="/listtutor" component={ListTutor} />
          <Route path="/listtutorview/:tutorId" component={InforTutor} />
          <Route path="/updatetutor" component={UpdateTutor} />
          {/* <Route path="/infortutor" component={InforTutor} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
