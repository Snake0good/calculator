let total = 0;

const numbers = document.querySelectorAll('.numbers');
const signs = document.querySelectorAll('.sign');
const result = document.querySelector("#result");
const showPlus = document.querySelector('#show-plus')

let arr = [];
let arr2 = [];
let arr3 = [];

let visibleArray = [];
let mathSymbol;
let answer = 0; // store answer to cut off too many numbers


// ==== check son the page -==== //
const demo = document.querySelector("#demo");
const demoOne = document.querySelector("#demo2");
const demoTwo = document.querySelector("#demo3");

const addNumbers = () => {
    arr.pop();
    arr2.push(Number(arr.join("")))
    // delete all array
    arr.splice(0)
    // store the math symbol
    mathSymbol = "+";
}

const subtractNumbers = () => {
    arr.pop();
    arr2.push(Number(arr.join("")));
    arr.splice(0);
    mathSymbol = "-";
}

const multiplyNumbers = () => {
    arr.pop();
    arr2.push(Number(arr.join("")));
    arr.splice(0);
    mathSymbol = "x";
}

const divideNumbers = () => {
    arr.pop();
    arr2.push(Number(arr.join("")));
    arr.splice(0);
    mathSymbol = "/";
}


for (let i=0; i<numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        let button = numbers[i].innerText;
        arr.push(button);
        
        visibleArray.push(button);
        result.innerHTML = visibleArray.join("");

        if (button === "C") {
            arr = [];
            arr2 = [];
            arr3 = [];
            visibleArray = [];
            mathSymbol = '';
            result.innerHTML = "- -";
        }


        // push the number into arr2 and hold it
        if (button === "+") {
            if (answer === 0) {
                addNumbers();
            } else {
                arr2 = answer;
                arr = [];
                mathSymbol = "+";
            }
        } else if (button === "-") { // this is the minus symbol            
            if (answer === 0) {
                subtractNumbers();
            } else {
                arr2 = answer;
                arr = [];
                mathSymbol = "-";
            }
        } else if (button === "×") { // this is the multiplication symbol    
            if (answer === 0) {
                multiplyNumbers();
            } else {
                arr2 = answer;
                arr = [];
                mathSymbol = "x";
            }
        } else if (button === "÷") { // this is the division symbol    
            if (answer === 0) {
                divideNumbers();
            } else {
                arr2 = answer;
                arr = [];
                mathSymbol = "/";
            }
        } 

        // check the math symbol to see which function to perform
        if (button === "=") {
            arr.pop();
            result.innerHTML = Number(arr.join(" "));
            arr3.push(Number(arr.join("")));

            if (arr3 === "") {
                arr3 = Number(newNumber);
            }

            // show the second number to be added
            if (mathSymbol === "+") {
                answer = (Number(arr2) + Number(arr3));
                result.innerHTML = (Number(arr2) + Number(arr3));  
                mathSymbol = "";
                // store the answer
            } else if (mathSymbol === "-") {
                result.innerHTML = (Number(arr2) - Number(arr3));
                mathSymbol = "";     
                // store the answer
                answer = (Number(arr2) - Number(arr3));
            } else if (mathSymbol === "x") {
                // store the answer
                answer = (Number(arr2) * Number(arr3)); 
                result.innerHTML = answer;
                mathSymbol = "";    
            } else if (mathSymbol === "/") {
                // store the answer
                answer = (Number(arr2) / Number(arr3)); 
                if (answer.toString().length > 9) {
                    result.innerHTML = answer.toFixed(9);
                } else {
                    result.innerHTML = answer;
                }
                
                mathSymbol = "";              
            }

            // claer all of the arrays --> maybe keep one to go again?
            arr = [];
            arr2 = [];
            arr3 = [];
            visibleArray = [];
        }
    })
}

// clear the calculator
const clearAll = () => {
    result.innerHTML = "- -";
    mathSymbol = "";
    answer = 0;
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearAll)


// dark mode for less birghtness
const darkMode = document.querySelector("#dark");

darkMode.addEventListener("mouseup", function () {
    document.body.classList.toggle("dark-mode");
});
