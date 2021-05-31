import { createSlice,createAction } from "@reduxjs/toolkit";
export const updateProfileSuccess = createAction("updateProfileSuccess");
export const updateProfileError = createAction("updateProfileError");



export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    getprofile: (state, action) => {
      return {
        ...state,
        ...{
          user: action.payload,
        },
      };
    },
    // updateprofile: (state, action) => {
    //   return {
    //     ...state,
    //     ...{
    //       user: action.payload,
    //     },
    //   };
    // },
  },
});

export const { getprofile, updateprofile } = userSlice.actions;

export default userSlice.reducer;
