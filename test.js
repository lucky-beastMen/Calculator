let arr = [];

function calculate(arr){
    while(!(arr.length == 1)){
    
        if(arr.includes('*')){
            let index = arr.indexOf('*');
            let answer = arr[index - 1] * arr[index + 1];
            
            arr.splice((index-1), 3, answer);
            
        }else if(arr.includes('/')){
            let index = arr.indexOf('/');
            let answer = arr[index - 1] / arr[index + 1];
            
            arr.splice((index-1), 3, answer);
        }else if(arr.includes('+')){
            let index = arr.indexOf('+');
            let answer = arr[index - 1] + arr[index + 1];
            
            arr.splice((index-1), 3, answer);
            
        }else if(arr.includes('-')){
            let index = arr.indexOf('-');
            let answer = arr[index - 1] - arr[index + 1];
            
            arr.splice((index-1), 3, answer);
        }
    }
    let answer = arr[0];
    if(answer % 1 !== 0){
        answer =  answer.toFixed(4);
    }
    return answer;
}

console.log(calculate(arr));
