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
import InvitationItem from "../InvitationItem";

import { GetStudents } from "../../../api/studentsApi";

import {
  AcceptInvitation,
  DeleteInvitation,
  EditInvitation,
  GetInvitations,
  GetInvitationsByTutor,
  RefuseInvitation,
} from "../../../api/invitationsApi";
import { useState } from "react";

ManageInvitation.propTypes = {};

function ManageInvitation(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listinvite, setListinvite] = useState([]);

  useEffect(() => {
    GetStudents(dispatch);
  }, []);

  useEffect(() => {
    GetInvitationsByTutor(dispatch);
  }, []);

  // const userID = useSelector((state) => state.user.user.id);
  const invitations = useSelector((state) => state.invitations.invitations);

  // useEffect(() => {
  //   const k = invitations.filter((x) => x.idTutor === +userID);
  //   setListinvite(k);
  // }, [invitations]);

  const handleEditAcceptClick = async (invitation) => {
    console.log("Edit: ", invitation);

    const editInvitation = {
      // id: invitation.id,
      idStudent: invitation.idStudent,
      // idTutor: invitation.idTutor,
      // comment: invitation.comment,
      // rating: invitation.rating,
      // status: 1,
    };

    AcceptInvitation(dispatch, editInvitation);
    setTimeout(async () => {
      history.push("/manageinvitation");
    }, 500);
  };

  const handleEditRefuseClick = async (invitation) => {
    console.log("Edit: ", invitation);

    const editInvitation = {
      // id: invitation.id,
      idStudent: invitation.idStudent,
      // idTutor: invitation.idTutor,
      // comment: invitation.comment,
      // rating: invitation.rating,
      // status: 2,
    };

    RefuseInvitation(dispatch, editInvitation);
    setTimeout(async () => {
      history.push("/manageinvitation");
    }, 500);
  };
  // const handleRemoveClick = async (invitation) => {
  //   console.log("delete: ", invitation);
  //   await DeleteInvitation(dispatch, invitation);
  // };

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
            <h1 style={{ textAlign: "center" }}>DANH SÁCH STUDENT MỜI DẠY</h1>
            <div className="col-md-9">
              <div className="row-tittle hidden-xs ">
                <div>
                  <div className="col-md-2 col-sm-2">
                    <div>
                      <h3>ID</h3>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div>
                      <h3>NỘI DUNG </h3>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className>
                      <h3>LIÊN HỆ SĐT </h3>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className>
                      <h3>HÀNH ĐỘNG</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* row */}
              {invitations.map((invitation) => (
                <div key={invitation.id}>
                  <InvitationItem
                    invitation={invitation}
                    onEditAcceptClick={handleEditAcceptClick}
                    onEditRefuseClick={handleEditRefuseClick}
                  />
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

export default ManageInvitation;
