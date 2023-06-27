// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    var count = 0;

    for (var i = 0; i < arr.length-1; i++){
        for (var j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]){
                count = count + 1;
            }
        }
    }
    console.log(count);
    if (count == 0) {
        return true;
    }else {
        return false;
    }
};
