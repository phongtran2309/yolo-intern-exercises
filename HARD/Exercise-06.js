let array1 = [19, 117, 125, 210];
let array2 = [9, 18, 25, 30, 42];
function extendArray(array1, array2) {
    let array = [];
    for(let i = 0; i < array1.length; i++) {
        array[i] = array1[i];
    }
    for(let j = 0; j < array2.length; j++) {
        array[j + array1.length] = array2[j];
    }
    for(let k = 0; k < array.length - 1; k++) {
        for(let l = k + 1; l < array.length; l++) {
            if(array[k] < array[l]) {
                let comp = array[k];
                array[k] = array[l];
                array[l] = comp;
            }
        }
    }
    return array;
}
console.log(extendArray(array1, array2));