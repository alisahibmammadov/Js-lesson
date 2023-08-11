// Math Object
const PI = Math.PI;

console.log(PI);

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

// Example
let firstName = "Alisahib ";
let lastName = "Mammadov";
let country = "Azerbaijan";
let city = "Baku";
let language = "JavaScript";
let job = "teacher";
let age = 25;
let fullName = firstName + " " + lastName;

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);

// toUpperCase() String Method

let string = "JavaScript";

console.log(string.toUpperCase());

// toLowerCase() String Method

let string2 = "JavasCript";

console.log(string2.toLowerCase());

// substr() string method
let string3 = "JavaScript";
console.log(string3.substr(4, 6));

// split() string method

let string4 = "30 Days Of JavaScript";
console.log(string4.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string4.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// trim() string method

let string5 = "   30 Days Of JavaScript   ";

console.log(string5);
console.log(string5.trim(" "));

// includes() string method
let string6 = "30 Days Of JavaScript";

console.log(string6.includes("Days")); // true
console.log(string6.includes("days")); // false - it is case sensitive!
console.log(string6.includes("Script")); // true
console.log(string6.includes("script")); // false
console.log(string6.includes("java")); // false
console.log(string6.includes("Java")); // true

// replace() string method
let string7 = "30 Days Of JavaScript";
console.log(string7.replace("JavaScript", "Python")); // 30 Days Of Python

let country2 = "Finland";
console.log(country2.replace("Fin", "Noman")); // Nomanland

// charAt()

let string8 = "30 Days Of JavaScript";
console.log(string8.charAt(0)); // 3

let lastIndex = string.length - 1;
console.log(string8.charAt(lastIndex)); // t

// indexOf()
let string9 = "30 Days Of JavaScript";

console.log(string9.indexOf("D")); // 3
console.log(string9.indexOf("Days")); // 3
console.log(string9.indexOf("days")); // -1
console.log(string9.indexOf("a")); // 4
console.log(string9.indexOf("JavaScript")); // 11
console.log(string9.indexOf("Script")); //15
console.log(string9.indexOf("script")); // -1

// parseInt()
// Number()
// Plus sign(+)
// parseFloat()

// let num = '10'
// let numInt = parseInt(num)
// console.log(numInt) // 10
// let num = '10'
// let numInt = Number(num)

// console.log(numInt) // 10
// let num = '10'
// let numInt = +num

// console.log(numInt) // 10
// let num = '9.81'
// let numFloat = parseFloat(num)

// console.log(numFloat) // 9.81


