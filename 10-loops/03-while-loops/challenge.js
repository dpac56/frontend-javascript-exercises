module.exports.stream = function(conditionalFn, actionFn){
  while (conditionalFn()){
    actionFn();
  }
};

module.exports.sumNumbers = function(testArray){
  var i = 0;
  var sum = 0;
  while (i < testArray.length){
    sum += testArray[i];
    i++;
  }
  return sum;
};

