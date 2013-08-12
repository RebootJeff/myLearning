// Usual disclaimer: CoderByte instructions tell you to return "true" or "false" as a STRING rather than 
// as a BOOLEAN. It's enough to drive a good man to horrible things. Like cursing.

// The curveball thrown for this challenge is that spaces must be ignored when checking whether or not
// the input string is a palindrome. I got rid of spaces by splitting the string based on spaces and then
// joining the resulting words without spaces. I'm sure there are other ways to accomplish this. A quick
// Google search shows that Regular Expressions can save the day (once again).

// Beyond that, you can just compare each letter to its corresponding mirror image on the other side of
// the string. What's funny is that I once did this for an interview; I failed miserably. I went so far
// as to split the input string into individual letters because I forgot you could just obtain a letter
// by treating the string as an array via "str[i]".

// One thing I did correctly was iterate the loop for only the first half of the string. When teaching
// yourself how to code, you get used to the idea of iterating through all elements of a given array.
// Don't forget that this isn't always necessary. Sometimes you can exit a loop early, and at other time,
// you can just loop through segments of an array.

// I admit that "str[str.length-1-i]" looks pretty ugly. I wonder if there's a more elegant variant.

function Palindrome(str) { 

  // code goes here  
  str = str.split(' ');
  str = str.join('');

  var result = "true";

  for(var i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length-1-i]){
      result = "false";
      i = str.length;
    }
  }
  return result; 
         
}