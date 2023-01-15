#!/usr/bin/env node

function productExceptSelf(nums) {
    const ans = Array(nums.length).fill(1);
    var pre = 1
    var suf = 1
    for (var i = 0; i < nums.length; i++) {
        ans[i] *= pre;
        pre = pre * nums[i];
        ans[nums.length-i-1] *= suf;
        suf = suf * nums[nums.length-i-1]
        // console.log(ans + " " + pre + " " + suf);
    }
    return ans;
}

import { expect } from "./expect.js"

expect(productExceptSelf([1,2,3,4]), [24,12,8,6])
expect(productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0])
expect(productExceptSelf([]), [])
