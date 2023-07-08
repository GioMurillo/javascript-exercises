const removeFromArray = function(originalArray, ...args) {
  let inputArray=[];
  let outputArray=[];
  outputArray = args;
  console.log(inputArray);
  console.log(originalArray);
  //using loops for now, but can go back and change to forEach() later
  for (i=0;i<originalArray.length-1;i++) {
    for (j=0;j<args.length-1;j++){
      if (originalArray[i]!=args[j]) {
        outputArray.push(args[j]);
      } 
    }
  }
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
