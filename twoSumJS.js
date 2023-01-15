#!/usr/bin/env node

function twoSum(nums, target) {
    const complimentIndexes = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in complimentIndexes) {
            return [complimentIndexes[nums[i]], i]
        }
        complimentIndexes[target - nums[i]] = i
    }
    return [];
}

function expect(got, expected, name = "no name") {
    // console.log(JSON.stringify(got))
    // console.log(JSON.stringify(expected))
    if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log("ok " + name);
        return;
    }
    console.error("not ok " + name);
    console.error("  got:      " + got);
    console.error("  expected: " + expected);
    return;
}

expect(twoSum([2,7,11,15], 9), [0,1]);
expect(twoSum([3,2,4], 6), [1,2]);
expect(twoSum([3,3], 6), [0,1]);
