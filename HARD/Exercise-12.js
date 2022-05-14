let number = [12];
function countFactorial(number) {
    let fact = 1;
    let sum = 0;
    if(number > 1) {
        for( i = 1; i <= number; i++) {
            fact *= i;
        }
        fact += '';
        console.log(fact);
        for(let j = fact.length - 1; j >= 0; j--) {
            if(fact[j] === '0') {
                sum++;
            }
        }
    }    
    return sum;
}
console.log(countFactorial(number));