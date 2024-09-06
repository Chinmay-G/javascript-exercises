const sumAll = function (x, y) {
    let isIntx = Number.isInteger(x);
    let isInty = Number.isInteger(y);
    let isPositivex = Math.sign(x);
    let isPositivey = Math.sign(y);
    if (!isIntx || !isInty || isPositivex !== 1 || isPositivey !== 1) {
        return 'ERROR';
    }

    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }

    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

/*
1) Understanding the problem
- 2nd parameter can be smaller than the 1st
- If the parameter is not a positive integer, return ERROR

2) Breaking down the problem
- How to verify if the parameter is a positive integer?
- How to go through the numbers in between, including the parameters?
*/