import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Toolbar, Fab, Paper, Tabs, Tab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import SleepInputForm from "./SleepInputForm";

const styles = theme => ({
  tabsRoot: {
    flexGrow: 1
  },
  root: {
    display: "flex",
    justifyContent: "flex-end"
  },
  fab: {
    margin: theme.spacing(3),
    textAlign: "right"
  }
});

class DashboardContainer extends Component {
  state = {
    tabValue: 0,
    sleepInputStatus: false
  };

  changeTab = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };

  sleepInputToggle = () => {
    this.setState({ sleepInputStatus: !this.state.sleepInputStatus });
  };

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;

    return (
      <div>
        <Paper className={classes.tabsRoot}>
          <Tabs
            value={tabValue}
            onChange={this.changeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Daily" />
            <Tab label="Weekly" />
            <Tab label="Monthly" />
          </Tabs>
        </Paper>
        <Toolbar className={classes.root}>
          <Fab
            color="secondary"
            aria-label="Add"
            size="small"
            className={classes.fab}
            onClick={this.sleepInputToggle}
          >
            <AddIcon />
          </Fab>
        </Toolbar>
        <SleepInputForm
          status={this.state.sleepInputStatus}
          toggle={this.sleepInputToggle}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DashboardContainer);
