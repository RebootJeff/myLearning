var max = 600851475143;
var answer = 0;
var isPrime = true;

for(var i = 2; i <= max; i++){
    for(var j = 2;j<i;j++){
        if(i % j === 0 && isPrime){
            isPrime = false;
        }
    }
    if (isPrime){
        answer = i;
    }
    isPrime = true;
}

console.log(answer);