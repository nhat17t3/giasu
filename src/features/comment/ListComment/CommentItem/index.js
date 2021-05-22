import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function CommentItem(props) {
  const { comment } = props;
  const history = useHistory();

  const student = useSelector((state) =>
    state.students.students.find((x) => x.id === comment.idStudent)
  );


  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <h5>Student: {student.name} : id {student.id}</h5>
        </div>
        <div className="col-md-7">
          <p>{comment.content}</p>
        </div>
      </div>
    </>
  );
}

export default CommentItem;
