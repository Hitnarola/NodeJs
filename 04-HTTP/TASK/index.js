const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;
  const log = `\n[${Date.now()}] : ${method} ${path}`;
  // this log will help to the debugging which types of server
  fs.appendFileSync("log.txt", log, "utf-8");

  switch (method) {
    case "GET":
      {
        switch (path) {
          case "/":
            return res.writeHead(200).end("Hello from the server 👀");
          case "/contact-us":
            return res
              .writeHead(200)
              .end(
                "sure my email :kanonarola8@gmail.com , and my contact number :+918799514045"
              );
          case "/tweet":
            return res.writeHead(200).end("Tweet1\nTweet2\nTweet3");
        }
      }
      break;
    case "POST": {
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end("Your tweet was created");
      }
    }
  }
  res.writeHead(404).end("you are lost man");
});

server.listen(8000, () => {
  console.log("http server is running on the post : 8000");
});
