import { axiosWithAuth } from "../../util/axiosWithAuth";

import {
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./types";

export const registerUser = creds => dispatch => {
  dispatch({ type: REGISTER_PENDING });
  axiosWithAuth()
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

export const login = (creds, redirect) => dispatch => {
  dispatch({ type: LOGIN_PENDING });
  axiosWithAuth()
    .post("https://be-bw-sleep-tracker.herokuapp.com/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
      redirect.push("/dashboard");
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: "Login user failed!" });
    });
};
