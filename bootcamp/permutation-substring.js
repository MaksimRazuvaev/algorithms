// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    var charMap = {};

    for(var i = 0; i < sub.length; i++) {
        if (sub[i] in charMap) {
            charMap[sub[i]]++
        }else{
            charMap[sub[i]] = 1;
        }
    }

    for (var j = 0; j < str.length; j++) {
        if (str[j] in charMap) {
            charMap[str[j]] -= 1;
        }
    }

    for(var key in charMap) {
        if (charMap[key] > 0) {
            return false;
        }
    }
    return true;
};
