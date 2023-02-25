



const maxProfit = (prices) => {
    // let prices = [20, 40, 10];
    var largest = 0;
    var maxProfit = 0;
    let minimum = Math.min(...prices);
    let minIndex = prices.indexOf(minimum);
    console.log(minIndex);
    for (var i = minIndex + 1; i < prices.length; i++) {
        if (largest < prices[i]) {
            largest = prices[i];
            maxProfit = largest - minimum;
        }
    }
    console.log(maxProfit)

}