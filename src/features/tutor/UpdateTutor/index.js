import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

UpdateTutor.propTypes = {};

function UpdateTutor(props) {
  return (
    <>
      <Layout>
        <Formik
          // initialValues={initialValues}
          // onSubmit={props.onSubmit}
          validationSchema={Yup.object({
            avartar: Yup.string().required("Required"),
            grade: Yup.string().required("Required"),
            subject: Yup.string().required("Required"),
            name: Yup.string().required("Required"),
            // price: Yup.string().required("Required"),
            // phonenumber: Yup.number().required("Required").nullable(),
            // address: Yup.string().required("Required"),
            // time: Yup.string().required("Required"),
            // description: Yup.string().required("Required"),
            // qualification: Yup.string().required("Required"),
          })}
        >
          <div
            className=" user-manage"
            style={{ paddingLeft: "100px", paddingRight: "100px" }}
          >
            <div className="row">
              {/*Menu trái*/}
              <div className="col-md-3  custom-w-left navbar-profile-left">
                <div
                  className="nav-profile detail-nav w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left "
                  id="mySidebar"
                >
                  <button
                    className="w3-bar-item w3-button w3-large w3-hide-large"
                    onclick="w3_close()"
                    style={{ marginLeft: 0, border: "none" }}
                  >
                    Close ×
                  </button>
                  <ul id="accordion" className="accordion">
                    <li className>
                      <div className="link">
                        <i
                          className="fa fa-graduation-cap"
                          aria-hidden="true"
                        />
                        Quản lý yêu cầu
                        <i className="fa fa-chevron-down" />
                      </div>
                      <ul className="submenu" style={{}}>
                        <li className="active">
                          <a href="/hoang-long-nhat/class">
                            Tất cả lớp đã đăng
                          </a>
                        </li>
                        {/*<li class=""></li>*/}
                        <li className>
                          <a href="/tao-lop-hoc" className="active">
                            Đăng yêu cầu tìm gia sư mới
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className>
                      <div className="link">
                        <i className="fa fa-comments" />
                        <a href="/hoang-long-nhat/messages">
                          Hội thoại và tin nhắn
                        </a>
                      </div>
                    </li>
                    <li className>
                      <div className="link">
                        <i className="fa fa-bell" aria-hidden="true" />
                        Thông báo
                        <i className="fa fa-chevron-down" />
                      </div>
                      <ul className="submenu" style={{}}>
                        <li className="active">
                          <a href="/hoang-long-nhat/notifications">Tất cả</a>
                        </li>
                      </ul>
                    </li>
                    <li className>
                      <div className="link">
                        <i className="fa fa-pencil-square" aria-hidden="true" />
                        Bài viết
                        <i className="fa fa-chevron-down" />
                      </div>
                      <ul className="submenu" style={{ display: "none" }}>
                        <li className="active">
                          <a href="/hoang-long-nhat/bai-viet">Đã đăng</a>
                        </li>
                        <li className>
                          <a href="/hoang-long-nhat/bai-viet?c=editing">
                            Đang soạn
                          </a>
                        </li>
                        <li className>
                          <a href="/hoang-long-nhat/bai-viet?c=sent">Đã gửi</a>
                        </li>
                      </ul>
                    </li>
                    <li className>
                      <div className="link">
                        <i className="fa fa-heart-saved" />
                        Đã lưu
                        <i className="fa fa-chevron-down" />
                      </div>
                      <ul className="submenu" style={{}}>
                        <li className>
                          <a href="/hoang-long-nhat/object-saved?c=classes">
                            Yêu cầu tìm giáo viên
                          </a>
                        </li>
                        <li className>
                          <a href="/hoang-long-nhat/object-saved?c=teacher">
                            Giáo viên
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className>
                      <div className="link">
                        <i className="fa fa-btc" />
                        <a href="/hoang-long-nhat/bpoint">Quản lý BPoint</a>
                      </div>
                    </li>
                    <li className>
                      <div className="link">
                        <i className="fa fa-flag" aria-hidden="true" />
                        Thông tin cá nhân
                        <i className="fa fa-chevron-down" />
                      </div>
                      <ul className="submenu" style={{ display: "none" }}>
                        <li className="active">
                          <a href="/hoang-long-nhat/account" className="active">
                            Sửa thông tin cá nhân
                          </a>
                        </li>
                        <li>
                          <a href="/hoang-long-nhat/settings">
                            Thay đổi email, mật khẩu
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-9 custom-w-right"
                id="ajax-content-user-load"
                style={{ padding: 0 }}
              >
                <div id="ajax-user-load-page">
                  <button
                    className="w3-button w3-teal w3-xlarge w3-hide-large"
                    onclick="w3_open()"
                  >
                    ☰
                  </button>

                  <div className="region region-content">
                    <div id="block-system-main" className="block block-system">
                      <div className="content">
                        <div id="thong-tin-chung">
                          <div className="list-categories">
                            <div className="gblock-v2">
                              <div className="header-block">
                                <span>Hồ sơ giáo viên</span>
                              </div>
                              {/*alert*/}
                              <div className="body-block">
                                {/*Part 1: thông tin cá nhân*/}
                                <Form action="" method="post">
                                  <div
                                    className="row info-step-5 info-step"
                                    style={{
                                      borderTop: "10px solid #f7f7f7",
                                      margin: "20px -5px 0 -5px",
                                    }}
                                  >
                                    <h3>Ảnh xác nhận thông tin gia sư</h3>
                                    <div className="verifired-img">
                                      <div className="col-md-4">
                                        <div className="row">
                                          <div className="col-md-12">
                                            <label className="title-update">
                                              ẢNH ĐẠI DIỆN (PHẢI RÕ MẶT, CHỤP
                                              MỘT MÌNH){" "}
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
                                  </div>
                                  <div className="row info-step-1 info-step">
                                    <h3>Thông tin cá nhân</h3>
                                    <div className="col-md-6">
                                      <label>
                                        HỌ TÊN ĐẦY ĐỦ{" "}
                                        <span className="teacher-alert">*</span>
                                      </label>
                                      <Field
                                        name="name"
                                        type="text"
                                        placeholder="Họ và tên"
                                      />
                                      <div style={{ color: "red" }}>
                                        <ErrorMessage name="name" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label>
                                        ĐIỆN THOẠI{" "}
                                        <span className="teacher-alert">*</span>{" "}
                                      </label>
                                      <Field
                                        name="phonenumber"
                                        type="text"
                                        placeholder=""
                                      />
                                      <div style={{ color: "red" }}>
                                        <ErrorMessage name="phonenumber" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label>
                                        ĐỊA CHỈ CỤ THỂ{" "}
                                        <span className="teacher-alert">*</span>{" "}
                                      </label>
                                      <Field
                                        name="address"
                                        type="text"
                                        placeholder=" nhập địa chỉ"
                                      />
                                      <div style={{ color: "red" }}>
                                        <ErrorMessage name="address" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label>
                                        Giá{" "}
                                        <span className="teacher-alert">*</span>{" "}
                                      </label>
                                      <Field
                                        name="price"
                                        type="text"
                                        placeholder=" nhập địa chỉ"
                                      />
                                      <div style={{ color: "red" }}>
                                        <ErrorMessage name="price" />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <label>
                                        Môn{" "}
                                        <span className="teacher-alert">*</span>{" "}
                                      </label>
                                      <Field name="subject" as="select">
                                        <option value disabled selected>
                                          chọn môn
                                        </option>
                                        <optgroup label="Địa điểm phổ biến">
                                          <option value={1}>Hà Nội</option>
                                          <option value={2}>Hồ Chí Minh</option>
                                          <option value={10}>Hải Phòng</option>
                                          <option value={3}>Đà Nẵng</option>
                                          <option value={11}>Cần Thơ</option>
                                        </optgroup>
                                      </Field>
                                    </div>
                                    <div className="col-md-6">
                                      <label>
                                        Lớp{" "}
                                        <span className="teacher-alert">*</span>{" "}
                                      </label>
                                      <Field name="grade" as="select">
                                        <option value disabled selected>
                                          chọn lớp
                                        </option>
                                        <optgroup label="Địa điểm phổ biến">
                                          <option value={1}>Hà Nội</option>
                                          <option value={2}>Hồ Chí Minh</option>
                                          <option value={10}>Hải Phòng</option>
                                          <option value={3}>Đà Nẵng</option>
                                          <option value={11}>Cần Thơ</option>
                                        </optgroup>
                                      </Field>
                                    </div>
                                    <div className="col-md-6">
                                      <label>
                                        Chức vụ{" "}
                                        <span className="teacher-alert">*</span>{" "}
                                      </label>
                                      <Field name="qualification" as="select">
                                        <option selected disabled value>
                                          bạn là ?
                                        </option>
                                        <option value={1}>Sinh viên</option>
                                        <option value={3}>Giáo viên</option>
                                        <option value={9}>
                                          Người nước ngoài
                                        </option>
                                        <option value={2}>Người đi làm</option>
                                        <option value={8}>Chuyên gia</option>
                                        <option value={0}>Học sinh</option>
                                      </Field>
                                    </div>
                                    <div className="col-md-6">
                                      <label>
                                        Time{" "}
                                        <span className="teacher-alert">*</span>{" "}
                                      </label>
                                      <Field
                                        name="time"
                                        type="text"
                                        placeholder="nhập thời gian có thể dạy"
                                      />
                                      <div style={{ color: "red" }}>
                                        <ErrorMessage name="time" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row info-step-3 info-step">
                                    <div className="col-md-12">
                                      <label>
                                        MÔ TẢ BẢN THÂN, KINH NGHIỆM &amp; BẰNG
                                        CẤP{" "}
                                        <span className="teacher-alert">*</span>
                                      </label>
                                      <br />
                                      <i>
                                        (Bạn cần ghi đầy đủ ưu điểm của bản thân
                                        để được nhận lớp trong thời gian sớm
                                        nhất, )
                                      </i>

                                      <Field
                                        style={{ marginTop: "20px" }}
                                        id="introduce-class"
                                        name="description"
                                        as="textarea"
                                        placeholder="Mô tả bản thân, bằng cấp và kinh nghiệm của bạn (nên dài hơn 150 chữ cái)... "
                                      />
                                    </div>
                                  </div>
                                  <div className="action-form">
                                    <button
                                      type="submit"
                                      className="btn-bla-big btn-yellowblacasa"
                                    >
                                     Cập nhật
                                    </button>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Formik>
      </Layout>
    </>
  );
}

export default UpdateTutor;
