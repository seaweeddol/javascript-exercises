const sumAll = function(firstNum, secondNum) {
  let sum = 0;

  for(firstNum; firstNum <= secondNum; firstNum++){
    sum += firstNum;
  }
  return sum;
}

module.exports = sumAll
