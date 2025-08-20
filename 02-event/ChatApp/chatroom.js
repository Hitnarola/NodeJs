const Eventemiiter = require("events");

class ChatRoom extends Eventemiiter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }
  sendmessage(user, message) {
    if (this.users.has(user)) {
      this.emit("message", user, message);
    } else {
      console.log(`${user} is not in chat`);
    }
  }
  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("left", user);
    } else {
      console.log(`${user} is not in chat`);
    }
  }
}

module.exports = ChatRoom;
