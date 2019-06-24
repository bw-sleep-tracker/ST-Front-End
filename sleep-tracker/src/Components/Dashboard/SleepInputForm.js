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
    width: 150,
    marginTop: 25
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
        <DialogContent style={{ maxWidth: 400 }}>
          <DialogContentText>
            Complete the form below to submit your sleep cycle.
          </DialogContentText>
          <form className={classes.form}>
            <TextField
              id="date"
              label="Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="time"
              label="Sleep Start"
              type="time"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
            <TextField
              id="time"
              label="Sleep End"
              type="time"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />

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
