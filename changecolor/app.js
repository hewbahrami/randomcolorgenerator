const $button = document.querySelector(".color-btn");
const $background = document.querySelector("body");
const $header = document.querySelector(".hex-code");
const $hex = document.querySelector(".hex");
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

$button.addEventListener('click', event => {
    changeColor();
});

function changeColor() {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        let randNumber = Math.floor(Math.random() * colors.length);
        hexCode += colors[randNumber];
    }
    $background.style.backgroundColor = hexCode;
    $hex.innerHTML = hexCode;
}

// function setHexCode () {
//     hexCode = colors[randNumber];
//     console.log(hexCode)
//     $header.innerHTML = "The hex code is: {hexCode}"
// }



