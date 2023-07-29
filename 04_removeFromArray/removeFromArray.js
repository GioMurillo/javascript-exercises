const removeFromArray = function(originalArray, ...args) {
  outputArray = [];
  valuesToRemove = Array.from(args); //go from array-like to array
  console.log(valuesToRemove);

  originalArray.forEach((element) => {
    if(!valuesToRemove.includes(element)) {
      outputArray.push(element);
    };
  });
  
  console.log(outputArray);

  return outputArray;

};

const logArrayElements = (element, index) => {
  console.log(`a[${index}] = ${element}`);
};


// Do not edit below this line
module.exports = removeFromArray;
