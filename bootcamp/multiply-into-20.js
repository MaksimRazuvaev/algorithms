const multiplyInto20 = function(arr) {
 var newMap = {};

 for (var i = 0; i < arr.length; i++) {
  let currentNumber = arr[i];

  let neededNumber = 20 / currentNumber;

  if (newMap[neededNumber]) {
    return true;
  } else {
    newMap[currentNumber] = true;
  }
 }
 return false;
};
