#!/usr/bin/env node

const tribonacci = function(n) {
    if (n === 0) { return 0 }
    if (n === 1 || n === 2) { return 1 }
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
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
expect(tribonacci(35), 615693474);
