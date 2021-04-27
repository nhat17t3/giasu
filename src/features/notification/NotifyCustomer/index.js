import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


function NotifyCustomer(props) {
  const { invitation } = props;
  const history = useHistory();

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
                  <div>Thông báo: {invitation.id}</div>
                </p>
                {/* <p className="created-date">25/03/2021</p> */}
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              {/* <div onClick={history.push(`/postview/${suggestion.idpost}`)}> */}
                <h2 className="row-request-title">
                 Tutor idtutor = {invitation.idtutor} đã chấp nhận lời mời dạy của bạn
                </h2>
              {/* </div> */}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default NotifyCustomer;
