import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { SignUp } from "../../../api/authenticationAPI";
import { useDispatch } from "react-redux";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting = false;
          SignUp(dispatch, values);
        }}
        initialValues={{ email: "", password: "", name: "", object: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
          password: Yup.string().required("Required"),
          object: Yup.string()
            .oneOf(["student", "tutor"], "Invalid object")
            .required("Required"),
        })}
      >
        {({
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="gform form-article form-product form-nhom-hoc region region-content">
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
                          Register
                        </h2>
                      </div>
                      <div className="group-row">
                        <div className=" row">
                          <div
                            className="col-md-12 class-field  "
                            style={{ marginTop: "20px" }}
                          >
                            <Field
                              name="name"
                              type="text"
                              placeholder="Username"
                            />
                            <div style={{ color: "red" }}>
                              <ErrorMessage name="name" />
                            </div>
                          </div>
                          <div className="col-md-12 class-field">
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
                              type="text"
                              placeholder="Password"
                            />
                            <div style={{ color: "red" }}>
                              <ErrorMessage name="password" />
                            </div>
                          </div>
                          <div className="col-md-12 class-field">
                            <Field name="object" as="select">
                              <option value>Bạn là học sinh hay gia sư?</option>
                              <option value="student">student</option>
                              <option value="tutor">tutor</option>
                            </Field>
                            <div style={{ color: "red" }}>
                              <ErrorMessage name="object" />
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
                            <Link to="/login">
                              <p style={{ fontSize: "15px" }}>
                                You haven an account? Sign in{" "}
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
                              Register
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

export default Register;
