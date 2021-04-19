import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    token: "",
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    userAuthenticated: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...{
          token: action.payload.token,
          isLoggedIn: true,
          user: action.payload.user,
        },
      };
    },
    logout: () => {
      localStorage.clear();
    },
    getprofile: (state, action) => {
      return {
        ...state,
        ...{
          // token: action.payload.token,
          isLoggedIn: true,
          user: action.payload.user,
        },
      };
    },
    updateprofile: (state, action) => {
      return {
        ...state,
        ...{
          // token: action.payload.token,
          // isLoggedIn: true,
          user: action.payload,
        },
      };
    },
  },
});

export const { userAuthenticated, logout,getprofile ,updateprofile } = authenticationSlice.actions;

export default authenticationSlice.reducer;
