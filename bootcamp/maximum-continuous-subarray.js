const maxSumArray = function(numbers) {
  var maxSum = numbers[0];
  var currentSum = numbers[0];

  if (numbers.length === 2 || numbers.every((x) => x >= 0)) {
    return numbers.reduce((a, b) => a + b, 0);
  }

  for (var i = 1; i < numbers.length; i++) {
    currentSum = Math.max(numbers[i], numbers[i] + currentSum);
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum;
};
