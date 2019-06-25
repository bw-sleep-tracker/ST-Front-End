import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";
import App from "./App";
import rootReducer from "./store/reducers";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { indigo, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[200]
    },
    secondary: {
      main: blue[700]
    },
    type: "dark"
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const AppWithRouter = withRouter(App);

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
