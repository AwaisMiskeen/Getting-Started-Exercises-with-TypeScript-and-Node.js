//define variables
let mango = "mango"
let upper_case_mango = "MANGO"
let five = 5
let ten = 10
//making array
let fruits=["Apple","Mango","Banana"]

//test for equality and unequality with string

console.log("Is mango is equal to mango?")
console.log(mango == "mango")

console.log("Is mango is unequal to mango?")
console.log(mango != "mango")

//test using lower case function
console.log("\nIs MANGO is equal to mango after converting to lower case? ")
console.log(upper_case_mango.toLowerCase() == "mango")

console.log("Is MANGO is unequal to mango after converting to lower case? ")
console.log(upper_case_mango.toLowerCase() != "mango")

   //numerical test
//equal and unequal
console.log("\nIs five is unequal to ten?")
console.log(five!=ten)

console.log("Is five is equal to ten?")
console.log(five==ten)

//greater and less than
console.log("\nIs ten is greater than five?")
console.log(ten>five)

console.log("Is ten is less than five?")
console.log(ten<five)

   //test using && and || condition
//using &&
console.log("\nIs ten is greater than five AND five is less than ten?")
console.log(ten>five && five<ten)

console.log("Is five is greater than ten AND five is less than ten?")
console.log(five>ten && five<ten)

//using ||
console.log("\nIs ten is greater than five OR five is greater than ten?")
console.log(ten>five || five>ten)

console.log("Is five is greater than ten OR ten is less than five?")
console.log(five>ten || ten<five)

//test whether an item is included in array
console.log("\nIs Mango is icluded in my fruits array?")
console.log(fruits.includes("Mango"))

console.log("Is Mango is not icluded in my fruits array?")
console.log(!fruits.includes("Mango"))