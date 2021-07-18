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

/**
 * GET USERS ACTION
 * @returns ACTION
 
*/

export const fetchUserStart = () => ({
  type: UserActionTypes.USER_FETCH_START,
});

export const fetchUserSuccess = (users) => ({
  type: UserActionTypes.USER_FETCH_SUCCESS,
  payload: {
    users,
  },
});

export const fetchUserError = (error) => ({
  type: UserActionTypes.USER_FETCH_FAILURE,
  payload: {
    error,
  },
});

/**
 * SEARCH USER ACTION
 * @returns ACTION
 */
 export const searchUserStart = () => ({
  type: UserActionTypes.USERS_SEARCH_START,
});

export const searchUserSuccess = (users) => ({
  type: UserActionTypes.USERS_SEARCH_SUCCESS,
  payload: {
    users,
  },
});

export const searchUserError = (error) => ({
  type: UserActionTypes.USERS_SEARCH_ERROR,
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

export const signUpAsync = (firstName, lastName, email, password) => {
    return async (dispatch, getState) => {
      dispatch(signUpStart());
      try {
        const response = await axios.post(
          "api/v1/users/signup",
          {
            firstName,
            lastName,
            email,
            password,
          }
        );
        dispatch(signUpSuccess(response.data.user, response.data.token));
      } catch (err) {
        dispatch(signUpError(err));
    }
  };
};


export const fetchUsersAsync = () => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    try {
      dispatch(fetchUserStart());
      const response = await axios.get(
        "/api/v1/users",
        {
          
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(fetchUserSuccess(response.data.user));
    } catch (err) {
      dispatch(fetchUserError(err));
    }
  };
};

export const searchUsersAsync = (query) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();

    try {
      dispatch(searchUserStart());
      const response = await axios.get(
        "/api/v1/users/search",
        {
          params: {
            q: query,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(searchUserSuccess(response.data.users));
    } catch (err) {
      dispatch(searchUserError(err));
    }
  };
};