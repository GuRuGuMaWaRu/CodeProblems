/*

Alternative way:

Here is a fast/strictly logical way to do it without resorting to permutations:

Create a new list to hold consecutive-one-off strings, initialized to the first string of inputArray.

For each unplaced string, find a spot for it in the ordered list.

Endeavor first to plop the string somewhere in middle of ordered set (since this is more constrained), then try the ends.

If no spot can be found for this string, try next string.

If none of the unplaced strings can find a spot, reset everything and try again with an unplaced string attended to first.

If still no luck placing any of the remaining strings, return false.

Otherwise, a full ordered list has been created, so return true!








*/
