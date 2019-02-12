const reverseString = function() {
  let string = "123! abc!";
  let stringReverse = "";

  for(let i = string.length - 1; i >= 0; i--){
    stringReverse += string[i];
  }
  return stringReverse;
}

module.exports = reverseString
