/* SLEEP DURATION CALCULATOR */

export const sleepCalc = (start, end) => {
  // split strings
  start = start.split(":");
  end = end.split(":");

  // logic to handle start and end times.
  // earliest you can sleep is 5pm the previous day. latest you can wake up is 11:59 the next day.
  // new Date(year, month, day, hours, minutes, seconds, milliseconds)
  const startDate =
    parseInt(start[0], 10) >= 17 && parseInt(start[0], 10) <= 23
      ? new Date(1999, 1, 1, start[0], start[1], 0)
      : new Date(1999, 1, 2, start[0], start[1], 0);
  const endDate = new Date(1999, 1, 2, end[0], end[1], 0);

  // math
  let diff = endDate.getTime() - startDate.getTime();
  const hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(diff / 1000 / 60);

  // If using time pickers with 24 hours format, add the below line get exact hours
  if (hours < 0) hours = hours + 24;

  return (
    (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes
  );
};

// console.log(sleepCalc("22:00", "06:00")); // 10:00
