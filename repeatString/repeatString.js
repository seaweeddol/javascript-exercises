const repeatString = function(string, num) {
  let print = "";
  if(num == -1) {
    return 'ERROR';
  } else {
    for(let i = 0; i < num; i++){
      print += string;
    }
  }
  return print;
}

module.exports = repeatString
