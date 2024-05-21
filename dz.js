const person=[
    { user: "Alice", age: 10, grade: 90 },
    { user: "Bob", age: 22, grade: 85 },
    { user: "Charlie", age: 21, grade: 88 },
    { user: "Alice", age: 30, grade: 90 },
    { user: "Bob", age: 11, grade: 85 },
    { user: "Charlie", age: 15, grade: 88 },
    { user: "Alice", age: 18, grade: 90 },
    { user: "Bob", age: 12, grade: 85 },
    { user: "Charlie", age: 41, grade: 88 }
];
const sortingAge=(person)=>person.filter(({age})=>age>=18);
const sorting=sortingAge
console.log(sortingAge(person))
