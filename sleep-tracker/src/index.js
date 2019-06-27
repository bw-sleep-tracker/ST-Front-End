import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import jwt_decode from "jwt-decode";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";

import "./index.css";
import App from "./App";
import rootReducer from "./store/reducers";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { indigo, blue, deepPurple } from "@material-ui/core/colors";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const AppWithRouter = withRouter(App);

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to home
    window.location.href = "/";
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00006D"
    },
    secondary: {
      main: indigo[300]
    },
    type: "dark"
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppWithRouter />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
