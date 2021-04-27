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
import {
  DeleteInvitation,
  EditInvitation,
  GetInvitations,
} from "../../../api/invitationsApi";
import { useState } from "react";

ManageInvitation.propTypes = {};

function ManageInvitation(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listinvite, setListinvite] = useState([]);

  useEffect(() => {
    GetInvitations(dispatch);
  }, []);

  const userID = useSelector((state) => state.user.user.id);
  const invitations = useSelector((state) =>
    state.invitations.invitations.filter((x) => x.idtutor === +userID)
  );

  useEffect(() => {
    setListinvite(invitations);
  }, [invitations]);

  const handleEditClick = async (invitation) => {
    console.log("Edit: ", invitation);

    const editInvitation = {
      id: invitation.id,
      idcustomer: invitation.idcustomer,
      idtutor: invitation.idtutor,
      comment: invitation.comment,
      rating: invitation.rating,
      status: true,
    };

    EditInvitation(dispatch, editInvitation);
    setTimeout(async () => {
      history.push("/manageinvitation");
    }, 500);
  };

  const handleRemoveClick = async (invitation) => {
    console.log("delete: ", invitation);
    await DeleteInvitation(dispatch, invitation);
  };

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
            {/*Menu trái end*/}

            {/* content */}
            <h1 style={{ textAlign: "center" }}>Danh sach yeu cau</h1>
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
              {listinvite.map((invitation) => (
                <div key={invitation.id}>
                  <InvitationItem
                    invitation={invitation}
                    onRemoveClick={handleRemoveClick}
                    onEditClick={handleEditClick}
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
