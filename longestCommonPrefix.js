#!/usr/bin/env node

// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = function(strs) {
    var solution = "";
    var maxLength = 0;
    var arrays = [];
    for (var i = 0; i < strs.length; i++) {
        maxLength = Math.max(maxLength, strs[i].length);
        arrays.push(strs[i].split(''));
    }
    // console.log(arrays);
    for (var i = 0; i < maxLength; i++) {
        const letter = arrays[0][i];
        for (var j = 1; j < arrays.length; j++) {
            if (letter !== arrays[j][i]) {
                return solution;
            }
        }
        solution = solution + letter;
    }
    return solution;
}

import { expect } from "./expect.js"

expect(longestCommonPrefix(["flower","flow","flight"]), "fl");
expect(longestCommonPrefix(["dog","racecar","car"]), "");
expect(longestCommonPrefix(["flower","flower","flower"]), "flower");