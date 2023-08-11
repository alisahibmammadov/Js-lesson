// if
// if else
// if else if else
// switch
// ternary operator
// **************************
// let num = 3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// }

// let num = 20
// if(num < 0 ){
//   console.log(`${num} musbet reqemdir`);
// }

// //  3 is a positive number
// *********************
// let isRaining = false;
// if (isRaining) {
//   console.log("Remember to take your rain coat.");
// }else{
//   console.log("hava guneslidir");
// }
// ******************

// let num = 3;

// if (num > 0) {
//   if (num > 1 && num < 4) {
//     console.log("num ya 2 dir ya da 3");
//     if(){

//     }
//   } else {
//     console.log("num 5dir");
//   }
// } else {
//   console.log(`${num} is a negative number`);
// }
// //  3 is a positive number
// *************************

// let a = 0
// if (a > 0) {
//   console.log(`${a} is a positive number`)
// } else if (a < 0) {
//   console.log(`${a} is a negative number`)
// } else if (a == 0) {
//   console.log(`${a} is zero`)
// } else {
//   console.log(`${a} is not a number`)
// }

// ************************

// let promtValue = parseInt(prompt("Yalniz reqem daxil edin"))
// switch (promtValue) {
//   case 0:
//     console.log("Bizim deyerimiz 0-dir");
//     break;
//   case 2:
//     console.log("reqem 2dir");
//     // code
//     break;
//   case 10:
//     console.log("reqem 10-dur");
//     // code
//     break;
//   default:
//     console.log("Bura reqemdir");
//   // code
// }

// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }
// ****************************

// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }
// **************************

// Ternary Operators
let isRainings = true;

isRainings
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

let num = 10;

num > 10 ? console.log("10dan boyukdur") : console.log("ya 10 a beraberdir yada 10dan kicikdir");
