// get all elements
const display = document.querySelector("#answer");

let numbers = document.querySelectorAll(".grid-item");

let visibleDisplay = "";
let firstNum = "";
let secondNum = "";
let operator = "";

for(let i =0; i< numbers.length; i++) { 
    numbers[i].addEventListener('click', function() {
        visibleDisplay += numbers[i].innerText
        display.innerHTML = visibleDisplay;

        if (numbers[i].classList.contains("plus")) {
            operator = "plus";
            firstNum = visibleDisplay.slice(0,-1);
        } else if (numbers[i].classList.contains("minus")) {
            operator = "minus";
            firstNum = visibleDisplay.slice(0,-1);
        } else if (numbers[i].classList.contains("multiply")) {
            operator = "multiply";
            firstNum = visibleDisplay.slice(0,-1);
        } else if (numbers[i].classList.contains("divide")) {
            operator = "divide";
            firstNum = visibleDisplay.slice(0,-1);
        } else if (numbers[i].classList.contains("clear")) {
            display.innerHTML = "";
            visibleDisplay = "";
            firstNum = "";
            secondNum = "";
            operator = "";
        }

        
        
        if (numbers[i].classList.contains("equals")) {
            secondNum = Number(display.innerText.slice((firstNum.length+1), -1));
            firstNum = Number(firstNum);

            if (operator === "plus") {
                visibleDisplay = firstNum + secondNum;   
            } else if (operator === "minus") {
                visibleDisplay = firstNum - secondNum;   
            } else if (operator === "multiply") {
                visibleDisplay = firstNum * secondNum;   
            } else if (operator === "divide") {
                visibleDisplay = firstNum / secondNum;   
            }

            if (visibleDisplay.toString().length > 15) {
                visibleDisplay = visibleDisplay.toString().substring(0, 15);
                display.innerHTML = visibleDisplay
                console.log(typeof visibleDisplay);
                console.log('length' + visibleDisplay.toString().length)
            } else {
                display.innerHTML = visibleDisplay;
                console.log(typeof visibleDisplay);
                console.log('length' + visibleDisplay.toString().length)
            }
        }
    })   
}


