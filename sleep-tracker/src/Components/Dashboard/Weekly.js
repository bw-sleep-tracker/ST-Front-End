import React from "react";
import { connect } from "react-redux";
// import {} from "../../store/actions";

import WeeklyChart from "./Charts/WeeklyChart";

const Weekly = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <WeeklyChart />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    registering: state.registering,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(Weekly);
