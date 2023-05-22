
var a:number=10;//transpailation   tsc filename.ts
var x=true;//static typing
//x="sandeep";
var c="welcome";
function greet():string 
{
return "Hello! Good Afternoon";
}
var greeting=greet();//intialization and assigning should be in same line....otherwise it treats normal 
var greeeting;//any

greeeting=greet();
console.log(greeeting);

function greet1(){
return "Hello! Good Evening";
}
var greeeting123=greet1();
console.log(greeeting123);