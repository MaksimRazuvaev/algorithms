// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...

  function compareNumbers(a, b) {
    return a - b;
  }

  newArr = arr.sort(compareNumbers);
  console.log(newArr);
  maxNumber = 0;

  var accumulator = 0;
  for (var i = 0; i < arr.length; i++){

    accumulator += arr[i];
    
    if (accumulator <= 60) {
      maxNumber++;
      console.log("Max Number " + maxNumber)
    } else {
      return maxNumber;
    }
  }
  return maxNumber;
};
