#!/usr/bin/env node

export function expect(got, expected) {
    // console.log(JSON.stringify(got))
    // console.log(JSON.stringify(expected))
    if (JSON.stringify(got) === JSON.stringify(expected)) {
        console.log("ok");
        return;
    }
    console.error("not ok");
    console.error("  got:      " + got);
    console.error("  expected: " + expected);
    return;
}
