import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import TutorItem from "./TutorItem";
import { ToastContainer } from "react-toastify";
import { GetTutors } from "../../../api/tutorsApi";
import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination";

ListTutor.propTypes = {};

function ListTutor(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [subject, setSubject] = useState("All");
  const [grade, setGrade] = useState("All");
  const [address, setAddress] = useState("All");
  const [listtutor, setListtutor] = useState([]);

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    GetTutors(dispatch);
  }, []);

  const tutors = useSelector((state) => state.tutors.tutors);

  useEffect(() => {
    setListtutor(tutors);
  }, [tutors]);

  // Get current tutors
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTutors = listtutor.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const checkfilter = (subject, grade, address, tutor) => {
    let checka = false;
    let checkb = false;
    let checkc = false;
    if (subject == "All") checka = true;
    else checka = tutor.subject === subject;
    if (grade == "All") checkb = true;
    else checkb = tutor.grade === grade;
    if (address == "All") checkc = true;
    else checkc = tutor.address.toLowerCase().includes(address.toLowerCase());
    return checka && checkb && checkc;
  };

  const handlefillter = (e) => {
    console.log(subject, grade, address);

    const listfillter = tutors.filter((tutor) =>
      checkfilter(subject, grade, address, tutor)
    );
    console.log(listfillter);
    setListtutor(listfillter);
  };

  const handleViewClick = (tutor) => {
    // console.log("xem: ", tutor);
    const ViewUrl = `/tutorview/${tutor.id}`;
    history.push(ViewUrl);
  };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = tutors.filter(
  //     (tutor) =>
  //       tutor.subject === subject &&
  //       tutor.grade === grade &&
  //       tutor.address.toLowerCase().includes(address.toLowerCase())
  //   );
  //   console.log(listfillter);
  //   setListtutor(listfillter);
  // };

  return (
    <>
      <Layout>
        <ToastContainer />
        <section className="home-category">
          <div className="container" style={{ paddingTop: "10px" }}>
            <div className="region region-content">
              <div id="block-system-main" className="block block-system">
                <div className="content">
                  <div className="main-wrapper">
                    <div className="view view-users view-id-users view-display-id-page_2 col-popover view-dom-id-b046246a230e0acb397239e119f93361">
                      <div className="content-category fixed">
                        <div className="view-user-page2-view-header">
                          <span>Danh sách gia sư</span>
                        </div>
                        {/*filter*/}
                        <div
                          className="bg-gradient-pink"
                          style={{ padding: "0 10px" }}
                        >
                          <div className="view-filters box-search">
                            <div
                            // action=""
                            // method="get"
                            // id="views-exposed-form-users-page-2"
                            // acceptCharset="UTF-8"
                            >
                              <div>
                                <div className="views-exposed-form">
                                  <div className="views-exposed-widgets clearfix">
                                    <div
                                      id="edit-place-wrapper"
                                      className="views-exposed-widget views-widget-filter-field_place_tid"
                                    >
                                      <div className="views-widget">
                                        <div className="form-item form-type-select form-item-place">
                                          <select
                                            id="edit-place"
                                            name="place"
                                            className="form-select"
                                            onChange={(e) =>
                                              setAddress(e.target.value)
                                            }
                                          >
                                            <option
                                              value="All"
                                              selected="selected"
                                              defaultValue="All"
                                            >
                                              - Chọn địa điểm -
                                            </option>
                                            <optgroup label="Địa điểm phổ biến">
                                              <option value={"Hà Nội"}>
                                                Hà Nội
                                              </option>
                                              <option value={"Nghệ An"}>
                                                Nghệ An
                                              </option>
                                              {/* <option value={2}>
                                                Hồ Chí Minh
                                              </option>
                                              <option value={10}>
                                                Hải Phòng
                                              </option>
                                              <option value={3}>Đà Nẵng</option>
                                              <option value={11}>
                                                Cần Thơ
                                              </option> */}
                                            </optgroup>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id="edit-subject-wrapper"
                                      className="views-exposed-widget views-widget-filter-field_subject_tid"
                                    >
                                      <div className="views-widget">
                                        <div className="form-item form-type-select form-item-subject">
                                          <select
                                            id="edit-subject"
                                            name="subject"
                                            className="form-select"
                                            onChange={(e) =>
                                              setSubject(e.target.value)
                                            }
                                          >
                                            <option
                                              value="All"
                                              selected="selected"
                                            >
                                              - Chọn môn học -
                                            </option>
                                            <optgroup label="Môn học phổ thông">
                                              <option value={"Toán"}>
                                                Toán
                                              </option>
                                              <option value={"Lý"}>Lý</option>
                                              <option value={"Hóa"}>Hóa</option>
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
                                              <option value={"Sinh"}>
                                                Sinh
                                              </option>
                                              <option
                                                value={"Môn phổ thông khác"}
                                              >
                                                Môn phổ thông khác
                                              </option>
                                            </optgroup>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id="edit-topic-wrapper"
                                      className="views-exposed-widget views-widget-filter-field_study_topic_tid"
                                    >
                                      <div className="views-widget">
                                        <div className="form-item form-type-select form-item-topic">
                                          <select
                                            id="edit-topic"
                                            name="grade"
                                            className="form-select"
                                            onChange={(e) =>
                                              setGrade(e.target.value)
                                            }
                                          >
                                            <option
                                              value="All"
                                              selected="selected"
                                            >
                                              -Chọn Lớp-
                                            </option>
                                            <option value={"Lớp 1"}>
                                              Lớp 1
                                            </option>
                                            <option value={"Lớp 2"}>
                                              Lớp 2
                                            </option>
                                            <option value={"Lớp 3"}>
                                              Lớp 3
                                            </option>
                                            <option value={"Lớp 5"}>
                                              Lớp 5
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="views-exposed-widget views-submit-button">
                                      <button
                                        className="form-submit btn-yellowblacasa"
                                        // type="submit"
                                        onClick={handlefillter}
                                      >
                                        Áp dụng
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        {/* if not empty, then show order by
                        <div className="header-block">
                          <button className="visible-xs">
                            <i className="fa fa-list" />
                          </button>
                          <ul className="nav nav-tabs pull-left">
                            <li className="active">
                              <a href="/teacher">Đúng nhất</a>
                            </li>
                            <li className>
                              <a href="/teacher?orderby=review">
                                Đánh giá tốt nhất
                              </a>
                            </li>
                            <li className>
                              <a href="/teacher?orderby=view">Xem nhiều nhất</a>
                            </li>
                            <li className>
                              <a href="/teacher?orderby=price">
                                Học phí tốt nhất
                              </a>
                            </li>
                          </ul>
                        </div> */}
                        {/* /.header-block */}
                        {/* Tab panes */}
                        <div className="tab-content">
                          <div
                            role="tabpanel"
                            className="tab-pane active"
                            id="tab-1"
                          >
                            <div className="view view-users view-id-users view-display-id-page_2 col-popover view-dom-id-b046246a230e0acb397239e119f93361">
                              <div className="view-content">
                                <div className="row">
                                  {currentTutors.map((tutor) => (
                                    <TutorItem
                                      tutor={tutor}
                                      onViewClick={handleViewClick}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /#tab-1 */}
                        </div>
                        {/* /.tab-content */}
                        <h2 className="element-invisible">Pages</h2>
                        <Pagination
                          postsPerPage={postsPerPage}
                          totalPosts={listtutor.length}
                          paginate={paginate}
                        />
                      </div>
                      {/* /.content-category */}
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

export default ListTutor;
