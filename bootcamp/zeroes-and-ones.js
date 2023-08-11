// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    var compareNum = 0;

    for (var i = 0; i < str.length; i++) {
        str[i] == 0 ? compareNum++ : compareNum--;
    }
    return compareNum == 0 ? true : false;
};
