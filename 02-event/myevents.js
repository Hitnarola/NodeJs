const EventEmitter = require("events");
// this is used for importing the events module

const eventemitter = new EventEmitter();

eventemitter.on("greet", (username) => {
  console.log(`hello my self ${username} and  welcome the events in nodejs`);
});
//to create event

eventemitter.once("pushnotify", () => {
  console.log("this event will run only once");
});

//emit the event
eventemitter.emit("greet", "hit narola"); // to run greet event by emit

eventemitter.emit("greet", "narola");
eventemitter.emit("pushnotify");
eventemitter.emit("pushnotify"); // this will run once not twice
eventemitter.emit("greet", "hit narola");

const mylistener = () => {
  console.log("i am the test listener");
};
eventemitter.on("test", mylistener);
eventemitter.emit("test");
eventemitter.removeListener("test", mylistener); // remove eventlistener
eventemitter.emit("test"); // if i removelistener then i again write the emit then it will not run again
