import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

InforTutor.propTypes = {};

function InforTutor(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { tutorId } = useParams();

  const viewTutor = useSelector((state) => {
    const foundTutor = state.tutors.find((x) => x.id === +tutorId);
    console.log({ turors: state.tutorId, tutorId, foundTutor });
    return foundTutor;
  });
  console.log({ tutorId, viewTutor });

  const tutor = viewTutor;





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
                    'url("https://getdrive.net/wp-content/uploads/2020/03/Mau-background-powerpoint-giao-duc.jpg")',
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
                    <div className="p-user-name" style={{ padding: "10px 0" }}>
                      <span className="p-user-name-text">
                        <a href="">
                          {tutor.name}
                        </a>
                      </span>
                    </div>
                   
                  </div>
                  {/*subjects, cost: only for teacher*/}
                  <div className="headblockSecond">
                    <span className="spanArea mr-15">
                      <i className="fa fa-book" />
                      {"  Mon hoc:"}{tutor.subject}
                    </span>
                  </div>
                  {/*Place, teaching type: only for teacher*/}
                  <div className="headblockSecond">
                    <div className="spanArea mr-15" >
                      <i className="fa fa-map-marker" />
                      {tutor.address}
                    </div>
                    
                  </div>

                  <div className="headblockThird">
                    <div
                      className="wrapBlockInvite"
                      style={{ marginTop: "10px" }}
                    >
                      <a
                        href=""
                        className="ctools-use-modal btnInvite btn btn-md  ctools-use-modal-processed"
                      >
                        Mời dạy
                      </a>
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
                      <h2>THÔNG TIN GIA SƯ</h2>
                    </div>
                    <div
                      className="body-block"
                      style={{
                        display: "block",
                        background: "#fff",
                        padding: "10px",
                      }}
                    >
                      <h3>Giới thiệu chung và kinh nghiệm gia sư, giảng dạy</h3>
                      <p>
                      {tutor.description}
                      </p>
                      <h3>Chủ đề dạy</h3>
                      <ul className="group-tag">
                      <li><p>{tutor.subject}</p></li>
                      </ul>
                      <h3>Gia sư đang là</h3>
                      <div className="kieu-giao-vien">
                        <label>{tutor.qualification} </label>
                      </div>
                      <h3>Lịch dạy gia sư</h3>
                      <div className="kieu-giao-vien">
                        <label>{tutor.time} </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hien thi lớp đã dạy */}
              {/* Lịch dạy */}
              {/* <div id="lich-day">
                <div className="list-categories">
                  <div className="gblock-v2">
                    <div className="header-block">
                      <h2>LỊCH DẠY GIA SƯ</h2>
                    </div>
                    <div className="body-block block-calender">
                      <div className="row-calendar">
                        <h3>Thứ 2</h3>
                        <ul>
                          <li className="calendar-normal">SÁNG</li>
                          <li className="calendar-active">CHIỀU</li>
                          <li className="calendar-active">TỐI</li>
                        </ul>
                      </div>
                      <div className="row-calendar">
                        <h3>Thứ 3</h3>
                        <ul>
                          <li className="calendar-normal">SÁNG</li>
                          <li className="calendar-active">CHIỀU</li>
                          <li className="calendar-active">TỐI</li>
                        </ul>
                      </div>
                      <div className="row-calendar">
                        <h3>Thứ 4</h3>
                        <ul>
                          <li className="calendar-normal">SÁNG</li>
                          <li className="calendar-active">CHIỀU</li>
                          <li className="calendar-active">TỐI</li>
                        </ul>
                      </div>
                      <div className="row-calendar">
                        <h3>Thứ 5</h3>
                        <ul>
                          <li className="calendar-normal">SÁNG</li>
                          <li className="calendar-active">CHIỀU</li>
                          <li className="calendar-active">TỐI</li>
                        </ul>
                      </div>
                      <div className="row-calendar">
                        <h3>Thứ 6</h3>
                        <ul>
                          <li className="calendar-normal">SÁNG</li>
                          <li className="calendar-active">CHIỀU</li>
                          <li className="calendar-active">TỐI</li>
                        </ul>
                      </div>
                      <div className="row-calendar">
                        <h3>Thứ 7</h3>
                        <ul>
                          <li className="calendar-active">SÁNG</li>
                          <li className="calendar-normal">CHIỀU</li>
                          <li className="calendar-active">TỐI</li>
                        </ul>
                      </div>
                      <div className="row-calendar">
                        <h3>Chủ nhật</h3>
                        <ul>
                          <li className="calendar-active">SÁNG</li>
                          <li className="calendar-active">CHIỀU</li>
                          <li className="calendar-active">TỐI</li>
                        </ul>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div> */}
              
            
          
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}

export default InforTutor;
