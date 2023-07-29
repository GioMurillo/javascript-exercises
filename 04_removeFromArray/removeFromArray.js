const removeFromArray = function(originalArray, ...args) {
  outputArray = [];
  valuesToRemove = Array.from(args); //go from array-like to array
  console.log(valuesToRemove);

  outputArray = originalArray.filter( () => args);  
  
  console.log(outputArray);

  return outputArray;

};


// Do not edit below this line
module.exports = removeFromArray;
