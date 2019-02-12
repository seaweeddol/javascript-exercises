const removeFromArray = function(arr, elementsToRemove) {
  let args = Array.from(arguments);

  for(let i = 1; i < args.length; i++){
    if(arr.indexOf(args[i]) != -1){
      arr.splice(arr.indexOf(args[i]), 1);
    }
  }

  return arr;
}

module.exports = removeFromArray
