import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import TutorItem from "./TutorItem";

ListTutor.propTypes = {};

function ListTutor(props) {
  const dispatch = useDispatch();
  const tutors = useSelector((state) => state.tutors);
  const history = useHistory();

  const handleViewClick = (tutor) => {
    console.log("xem: ", tutor);
    const ViewUrl = `/listtutorview/${tutor.id}`;
    history.push(ViewUrl);
  };

  return (
    <>
      <Layout>
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
                            <form
                              action="/teacher"
                              method="get"
                              id="views-exposed-form-users-page-2"
                              acceptCharset="UTF-8"
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
                                          >
                                            <option
                                              value="All"
                                              selected="selected"
                                            >
                                              - Chọn địa điểm -
                                            </option>
                                            <optgroup label="Địa điểm phổ biến">
                                              <option value={1}>Hà Nội</option>
                                              <option value={2}>
                                                Hồ Chí Minh
                                              </option>
                                              <option value={10}>
                                                Hải Phòng
                                              </option>
                                              <option value={3}>Đà Nẵng</option>
                                              <option value={11}>
                                                Cần Thơ
                                              </option>
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
                                          >
                                            <option
                                              value="All"
                                              selected="selected"
                                            >
                                              - Chọn môn học -
                                            </option>
                                            <optgroup label="Môn học phổ thông">
                                              <option value={72}>Toán</option>
                                              <option value={73}>Lý</option>
                                              <option value={74}>Hóa</option>
                                              <option value={76}>Văn</option>
                                              <option value={677}>
                                                Tiếng Việt
                                              </option>
                                              <option value={406}>
                                                Lịch sử
                                              </option>
                                              <option value={407}>
                                                Địa lý
                                              </option>
                                              <option value={81}>Sinh</option>
                                              <option value={410}>
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
                                            name="topic"
                                            className="form-select"
                                          >
                                            <option
                                              value="All"
                                              selected="selected"
                                            >
                                              -Chọn Lớp-
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    
                                      
                                    <div className="views-exposed-widget views-submit-button">
                                    <button
                                      className="form-submit btn-yellowblacasa"
                                      type="submit"
                                    >
                                      Áp dụng
                                    </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>{" "}
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
                                  {tutors.map((tutor) => (
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
                        <div className="item-list">
                          <ul className="pager">
                            <li className="pager-first first" />
                            <li className="pager-current">1</li>
                            <li className="pager-item">
                              <a title="Go to page 2" href="/teacher?page=1">
                                2
                              </a>
                            </li>
                            <li className="pager-item">
                              <a title="Go to page 3" href="/teacher?page=2">
                                3
                              </a>
                            </li>
                            <li className="pager-item">
                              <a title="Go to page 4" href="/teacher?page=3">
                                4
                              </a>
                            </li>
                            <li className="pager-item">
                              <a title="Go to page 5" href="/teacher?page=4">
                                5
                              </a>
                            </li>
                            <li className="pager-ellipsis">…</li>
                            <li className="pager-next">
                              <a href="/teacher?page=1"> sau ›</a>
                            </li>
                            <li className="pager-last last">
                              <a href="/teacher?page=1173">cuối ››</a>
                            </li>
                          </ul>
                        </div>{" "}
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
