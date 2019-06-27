import {
  GET_DAILY_DATA,
  GET_WEEKLY_DATA,
  GET_MONTHLY_DATA,
  GET_YEARLY_DATA,
  GET_YEARLY_ALL,
  POST_SLEEP_OBJECT,
  DELETE_SLEEP_OBJECT,
  UPDATE_SLEEP_OBJECT
} from "../actions/types";

const initialState = {
  deletingSleepEntry: false,
  fetchingSleepEntries: false,
  sleepEntries: [],
  savingSleepEntry: false,
  updatingEntry: false,
  error: null,
  dailyData: [],
  weeklyData: [],
  monthlyData: [],
  yearlyData: [],
  recommendationData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DAILY_DATA:
      return {
        ...state,
        dailyData: action.payload
      };
    case GET_WEEKLY_DATA:
      return {
        ...state,
        weeklyData: action.payload
      };
    case GET_MONTHLY_DATA:
      return {
        ...state,
        monthlyData: action.payload
      };
    case GET_YEARLY_DATA:
      return {
        ...state,
        recommendationData: action.payload
      };
    case GET_YEARLY_ALL:
      return {
        ...state,
        yearlyData: action.payload
      };
    case POST_SLEEP_OBJECT:
      return {
        ...state,
        yearlyData: action.payload
      };
    case UPDATE_SLEEP_OBJECT:
      return {
        ...state,
        yearlyData: action.payload
      };
    case DELETE_SLEEP_OBJECT:
      return {
        ...state,
        yearlyData: action.payload
      };
    default:
      return state;
  }
}
