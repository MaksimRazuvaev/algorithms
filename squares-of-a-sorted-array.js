// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

// var sortedSquares = function(arr) {
//     function compareNumbers(a, b) {
//         return a - b;
//     }

//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         let square = arr[i] * arr[i];
//         newArr.push(square);
//     }
//     return newArr.sort(compareNumbers);
// };


// var sortedSquares = function(arr) {
//     var newArr = new Array(arr.length);

//     indx1 = 0;
//     indx2 = arr.length -1;
//     indx3 = newArr.length -1;

//     while(indx1 <= indx2) {
//         let left = arr[indx1]**2;
//         let right = arr[indx2]**2;

//         if(left > right) {
//             newArr[indx3] = left;
//             indx1++
//         }else{
//             newArr[indx3] = right;
//             indx2--;
//         }
//         indx3--;
//     }
//     return newArr;    
// };

var sortedSquares = function(arr) {
    
    var newArr = arr.map(function(num) {
        return num ** 2;
    })

    var sortedArr = newArr.sort(function(a,b) {
        return a-b;
    })

    return sortedArr;
};
