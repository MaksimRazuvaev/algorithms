// Write a function that takes in an array of digits representing a non negative integer and add one to it. 
// The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

// var plusOne = function(digits) {

//     if (digits.length == 0) {
//         digits.unshift(1);
//         return digits;
//     }

//     var transition = 1;
//     for (var i = digits.length - 1; i >= 0; i--) {
//         console.log(digits[i] + transition);
//         if (digits[i] + transition >= 10) {
//             digits[i] = (digits[i] + transition) % 10;
//             transition = 1;
//         }  else {
//             digits[i] += transition;
//             transition = 0;
//         }
//         if (i == 0 && digits[0] == 0) {
//             digits.unshift(transition);
//         }
//     }
//     return digits;
// };

var plusOne = function(digits) {
    var transition = 1;
    for (var i = digits.length - 1; i >= 0; i--) {
        var plusOne = digits[i] + transition;
        var sum = 0;
        transition = 0;

        if (plusOne > 9) {
            transition = 1;
            sum = 10 - plusOne;
        } else {
            sum = plusOne;
        }
        digits[i] = sum;
    }

    if (transition) {
        digits.unshift(transition);
    }

    return digits;
};
