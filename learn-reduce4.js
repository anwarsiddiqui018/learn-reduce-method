let student = [
  { name: "Smith", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "John", rollNumber: 16, marks: 35 },
  { name: "Tiger", rollNumber: 7, marks: 55 },
];

const result = student.reduce((acc, curr) => {
  return (acc += curr.marks);
}, 0);

console.log(result);
