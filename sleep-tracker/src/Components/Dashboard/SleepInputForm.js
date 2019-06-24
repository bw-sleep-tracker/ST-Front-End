import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";

const styles = theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  emoji: {
    margin: theme.spacing(1),
    fontSize: "2rem"
  }
});

class SleepInputForm extends Component {
  state = {
    date: ""
  };

  render() {
    const { classes } = this.props;
    return (
      <Dialog open={this.props.status} onClose={this.props.toggle}>
        <DialogTitle>Submit Sleep</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Complete the form below to submit your sleep cycle.
          </DialogContentText>
          <form className={classes.form}>
            <div>
              <TextField
                id="datetime-local"
                label="Sleep Start Time"
                type="datetime-local"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="datetime-local"
                label="Sleep End Time"
                type="datetime-local"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <DialogContentText style={{ textAlign: "right" }}>
              Morning Feeling:{" "}
              <Button size="small" className={classes.emoji}>
                😀
              </Button>
              <Button size="small" className={classes.emoji}>
                😐
              </Button>
              <Button size="small" className={classes.emoji}>
                😴
              </Button>
            </DialogContentText>
            <DialogContentText style={{ textAlign: "right" }}>
              Day Feeling:{" "}
              <Button size="small" className={classes.emoji}>
                😀
              </Button>
              <Button size="small" className={classes.emoji}>
                😐
              </Button>
              <Button size="small" className={classes.emoji}>
                😴
              </Button>
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" fullWidth variant="contained">
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(SleepInputForm);
