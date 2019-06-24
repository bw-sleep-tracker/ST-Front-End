import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { Card, TextField, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { registerUser } from "../store/actions";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "10px auto"
  },
  cardContainer: {
    width: 500,
    height: "auto",
    margin: "25px auto auto",
    display: "flex",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "auto"
  },
  textField: {
    width: 300,
    margin: "auto"
  },
  button: {
    margin: theme.spacing(5),
    width: 300,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

class CreateUserForm extends Component {
  state = {
    username: "",
    password: "",
    // password2: "",
    email: "",
    first_name: "",
    last_name: ""
  };

  handleChange = event => {
    console.log("I AM THE TEXT INPUT BUTTON");
    this.setState({ [event.target.name]: event.target.value });
  };

  loginSubmit = e => {
    e.preventDefault();
    console.log("I AM THE LOGIN BUTTON");
    console.log(this.state);
    this.props.registerUser(this.state);
  };

  render() {
    const { username, password, email, first_name, last_name } = this.state;
    const { classes } = this.props;
    return (
      <Card className={classes.cardContainer} raised>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.loginSubmit}
        >
          <Typography variant="h6" color="inherit" className={classes.root}>
            Create User
          </Typography>
          <TextField
            id="standard-name"
            label="First Name"
            name="first_name"
            className={classes.textField}
            value={first_name}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Last Name"
            name="last_name"
            className={classes.textField}
            value={last_name}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Username"
            name="username"
            className={classes.textField}
            value={username}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Email"
            name="email"
            className={classes.textField}
            value={email}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Password"
            type="password"
            name="password"
            className={classes.textField}
            value={password}
            onChange={this.handleChange}
            margin="normal"
          />
          {/* <TextField
            id="standard-name"
            label="Confirm Password"
            type="password"
            name="password2"
            className={classes.textField}
            value={password2}
            onChange={this.handleChange}
            margin="normal"
          /> */}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            CREATE USER
          </Button>
          <Typography
            variant="body1"
            style={{ padding: 10, textAlign: "center" }}
          >
            Already have a username? <br />{" "}
            {/* <a href="#" style={{ color: "white" }}> */}
            <Link to="/">Login Here.</Link>
            {/* Links need to be restyled */}
            {/* </a> */}
          </Typography>
        </form>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    registering: state.registering,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(withStyles(styles)(CreateUserForm));
