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
function display() {
    let number = 3;
    number *= 2;
    console.log(number);
}
display();
var string1 = "athar sharif";
var string2 ="manish kumar";
console.log(string1.replace(string2));
console.log(string2);
var test = "what are you doing";
var b= test.replaceAll('you','replace');
console.log('replace is ',b); 
var change = "manish kumar";
var changed = change.split('')
console.log("result is",changed);
console.log(string2.length);

var price = ["athar","sharif","manish","kumar","kisor"];
console.log(price);
console.log(price.push("darbhanga"));
console.log(price.pop());
console.log(price)
var arra1 = ['athar','sharif','athar'];
var arrr1 = ['manish','kumar'];
console.log(arra1.join(arrr1));
var text2 ="my name is md";
var text3 = text2.split('');
console.log("split is ",text3)
mobile = [1,2,3,4,5,6];
var sli  = mobile.slice(1,3);
var sli1 = mobile.slice(2,4);
console.log(sli1);
var sli3  = mobile.splice(4,2)
console.log(sli3)

console.log(sli)   
var mobile2 = [1,2,3,4,5,6,7,8,9,10];
var c= mobile2.slice(8,10);
var mobile3 = [1,2,3,4,5,6,7,8,9];
console.log("after sort is" , mobile3.sort());
console.log(mobile2.reverse());
console.log('after slice is',c);

var price1  = [1,2,3,4.5,6,7,8];
var price2  = price1.slice(1,3);
console.log("slice is " ,price2);
var storedata  = [3,4,5,6,7,8,9];
console.log("storedata",storedata.slice(4,7));
console.log("left data is",storedata.splice(2,5));
var ar1 = [1,2,3,4,5,6,7,8];
var ar2  = [9,10,11,12,13];
var ar3 = ar1.concat(ar2);
console.log(ar3.reverse());
console.log(ar3.sort());
var stra  = ["athar","manish","suraj","john doe"];
console.log(stra.sort());
const book1 = {
    title:"book one",
    author:"john doe",
    year:"2016",
    find:function(){
        return `${this.title} is written by ${this.author} in ${this.year}`
    }
};
console.log(book1);
console.log(typeof book1)
console.log(book1.find());