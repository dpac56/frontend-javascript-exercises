module.exports.getKeys = function(testObject){
  var testArray = [];
  for (key in testObject){
    testArray.push(key);
  }
  return testArray;
};

module.exports.getValues = function(testObject){
  var testArray = [];
  for (key in testObject){
    testArray.push(testObject[key]);
  }
  return testArray;
};

module.exports.objectToArray = function(testObject){
  var testArray = [];
  for (key in testObject){
    var newString = key + " is " + testObject[key];
    testArray.push(newString);
  }
  return testArray;
};