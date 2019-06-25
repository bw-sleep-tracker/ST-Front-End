import {
  GET_DAILY_DATA,
  GET_WEEKLY_DATA,
  GET_MONTHLY_DATA
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
  monthlyData: []
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
    default:
      return state;
  }
}
