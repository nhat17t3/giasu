import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "reactstrap";

InforPost.propTypes = {};

function InforPost(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();
  const editedPost = useSelector((state) => {
    const foundPost = state.posts.posts.find((x) => x.id === +postId);
    // console.log({ posts: state.posts, postId, foundPost });
    return foundPost;
  });
  console.log({ postId, editedPost });
  const postview = editedPost;

  return (
    <>
      <Layout>
        <section className="header-study-group bg-gradient-blue">
          <div className="container">
            <div className="row">
              <h1>
                <i
                  className="fa fa-check-circle"
                  aria-hidden="true"
                  style={{
                    fontSize: "24px",
                    color: "#03ad03",
                    marginRight: "2px",
                  }}
                  title="Đã xác thực thông tin"
                ></i>
                {postview.title}
              </h1>
              <p className="name inline" style={{ paddingRight: "20px" }}>
                <i className="fa fa-user-o" />{" "}
                <a href="/blacasa-cskh-02">
                  {" "}
                  id khach hang {postview.idcustomer}
                </a>{" "}
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
                style={{ padding: "15px 0", borderTop: "1px solid #e7e7e7" }}
              >
                <div className="col-md-4 col-sm-4">
                  <p className="no-padding">
                    <i className="fa fa-bookmark" /> Trạng thái:{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#ff961e",
                        textTransform: "uppercase",
                      }}
                    >
                      Đang tìm giáo viên
                    </span>
                  </p>
                  <p>
                    <i className="" /> Môn:{" "}
                    <span className="class-tutor-fee">{postview.subject} </span>
                  </p>
                  <p>
                    <i className="" /> Lớp:{" "}
                    <span className="class-tutor-fee">{postview.grade} </span>
                  </p>
                  {/* <p>
                    <i className="fa fa-briefcase" /> Hình thức học: Offline
                    (Gia sư)
                  </p> */}
                  <p>
                    <i className="" /> Địa chỉ:{" "}
                    <span className="class-tutor-fee">{postview.address} </span>
                  </p>
                </div>
                <div className="col-md-4 col-sm-4">
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
                    <i className="fa fa-money" /> Học phí 1 buổi:{" "}
                    <span className="class-tutor-fee">
                      {postview.price} VND
                    </span>
                  </p>
                  <p>
                    <i className="" /> Số điện thoại liên hệ:{" "}
                    <span className="class-tutor-fee">
                      {postview.phonenumber}{" "}
                    </span>
                  </p>
                  <p>
                    <i className="" /> Lịch có thể học:{" "}
                    <span className="class-tutor-fee">{postview.time} </span>
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
        </section>

        <section className="study-group-sec-main-content">
          <div className="container">
            <div className="row group-study-detail">
              <div className="gblock-v2 detail-content">
                <div className="text">
                  <h4>
                    <i className="fa fa-quote-right" aria-hidden="true" /> Chi
                    tiết nội dung cần học
                  </h4>
                  {postview.description}
                </div>

                {/*Lịch có thể học*/}
                {/* <div className="calender">
                  <div className="list-categories">
                    <div className="gblock-v2">
                      <h3>
                        <i className="fa fa-calendar" aria-hidden="true" /> Lịch
                        học dự kiến (có thể thỏa thuận)
                      </h3>
                      <div className="body-block block-calender">
                        <div className="row-calendar">
                          <h3>Thứ 2</h3>
                          <ul>
                            <li className="calendar-normal">Sáng</li>
                            <li className="calendar-normal">Chiều</li>
                            <li className="calendar-normal">Tối</li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 3</h3>
                          <ul>
                            <li className="calendar-normal">Sáng</li>
                            <li className="calendar-normal">Chiều</li>
                            <li className="calendar-active">Tối</li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 4</h3>
                          <ul>
                            <li className="calendar-normal">Sáng</li>
                            <li className="calendar-normal">Chiều</li>
                            <li className="calendar-normal">Tối</li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 5</h3>
                          <ul>
                            <li className="calendar-normal">Sáng</li>
                            <li className="calendar-normal">Chiều</li>
                            <li className="calendar-active">Tối</li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 6</h3>
                          <ul>
                            <li className="calendar-normal">Sáng</li>
                            <li className="calendar-normal">Chiều</li>
                            <li className="calendar-normal">Tối</li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>Thứ 7</h3>
                          <ul>
                            <li className="calendar-normal">Sáng</li>
                            <li className="calendar-normal">Chiều</li>
                            <li className="calendar-normal">Tối</li>
                          </ul>
                        </div>
                        <div className="row-calendar">
                          <h3>CN</h3>
                          <ul>
                            <li className="calendar-normal">Sáng</li>
                            <li className="calendar-normal">Chiều</li>
                            <li className="calendar-normal">Tối</li>
                          </ul>
                        </div>{" "}
                      </div>
                      <div className="page-studygroup-detail-notes">
                        <p>Màu xanh là những buổi có thể học trong tuần</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>{" "}
          {/*page container*/}
        </section>
        <div style={{ marginBottom: "200px" }}></div>
      </Layout>
    </>
  );
}

export default InforPost;
