import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { EditTutor } from "../../../api/tutorsApi";
import { GetProfile, UpdateProfile } from "../../../api/authenticationAPI";
import { useEffect } from "react";
import SuggestionItem from "../SuggestionItem";
import {
  DeleteSuggestion,
  EditSuggestion,
  GetSuggestions,
} from "../../../api/suggestionsApi";
import { useState } from "react";

ManageSuggestion.propTypes = {};

function ManageSuggestion(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listinvite, setListinvite] = useState([]);

  useEffect(() => {
    GetSuggestions(dispatch);
  }, []);

  const userID = useSelector((state) => state.user.user.id);
  const suggestions = useSelector((state) =>
    state.suggestions.suggestions.filter((x) => x.idcustomer === +userID)
  );

  useEffect(() => {
    setListinvite(suggestions);
  }, [suggestions]);

  const handleEditClick = async (suggestion) => {
    console.log("Edit: ", suggestion);

    const editSuggestion = {
      id: suggestion.id,
      idpost: suggestion.idpost,
      idcustomer: suggestion.idcustomer,
      idtutor: suggestion.idtutor,
      status: true,
    };

    EditSuggestion(dispatch, editSuggestion);
    setTimeout(async () => {
      history.push("/managesuggestion");
    }, 500);
  };

  const handleRemoveClick = async (suggestion) => {
    console.log("delete: ", suggestion);
    await DeleteSuggestion(dispatch, suggestion);
  };

  const handleViewClick = async (suggestion) => {
    const ViewUrl = `/tutorview/${suggestion.idtutor}`;
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
              {listinvite.map((suggestion) => (
                <div key={suggestion.id}>
                  <SuggestionItem
                    suggestion={suggestion}
                    onRemoveClick={handleRemoveClick}
                    onEditClick={handleEditClick}
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
