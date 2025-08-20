const Eventemitter = require("events");

const eventemitter = new Eventemitter();

eventemitter.on("error", (err) => {
  console.error(`error occured ${err}`);
});

eventemitter.emit("error", new Error("some went wrong"));
