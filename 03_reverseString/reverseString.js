let backwardString = '';
const reverseString = function(inputString) {
  let i = inputString.length - 1;
  do {
    backwardString += inputString[i];
    i--;
  } while (i>=0);
  return backwardString;
};


// Do not edit below this line
module.exports = reverseString;
