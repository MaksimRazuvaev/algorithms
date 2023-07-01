// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    var i = 0;

    while(true) {
        var currentValue = i * i;

        if(currentValue > num) {
            return false;
        } else if(currentValue < num) {
            i++;
        } else {
            return true;
        }
    }

};
