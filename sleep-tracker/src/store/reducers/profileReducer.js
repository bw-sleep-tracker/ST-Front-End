import {} from "../actions/types";

const initialState = {
  deletingSleepEntry: false,
  fetchingSleepEntries: false,
  sleepEntries: [],
  savingSleepEntry: false,
  updatingEntry: false,
  error: null,
  dailyData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
