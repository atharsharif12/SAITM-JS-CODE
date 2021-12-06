// // string methode 
//  var a ="athar";
//  var b = "sharif";
//  console.log(a.charAt(2));
//  console.log(a.concat(b));
//  console.log(a.indexOf("a"));
//  //match methode use
//  //searches a string for a match against a regular expression
//  var p = "athar";
//  var d = "athar";
//  if(p.match==d){
//      console.log("hello you are right");
//  }
//  else{
//      console.log("you are wrong");
//  }

//string replace
// var a = "athar";
// var b ="sharif";
// console.log(b.replace(a));
// console.log(a+b);
// console.log(a.search(b));
//substring methode


// array
// var array = ["athar","sharif"]
// ;
// console.log("first array is",array)
// console.log(array[0]);
// console.log(array[1]);
// var array1 = ["athar","sharif","sankherha"];
// console.log("2nd array is",array1);
// console.log("add two array is =",array.concat(array1));
// console.log(array.join(array1));
//  var array = ["athar","zenat","nusrat","nasima"];
//  var array1 = ["kajal","praween","sharif"];
//  console.log(array1.pop());
//  console.log(array1.shift());
//  console.log(array.reverse());
//  console.log(array1.sort());
//  console.log(array1.toString());
//  console.log(array1.toLocaleString());
//  toString() toPrecision()
// var d= Math.floor(x);
// console.log(d);
//string compare
var string1 = 'a';
var string2 = 'B';
var string3 ="athar sharif its my name";
var p ="athar";
var d= "sharif";
console.log(p.concat(d));
let index = string3.indexOf("sharif");
let index1 = string3.lastIndexOf("sharif");
console.log("index is",index);
console.log("last index is",index1);


if(string1>string2){
    console.log("string1 is greater than string2");
}
else if(string2 > string1) {
    console.log("string2 is greater than string1")
}
else{
    console.log("error");
}
//slice methode
function call(){
    console.log("hello higher function");
}
function call2(){
    console.log("hello world")
}
var slic  = string3.slice(-7);
console.log("index slice is",slic);
 function array(a,b){
     
     a();
     b();
     
 }
 array(call,+ call2);

