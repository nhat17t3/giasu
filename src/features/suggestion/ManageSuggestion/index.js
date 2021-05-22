import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { EditTutor, GetTutors } from "../../../api/tutorsApi";
import { GetProfile, UpdateProfile } from "../../../api/authenticationAPI";
import { useEffect } from "react";
import SuggestionItem from "../SuggestionItem";
import { GetPosts } from "../../../api/postsApi";
import {
  AcceptSuggestion,
  DeleteSuggestion,
  EditSuggestion,
  GetSuggestions,
  GetSuggestionsByStudent,
  RefuseSuggestion,
} from "../../../api/suggestionsApi";
import { useState } from "react";

ManageSuggestion.propTypes = {};

function ManageSuggestion(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listsuggest, setListsuggest] = useState([]);

  // useEffect(() => {
  //   GetSuggestionsByStudent(dispatch);
  // }, []);
  // const suggestions = useSelector((state) => state.suggestions.suggestions);

  useEffect(async () => {
    await GetTutors(dispatch);
    await GetPosts(dispatch);
    await GetSuggestions(dispatch);
  }, []);

  const userID = useSelector((state) => state.user.user.id);
  const suggestions = useSelector((state) => state.suggestions.suggestions);
  useEffect(() => {
    const suggest = suggestions.filter((x) => x.idStudent === +userID);
    setListsuggest(suggest);
  }, [suggestions]);

  const handleEditAcceptClick = async (suggestion) => {
    console.log("Edit: ", suggestion);

    const k = {
      // id: suggestion.id,
      idPost: suggestion.idPost,
      // idStudent: suggestion.idStudent,
      idTutor: suggestion.idTutor,
      // status: 1,
    };

    await AcceptSuggestion(dispatch, k);
    setTimeout(async () => {
      history.push("/managesuggestion");
    }, 1000);
  };
  const handleEditRefuseClick = async (suggestion) => {
    console.log("Edit: ", suggestion);

    const k = {
      // id: suggestion.id,
      idPost: suggestion.idPost,
      // idStudent: suggestion.idStudent,
      idTutor: suggestion.idTutor,
      // status: 2,
    };

    await RefuseSuggestion(dispatch, k);

    history.push("/managesuggestion");
  };

  // const handleRemoveClick = async (suggestion) => {
  //   console.log("delete: ", suggestion);
  //   await DeleteSuggestion(dispatch, suggestion);
  // };

  const handleViewClick = async (suggestion) => {
    const ViewUrl = `/tutorview/${suggestion.idTutor}`;
    history.push(ViewUrl);
  };

  return (
    <>
      <Layout>
        <div
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "20px",
          }}
        >
          <div>
            {/*Menu trái*/}
            {/* content */}
            <h1 style={{ textAlign: "center" }}>DANH SÁCH TUTOR ĐỀ NGHỊ DẠY</h1>
            <div className="col-md-12">
              <div className="row-tittle hidden-xs ">
                <div>
                  <div className="col-md-2 col-sm-2">
                    <div>
                      <h3>ID</h3>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div>
                      <h3>NỘI DUNG </h3>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className>
                      <h3>LIÊN HỆ SĐT </h3>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className>
                      <h3>HÀNH ĐỘNG</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* row */}
              {listsuggest.map((suggestion) => (
                <div key={suggestion.id}>
                  <SuggestionItem
                    suggestion={suggestion}
                    onEditAcceptClick={handleEditAcceptClick}
                    onEditRefuseClick={handleEditRefuseClick}
                    onViewClick={handleViewClick}
                  />
                </div>
              ))}
              {/* end row */}
            </div>
            {/* end content */}
          </div>
        </div>
        <div style={{ height: "480px" }}></div>
      </Layout>
    </>
  );
}

export default ManageSuggestion;
