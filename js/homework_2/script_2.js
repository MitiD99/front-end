let employeeSalaries = {
    'Tom': 10000,
    'Ira': 15000,
    'Adam': 20000
};

let sum = 0;
for( let salary of Object.values(employeeSalaries)) { // на каждом шагу salary получает новое значение employeeSalaries

    sum += salary;
}


console.log(sum); // 45000