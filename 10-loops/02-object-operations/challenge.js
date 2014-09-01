module.exports.copy = function(testObject){
  var newObject = {};
  for (key in testObject){
    newObject[key] = testObject[key];
  }
  return newObject;
};

module.exports.extend = function(dest, src){
  for (key in src){
    dest[key] = src[key];
  }
  return dest;
};

module.exports.hasElems = function(testObject, testArray){
  for (var i = 0; i < testArray.length; i++){
    if (testArray[i] in testObject){
    } else {
      return false;
      break;
    }
  }
  return true;
};