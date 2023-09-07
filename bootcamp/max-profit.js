// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

var maxProfit = function (prices) {
    var maximumProfit = 0;

    for (var i = 0; i < prices.length; i++) {
        for (var j = i + 1; j < prices.length; j++ ) {
            var currentProfit = 0;
            if (prices[i] < prices[j]) {
                currentProfit = prices[j] - prices[i]; 
            } if (currentProfit > maximumProfit) {
                maximumProfit = currentProfit;
            } 
        }
    }

    return maximumProfit;
};


// var maxProfit = function (prices) {
//     var smallest = Infinity;
//     var bestProfit = 0;
  
//     for (var i = 0; i < prices.length; i++) {
//       var price = prices[i];
//       smallest = Math.min(smallest, price);
//       bestProfit = Math.max(bestProfit, price - smallest);
//     }
//     return bestProfit;
// };
