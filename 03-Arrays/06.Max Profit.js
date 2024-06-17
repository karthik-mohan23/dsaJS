//Imagine you are buying and selling stocks throughout the year.
//Your job is to find the biggest profit you could make by buying low and selling high only once.

//Given -> A list of stock prices for each day
//[7,1,5,3,6,4]

//Here's what you need to find:

//The difference between the cheapest price you could have bought the stock and the most expensive price you could have sold it later on.

const arr = [7, 1, 5, 3, 6, 4];

const maxProfit = (profits) => {
  let minProfit = profits[0];
  let maxProfit = 0;

  for (let i = 0; i < profits.length; i++) {
    let currentItem = profits[i];

    minProfit = Math.min(minProfit, currentItem);

    let possibleProfit = currentItem - minProfit;

    maxProfit = Math.max(possibleProfit, maxProfit);
  }

  return maxProfit;
};

console.log(maxProfit(arr));
