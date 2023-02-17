const repeatString = function(inputString, repeatQuantity) {
  let i = 0;
  let outputString = '';
  do {
    outputString += inputString;
    i++;
  }
  while (i < repeatQuantity);

  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
