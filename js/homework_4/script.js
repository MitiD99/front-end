let num = [1, -10, 0, -3, 7, 10, 3, 6, 12, -100, 30, 14, -22, -5, 44, 77, 100, -33, -21, -1, 89];

num.sort(function( a, b) {
    return a - b;
});

console.log(num);

num.sort(function(a, b){
    return b - a;
});

console.log(num);
