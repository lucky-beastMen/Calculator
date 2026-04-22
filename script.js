const numbers = document.querySelector(".numbers");
const display = document.querySelector(".display");
const operators = document.querySelector('.operators');
const equalSign = document.querySelector('.equals');
let currentNumber = '';
let operatorClicked = false;
let equalSignClicked = false;
let a = 0;
let b = 0;
let operator = '';
numbers.addEventListener('click', (e) => {
    if(e.target.classList.contains('number')){
        if(operatorClicked === true){
            currentNumber = currentNumber + e.target.textContent;
            display.textContent = display.textContent + " " + currentNumber;
        }else if(operatorClicked !== true){
            currentNumber = currentNumber + e.target.textContent;
            display.textContent = currentNumber;
        }
    }    

})

operators.addEventListener('click', (e) => {
    operatorClicked = true;
    if(e.target.textContent !== "="){
        display.textContent = display.textContent + " " + e.target.textContent;
    }
    a = currentNumber;
    operator = e.target.textContent;
    currentNumber = '';
})
equalSign.addEventListener('click', (e) => {
    equalSignClicked = true;
    b = currentNumber;
    currentNumber = '';

    display.textContent = operatorFun(operator, Number(a), Number(b));
})

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a/b;
}
function operatorFun(opp, a, b){
    if(opp == "+"){
        return add(a, b)
    }else if(opp == "-"){
        return subtract(a, b)
    }else if(opp == "*"){
        return multiply(a, b)
    }else if(opp == "/"){
        return divide(a, b)
    }else{
        return "Something went wrong";
    }
}
