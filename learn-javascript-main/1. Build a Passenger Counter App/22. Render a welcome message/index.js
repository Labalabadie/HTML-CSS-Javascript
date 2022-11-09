// Grab the welcome-el paragraph and store it in a variable called welcomeEl\
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
let name = "Agustín"

// and the greeting we want to render on the page
let greeting = "Welcome to my house, my name is "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name

