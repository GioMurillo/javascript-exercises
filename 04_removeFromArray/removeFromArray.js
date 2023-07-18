const removeFromArray = function(originalArray, ...args) {
  let outputArray=[];
  //using loops for now, but can go back and change to forEach() later
  for (let i=0; i<originalArray.length; i++) {
    for (let j=0; j<args.length; j++){
      if (originalArray[i]===args[j]) {
        j++;
      }
      console.log(originalArray[i] + " and " + args[j]);
    }
    outputArray.push(originalArray[i]);
    console.log("outputArray= " + outputArray); 
  }
  console.log("outputArray after loops = " + outputArray);
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
