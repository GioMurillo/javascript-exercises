const sumAll = function(num1, num2) {
  var sum = 0;
  if(num1.typeof != 'number' || num2.typeof != 'number'){
    return 'ERROR';
  } else if (num1 < 0 || num2 <0) {
    return 'ERROR';
  } else {
    if (num1 == num2) {
      return 0;
    } else if (num1 > num2) {
        for(i = num2; i < num1; i++) {
          sum += i;
        }
    } else {
       for(i=num1; i< num2; i++) {
         sum += 1;
       }
    }
  }
};


// Do not edit below this line
module.exports = sumAll;
