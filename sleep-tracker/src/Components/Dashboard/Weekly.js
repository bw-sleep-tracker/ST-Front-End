import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeeklyData } from "../../store/actions/profileActions";

import { sleepCalc } from "../../util/sleepCalc";

import WeeklyChart from "./Charts/WeeklyChart";

class Weekly extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getWeeklyData(this.props.id);
    }
  }

  render() {
    let days;
    let hours;
    let content;
    let sum;

    if (this.props.weeklyData.length > 0) {
      days = this.props.weeklyData.map(item => item.day);

      hours = this.props.weeklyData.map(item => {
        sum = sleepCalc(item.start_sleep_time, item.end_sleep_time);
        sum = sum.split(":");

        if (sum[1] < 15) {
          sum = parseInt(sum[0]);
        } else if (sum[1] >= 15 && sum[1] <= 45) {
          sum = parseInt(sum[0]) + 0.5;
        } else if (sum[1] > 45) {
          sum = parseInt(sum[0]) + 1;
        }
        return sum;
      });

      days = days.reverse();
      hours = hours.reverse();

      content = <WeeklyChart hours={hours} days={days} />;
    }

    return <div style={{ width: "90%", margin: "auto" }}>{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    id: state.auth.user.subject,
    weeklyData: state.profile.weeklyData
  };
};

export default connect(
  mapStateToProps,
  { getWeeklyData }
)(Weekly);
