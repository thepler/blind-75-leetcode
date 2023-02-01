#!/usr/bin/env node

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = function(nums) {
    if (nums.length === 0 || nums.length === 1) { return nums }
    var i = 1;
    while (i <= nums.length - 1) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i, 1);
        }
        else { i++ }
    }
    return nums;
}

import { expect } from "./expect.js"

expect(removeDuplicates([1,1,2]), [1,2]);
expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4]), [0,1,2,3,4]);