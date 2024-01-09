// Chaining of array methods is one of the speciality of map(),filter(),reduce().
// Q5.List of all firstName from array whose age is more than 30
const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "Cob", age: 75 },
  { firstName: "Sam", lastName: "Lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];

const result = users.filter((x) => x.age > 30).map((x) => x.firstName);
console.log(result);
