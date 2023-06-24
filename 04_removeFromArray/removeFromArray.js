const removeFromArray = function(inputString, removeValue) {
  let outputString='';
  for (i=0;i<inputString.length-1;i++) {
    if (inputString[i]!=removeValue) {
      outputString+=inputString[i];
    } 
  }
  return outputString;
};

// Do not edit below this line
module.exports = removeFromArray;
