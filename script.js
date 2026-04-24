const numbers = document.querySelector(".numbers");
const display = document.querySelector(".display");
const operators = document.querySelector('.operators');
const equalSign = document.querySelector('.equals');
let currentNumber = '';
let operatorClicked = false;
let currentDisplayedNumber = ''
let a = display.textContent;
let b = 0;
let operator = '';
numbers.addEventListener('click', (e) => {
    if(e.target.classList.contains('number')){
        if(operatorClicked !== true){
            currentNumber = currentNumber + e.target.textContent;
            display.textContent = currentNumber;
        }
        else if(operatorClicked === true){
            currentDisplayedNumber = e.target.textContent;
            currentNumber = (currentNumber || '') + (currentDisplayedNumber);
            display.textContent = display.textContent + currentDisplayedNumber;
            b = currentNumber;
            
        }
        
    } 

})

operators.addEventListener('click', (e) => {
    
    if(e.target.textContent !== "=" && e.target.textContent !== 'Clear' && operatorClicked === false){
        operatorClicked = true;
        display.textContent = display.textContent + " " + e.target.textContent;
        a = currentNumber;
        operator = e.target.textContent;
        currentNumber = '';
    }else if(operatorClicked === true && e.target.textContent !== "=" && e.target.textContent !== 'Clear' ){

        operatorClicked = true;
        display.textContent = display.textContent + e.target.textContent;
        a = operatorFun(operator, Number(a), Number(b));
        operator = e.target.textContent;
        
        b = 0;
        
        currentNumber = '';
    }else if(e.target.textContent === "="){
        
        display.textContent = operatorFun(operator, Number(a), Number(b));
    }else if(e.target.textContent == "Clear"){
        a = display.textContent;
        b = 0;
        display.textContent = 0;
        currentNumber = '';
        currentDisplayedNumber = '';
        operatorClicked = false;
    }

})


function operatorFun(opp, a, b){
    if(opp == "+"){
        return a + b;
    }else if(opp == "-"){
        return a - b;
    }else if(opp == "*"){
        return a * b;
    }else if(opp == "/"){
        return (a/b).toFixed(4);
    }else{
        return "Something went wrong";
    }
}
