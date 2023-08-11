// Arrays

// Created
// const arr = Array()

// const arr2 = []

// const arr = [
//   "Asabeneh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] },
// ];
// console.log(arr[4].skills[]);
// // console.log(arr[3].skills[4]);
// *********************************

// // Split
// let js = 'JavaScript is good lang in the world'
// const charsInJavaScript = js.split(" ")
// console.log(js);
// console.log(charsInJavaScript);
// *********************************
// Modifying array element
// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10      // changing 1 at index 0 to 10
// numbers[1] = 20      // changing  2 at index 1 to 20
// numbers[4] = 30
// console.log(numbers);
// *********************************
// Join
// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.join()) // 1,2,3,4,5
// console.log(numbers);
// *********************************
// Slice
// const numbers = [1,2,3,4,5]

// // console.log(numbers.slice()) // -> it copies all  item
// // console.log(numbers.slice(0)) // -> it copies all  item
// // console.log(numbers.slice(0, numbers.length)) // it copies all  item
// console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// ********************************
// push method

// const arr  = ['item1', 'item2','item3']
// arr.push('new item')
// console.log(arr)
// ['item1', 'item2','item3','new item']

// ******************************
// pop: Removing item in the end.

// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end

// console.log(numbers) // -> [1,2,3,4]
// ******************************
// shift: Removing one array element in the beginning of the array.

// const numbers = [1, 2, 3, 4, 5]
// numbers.shift() // -> remove one item from the beginning
// console.log(numbers) // -> [2,3,4,5]

// ********************************
// unshift: Adding array element in the beginning of the array.

// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning
// console.log(numbers)   [0,1,2,3,4,5]

//*********************************
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// // webTechs.sort()
// console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// webTechs.reverse() // after sorting we can reverse it
// console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 5]]

console.log(arrayOfArray[1][2]);
//  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//  const backEnd = ['Node','Express', 'MongoDB']
//  const fullStack = [frontEnd, backEnd]
//  console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
//  console.log(fullStack.length)  // 2
//  console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
//  console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
