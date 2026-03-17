//const zomatoUser = new Object();

const zomatoUser = {};

zomatoUser.id = "abc123";
zomatoUser.name = "amrit";
zomatoUser.isLoggedIn = false;

//console.log(zomatoUser);

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "amrit",
      lastname: "choudhary",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 =Object.assign({},obj1,obj2) 

//console.log(obj3);

//spreading 

const obj4 ={...obj1,...obj2 }

//console.log(obj4);

const course ={
    name:"hindi tutorial",
    price:"999",
    courseInstructor:"Amrit"
}