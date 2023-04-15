const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")";

    h3.textContent = body.style.background + ";"; //we update the <h3> with this text
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)


function a() {
    console.log(this)
} // this function will print the window

const object4 = {
    a: function(){
        console.log(this)
    }
} // if we run object4.a() we will receive {a: f}