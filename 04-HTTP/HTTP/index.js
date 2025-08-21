const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(`there is the incoming request at [${Date.now()}]`);
  // console.log(req.method);
  // console.log(req.header);
  console.log(req.url);

  switch (req.url) {
    case "/":
      return res.end("homepage");
    case "/contact-us":
      return res.end("contact me at scet gmail id");
    case "/about":
      return res.end("i am software eng");
    default:
      res.writeHead(404);
      res.end("you are lost");
  }
  // send the response
  // res.writeHead(201);
  // res.end(`hey you can accept ${req.headers["accept-language"]}`);
});

server.listen(8000, () => {
  console.log("Server is running on 8000 port");
});

// to do a get and post request you write this
// fetch("/", { method: "post" });
