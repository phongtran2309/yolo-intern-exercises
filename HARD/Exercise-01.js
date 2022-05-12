function reverse(str) {
    let strArray = str.split(' ');
    let res = '';
    for (let i = 0; i < strArray.length; i++) {
        for (let j = strArray[i].length - 1; j >= 0; j--) {
            res += strArray[i][j];
        }
        res += ' ';
    }
    return res;
}
alert(reverse('Xin chao ban Phong du dinh'));