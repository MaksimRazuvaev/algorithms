// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

// var commonElement = function(arr1, arr2) {
//     var myNumber;
//     for(var i = 0; i < arr1.length; i++) {
//         for(var j = 0; j < arr2.length; j++) {
//             if(arr1[i] == arr2[j]) {
//                 return myNumber = arr1[i];
//             }
//         }
//     }
//     return myNumber;
// };

var commonElement = function(arr1, arr2) {
    var myMap = new Map();
    var myNumber;

    for (var i = 0; i < arr1.length; i++) {
        myMap.set(arr1[i], true);
    }

    for(var i = 0; i < arr2.length; i++) {
        if(myMap.has(arr2[i])) {
            myNumber = arr2[i];
        }
    }
    return myNumber;
}