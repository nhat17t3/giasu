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
  const [postsPerPage] = useState(8);

  useEffect(() => {
    GetTutors(dispatch);
  }, []);

  let tutors = useSelector((state) => state.tutors.tutors);

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
    else checka = tutor.subject.includes(subject);
    if (grade == "All") checkb = true;
    else checkb = tutor.grade.includes(grade);
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

  const optionAddress = (
    <>
      <option value={"Li??n Chi???u"}>Li??n Chi???u</option>
      <option value={"Ng?? H??nh S??n"}>Ng?? H??nh S??n</option>
      <option value={"S??n Tr??"}>S??n Tr??</option>
      <option value={"Thanh Kh??"}>Thanh Kh??</option>
      <option value={"Ho?? Vang"}>Ho?? Vang</option>
      <option value={"H???i Ch??u"}>H???i Ch??u</option>
    </>
  );

  const optionSubject = (
    <>
      <option value={"To??n"}>To??n</option>
      <option value={"L??"}>L??</option>
      <option value={"H??a"}>H??a</option>
      <option value={"Ti???ng Anh"}>Ti???ng Anh</option>
      <option value={"Ng??? V??n"}>V??n</option>
      <option value={"Ti???ng Vi???t"}>Ti???ng Vi???t</option>
      <option value={"L???ch s???"}>L???ch s???</option>
      <option value={"?????a l??"}>?????a l??</option>
      <option value={"Sinh"}>Sinh</option>
    </>
  );

  const optionGrade = (
    <>
      <option value={"L???p 1"}>l???p 1</option>
      <option value={"L???p 2"}>l???p 2</option>
      <option value={"L???p 3"}>l???p 3</option>
      <option value={"L???p 4"}>l???p 4</option>
      <option value={"L???p 5"}>l???p 5</option>
      <option value={"L???p 6"}>l???p 6</option>
      <option value={"L???p 7"}>l???p 7</option>
      <option value={"L???p 8"}>l???p 8</option>
      <option value={"L???p 9"}>l???p 9</option>
      <option value={"L???p 10"}>l???p 10</option>
      <option value={"L???p 11"}>l???p 11</option>
      <option value={"L???p 12"}>l???p 12</option>
    </>
  );
  return (
    <>
      <Layout>
        <ToastContainer />
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
             
              <div className="grid__column-12">
                <div className="home-filter">
                  <span className="home-filter__lable">L???c theo:</span>
                  <select
                    name="address"
                    id
                    className="select-filter"
                    onChange={(e) => setAddress(e.target.value)}
                  >
                    <option value="All" selected="selected" defaultValue="All">
                      - Ch???n ?????a ??i???m -
                    </option>
                    {optionAddress}
                  </select>
                  <select
                    name="subject"
                    id
                    className="select-filter"
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="All" selected="selected">
                      - Ch???n m??n h???c -
                    </option>
                    {optionSubject}
                  </select>
                  <select
                    name="grade"
                    id
                    className="select-filter"
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="All" selected="selected">
                      -Ch???n L???p-
                    </option>
                    {optionGrade}
                  </select>
                  <button
                    className="home-filter__btn btn btn--primary"
                    onClick={handlefillter}
                  >
                    ??p d???ng
                  </button>
                  {/* <div className="home-filter__page">
                    <div className="home-filter__page-num">
                      <span className="home-filter__page-current">1</span>/ 14
                    </div>
                    <div className="home-filter__page-control">
                      <a href=" " className="home-filter__page-btn">
                        <i className="fas fa-angle-left" />
                      </a>
                      <div className="home-filter__page-control-seperate" />
                      <a href className="home-filter__page-btn">
                        <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </div> */}
                </div>

                <div className="tutor">
                  <div className="grid__row">
                    {currentTutors.map((tutor) => (
                      <div className="grid__column-3" key={tutor.id}>
                        <TutorItem
                          tutor={tutor}
                          onViewClick={handleViewClick}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={listtutor.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListTutor;
