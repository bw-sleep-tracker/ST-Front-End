import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Toolbar, Fab, Paper, Tabs, Tab, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Recommendations from "./Recommendations";
import SleepInputForm from "./SleepInputForm";
import Daily from "./Daily";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import Yearly from "./Yearly";

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
    sleepInputStatus: false,
    activeData: null,
    recStatus: false
  };

  changeTab = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };

  toggleRecStatus = () => {
    this.setState({ recStatus: !this.state.recStatus });
  };

  sleepInputOpen = () => {
    this.setState({ sleepInputStatus: true });
  };

  sleepInputClose = () => {
    this.setState({ sleepInputStatus: false, activeData: null });
  };

  editSleep = data => {
    this.setState(() => {
      return {
        activeData: data,
        sleepInputStatus: !this.state.sleepInputStatus
      };
    });
  };

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;

    let content;

    if (this.state.tabValue === 0) {
      content = <Daily />;
    } else if (this.state.tabValue === 1) {
      content = <Weekly />;
    } else if (this.state.tabValue === 2) {
      content = <Monthly />;
    } else if (this.state.tabValue === 3) {
      content = <Yearly editSleep={this.editSleep} />;
    }

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
            <Tab label="Yearly" />
          </Tabs>
        </Paper>
        <Toolbar className={classes.root}>
          <Fab
            color="secondary"
            aria-label="Add"
            size="small"
            className={classes.fab}
            onClick={this.sleepInputOpen}
          >
            <AddIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="Add"
            size="small"
            variant="extended"
            style={{ paddingLeft: 15, paddingRight: 15 }}
            onClick={this.toggleRecStatus}
          >
            Recommendations
          </Fab>
        </Toolbar>
        <Paper style={{ width: "90%", margin: "auto" }}>{content}</Paper>
        <SleepInputForm
          status={this.state.sleepInputStatus}
          close={this.sleepInputClose}
          activeData={this.state.activeData}
        />
        <Recommendations
          status={this.state.recStatus}
          toggle={this.toggleRecStatus}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DashboardContainer);
