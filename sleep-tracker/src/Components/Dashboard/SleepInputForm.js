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

import Clock from "../../util/Clock";

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
    date: "",
    startTime: "",
    endTime: "",
    morning: 5,
    day: 5
  };

  getDate = e => {
    this.setState({ date: e.target.value });
  };

  getStartTime = e => {
    this.setState({ startTime: e.target.value });
  };

  getEndTime = e => {
    this.setState({ endTime: e.target.value });
  };

  emojiToggle = (e, data) => {
    console.log(e.target.textContent);
    let content = e.target.textContent;

    if (data === "Morning") {
      switch (content) {
        case "😴": {
          return this.setState({ morning: 1 });
        }
        case "😐": {
          return this.setState({ morning: 2 });
        }
        case "😌": {
          return this.setState({ morning: 3 });
        }
        case "😀": {
          return this.setState({ morning: 4 });
        }
        default: {
          return this.setState({ morning: null });
        }
      }
    } else if (data === "Daytime") {
      switch (content) {
        case "😴": {
          return this.setState({ day: 1 });
        }
        case "😐": {
          return this.setState({ day: 2 });
        }
        case "😌": {
          return this.setState({ day: 3 });
        }
        case "😀": {
          return this.setState({ day: 4 });
        }
      }
    }
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);
    return (
      <Dialog open={this.props.status} onClose={this.props.toggle}>
        <DialogTitle>Submit Sleep</DialogTitle>
        <DialogContent style={{ maxWidth: 500 }}>
          <DialogContentText>
            Complete the form below to submit your sleep cycle.
          </DialogContentText>
          <form className={classes.form}>
            <TextField
              value={this.state.date}
              id="date"
              label="Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              onChange={this.getDate}
            />
            <div>
              <Clock label="Sleep Start"/>
              <Clock label="Sleep End" />
              {/* <TextField
                value={this.state.startTime}
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
                onChange={this.getStartTime}
              /> */}
              {/* <TextField
                value={this.state.endTime}
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
                onChange={this.getEndTime}
              /> */}
            </div>
            <DialogContentText style={{ textAlign: "right" }}>
              Morning Feeling:{" "}
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Morning")}
                variant={this.state.morning === 3 ? "contained" : "text"}
              >
                😴
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.morningEmojiToggle(e, "Morning")}
                variant={this.state.morning === 2 ? "contained" : "text"}
              >
                😐
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Morning")}
                variant={this.state.morning === 1 ? "contained" : "text"}
              >
                😌
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Morning")}
                variant={this.state.morning === 1 ? "contained" : "text"}
              >
                😀
              </Button>
            </DialogContentText>
            <DialogContentText style={{ textAlign: "right" }}>
              Day Feeling:{" "}
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Daytime")}
                variant={this.state.morning === 3 ? "contained" : "text"}
              >
                😴
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Daytime")}
                variant={this.state.morning === 2 ? "contained" : "text"}
              >
                😐
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Daytime")}
                variant={this.state.morning === 1 ? "contained" : "text"}
              >
                😌
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Daytime")}
                variant={this.state.morning === 1 ? "contained" : "text"}
              >
                😀
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
