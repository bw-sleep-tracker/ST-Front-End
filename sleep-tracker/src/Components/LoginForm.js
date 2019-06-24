import React, { Component } from "react";
import { Card, TextField, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
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

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    console.log("I AM THE TEXT INPUT BUTTON");
    this.setState({ [event.target.name]: event.target.value });
  };

  loginSubmit = () => {
    console.log("I AM THE LOGIN BUTTON");
    console.log(this.state);
  };

  render() {
    const { username, password } = this.state;
    const { classes } = this.props;
    return (
      <Card className={classes.cardContainer} raised>
        <form className={classes.container} noValidate autoComplete="off">
          <Typography variant="h6" color="inherit" className={classes.root}>
            Login
          </Typography>
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
            label="Password"
            type="password"
            name="password"
            className={classes.textField}
            value={password}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.loginSubmit}
          >
            LOGIN
          </Button>
          <Typography
            variant="body1"
            style={{ padding: 10, textAlign: "center" }}
          >
            Don't have a username? <br />{" "}
            <a href="#" style={{ color: "white" }}>
              Create an account here.
            </a>
          </Typography>
        </form>
      </Card>
    );
  }
}

export default withStyles(styles)(LoginForm);
