//file system module -->can you excess the file inside the browser s javascript -->ans is No
//but the nodejs which is build in c++ -->its provide the
//File system module(fs)

const fs = require("fs"); //in this you pass the module name

// Task: Read the contents of notes.txt
console.log("process.cwd():", process.cwd());
console.log("Start of Script");

// [Sync] => Blocking Operations
const contents = fs.readFileSync("notes.txt", "utf-8"); // read the file

// //                          1min    1GB
console.log("Contents", contents);

// [Async] => Non Blocking

// fs.readFile("notes.txt", "utf-8", function (error, data) {
//   if (error)
//     // console.log(error);
//   else
//     // console.log("Content got", data);
// });

console.log("End of Script");
// .. 100 LoC
