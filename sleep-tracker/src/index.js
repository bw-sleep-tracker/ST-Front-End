import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { indigo, blue } from "@material-ui/core/colors";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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

// MUIThemeProvider does not need to be the top level wrapper. Add redux and react router stuff however you would like.

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
