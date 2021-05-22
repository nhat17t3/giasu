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
  const { tutor, onViewClick } = props;

  const handleVewClick = () => {
    if (onViewClick) onViewClick(tutor);
  };

  return (
    <>
      <div className="col col-md-3 col-sm-6">
        <div className="box-content" data-original-title title>
          <div className="tile-v-12">
            <div className="img">
              <div href="">
                {tutor.avatar == null ? (
                  <img
                    typeof="foaf:Image"
                    src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/177362931_1404579779886403_1263434078832591823_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5oLfEmMEoxsAX9o91F4&_nc_ht=scontent-hkg4-2.xx&oh=c909b91e3ba86c793dc193bc5ff0e1ae&oe=60BB3244"
                    width={312}
                    height={200}
                    alt=" picture"
                    title=" picture"
                  />
                ) : (
                  <img
                    typeof="foaf:Image"
                    src={tutor.avatar}
                    width={312}
                    height={200}
                    alt=" picture"
                    title=" picture"
                  />
                )}
              </div>
            </div>
            <div className="name">
              <h4>
                <a>{tutor.name}</a>
              </h4>
              <p>
                <span>{tutor.address}</span> |
                <span className="mon-hoc"> {tutor.subjects[0]}</span>
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

              <button className="btn btn-default" onClick={handleVewClick}>
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
