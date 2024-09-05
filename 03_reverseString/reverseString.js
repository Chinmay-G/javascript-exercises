const reverseString = function (string) {
    let arr = string.split("");
    // let arrnew = [];
    // for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    //     arrnew[j] = arr[i];
    // }

    let str = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        str += arr[i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
