let display = document.querySelector('.display');
let calculation = document.querySelector('.calculation');
let result = document.querySelector('.result');
let buttons = document.querySelector('.non-display');
let dotClicked = false;
buttons.addEventListener('click', (e) => {
    
    if(!e.target.classList.contains('non-display')){
        if(calculation.textContent === '0' && e.target.classList.contains('number') ){
            calculation.textContent = e.target.textContent;
        }else if(e.target.classList.contains('decimal') && dotClicked == false){
            calculation.textContent = calculation.textContent + e.target.textContent;
            dotClicked = true;
        }else if(e.target.classList.contains('operator') && ["x", "÷", "+", "-"].some(op => calculation.textContent.endsWith(op))){
            calculation.textContent = calculation.textContent;
        }else if(e.target.classList.contains('operator') && e.target.textContent !== '='){
            calculation.textContent = calculation.textContent + e.target.textContent
            dotClicked = false;
        }else if(e.target.textContent === '='){
            let tokens = tokenize(calculation.textContent);
            console.log(tokens);
            
            result.textContent = calculate(tokens);
            
        }else if(e.target.textContent === 'AC'){
            calculation.textContent = '0';
            result.textContent = ''
        }else if(e.target.textContent === '⌫'){
            calculation.textContent = calculation.textContent.slice(0, -1);
        }else if(calculation.textContent !== '0' && e.target.classList.contains('number')){
            calculation.textContent = calculation.textContent + e.target.textContent;
        }

    }
    
})
function tokenize(calculationExpression){
    let expression = calculationExpression;
    expression = expression
    .replaceAll('×', '*')
    .replaceAll('÷', '/')
    
    let bufferNumber = '';
    let tokens = [];
    for(let value of expression){
        if((value >= '0' && value <= '9') || value == '.'){
            bufferNumber = bufferNumber + value;
        }else if(!(value >= '0' && value <= '9')){
            tokens.push(bufferNumber);
            bufferNumber = '';
            tokens.push(value);
        }
    }
    if(bufferNumber){
            tokens.push(bufferNumber);
        }
    return tokens;
  
}
function calculate(expression){
    for(let i = 0; i < expression.length; i++){
        
        
        if(expression[i] == '*'){
            return Number(expression[i - 1]) * Number(expression[i + 1]); 
        }else if(expression[i] == '/'){
             return Number(expression[i - 1]) / Number(expression[i + 1]); 
        }else if(expression[i] == '+'){
             return Number(expression[i - 1]) + Number(expression[i + 1]); 
        }else if(expression[i] == '-'){
             return Number(expression[i - 1]) - Number(expression[i + 1]); 
        }else if(expression[i] == '%'){
             return Number(expression[i - 1]) % Number(expression[i + 1]); 
        }
    }
    
}