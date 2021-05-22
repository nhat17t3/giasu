import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetTutors } from "../../../api/tutorsApi";
import { NewInvitation } from "../../../api/invitationsApi";
import { number } from "yup";
import ListComment from "../../comment/ListComment";
import AddComment from "../../comment/AddComment";

InforTutor.propTypes = {};

function InforTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { tutorId } = useParams();
  const [disbutton, setDisbutton] = useState(false);
  // const { roles } = useSelector((state) => state.user.user);
  const role = localStorage.getItem('role')

  useEffect(() => {
    GetTutors(dispatch);
  }, []);

  const viewTutor1 = useSelector((state) => {
    const foundTutor = state.tutors.tutors.find((x) => x.id === +tutorId);
    return foundTutor;
  });

  const idcustomer = useSelector((state) => state.user.user.id);

  const tutor = viewTutor1;
  console.log("tutorview", tutor);

  const v = useSelector((state) => state.tutors.tutors);
  if (v.length == 0) return null;

  return (
    <>
      <Layout>
        <div id="wrapHeadBlock">
          <div className="container">
            <div className>
              {/*Ảnh cover*/}
              <section className="profile-cover">
                <div
                  className="cover"
                  style={{
                    backgroundImage:
                      'url("https://triggerm.digital/wp-content/uploads/sites/2/2020/10/marketing-nganh-giao-duc-4.png")',
                  }}
                >
                  {/*<img id="show-cover" src=""> */}
                </div>
              </section>
              <section className="infor-main">
                <div
                  className="infor-main-inner"
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {/*Ảnh avatar & Feedback, Bpoint*/}
                  <div
                    className="col-md-2 col-sm-4 custom-w-left"
                    style={{ paddingLeft: "15px" }}
                  >
                    <div className="real-w">
                      <div className="avatar ">
                        <div className="popup-gallery">
                          <a href="">
                            <img
                              id="show-avatar"
                              typeof="foaf:Image"
                              src={tutor.avatar}
                              width={176}
                              height={176}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="point wRole">
                        <div
                          className="icon"
                          style={{ backgroundColor: "#03ad03" }}
                          title="Đã xác nhận hồ sơ"
                        >
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ fontSize: "18px", paddingTop: "5px" }}
                          />
                        </div>
                        <span>
                          ID Gia Sư: <b>{tutor.id}</b>
                        </span>
                      </div>
                      <div className="point wVote mb-5"></div>
                    </div>
                  </div>
                  {/*Right block*/}
                  <div className="custom-w-right col-md-10">
                    {/*Button feedback, favorite*/}
                    <div className="headblockTop">
                      <div
                        className="p-user-name"
                        style={{ padding: "10px 0" }}
                      >
                        <span className="p-user-name-text">
                          <a href="">{tutor.name}</a>
                        </span>
                      </div>
                    </div>
                    {/*subjects, cost: only for teacher*/}
                    <div className="headblockSecond">
                      <span className="spanArea mr-15">
                        <i className="" />
                        {"  Môn học:"} {tutor.subjects[0]}
                      </span>
                      <span className="spanArea mr-15">
                        <i className="" />
                        {"  Lớp:"} {tutor.grades[0]}
                      </span>
                    </div>
                    {/*Place, teaching type: only for teacher*/}
                    <div className="headblockSecond">
                      <div className="spanArea mr-15">
                        <i className="fa fa-map-marker" />
                        {" Địa chỉ:"} {tutor.address}
                      </div>
                    </div>

                    <div className="headblockThird">
                      <div
                        className="wrapBlockInvite"
                        style={{ marginTop: "10px" }}
                      >
                        {role == "ROLE_STUDENT" ? (
                        <button
                          className="ctools-use-modal btnInvite btn btn-md  ctools-use-modal-processed"
                          disabled={disbutton}
                          onClick={(tutor) => {
                            const invite = {
                              // idcustomer,
                              idTutor: Number(tutorId),
                              // status: 0,
                            };
                            // alert(JSON.stringify(invite));
                            NewInvitation(dispatch, invite);
                            setDisbutton(true);
                          }}
                        >
                          Mời dạy
                        </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <section className="profile">
          {/*Nam's code */}
          <div className="container">
            {/*Body content: right side*/}
            <div className="custom-w-right">
              <div className="tab-content tab-content-profile">
                {/* thong tin chung */}
                <div
                  id="thong-tin-chung"
                  style={{ background: "unset", paddingBottom: "unset" }}
                >
                  <div className="list-categories" style={{ width: "100%" }}>
                    <div className="gblock-v2">
                      <div className="header-block">
                        <h3>THÔNG TIN GIA SƯ</h3>
                      </div>
                      <div
                        className="body-block"
                        style={{
                          display: "block",
                          background: "#fff",
                          padding: "10px",
                        }}
                      >
                        <h3>
                          Giới thiệu chung và kinh nghiệm gia sư, giảng dạy
                        </h3>
                        <p>{tutor.description}</p>
                        <h3>Liên hệ</h3>
                        <ul className="group-tag">
                          <li>
                            <p>{tutor.phonenumber}</p>
                          </li>
                        </ul>
                        <h3>Gia sư đang là</h3>
                        <div className="kieu-giao-vien">
                          <label>{tutor.qualification} </label>
                        </div>
                        {/* <h3>Lịch dạy gia sư</h3>
                      <div className="kieu-giao-vien">
                        <label>{tutor.time} </label>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hien thi lớp đã dạy */}
                {/* Lịch dạy */}
                <div id="lich-day">
                  <div className="list-categories">
                    <div className="gblock-v2">
                      <div className="">
                        <h4>LỊCH DẠY GIA SƯ</h4>
                      </div>
                      <div className="body-block block-calender">
                        <div className="row-calendar">
                          <h3>Thứ 2</h3>
                          <ul>
                            <li
                              className={
                                tutor.schedules.sang_2
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Sáng
                            </li>

                            <li
                              className={
                                tutor.schedules.chieu_2
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                tutor.schedules.toi_2
                                  ? "calendar-active"
                                  : "calendar-normal"
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
                                tutor.schedules.sang_3
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                tutor.schedules.chieu_3
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                tutor.schedules.toi_3
                                  ? "calendar-active"
                                  : "calendar-normal"
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
                                tutor.schedules.sang_4
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                tutor.schedules.chieu_4
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                tutor.toi_4
                                  ? "calendar-active"
                                  : "calendar-normal"
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
                                tutor.schedules.sang_5
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                tutor.schedules.chieu_5
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                tutor.schedules.toi_5
                                  ? "calendar-active"
                                  : "calendar-normal"
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
                                tutor.schedules.sang_6
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                tutor.schedules.chieu_6
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                tutor.schedules.toi_6
                                  ? "calendar-active"
                                  : "calendar-normal"
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
                                tutor.schedules.sang_7
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                tutor.schedules.chieu_7
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                tutor.schedules.toi_7
                                  ? "calendar-active"
                                  : "calendar-normal"
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
                                tutor.schedules.sang_8
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Sáng
                            </li>
                            <li
                              className={
                                tutor.schedules.chieu_8
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Chiều
                            </li>
                            <li
                              className={
                                tutor.schedules.toi_8
                                  ? "calendar-active"
                                  : "calendar-normal"
                              }
                            >
                              Tối
                            </li>
                          </ul>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                {role == "ROLE_STUDENT" ? (
                  <div className="list-categories">
                    <div className="gblock-v2">
                      <div className="">
                        <h4>Bình Luận</h4>
                      </div>
                      <AddComment IDTUTOR={tutorId} />
                    </div>
                  </div>
                ) : null}

                <h4>Danh sách bình luận</h4>
                <div>
                  <div className="list-categories" style={{ width: "100%" }}>
                    <div className="gblock-v2">
                      <div
                        className="body-block"
                        style={{
                          display: "block",
                          background: "#fff",
                          padding: "10px",
                        }}
                      >
                        <ListComment IDTUTOR={tutorId} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default InforTutor;
