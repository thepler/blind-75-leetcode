#!/usr/bin/env node

// https://leetcode.com/problems/n-th-tribonacci-number/

const memo = {}
const tribonacci = function(n) {
    return tribMemo(n, memo);
}
const tribMemo = function(n, memo) {
    if (n === 0) { return 0 }
    if (n === 1 || n === 2) { return 1 }
    if (memo[n]) { return memo[n] }
    return tribonacci(n - 3, memo) + tribonacci(n - 2, memo) + tribonacci(n - 1, memo)
}

import { expect } from "./expect.js"

expect(tribonacci(0), 0);
expect(tribonacci(1), 1);
expect(tribonacci(2), 1);
expect(tribonacci(3), 2);
expect(tribonacci(4), 4);
expect(tribonacci(5), 7);
expect(tribonacci(6), 13);
expect(tribonacci(7), 24);
expect(tribonacci(25), 1389537);
expect(tribonacci(34), 334745777);
expect(tribonacci(35), 615693474);
expect(tribonacci(37), 2082876103);
