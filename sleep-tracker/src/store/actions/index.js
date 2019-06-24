import axios from "axios";
import { axiosWithAuth } from "../../util/axiosWithAuth";

export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = creds => dispatch => {
  dispatch({ type: REGISTER_PENDING });
  return axios
    .post("https://be-bw-sleep-tracker.herokuapp.com/register", creds)
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE, payload: "Register user failed!" });
    });
};

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_PENDING });
  return axios
    .post("https://be-bw-sleep-tracker.herokuapp.com/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: "Login user failed!" });
    });
};
