const removeFromArray = function(arr, elementsToRemove) {
  arr.splice(arr.indexOf(elementsToRemove), 1);
  return arr;
}

module.exports = removeFromArray
