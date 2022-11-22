
const container = document.getElementById("container")

container.innerHTML = "<button id='buy-btn'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
let buy = document.getElementById("buy-btn")
buy.addEventListener("click", function () {console.log("Thank you for buying!")})