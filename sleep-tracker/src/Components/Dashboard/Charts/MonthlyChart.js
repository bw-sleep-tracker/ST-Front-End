import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import chartColors from "./chartColors";
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

class MonthlyChart extends Component {
  state = {
    chartData: {
      label: "Day Of Month",
      labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30
      ],
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
          backgroundColor: deepPurple[500]
        }
      ]
    }
  };

  render() {
    console.log(this.state.chartData.datasets[0].data);
    return (
      <Bar
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
