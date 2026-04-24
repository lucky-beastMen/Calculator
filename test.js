if(e.target.textContent !== "=" && display.textContent.includes(e.target.textContent) === false){
        operatorClicked = true;
        display.textContent = display.textContent + " " + e.target.textContent;
        a = currentNumber;
        operator = e.target.textContent;
        currentNumber = '';
    }else if(display.textContent.includes(e.target.textContent ) && e.target.textContent !== "=" ){
        operatorClicked = true;
        display.textContent = display.textContent + e.target.textContent;
        a = operatorFun(operator, Number(a), Number(b));
        b = 0;
        console.log(a, b);
        currentNumber = ''
    }