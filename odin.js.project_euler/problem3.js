// Problem 3 - Find the greatest prime factor as described here:
// http://projecteuler.net/problem=3

var input = 1000; // input should be 600851475143, but takes too long

var isPrime = function(num){
	var check = true;
	// check if number is prime by dividing it by all possible numbers
    for(var j = 2; j < num; j++){
        if(num % j === 0 && check){
            check = false;
            j = num;	// cancel remaining iterations of for-loop
        }
    }
    return check;	
};

var maxPrime = function(input){
	var result = 0;
	for(var i = 2; i <= input; i++){
	    if (isPrime(i)){
	        result = i;
	    }
	}
	return result;
};

var start = new Date().getTime();
console.log('Answer: ' + maxPrime(input));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');