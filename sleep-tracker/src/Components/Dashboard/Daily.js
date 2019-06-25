import React, { Component } from "react";
import { connect } from "react-redux";
import { getDailyData } from "../../store/actions/profileActions";

import DailyChart from "./Charts/DailyChart";

class Daily extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getDailyData(this.props.id);
    }
  }

  render() {
    return (
      <div>
        <DailyChart />
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
  { getDailyData }
)(Daily);
