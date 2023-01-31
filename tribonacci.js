#!/usr/bin/env node

// https://leetcode.com/problems/n-th-tribonacci-number/

const tribonacci = function(n) {
    if (n < 2) { return n }
    if (n === 2) { return 1 }
    var a = 0;
    var b = 1;
    var c = 1;
    var d;
    for (var i = 3; i <= n; i++) {
        d = c;
        c = a + b + c;
        a = b;
        b = d;
    }
    return c;
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
