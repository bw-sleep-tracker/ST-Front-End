import React, { Component } from "react";
import { connect } from "react-redux";

import { sleepCalc } from "./sleepCalc";
import { getYearlyAll } from "../store/actions/profileActions";

class Recommendation extends Component {
  componentDidMount() {
    this.props.getYearlyAll(this.props.id);
  }

  maxMood = moodArray => Math.max(...moodArray);

  calcMode = numArray => {
    // results can be multimodal
    let modes = [],
      count = [],
      i,
      number,
      maxIndex = 0;

    for (i = 0; i < numArray.length; i += 1) {
      number = numArray[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
        maxIndex = count[number];
      }
    }

    for (i in count)
      if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
          modes.push(Number(i));
        }
      }

    return modes;
  };

  render() {
    const moodArray = this.props.yearlyData.map(
      day => day.day_emotion + day.sleep_emotion
    );
    const maxMood_ = this.maxMood(moodArray);
    const optimalSleep = this.props.yearlyData
      .filter(day => day.day_emotion + day.sleep_emotion === maxMood_)
      .map(day =>
        parseInt(
          sleepCalc(day.start_sleep_time, day.end_sleep_time).split(":")[0],
          10
        )
      );
    return (
      <div>
        {this.calcMode(optimalSleep).length === 1
          ? `Your mood score tends to be highest when you sleep ${this.calcMode(
              optimalSleep
            )} hours.`
          : `Your mood score tends to be highest when you sleep either ${
              this.calcMode(optimalSleep)[0]
            } or ${this.calcMode(optimalSleep)[1]} hours.`}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.auth.user.subject,
    yearlyData: state.profile.yearlyData
  };
};

export default connect(
  mapStateToProps,
  { getYearlyAll }
)(Recommendation);
