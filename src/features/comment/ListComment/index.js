import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useEffect } from "react";

import { useState } from "react";

import { GetComments } from "../../../api/commentsApi";
import { GetStudents } from "../../../api/studentsApi";
import CommentItem from "./CommentItem";

ListComment.propTypes = {};

function ListComment(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { IDTUTOR } = props;

  const [listcomment, setListcomment] = useState([]);

  useEffect( async () => {
    await GetStudents(dispatch);
    await GetComments(dispatch);
  }, []);

  // useEffect(() => {
  //   GetComments(dispatch);
  // }, []);

  let comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    const k = comments.filter((x) => x.idTutor === +IDTUTOR);
    setListcomment(k);
  }, [comments]);

  return (
    <>
      <div>
        <div>
          {/* row */}
          {listcomment.map((comment) => (
            <div key={comment.id}>
              <CommentItem comment={comment} />
            </div>
          ))}
          {/* end row */}
        </div>
      </div>
    </>
  );
}

export default ListComment;
