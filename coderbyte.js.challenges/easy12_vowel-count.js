// This was ezpz only because I had learned regex (this part: /[aeiou]/.test()) for previous challenges.

function VowelCount(str) { 

  // code goes here  
  var count = 0;
  var letters = str.split('');
  for(var i = 0; i < letters.length; i++){
    if(/[aeiou]/.test(letters[i])){
      count++;
    }
  }
  return count; 
         
}

VowelCount("coderbyte");