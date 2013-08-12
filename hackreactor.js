// 1) Create an array of numbers, save it to a variable
var myArray = [1, 2, 3, 4];

// 2) Use a loop to iterate through each element of the array
// SEE STEP 4 BELOW

// 3) Write a separate "doubling" function that returns any number it is given multiplied by two
var doubling = function(input){
	return input * 2;
};

var doubled_pairs = {};

for (var i = 0; i < myArray.length; i++){
	// 4) Pass each number from the array to the "doubling" function in turn
	// and
	// 5) Save the original numbers and the doubled results as key-value pairs in an object
	doubled_pairs[i] = doubling(myArray[i]);
}

// check that the object is full of key-value pairs
console.log(doubled_pairs);