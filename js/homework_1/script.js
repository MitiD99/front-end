let a = prompt('Enter the number >0');
if (a > 0) {
    sum = 0;
    for (i = 1; i <= a; i++) {
        sum = sum + i;
    } 
    console.log(sum);
}
else {
    console.log('Try again')
}