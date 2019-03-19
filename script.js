var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";


function randomize() {
    var hexOneArray = [randomHexNumbers(), randomHexNumbers(), randomHexNumbers()];
    var hexTwoArray = [randomHexNumbers(), randomHexNumbers(), randomHexNumbers()];
    var myHexOne = "#" + hexOneArray[0] + hexOneArray[1] + hexTwoArray[2];
    var myHexTwo = "#" + hexTwoArray[0] + hexTwoArray[1] + hexTwoArray[2];

    function randomHexNumbers () {
        var randomNumbas = Math.round(Math.random() * 100);
        if (randomNumbas < 10) {
            return "6A";
        }
        var randomHex = "" + randomNumbas; 
        if (randomHex.length === 1) {
            return randomHexNumbers();
        }
        else {
            return randomHex;
        }
    }
   
    body.style.background = "linear-gradient(to right, " + myHexOne + ", " + myHexTwo + ")";
}

function colorValue () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
} 


random.addEventListener("click", randomize)

color1.addEventListener("input", colorValue)

color2.addEventListener("input", colorValue)