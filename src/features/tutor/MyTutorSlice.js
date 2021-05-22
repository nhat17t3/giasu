import { createSlice,createAction  } from "@reduxjs/toolkit";

export const setMyTutorError = createAction("setMyTutorError");
export const updateMyTutorError = createAction("updateMyTutorError");

export const MyTutorSlice = createSlice({
  name: "mytutor",
  initialState: {
    mytutor: {},
    status: "idle",
  },
  reducers: {
    getMyTutor: (state, action) => {
      return {
        ...state,
        ...{
            mytutor: action.payload,
        },
      };
    },
    // updateMyTutor: (state, action) => {
    //   return {
    //     ...state,
    //     ...{
    //       mytutor: action.payload,
    //     },
    //   };
    // },
  },
});

export const { getMyTutor, updateMyTutor } = MyTutorSlice.actions;

export default MyTutorSlice.reducer;
