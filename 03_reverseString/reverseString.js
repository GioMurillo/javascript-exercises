const reverseString = function(inputString) {
  let backwardString = '';
  let i = inputString.length - 1;
  if (inputString == '' || inputString == undefined){
    
  } else {
    do {
      backwardString += inputString[i];
      i--;
    } while (i>=0);
  }
  return backwardString;
};


// Do not edit below this line
module.exports = reverseString;
