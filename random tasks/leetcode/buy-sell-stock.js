// You are given an integer array prices where prices[i] is the price
// of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock.
// You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   const array = [15, 16, 17, 18, 19];

//   function getMaxAndMin(a, b, index) {
//     // const getMax = (a, b) => Math.max(a, b);
//     // const getMin = (a, b) => Math.max(a, b);
//     // const returns = a + b;
//     if (a)
//       console.log(
//         `accumulator: ${a}, currentValue: ${b}, index: ${index}, returns: ${returns}`
//       );
//     return returns;
//   }

//   prices.reduce(getMaxAndMin);
// };

// if a < b && index of a > index of maxPrice - a is min Price
// if a > b && index of b < index of maxPrice - b is max Price

var maxProfit = function (prices) {
  let minPrice = {
    value: prices[0],
    index: 0,
  };
  let maxPrice = {
    value: prices[prices.length - 1],
    index: prices.length - 1,
  };
  //   console.log("maxPrice:", JSON.stringify(maxPrice));
  //   console.log("minPrice:", JSON.stringify(minPrice));

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice.value && i < maxPrice.index && prices[i]) {
      minPrice.value = prices[i];
      minPrice.index = i;
      //   console.log("minPrice: ", minPrice);
    }

    if (prices[i] > maxPrice.value && i > minPrice.index && prices[i]) {
      //   console.log(prices[i]);
      //   console.log(maxPrice.value);
      //   console.log(i);
      //   console.log(minPrice.index);
      //   console.log(prices[i]);
      maxPrice.value = prices[i];
      maxPrice.index = i;
      //   console.log("maxPrice: ", maxPrice);
    }
  }

  console.log("maxPrice:", JSON.stringify(maxPrice));
  console.log("minPrice:", JSON.stringify(minPrice));
};
maxProfit([7, 1, 5, 3, 6, 4]);
