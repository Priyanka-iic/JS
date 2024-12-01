/*
let score = "44dadd"

console.log(typeof score);


let value_in_number = Number(score);

//this garuntees that now score has veen converted to number data type

console.log(typeof value_in_number);
console.log(value_in_number); //gives NaN 

let score2 = null
console.log(typeof score2);

let value2 = Number(score2);
console.log(typeof value2);
console.log(value2); //gives 0



// "44" >> converts easily to number
// "334frf" >> NaN (not a number)
// true >> 1; false >> 0
//underfiend >> NaN
// null > 0

let is_logged_in = "hello"

let result_bool = Boolean(is_logged_in);
console.log(result_bool);

// 1>> gives true
// 0>> gives false
// "" >> gives false
// "valed string" gives true


let num = 3
let valOne = String(num)
console.log(valOne);
console.log(typeof valOne);

*/

//OPERATIONS

let value = 3
let negvalue = -value

console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1 = "hello"
let str2 = " Priyanka"
let str3 = str1 + str2
console.log(str3);

//problematic situations

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2"); 

// all give 12

console.log("1" + 2 + 2); //also gives 122 not 14

console.log(1 + 2 + "2"); //gives 32
//firstcomefirst print

console.log(true);
console.log(+true);
//console.log(true+); //gives error

console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

//not a good a way to code readability is important

let cycle = 10

++cycle;
console.log(cycle);


