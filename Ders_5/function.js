// 1 Declaration function
// 2 Expression function
// 3 Anonymous function
// 4 Arrow function

// const inputPass = document.getElementById("pass")
// const btn = document.getElementById('btn')

// btn.addEventListener('click',btnClick)

// function btnClick(){
//     console.log(inputPass.value);
// }

// 1 declaring a function without a parameter
// function functionName() {
//   // code goes here
// }
// functionName();

// function square() {
//   let num = 2;
//   let kv = num ** 2;
//   console.log(kv);
// }

// square(); // 4
// *******************************************

// Function returning value
// function printFullName (){
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return console.log(fullName);

// }
// // console.log(printFullName())
// printFullName()

// *******************************************
// Function 1 parametr ile
// function functionName(parm1) {
//     //code goes her
//   }
//   functionName(parm1) // during calling or invoking one argument needed

//   function areaOfCircle(r) {
//     let area = Math.PI * r * r
//     return area
//   }

//   console.log(areaOfCircle(10)) // should be called with one argument

//   function square(number) {
//     return number * number
//   }

//   console.log(square(10))

// function cem (num1,nun2){
//     return console.log(num1 + num2);
// }
// cem(100,200)

// ********************************************

// // function 2 parametr ile
// function functionName(parm1, parm2) {
//   //code goes her
// }
// functionName(parm1, parm2) // during calling or invoking two arguments needed
// // Function without parameter doesn't take input, so lets make a function with parameters
// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo
//   console.log(sum)
// }
// sumTwoNumbers(10, 20) // calling functions
// // If a function doesn't return it doesn't store data, so it should return

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo
//   return sum
// }

// console.log(sumTwoNumbers(10, 20))
// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`
// }
// console.log(printFullName('Asabeneh', 'Yetayeh'))
// ***********************************************
// Function coxlu parametr ile
// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }
//   const numbers = [1, 2, 3, 4, 5];
//       //calling a function
//   console.log(sumArrayValues(numbers));

// let  toplam  = 0
// for(let i=0; i<=array.length - 1; i++){
//     toplam = toplam + array[i]
// }
// console.log(toplam);
// const array = [1,2,3,4,5]
// function arrCem(massiv){
//     let toplam = 0
//     for(let i = 0;i<=massiv.length - 1;i++){
//         toplam = toplam + massiv[i]
//     }

//     return toplam
// }
// arrCem(array)
// ************************************************
// Anonymous Function

// const anonimFunksiya = function() {
//     console.log(
//       'I am an anonymous function and my value is stored in anonymousFun'
//     )
//   }
//   anonimFunksiya()

// ************************************************
// Expression Function
// const square = function(n) {
//     return n * n
//   }

//   console.log(square(2)) // -> 4

// const ededlerinCemi =  function(num1,num2){
//     return console.log(num1 + num2);
// }
// ededlerinCemi(2,5)
// *************************************************
// Self Invoking Functions
// (function(n) {
//     console.log(n * n)
//   })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

//   let squaredNum = (function(n) {
//     return n * n
//   })(10)

//   console.log(squaredNum)
//   Arrow function
// const square = n => {
//     return n * n
//   }

//   console.log(square(2))  // -> 4

// (function(){
//     console.log("Funksiya");
// })()

// (function(){
//     let ad = "Elnur"
//     let soyad = "Valeh"
//     let butovAd = ad + soyad
//     return console.log(butovAd);
// })()

(function (n1, n2) {
  return console.log(n1 + n2);
})(2, 3);

function cem(n1, n2) {
  return console.log(n1 + n2);
}
cem(19, 20);
//   // if we have only one line in the code block, it can be written as follows, explicit return
//   const square = n => n * n  // -> 4

let funkName = function (ad) {
  let adarr = ad.split("");
  return console.log(adarr);
};
funkName("Erestun");
