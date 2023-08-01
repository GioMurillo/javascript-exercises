const sumAll = function(num1, num2) {
  var sum = 0;

  if(typeof num1 != 'number' || typeof num2 != 'number'){
    return 'ERROR';
  } else if (num1<0 || num2<0) {
    return 'ERROR';
  } else {
    if (num1 == num2) {
      return 0;
    } else if (num1 > num2) {
        sum = num2;
        for(i=num2+1; i<num1+1; i++) {
          sum += i;
        }
    } else {
       sum = num1;
       for(i=num1+1; i<num2+1; i++) {
        sum += i;
       }
    }
    return sum;
  }
};


// Do not edit below this line
module.exports = sumAll;
