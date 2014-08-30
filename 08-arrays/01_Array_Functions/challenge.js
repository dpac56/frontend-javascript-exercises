module.exports.reversePlusOne = function(testArray){
  testArray.reverse().unshift(1);
  return testArray;
};

module.exports.plusesEverywhere = function(testArray){
  var result = "";
  for (i = 0; i < testArray.length; i++){
    result = result + testArray[i].toString() + "+";
  }
  length =  result.length;
  return result.substring(0, length - 1);
};

module.exports.arrayQuantityPlusOne = function(testArray){
  return testArray.length + 1;
};