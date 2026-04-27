let display = document.querySelector('.display');
let calculation = document.querySelector('.calculation');
let result = document.querySelector('.result');
let buttons = document.querySelector('.non-display');
buttons.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    
    if(!e.target.classList.contains('non-display')){
        if(calculation.textContent === '0' && e.target.classList.contains('number')){
            calculation.textContent = e.target.textContent;
        }else if(e.target.classList.contains('operator') && e.target.textContent !== '='){
            calculation.textContent = calculation.textContent + ' ' + e.target.textContent
        }else if(e.target.textContent === '='){
            result.textContent = tokenize(calculation.textContent)
        }else{
            calculation.textContent = calculation.textContent + e.target.textContent;
        }

    }
    
})
function tokenize(calculationExpression){
    let expression = calculationExpression
    expression = expression
  .replaceAll('x', '*')
  .replaceAll('÷', '/')
  .replaceAll('^', '**');
  return expression
  
}
function calculate(expression){

    if(operator == '+'){
        return a + b;
    }else if(operator == '-'){
        return a - b;
    }else if(operator == '*'){
        return a * b;
    }else if(operator == '^'){
        return a ** b;
    }else if(operator == '/'){
        return a/b;
    }
}