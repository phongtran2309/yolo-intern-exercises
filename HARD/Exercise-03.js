let myArray2 = [8, 6, 3];
let myArray1 = [111, 102, 13];
function extendArray(myArray1, myArray2) {
    let myArray = [];
    for(let i = 0 ; i < myArray1.length; i++) {
        myArray[i] = myArray1[i]; 
    }
    for(let j = 0; j < myArray2.length; j++) {
        myArray[j + myArray1.length] = myArray2[j];
    }
    for( let i = 0; i < myArray.length - 1; i++) {
        for( let j = i + 1; j < myArray.length; j++) {
            if(myArray[i] > myArray[j]) {
                let temp = myArray[j];
                myArray[j] = myArray[i]
                myArray[i] = temp;
            }  
        }
    }
    return myArray;  
}
console.log(extendArray(myArray1, myArray2));