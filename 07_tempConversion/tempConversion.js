const convertToCelsius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function (celcius) {
  let fahrenheit = (celcius * (9 / 5)) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

/*
1) Understanding the problem
- Formla to convert celcius to fahrenheit and vise versa
- Round off the result to 1 decimal value

2) Breaking down the problem
- 
*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
