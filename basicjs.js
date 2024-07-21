document.write("Hello Javascript");
console.log("Hello World");

// window.alert("Hey!")

a = 12;
document.write(a);

let a12abc = "paresh";
document.write(a12abc);

//  let a12abc = "pareshghume";
//  document.write(a12abc)

var myname = "paresh ghume";
document.write("<br>" + myname);

var myname = "gagan";
document.write("<br>" + myname);

let x = "java";
document.write(x);

var x1 = "javascript";
document.write(x1);

let re = "hello";
re = "paresh";
document.write(re);

{
  let bs = "python";
  document.write(bs);
}

let bs = "kotlin";
document.write(bs);

const a1 = "constant";
document.write(a1);

{
  let a11 = "constant";
  document.write(a11);
}

let a11 = "gdhjag";
document.write(a11);

document.write(pqr);
var pqr = "euuuu";

let un;
document.write("<br>" + un);
document.write(typeof un);

let de = 34.000001;
document.write(de);

let dea = 12;
document.write(dea + "<br>");

let num1 = 1456;
num1 *= 12345;
document.write(num1);

let score = 95;
let grade =
  score >= 90
    ? "A+ grade"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
document.write(grade); // Output: "B"

let x11 = 100 + (50 * 3) / 56 + 34;
document.write(x11);

document.write(typeof null);
document.write(typeof undefined);
document.write(5 >> 1);

const student = {
  name: "paresh ",
  rollno: 12,
  address: " chembur",
  nationality: " indian",
  fullname: function () {
    return "my name is " + this.name + "and i'm " + this.nationality + ".";
  },
};

document.write(
  student.name + student.rollno + student.address + student.nationality
);

const person = {};

document.write((person.name = " gagan"));
person.age = 20;
document.write((person.gender = "male"));

const studinfo = new Object();

studinfo.name = "ganesh";
studinfo.age = 20;
studinfo.gender = "male";

document.write(studinfo.name + studinfo.age + studinfo.gender);

let name = null + true;
console.log(name);
console.log(typeof name);

const obj1 = {
  name: "paresh",
  rollno: 12,
  age: 20,
};

console.log(obj1);
delete obj1.age;
console.log(obj1["name"] + obj1.rollno);
console.log(obj1.age);

let xabc = "name";
let xabcd = "rollno";

console.log(obj1[xabc] + obj1[xabcd]);

obj1.address = "chembur";
obj1.gender = "male";

console.log(obj1.name + " is living in " + obj1.address);

console.log(obj1);

const collection = {
  booktype: "book",
  btype: {
    b1: "english",
    b2: "marathi",
    b3: "sanskrit",
  },

  allbooks: function () {
    return (
      "my book collection is " +
      (
        this.btype.b1 +
        "," +
        this.btype.b2 +
        "," +
        this.btype.b3
      ).toUpperCase() +
      "."
    );
  },

  cartype: "cars",
  ctype: {
    c1: "BMW",
    c2: "Audi",
    c3: "mercedes",
  },

  personloggedin: true,
};

document.write(collection);

console.log(collection);

console.log(collection.cartype);

console.log(collection.btype.b2); // first method for accesssning object
console.log(collection["ctype"]["c3"]); // second method for accesssning object
const xcollection = collection;
const xbtype = "btype"; // third method for accesssning object
const xb1 = "b1"; // third method for accesssning object
console.log(xcollection);
console.log(xcollection[xbtype]); // third method for accesssning object using square bracket
console.log(xcollection[xbtype][xb1]); // third method for accesssning object using square bracket

collection.allbook = function () {
  return this.btype.b3;
};
console.log(collection.allbook());

console.log(student.fullname());

console.log(collection.allbooks());

let entry = Object.entries(student);
console.log(entry);

// console.log(typeof entry)

const MyEstate = new Object();

MyEstate.name = "<br>" + "Sk Group";
MyEstate.id = 1001;
MyEstate.location = "Chembur" + "<br>";

console.log(MyEstate);

const myValues = Object.values(MyEstate);
console.log(myValues);

const myStrig = JSON.stringify(MyEstate);
document.write(myStrig);

const target = {
  a: 1,
  b: 2,
};

const source = {
  c: 3,
  d: 4,
};

const anothers = {
  e: 5,
  f: 6,
};

const add =Object.assign({},anothers,target,source) // first method to add two obejct in another variable
console.log(add)

const add1 = {...target,...source}; // second method to add two obejct using ...spread operator
console.log(add1);

console.log(Object.keys(add1))

console.log(Object.entries(source))

const isprpo = collection.hasOwnProperty("btype");
console.log(isprpo)

Object.freeze(target)
target.z = 12;

console.log(target)

// const student1 = {
//   firstName : "paresh",
//   lastName : "Ghume",
//   age : 20,
//   class : 5
// }

// console.log(student1)

function Student1(firstname,lastname,age,clsname){ //object constructor function
  this.firstName = firstname;
  this.lastName = lastname;
  this.sage = age;
  this.sclass = clsname;
}

const student11 = new Student1("paresh","Ghume",20,"Tycs");
const student12 = new Student1("gagan","gowda",20,"Tycs");
const student13 = new Student1("ganesh","dete",20,"Tycs");
console.log(student11);
console.log(student12);
console.log(student13);

student11.gender = "male";
console.log(student11);

student13.fullname = function(){
  return this.firstName+" "+this.lastName;
}
// const af = Student1.prototype.div = "c";
// console.log(af);
console.log(student13.fullname())

Student1.prototype.address = "chembur";
console.log(student12.address)

student13.happy = "yes";
console.log(student13.happy)

