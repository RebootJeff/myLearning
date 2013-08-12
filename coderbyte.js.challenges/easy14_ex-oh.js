// This one's really quite simple, so I decided to use it as an opportunity to try the ternary operator.
// I think I could've refactored it further (I wonder if I can just do "return count" and remove that last
// if statement), but I'd rather moved on to a harder challenge. So I did.

// By the way, CoderByte asks for the result "true" or "false" as a STRING rather than as a boolean, but
// I accidentally submitted as boolean, and I wasn't penalized.

function ExOh(str) { 

  // code goes here  
  var count = 0;
  var result = false;
  for(var i = 0; i < str.length; i++){
    count = (str[i] == 'x') ? (count + 1) : (count - 1);
  }
  if(count === 0){
    result = true;
  }
  return result; 
         
}

ExOh('xxoo');