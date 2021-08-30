let a = 10;
let b = 1;
let c = 1;

console.log(b);
console.log(c);

for (let i = 3; i <= a; i++) {
    let d = b + c;
    b = c;
    c = d;
    
    console.log(d);
}

//<-------------Mассив--------------->//

var e = 10; 
var fibonacci = [0, 1]; 

for (i = 2; i < e; i ++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; // заменяет суму на i елемент
}

console.log(fibonacci.slice(0, e)); // возвращает новый массив