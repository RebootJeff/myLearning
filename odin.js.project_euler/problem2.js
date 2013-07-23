/*
Problem 2 - Sum the even Fibonacci numbers between 1 and 4,000,000
as described here: http://projecteuler.net/problem=2

Expalantion:
I've used an array in the solution, but you could easily just use 3
separate variables. The array stores the 3 latest values of the
Fibonacci sequence. The array is first loaded with 0, 1, 0 as its
values. The solution function then starts a while loop that calculates
the next Fibonacci number, determines if its even, adds it to the sum
as needed, and updates the rest of the array.

There is no need to store all numbers in the Fibonacci sequence.
Only 3 of them need to be stored at a time.
*/

var solution = function(limit){
    var sum = 0;
    var sequence = [];
    sequence[1] = sequence[3] = 0;
    sequence[2] = 1;
    
    while(sequence[3] < limit){
        sequence[3] = sequence[1] + sequence[2];
        if(sequence[3] % 2 === 0){
            sum += sequence[3];
        }
        sequence[1] = sequence[2];
        sequence[2] = sequence[3];
    }
    
    return sum;
};

var num = 4000000;	// This algorithm can handle much larger numbers

var start = new Date().getTime();
console.log('Answer: ' + solution(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');