import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../../util/setAuthToken";
import jwt_decode from "jwt-decode";
import { axiosWithAuth } from "../../util/axiosWithAuth";

const link = "https://bw-sleep-tracker-app.herokuapp.com";
// const link = "https://be-bw-sleep-tracker.herokuapp.com"

// Register User
export const registerUser = (userData, redirect) => dispatch => {
  axios
    .post(`${link}/register`, userData)
    .then(res => redirect.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const login = (userData, redirect) => dispatch => {
  axios
    .post(`${link}/login`, userData)
    .then(res => {
      console.log(res.data);
      // Save to local storage
      const { token } = res.data;
      // Set token to local storage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));

      redirect.push("/dashboard");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = "/";
};
