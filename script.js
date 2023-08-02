//Get text and display
let divRef = document.querySelector("div");
let colorDisplay = document.getElementById("color-display");

//Change colors
let buttonAqua = document.getElementById("aqua");

buttonAqua.onclick = function(){
    colorDisplay.style.backgroundColor = "aqua";
    divRef.textContent = "aqua";
}

let buttonTeal = document.getElementById("teal");

buttonTeal.onclick = function(){
    colorDisplay.style.backgroundColor = "teal";
    divRef.textContent = "teal";
}

let buttonPink = document.getElementById("pink");

buttonPink.onclick = function(){
    colorDisplay.style.backgroundColor = "pink";
    divRef.textContent = "pink";
}

let buttonPurple = document.getElementById("purple");

buttonPurple.onclick = function(){
    colorDisplay.style.backgroundColor = "purple";
    divRef.textContent = "purple";
}

let buttonColorless = document.getElementById("colorless");

buttonColorless.onclick = function(){
    colorDisplay.style.backgroundColor = "white";
    divRef.textContent = "colorless";
}