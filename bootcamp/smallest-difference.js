// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:

// var smallestDifference = function (arr1, arr2) {
//     var arrayToReturn = [0, 0];
//     var minDifference = Infinity;

//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//             let minNum = Math.min(arr1[i], arr2[j]);
//             let maxNum = Math.max(arr1[i], arr2[j]);

//             if(maxNum - minNum < minDifference) {
//                 minDifference = maxNum - minNum;
//                 arrayToReturn[0] = minNum;
//                 arrayToReturn[1] = maxNum;
//             } 
//         }
//     }
//     return arrayToReturn;
// };

var smallestDifference = function (arr1, arr2) {
    var arrayToReturn = [];
    var minDifference = Infinity;
    var left = 0;
    var right = 0;

    while (left < arr1.length && right < arr2.length) {

        var currentDif = Math.abs(arr1[left] - arr2[right]);

        if ( currentDif < minDifference) {
            minDifference = currentDif;
            arrayToReturn = [arr1[left], arr2[right]];
        }

        if (arr1[left] < arr2[right]) {
            left++;
        } else if (arr2[right] < arr1[left]) {
            right++
        } else {
            return [arr1[left], arr2[right]];
        }
    }

    return arrayToReturn;
};

