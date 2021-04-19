import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { GetPosts } from "../../../api/postsApi";
import { useEffect } from "react";

InforPost.propTypes = {};

function InforPost(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();

  useEffect(() => {
    GetPosts(dispatch);
  }, []);

  const editedPost = useSelector((state) => {
    const foundPost = state.posts.posts.find((x) => x.id === +postId);
    // console.log({ posts: state.posts, postId, foundPost });
    return foundPost;
  });

  const v = useSelector((state) => state.posts.posts);
  if (v.length == 0) return null;
  // console.log({ postId, editedPost });
  const postview = editedPost;
  console.log("vieeeepost",postview)

  return (
    <>
      <Layout>
        <div className=" bg-gradient-blue">
          <div className="container">
            <div className="row">
              <h1>
                <i
                  className="fa fa-check-circle"
                  aria-hidden="true"
                  style={{
                    fontSize: "26px",
                    color: "#03ad03",
                    marginRight: "2px",
                  }}
                  title="Đã xác thực thông tin"
                ></i>
                <span style={{ textTransform: "uppercase", fontSize: "24px" }}>
                  {postview.title}
                </span>
              </h1>
              <p
                className="name inline"
                style={{
                  paddingRight: "20px",
                  color: "green",
                  fontSize: "18px",
                }}
              >
                <i className="fa fa-user-o" />{" "}
                <span> id khach hang {postview.idcustomer}</span>{" "}
              </p>
              {/* <p className="create inline" style={{ paddingRight: "20px" }}>
                <i className="fa fa-calendar" /> 24.03.2021 - 11:28{" "}
              </p> */}
              {/* <p className="name inline">
                Mã số lớp: <strong>7468</strong>
              </p> */}
              {/*Kiểu lớp: Tìm GIA SƯ*/}
              <div
                className="row"
                style={{
                  padding: "15px 0",
                  borderTop: "1px solid #e7e7e7",
                  fontSize: "16px",
                  fontWeight: "revert",
                }}
              >
                <div className="col-md-6 col-sm-6">
                  <p className="no-padding">
                    <i className="" /> Trạng thái:{" "}
                    <span>Đang tìm giáo viên</span>
                  </p>
                  <p>
                    <i className="" /> Môn: <span>{postview.subject} </span>
                  </p>
                  <p>
                    <i className="" /> Lớp: <span>{postview.grade} </span>
                  </p>
                  {/* <p>
                    <i className="fa fa-briefcase" /> Hình thức học: Offline
                    (Gia sư)
                  </p> */}
                  <p>
                    <i className="" /> Địa chỉ: <span>{postview.address} </span>
                  </p>
                </div>
                <div className="col-md-6 col-sm-6">
                  {/* <p>
                    <i className="fa fa-venus-mars" /> Tìm gia sư: Nam, Nữ{" "}
                  </p>
                  <p>
                    <i className="fa fa-user-o" />
                    Số học viên : 1{" "}
                  </p>
                  <p>
                    <i className="fa fa-book" />
                    Thời lượng: Tuần 2 buổi (2h/buổi)
                  </p> */}
                  <p>
                    <i className="" /> Học phí 1 buổi:{" "}
                    <span>{postview.price} VND</span>
                  </p>
                  <p>
                    <i className="" /> Số điện thoại liên hệ:{" "}
                    <span>{postview.phonenumber} </span>
                  </p>
                  <p>
                    <i className="" /> Lịch có thể học:{" "}
                    <span>{postview.time} </span>
                  </p>
                </div>
                {/* <div className="col-md-4 col-sm-4">
                  <div className="header-study-group-right">
                    <p>
                      Phí nhận lớp:
                      <span className="connection-fee"> 308,000 vnđ</span>
                    </p>
                    (<strong style={{ color: "#FF961E" }}>Trả phí sau </strong>{" "}
                    <a href="/chinh-sach-phi" target="_blank">
                      <i className="fa fa-exclamation-circle fa-first" />
                    </a>
                    )
                    <p style={{ marginTop: "10px" }}>
                      Chưa có đề nghị dạy nào!
                    </p>
                    <div className="class-actions">
                      <a
                        href="/lop-hoc-user/7468/dang-ky-day"
                        className="btn-blueblacasa btn ctools-use-modal ctools-use-modal-processed"
                      >
                        Đề Nghị Dạy
                      </a>{" "}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="study-group-sec-main-content">
          <div className="container">
            <div className="row group-study-detail">
              <div className="gblock-v2 detail-content">
                <div
                  style={{
                    padding: "15px 0",
                    borderTop: "1px solid #e7e7e7",
                    fontSize: "16px",
                    fontWeight: "revert",
                  }}
                >
                  <h4>
                    <i className="fa fa-quote-right" aria-hidden="true" /> CHI
                    TIẾT NỘI DUNG CẦN HỌC
                  </h4>
                  {postview.description}
                </div>
                {/*Lịch có thể học*/}
                <div className="calender">
                  <div className="list-categories">
                    <div className="gblock-v2">
                      <h4>
                        <i className="fa fa-calendar" aria-hidden="true" /> LỊCH
                        HỌC DỰ KIẾN
                      </h4>
                      <div className="body-block block-calender">
                        <div className="row-calendar">
                          <h3>Thứ 2</h3>
                          <ul>
                            <li
                              className={
                                postview.schedule.sang_2 ? "calendar-active" : ""
                              }
                            >
                              Sáng
                            </li>

                            <li
                              className={
                                postview.schedule.chieu_2 ? "calendar-active" : ""
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                postview.schedule.toi_2 ? "calendar-active" : ""
                              }
                            >
                              Tối
                            </li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 3</h3>
                          <ul>
                            <li
                              className={
                                postview.schedule.sang_3 ? "calendar-active" : ""
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                postview.schedule.chieu_3 ? "calendar-active" : ""
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                postview.schedule.toi_3 ? "calendar-active" : ""
                              }
                            >
                              Tối
                            </li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 4</h3>
                          <ul>
                            <li
                              className={
                                postview.schedule.sang_4 ? "calendar-active" : ""
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                postview.schedule.chieu_4 ? "calendar-active" : ""
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                postview.schedule.toi_4 ? "calendar-active" : ""
                              }
                            >
                              Tối
                            </li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 5</h3>
                          <ul>
                            <li
                              className={
                                postview.schedule.sang_5 ? "calendar-active" : ""
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                postview.schedule.chieu_5 ? "calendar-active" : ""
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                postview.schedule.toi_5 ? "calendar-active" : ""
                              }
                            >
                              Tối
                            </li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 6</h3>
                          <ul>
                            <li
                              className={
                                postview.schedule.sang_6 ? "calendar-active" : ""
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                postview.schedule.chieu_6 ? "calendar-active" : ""
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                postview.schedule.toi_6 ? "calendar-active" : ""
                              }
                            >
                              Tối
                            </li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 7</h3>
                          <ul>
                            <li
                              className={
                                postview.schedule.sang_7 ? "calendar-active" : ""
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                postview.schedule.chieu_7 ? "calendar-active" : ""
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                postview.schedule.toi_7 ? "calendar-active" : ""
                              }
                            >
                              Tối
                            </li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>CN</h3>
                          <ul>
                            <li
                              className={
                                postview.schedule.sang_8 ? "calendar-active" : ""
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                postview.schedule.chieu_8 ? "calendar-active" : ""
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                postview.schedule.toi_8 ? "calendar-active" : ""
                              }
                            >
                              Tối
                            </li>
                          </ul>
                        </div>{" "}
                      </div>
                      <div className="page-studygroup-detail-notes">
                        <p>Màu xanh là những buổi có thể học trong tuần</p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                */
              </div>
            </div>
          </div>{" "}
          {/*page container*/}
        </div>
        {/* <div style={{ marginBottom: "200px" }}></div> */}
      </Layout>
    </>
  );
}

export default InforPost;
