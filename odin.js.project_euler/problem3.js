var input = 600851475143;

var isPrime = function(num){
	var check = true;
	// check if number is prime by dividing it by all possible numbers
    for(var j = 2;j<i;j++){
        if(i % j === 0 && isPrime){
            check = false;
            j = i + 1;	// cancel remaining iterations of for-loop
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