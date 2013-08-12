function ThirdGreatest(strArr) { 

  // code goes here  
  var sortedArr = [];
  var injected = false;
  var sortedLength;
  var result;
  
  for(var i = 0; i < strArr.length; i++){
    sortedLength = sortedArr.length;
    for(var j = 0; j < sortedLength; j++){
      if(strArr[i].length >= sortedArr[j].length){
        sortedArr.splice(j,0,strArr[i]);
        injected = true;
        j = sortedLength;
      }
    }
    if(!injected){
      sortedArr.push(strArr[i]);
    }
    injected = false;
  }
  
  for(i = strArr.length - 1; i >= 0; i--){
      result = strArr[i];
      if(result.length === sortedArr[2].length){
          i = -1;
      }
  }
  return result;
}

console.log(ThirdGreatest(['one','two','three']));