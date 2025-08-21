const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("i got incoming request");
  res.writeHead(200);
  res.end("thanks for visiting my server");
});
// the call back function (arrow fun) run at every request
// request (req) contain what type of data user can access or request

server.listen(8000, () => {
  console.log("http server is up and this is running on the port number 8000");
}); // if the server is runinng successful then this run and indigate the the server is running

// port--> in the physical machine we have multiple services running and this services listen on PORT
