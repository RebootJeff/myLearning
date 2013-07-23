/*
Problem 2 - Sum the even Fibonacci numbers between 1 and 4,000,000
as described here: http://projecteuler.net/problem=2

Solution 1:
This is the inelegant solution. First, it generates a Fibonacci sequence
using a while loop, and it stores the sequence in an array. Then, it uses
a for loop to search for even numbers in the sequence. When it finds an
even number, it adds it to the sum.

The next solution is much simpler, but both solutions will run very
quickly so you won't see a speed difference.

Solution 2:
I've used an array in the solution, but you could easily just use 3
separate variables. The array stores the 3 latest values of the
Fibonacci sequence. The array is first loaded with values 0, 1, 0.
The solution function then starts a while loop that calculates the
next Fibonacci number, determines if its even, adds it to the sum as
needed, and updates the rest of the array.

There is no need to store all numbers in the Fibonacci sequence.
Only 3 of them need to be stored at a time.
*/

var solution1 = function(limit){
    var sum = 0;
    var sequence = [];
    sequence.push(1);
    sequence.push(2);
    sequence.push(3);
    var length = sequence.length;
    
    while(sequence[length-1] <= limit){    // generate Fibonacci sequence
        sequence.push(sequence[length-1] + sequence[length-2]);
        length = sequence.length;	// update variable storing array size
    }

    // last number in the sequence will be too large, so the for loop will
    // only run from element 0 to element length-2 instead of length-1
    for(var i = 0; i <= length-2; i++){
        if(sequence[i] % 2 === 0){
            sum += sequence[i];
        }
    }
    return sum;
};

var solution2 = function(limit){
    var sum = 0;
    var sequence = [];
    sequence[0] = sequence[2] = 0;
    sequence[1] = 1;
    
    while(sequence[2] <= limit){
        sequence[2] = sequence[0] + sequence[1];
        if(sequence[2] % 2 === 0 && sequence[2] <= limit){
            sum += sequence[2];
        }
        sequence[0] = sequence[1];
        sequence[1] = sequence[2];
    }
    return sum;
};

var num = 4000000;

var start = new Date().getTime();
console.log('Answer 1: ' + solution1(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');

var start = new Date().getTime();
console.log('Answer 2: ' + solution2(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');