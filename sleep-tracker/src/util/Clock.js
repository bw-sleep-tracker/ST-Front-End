import React, { useState, useEffect } from "react";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Clock = props => {
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect(() => {
    props.onSuccess(selectedDate);
  }, [selectedDate]);

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
      />
    </MuiPickersUtilsProvider>
  );
};

export default Clock;
