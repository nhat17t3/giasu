import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";

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
  const [a, setA] = useState(false);

  // useEffect(() => {
  //   GetSuggestionsByStudent(dispatch);
  // }, []);
  // const suggestions = useSelector((state) => state.suggestions.suggestions);

  useEffect(() => {
    GetSuggestions(dispatch);
  }, [a]);

  const userID = useSelector((state) => state.user.user.id);
  const suggestions = useSelector((state) => state.suggestions.suggestions);
  useEffect(() => {
    const suggest = suggestions.filter((x) => x.idStudent === +userID);
    setListsuggest(suggest);
  }, [suggestions]);

  const handleEditAcceptClick = async (suggestion) => {
    console.log("Edit accept sugesstion: ", suggestion);
    const k = {
      idPost: suggestion.idPost,
      idTutor: suggestion.idTutor,
    };
    await AcceptSuggestion(dispatch, k);
    setA(!a);

    history.push("/managesuggestion");
  };
  const handleEditRefuseClick = async (suggestion) => {
    console.log("Edit: ", suggestion);
    const k = {
      idPost: suggestion.idPost,
      idTutor: suggestion.idTutor,
    };
    await RefuseSuggestion(dispatch, k);
    setA(!a);

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
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-2" style={{ marginTop: "62px" }}>
                <Sidebar />
              </div>
              <div className="grid__column-10">
                <div className="notify">
                  <h2 className="notify__heading">Danh sách đề nghị dạy</h2>
                  <div className="grid__row " style={{ margin: "auto 0" }}>
                    <div className="grid__column-2 notify-header__item ">
                      Thời gian
                    </div>
                    <div className="grid__column-5 notify-header__item">
                      Nội dung
                    </div>
                    <div className="grid__column-2 notify-header__item">
                      Liên hệ gia sư
                    </div>
                    <div className="grid__column-3 notify-header__item">
                      Hoạt động
                    </div>
                  </div>

                  {listsuggest.map((suggestion) => (
                    <div className="notify-item" key={suggestion.id}>
                      <SuggestionItem
                        suggestion={suggestion}
                        onEditAcceptClick={handleEditAcceptClick}
                        onEditRefuseClick={handleEditRefuseClick}
                        onViewClick={handleViewClick}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ManageSuggestion;
