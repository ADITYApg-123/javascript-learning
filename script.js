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

    // Advanced Event Handling
    const liveInput = document.getElementById('live-input');
    const liveOutput = document.getElementById('live-output');
    const hoverBtn = document.getElementById('hover-btn');
    const mouseTracker = document.getElementById('mouse-tracker');

    // Live typing event (keyup = after each key press)
    liveInput.addEventListener('keyup', function() {
        const text = liveInput.value;
        liveOutput.textContent = "You typed: '" + text + "' (" + text.length + " characters)";
    });

    //Mouse hover events
    hoverBtn.addEventListener('mouseenter', function() {
        hoverBtn.textContent = "You're hovering!";
        hoverBtn.style.backgroundColor = '#ff6b6b';
    });

    hoverBtn.addEventListener('mouseleave', function() {
        hoverBtn.textContent = "Hover over me!";
        hoverBtn.style.backgroundColor = '#007acc';
    });

    // Mouse movement tracking
    mouseTracker.addEventListener('mousemove', function(event) {
        const rect = mouseTracker.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        mouseTracker.innerHTML = "Mouse position: X=" + Math.round(x) + ", Y=" + Math.round(y);
    });

    // Day 3: Form Validation
    const contactForm = document.getElementById('contact-form');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userMessage = document.getElementById('user-message');

    //Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('form-success');

    // Validation functions
    function validateName(name) {
        if(name.trim().length < 2) {
            return "Name must be at least 2 charactters long";
        }
        if(!/^[a-zA-Z\s]+$/.test(name)) {
            return "Name can only contain letters and spaces";
        }
        return ""; // No error
    }  

    function validateEmail(email) {
        if(email.trim() === "") {
            return "Email is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return "Please enter a valid email address";
        }
        return ""; // No error
    }

    function validateMessage(message) {
        if(message.trim().length < 10) {
            return "Message must be at least 10 characters long";
        }
        return ""; // No error
    }

    //Real-time validation (as user types)
    userName.addEventListener('blur', function() {
        nameError.textContent = validateName(userName.value);
    });

    userEmail.addEventListener('blur', function() {
        emailError.textContent = validateEmail(userEmail.value);
    });

    userMessage.addEventListener('blur', function() {
        messageError.textContent = validateMessage(userMessage.value);
    });

    // Form submission handling
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop form from atually submitting

        // Clear previous success message
        formSuccess.style.display = 'none';

        // Validate all fields
        const nameErr = validateName(userName.value);
        const emailErr = validateEmail(userEmail.value);
        const messageErr = validateMessage(userMessage.value);

        // Display all errors
        nameError.textContent = nameErr;
        emailError.textContent = emailErr;
        messageError.textContent = messageErr;

        // if no error, show success
        if(!nameErr && !emailErr && !messageErr) {
            formSuccess.style.display = 'block';
            outputElement.innerHTML += "<div style = 'background: #d4edda; padding:10px; margin:10px 0; border-radius:5px;'>" +
            "<strong>Form Data Submitted :</strong><br>" +
            "Name: " + userName.value + "<br>" +
            "Email: " + userEmail.value + "<br>" +
            "Message: " + userMessage.value +
            "</div>";

            // clear form 
            contactForm.reset();
        }
    });

    // Day 4: Async Javascript & API calls
    const fetchJokeBtn = document.getElementById('fetch-joke-btn');
    const fetchFactBtn = document.getElementById('fetch-fact-btn');
    const fetchQuoteBtn = document.getElementById('fetch-quote-btn');
    const apiOutput = document.getElementById('api-output');
    const loading = document.getElementById('loading');

    // Helper function to show loading
    function showLoading() {
        loading.style.display = 'block';
        apiOutput.innerHTML = '<p style="color: #6c757d; font-style: italic;">Loading...</p>';
    }

    // Helper function to hide loading
    function hideLoading() {
        loading.style.display = 'none';
    }

    //Fetch a random joke
    fetchJokeBtn.addEventListener('click', async function() {
        showLoading();

        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const joke = await response.json();

            hideLoading();
            apiOutput.innerHTML = `
                <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">
                    <h4 style="color: #1976d2; margin: 0 0 10px 0;">😂 Random Joke</h4>
                    <p style="margin: 5px 0;"><strong>Setup:</strong> ${joke.setup}</p>
                    <p style="margin: 5px 0;"><strong>Punchline:</strong> ${joke.punchline}</p>
                    <small style="color: #666;">Source: Official Joke API</small>
                </div>
            `;
            console.log('Joke fetched:', joke);
        }
        catch (error) {
            hideLoading();
            apiOutput.innerHTML = `
                <div style="background: #ffebee; padding: 15px; border-radius: 8px; border-left: 4px solid #f44336;">
                    <p style="color: #c62828; margin: 0;">❌ Error fetching joke: ${error.message}</p>
                </div>
            `;
            console.log('Error:', error);
        }
    });

    //Fetch a Cat fact
    fetchFactBtn.addEventListener('click', async function() {
        showLoading();

        try {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();

            hideLoading();
            apiOutput.innerHTML = `
                <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
                    <h4 style="color: #388e3c; margin: 0 0 10px 0;">🐱 Cat Fact</h4>
                    <p style="margin: 5px 0; font-size: 16px;">${data.fact}</p>
                    <small style="color: #666;">Length: ${data.length} characters | Source: Cat Facts API</small>
                </div>
            `;
            console.log('Cat fact fetched:', data);

        } catch (error) {
            hideLoading();
            apiOutput.innerHTML = `
                <div style="background: #ffebee; padding: 15px; border-radius: 8px; border-left: 4px solid #f44336;">
                    <p style="color: #c62828; margin: 0;">❌ Error fetching cat fact: ${error.message}</p>
                </div>
            `;
            console.error('Error:', error);
        }
    });

    //Fetch an inspirational quote
    fetchQuoteBtn.addEventListener('click', async function() {
        showLoading();

        try {
            const response = await fetch('https://api.quotable.io/random');
            const quote = await response.json();

            hideLoading();
            apiOutput.innerHTML = `
                <div style="background: #f3e5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #9c27b0;">
                    <h4 style="color: #7b1fa2; margin: 0 0 10px 0;">✨ Inspirational Quote</h4>
                    <blockquote style="margin: 10px 0; font-size: 18px; font-style: italic; color: #333;">
                        "${quote.content}"
                    </blockquote>
                    <p style="margin: 5px 0; text-align: right; color: #666;">— ${quote.author}</p>
                    <small style="color: #666;">Tags: ${quote.tags.join(', ')} | Source: Quotable API</small>
                </div>
            `;
            console.log('Quote fetched:', quote);

        } catch (error) {
            hideLoading();
            apiOutput.innerHTML = `
                <div style="background: #ffebee; padding: 15px; border-radius: 8px; border-left: 4px solid #f44336;">
                    <p style="color: #c62828; margin: 0;">❌ Error fetching quote: ${error.message}</p>
                </div>
            `;
            console.error('Error:', error);
        }
    });

});

// Helper function to generate random colors
function getRandomColor() {
    const colors = ['#ffcccb', '#add8e6', '#90ee90', '#ffd700', '#dda0dd', '#f0e68c'];
    return colors[Math.floor(Math.random() * colors.length)];
}   
