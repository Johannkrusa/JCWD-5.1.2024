console.log("Hello World");

let message;
let message2;

message = "Hello";
message2 = "World";

console.log (message, message2);


// cant be redeclared but can be reassigned
let a = 1;

// can be redeclared and reassigned
var ab = 0;

// constant - cannot be changed at all
const pi = 3.14;

console.log(pi);

// ====== types of datas ====

// string 
let string_a  = "Hello cat"

// number
let number_a = 5;

// bool
let bool_a = true;

console.log("Types of datas",string_a,number_a,bool_a);
console.table(["Types of datas",string_a,number_a,bool_a]);

let person = {
    name:"GAMER",
    age:33,
    hobby:"FORTNITE"
};

console.table(person);

let hobby = ["rocket league", "genshin impact", "star rail"];

console.table(hobby);

hobby[2] = "valorant";

console.table(hobby);

const devices = ["android", "ios", "windows"];

console.table(devices);

devices[0] = "switch";

console.table(devices);

// object and array is reference type = therefore any changes will always be linked with each-others
let newPerson = person;

person.hobby = "segs";

console.table(person);
console.table(newPerson);

var name_2 = "your mom is lovely";

console.log(name_2.split(" "));
console.log(name_2.indexOf("x"));
console.log(name_2.toUpperCase());
console.log(name_2.toLocaleLowerCase());
console.log(name_2.charAt(2));

let phoneNumber = 132148123;
let address = `Rose Buckley Street, 15543
Sender = ${name_2}
Phone number = ${phoneNumber}`

console.log(address);

var number_3 = 15;

console.log(typeof parseInt(number_3));
console.log(typeof parseFloat(number_3));

if (isNaN(number_3) === true) 
{
    console.log("Number_3 isNaN = True");
}
else
{
    console.log("Number_3 isNaN = False");
}

// Stuff that makes a bool = false by default
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("0"));
console.log(Boolean(""));

console.log(new Date());
console.log(new Date(0)); // always at 1970 
console.log(new Date("2025-05-01"));

console.log(new Date().getFullYear());
console.log(new Date().getMonth());

let string_1 = "hello" + "world";

console.log(string_1);

console.log(string_1.length);

let string_new =("");

for (let i = 0; i < string_1.length; i++)
{
    let string_value = string_1.charCodeAt(i);
    string_value -= 32;
    string_new += String.fromCharCode(string_value); 
}
console.log(string_new);

let x = 10;
let y = 5;

for (let i = 0; i < 4; i++)
{
    x+=5;
}
console.log(x);

// true has a definite value of 1 while false is 0
// true is always be greater than false


// ========= pseudo code =========

// Exercise #1 
var rec_x = 5;
var rec_y = 3;
var solution = rec_x * rec_y;

console.log("Excercise #1 Area : ", solution);
console.log("\n");


// Exercise #2
var rec_x = 5;
var rec_y = 3;
var solution = (2*rec_x) + (2*rec_y);

console.log("Excercise #2 Circumference : ", solution);
console.log("\n");


// Exercise #3
var circ_r = 5;
var circ_d =  2*circ_r;
var solution_1 = Math.PI*circ_d;
var solution_2 = Math.PI*Math.pow(circ_r, 2);

console.log("Excercise #3 Circumference : ", solution_1, " Area :", solution_2);
console.log("\n");

// Exercise #4
var tri_x = 80;
var tri_y = 65;
var tri_angle = 180;

var solution = tri_angle - (tri_x +tri_y)

console.log("Excercise #4 Last Angle : ", solution);
console.log("\n");


// Exercise #5
var date_1 = new Date("2022-01-20");
var date_2 = new Date("2022-01-22");

var solution = Math.abs((date_2 - date_1) /  (1000 * 60 * 60 * 24));

console.log("Excercise #5 Days difference : ", solution);
console.log("\n");


// Exercise #6
var numberOfDays = 400;

var years = Math.floor(numberOfDays / 365);
var remainingDays = numberOfDays % 365;
var months = Math.floor(remainingDays / 30);
var days = remainingDays % 30;

console.log("Excercise #6 Years : ", years, " Months : ", months, "Days : ", days);
console.log("\n");

// ========================================= //



//for (var b = 0; b < 10; b++) {
//    console.log(b);
//}