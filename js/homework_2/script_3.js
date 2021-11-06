let a = Number(prompt('Enter number:'));
let b = Number(prompt('Enter number:'));
let c = prompt('Choose an action (+, -, *, /):');

    if (c === '*') {
        alert(a * b);
        
    } else if (c === '+') {
        alert(a + b);

    } else if (c === '/') {
        alert(a / b);
        
    } else if (c === '-') {
        alert(a - b);

    } else {
        alert('error');
    }



