#!/usr/bin/env node

// binary search
function search(nums, target) {
    if (nums.length === 0) { return -1 }
    const yepOrNope = (i) => {
        if (nums[i] === target) {
            return i;
        }
        else {
            return -1;
        }
    }
    if (nums.length === 1) {
        return yepOrNope(0);
    }
    const finder = (start, end) => {
        console.log(start + " " + end);
        if (start === end) {
            return yepOrNope(start);
        }
        if (start + 1 === end) {
            if (nums[end] === target) {
                return end;
            }
            else {
                return yepOrNope(start);
            }
        }
        const mid = Math.floor((start + end) / 2);
        console.log(start + " " + end + " " + mid);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > nums[end] && ) {
            return finder(mid, end);
        }
        else {
            return finder(start, mid);
        }
    }
    return finder(0, nums.length - 1);
}

import { expect } from "./expect.js"

expect(search([]), -1);
expect(search([5], 5), 0);
expect(search([5], 4), -1);

expect(search([4,5,6,7,0,1,2], 0), 4);

expect(search([4,5,6,7,0,1,2], 3), -1);
expect(search([0,1,2,4,5,6,7], 0), 0);
expect(search([0,1,2,4,5,6,7], 3), -1);

expect(search([0,1,2,4,5,6,7], 7), 6);

expect(search([2,1], 2), 0);
expect(search([1,2], 2), 1);
expect(search([1,2], 3), -1);
expect(search([3,4,5,6,7,0,1,2], 3), 0);
