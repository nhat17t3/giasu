import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";

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

  const[a,setA]=useState(false);

  useEffect(() => {
    GetInvitationsByTutor(dispatch);
  }, [a]);

  // const userID = useSelector((state) => state.user.user.id);
  const invitations = useSelector((state) => state.invitations.invitations);

  // useEffect(() => {
  //   const k = invitations.filter((x) => x.idTutor === +userID);
  //   setListinvite(k);
  // }, [invitations]);

  const handleEditAcceptClick = async (invitation) => {
    console.log("Edit accept invitation: ", invitation);
    const editInvitation = {
      idStudent: invitation.idStudent,
    };
    await AcceptInvitation(dispatch, editInvitation);
    setA(!a)
    
    setTimeout(async () => {
      history.push("/manageinvitation");
    }, 500);
  };

  const handleEditRefuseClick = async (invitation) => {
    console.log("Edit refuse invitation: ", invitation);
    const editInvitation = {
      idStudent: invitation.idStudent,
    };
    await RefuseInvitation(dispatch, editInvitation);
    setA(!a)

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
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-2" style={{ marginTop: "62px" }}>
                <Sidebar />
              </div>
              <div className="grid__column-10">
                <div className="notify">
                  <h2 className="notify__heading">Danh sách mời dạy</h2>
                  <div className="grid__row " style={{ margin: "auto 0" }}>
                    <div className="grid__column-2 notify-header__item ">
                      Thời gian
                    </div>
                    <div className="grid__column-5 notify-header__item">
                      Nội dung
                    </div>
                    <div className="grid__column-2 notify-header__item">
                      Liên hệ học sinh
                    </div>
                    <div className="grid__column-3 notify-header__item">
                      Hoạt động
                    </div>
                  </div>

                  {invitations.map((invitation) => (
                    <div className="notify-item" key={invitation.id}>
                      <InvitationItem
                        invitation={invitation}
                        onEditAcceptClick={handleEditAcceptClick}
                        onEditRefuseClick={handleEditRefuseClick}
                      />
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

export default ManageInvitation;
