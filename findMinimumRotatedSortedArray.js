#!/usr/bin/env node

function findMin(nums) {
    if (nums.length === 0) { return }
    if (nums.length === 1) { return nums[0] }
    const finder = (start, end) => {
        // console.log(start + " " + end);
        if (start === end) {
            return nums[start];
        }
        if (start + 1 === end) {
            if (nums[start] < nums[end]) {
                // console.log("returning start");
                return nums[start];
            }
            else {
                // console.log("returning end " + end + " " + nums[end]);
                return nums[end];
            }
        }
        const mid = Math.floor((start + end) / 2);
        // console.log(start + " " + end + " " + mid);
        if (nums[mid] > nums[end]) {
            return finder(mid, end);
        }
        else {
            return finder(start, mid);
        }
    }
    return finder(0, nums.length - 1);
}

import { expect } from "./expect.js"

expect(findMin([]), undefined);
expect(findMin([5]), 5);
expect(findMin([4,5,6,7,0,1,2]), 0);
expect(findMin([0,1,2,4,5,6,7]), 0);
expect(findMin([2,1]), 1);
expect(findMin([1,2]), 1);
expect(findMin([3,4,5,6,7,0,1,2]), 0);
