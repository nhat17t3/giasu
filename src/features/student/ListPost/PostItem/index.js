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
      <div
        className="row-request bla-common-shadow "
        style={{ margin: "auto" }}
      >
        <div className="">
          <div className="row">
            <div className="col-md-2 col-sm-2">
              <div className="">
                <p className="creator-name">
                  <div>Bài đăng số {post.id}</div>
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

                  {post.title}
                </h2>
                <p style={{ fontStyle: "italic" }}>{post.description}</p>
                <span className="group-span" style={{ margin: "5px" }}>
                  {post.grade}{" "}
                </span>
                <span className="group-span" style={{ margin: "5px" }}>
                  {" "}
                  Môn {post.subjects[0]}{" "}
                </span>
                <span className="group-span" style={{ margin: "5px" }}>
                  {post.address}{" "}
                </span>
              </div>
            </div>
            <div className="col-md-1 col-sm-1">
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
                    className="btn-bla-big  "
                    style={{ background: "green", width: "70px" }}
                    onClick={handleViewClick}
                  >
                    View
                  </button>
                  <button
                    className="btn-bla-big"
                    style={{ background: "blue", width: "70px" }}
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-bla-big "
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

export default PostItem;
