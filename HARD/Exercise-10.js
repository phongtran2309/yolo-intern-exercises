let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function randomArray(array) {
    for(let i = array.length - 1; i > 0 ;i-- ) {
        let j = Math.floor(Math.random() * i);
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
    }
    return array;
}
randomArray(array);
console.log(array);