// Problem 3 - Find the greatest prime factor as described here:
// http://projecteuler.net/problem=3

var isPrime = function(input){
	// check if number is prime by dividing it by all possible numbers
    for(var i = 2; i < input; i++){
        if(input % i === 0){
            return false;
        }
    }
    return true;
};

var maxPrime = function(input){
	// this function is unnecessary, but I made it on accident because
	// I mis-interpreted the problem at hand.
	var i = input - 1;

	while(i > 1 && !isPrime(i)){
	    i--;
	}
	return i;
};

var maxPrimeFactor = function(input){
	/*
	Explanation:
	Notice that we start with a big divisor and decrement it to find
	the MAX prime factor. Also, the if statement doesn't bother running
	the potentially slow isPrime() function when the divisor isn't a
	factor of the input
	*/
	var divisor = input - 1;

	while(divisor > 1){
		if(input % divisor === 0 && isPrime(divisor)){
			return divisor;
		}
		divisor--;
	}
	return input;
}

// Input should be 600851475143, but takes too long.
// Add more digits to "num" and see how long it takes to run the code.
var num = 60085147;

var start = new Date().getTime();
console.log('Answer: ' + maxPrimeFactor(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');