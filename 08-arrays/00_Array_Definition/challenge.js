module.exports.newArray = function(first, second, third, fourth){
  return [first, second, third, fourth];
};

module.exports.firstAndLast = function(testArray){
  return [testArray[0], testArray[testArray.length - 1]];
};