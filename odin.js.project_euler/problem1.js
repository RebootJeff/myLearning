// Problem 1 - Find sum of multiples of 3 and 5 as described here:
// http://projecteuler.net/problem=1

/*
Expalanations:
Solution 1 - Straightforward
This solution uses a for loop to examine every integer from 1 to input-1.
The examination is done by checking if the integer is a multiple of 3
by using the modulus operator (%). If the integer is a multiple of 3,
then the if statement will find that it has a remainder of 0 when
divided by 3. Then the function adds to the sum accordingly. The same
process is used for finding multiples of 5 in the else-if statement.

Solution 2 - Shorter loop
The second solution creates multiples rather than searching for them,
allowing us to use a for loop that iterates 1/3 as many times
as the for loop found in Solution 1. Both solutions run in a split-second,
so it doesn't really matter...unless the input is a really big number.
Once the input reaches ~10 million, there is a noticeable difference
in runtime (humans can easily notice solution 1 takes half a second).

The first part of the if statement checks that the multiple of 5 is
still within the limit. This check does not need to be performed
for multiples of 3 due to "i < max/3" in the for loop condition.
The second part of the if statement checks if the multiple of 5
is redudant to multiples of 3. For example, we don't want to add
"15" to the sum as a multiple of 3 and a multiple of 5. It
just needs to be added to the sum once, not twice.
*/

var solution1 = function(input){
    var sum = 0;
    for(var i = 1; i < input; i++){
        if(i % 3 === 0){
            sum += i;
        }
        else if(i % 5 === 0){
            sum += i;
        }
    }
    return sum;
};

var solution2 = function(input){
    var sum = 0;
    var multipleOfThree;
    var multipleOfFive;

    for(var i = 1; i < input/3; i++){
        multipleOfThree = i*3;
        multipleOfFive = i*5;
        if(multipleOfFive < input && multipleOfFive % 3 > 0){
            sum += multipleOfFive;    
        }
        sum += multipleOfThree;
    }
    return sum;
};

// Change the value of max. See what happens.
// Make it 10x bigger, then 10x bigger still, and so on.
var input = 1000;

var start = new Date().getTime();
var answer = solution1(input);
var end = new Date().getTime();
console.log('Answer #1: ' + answer);
console.log('Runtime #1: ' + (end - start) + 'ms');

start = new Date().getTime();
answer = solution2(input);
end = new Date().getTime();
console.log('Answer #2: ' + answer);
console.log('Runtime #2: ' + (end - start) + 'ms');