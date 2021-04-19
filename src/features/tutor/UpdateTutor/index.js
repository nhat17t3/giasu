import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { EditTutor } from "../../../api/tutorsApi";
import { GetProfile, UpdateProfile } from "../../../api/authenticationAPI";
import { useEffect } from "react";

UpdateTutor.propTypes = {};

function UpdateTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    GetProfile(dispatch);
  }, []);

  const editedTutor = useSelector((state) => {
    const getTutor = state.user.user;
    return getTutor;
  });

  const initialValues = editedTutor;
  console.log(initialValues);

  // const v = useSelector((state) => state.user.user);
  if (initialValues.id == null) return null;

  return (
    <>
      <Layout>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("valueeee", values);
            UpdateProfile(dispatch, values);
            history.push("/updatetutor");
          }}
          validationSchema={Yup.object({
            // avartar: Yup.string().required("Required"),
            // grade: Yup.string().required("Required"),
            // subject: Yup.string().required("Required"),
            // name: Yup.string().required("Required"),
            // price: Yup.string().required("Required"),
            // phonenumber: Yup.number().required("Required").nullable(),
            // address: Yup.string().required("Required"),
            // time: Yup.string().required("Required"),
            // description: Yup.string().required("Required"),
            // qualification: Yup.string().required("Required"),
          })}
        >
          {({
            isSubmitting,
            values,
            /* and other goodies */
          }) => (
            <div
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            >
              <div>
                {/*Menu trái*/}
                <div
                  className="col-md-3 "
                  style={{
                    paddingTop: "20px",
                  }}
                >
                  <div>
                    <ul id="accordion" className="accordion">
                      <li>
                        <div className="link">
                          <i
                            className="fa fa-graduation-cap"
                            aria-hidden="true"
                          />
                          Quản lý yêu cầu
                        </div>
                      </li>
                      <li>
                        <div className="link">
                          <i className="fa fa-comments" />
                          <a href="/hoang-long-nhat/messages">
                            Hội thoại và tin nhắn
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="link">
                          <i className="fa fa-bell" aria-hidden="true" />
                          Thông báo
                        </div>
                      </li>
                      <li>
                        <div className="link">
                          <i
                            className="fa fa-pencil-square"
                            aria-hidden="true"
                          />
                          Bài viết
                        </div>
                      </li>
                      <li>
                        <div className="link">
                          <i className="fa fa-heart-saved" />
                          Đã lưu
                        </div>
                      </li>
                      <li>
                        <div className="link">
                          <i className="fa fa-btc" />
                          <a href="/hoang-long-nhat/bpoint">Quản lý BPoint</a>
                        </div>
                      </li>
                      <li>
                        <div className="link">
                          <i className="fa fa-flag" aria-hidden="true" />
                          Thông tin cá nhân
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className=" region region-content "
                  // id="ajax-content-user-load"
                  style={{ padding: 0 }}
                >
                  <div className="" style={{ marginBottom: "20px" }}>
                    <div className="gform form-article form-product form-nhom-hoc">
                      <div className="body-form">
                        <div className="row" style={{ margin: 0 }}>
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
                                    Thông tin gia sư
                                  </h2>
                                </div>
                                {/* <div className="row info-step-5 info-step group-row">
                                <h3> Ảnh xác nhận thông tin gia sư</h3>
                                <div className="verifired-img">
                                  <div className="col-md-4">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <label className="title-update">
                                          ẢNH ĐẠI DIỆN (PHẢI RÕ MẶT, CHỤP MỘT
                                          MÌNH){" "}
                                          <span className="teacher-alert">
                                            *
                                          </span>
                                        </label>
                                        <img
                                          id="show_avatar"
                                          className="show_avatar_default"
                                          src="https://d1plicc6iqzi9y.cloudfront.net/sites/all/themes/blacasa/images/default/default_user.png"
                                        />
                                        <div className="box">
                                          <input
                                            type="file"
                                            name="edit_avatar_account"
                                            className="inputfile"
                                            id="edit_avatar_account"
                                            onchange="return ajax_update_image('edit_avatar_account','show_avatar',624,'/ajax-update-image/avatar/36379')"
                                          />
                                          <label htmlFor="edit_avatar_account">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={20}
                                              height={17}
                                              viewBox="0 0 20 17"
                                            >
                                              <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                                            </svg>{" "}
                                            <span>Chọn ảnh…</span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}

                                {/*Tóm tắt + môn học + chủ đề*/}
                                <div className="group-row">
                                  <div className="row">
                                    <div className="col-md-12 class-field">
                                      <p className="p-create-class-title">
                                        Họ và tên{" "}
                                        <span className="class-field-alert">
                                          *
                                        </span>
                                      </p>

                                      <Field
                                        name="name"
                                        type="text"
                                        placeholder="Ho va ten"
                                      />
                                      <div style={{ color: "red" }}>
                                        <ErrorMessage name="name" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="class-field-5 class-field">
                                        <p className="p-create-class-title">
                                          Điện thoại liên hệ{" "}
                                          <span className="class-field-alert">
                                            *
                                          </span>
                                        </p>

                                        <Field
                                          name="phonenumber"
                                          type="text"
                                          placeholder="Ví dụ: 091234567"
                                        />
                                        <div style={{ color: "red" }}>
                                          <ErrorMessage name="phonenumber" />
                                        </div>
                                      </div>
                                    </div>
                                    {/*Môn học*/}
                                    <div className="col-md-6">
                                      <div className="class-field-4 class-field">
                                        <p className="p-create-class-title">
                                          Môn học{" "}
                                          <span className="class-field-alert">
                                            *
                                          </span>
                                        </p>

                                        <Field name="subject" as="select">
                                          <option value></option>
                                          <optgroup label="Môn học phổ thông">
                                            <option value={"Toán"}>Toán</option>
                                            <option value={"Lý"}>Lý</option>
                                            <option value={"Hóa"}>Hóa</option>
                                            <option value={"Tiếng anh"}>
                                              Tiếng anh
                                            </option>
                                            <option value={"Văn"}>Văn</option>
                                            <option value={"Tiếng Việt"}>
                                              Tiếng Việt
                                            </option>
                                            <option value={"Lịch sử"}>
                                              Lịch sử
                                            </option>
                                            <option value={"Địa lý"}>
                                              Địa lý
                                            </option>
                                            <option value={"Sinh"}>Sinh</option>
                                            <option value={"khác"}>khác</option>
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
                                          <span className="class-field-alert">
                                            *
                                          </span>
                                        </p>

                                        <Field name="grade" as="select">
                                          <option value></option>
                                          <optgroup label="cấp 1">
                                            <option value={"Lớp 1"}>
                                              lớp 1
                                            </option>
                                            <option value={"Lớp 2"}>
                                              lớp 2
                                            </option>
                                            <option value={"Lớp 3"}>
                                              lớp 3
                                            </option>
                                            <option value={"Lớp 5"}>
                                              lớp 5
                                            </option>
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
                                          <span className="class-field-alert">
                                            *
                                          </span>
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
                                      <div className="class-field-4 class-field">
                                        <p className="p-create-class-title">
                                          Bạn là{" "}
                                          <span className="class-field-alert">
                                            *
                                          </span>
                                        </p>

                                        <Field name="qualification" as="select">
                                          <option value>
                                            ban lam nghe gi???
                                          </option>

                                          <option value={"Sinh viên"}>
                                            Sinh viên
                                          </option>
                                          <option value={"Giáo viên"}>
                                            Giáo viên
                                          </option>
                                          <option value={"Thạc sĩ"}>
                                            Thạc sĩ
                                          </option>
                                          <option value={"Người đã đi làm"}>
                                            Người đã đi làm
                                          </option>
                                        </Field>
                                        <div style={{ color: "red" }}>
                                          <ErrorMessage name="qualification" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/*address*/}
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="class-field-7 class-field class-address">
                                        <p className="p-create-class-title">
                                          Địa chỉ cụ thể diễn ra lớp học{" "}
                                          <span className="class-field-alert">
                                            *
                                          </span>
                                        </p>

                                        <Field
                                          name="address"
                                          type="text"
                                          placeholder="Nhập dia chi"
                                        />
                                        <div style={{ color: "red" }}>
                                          <ErrorMessage name="address" />
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div className="col-md-12">
                                    <div className="class-field-7 class-field class-address">
                                      <p className="p-create-class-title">
                                        Thời gian có thể hoc{" "}
                                        <span className="class-field-alert">
                                          *
                                        </span>
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
                                          Mô tả chi tiết bản thân{" "}
                                          <span className="class-field-alert">
                                            *
                                          </span>
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
                                        style={{
                                          width: "100%",
                                          textAlign: "center",
                                        }}
                                      >
                                        <p className="note-calender">
                                          Bấm để chọn lịch.{" "}
                                          <span>Màu xanh</span> là những buổi có
                                          thể học.
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
                                      >
                                        Cập nhật
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
                </div>
              </div>
            </div>
          )}
        </Formik>
      </Layout>
    </>
  );
}

export default UpdateTutor;
