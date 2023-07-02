// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    var newArr = [];

    function sortedArray(a, b) {
    return a - b;
    }

    for (var i = 0; i < arr1.length + arr2.length; i++) {
        if (i < arr1.length) {
            newArr[i] = arr1[i];
        } else {
            newArr[i] = arr2[i - arr1.length];
        }
    }
    return newArr.sort(sortedArray);
};

/*var mergeSorted = function (arr1, arr2) {
    var newArr = [];

    var num1 = 0;
    var num2 = 0;

    while(num1 < arr1.length && num2 < arr2.length) {
        if (arr1[num1] < arr2[num2]) {
            newArr.push(arr1[num1]);
            num1++;
        } else {
            newArr.push(arr2[num2]);
            num2++;
        }
    }

    while (num1 < arr1.length) {
        newArr.push(arr1[num1]);
        num1++;
    }

    while (num2 < arr2.length) {
        newArr.push(arr2[num2]);
        num2++;
    }
    return newArr;
};*/