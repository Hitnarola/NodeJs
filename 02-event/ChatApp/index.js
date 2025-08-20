const Chatroom = require("./chatroom.js");

const chat = new Chatroom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});
chat.on("sendmessage", (user, message) => {
  console.log(`${user} : ${message} `);
});
chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

// simulating the chat

chat.join("alice");
chat.join("Bob");

chat.sendmessage("alice", "hey Bob ,hello to everyone");
chat.sendmessage("Bob", "hey alice ,hello to everyone");

chat.leave("alice");
chat.sendmessage("alice", "this message wont send");
chat.sendmessage("bob", "this message will recevied to everone");
