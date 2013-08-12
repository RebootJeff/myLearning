function SimpleSymbols(str) { 

  // code goes here  
  var result = true;
  if(str.length < 3){
    result = false;
  }
  else if(/[A-Za-z]/.test(str[0])){
          result = false;
  }
  else{
    for(var i = 1; i < str.length; i++){
      if(/[A-Za-z]/.test(str[i])){
         if(str[i-1] != '+'  || str[i+1] != '+'){
          result = false;
         }
      }         
    }
  }
  return result;    
}