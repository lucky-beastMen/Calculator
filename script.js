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
let lastInput = '';
numbers.addEventListener('click', (e) => {
    if(e.target.classList.contains('number')){
        if(display.textContent === "Can't divide by 0 :))"){
            display.textContent == '';
            a = display.textContent;
            b = 0;
            display.textContent = 0;
            currentNumber = '';
            currentDisplayedNumber = '';
            operatorClicked = false;
        }
        if(lastInput == 'equals'){
            a = 0;
            b = 0;
            display.textContent = 0;
            currentNumber = '';
            currentDisplayedNumber = '';
            operatorClicked = false;
        }
        if(operatorClicked !== true){
            currentNumber = currentNumber + e.target.textContent;
            display.textContent = currentNumber;
            lastInput = 'number';
        }
        else if(operatorClicked === true){
            currentDisplayedNumber = e.target.textContent;
            currentNumber = (currentNumber || '') + (currentDisplayedNumber);
            display.textContent = display.textContent + currentDisplayedNumber;
            b = currentNumber;
            lastInput = 'number';
        }
        
    } 

})

operators.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('operators') === false){
        if(lastInput == 'operator'){
            let arr = display.textContent.split('');
            for(let value of arr){
                if(value == operator){
                    let oppIndex = arr.indexOf(value);
                    arr[oppIndex] = e.target.textContent;
                }
            }
            display.textContent = arr.join('');
            return (operator = e.target.textContent);
        }
        if(e.target.textContent !== "=" && e.target.textContent !== 'Clear' && operatorClicked === false ){
            operatorClicked = true;
            display.textContent = display.textContent + " " + e.target.textContent;
            a = currentNumber;
            operator = e.target.textContent;
            currentNumber = '';
            lastInput = 'operator';
        }else if(operatorClicked === true && e.target.textContent !== "=" && e.target.textContent !== 'Clear' ){
            operatorClicked = true;
            display.textContent = display.textContent + e.target.textContent;
            a = operatorFun(operator, Number(a), Number(b));
            operator = e.target.textContent;
            b = 0;
            lastInput = 'operator';
            currentNumber = '';
        }else if(e.target.textContent === "="){
            display.textContent = operatorFun(operator, Number(a), Number(b));
            lastInput = 'equals';
        }else if(e.target.textContent == "Clear"){
            a = display.textContent;
            b = 0;
            display.textContent = 0;
            currentNumber = '';
            currentDisplayedNumber = '';
            operatorClicked = false;

        }
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
        if(b !== 0){
            return (a/b).toFixed(4)
        }else if(b === 0){
            return "Can't divide by 0 :))";
        }
    }else{
        return "Something went wrong";
    }
}
