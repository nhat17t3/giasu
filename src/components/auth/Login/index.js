import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignIn } from "../../../api/authenticationAPI";

Login.propTypes = {};
function Login(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting = false;
          // alert(JSON.stringify(values));
          SignIn(dispatch, values);
        }}
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
          password: Yup.string().required("Required"),
        })}
      >
        {({
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="gform   form-nhom-hoc region region-content">
            <div className="body-form">
              <div className="row" style={{ margin: 0, paddingTop: "150px" }}>
                <Form action="" method="post">
                  <div className="col-md-4 "></div>
                  <div
                    className="col-md-4 "
                    // style={{ padding: "0 !important" }}
                  >
                    <div
                      className="left-class-create bla-common-shadow"
                      style={{ margin: "" }}
                    >
                      <div className="header-form">
                        <h2
                          style={{
                            margin: "5px",
                            fontSize: "24px",
                            textAlign: "center",
                          }}
                        >
                          Login
                        </h2>
                      </div>
                      <div className="">
                        <div className=" ">
                          <div
                            className="col-md-12 class-field  "
                            style={{ marginTop: "20px" }}
                          >
                            <Field
                              name="email"
                              type="text"
                              placeholder="Email"
                            />
                            <div style={{ color: "red" }}>
                              <ErrorMessage name="email" />
                            </div>
                          </div>
                          <div className="col-md-12 class-field">
                            <Field
                              name="password"
                              type="password"
                              placeholder="password"
                            />
                            <div style={{ color: "red" }}>
                              <ErrorMessage name="password" />
                            </div>
                          </div>
                          <div
                            className="col-md-12 class-field"
                            style={{
                              textAlign: "end",
                              marginRight: "25px",
                              marginBottom: "15px",
                            }}
                          >
                            <Link to="/register">
                              <p style={{ fontSize: "15px" }}>
                                You haven't an account? Register{" "}
                              </p>
                            </Link>
                          </div>

                          <div
                            className="row"
                            style={{
                              textAlign: "center",
                              paddingBottom: "20px ",
                            }}
                          >
                            <button
                              type="submit"
                              className="btn-bla-big btn-yellowblacasa"
                              style={{ width: "150px" }}
                              disabled={isSubmitting}
                            >
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
export default Login;
