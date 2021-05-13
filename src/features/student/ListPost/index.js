import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { GetPosts, DeletePost, GetPostsByToken } from "../../../api/postsApi";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Pagination from "../../../components/Pagination";

ListPost.propTypes = {};

function ListPost(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [subject, setSubject] = useState("All");
  const [grade, setGrade] = useState("All");
  const [address, setAddress] = useState("All");
  const [listpost, setListpost] = useState([]);

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    GetPostsByToken(dispatch);
  }, []);

  // const userID = useSelector((state) => state.user.user.id);
  let posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    // const k = posts.filter((x) => x.idStudent === +4);
    setListpost(posts);
  }, [posts]);

  // Get current tutors
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTutors = listpost.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const checkfilter = (subject, grade, address, post) => {
    let checka = false;
    let checkb = false;
    let checkc = false;
    if (subject == "All") checka = true;
    else checka = post.subject === subject;
    if (grade == "All") checkb = true;
    else checkb = post.grade === grade;
    if (address == "All") checkc = true;
    else checkc = post.address.toLowerCase().includes(address.toLowerCase());
    return checka && checkb && checkc;
  };

  const handlefillter = (e) => {
    console.log(subject, grade, address);

    const listfillter = posts.filter((tutor) =>
      checkfilter(subject, grade, address, tutor)
    );
    console.log(listfillter);
    setListpost(listfillter);
  };

  const handlePostEditClick = (post) => {
    console.log("Edit: ", post);
    const editPostUrl = `/listpostedit/${post.id}`;
    history.push(editPostUrl);
  };

  const handlePostViewClick = (post) => {
    console.log("View: ", post);
    const viewPostUrl = `/postview/${post.id}`;
    history.push(viewPostUrl);
  };

  const handlePostRemoveClick = async (post) => {
    console.log("delete: ", post);
    await DeletePost(dispatch, post);
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
                    <div
                      className="view view-nhom-hoc-chung view-id-nhom_hoc_chung view-display-id-page_3 view-dom-id-de23177844ac75a81b70d55e14cc7e19"
                      style={{ backgroundColor: "#fff", paddingBottom: "10px" }}
                    >
                      <div className="view-header">
                        <span>Lớp phù hợp với bạn</span>
                      </div>
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
                                            <option value={"Liên Chiểu"}>
                                              Liên Chiểu
                                            </option>
                                            <option value={"Ngũ Hành Sơn"}>
                                              Ngũ Hành Sơn
                                            </option>
                                            <option value={"Sơn Trà"}>
                                              Sơn Trà
                                            </option>
                                            <option value={"Thanh Khê"}>
                                              Thanh Khê
                                            </option>
                                            <option value={"Hoà Vang"}>
                                              Hoà Vang
                                            </option>
                                            <option value={"Hải Châu"}>
                                              Hải Châu
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
                                            <option value={"Toán"}>Toán</option>
                                            <option value={"Lý"}>Lý</option>
                                            <option value={"Hóa"}>Hóa</option>
                                            <option value={"Tiếng Anh"}>
                                              Tiếng Anh
                                            </option>
                                            <option value={"Ngữ Văn"}>
                                              Văn
                                            </option>
                                            <option value={"Tiếng Việt"}>
                                              Tiếng Việt
                                            </option>
                                            <option value={"Lịch sử"}>
                                              Lịch sử
                                            </option>
                                            <option value={"Địa lý"}>
                                              Địa lý
                                            </option>
                                            <option value={"Sinh"}>Sinh</option>
                                            <option value={"Khác"}>khác</option>
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
                                          <optgroup label="cấp 1">
                                            <option value={"Lớp 1"}>
                                              lớp 1
                                            </option>
                                            <option value={"Lớp 2"}>
                                              lớp 2
                                            </option>
                                            <option value={"Lớp 3"}>
                                              lớp 3
                                            </option>
                                            <option value={"Lớp 4"}>
                                              lớp 4
                                            </option>
                                            <option value={"Lớp 5"}>
                                              lớp 5
                                            </option>
                                          </optgroup>
                                          <optgroup label="cấp 2">
                                            <option value={"Lớp 6"}>
                                              lớp 6
                                            </option>
                                            <option value={"Lớp 7"}>
                                              lớp 7
                                            </option>
                                            <option value={"Lớp 8"}>
                                              lớp 8
                                            </option>
                                            <option value={"Lớp 9"}>
                                              lớp 9
                                            </option>
                                          </optgroup>
                                          <optgroup label="cấp 3">
                                            <option value={"Lớp 10"}>
                                              lớp 10
                                            </option>
                                            <option value={"Lớp 11"}>
                                              lớp 11
                                            </option>
                                            <option value={"Lớp 12"}>
                                              lớp 12
                                            </option>
                                          </optgroup>
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

                        {currentTutors.map((post) => (
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
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={listpost.length}
                        paginate={paginate}
                      />
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
