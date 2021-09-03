let numArr = [1, -10, 0, -3, 7, 10, 3, 6, 12, -100, 30, 14, -22, -5, 44, 77, 100, -33, -21, -1, 89];

let newArrNumPlus = numArr.filter(function(num) {
    return num >= 0;
});

console.log(newArrNumPlus);

let newArrNumMinus = numArr.filter(function(num) {
    return num < 0;
});
    
console.log(newArrNumMinus);

