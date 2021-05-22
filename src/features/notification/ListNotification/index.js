import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { EditTutor, GetTutors } from "../../../api/tutorsApi";
import { GetProfile, UpdateProfile } from "../../../api/authenticationAPI";
import { useEffect } from "react";

import { useState } from "react";
import NotifyTutor from "../NotifyTutor";
import NotifyCustomer from "../NotifyCustomer";
import { GetSuggestions } from "../../../api/suggestionsApi";
import { GetInvitations } from "../../../api/invitationsApi";
import { GetStudents } from "../../../api/studentsApi";
import { GetPosts } from "../../../api/postsApi";

ListNotification.propTypes = {};

function ListNotification(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listnotify_customer, setListnotify_customer] = useState([]);
  const [listnotify_tutor, setListnotify_tutor] = useState([]);
  // const { role } = useSelector((state) => state.user.user);
  const role = localStorage.getItem('role')

  useEffect(async () => {
    await GetTutors(dispatch);
    await GetStudents(dispatch);
    await GetPosts(dispatch);
  }, []);

  useEffect(() => {
    GetSuggestions(dispatch);
  }, []);
  useEffect(() => {
    GetInvitations(dispatch);
  }, []);

  const userID = useSelector((state) => state.user.user.id);
  const suggestions = useSelector((state) => state.suggestions.suggestions);
  const invitations = useSelector((state) => state.invitations.invitations);

  useEffect(() => {
    const k = suggestions.filter((x) => x.idTutor === +userID);
    setListnotify_tutor(k);
  }, [suggestions]);

  useEffect(() => {
    const m = invitations.filter((x) => x.idStudent === +userID);
    setListnotify_customer(m);
  }, [invitations]);

  return (
    <>
      <Layout>
        <div
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "20px",
          }}
        >
          <div>
            {/*Menu trái*/} {/* content */}
            <h1 style={{ textAlign: "center" }}>
              DANH SÁCH THÔNG BÁO{" "}
              {role == "ROLE_TUTOR" ? "FOR TUTOR" : "FOR STUDENT"}
            </h1>
            <div className="col-md-12">
              <div className="row-tittle hidden-xs ">
                <div>
                  <div className="col-md-2 col-sm-2">
                    <div>
                      <h3>ID</h3>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-8">
                    <div>
                      <h3>NỘI DUNG </h3>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div>
                      <h3>ACTION </h3>
                    </div>
                  </div>
                </div>
              </div>

              {role == "ROLE_TUTOR"
                ? listnotify_tutor.map((suggestion) => (
                    <div key={suggestion.id}>
                      <NotifyTutor suggestion={suggestion} />
                    </div>
                  ))
                : listnotify_customer.map((invitation) => (
                    <div key={invitation.id}>
                      <NotifyCustomer invitation={invitation} />
                    </div>
                  ))}
            </div>
            {/* end content */}
          </div>
        </div>
        <div style={{ height: "480px" }}></div>
      </Layout>
    </>
  );
}

export default ListNotification;
