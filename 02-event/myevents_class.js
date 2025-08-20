// using the class method

const { log } = require("console");
const EventEmitter = require("events");

class Chat extends EventEmitter {
  sendmessage(mesg) {
    console.log(`message sent: ${mesg}`);
    this.emit("messageReceived", mesg);
  }
}

const chat = new Chat();
chat.on("messageReceived", (mesg) => {
  console.log(`new message: ${mesg}`);
});

//trigger event
chat.sendmessage("hit narola");
