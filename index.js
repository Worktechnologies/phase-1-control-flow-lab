function scuberGreetingForFeet(someValue){

  let result;
  if (someValue <= 199)
  {
    result= "This one is on me"
    
  }

  else if (someValue >=200  && someValue <=400)
  {
    result = "first 400 feet are free"
   
  }
  else
  {
    result=" go to another option"
    
  }
  return result;
}
console.log(scuberGreetingForFeet(500));

function ternaryCheckCity(city){
  // Write your code here!
  //let city= Chandigarh;

  return city ? "Chandigarh" : "Punjab";

  
}
console.log(ternaryCheckCity(true));
console.log(ternaryCheckCity(false));

function switchOnCharmFromTip(time){
  switch(time)
  {
    case "morning": 
       return '$10';
       break;
    case "afternoon":
      return "$20";
    break;
  
  }
  }
var result= console.log(switchOnCharmFromTip("morning"));