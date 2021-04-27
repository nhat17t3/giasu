import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

SuggestionItem.propTypes = {
  suggestion: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onViewClick:PropTypes.func,

};

SuggestionItem.defaultProps = {
  suggestion: {},
  onEditClick: null,
  onRemoveClick: null,
  onViewClick:null
};

function SuggestionItem(props) {
  const { suggestion, onEditClick, onRemoveClick , onViewClick } = props;
  const history = useHistory();

  // const customer = useSelector((state) =>
  //   state.customers.customers.filter(
  //     (x) => x.idcustomer === +suggestion.idcustomer
  //   )
  // );

  const handleEditClick = () => {
    if (onEditClick) onEditClick(suggestion);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(suggestion);
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
                 Tutor idtutor = {suggestion.idtutor} đã đề nghị dạy lớp idpost = {suggestion.idpost} của bạn
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
                    onClick={handleEditClick}
                    disabled={suggestion.status}
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
