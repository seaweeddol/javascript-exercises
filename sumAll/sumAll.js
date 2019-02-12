const sumAll = function(firstNum, secondNum) {
  let sum = 0;
  let startNum = firstNum;
  let endNum = secondNum;

  if(firstNum < 0 || secondNum < 0 || typeof firstNum == "string" || typeof secondNum == "string"){
    return 'ERROR';
  } else if(secondNum < firstNum){
    startNum = secondNum;
    endNum = firstNum;
  }

  for(startNum; startNum <= endNum; startNum++){
    sum += startNum;
  }
  return sum;
}

module.exports = sumAll
