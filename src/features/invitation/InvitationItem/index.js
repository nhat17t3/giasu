import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

InvitationItem.propTypes = {
  invitation: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

InvitationItem.defaultProps = {
  invitation: {},
  onEditClick: null,
  onRemoveClick: null,
};

function InvitationItem(props) {
  const { invitation, onEditClick, onRemoveClick } = props;

  // const customer = useSelector((state) =>
  //   state.customers.customers.filter(
  //     (x) => x.idcustomer === +invitation.idcustomer
  //   )
  // );

  const handleEditClick = () => {
    if (onEditClick) onEditClick(invitation);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(invitation);
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
                  <div>Thông báo: {invitation.id}</div>
                </p>
                {/* <p className="created-date">25/03/2021</p> */}
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="">
                <h2 className="row-request-title">
                 Studentcó id = {invitation.idcustomer} đã mời bạn làm gia sư
                </h2>
              </div>
            </div>
            <div className="col-md-2 col-sm-2">
              <div className="">
                <div className="green-text" style={{ color: "#FF961E" }}>
                  <div
                    style={{
                      marginTop: "5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#FF961E",
                    }}
                  >
                    {/* {post.price} */}
                    0369623657
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="">
                <div className="action-group text-right show-when-hover">
                  <button
                    className="  btn btn-bla-big   "
                    style={{ background: "blue", width: "70px" }}
                    onClick={handleEditClick}
                    disabled={invitation.status}
                  >
                    Accept
                  </button>
                  <button
                    className=" btn btn-bla-big "
                    style={{ background: "red", width: "70px" }}
                    onClick={handleRemoveClick}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvitationItem;
