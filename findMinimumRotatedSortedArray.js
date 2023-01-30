#!/usr/bin/env node

function findMin(nums) {
    if (nums.length === 0) { return }
    if (nums.length < 2) { return nums[0] }
    var start = 0;
    var end = nums.length - 1;

    // nums is in sorted order
    if (nums[start] < nums[end]) {
        return nums[start];
    }
    while (start < end) {
        var mid = Math.floor((start+end) / 2);
        // console.log("mid: " + mid + " " + nums[start] + " " + nums[mid] + " " + nums[end]);
        if (mid > 0 && nums[mid] < nums[mid-1]) {
            return nums[mid]
        }
        if (mid < (nums.length - 1) && nums[mid + 1] < nums[mid]) {
            return nums[mid + 1]
        }
        if (nums[mid] > nums[start]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
}

import { expect } from "./expect.js"

expect(findMin([]), undefined);
expect(findMin([5]), 5);
expect(findMin([4,5,6,7,0,1,2]), 0);
expect(findMin([0,1,2,4,5,6,7]), 0);
expect(findMin([2,1]), 1);
expect(findMin([1,2]), 1);
