#!/usr/bin/env node

// https://leetcode.com/problems/remove-element/

const removeElement = function(nums, val) {
    if (nums.length === 0) { return nums }
    var i = 0;
    while (i <= nums.length - 1) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
        else { i++ }
    }
    return nums;
    // return nums.length;
}

import { expect } from "./expect.js"

expect(removeElement([3,2,2,3], 3), [2,2]);
expect(removeElement([0,1,2,2,3,0,4,2], 2), [0,1,3,0,4]);

expect(removeElement([], 2), []);
expect(removeElement([2], 2), []);
expect(removeElement([3], 2), [3]);
