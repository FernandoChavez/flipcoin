let n=9999;
document.getElementById("demo").innerHTML = randomNumber(n);

function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
	//Validate Input
	try { 
		if(isNaN(n)) throw "not a number";
    n = Number(n);
    if(n <= 0)    throw "too low";
    if(n >=1000000)   throw "too high";
  }
  catch(err) {
    return "n is "+err;
  }
   
  //Create Initial array with all posible values
  //Example n=10*** initialArray=[0,1,2,3,4,5,6,7,8,9]
  var initialArray = new Array(n);
  for (i = 0; i < n; i++) { 
		initialArray[i]=i;	
  }
 
	// 
  var newArray;
  do{
  	newArray=generateRandom(initialArray);
    if(newArray.length >1 ){
    	initialArray= newArray.splice(0);
     }
     else if(newArray.length ==1)
     	return newArray

  }while(true);
  return initialArray ; 
  
	
}

function generateRandom(oldArray) {	
	
  var newArray = cloneArray(oldArray); 
	var itemstoremove=0;
  for (i = 0; i < newArray.length; i++) { 
  	if(flip()){
   		newArray[i]=-1;
      itemstoremove++;
		}
  } 
  newArray.sort(function(a, b){return a - b});
  newArray.splice(0,itemstoremove);
 
  if(newArray.length==0 )
  	return oldArray;
  else
  	return newArray; 
}

function cloneArray(array) {
	var copy = new Array(array.length);
	 for (i = 0; i < array.length; i++) { 
  	copy[i]=array[i];
	}
  return copy;
}