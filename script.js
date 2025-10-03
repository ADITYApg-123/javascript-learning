// Day 1: JavaScript Basics
// We'll start our JavaScript journey here!

console.log("🚀 Welcome to JavaScript!");
console.log("Ready to learn? Let's go!");

// We'll add our code step by step below this line

// Variables - containers for storing data
let myName = "Aditya";
let myAge = 25;
let isLearning = true;

console.log("My name is", myName);
console.log("My age is:", myAge);
console.log("Am I learning JavaScript?", isLearning);

// Different Data Types
let studentName = "Aditya";  //string
let score = 80;   // Numbers(can be decimal)
let isGraduated = true; // Boolean
let favouriteColors = ["blue", "green", "red", "yellow"]; //Array
let student = {name: "Aditya", grade: "B"};  //Object

console.log("=== Data Types Demo ===");
console.log("Name:", studentName, "Type:", typeof studentName);
console.log("Score:", score, "Type:", typeof score);
console.log("Graduated:", isGraduated, "Type:", typeof isGraduated);
console.log("Favourite Colors:", favouriteColors, "Type:", typeof favouriteColors);
console.log("Student Object:", student, "Type:", typeof student);

//Functions - reusable blocks of code
function greetUser(name) {
    return "Hello, " + name + "! Welcome to JavaScript!"
}

function addNumbers(num1, num2) {
    return num1+num2;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log("=== Functions Demo ===");
console.log(greetUser("Aditya"));
console.log("5 + 3 = ", addNumbers(5, 3));
console.log("Random number:", getRandomNumber());


// Arrays - lists of data
let fruits = ["apple", "banana", "cherry"];
let numbers = [10,25, 3, 47, 12];
let mixed = ["Hello", 42, true, "world"];

console.log("=== Arrays Demo ===");
console.log("Fruits:", fruits);
console.log("fruits:", fruits[0]);
console.log("first fruit length:", fruits.length);

//adding and removing items
fruits.push("mango");
console.log("After adding mango:", fruits);

let removedFruit = fruits.pop(); // removes from end
console.log("removed fruit:", removedFruit);
console.log("Final fruits:", fruits);