const removeFromArray = function(originalArray, ...args) {
  let outputArray=[];
  let argsArray=Array.from(args);
  outputArray = originalArray;
  //using loops for now, but can go back and change to forEach() later
  for (let i=0; i<originalArray.length; i++) {
    for (let j=0; j<argsArray.length; j++){
      if (originalArray[i]===argsArray[j]) {
        console.log("Comparing " + originalArray[i] + "["+i+"]" + " and " 
        + argsArray[j] + "["+j+"]");
        console.log("Found an element to remove:" + argsArray[j]);
        outputArray.splice(i,1);
        console.log("Deprecate i");
        i--;
      }
      console.log("Comparing " + originalArray[i] + "["+i+"]" + " and " 
        + argsArray[j] + "["+j+"]");
    }
    console.log("outputArray= " + outputArray); 
  }
  console.log("outputArray after loops = " + outputArray);
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
