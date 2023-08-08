// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

// var concertFlyer = function (magazine, flyer) {
//     var magArr = magazine.toLowerCase().split(" ");
//     var flyArr = flyer.toLowerCase().split(" ");
//     var count = 0;
//     var toReturn;
    
//     for (var i = 0; i < magArr.length; i++) {
//         for (var j = 0; j < flyArr.length; j++) {
//             if (flyArr[j] == magArr[i]) {
//                 count++;
//             }
//         }
//     }

//     if (flyArr.length == count) {
//         toReturn = true;
//     } else {
//         toReturn = false;
//     }

//     return toReturn;
// };

var concertFlyer = function (magazine, flyer) {
    var magArr = magazine.toLowerCase().split(" ");
    var flyArr = flyer.toLowerCase().split(" ");

    var magasMap = {};
    var flyMap = {};
    
    for (var i = 0; i < magArr.length; i++) {
        if (!magasMap[magArr[i]]) {
            magasMap[magArr[i]] = 1;
        } else {
            magasMap[magArr[i]]++;
        }
    }

    for (var i = 0; i < flyArr.length; i++) {
        if (!flyMap[flyArr[i]]) {
            flyMap[flyArr[i]] = 1;
        } else {
            flyMap[flyArr[i]]++;
        }
    }

    for (var key in flyMap) {
        if (magasMap[key] !== flyMap[key]) {
            return false;
        }
    }
    return true;
};