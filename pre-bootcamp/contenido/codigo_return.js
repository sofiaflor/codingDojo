function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
//console.log imprime ('hello','Dojo')//

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
//console.log imprime (hello)//
//console.log imprime (result is hello 15)//

/*
Diagrama de T
variables  valor
result    (hello)
*/

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
//console.log imprime (num is 3)//
//console.log imprime (result is mumPlus 18)

/*
Diagrama T
variables   valores
result      numPlus(3)
*/

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
//console.log imprime (15)//
//console.log imprime (10)//
//console.log imprime (10)//
//console.log imprime (15)//

/*
Diagrama de T
variables    valores
num             (15)
result          (10)
*/

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
//console.log imprime (15)//
//console.log imprime (10)//
//console.log imprime (20)//
//console.log imprime (15)//

/*
Diagrama de T
variables    valores
num            (15)
result         (10)
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
//console.log imprime (num is 3)//
//console.log imprime (num is 5)//
//console.log imprime (result is 16)//

/*
Diagrama de T
variables   valores
y            num*2
result       8
*/

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
 //console.log imprime (sumNums(5))//
 //console.log imprime (sumNums(8))//


 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
//console.log imprime (2)//
// console.log(5)//
//console.log 3//
//console.log(8)//


function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
//console.log(5)//
//console.log(8)//
//console.log(result is 13)//

/*
diagrama de t
variables   valores
sum          5
sum          8
result       13
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
//console.log(5)//
//console.log(3)//
//console.log(6)//
//console.log(3)//
//console.log(8)//
//console.log(result is 19)//
/*
diagrama de T
variables     valores
sum            5
sum            3
sum            6
sum            3
sum            8
result         19
*/

