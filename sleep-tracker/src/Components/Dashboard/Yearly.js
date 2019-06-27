import React, { Component } from "react";
import { connect } from "react-redux";
import { getYearlyAll } from "../../store/actions/profileActions";

import YearlyTable from "./Charts/YearlyTable";

class Yearly extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getYearlyAll(this.props.id);
    }
  }

  render() {
    return (
      <YearlyTable
        data={this.props.yearlyData}
        editSleep={this.props.editSleep}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    id: state.auth.user.subject,
    yearlyData: state.profile.yearlyData
  };
};

export default connect(
  mapStateToProps,
  { getYearlyAll }
)(Yearly);
