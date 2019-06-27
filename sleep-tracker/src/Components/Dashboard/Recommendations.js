import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";

import Recommendation from "../../util/Recommendation";

const styles = theme => ({});

const Recommendations = props => {
  return (
    <Dialog open={props.status} onClose={props.toggle}>
      <DialogTitle>Recommendations</DialogTitle>
      <DialogContent style={{ paddingBottom: 25 }}>
        <Recommendation />
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(Recommendations);
