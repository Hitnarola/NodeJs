// const { log } = require("node:console");

const fs = require("node:fs");

// console.log(fs);
const data = fs.readFileSync("notes.txt", "utf-8");
console.log(data);

const contents = fs.readFileSync("notes.txt", "utf-8");

console.log(contents);

fs.writeFileSync("copy.txt", contents, "utf-8"); // it create the new copy.txt file and the overwrite the content if you donot overwrite the content then use the append

fs.appendFileSync("copy.txt", "\n\nhey", "utf-8"); // this will add the content in the end of the copy.txt file

fs.mkdirSync("games/xyz/a", { recursive: true }); // to create the directory in this first create the games foleder but then direct create the a folder then its give error but you write the recursive true means if the on of the directory missing then it will create

// fs.rmdirSync("games"); // this give error coz the directory was not empty so you have to delete its children

// fs.rmdirSync("games/xyz/a");

// fs.unlinkSync("copy.txt"); // this will delete the file

// to add the package.json file you type the npm init
