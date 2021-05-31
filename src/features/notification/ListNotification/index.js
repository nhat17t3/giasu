import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";

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
  const role = localStorage.getItem("role");
  const [a, setA] = useState(false);


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
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-2" style={{ marginTop: "62px" }}>
                <Sidebar />
              </div>
              <div className="grid__column-10">
                <div className="notify">
                  <h2 className="notify__heading">Thông báo</h2>
                  <div className="grid__row " style={{ margin: "auto 0" }}>
                    <div className="grid__column-2 notify-header__item ">
                      Thời gian
                    </div>
                    <div className="grid__column-5 notify-header__item">
                      Nội dung
                    </div>
                    <div className="grid__column-2 notify-header__item ">
                      Liên hệ {role == "ROLE_TUTOR" ? "học sinh" : "gia sư"}
                    </div>
                    <div className="grid__column-3 notify-header__item">
                      Hoạt động
                    </div>
                  </div>

                  {role == "ROLE_TUTOR"
                    ? listnotify_tutor.map((suggestion) => (
                        <div className="notify-item" key={suggestion.id}>
                          <NotifyTutor suggestion={suggestion} />
                        </div>
                      ))
                    : listnotify_customer.map((invitation) => (
                        <div className="notify-item" key={invitation.id}>
                          <NotifyCustomer invitation={invitation} />
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListNotification;
