// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers 
// representing a meeting start and end time. Return a new 2D array such that overlapping meeting 
// blocks are condensed into combined meeting blocks

// var mergeMeetingTimes = function(arr) {
//     var minH = Infinity;
//     var maxH = 0;
//     var arrToReturn = [];
//     for (var i = 0; i < arr.length; i++) {
//         minH = Math.min(arr[i][0], minH);
//         maxH = Math.max(arr[i][1], maxH)
//     }
//     arrToReturn.push([minH, maxH]);

//     return arrToReturn;
// };


var mergeMeetingTimes = function(arr) {
    var deepCopyArr = JSON.parse(JSON.stringify(arr));
    var sortedArr = deepCopyArr.sort((a, b) => a[0] - b[0]);
    var resultArr = [deepCopyArr[0]];

    for (var i = 1; i < sortedArr.length; i++) {
        var currentArr = resultArr[resultArr.length - 1];
        var nextArr = sortedArr[i];

        if (currentArr[1] >= nextArr[0]) {
            if (currentArr[1] < nextArr[1]) {
                currentArr[1] = nextArr[1];
            }

        } else {
            resultArr.push(nextArr);
        }
    }
    return resultArr;
  };
