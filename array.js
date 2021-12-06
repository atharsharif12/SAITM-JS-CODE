// var array = [1,2,3,4,5,6,7,8,9];
// var array1 = ["athar","sharif","suarj","manish","mohan"];

// var sqr  = [1,4,9,7,25];
// var nos  = [1,4,9,16,25];
// console.log(sqr.sort());

var ar1 = [1,2,3,4,5,6];

// let arr2=[]
console.log("length is",ar1.length);
// for(let i=0;i<ar1.length;i++){
//    ar1[i] = ar1[i]*ar1[i];
// }
// console.log(ar1);
// ar1.forEach((index,value1)=> {
// // console.log(array,index);
// return ar1[index] = value1*value1;
// });
// console.log("array value is",ar1)
var output = ar1.map(num=>{
    return num*num;
})
var add  = ar1.map(a=>{
    return a +2;
})
console.log("addition of two nnumber",add);
console.log("multiply of array",output);
// console.log("first array",array);
// console.log("second array",array1);

