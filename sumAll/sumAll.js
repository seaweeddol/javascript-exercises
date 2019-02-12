const sumAll = function(firstNum, secondNum) {
  let sum = 0;
  let startNum = firstNum;
  let endNum = secondNum;

  if(secondNum < firstNum){
    startNum = secondNum;
    endNum = firstNum;
  }

  for(startNum; startNum <= endNum; startNum++){
    sum += startNum;
  }
  return sum;
}

module.exports = sumAll
