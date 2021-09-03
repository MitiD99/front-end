let student = [
    {age: 19, groupName: 'A'},
    {age: 18, groupName: 'D'},
    {age: 17, groupName: 'A'},
    {age: 16, groupName: 'B'},
    {age: 20, groupName: 'A'},
    {age: 22, groupName: 'C'},
    {age: 21, groupName: 'A'},
    {age: 25, groupName: 'C'},
    {age: 27, groupName: 'A'},
    {age: 28, groupName: 'C'}
];

let nameGroup = student.map(function(element) {
    return element.groupName;
});

console.log(nameGroup);

let ageGroup = student.map(function(element) {
    return element.age;
});

console.log(ageGroup);

// ---------------- //

let sumAge = ageGroup.reduce(function(sum, current) {
    return sum + current;
});

console.log(sumAge);

// ---------------- //


