const removeFromArray = function(inputString, removeValue) {
  let outputString='';
  let j=0;
  for (i=0;i<inputString.length;i++) {
    if (inputString[i]!=removeValue) {
      outputString[i]=inputString[i];
      j++;
    } else {
      j++;
    }
  }
  return outputString;
};

// Do not edit below this line
module.exports = removeFromArray;
