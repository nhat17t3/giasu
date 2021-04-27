import { createSlice, createAction } from "@reduxjs/toolkit";

// const initialSuggestions = [
//   {
//     id: 1,
//     idcustomer:1,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 2,
//     idcustomer:2,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id:3,
//     idcustomer:3,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 4,
//     idcustomer:4,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
//   {
//     id: 5,
//     idcustomer:5,
//     title: "Tìm gia sư kèm Toán lớp 3 Yên Sở, Hoàng Mai",
//     grade: "3",
//     subject: "1",
//     price: "200000",
//     phonenumber: "0369621657",
//     address: "Hà Nội",
//     time: "Thứ 3 thứ 7",
//     description: "Yêu cầu gia sư cần KIÊN NHẪN, NHIỆT TÌNH, CÓ KINH NGHIỆM",
//   },
// ];

export const setSuggestionError = createAction("setSuggestionError");
export const newSuggestionError = createAction("newSuggestionError");
export const editSuggestionError = createAction("editSuggestionError");
export const deleteSuggestionError = createAction("deleteSuggestionError");

const SuggestionSlice = createSlice({
  name: "suggestions",
  // initialState: initialSuggestions,
  initialState: {
    suggestions: [],
    status: "idle",
  },
  reducers: {
    setSuggestions: (state, action) => {
      return { ...state, suggestions: [...action.payload] };
    },

    newSuggestion: (state, action) => {
      state.suggestions.push(action.payload);
    },

    deleteSuggestion: (state, action) => {
      const suggestions = state.suggestions.filter((suggestion) => suggestion.id !== action.payload.id);
      return { ...state, suggestions: [...suggestions] };
    },

    editSuggestion: (state, action) => {
      const newSuggestion = action.payload;
      const suggestionIndex = state.suggestions.findIndex((suggestion) => suggestion.id === newSuggestion.id);

      if (suggestionIndex >= 0) {
        state.suggestions[suggestionIndex] = newSuggestion;
      }
    },
  },
});

const { reducer, actions } = SuggestionSlice;
export const { setSuggestions, newSuggestion, deleteSuggestion, editSuggestion } = actions;
export default reducer;
