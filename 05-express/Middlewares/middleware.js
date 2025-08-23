const express = require("express");

const app = express();

// middleware -- means its is pieace of the code that run in every request and which sits between the app and routes
//if there is any request coming to the your route you have the middleware in between to run that code.

//middleware has the access of the request object .response object,next

// user--------------------------------------> routs
/* in between we have n number of middlewares

middlewares always run in sequence
means if there is the middleware A,B,C,D so the A can send the response back to the user or send request to middleware B it cannot the send request to directly C means the send request insequence so it can forward the request to the next middleware in stack.

middleware can do following things.
1. it can read the request it has full access of the request objects
2. this middleware can terminate the req-res  cycle.
explan: if there is the A,B,C,D middleware supposse the A can do the user is hacker or not and B,C,D can do other task.  so if the user is the hacker so you cannot sent the request to route you directly send back the respose so the req-res cycle is terminated
3. middleware can forward the req to other middleware.



*/

// we can write custom middleware

app.use(function (req, res, next) {
  console.log("I am middleware A");
  next(); // it is doing the next task is it is exists
  return res.json({ message: "i am the middleware" }); // this will always terminate the cycle and get back the response donot send the request to other response
});

app.use(function (req, res, next) {
  console.log("I am middleware B");
  return res.json({ message: "Boom!" });
});
app.listen(9000, () => {
  console.log("server listening on port 9000");
});
