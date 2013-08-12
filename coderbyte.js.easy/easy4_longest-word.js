// Change all letters in a string to the next letter of the alphabet.
// Change all resultant vowels to upper case.
// Non-alpha chars are ignored.

// My first solution relies on regexps, which I learned just to complete this.
// It also relies on lots of char-ascii conversion.
function LetterChanges(str) { 

  // code goes here  
  var newStr = '';
  var letter = '';
  for(var i = 0; i < str.length; i++){
    if (/[A-Ya-y]/.test(str[i])){
      letter = str.charCodeAt(i) + 1;
      letter = String.fromCharCode(letter);
      if (/[aeiou]/.test(letter)){
        letter = letter.toUpperCase();
      }
    }
    else if(str[i] == 'z' || str[i] == 'Z'){
        letter = 'A';
    }
    else{
      letter = str[i];
    }
    newStr = newStr.concat(letter);
  }
  str = newStr;
  return str; 
}

console.log(LetterChanges('beautiful^'));

// My second solution still uses a regexp for vowels, but it uses an object (hash table)
// for a more straightforward lookup/query tactic.
function LetterChanges2(str) { 

  // code goes here  
  var letter_lookup = {};
  for(var i = 65; i < 90; i++){
      letter_lookup[String.fromCharCode(i)] = String.fromCharCode(i+1);
      letter_lookup[String.fromCharCode(i+32)] = String.fromCharCode(i+33);
  }
  letter_lookup['Z'] = 'A';
  letter_lookup['z'] = 'A';
  
  var newStr = '';
  var letter = '';
  for(i = 0; i < str.length; i++){
      letter = str[i];
      if(letter in letter_lookup){
          letter = letter_lookup[str[i]];
          if(/[eiou]/.test(letter)){
              letter = letter.toUpperCase();
          }
      }
      newStr = newStr.concat(letter);
  }
  str = newStr;
  return str;
}


console.log(LetterChanges2('beautiful^'));