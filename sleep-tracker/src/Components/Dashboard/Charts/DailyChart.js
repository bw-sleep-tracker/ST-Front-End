import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import withWidth from "@material-ui/core/withWidth";
import { red, blue, green, deepPurple } from "@material-ui/core/colors";

class DailyChart extends Component {
  state = {
    chartData: {
      labels: ["Time Awake", "Time Asleep"],

      datasets: [
        {
          data: [16, 8],
          backgroundColor: [deepPurple[100], blue[200]]
        }
      ]
    }
  };

  render() {
    const { width } = this.props;

    return (
      <Pie
        data={this.state.chartData}
        height={500}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: "Awake Time vs Sleep Time For Today",
            fontSize: width === "xs" ? 12 : 18
          }
        }}
      />
    );
  }
}

export default withWidth()(DailyChart);
