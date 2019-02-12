const removeFromArray = function(arr, elementsToRemove) {
  let args = Array.from(arguments);

  for(let i = 1; i < args.length; i++){
    arr.splice(arr.indexOf(args[i]), 1);
  }

  return arr;
}

module.exports = removeFromArray
