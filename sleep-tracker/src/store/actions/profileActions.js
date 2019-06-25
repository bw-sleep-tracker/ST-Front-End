import axios from "axios";

import {
  GET_DAILY_DATA,
  GET_WEEKLY_DATA,
  GET_MONTHLY_DATA,
  GET_ERRORS
} from "./types";
import { axiosWithAuth } from "../../util/axiosWithAuth";

export const getDailyData = id => dispatch => {
  axios
    .get(
      `https://be-bw-sleep-tracker.herokuapp.com/tracker/${id}/limit/1/order/desc`
    )
    .then(res =>
      dispatch({
        type: GET_DAILY_DATA,
        payload: res.data[0]
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getWeeklyData = id => dispatch => {
  axios
    .get(
      `https://be-bw-sleep-tracker.herokuapp.com/tracker/${id}/limit/7/order/desc`
    )
    .then(res =>
      dispatch({
        type: GET_WEEKLY_DATA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getMonthlyData = id => dispatch => {
  axios
    .get(`https://be-bw-sleep-tracker.herokuapp.com/tracker/${id}/month/6`)
    .then(res =>
      dispatch({
        type: GET_MONTHLY_DATA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
