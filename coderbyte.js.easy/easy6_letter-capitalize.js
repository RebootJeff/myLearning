function LetterCapitalize(str) { 

  // code goes here  
  var words = str.split(' ');
  var newWords = [];
  for(var i = 0; i < words.length; i++){
    newWords.push(words[i].slice(0,1).toUpperCase() + words[i].slice(1));
  }
  return newWords.join(' '); 
         
}
LetterCapitalize("Argument goes here");