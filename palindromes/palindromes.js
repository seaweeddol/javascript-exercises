const palindromes = function(input) {
  input = input.toLowerCase().replace(/[^\w\s]|_/g, '');

  let first = 0;
  let last = input.length - 1;

  for(let i = 0; i < input.length; i++) {
     if (input[first] != input[last]){
      return false;
      break;
    } else {
      first++;
      last--;
      return true;
    }
  }
}

module.exports = palindromes
