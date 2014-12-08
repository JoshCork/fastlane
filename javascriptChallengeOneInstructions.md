Twelve people have walked on the Moon. They are:

Neil Armstrong
Buzz Aldrin
Pete Conrad
Alan Bean
Alan Shepard
Edgar Mitchell
David Scott
James Irwin
John W Young
Charles Duke
Eugene Cernan
Harrison Schmitt
You'll notice that these names are listed in the order that they first stepped on the Moon, not alphabetical order. To alphabetize them, it would make sense to write their names as lastname, firstname. For example: Neil Armstrong becomes Armstrong, Neil.

Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing strings of names and returns an alphabetized array of names in lastname, firstname format.


/* ----------------------------------------------------------------------------------------*/
/* ----------------------------------------------------------------------------------------*/

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


FAILING:

LOG: '1 < 4'
LOG: '1 = 1'
LOG: 'Can't compare relationship because that is not a number.'
LOG: 'Can't compare relationship because this and  something else are not numbers.'
LOG: 'Can't compare relationship because undefined is not a number.'
LOG: 'Can't compare relationship because hi and undefined are not numbers.'
LOG: 'Can't compare relationship because NaN and undefined are not numbers.'
LOG: 'Can't compare relationship because NaN and undefined are not numbers.'



TEST: comparison1 
It returns > :  FAILED
AssertionError: expected '7 > 5' to equal '>'
TEST: comparison2 
It returns = :  FAILED
AssertionError: expected 'Can\'t compare relationship because an empty string and an empty string are not numbers.' to equal '='
TEST: comparison3 
It returns > :  FAILED
AssertionError: expected 'Can\'t compare relationship because an empty string is not a number.' to equal '>'
TEST: comparison4 
It returns = :  FAILED
AssertionError: expected '1 = 1' to equal '='
TEST: comparison5 
It returns Can't compare relationships because this is not a number :  FAILED
AssertionError: expected 'Can\'t compare relationship because this is not a number.' to equal 'Can\'t compare relationships because this is not a number'
TEST: comparison6 
It returns Can't compare relationships because that and the other are not numbers :  FAILED
AssertionError: expected 'Can\'t compare relationship because that and the other are not numbers.' to equal 'Can\'t compare relationships because that and the other are not numbers'
TEST: comparison7 
It returns Can't compare relationships because undefined is not a number :  FAILED
AssertionError: expected 'Can\'t compare relationship because an empty string and undefined are not numbers.' to equal 'Can\'t compare relationships because undefined is not a number'
TEST: comparison8 
It returns Can't compare relationships because hello and undefined are not numbers :  FAILED
AssertionError: expected 'Can\'t compare relationship because hello and undefined are not numbers.' to equal 'Can\'t compare relationships because hello and undefined are not numbers'
TEST: comparison9 
It returns Can't compare relationships because NaN and undefined are not numbers :  FAILED
AssertionError: expected 'Can\'t compare relationship because NaN and undefined are not numbers.' to equal 'Can\'t compare relationships because NaN and undefined are not numbers'
TEST: comparison10 
It returns Can't compare relationships because NaN and undefined are not numbers :  FAILED
AssertionError: expected 'Can\'t compare relationship because NaN and undefined are not numbers.' to equal 'Can\'t compare relationships because NaN and undefined are not numbers'
