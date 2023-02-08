#!/usr/bin/env node

var n = 1;
export function expect(got, expected) {
    // console.log(JSON.stringify(got))
    // console.log(JSON.stringify(expected))
    if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log("ok " + n + " " + got);
        n++;
        return;
    }
    console.error("not ok " + n);
    console.error("  got:      " + got);
    console.error("  expected: " + expected);
    n++;
    return;
}
