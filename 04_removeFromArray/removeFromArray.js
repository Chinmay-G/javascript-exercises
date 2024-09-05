const removeFromArray = function (arr, ...r) {
    for (let k = 0; k < arguments.length - 1; k++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === r[k]) {
                for (let j = i; j < arr.length - 1; j++) {
                    arr[j] = arr[j + 1];
                }
                i--;
                arr.pop();
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
