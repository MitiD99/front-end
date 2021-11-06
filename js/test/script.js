let firstNum;
let secondNum;
let result = document.getElementById('text-result');
function plus(){
    firstNum = document.getElementById('firstNum').value;
    firstNum = Number(firstNum);
    secondNum = document.getElementById('secondNum').value;
    secondNum = Number(secondNum);

    result.innerHTML = firstNum + secondNum;
}
function minus(){
    firstNum = document.getElementById('firstNum').value;
    firstNum = Number(firstNum);
    secondNum = document.getElementById('secondNum').value;
    secondNum = Number(secondNum);

    result.innerHTML = firstNum - secondNum;
}function mult(){
    firstNum = document.getElementById('firstNum').value;
    firstNum = Number(firstNum);
    secondNum = document.getElementById('secondNum').value;
    secondNum = Number(secondNum);

    result.innerHTML = firstNum * secondNum;
}function division(){
    firstNum = document.getElementById('firstNum').value;
    firstNum = Number(firstNum);
    secondNum = document.getElementById('secondNum').value;
    secondNum = Number(secondNum);

    result.innerHTML = firstNum / secondNum;
}
