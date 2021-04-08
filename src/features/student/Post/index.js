import React from "react";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormFeedback } from "reactstrap";
import PropTypes from "prop-types";

Post.propTypes = {
  onSubmit: PropTypes.func,
};

Post.defaultProps = {
  onSubmit: null,
};

function Post(props) {
  const { initialValues, isAddMode } = props;

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          grade: Yup.string().required("Required"),
          subject: Yup.string().required("Required"),
          // price: Yup.string().required("Required"),
          // phonenumber: Yup.number().required("Required").nullable(),
          // address: Yup.string().required("Required"),
          // time: Yup.string().required("Required"),
          // descroption: Yup.string().required("Required"),
        })}
      >
        <div
          className="container p-create-class-body region region-content"
          style={{ marginBottom: "20px" }}
        >
          <div className="gform form-article form-product form-nhom-hoc">
            <div className="body-form">
              <div className="row" style={{ margin: 0, paddingTop: "15px" }}>
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
                              Tóm tắt yêu cầu tìm gia sư (1 câu, tối đa 100 ký
                              tự) <span className="class-field-alert">*</span>
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
                                  <option value={"Tiếng anh"}>Tiếng anh</option>
                                  <option value={"Văn"}>Văn</option>
                                  <option value={"Tiếng Việt"}>
                                    Tiếng Việt
                                  </option>
                                  <option value={"Lịch sử"}>Lịch sử</option>
                                  <option value={"Địa lý"}>Địa lý</option>
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
                                Lớp <span className="class-field-alert">*</span>
                              </p>

                              <Field name="grade" as="select">
                                <option value></option>
                                <optgroup label="cấp 1">
                                  <option value={"Lớp 1"}>lớp 1</option>
                                  <option value={"Lớp 2"}>lớp 2</option>
                                  <option value={"Lớp 3"}>lớp 3</option>
                                  <option value={"Lớp 5"}>lớp 5</option>
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
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="class-field-5 class-field">
                              <p className="p-create-class-title">
                                Điện thoại liên hệ{" "}
                                <span className="class-field-alert">*</span>
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
                        </div>

                        {/*address*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="class-field-7 class-field class-address">
                              <p className="p-create-class-title">
                                Địa chỉ cụ thể diễn ra lớp học{" "}
                                <span className="class-field-alert">*</span>
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
                          <div className="col-md-12">
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
                          </div>
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
                                    <label htmlFor="morning-calendar-2" className="lbl-active">
                                      Sáng
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="morning-calendar-2"
                                      type="checkbox"
                                      name="sang_2"
                                      defaultValue="sang_2"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="afternoon-calendar-2">
                                      Chiều
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="afternoon-calendar-2"
                                      type="checkbox"
                                      name="chieu_2"
                                      defaultValue="chieu_2"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="evening-calendar-2">
                                      Tối
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="evening-calendar-2"
                                      type="checkbox"
                                      name="toi_2"
                                      defaultValue="toi_2"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="row-calendar-check">
                                <h4>Thứ 3</h4>
                                <ul>
                                  <li>
                                    <label htmlFor="morning-calendar-3" className="lbl-active">
                                      Sáng
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="morning-calendar-3"
                                      type="checkbox"
                                      name="sang_3"
                                      defaultValue="sang_3"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="afternoon-calendar-3">
                                      Chiều
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="afternoon-calendar-3"
                                      type="checkbox"
                                      name="chieu_3"
                                      defaultValue="chieu_3"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="evening-calendar-3">
                                      Tối
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="evening-calendar-3"
                                      type="checkbox"
                                      name="toi_3"
                                      defaultValue="toi_3"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="row-calendar-check">
                                <h4>Thứ 4</h4>
                                <ul>
                                  <li>
                                    <label htmlFor="morning-calendar-4">
                                      Sáng
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="morning-calendar-4"
                                      type="checkbox"
                                      name="sang_4"
                                      defaultValue="sang_4"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="afternoon-calendar-4">
                                      Chiều
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="afternoon-calendar-4"
                                      type="checkbox"
                                      name="chieu_4"
                                      defaultValue="chieu_4"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="evening-calendar-4">
                                      Tối
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="evening-calendar-4"
                                      type="checkbox"
                                      name="toi_4"
                                      defaultValue="toi_4"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="row-calendar-check">
                                <h4>Thứ 5</h4>
                                <ul>
                                  <li>
                                    <label htmlFor="morning-calendar-5">
                                      Sáng
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="morning-calendar-5"
                                      type="checkbox"
                                      name="sang_5"
                                      defaultValue="sang_5"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="afternoon-calendar-5">
                                      Chiều
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="afternoon-calendar-5"
                                      type="checkbox"
                                      name="chieu_5"
                                      defaultValue="chieu_5"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="evening-calendar-5">
                                      Tối
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="evening-calendar-5"
                                      type="checkbox"
                                      name="toi_5"
                                      defaultValue="toi_5"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="row-calendar-check">
                                <h4>Thứ 6</h4>
                                <ul>
                                  <li>
                                    <label htmlFor="morning-calendar-6">
                                      Sáng
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="morning-calendar-6"
                                      type="checkbox"
                                      name="sang_6"
                                      defaultValue="sang_6"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="afternoon-calendar-6">
                                      Chiều
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="afternoon-calendar-6"
                                      type="checkbox"
                                      name="chieu_6"
                                      defaultValue="chieu_6"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="evening-calendar-6">
                                      Tối
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="evening-calendar-6"
                                      type="checkbox"
                                      name="toi_6"
                                      defaultValue="toi_6"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="row-calendar-check">
                                <h4>Thứ 7</h4>
                                <ul>
                                  <li>
                                    <label htmlFor="morning-calendar-7">
                                      Sáng
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="morning-calendar-7"
                                      type="checkbox"
                                      name="sang_7"
                                      defaultValue="sang_7"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="afternoon-calendar-7">
                                      Chiều
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="afternoon-calendar-7"
                                      type="checkbox"
                                      name="chieu_7"
                                      defaultValue="chieu_7"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="evening-calendar-7">
                                      Tối
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="evening-calendar-7"
                                      type="checkbox"
                                      name="toi_7"
                                      defaultValue="toi_7"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="row-calendar-check">
                                <h4>Chủ nhật</h4>
                                <ul>
                                  <li>
                                    <label htmlFor="morning-calendar-8">
                                      Sáng
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="morning-calendar-8"
                                      type="checkbox"
                                      name="sang_8"
                                      defaultValue="sang_8"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="afternoon-calendar-8">
                                      Chiều
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="afternoon-calendar-8"
                                      type="checkbox"
                                      name="chieu_8"
                                      defaultValue="chieu_8"
                                    />
                                  </li>
                                  <li>
                                    <label htmlFor="evening-calendar-8">
                                      Tối
                                    </label>
                                    <input
                                      className="radio-calendar"
                                      id="evening-calendar-8"
                                      type="checkbox"
                                      name="toi_8"
                                      defaultValue="toi_8"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div style={{ width: "100%", textAlign: "center" }}>
                              <p className="note-calender">
                                Bấm để chọn lịch. <span>Màu xanh</span> là những
                                buổi có thể học.
                              </p>
                            </div>
                          </div>

                          <div
                            className="row"
                            style={{ textAlign: "center", padding: "10px 0" }}
                          >
                            <button
                              type="submit"
                              className="btn-bla-big btn-yellowblacasa"
                            >
                              {isAddMode ? "Đăng yêu cầu" : "Cập nhật"}
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
      </Formik>
    </>
  );
}

export default Post;
