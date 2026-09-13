# cassidoo-2026-09-07

Solution to interview problem sent in [the September 7th, 2026 issue of the rendezvous with cassidoo newsletter](https://buttondown.com/cassidoo/archive/u1f6e3-ufe0f-habit-is-persistence-in-practice/).

## Problem statement

You have a backpack lock's starting position, and the code to unlock it, represented as two strings of integers. In one move, you may rotate any single digit one step up or down, with 0 and 9 considered adjacent. Return the minimum number of moves needed to transform the starting code into the unlock code.

### Example:

```
minMoves("8051", "1199")
> 10

minMoves("000", "555")
> 15

minMoves("109", "990")
> 4
```