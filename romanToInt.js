#!/usr/bin/env node

// https://leetcode.com/problems/roman-to-integer/solutions/

const romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var digit = s.split('');
    var total = 0;
    for (var i = 0; i < digit.length; i++) {
        if (roman[s[i]] < roman[s[i+1]]) {
            total -= roman[s[i]];
        }
        else {
            total += roman[s[i]];
        }
    }
    return total;
}

import { expect } from "./expect.js"

expect(romanToInt("III"), 3);
expect(romanToInt("LVIII"), 58);
expect(romanToInt("MCMXCIV"), 1994);