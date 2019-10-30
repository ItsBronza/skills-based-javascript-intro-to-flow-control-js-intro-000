function basicTeenager(age) {
  if (age <= 19 && age => 13){
        return "You are a teenager!";
 }
}

function teenager(age) {
return (13-19) ? "You are a teenager!":"You are not a teenager";
}

function ageChecker(age) {
  var x;
if(13-19){
  return "You are a teenager!";
} else if(x === 12 || x < 12){
  return "You are a kid";
} else if(x > 19){
  return "You are a grownup";
}
}

function ternaryTeenager(age) {
return (13-19) ? "You are a teenager!":"You are not a teenager";
}

function switchAge(age) {
switch(){
case "13-19":
return "You are a teenager!";
break;
default:
return "You have an age";
}
}
