let array1 = [20, 19, 10, 5, 4];
let array2 = [30, 22, 18, 9, 2];
function extendArray(array1, array2) {
    let array = [];
    for(let i = 0; i < array1.length; i++) {
        array[i] = array1[i];
    }
    for(let j = 0; j < array2.length; j++) {
        array[array1.length + j] = array2[j];
    }
    for(let j = 0; j < array.length - 1; j++) {
        for(let k = j + 1; k < array.length; k++) {
            if(array[j] < array[k]) {
                let comp = array[k];
                array[k] = array[j];
                array[j] = comp;
            }
        }
    }
    return array;
}
console.log(extendArray(array1, array2));