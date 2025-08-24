exports.add = function add(a, b) {
  return a + b;
};
//here the exports directly available coze if we run the file the node create wrapper function which have exports ,module,require,--filename,--dirname

exports.sub = function sub(a, b) {
  return a - b;
};
exports.mul = function mul(a, b) {
  return a * b;
};
exports.div = function div(a, b) {
  return a / b;
};

//default
module.exports = function () {
  console.log(`hey i am default`);
};

// for the default export we use the module which is in  the wrapper funtion
// to export  this method you have two method

/*
1. named exports -->use exports
exports.<name> =value (the value can be anything function,string)

for the import 
const {distructuring }=require('./module_name)
or 
const value=require('./module_name)
value.<name>


2.default export there can be only one default export 
default export donot have any name -> you give anything name when you import

*/
