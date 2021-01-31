rn = require("reliable-nosql");

var s = {
  name: "Raul",
  age: 22,
  favorites: ["food", "farts", "flubber"],
  chilren: [
    { name: "Billy", age: 13 },
    { name: "Mandy", age: 15 },
  ],
  isAlive: true,
};

const name = "RaulModel";
const res = rn.addModel(s, name);

console.log(res);
