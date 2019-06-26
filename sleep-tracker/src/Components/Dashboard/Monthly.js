import React, { Component } from "react";
import { connect } from "react-redux";
import { getMonthlyData } from "../../store/actions/profileActions";

import { sleepCalc } from "../../util/sleepCalc";

import MonthlyChart from "./Charts/MonthlyChart";

class Monthly extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getMonthlyData(this.props.id);
    }
  }

  render() {
    let graphData = [];

    console.log(this.props.monthlyData);

    graphData = this.props.monthlyData.map(item => {
      return parseInt(sleepCalc(item.start_sleep_time, item.end_sleep_time));
    });

    let content;

    if (graphData.length > 0) {
      content = <MonthlyChart data={graphData} />;
    }

    return <div style={{ width: "90%", margin: "auto" }}>{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    id: state.auth.user.subject,
    monthlyData: state.profile.monthlyData
  };
};

export default connect(
  mapStateToProps,
  { getMonthlyData }
)(Monthly);
