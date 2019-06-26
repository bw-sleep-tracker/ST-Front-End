import React, { Component } from "react";
import { connect } from "react-redux";
import {
  postSleepObject,
  updateSleepObject
} from "../../store/actions/profileActions";
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

  submitForm = () => {
    const dateArray = this.state.date.split("-");
    const formattedDate = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    const object = {
      user_id: this.props.id,
      date: formattedDate,
      start_sleep_time: this.state.startTime,
      end_sleep_time: this.state.endTime,
      day_emotion: this.state.day,
      sleep_emotion: this.state.morning,
      month: parseInt(dateArray[1]),
      year: parseInt(dateArray[0]),
      day: parseInt(dateArray[2])
    };
    this.props.postSleepObject(object);
    this.setState({ date: "", startTime: "", endTime: "", morning: 5, day: 5 });
    this.props.close();
  };

  updateForm = () => {
    const { activeData } = this.props;
    const dateArray = this.state.date.split("-");
    const formattedDate = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    const object = {
      user_id: this.props.id,
      date: formattedDate,
      start_sleep_time: this.state.startTime,
      end_sleep_time: this.state.endTime,
      day_emotion: this.state.day,
      sleep_emotion: this.state.morning,
      month: parseInt(dateArray[1]),
      year: parseInt(dateArray[0]),
      day: parseInt(dateArray[2])
    };

    if (this.state.date === "") {
      const dateArray2 = activeData.date.split("/");
      object.date = activeData.date;
      object.month = parseInt(dateArray2[0]);
      object.year = parseInt(dateArray2[2]);
      object.day = parseInt(dateArray2[1]);
    }
    if (this.state.startTime === "")
      object.start_sleep_time = activeData.startTime;
    if (this.state.endTime === "") object.end_sleep_time = activeData.endTime;
    if (this.state.day === 5) object.day_emotion = activeData.day;
    if (this.state.morning === 5) object.day_morning = activeData.morning;

    this.props.updateSleepObject(object);
    this.setState({ date: "", startTime: "", endTime: "", morning: 5, day: 5 });
    this.props.close();
  };

  getDate = e => {
    this.setState({ date: e.target.value });
  };

  // getStartTime = date => {
  //   console.log("date");
  //   // this.setState({ startTime: e.target.value });
  // };

  // getEndTime = e => {
  //   this.setState({ endTime: e.target.value });
  // };

  handleClockSuccess = date => {
    console.log("date:", date);
    this.setState({
      startTime: date
    });
  };

  handleClockSuccess_end = date => {
    console.log("date:", date);
    this.setState({
      endTime: date
    });
  };

  emojiToggle = (e, data) => {
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

    let formattedDate;
    let morningNum;
    let dayNum;

    if (this.props.activeData) {
      let dateArray = this.props.activeData.date.split("/");
      formattedDate = `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
      morningNum = this.props.activeData.morning;
      dayNum = this.props.activeData.day;
    } else {
    }

    if (this.state.morning === 5 && !this.props.activeData) {
      morningNum = this.state.morning;
    } else if (this.state.morning === 5 && this.props.activeData) {
      morningNum = this.props.activeData.morning;
    } else if (this.state.morning !== 5) {
      morningNum = this.state.morning;
    }

    if (this.state.day === 5 && !this.props.activeData) {
      dayNum = this.state.day;
    } else if (this.state.day === 5 && this.props.activeData) {
      dayNum = this.props.activeData.day;
    } else if (this.state.day !== 5) {
      dayNum = this.state.day;
    }

    return (
      <Dialog open={this.props.status} onClose={this.props.close}>
        <DialogTitle>Submit Sleep</DialogTitle>
        <DialogContent style={{ maxWidth: 500 }}>
          <DialogContentText>
            Complete the form below to submit your sleep cycle.
          </DialogContentText>
          <form className={classes.form}>
            <TextField
              defaultValue={formattedDate ? formattedDate : this.state.date}
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
              <Clock
                label="Sleep Start"
                id="startTime"
                onSuccess={this.handleClockSuccess}
              />
              <Clock
                label="Sleep End"
                id="endTime"
                onSuccess={this.handleClockSuccess_end}
              />
            </div>
            <DialogContentText style={{ textAlign: "right" }}>
              Morning Feeling:{" "}
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Morning")}
                variant={morningNum === 1 ? "contained" : "text"}
              >
                😴
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Morning")}
                variant={morningNum === 2 ? "contained" : "text"}
              >
                😐
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Morning")}
                variant={morningNum === 3 ? "contained" : "text"}
              >
                😌
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Morning")}
                variant={morningNum === 4 ? "contained" : "text"}
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
                variant={dayNum === 1 ? "contained" : "text"}
              >
                😴
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Daytime")}
                variant={dayNum === 2 ? "contained" : "text"}
              >
                😐
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Daytime")}
                variant={dayNum === 3 ? "contained" : "text"}
              >
                😌
              </Button>
              <Button
                size="small"
                className={classes.emoji}
                onClick={e => this.emojiToggle(e, "Daytime")}
                variant={dayNum === 4 ? "contained" : "text"}
              >
                😀
              </Button>
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={this.updateForm}
          >
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    id: state.auth.user.subject
  };
};

export default connect(
  mapStateToProps,
  { postSleepObject, updateSleepObject }
)(withStyles(styles)(SleepInputForm));
