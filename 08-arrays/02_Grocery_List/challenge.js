module.exports.addItem = function(item, testArray){
  if (testArray.indexOf(item) == -1){
    testArray.push(item);
  }

  return testArray;
};

module.exports.reverseSortedList = function(testArray){
  return testArray.sort().reverse();
};