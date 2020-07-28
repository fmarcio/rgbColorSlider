//Select all inputs
let inputs = document.querySelectorAll('input');

//Change background color function
function changeBgColor() {
    //Select each color and its values
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;

    //Select color display
    let colorDisplay = document.getElementById('colorDisp');

    //Change color display background
    let colorDisplayBg = colorDisplay.style.background = `rgb(${red}, ${green}, ${blue})`;
    
    //Select color output and change html span
    let colorOutput = document.getElementById('colorOutput');
    colorOutput.innerHTML = ' ' + colorDisplayBg;
};

//Loop through inputs and add event listeners on them
for (ipt of inputs) {
    ipt.addEventListener('input', changeBgColor)
} 

