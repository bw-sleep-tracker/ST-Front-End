import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import withWidth from "@material-ui/core/withWidth";

import { green } from "@material-ui/core/colors";

class WeeklyChart extends Component {
  state = {
    chartData: {
      labels: this.props.days,
      datasets: [
        {
          label: "Hours Slept",
          data: this.props.hours,
          backgroundColor: "rgba(56, 142, 60, 0.1)",
          borderColor: green[600],
          lineTension: 0.2
        }
      ]
    }
  };
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Line
        data={this.state.chartData}
        height={400}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Hours Slept This Week",
            fontSize: this.props.width === "xs" ? 12 : 18,
            fontColor: "#E6E6E6"
          },

          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default withWidth()(WeeklyChart);
