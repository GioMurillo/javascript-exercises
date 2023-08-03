const convertToCelsius = function(fTemp) {
  const cTemp = (fTemp - 32)*5/9
  function round(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    var n = (num * p) * (1 + Number.EPSILON);
    return Math.round(n) / p;
  }
  if(cTemp - Math.floor(cTemp) !== 0){
    return round(cTemp,1);
  } else {
    return round(cTemp);
  }

};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
