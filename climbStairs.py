#!/usr/bin/env python3

# https://leetcode.com/problems/climbing-stairs/

# fibonocci basically
def climbStairs(n: int) -> int:
    if (n <= 3):
        return n 
    a = 2
    b = 3
    for i in range(3, n):
        tmp = b
        b = a + b
        a = tmp
    return b

assert climbStairs(0) == 0
assert climbStairs(1) == 1
assert climbStairs(2) == 2
assert climbStairs(3) == 3
assert climbStairs(4) == 5
assert climbStairs(5) == 8
assert climbStairs(6) == 13
assert climbStairs(7) == 21
