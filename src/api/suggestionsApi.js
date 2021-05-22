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
    const { data } = await axiosClient.get("/suggestion");
    dispatch(setSuggestions(data));
    // return {data};
  } catch {
    dispatch(setSuggestionError());
  }
};

export const GetSuggestionsByStudent = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/api/suggestion");
    dispatch(setSuggestions(data));
    // return {data};
  } catch {
    dispatch(setSuggestionError());
  }
};

export const NewSuggestion = async (dispatch, suggestion) => {
  try {
    // api call
    await axiosClient.post(`/api/suggestion?idStudent=${suggestion.idStudent}&idPost=${suggestion.idPost}`);
    // dispatch(newSuggestion(data));
  } catch {
    dispatch(newSuggestionError());
  }
};

export const AcceptSuggestion = async (dispatch, suggestion) => {
  try {
    // api call
    await axiosClient.put(`/api/suggestion/acceptance?idPost=${suggestion.idPost}&idTutor=${suggestion.idTutor}`);
    dispatch(editSuggestion(suggestion));
  } catch {
    dispatch(editSuggestionError());
  }
};

export const RefuseSuggestion = async (dispatch, suggestion) => {
  try {
    // api call
    await axiosClient.put(`/api/suggestion/denial?idPost=${suggestion.idPost}&idTutor=${suggestion.idTutor}`);
    dispatch(editSuggestion(suggestion));
  } catch {
    dispatch(editSuggestionError());
  }
};




// export const DeleteSuggestion = async (dispatch, suggestion) => {
//   try {
//     // api call
//     await axiosClient.delete(`/suggestions/${suggestion.id}`);
//     // await axiosClient.delete('/suggestions/${suggestion.id}', { data: { ...suggestion } });
//     dispatch(deleteSuggestion(suggestion));
//   } catch {
//     dispatch(deleteSuggestionError());
//   }
// };
