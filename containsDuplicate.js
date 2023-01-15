#!/usr/bin/env node

function containsDuplicate(nums) {
    const seen = {};
    for (const n of nums) {
        if (seen[n]) { return true }
        seen[n] = true;
    }
    return false;
};

import { expect } from "./expect.js"

expect(containsDuplicate([1,2,3,1]), true);
expect(containsDuplicate([1,2,3,4]), false);
expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true);
