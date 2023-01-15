#!/usr/bin/env node

function maxProfit(prices) {
    if (prices.length == 0) { return 0 }
    var maxProfit = 0;
    var min = prices[0];
    for (const p of prices) {
        if (p < min) { min = p }
        if (p - min > maxProfit) { maxProfit = p - min }
    }
    return maxProfit;
};

import { expect } from "./expect.js"

expect(maxProfit([7,1,5,3,6,4]), 5);
expect(maxProfit([7,6,4,3,1]), 0);
expect(maxProfit([]), 0);
