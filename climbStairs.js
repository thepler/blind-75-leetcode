#!/usr/bin/env node

// https://leetcode.com/problems/climbing-stairs/

// fibonocci basically
var climbStairs = function(n) {
    if (n <= 3) { return n } 
    var a = 2;
    var b = 3;
    var tmp;
    for (var i = 3; i <= n-1; i++) {
        tmp = b
        b = a + b;
        a = tmp;
    }
    return b;
};

import { expect } from "./expect.js"

expect(climbStairs(0), 0);
expect(climbStairs(1), 1);
expect(climbStairs(2), 2);
expect(climbStairs(3), 3);
expect(climbStairs(4), 5);
expect(climbStairs(5), 8);
expect(climbStairs(6), 13);
expect(climbStairs(7), 21);
