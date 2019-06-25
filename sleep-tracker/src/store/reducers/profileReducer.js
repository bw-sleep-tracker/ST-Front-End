import {
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/types";

const initialState = {
  userData: null,
  deletingSleepEntry: false,
  fetchingSleepEntries: false,
  sleepEntries: [],
  loggingIn: false,
  registering: false,
  savingSleepEntry: false,
  updatingEntry: false,
  error: null,
  dailyData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    /* REGISTER USER */
    case REGISTER_PENDING:
      return {
        ...state,
        registering: true,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        error: ""
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.payload
      };
    /* LOGIN USER */
    case LOGIN_PENDING:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: "",
        userData: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logginIn: false,
        error: action.payload
      };

    default:
      return state;
  }
}
