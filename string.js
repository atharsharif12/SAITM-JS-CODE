var string1  = "atharsharif";
var string2 = "hello world";
var array = [1,2,3,4,5,6,7];
console.log(string1);
console.log(string1.split('')) //to devide string in single character
console.log(string1.slice(1,7)) // to print 2 3 4 5 6 7 except 1
console.log(array.slice(1,7))  // to print 2 3 4 5 6 7 except 1
console.log("index string to cunt 0 index number",string1.charAt(3));//to print index number charcter
console.log("concat string",string2.concat(string1)); // add two string to used concat
 console.log(string2.replace(string1)); // replace one strings to anothr strings 
  console.log(string1)
  console.log(string1.indexOf("s")); //return the firs occurance of the specified character from the strings else -1 if not found 
  console.log(string2.match()) //searches a strings for a match against a specified strings or char and returns a new strings by replacing the specified values 
  console.log(string1.search('a')); 