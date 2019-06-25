import React, { Component } from "react";
import { connect } from "react-redux";
import { getMonthlyData } from "../../store/actions/profileActions";

import MonthlyChart from "./Charts/MonthlyChart";

class Monthly extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getMonthlyData(this.props.id);
    }
  }

  render() {
    return (
      <div style={{ width: "90%", margin: "auto" }}>
        <MonthlyChart />
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
  { getMonthlyData }
)(Monthly);
