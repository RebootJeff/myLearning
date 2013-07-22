var max = 600851475143;
var answer = 0;
var isPrime = true;

for(var i = 2; i <= max; i++){
	isPrime = true;

	// check if number is prime by dividing it by all possible numbers
    for(var j = 2;j<i;j++){
        if(i % j === 0 && isPrime){
            isPrime = false;
            j = i + 1;	// exit for-loop early
        }
    }
    if (isPrime){
        answer = i;
    }
}

console.log(answer);