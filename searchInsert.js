#!/usr/bin/env node

// https://leetcode.com/problems/search-insert-position/description/

// binary search
function searchInsert(nums, target) {
    if (nums.length === 0) { return 0 }
    if (target < nums[0]) { return 0 }
    if (target > nums[nums.length - 1]) { return nums.length }
    const finder = (start, end) => {
        // console.log(start + " " + end);
        if (start === end) {
            return start;
        }
        if (nums[start] === target) {
            return start;
        }
        if (nums[end] === target) {
            return end;
        }
        if (start + 1 === end) {
            if (nums[end] < target) {
                return end + 1;
            }
            return end;
        }
        const mid = Math.floor((start + end) / 2);
        // console.log(start + " " + end + " " + mid);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            return finder(mid, end);
        }
        else {
            return finder(start, mid);
        }
    }
    return finder(0, nums.length - 1);
}

import { expect } from "./expect.js"

expect(searchInsert([], 5), 0);
expect(searchInsert([1,2,5,6], 5), 2);
expect(searchInsert([1,3,5,6], 2), 1);
expect(searchInsert([1,3,5,6], 7), 4);
expect(searchInsert([1,3,5,6], 0), 0);
