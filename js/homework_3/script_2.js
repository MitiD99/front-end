let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');

console.log(styles);

let lastNum_2 = styles.length -2;
styles[lastNum_2] = 'Класика';

console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.splice(0, 0, 'Реп', 'Реггі');

console.log(styles);

