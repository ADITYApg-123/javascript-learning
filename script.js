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


// Dy 2:  Dom manipulation - Making webages interractive!
console.log("=== Day 2: Dom Manipulation ===");

//Wait for pages to load completely
document.addEventListener('DOMContentLoaded', function() {

    // get refernces to HTML elements
    const titleElement = document.getElementById('main-title');
    const descritionElement = document.getElementById('description');
    const outputElement = document.getElementById('output');

    // get references to buttons
    const changeTitleBtn = document.getElementById('change-title-btn');
    const changeColorBtn = document.getElementById('change-color-btn');
    const addTextBtn = document.getElementById('add-text-btn');

    console.log("Dom elements found!", titleElement, changeTitleBtn);

    // Make buttons interactive
    changeTitleBtn.addEventListener('click', function() {
        titleElement.textContent = 'JavaScript is Awesome!';
        console.log("Title changed!");
    });

    changeColorBtn.addEventListener('click', function() {
        titleElement.style.backgroundColor = getRandomColor();
        console.log("Background color changed!");
    });

    addTextBtn.addEventListener(
        'click', 
        function() {
            outputElement.innerHTML += "<p>You clicked at: " + new Date().toLocaleTimeString() + "</p>";
            console.log("Text added!");
        }
    );


// New interactive input features
const userInput = document.getElementById('user-input');
const greetBtn = document.getElementById('greet-btn');
const countBtn = document.getElementById('count-btn');

greetBtn.addEventListener(
    'click', 
    function() {
        const userName = userInput.value; // get what user typed
        if (userName.trim() === '') {
            outputElement.innerHTML += "<p style = 'color:red;'>Please enter your name first!</p>"; // validation
        }
        else {
            outputElement.innerHTML += "<p style = 'color: green;'>Hello, " + userName + "! Nice to meet you! </p>";
        }
    }
);

countBtn.addEventListener(
    'click',
    function() {
        const text = userInput.value;
        const letterCount = text.length;
        outputElement.innerHTML += "<p style='color: blue;'>'" + text + "' has " + letterCount + " characters.</p>";
    }
);

});

// Helper function to generate random colors
function getRandomColor() {
    const colors = ['#ffcccb', '#add8e6', '#90ee90', '#ffd700', '#dda0dd', '#f0e68c'];
    return colors[Math.floor(Math.random() * colors.length)];
}   