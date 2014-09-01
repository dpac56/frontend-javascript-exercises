module.exports.sumNumbers = function(testArray){
  var sum = 0;
  for (var i = 0; i < testArray.length; i++){
    sum += testArray[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(testString){
  var testArray = testString.split(',');
  for (var i = 0; i < testArray.length; i++){
    testArray[i] = testArray[i].toLowerCase();
  }
  return testArray;
  
};

module.exports.addIndex = function(testArray){
  var finalArray = [];
  for (var i = 0; i < testArray.length; i++){
    var newString = i + " is " + testArray[i];
    finalArray.push(newString);
  }
  return finalArray;
};

