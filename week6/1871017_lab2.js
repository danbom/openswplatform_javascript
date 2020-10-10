function factorial(x) 
{ 
    
    if (x === 0)
 {
    return 1;
 }

 let sum = 1;
    for (i = 0; i < x; i++){
        sum = sum * (x - i);
    }    
    return sum;
         
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(9));