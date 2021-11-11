// //switch statement
// var month = "feb";
// var date  = 2;
//  switch (month) {
//      case "jan": console.log("this is jan");
         
//          break;
//         case "feb":console.log("this is febuary");
//         break;
//         case "march":console.log("this is march");
//         break; 
 
//      default:console.log("default console");
//          break;
//  }
//  switch (date) {
//      case 1: console.log("day1");break;
//      case 2: console.log("day2");break;
//      case 3: console.log("day3");break;
//      case 4: console.log("day4");break;
//      case 5: console.log("day5");break;   
//          break;
 
//      default:
//          break;
//  }
//  for(let i=1; i<=10;i++){
//      console.log(i);
//  }
//  console.log("after for loop")
//  var arr = [2,4,6,8];
//  //for in loop
//  for(var i in arr){
//      console.log("array",arr);
//  }
//  //for of loop
//  var name1 = ["webdevelopemnet","mobile","tech-marketing","card4"];
//  for(let p of name1){
//      console.log("array value is", p)
//  }
//  //function in javascripts
//  function myfunction(){
//      console.log("hello functio");
//      console.log("hello functio");
//      console.log("hello functio");
//      console.log("hello functio") ; 
     
//  }
//  myfunction();
// function  add(a,b) {
//     var c = a+b;
//     console.log("add is",c)
// }
// function sub(a,b) {
//     console.log("sub is",a-b,'\n');

// }
// function  pricecalculator(no,price) {
//     console.log("total bill is" , no*price+"<br/>");
// }
// add(234,456);
// sub(56,67);
// // sub(56,67);
// sub(56,67);
// pricecalculator(5,234);
// pricecalculator(5,234);
// pricecalculator(5,234);
// pricecalculator(5,234);

//arow function
//  var givemul10 = (a)=>{
//      return a*10;
//  }
//  var multi = (c, d)=>{
//      return c*d;
//  }
//  var add = function(p,q){
//      return p+q;
//  }
 
//  console.log("first out put is",givemul10(2));
// console.log("second out is",multi(450, 345));
// console.log("third out is",add(12,34));

//string in javascripts 

// var name1 = "athar sharif";
// console.log("lenght is",name1.length);
// console.log("char at positiopn",name1[3]);
// console.log("char at position",name1.charAt(2));
// // string other method to find position of string
// console.log("char at positiopn","athar"[0]);
// console.log("char at positiopn","sharif".charAt(2));

// //string concatination

// var at = "athar";
// var ah = "sharif";
//  var con = at+ah;
//  console.log(con);
//  var ath="1234";
//  console.log(ath);//undefined (if not value assigned in var);
// //null (assigned by user) and 
// console.log(typeof(ath));
 
//shadow in js

let number = 10;
function display(){
    let number = 3;
    number *=2;
    console.log(number); 
}
display();
