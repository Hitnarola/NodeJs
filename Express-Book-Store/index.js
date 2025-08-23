const express = require("express");
const fs = require("node:fs");
const app = express();
const PORT = 8000;

//in memory database this is violating the rule which is the stateless means that in the stateless you can not create the data inside the memory(server) you have create outside the memory and that is database which called stateless but here donot use the database

const books = [
  { id: 1, title: "book one", author: "Auther one" },
  { id: 2, title: "book two", author: "Auther two" },
];

//middlewares (plugins)
app.use(express.json());
// what it will do if some data comes from the frontend and it has header that is application.json and it will do all the transformation for me and give me actual data in the request .body

//custom middlewares
app.use(function (req, res, next) {
  const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
  fs.appendFileSync("log.txt", log, "utf-8");
  next();
});
//Routes

app.get("/books", (req, res) => {
  res.setHeader("x-name", "Hitnarola");
  res.json(books);
});
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id); // from the parameter  get me the id

  if (isNaN(id))
    return res.status(400).json({ error: `the id must be a number` });
  const book = books.find((e) => e.id === id); // this will check type of variable also so in the url you type id as string then you have to parseint the id or you remove one equal to sign

  if (!book)
    return res.status(404).json({ error: `book with ${id} doesnot exists!` });
  return res.json(book);
});
// json is the key value pair
// if we want response some custom header then its prefferd to start with x
// to make the book id dymamic we write the colon /books/:id --> /books/anything
// in the url anything write start with :(colon) which called dynamic parameter

app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || title === "")
    return res.status(400).json({ error: "title is required" });
  if (!author || author === "")
    return res.status(400).json({ error: "author is required" });

  const id = books.length + 1;
  const book = { id, title, author };
  books.push(book);
  // console.log(req.headers);

  // console.log(req.body); //undefined --> express has no idea how to read different kind of data its depend on the content type and the based on that the body is processed so the express have concept which is middleware

  return res.status(201).json({ message: "Book created successful", id });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `the id must be a number` });

  const indexTodelete = books.findIndex((e) => e.id === id);

  if (indexTodelete < 0)
    return res.status(404).json({ error: `book with ${id} doesnot exists!` });

  books.splice(indexTodelete, 1);

  return res.status(200).json({ message: "Book deleted" });
});

app.listen(PORT, () => {
  console.log(`HTTP server is running on PORT number ${PORT}`);
});
