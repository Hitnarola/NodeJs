// how to import the custom module
// const value = require("./math");
//distructuring the object

const { add, mul, div, sub } = require("./math"); // in the require you give the path
/* the add sub is the name if we give any name which is not present in the module then its direct point to the defaule export*/

const bjjhjh = require("./math"); // if you give name anything then its bydefault point to the default export
bjjhjh;

// console.log(value.add(2, 7)); --> if we donot use distructuring then use name.function
// console.log(value.div(2, 7));
// console.log(value.sub(2, 7));

// console.log(add(2, 5));
