import * as actionType from "../actions";

const initialState = {
  deletingSleepEntry: false,
  fetchingSleepEntries: false,
  sleepEntries: [],
  loggingIn: false,
  registering: false,
  savingSleepEntry: false,
  updatingEntry: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /* REGISTER USER */
    case actionType.REGISTER_PENDING:
      return {
        ...state,
        registering: true,
        error: ""
      };
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        error: ""
      };
    case actionType.REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.payload
      };
    /* LOGIN USER */
    case actionType.LOGIN_PENDING:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case actionType.LOGIN_FAILURE:
      return {
        ...state,
        logginIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};
