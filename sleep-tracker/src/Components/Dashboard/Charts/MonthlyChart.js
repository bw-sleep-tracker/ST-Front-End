import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import withWidth from "@material-ui/core/withWidth";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen
} from "@material-ui/core/colors";

const daysInMonth = (month, year) => {
  const num = new Date(year, month, 0).getDate();

  let array = [];

  for (let i = 1; i < num + 1; i++) {
    array.push(i);
  }
  return array;
};

console.log();

class MonthlyChart extends Component {
  state = {
    chartData: {
      label: "Day Of Month",
      labels: daysInMonth(6, 2019),
      datasets: [
        {
          label: "Hours Slept",
          data: [
            7,
            5,
            9,
            6,
            6,
            5,
            8,
            4,
            6,
            7,
            7,
            5,
            9,
            6,
            6,
            5,
            8,
            4,
            6,
            7,
            7,
            5,
            9,
            6,
            6,
            5,
            8,
            4,
            6,
            7
          ],
          backgroundColor: "rgba(33, 150, 243, 0.25)",
          borderColor: blue[500],
          lineTension: 0.2
        }
      ]
    }
  };

  render() {
    console.log(this.state.chartData.datasets[0].data);
    return (
      <Line
        data={this.state.chartData}
        height={400}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Hours Slept Per Date",
            fontSize: this.props.width === "xs" ? 12 : 18
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

export default withWidth()(MonthlyChart);
