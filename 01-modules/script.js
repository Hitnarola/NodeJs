//file system module -->can you excess the file inside the browser s javascript -->ans is No
//but the nodejs which is build in c++ -->its provide the
//File system module(fs)

const fs = require("fs"); //in this you pass the module name

// Task: Read the contents of notes.txt

console.log("Start of Script");

// [Sync] => Blocking Operations
 const contents = fs.readFileSync("notes.txt", "utf-8"); // read the file

// //                     1min    1GB -->this one minute the code is block means the other code cannot run while one minute this code run
// this is not recommended beacause if there is the 5-6 user which user the server suppose the first user can access the server then the server are on waiting mode till one minute in this time the other user may receive the downtime (server is not receving)

console.log("Contents", contents);

// [Async] => Non Blocking

fs.readFile("notes.txt", "utf-8", function (error, data) {
  if (error) console.error(error.message);
  else console.log("Content got", data);
});
// the non blocking async which is not blocking the code means while this run the last ling was run
// means the there is the 100 line of code(LOC) that will continue the work while it will read the file

console.log("End of Script");
// .. 100 LoC
