import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

class YearlyTable extends Component {
  getEmoji = num => {
    if (num === 1) {
      return "😴";
    } else if (num === 2) {
      return "😐";
    } else if (num === 3) {
      return "😌";
    } else if (num === 4) {
      return "😀";
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Start</TableCell>
            <TableCell align="center">End</TableCell>
            <TableCell align="center">Morning Emoji</TableCell>
            <TableCell align="center">Daytime Emoji</TableCell>
            <TableCell align="center">Total Hours Asleep</TableCell>
            <TableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.data.map(item => (
            <TableRow key={item.date}>
              <TableCell align="center" component="th" scope="row">
                {item.date}
              </TableCell>
              <TableCell align="center">{item.start_sleep_time}</TableCell>
              <TableCell align="center">{item.end_sleep_time}</TableCell>
              <TableCell align="center" style={{ fontSize: "2rem" }}>
                {this.getEmoji(item.sleep_emotion)}
              </TableCell>
              <TableCell align="center" style={{ fontSize: "2rem" }}>
                {this.getEmoji(item.day_emotion)}
              </TableCell>
              <TableCell align="center">N/A</TableCell>
              <TableCell align="center">
                <Button variant="outlined" style={{ margin: 5 }}>
                  <i class="far fa-edit" />
                </Button>
                <Button variant="outlined" style={{ margin: 5 }}>
                  <i class="far fa-trash-alt" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(YearlyTable);
