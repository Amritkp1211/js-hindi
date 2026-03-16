// #primitive datatypes

//7 String,Number Boolean null undefined Symbol BigInt

//dynamically types

const score=100;
const scoreValue=100.3

const isLoggeIn = false;
const outSideTemp = null
let userEmail;

const id =Symbol('123')
const customerId =Symbol('123')

console.log(id);
console.log(customerId);

console.log(id === customerId);



//Refrence Type

//Array ,Objects Funcntions 

//+++++++++++++++++++++++++++++++++++++++++

//stack(primitive ) heap(non -primitive )

let myName= "amrit"
let anotherName =myName

anotherName ="praveen"

console.log(myName);
console.log(anotherName);

let user = {
    email :"user@mail.com",
    name :"kailash"
}
