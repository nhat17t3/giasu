import React from "react";
import PropTypes from "prop-types";

PostItem.propTypes = {
  post: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PostItem.defaultProps = {
  post: {},
  onEditClick: null,
  onRemoveClick: null,
  onViewClick: null,
};

function PostItem(props) {
  const { post, onEditClick, onRemoveClick, onViewClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(post);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(post);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(post);
  };

  return (
    <>
      {/* bla-common-shadow */}
      <div className="row-request ">
        <div className="">
          <div className="row">
            <div className="col-md-2 col-sm-2">
              <div className="">
                <p className="creator-name">
                  <a href="/blacasa-cskh-02">Tên người đăng {post.id}</a>
                </p>
                <p className="created-date">25/03/2021</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="">
                <h2 className="row-request-title">
                  <i
                    className="fa fa-check"
                    aria-hidden="true"
                    style={{
                      fontSize: "18px",
                      color: "#03ad03",
                      marginRight: "2px",
                    }}
                    title="Đã xác thực thông tin"
                  ></i>
                  <a href="" target="_blank">
                    {post.title}
                  </a>{" "}
                </h2>
                <p style={{ fontStyle: "italic" }}>{post.description}</p>
                <span className="group-span">lớp{post.grade} </span>
                <span className="group-span">{post.subject} </span>
                <span className="group-span">{post.address} </span>
              </div>
            </div>
            <div className="col-md-1 col-sm-1">
              <div className="">
                <div className="green-text" style={{ color: "#FF961E" }}>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#FF961E",
                    }}
                  >
                    {post.price}
                  </div>{" "}
                  vnđ/tháng
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="">
                <div className="action-group text-right show-when-hover">
                  <button
                    className="btn-bla-big btn-yellowblacasa"
                    onClick={handleViewClick}
                  >
                    View
                  </button>
                  <button
                    className="btn-bla-big btn-yellowblacasa"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-bla-big btn-yellowblacasa"
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

export default PostItem;
