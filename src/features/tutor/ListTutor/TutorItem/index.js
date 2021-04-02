import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

TutorItem.propTypes = {
  tutor: PropTypes.object,
  onViewClick: PropTypes.func,
};

TutorItem.defaultProps = {
  tutor: {},
  onViewClick: null,
};

function TutorItem(props) {
  const { tutor,onViewClick } = props;

  const handleVewClick = () => {
    if (onViewClick) onViewClick(tutor);
  };

  

  return (
    <>
      <div className="col col-md-3 col-sm-6">
        <div className="box-content" data-original-title title>
          <div className="tile-v-12">
            <div className="img">
              <a href="">
                <img
                  typeof="foaf:Image"
                  src={tutor.avatar}
                  width={312}
                  height={200}
                  alt="linh-vu's picture"
                  title="linh-vu's picture"
                />
              </a>
            </div>
            <div className="name">
              <h4>
                <a href="">{tutor.name}</a>
              </h4>
              <p>
                <span>{tutor.address}</span> |
                <span className="mon-hoc">{tutor.subject}</span>
              </p>
              <p className="cost">
                <span> </span>
              </p>
              <span className="number not-review">.</span>
            </div>
            {/* /.name */}
            <div className="description">
              <div className="view">{tutor.description}</div>
            </div>
            {/* /.description */}
            <div className="btn-bottom text-right">
              <div className="btn-data" data-object={39782} data-type="user" />

              <button  className="btn btn-default" onClick={handleVewClick}>
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* /.tile-v-12 */}
        </div>
      </div>
    </>
  );
}

export default TutorItem;
