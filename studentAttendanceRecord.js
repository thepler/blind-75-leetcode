#!/usr/bin/env node

// https://leetcode.com/problems/student-attendance-record-i/

function checkRecord(r) {
    if (/LLL/.test(r)) {
        return false;
    }
    const absents = r.replace(/[^A]/g, '');
    if (absents.length >= 2) {
        return false;
    }
    return true;
};

import { expect } from "./expect.js"

expect(checkRecord("PPALLP"), true);
expect(checkRecord("PPALLL"), false);
expect(checkRecord("PPALALA"), false);
expect(checkRecord("PPALALP"), false);
expect(checkRecord("AA"), false);
expect(checkRecord("PLLLLPAP"), false);
expect(checkRecord("A"), true);
expect(checkRecord("P"), true);
expect(checkRecord("L"), true);
