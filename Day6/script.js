const students = [
    {name: 'Alice',score: 50},
    {name: 'Bob',score: 65},
    {name: 'David',score: 80},
    {name: 'Joe',score: 75},
];
let arr = students.filter(students => students.score > 60).map(students => students.score*2).reduce( (x,y) => x + y, 0 );
console.log(arr);
