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
          className="container p-create-class-body"
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
                              m tắt yêu cầu tìm gia sư (1 câu, tối đa 100 ký tự){" "}
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
                                  <option value={1}>Toán</option>
                                  <option value={2}>Lý</option>
                                  <option value={3}>Hóa</option>
                                  <option value={4}>Tiếng anh</option>
                                  <option value={5}>Văn</option>
                                  <option value={6}>Tiếng Việt</option>
                                  <option value={7}>Lịch sử</option>
                                  <option value={8}>Địa lý</option>
                                  <option value={9}>Sinh</option>
                                  <option value={10}>Môn phổ thông khác</option>
                                </optgroup>
                              </Field>
                              <ErrorMessage name="subject" />
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
                                  <option value={1}>lớp 1</option>
                                  <option value={2}>lớp 2</option>
                                  <option value={3}>lớp 3</option>
                                  <option value={5}>lớp 5</option>
                                </optgroup>
                              </Field>
                              <ErrorMessage name="grade" />
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
                {/*Cột bên phải*/}
                {/* <div
                  className="col-md-3 hidden-sm hidden-xs"
                  style={{ paddingRight: "0 !important" }}
                >
                  <div className="right-class-new">
                    <div className="right-class-new-top">
                      <i
                        className="fa fa-check-square-o checked-icon"
                        aria-hidden="true"
                      />
                      <div className="right-class-new-top-content">
                        <h4>Tại sao bạn nên tìm gia sư trên Blacasa ?</h4>
                        <p>
                          <i className="fa fa-check" aria-hidden="true" /> Công
                          ty gia sư hơn 20,000 gia sư lớn nhất Việt Nam.
                        </p>
                        <p>
                          <i className="fa fa-check" aria-hidden="true" /> Gia
                          sư được sàng lọc, đào tạo kỹ năng và chuyên môn nghiệp
                          vụ.{" "}
                        </p>
                        <p>
                          <i className="fa fa-check" aria-hidden="true" /> Có
                          chuyên gia tư vấn, định hướng học tập.
                        </p>
                        <p>
                          <i className="fa fa-check" aria-hidden="true" /> Lộ
                          trình học rõ ràng, được thiết kế cho sát với trình độ
                          học viên.
                        </p>
                        <p>
                          <i className="fa fa-check" aria-hidden="true" /> Hỗ
                          trợ nhiệt tình, thân thiện.
                        </p>
                        <p>
                          <i className="fa fa-check" aria-hidden="true" /> Hoàn
                          toàn miễn phí
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/*End cột phải*/}
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
