import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { EditTutor } from "../../../api/tutorsApi";
import { GetProfile, UpdateProfile } from "../../../api/authenticationAPI";
import { useEffect } from "react";

import { useState } from "react";
import NotifyTutor from "../NotifyTutor";
import NotifyCustomer from "../NotifyCustomer";
import { GetSuggestions } from "../../../api/suggestionsApi";
import { GetInvitations } from "../../../api/invitationsApi";

ListNotification.propTypes = {};

function ListNotification(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listnotify_customer, setListnotify_customer] = useState([]);
  const [listnotify_tutor, setListnotify_tutor] = useState([]);

  useEffect(() => {
    GetSuggestions(dispatch);
  }, []);
  useEffect(() => {
    GetInvitations(dispatch);
  }, []);

  const userID = useSelector((state) => state.user.user.id);
  const suggestions = useSelector((state) =>
    state.suggestions.suggestions.filter(
      (x) => x.idtutor === +userID && x.status === true
    )
  );
  const invitations = useSelector((state) =>
    state.invitations.invitations.filter(
      (x) => x.idcustomer === +userID && x.status === true
    )
  );

  useEffect(() => {
    setListnotify_tutor(suggestions);
  }, [suggestions]);

  useEffect(() => {
    setListnotify_customer(invitations);
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
            {/*Menu trái*/}
            <div className="col-md-3 ">
              <div>
                <ul id="accordion" className="accordion">
                  <li>
                    <div className="link">
                      <i className="fa fa-graduation-cap" aria-hidden="true" />
                      Quản lý yêu cầu
                    </div>
                  </li>
                  <li>
                    <div className="link">
                      <i className="fa fa-comments" />
                      <a href="/hoang-long-nhat/messages">
                        Hội thoại và tin nhắn
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="link">
                      <i className="fa fa-bell" aria-hidden="true" />
                      Thông báo
                    </div>
                  </li>
                  <li>
                    <div className="link">
                      <i className="fa fa-pencil-square" aria-hidden="true" />
                      Bài viết
                    </div>
                  </li>
                  <li>
                    <div className="link">
                      <i className="fa fa-heart-saved" />
                      Đã lưu
                    </div>
                  </li>
                  <li>
                    <div className="link">
                      <i className="fa fa-btc" />
                      <a href="/hoang-long-nhat/bpoint">Quản lý BPoint</a>
                    </div>
                  </li>
                  <li>
                    <div className="link">
                      <i className="fa fa-flag" aria-hidden="true" />
                      Thông tin cá nhân
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* content */}
            <h1 style={{ textAlign: "center" }}>DANH SÁCH THÔNG BÁO</h1>
            <div className="col-md-9">
              <div className="row-tittle hidden-xs ">
                <div>
                  <div className="col-md-2 col-sm-2">
                    <div>
                      <h3>ID</h3>
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <div>
                      <h3>NỘI DUNG </h3>
                    </div>
                  </div>
                </div>
              </div>
              <h1>FOR TUTOR</h1>
              {/* row */}
              {listnotify_tutor.map((suggestion) => (
                <div key={suggestions.id}>
                  <NotifyTutor suggestion={suggestion} />
                </div>
              ))}
              {/* end row */}
              <h1>FOR STUDENT</h1>
              {/* row */}
              {listnotify_customer.map((invitation) => (
                <div key={invitation.id}>
                  <NotifyCustomer invitation={invitation} />
                </div>
              ))}
              {/* end row */}
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
