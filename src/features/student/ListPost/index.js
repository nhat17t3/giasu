import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { GetPosts, DeletePost } from "../../../api/postsApi";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

ListPost.propTypes = {};

function ListPost(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const history = useHistory();

  useEffect(() => {
    GetPosts(dispatch);
  }, []);

  const handlePostEditClick = (post) => {
    console.log("Edit: ", post);
    const editPostUrl = `/listpostedit/${post.id}`;
    history.push(editPostUrl);
  };

  const handlePostViewClick = (post) => {
    console.log("View: ", post);
    const viewPostUrl = `/listpostview/${post.id}`;
    history.push(viewPostUrl);
  };

  const handlePostRemoveClick = async (post) => {
    console.log("delete: ", post);
    await DeletePost(dispatch, post);
  };

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
                    <div
                      className="view view-nhom-hoc-chung view-id-nhom_hoc_chung view-display-id-page_3 view-dom-id-de23177844ac75a81b70d55e14cc7e19"
                      style={{ backgroundColor: "#fff", paddingBottom: "10px" }}
                    >
                      <div className="view-header">
                        <span>Lớp phù hợp với bạn</span>
                      </div>
                      <div className="bg-gradient-pink">
                        <div className="page-classes-filters">
                          <form
                            action="/class"
                            method="get"
                            id="views-exposed-form-nhom-hoc-chung-page-3"
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
                                            <option value={11}>Cần Thơ</option>
                                          </optgroup>
                                          <optgroup label="Tỉnh, thành phố khác">
                                            <option value={17}>An Giang</option>
                                            <option value={18}>
                                              Bà Rịa-Vũng Tàu
                                            </option>
                                            <option value={21}>
                                              Bắc Giang
                                            </option>
                                            <option value={20}>Bắc Kạn</option>
                                            <option value={19}>Bạc Liêu</option>
                                            <option value={22}>Bắc Ninh</option>
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
                                            <option value={406}>Lịch sử</option>
                                            <option value={407}>Địa lý</option>
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
                                            -Chọn lớp-
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

                                  <div
                                    className="col-md-2 col-sm-2"
                                    style={{ marginLeft: "350px" }}
                                  >
                                    <Link
                                      className="btn-bla-big btn-yellowblacasa"
                                      
                                      to="/addpost"
                                    >
                                      Add New Post
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>{" "}
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-md-10 col-sm-10"></div>

                        <div className="col-md-2 col-sm-2">
                          <Link
                            className="btn-bla-big btn-yellowblacasa"
                            style={{ width: "150px" }}
                            to="/addpost"
                          >
                            Add New Post
                          </Link>
                        </div>
                      </div> */}
                      <div className="view-content">
                        <div className="row-tittle hidden-xs ">
                          <div>
                            <div className="col-md-2 col-sm-2">
                              <div>
                                <h3>NGƯỜI ĐĂNG</h3>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <div>
                                <h3>NỘI DUNG LỚP HỌC TÌM GIA SƯ</h3>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="">
                                <h3>HỌC PHÍ </h3>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                              <div className="">
                                <h3>HÀNH ĐỘNG</h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        {posts.map((post) => (
                          <div key={post.id}>
                            <PostItem
                              post={post}
                              onRemoveClick={handlePostRemoveClick}
                              onEditClick={handlePostEditClick}
                              onViewClick={handlePostViewClick}
                            />
                          </div>
                        ))}
                      </div>
                      <h2 className="element-invisible">Pages</h2>
                      <div className="item-list">
                        <ul className="pager">
                          <li className="pager-first first" />
                          <li className="pager-current">1</li>
                          <li className="pager-item">
                            <a title="Go to page 2" href="/class?page=1">
                              2
                            </a>
                          </li>
                          <li className="pager-next">
                            <a href="/class?page=1">sau ›</a>
                          </li>
                          <li className="pager-last last">
                            <a href="/class?page=1">cuối »</a>
                          </li>
                        </ul>
                      </div>{" "}
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

export default ListPost;
