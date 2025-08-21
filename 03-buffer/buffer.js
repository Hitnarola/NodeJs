const { Buffer } = require("buffer");

// const buff = Buffer.alloc(4);

// console.log(buff);

const buff = Buffer.from("hello hit narola");
console.log(buff);
console.log(buff.toString());

const buf2 = Buffer.allocUnsafe(10); // it will allocated the memory but donot sure that the data are in alloc are empty it might be the random
// it wont clear the memory
console.log(buf2);

const buf = Buffer.alloc(10);
buf.write("hello"); // cannot read buf directly has to convert into string
console.log(buf.toString());

const buffer = Buffer.from("hitnarola");

console.log(buffer.toString());
console.log(buffer.toString("utf-8", 0, 4));
// to manipulate the string

const buf3 = Buffer.from("hit");
console.log(buf3);
buf3[0] = 0x56;
console.log(buf3);
console.log(buf3.toString());

const buf4 = Buffer.from("hit");
const buf5 = Buffer.from("narola");

const mearged = Buffer.concat([buf4, buf5]);

console.log(mearged.toString());
