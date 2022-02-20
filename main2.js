// const one = document.querySelector('#one').addEventListener('click', getNumber)
// const two = document.querySelector('#two').addEventListener('click', getNumber)


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
            addNumbers();
        } else if (button === "-") { // this is the minus symbol            
            subtractNumbers();
        } else if (button === "×") { // this is the multiplication symbol    
            multiplyNumbers();
        } else if (button === "÷") { // this is the division symbol    
            divideNumbers();
        } 




        // check the math symbol to see which function to perform
        if (button === "=") {
            let answer = 0; // store answer to cut off too many numbers
            arr.pop();
            result.innerHTML = Number(arr.join(" "));
            arr3.push(Number(arr.join("")))

            // show the second number to be added
            if (mathSymbol === "+") {
                result.innerHTML = (Number(arr2) + Number(arr3));  
                mathSymbol = "";              
            } else if (mathSymbol === "-") {
                result.innerHTML = (Number(arr2) - Number(arr3))
                mathSymbol = "";              
            } else if (mathSymbol === "x") {
                result.innerHTML = (Number(arr2) * Number(arr3))
                mathSymbol = "";              
            } else if (mathSymbol === "/") {
                answer = (Number(arr2) / Number(arr3)); 
                if (answer.toString().length > 9) {
                    result.innerHTML = answer.toFixed(9);
                } else {
                    result.innerHTML = answer;
                }
                
                mathSymbol = "";              
            }



            // claer all of the arrays --> maybe keep one to go again?
            arr.splice(0);
            arr2.splice(0);
            arr3.splice(0);
            visibleArray.splice(0);
        }
    })
    

}





// dark mode for less birghtness
const darkMode = document.querySelector("#dark");

darkMode.addEventListener("mouseup", function () {
    document.body.classList.toggle("dark-mode");
});