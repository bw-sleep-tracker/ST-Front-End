import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/authActions";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Header = props => {
  const { classes, isAuthenticated } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.root}>
            Sleep Tracker
          </Typography>
          {isAuthenticated && (
            <Button variant="outlined" onClick={props.logoutUser}>
              LOGOUT
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(withStyles(styles)(Header));
