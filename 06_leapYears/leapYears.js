const leapYears = function (year) {
    if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else if (year % 4 === 0) return true;
    else return false;
};

/*
1) Understanding the problem
- leap years are divisible by 4, but not by 100, unless it's divisible by 400.

2) Breaking down the problem
- First check if it's diisible by 400, then 100, then 4 and return in each step if true
*/

// Do not edit below this line
module.exports = leapYears;
