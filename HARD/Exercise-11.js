let number = [9];
function countFactorial (number) {
    let fact = 1;
    if(number > 1) {
        for(i = 1; i <= number; i++){
            fact *= i;
        }
        fact = fact + '';
        for(let j = fact.length - 1; j >= 0; j--) {
            if(fact[j] !== '0') {
                return +fact[j];
            }
        }
    }
}
console.log(countFactorial(number));