#!/usr/bin/env node

export function expect(got, expected, name = "no name") {
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
