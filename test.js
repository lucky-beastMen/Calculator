let arr = [1,23,4,5,6,7,8];
for(let value of arr){
    if(value == 4){
        let oppIndex = arr.indexOf(value);
        arr[oppIndex] = 'Worked!!'

        
    }
    
}
console.log(arr );
