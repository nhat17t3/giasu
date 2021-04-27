import { createSlice } from "@reduxjs/toolkit";

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
          user: action.payload.user,
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
