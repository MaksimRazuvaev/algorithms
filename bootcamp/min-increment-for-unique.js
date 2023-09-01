// Write a function to take an array of integers and return the minimum number of increments required across the 
//array to ensure that every number is unique

const minIncrement = function(nums) {
    var anUniqObject = {};
    var counter = 0;

    for (var i = 0; i < nums.length; i++) {
        while (anUniqObject[nums[i]] === true ) {
            nums[i]++;
            counter++;
        }

        anUniqObject[nums[i]] = true;
    }
    return counter;
};
