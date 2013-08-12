// I'm mad at CoderByte because their challenge did not specify whether or not I should account for upper 
// case letters. It turns out that upper case letters are not tested. I spent a few minutes fretting on
// whether or not I should implement a hash lookup thingy to account for upper case letters.

// I'm mad at myself because I did not thoroughly test the function I submitted. It turns out that it's
// quite inaccurate because I thought Array.sort() only worked on integers, not letters.
// On top of that, Array.sort() doesn't work on integers in an intuitive way. So I REALLY screwed up here.
// The solution I submitted was THREE TIMES longer than it needed to be. It's been awhile since I've been
// this pissed at myself. AHHHHHHHHHH!!!!!!!!11111

function AlphabetSoup(str) { 

  // code goes here  
  var letters = str.split('');
  letters = letters.sort()
  return letters.join(''); 
         
}

AlphabetSoup('coderbyte');