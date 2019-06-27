import React, { Component } from "react";
import { connect } from "react-redux";
import { getDailyData } from "../../store/actions/profileActions";

import { sleepCalc } from "../../util/sleepCalc";

import DailyChart from "./Charts/DailyChart";

class Daily extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getDailyData(this.props.id);
    }
  }

  render() {
    let sum;
    let difference;
    let content;

    if (Object.keys(this.props.dailyData).length) {
      sum = sleepCalc(
        this.props.dailyData.start_sleep_time,
        this.props.dailyData.end_sleep_time
      );

      sum = sum.split(":");
      console.log(sum);
      if (sum[1] < 15) {
        sum = parseInt(sum[0]);
      } else if (sum[1] >= 15 && sum[1] <= 45) {
        sum = parseInt(sum[0]) + 0.5;
      } else if (sum[1] > 45) {
        sum = parseInt(sum[0]) + 1;
      }
      console.log(sum);
      difference = 24 - sum;
      content = (
        <DailyChart
          data={this.props.dailyData}
          sum={sum}
          difference={difference}
        />
      );
    }

    return <div>{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    id: state.auth.user.subject,
    dailyData: state.profile.dailyData
  };
};

export default connect(
  mapStateToProps,
  { getDailyData }
)(Daily);
