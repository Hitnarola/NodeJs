// express is the framwork of the inbuilt the http module coze in the node http module the code mess but in the express this doesnot mess
const express = require("express");
const { log } = require("node:console");

const app = express();

app.get("/", (req, res) => {
  res.end("you are at homepage");
});

app.get("/contact-us", (req, res) => {
  res.end("you are at contact -page");
});

app.post("/tweet", (req, res) => {
  res.status(201).end("Tweet created sccessful !");
});
app.get("/tweet", (req, res) => {
  res.status(201).end("here are tweet");
});

app.listen(8000, () => {
  console.log("server run at port 8000");
});
// to see the suggestion or method do the npm i @types/express for the express

// everything run same as http module in node and express but only diff is the code is in well menner
