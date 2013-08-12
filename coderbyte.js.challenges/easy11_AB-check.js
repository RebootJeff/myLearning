// This solution simply examines every letter of the string. If the letter is 'b', then the solution
// looks at the letter 4 indeces prior in hopes of finding the letter 'a'. Actually, the solution checks
// checks for 'a' before it checks for 'b', but the key with my solution is that the loop begins looking
// at the 5th letter of the input string because that is the first place where we can possibly get a 
// positive ("true") result.

// By the way, I think it's weird that CoderByte asked that the function return "true" or "false" as
// a STRING. WHO DOES THAT?! Booleans, man. C'mon!

function ABCheck(str) { 

  // code goes here  
  var result = "false";
  for(var i = 4; i < str.length; i++){
    if(str[i-4] == 'a' && str[i] == 'b'){
      result = "true";
      i = str.length;
    }
  }
  return result; 
         
}

ABCheck("aabaa");