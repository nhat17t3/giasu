import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormFeedback } from "reactstrap";
import PropTypes from "prop-types";
import { stringify } from "query-string";
import { NewPost } from "../../../api/postsApi";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import { NewComment } from "../../../api/commentsApi";

AddComment.propTypes = {};

AddComment.defaultProps = {};

function AddComment(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userID = useSelector((state) => state.user.user.id);
  const { IDTUTOR } = props;

  const initialValues = {
    idcustomer: userID,
    idtutor: Number(IDTUTOR),
    content: "",
  };

  return (
    <>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
          NewComment(dispatch, values);

          const Url = `/tutorview/${values.idtutor}`;
          history.push(Url);
        }}
        initialValues={initialValues}
        validationSchema={Yup.object({
          // content: Yup.string().required("Required"),
        })}
      >
        {({
          isSubmitting,
          values,
          /* and other goodies */
        }) => (
          <Form action="" method="post">
            {/*Tóm tắt + môn học + chủ đề*/}

            <div className="group-row">
              <div className="row">
                <div className="col-md-11">
                  <div className="class-field-12 class-field">
                    <Field
                      id="introduce-class"
                      name="content"
                      as="textarea"
                      placeholder="Bình luận... "
                    />
                    {/* <div style={{ color: "red" }}>
                      <ErrorMessage name="content" />
                    </div> */}
                  </div>
                </div>
                <div
                  className="col-md-1"
                  style={{
                    textAlign: "center",
                    padding: "10px 0",
                  }}
                >
                  <button
                    type="submit"
                    className="btn-bla-big btn-yellowblacasa"
                    style={{ width: "70px" }}
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddComment;
