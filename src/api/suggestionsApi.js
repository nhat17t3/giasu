// const suggestionsApi = {
//   getAll: async (params) => {
//     const url = "/suggestions";
//     return await axiosClient.get(url, { params });
//   },

//   get: (id) => {
//     const url = `/suggestions/${id}`;
//     return axiosClient.get(url);
//   },
//   add: (data) => {
//     const url = `/suggestions`;
//     return axiosClient.suggestion(url, { data });
//   },
//   edit: ({id, data}) => {
//     const url = `/suggestions/${id}`;
//     return axiosClient.put(url, { data });
//   },
//   delete: (id) => {
//     const url = `/suggestions/${id}`;
//     return axiosClient.delete(url);
//   },
// };

import axiosClient from "./axiosClient";
import {
  setSuggestions,
  newSuggestion,
  deleteSuggestion,
  editSuggestion,
  newSuggestionError,
  editSuggestionError,
  deleteSuggestionError,
  setSuggestionError,
} from "../features/suggestion/SuggestionSlice";

export const GetSuggestions = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/suggestions");
    dispatch(setSuggestions(data));
    // return {data};
  } catch {
    dispatch(setSuggestionError());
  }
};

export const NewSuggestion = async (dispatch, suggestion) => {
  try {
    // api call
    const { data } = await axiosClient.post("/suggestions", suggestion);
    dispatch(newSuggestion(data));
  } catch {
    dispatch(newSuggestionError());
  }
};

export const EditSuggestion = async (dispatch, suggestion) => {
  try {
    // api call
    await axiosClient.put(`/suggestions/${suggestion.id}`, suggestion);
    dispatch(editSuggestion(suggestion));
  } catch {
    dispatch(editSuggestionError());
  }
};

export const DeleteSuggestion = async (dispatch, suggestion) => {
  try {
    // api call
    await axiosClient.delete(`/suggestions/${suggestion.id}`);
    // await axiosClient.delete('/suggestions/${suggestion.id}', { data: { ...suggestion } });
    dispatch(deleteSuggestion(suggestion));
  } catch {
    dispatch(deleteSuggestionError());
  }
};
