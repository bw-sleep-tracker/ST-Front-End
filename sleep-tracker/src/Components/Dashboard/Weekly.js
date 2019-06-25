import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeeklyData } from "../../store/actions/profileActions";

import WeeklyChart from "./Charts/WeeklyChart";

class Weekly extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getWeeklyData(this.props.id);
    }
  }

  render() {
    return (
      <div style={{ width: "90%", margin: "auto" }}>
        <WeeklyChart />
      </div>
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
  { getWeeklyData }
)(Weekly);
