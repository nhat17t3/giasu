import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function NotifyCustomer(props) {
  const { invitation } = props;
  const history = useHistory();

  let tutor1 = useSelector((state) => state.tutors.tutors).find((x) => x.id === +invitation.idTutor);

  const handleViewClick = async () => {
    const ViewUrl = `/tutorview/${tutor1.id}`;
    history.push(ViewUrl);
  };

  return (
    <>
      {/* bla-common-shadow */}
      <div
        className="row-request bla-common-shadow "
        style={{ margin: "auto" }}
      >
        <div className="">
          <div className="row">
            <div className="col-md-2 col-sm-2">
              <div className="">
                <p className="creator-name">
                  <div>id Thông báo: {invitation.id}</div>
                </p>
                {/* <p className="created-date">25/03/2021</p> */}
              </div>
            </div>
            {invitation.status == 1 ? (
              
              <div className="col-md-8 col-sm-8">
                <h2 className="row-request-title">
                  Tutor idTutor = {invitation.idTutor} {tutor1.name}  đã chấp nhận lời mời dạy
                  của bạn
                </h2>
              </div>
            ) : null}
            {invitation.status == 2 ? (
              <div className="col-md-8 col-sm-8">
                <h2 className="row-request-title">
                  Tutor idTutor = {invitation.idTutor} {tutor1.name} đã tu choi lời mời dạy
                  của bạn
                </h2>
              </div>
            ) : null}
            {invitation.status == 1 ? (
              <div className="col-md-2 col-sm-2">
                <div className="">
                  <div className="">
                    <button
                      className=" btn  "
                      style={{ background: "red", width: "100px" , color: "white" }}
                      onClick={handleViewClick}
                    >
                      LIEN HE
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default NotifyCustomer;
