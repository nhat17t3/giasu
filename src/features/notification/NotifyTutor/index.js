import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function NotifyTutor(props) {
  const { suggestion } = props;
  const history = useHistory();

  let student1 = useSelector((state) => state.students.students).find(
    (x) => x.id === +suggestion.idStudent
  );
  let post1 = useSelector((state) => state.posts.posts).find(
    (x) => x.id === +suggestion.idPost
  );

  const handleViewClick = async () => {
    const ViewUrl = `/postview/${post1.id}`;
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
                  <div> ID notify Thông báo: {suggestion.id}</div>
                </p>
                {/* <p className="created-date">25/03/2021</p> */}
              </div>
            </div>
            {suggestion.status == 1 ? (
              <div className="col-md-8 col-sm-8">
                <h2 className="row-request-title">
                  Student có id = {suggestion.idStudent} {student1.name} đã
                  chấp nhận đề nghị dạy lớp idPost = {suggestion.idPost} {post1.title} của bạn
                </h2>
              </div>
            ) : null}
            {suggestion.status == 2 ? (
              <div className="col-md-8 col-sm-8">
                <h2 className="row-request-title">
                  Student có id = {suggestion.idStudent} {student1.name} đã
                  tu choi đề nghị dạy lớp idPost = {suggestion.idPost} của bạn
                </h2>
              </div>
            ) : null}
            {suggestion.status == 1 ? (
              <div className="col-md-2 col-sm-2">
                <div className="">
                  <div className="">
                    <button
                      className=" btn  "
                      style={{
                        background: "red",
                        width: "100px",
                        color: "white",
                      }}
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

export default NotifyTutor;
