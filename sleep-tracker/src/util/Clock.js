import React, { useState, useEffect } from "react";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";

const Clock = props => {
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect(() => {
    props.onSuccess(moment(selectedDate).format("HH:mm"));
  }, [selectedDate]);

  console.log(selectedDate);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        autoOk
        placeholder={props.placeholder}
        variant="inline"
        mask="__:__ _M"
        label={props.label}
        value={selectedDate}
        onChange={handleDateChange}
        style={{ width: 150, margin: "25px 8px" }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Clock;
