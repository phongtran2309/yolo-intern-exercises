let array1 = [9, 8, 5, 2];
let array2 = [36, 20, 19, 6];
function extendArray(array1, array2) {
    let array = [];
    for(let i = 0; i < array1.length; i++) {
        array[i] = array1[i];
    }
    for(let j = 0; j < array2.length; j++) {
        array[array1.length + j] = array2[j];
    }
    for(let k = 0; k < array.length - 1; k++) {
        for(let l = k + 1; l < array.length; l++) {
            if(array[k] > array[l]) {
                let comp = array[l];
                array[l] = array[k];
                array[k] = comp;
            }
        }
    }
    return array;
}
console.log(extendArray(array1, array2));
