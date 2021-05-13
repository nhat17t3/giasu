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

AddPost.propTypes = {};

AddPost.defaultProps = {};

function AddPost(props) {
  //   const { initialValues, isAddMode } = props;
  //   console.log(initialValues);

  // const [sang_2, setSang_2] = useState(false);
  // const [chieu_2, setChieu_2] = useState(false);
  // const [toi_2, setToi_2] = useState(false);
  // const [sang_3, setSang_3] = useState(false);
  // const [chieu_3, setChieu_3] = useState(false);
  // const [toi_3, setToi_3] = useState(false);
  // const [sang_4, setSang_4] = useState(false);
  // const [chieu_4, setChieu_4] = useState(false);
  // const [toi_4, setToi_4] = useState(false);
  // const [sang_5, setSang_5] = useState(false);
  // const [chieu_5, setChieu_5] = useState(false);
  // const [toi_5, setToi_5] = useState(false);
  // const [sang_6, setSang_6] = useState(false);
  // const [chieu_6, setChieu_6] = useState(false);
  // const [toi_6, setToi_6] = useState(false);
  // const [sang_7, setSang_7] = useState(false);
  // const [chieu_7, setChieu_7] = useState(false);
  // const [toi_7, setToi_7] = useState(false);
  // const [sang_8, setSang_8] = useState(false);
  // const [chieu_8, setChieu_8] = useState(false);
  // const [toi_8, setToi_8] = useState(false);

  // const schedule = {
  //   sang_2: sang_2,
  //   chieu_2: chieu_2,
  //   toi_2: toi_2,
  //   sang_3: sang_3,
  //   chieu_3: chieu_3,
  //   toi_3: toi_3,
  //   sang_4: sang_4,
  //   chieu_4: chieu_4,
  //   toi_4: toi_4,
  //   sang_5: sang_5,
  //   chieu_5: chieu_5,
  //   toi_5: toi_5,
  //   sang_6: sang_6,
  //   chieu_6: chieu_6,
  //   toi_6: toi_6,
  //   sang_7: sang_7,
  //   chieu_7: chieu_7,
  //   toi_7: toi_7,
  //   sang_8: sang_8,
  //   chieu_8: chieu_8,
  //   toi_8: toi_8,
  // };
  // console.log(schedule);

  const dispatch = useDispatch();
  const history = useHistory();
  const userID = useSelector((state) => state.user.user.id);

  const initialValues = {
    // idcustomer: userID,
    title: "",
    grade: "",
    subject: "",
    price: "",
    phoneNumber: "",
    address: "",
    // time: "",
    description: "",
    schedule: {
      sang_2: false,
      chieu_2: false,
      toi_2: false,
      sang_3: false,
      chieu_3: false,
      toi_3: false,
      sang_4: false,
      chieu_4: false,
      toi_4: false,
      sang_5: false,
      chieu_5: false,
      toi_5: false,
      sang_6: false,
      chieu_6: false,
      toi_6: false,
      sang_7: false,
      chieu_7: false,
      toi_7: false,
      sang_8: false,
      chieu_8: false,
      toi_8: false,
    },
  };

  return (
    <>
      <Layout>
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            // setSubmitting = false;
            const { subject, ...rest } = values;
            const k = {
              subjects: [subject],
              ...rest,
            };
            // console.log(k);
            // alert(JSON.stringify(k));

            NewPost(dispatch, k);
            history.push("/listpost");
          }}
          initialValues={initialValues}
          validationSchema={Yup.object({
            title: Yup.string().required("Required"),
            grade: Yup.string().required("Required"),
            subject: Yup.string().required("Required"),
            price: Yup.number()
              .required("price is required.")
              .positive("price most be a positive number.")
              .integer("price most be an integer."),
            phoneNumber: Yup.string()
              .matches(
                RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),
                "is not valid"
              )
              .required("Phone is required"),
            address: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
          })}
        >
          {({
            isSubmitting,
            values,
            /* and other goodies */
          }) => (
            <div
              className="container p-create-class-body region region-content"
              style={{ marginBottom: "20px" }}
            >
              <div className="gform form-article form-product form-nhom-hoc">
                <div className="body-form">
                  <div
                    className="row"
                    style={{ margin: 0, paddingTop: "15px" }}
                  >
                    <Form action="" method="post">
                      <div className="col-md-1 "></div>
                      <div
                        className="col-md-9 col-sm-12"
                        style={{ padding: "0 !important" }}
                      >
                        <div
                          className="left-class-create bla-common-shadow"
                          style={{ margin: "unset" }}
                        >
                          <div className="header-form">
                            <h2 style={{ margin: 0, fontSize: "24px" }}>
                              Mô tả yêu cầu tìm gia sư
                            </h2>
                          </div>

                          {/*Tóm tắt + môn học + chủ đề*/}
                          <div className="group-row">
                            <div className="row">
                              <div className="col-md-12 class-field">
                                <p className="p-create-class-title">
                                  Tóm tắt yêu cầu tìm gia sư (1 câu, tối đa 100
                                  ký tự){" "}
                                  <span className="class-field-alert">*</span>
                                </p>

                                <Field
                                  name="title"
                                  type="text"
                                  placeholder="Ví dụ: Tìm gia sư tiếng anh lớp 7 tại Hoàn kiếm, Hà Nội"
                                />
                                <div style={{ color: "red" }}>
                                  <ErrorMessage name="title" />
                                </div>
                              </div>
                              {/*Môn học*/}
                              <div className="col-md-6">
                                <div className="class-field-4 class-field">
                                  <p className="p-create-class-title">
                                    Môn học{" "}
                                    <span className="class-field-alert">*</span>
                                  </p>

                                  <Field name="subject" as="select">
                                    <option value></option>
                                    <optgroup label="Môn học phổ thông">
                                      <option value={"Toán"}>Toán</option>
                                      <option value={"Lý"}>Lý</option>
                                      <option value={"Hóa"}>Hóa</option>
                                      <option value={"Tiếng Anh"}>
                                        Tiếng Anh
                                      </option>
                                      <option value={"Ngữ Văn"}>Văn</option>
                                      <option value={"Tiếng Việt"}>
                                        Tiếng Việt
                                      </option>
                                      <option value={"Lịch sử"}>Lịch sử</option>
                                      <option value={"Địa lý"}>Địa lý</option>
                                      <option value={"Sinh"}>Sinh</option>
                                      <option value={"Khác"}>khác</option>
                                    </optgroup>
                                  </Field>
                                  <div style={{ color: "red" }}>
                                    <ErrorMessage name="subject" />
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="class-field-4 class-field">
                                  <p className="p-create-class-title">
                                    Lớp{" "}
                                    <span className="class-field-alert">*</span>
                                  </p>

                                  <Field name="grade" as="select">
                                    <option value></option>
                                    <optgroup label="cấp 1">
                                      <option value={"Lớp 1"}>lớp 1</option>
                                      <option value={"Lớp 2"}>lớp 2</option>
                                      <option value={"Lớp 3"}>lớp 3</option>
                                      <option value={"Lớp 4"}>lớp 4</option>
                                      <option value={"Lớp 5"}>lớp 5</option>
                                    </optgroup>
                                    <optgroup label="cấp 2">
                                      <option value={"Lớp 6"}>lớp 6</option>
                                      <option value={"Lớp 7"}>lớp 7</option>
                                      <option value={"Lớp 8"}>lớp 8</option>
                                      <option value={"Lớp 9"}>lớp 9</option>
                                    </optgroup>
                                    <optgroup label="cấp 3">
                                      <option value={"Lớp 10"}>lớp 10</option>
                                      <option value={"Lớp 11"}>lớp 11</option>
                                      <option value={"Lớp 12"}>lớp 12</option>
                                    </optgroup>
                                  </Field>
                                  <div style={{ color: "red" }}>
                                    <ErrorMessage name="grade" />
                                  </div>
                                </div>
                              </div>

                              {/*Chủ đề liên quan*/}
                              <div className="col-md-12">
                                <div className="group-tag"></div>
                              </div>
                            </div>
                          </div>
                          {/*Thông tin học phí, số giờ học, phone, place*/}
                          <div className="group-row">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="class-field-6 class-field">
                                  <p className="p-create-class-title">
                                    Học phí dự kiến (vnđ/buổi){" "}
                                    <span className="class-field-alert">*</span>
                                  </p>

                                  <Field
                                    name="price"
                                    type="text"
                                    placeholder="Ví dụ:250,000"
                                    className="numberOnly"
                                  />
                                  <div style={{ color: "red" }}>
                                    <ErrorMessage name="price" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="class-field-5 class-field">
                                  <p className="p-create-class-title">
                                    Điện thoại liên hệ{" "}
                                    <span className="class-field-alert">*</span>
                                  </p>

                                  <Field
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Ví dụ: 091234567"
                                  />
                                  <div style={{ color: "red" }}>
                                    <ErrorMessage name="phoneNumber" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/*address*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="class-field-7 class-field class-address">
                                  <p className="p-create-class-title">
                                    Địa chỉ cụ thể diễn ra lớp học{" "}
                                    <span className="class-field-alert">*</span>
                                  </p>

                                  <Field name="address" as="select">
                                    <option value></option>
                                    <option value={"Liên Chiểu"}>
                                      Liên Chiểu
                                    </option>
                                    <option value={"Ngũ Hành Sơn"}>
                                      Ngũ Hành Sơn
                                    </option>
                                    <option value={"Sơn Trà"}>Sơn Trà</option>
                                    <option value={"Thanh Khê"}>
                                      Thanh Khê
                                    </option>
                                    <option value={"Hoà Vang"}>Hoà Vang</option>
                                    <option value={"Hải Châu"}>Hải Châu</option>
                                  </Field>
                                  <div style={{ color: "red" }}>
                                    <ErrorMessage name="address" />
                                  </div>
                                </div>
                              </div>
                              {/* <div className="col-md-12">
                              <div className="class-field-7 class-field class-address">
                                <p className="p-create-class-title">
                                  Thời gian có thể hoc{" "}
                                  <span className="class-field-alert">*</span>
                                </p>

                                <Field
                                  name="time"
                                  type="text"
                                  placeholder="Nhập thời gian có thể học"
                                />
                              </div>
                            </div> */}
                            </div>
                          </div>
                          {/*Mô tả chi tiết nội dung  học*/}
                          <div className="group-row">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="class-field-12 class-field">
                                  <p className="p-create-class-title">
                                    <i
                                      className="fa fa-quote-right"
                                      aria-hidden="true"
                                    />
                                    Mô tả chi tiết nội dung muốn học{" "}
                                    <span className="class-field-alert">*</span>
                                  </p>

                                  <Field
                                    id="introduce-class"
                                    name="description"
                                    as="textarea"
                                    placeholder="Mô tả các nội dung muốn học tại đây... "
                                  />
                                  <div style={{ color: "red" }}>
                                    <ErrorMessage name="description" />
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-12">
                                <p className="p-create-class-title">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />{" "}
                                  Thời gian có thể học
                                </p>

                                <div className="calendar-list-picker">
                                  <div className="row-calendar-check">
                                    <h4>Thứ 2</h4>
                                    <ul>
                                      <li>
                                        <label
                                          htmlFor="morning-calendar-2"
                                          className={
                                            values.schedule.sang_2
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Sáng
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="morning-calendar-2"
                                          type="checkbox"
                                          name="schedule.sang_2"
                                          // value={sang_2}
                                          // defaultValue={sang_2}
                                          // onChange={() => setSang_2(!sang_2)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="afternoon-calendar-2"
                                          className={
                                            values.schedule.chieu_2
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Chiều
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="afternoon-calendar-2"
                                          type="checkbox"
                                          name="schedule.chieu_2"
                                          // defaultValue="chieu_2"
                                          // onChange={() => setChieu_2(!chieu_2)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="evening-calendar-2"
                                          className={
                                            values.schedule.toi_2
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Tối
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="evening-calendar-2"
                                          type="checkbox"
                                          name="schedule.toi_2"
                                          // defaultValue="toi_2"
                                          // onChange={() => setToi_2(!toi_2)}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="row-calendar-check">
                                    <h4>Thứ 3</h4>
                                    <ul>
                                      <li>
                                        <label
                                          htmlFor="morning-calendar-3"
                                          className={
                                            values.schedule.sang_3
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Sáng
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="morning-calendar-3"
                                          type="checkbox"
                                          name="schedule.sang_3"
                                          // defaultValue="sang_3"
                                          // onChange={() => setSang_3(!sang_3)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="afternoon-calendar-3"
                                          className={
                                            values.schedule.chieu_3
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Chiều
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="afternoon-calendar-3"
                                          type="checkbox"
                                          name="schedule.chieu_3"
                                          // defaultValue="chieu_3"
                                          // onChange={() => setChieu_3(!chieu_3)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="evening-calendar-3"
                                          className={
                                            values.schedule.toi_3
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Tối
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="evening-calendar-3"
                                          type="checkbox"
                                          name="schedule.toi_3"
                                          // defaultValue="toi_3"
                                          // onChange={() => setToi_3(!toi_3)}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="row-calendar-check">
                                    <h4>Thứ 4</h4>
                                    <ul>
                                      <li>
                                        <label
                                          htmlFor="morning-calendar-4"
                                          className={
                                            values.schedule.sang_4
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Sáng
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="morning-calendar-4"
                                          type="checkbox"
                                          name="schedule.sang_4"
                                          // defaultValue="sang_4"
                                          // onChange={() => setSang_4(!sang_4)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="afternoon-calendar-4"
                                          className={
                                            values.schedule.chieu_4
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Chiều
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="afternoon-calendar-4"
                                          type="checkbox"
                                          name="schedule.chieu_4"
                                          // defaultValue="chieu_4"
                                          // onChange={() => setChieu_4(!chieu_4)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="evening-calendar-4"
                                          className={
                                            values.schedule.toi_4
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Tối
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="evening-calendar-4"
                                          type="checkbox"
                                          name="schedule.toi_4"
                                          // defaultValue="toi_4"
                                          // onChange={() => setToi_4(!toi_4)}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="row-calendar-check">
                                    <h4>Thứ 5</h4>
                                    <ul>
                                      <li>
                                        <label
                                          htmlFor="morning-calendar-5"
                                          className={
                                            values.schedule.sang_5
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Sáng
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="morning-calendar-5"
                                          type="checkbox"
                                          name="schedule.sang_5"
                                          // defaultValue="sang_5"
                                          // onChange={() => setSang_5(!sang_5)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="afternoon-calendar-5"
                                          className={
                                            values.schedule.chieu_5
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Chiều
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="afternoon-calendar-5"
                                          type="checkbox"
                                          name="schedule.chieu_5"
                                          // defaultValue="chieu_5"
                                          // onChange={() => setChieu_5(!chieu_5)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="evening-calendar-5"
                                          className={
                                            values.schedule.toi_5
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Tối
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="evening-calendar-5"
                                          type="checkbox"
                                          name="schedule.toi_5"
                                          // defaultValue="toi_5"
                                          // onChange={() => setToi_5(!toi_5)}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="row-calendar-check">
                                    <h4>Thứ 6</h4>
                                    <ul>
                                      <li>
                                        <label
                                          htmlFor="morning-calendar-6"
                                          className={
                                            values.schedule.sang_6
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Sáng
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="morning-calendar-6"
                                          type="checkbox"
                                          name="schedule.sang_6"
                                          // defaultValue="sang_6"
                                          // onChange={() => setSang_6(!sang_6)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="afternoon-calendar-6"
                                          className={
                                            values.schedule.chieu_6
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Chiều
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="afternoon-calendar-6"
                                          type="checkbox"
                                          name="schedule.chieu_6"
                                          // defaultValue="chieu_6"
                                          // onChange={() => setChieu_6(!chieu_6)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="evening-calendar-6"
                                          className={
                                            values.schedule.toi_6
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Tối
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="evening-calendar-6"
                                          type="checkbox"
                                          name="schedule.toi_6"
                                          // defaultValue="toi_6"
                                          // onChange={() => setToi_6(!toi_6)}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="row-calendar-check">
                                    <h4>Thứ 7</h4>
                                    <ul>
                                      <li>
                                        <label
                                          htmlFor="morning-calendar-7"
                                          className={
                                            values.schedule.sang_7
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Sáng
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="morning-calendar-7"
                                          type="checkbox"
                                          name="schedule.sang_7"
                                          // defaultValue="sang_7"
                                          // onChange={() => setSang_7(!sang_7)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="afternoon-calendar-7"
                                          className={
                                            values.schedule.chieu_7
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Chiều
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="afternoon-calendar-7"
                                          type="checkbox"
                                          name="schedule.chieu_7"
                                          // defaultValue="chieu_7"
                                          // onChange={() => setChieu_7(!chieu_7)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="evening-calendar-7"
                                          className={
                                            values.schedule.toi_7
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Tối
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="evening-calendar-7"
                                          type="checkbox"
                                          name="schedule.toi_7"
                                          // defaultValue="toi_7"
                                          // onChange={() => setToi_7(!toi_7)}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="row-calendar-check">
                                    <h4>Chủ nhật</h4>
                                    <ul>
                                      <li>
                                        <label
                                          htmlFor="morning-calendar-8"
                                          className={
                                            values.schedule.sang_8
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Sáng
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="morning-calendar-8"
                                          type="checkbox"
                                          name="schedule.sang_8"
                                          // defaultValue="sang_8"
                                          // onChange={() => setSang_8(!sang_8)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="afternoon-calendar-8"
                                          className={
                                            values.schedule.chieu_8
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Chiều
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="afternoon-calendar-8"
                                          type="checkbox"
                                          name="schedule.chieu_8"
                                          // defaultValue="chieu_8"
                                          // onChange={() => setChieu_8(!chieu_8)}
                                        />
                                      </li>
                                      <li>
                                        <label
                                          htmlFor="evening-calendar-8"
                                          className={
                                            values.schedule.toi_8
                                              ? "lbl-active"
                                              : ""
                                          }
                                        >
                                          Tối
                                        </label>
                                        <Field
                                          className="radio-calendar"
                                          id="evening-calendar-8"
                                          type="checkbox"
                                          name="schedule.toi_8"
                                          // defaultValue="toi_8"
                                          // onChange={() => setToi_8(!toi_8)}
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div
                                  style={{ width: "100%", textAlign: "center" }}
                                >
                                  <p className="note-calender">
                                    Bấm để chọn lịch. <span>Màu xanh</span> là
                                    những buổi có thể học.
                                  </p>
                                </div>
                              </div>

                              <div
                                className="row"
                                style={{
                                  textAlign: "center",
                                  padding: "10px 0",
                                }}
                              >
                                <button
                                  type="submit"
                                  className="btn-bla-big btn-yellowblacasa"
                                  // disabled={isSubmitting}
                                >
                                  Đăng yêu cầu
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                {/* /.body-form */}
              </div>
              {/* /.gform */}
            </div>
          )}
        </Formik>
      </Layout>
    </>
  );
}

export default AddPost;
