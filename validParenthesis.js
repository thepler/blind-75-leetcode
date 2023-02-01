#!/usr/bin/env node

// https://leetcode.com/problems/valid-parentheses/

const isValid = function(s) {
    const chars = s.split('');
    var stack = [];
    for (var i = 0; i < chars.length; i++) {
        const ch = chars[i];
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        }
        else if (ch === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        }
        else if (ch === ']') {
            if (stack.length === 0 || stack.pop() !== '[') {
                return false;
            }
        }
        else if (ch === '}') {
            if (stack.length === 0 || stack.pop() !== '{') {
                return false;
            }
        }
    }
    return stack.length === 0;
}

import { expect } from "./expect.js"

expect(isValid('()'), true);
expect(isValid('()[]{}'), true);
expect(isValid('(]'), false);
expect(isValid('{}{[][()]}'), true);
expect(isValid('{}{[][()]}}'), false);