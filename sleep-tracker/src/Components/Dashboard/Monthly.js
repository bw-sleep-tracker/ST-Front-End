import React from "react";
import { connect } from "react-redux";
import {} from "../../store/actions";

import MonthlyChart from "./Charts/MonthlyChart";

const Monthly = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <MonthlyChart />
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
)(Monthly);
