//singleton

const mySym = Symbol("key")

//object literals
const obUser ={
    name :"hitesh",
    "full name" :"Amrit prjpt",
    [mySym]:"demo", //correct way to declare symbol
    age : 18,
    location :"jaipur",
    email:"amrit@google.com",
    isLoggedIn :false,
    lastLoggingDay:["MONDAY","SATURDAY"]

}

console.log(obUser.email);
console.log(obUser["email"]);
console.log(obUser["full name"]); //no way that u get by .
console.log(obUser.mySym); //no way that u get by .
console.log(obUser.mySym); //no way that u get by .
console.log(typeof obUser.mySym); //no way that u get by .
console.log(obUser[mySym]); //no way that u get by .

