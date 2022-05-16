let text ='ao you know what you know know what? aaaa aa';
let word ='aa';  
function countString(text, word) {
    let sum = 0;
    for(let i = 0; i < text.length; i++) {
        let y = 0; // bien dem phan tu cua string word
        for(let j = 0; j < word.length; j++) {
            if (text[i + j] === word[j]) {
                y++; 
            }
            if (y === word.length) {
                sum ++;
                i += word.length - 1;
            }
        }
    }
    return sum;
}
console.log(countString(text, word));