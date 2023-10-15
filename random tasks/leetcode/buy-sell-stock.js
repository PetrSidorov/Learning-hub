// You are given an integer array prices where prices[i] is the price
// of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock.
// You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// TODO: solve
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// TODO: solve this
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  function checkSellOrBuy(day) {}
  function buy() {}
  function sell() {}
  for (let day = 0; day < prices.length; day++) {
    let sellOrBuy = checkSellOrBuy(prices[day]);
    if (sellOrBuy == "HOLD") {
      break;
    } else if (sellOrBuy == "BUY") {
      buy(prices[day]);
    } else if (sellOrBuy == "SELL") {
      sell(prices[day]);
    }
  }
};
maxProfit([7, 1, 5, 3, 6, 4]);
