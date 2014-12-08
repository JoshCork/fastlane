We learned about relational operators and how they can classify the relationship between two values. Your job is to write the function getRelationship(x,y) function, which should return a string representing whether x is >, < or = y. For example:

var rel = getRelationship(2, 3);
console.log(rel); // <
If one or both of the values aren't numbers, your function should output:

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
where [this value] and [that value] are replaced with the non-numerical values. The sentence should be grammatically correct by outputting either is or are and pluralizing number if necessary.

For example:

var rel1 = getRelationship("this", 2);
console.log(rel1); // "Can't compare relationships because this is not a number"

var rel2 = getRelationship("that");
console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"
Notice in the second example, because the y value was missing, the output said that undefined was not a number.

Adapted from UVa problem 11172.

Need to identify when it is not a number NaN
Need to identify when it is undefined.
Need to identify when it is an empty string.


Msg1: Can't compaare relationship because X is not a number.
Msg2: Can't eompare relationship because X and Y are not numbers.


if !X && !Y THEN Msg2
	Else If !x THEN Msg1 for X
	Else THEN Msg2 for Y