// My solution works, but it's definitely not elegant. I wasted a lot of time implementing a solution
// that tapped into the power of hashes, but I should've read the test cases before coding because
// they reveal that the challenge asks you to count CONSECUTIVE (or adjacent?) instances of letters, not
// all instances regardless of position.

// I scrapped my hash solution and started from scratch with a simple for loop, but I noticed that
// my loop is not structured in the most efficient way. Therefore, I had to add an extra line of code
// right before the return statement. That one line is the same as a line found in the else statement.
// Repeating yourself is bad, and that's exactly what I did to get this working >_<

// What's weird is that this challenge seems way too easy to be considered medium difficulty. Then again,
// some easy challenges seem too hard to be considered easy. Damn you, CoderByte!

function RunLength(str) { 

  // code goes here  
    var result = '';
    var count = 1;

    for(var i = 1; i < str.length; i++){
        if(str[i] == str[i-1]){
            count++;
        }
        else{
            result += count + str[i-1];
            count = 1;
        }
    }
    result += count + str[i-1];
  return result;       
}

RunLength('wwwoop');