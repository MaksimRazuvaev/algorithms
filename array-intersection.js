// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

// var arrayIntersection = function(arr1, arr2) {
//     var newArr = [];
//     for(var i = 0; i < arr1.length; i++) {
//         for(var j = 0; j < arr2.length; j++) {
//             if(arr1[i] == arr2[j]) {
//                 newArr.push(arr1[i])
//             }
//         }
//     }
//     return newArr;
// };

var arrayIntersection = function(arr1, arr2) {
    var myMap = {};
    var newArr = [];

    for(var i = 0; i < arr1.length; i++) {
        if(myMap[arr1[i]] === undefined) {
            myMap[arr1[i]] = 1;
        }else{
            myMap[arr1[i]]++;
        }
    }

    for(var j = 0; j < arr2.length; j++) {
        if(myMap[arr2[j]]) {
            newArr.push(arr2[j]);
            myMap[arr2[j]]--;
        }
    }
    
    return newArr;
}
