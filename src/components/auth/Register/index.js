import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { SignUp } from "../../../api/authenticationAPI";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          const { role, ...rest } = values;
          const send = {
            ...rest,
            role: [role],
          };
          // alert(JSON.stringify(send));
          // setSubmitting = false;
          SignUp(dispatch, send);
        }}
        initialValues={{
          username: "",
          email: "",
          phonenumber: "",
          password: "",
          role: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Required"),
          email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
          password: Yup.string().required("Required"),
          phonenumber: Yup.number().required("Required"),
          role: Yup.string()
            .oneOf(["student", "tutor"], "Invalid object")
            .required("Required"),
        })}
      >
        {({
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="gform form-article form-product form-nhom-hoc region region-content">
            <ToastContainer />
            <div className="body-form">
              <div className="row" style={{ margin: 0, paddingTop: "100px" }}>
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
                              name="username"
                              type="text"
                              placeholder="Username"
                            />
                            <div style={{ color: "red" }}>
                              <ErrorMessage name="username" />
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
                              name="phonenumber"
                              type="text"
                              placeholder="Phonenumber"
                            />
                            <div style={{ color: "red" }}>
                              <ErrorMessage name="phonenumber" />
                            </div>
                          </div>
                          <div className="col-md-12 class-field">
                            <Field
                              name="password"
                              type="password"
                              placeholder="Password"
                            />
                            <div style={{ color: "red" }}>
                              <ErrorMessage name="password" />
                            </div>
                          </div>
                          <div className="col-md-12 class-field">
                            <Field name="role" as="select">
                              <option value>Bạn là học sinh hay gia sư?</option>
                              <option value="student">Student</option>
                              <option value="tutor">Tutor</option>
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
                              // disabled={isSubmitting}
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
