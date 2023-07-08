const removeFromArray = function(originalArray, ...args) {
  let inputArray=[];
  let outputArray=[];
  outputArray = args;
  for (i=0;i<inputArray.length-1;i++) {
    for (j=0;j<args.length-1;j++){
      if (inputArray[i]!=args[j]) {
        outputArray+=inputArray[i];
      } 
    }
    
  }
  return outputString;
};

// Do not edit below this line
module.exports = removeFromArray;
