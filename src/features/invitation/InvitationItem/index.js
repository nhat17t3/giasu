import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

InvitationItem.propTypes = {
  invitation: PropTypes.object,
  onEditAcceptClick: PropTypes.func,
  onEditRefuseClick: PropTypes.func,
};

InvitationItem.defaultProps = {
  invitation: {},
  onEditAcceptClick: null,
  onEditRefuseClick: null,
};

function InvitationItem(props) {
  const { invitation, onEditRefuseClick, onEditAcceptClick } = props;

  let student1 = useSelector((state) => state.students.students).find((x) => x.id === +invitation.idStudent);

  // const customer = useSelector((state) =>
  //   state.customers.customers.filter(
  //     (x) => x.idStudent === +invitation.idStudent
  //   )
  // );

  const handleEditAcceptClick = () => {
    if (onEditAcceptClick) onEditAcceptClick(invitation);
  };

  const handleEditRefuseClick = () => {
    if (onEditRefuseClick) onEditRefuseClick(invitation);
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
                  <div>id invitation Thông báo: {invitation.id}</div>
                </p>
                {/* <p className="created-date">25/03/2021</p> */}
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="">
                <h2 className="row-request-title">
                 {/* Studentcó id = {invitation.idStudent} {student1.name} đã mời bạn làm gia sư */}
                 Studentcó id = {invitation.idStudent}  đã mời bạn làm gia sư

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
                    onClick={handleEditAcceptClick}
                     disabled={invitation.status==1}
                  >
                    Accept
                  </button>
                  <button
                    className=" btn btn-bla-big "
                    style={{ background: "red", width: "70px" }}
                    onClick={handleEditRefuseClick}
                    disabled={invitation.status==2}
                  >
                    tu choi

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
