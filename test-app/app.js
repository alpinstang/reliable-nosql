rn = require("reliable-nosql");

var s = { name: "raul", age: "22", gender: "Male" };

const res = rn.addModel(s);

console.log(res);
