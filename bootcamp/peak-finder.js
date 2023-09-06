// const peakFinder = function(nums) {
//   // TODO: Write a function that takes an array of integers containing exactly one peak.
//   // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

//   var isPeak = nums[0];

//   for(var i = 1; i < nums.length; i++){
//     nums[i] > isPeak ? isPeak = nums[i] : isPeak;
//   }
//   return isPeak;
// };

const peakFinder = function(nums) {
  var arrBegining = 0
  var arrEnd = nums.length - 1;

  while (arrBegining < arrEnd) {
    // parseInt() function to make (arrBegining + arrEnd) / 2 whole number without decimals 
    const midIndex = parseInt((arrBegining + arrEnd) / 2);

    // slash nums aray by half on each step and continue with rest part
    // and check if the midle of the rest part going up or down
    nums[midIndex] > nums[midIndex + 1] ? (arrEnd = midIndex) : (arrBegining = midIndex + 1);
  }

  return nums[arrBegining];

};