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
    default:
      return state;
  }
};
