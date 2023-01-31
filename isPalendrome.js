#!/usr/bin/env node

// https://leetcode.com/problems/palindrome-number/

const isPalendrome = function(x) {
    if (x < 0) { return false }
    const reversed = ('' + x).split('').reverse().join('');

    return ('' + x) === reversed;
}

import { expect } from "./expect.js"

expect(isPalendrome(121), true);
expect(isPalendrome(-121), false);
expect(isPalendrome(10), false);