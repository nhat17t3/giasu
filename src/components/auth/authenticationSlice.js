import { createSlice, createAction } from "@reduxjs/toolkit";

export const setLoginError = createAction("setLoginError");
export const setLoginSuccess = createAction("setLoginSuccess");
export const setSignupError = createAction("setSignupError");
export const setSignupSuccess = createAction("setSignupSuccess");

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    userAuthenticated: (state, action) => {
      localStorage.setItem("token", action.payload.accessToken);

      return {
        ...state,
        ...{
          token: action.payload.accessToken,
          isLoggedIn: true,
        },
      };
    },

    logout: () => {
      localStorage.clear();
    },
  },
});

export const { userAuthenticated, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
