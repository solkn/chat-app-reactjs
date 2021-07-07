import { UserActionTypes } from "./types";
import axios from "axios";

/**
 * LOGIN ACTION
 * @returns ACTION
 */
export const loginStart = () => ({
  type: UserActionTypes.LOGIN_START,
});

export const loginSuccess = (user, token) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const loginError = (error) => ({
  type: UserActionTypes.LOGIN_ERROR,
  payload: {
    error,
  },
});

/**
 * SIGNUP ACTION
 * @returns ACTION
 */
export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START,
});

export const signUpSuccess = (user, token) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const signUpError = (error) => ({
  type: UserActionTypes.SIGN_UP_ERROR,
  payload: {
    error,
  },
});

export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
});

/**
 * Login Async Action Creator 
 */

export const loginAsync = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(
        "/api/v1/users/login",
        {
          email,
          password,
        }

      )
      dispatch(loginSuccess(response.data.user, response.data.token));
    } catch (err) {
      dispatch(loginError(err));
      console.log("error has occcurred!");

    }
  };
};

/**
 * SignUp Async Action Creater
 */

export const signUpAsync = (fName,lName,email, password) => {
  return async (dispatch, getState) => {
    dispatch(signUpStart());
    try {
      const response = await axios.post(
        "/api/v1/users/signup",
        {
          fName,
          lName,
          email,
          password,
        }

      )
      dispatch(signUpSuccess(response.data.user, response.data.token));
    } catch (err) {
      dispatch(signUpError(err));
      console.log("error has occcurred!");

    }
  };
};
