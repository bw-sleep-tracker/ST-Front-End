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

const chartColors = () => {
  let colors1 = [
    red[200],
    red[300],
    pink[200],
    pink[300],
    purple[200],
    purple[300],
    deepPurple[200],
    deepPurple[300],
    teal[200],
    teal[300]
  ];

  let colors2 = [
    indigo[200],
    indigo[300],
    blue[200],
    blue[300],
    lightBlue[200],
    lightBlue[300],
    cyan[200],
    cyan[300],
    lightGreen[200],
    lightGreen[300],
    green[200],
    green[300]
  ];

  return shuffle(colors1).concat(shuffle(colors2));
};

const shuffle = array => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default chartColors;
