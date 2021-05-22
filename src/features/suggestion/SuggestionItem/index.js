import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

SuggestionItem.propTypes = {
  suggestion: PropTypes.object,
  onEditAcceptClick: PropTypes.func,
  onEditRefuseClick: PropTypes.func,
  onViewClick: PropTypes.func,
};

SuggestionItem.defaultProps = {
  suggestion: {},
  onEditAcceptClick: null,
  onEditRefuseClick: null,
  onViewClick: null,
};

function SuggestionItem(props) {
  const { suggestion, onViewClick, onEditRefuseClick, onEditAcceptClick } = props;
  const history = useHistory();

  let tutor1 = useSelector((state) => state.tutors.tutors).find((x) => x.id === +suggestion.idTutor);
  let post1 = useSelector((state) => state.posts.posts).find((x) => x.id === +suggestion.idPost);


  const handleEditAcceptClick = () => {
    if (onEditAcceptClick) onEditAcceptClick(suggestion);
  };

  const handleEditRefuseClick = () => {
    if (onEditRefuseClick) onEditRefuseClick(suggestion);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(suggestion);
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
                  <div>suggestionID: {suggestion.id}</div>
                </p>
                {/* <p className="created-date">25/03/2021</p> */}
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              {/* <div onClick={history.push(`/postview/${suggestion.idpost}`)}> */}
              <h2 className="row-request-title">
                Tutor có name = {tutor1.name} idtutor = {suggestion.idTutor} đã
                đề nghị dạy lớp idpost = {suggestion.idPost} {post1.title} của bạn
                {/* Tutor có name =  idtutor = {suggestion.idTutor} đã
                đề nghị dạy lớp idpost = {suggestion.idPost}  của bạn */}
              </h2>
              {/* </div> */}
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
                    disabled={suggestion.status==1}
                  >
                    accept
                  </button>
                  <button
                    className=" btn btn-bla-big "
                    style={{ background: "red", width: "70px" }}
                    onClick={handleEditRefuseClick}
                    disabled={suggestion.status==2}
                  >
                    Từ chối
                  </button>
                  <button
                    className=" btn btn-bla-big "
                    style={{ background: "red", width: "100px" }}
                    onClick={handleViewClick}
                    
                  >
                    view tutor
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

export default SuggestionItem;
