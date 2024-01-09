const books = [
  { title: "Book1", author: "Author1", price: 20 },
  { title: "Book2", author: "Author2", price: 25 },
  { title: "Book3", author: "Author1", price: 30 },
  { title: "Book4", author: "Author3", price: 15 },
  // Add more books as needed
];

// const result = books
//   .filter((item) => item.author === "Author1")
//   .map((item) => item.price)
//   .reduce((acc, price) => acc + price, 0);

// console.log(result);

const authorName = "Author3";

const totalCostByAuthor = books.reduce((acc, book) => {
  if (book.author === authorName) {
    acc += book.price;
  }
  return acc;
}, 0);
console.log(totalCostByAuthor);
