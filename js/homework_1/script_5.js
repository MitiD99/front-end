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