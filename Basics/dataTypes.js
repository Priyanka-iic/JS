/*
"use strict"; > treat all JS code as newer version
*/

//alert("hello") //using nodejs not browser


let name = "String data type"
let age = 20
let isboolean = true

//number data type has some range
//for some bigger number we can use bigint
//string data type can be used either with single or double quotes
//boolean we know use for comparison

//null is a value >> stand alone value

//undefined > whoes value is not defiend

let state = null


//symbol >> unique

//object non premitive data type

//with typeof we can know the data type and here null is defined as object type

console.log(typeof state)


//Mainly on the basis of memory space and how they are accessed, data types are sorted into 2 categories

//Primitive datatype
//they are call by value datatype 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const sy1 = Symbol("Abc");
console.log("-----------------------------------------------------------------------------------------");

console.log(sy1);
console.log(typeof(sy1));

//Non-Primitive or Reference data types
//Arrays, Objects, Functions
