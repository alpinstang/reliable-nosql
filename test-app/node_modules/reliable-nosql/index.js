writer = require("./fileWriter");

const addModel = (json) => {
  var keys = [];

  for (var k in json) keys.push(k);

  writeModel(keys, "TestModel");

  return keys;
};

module.exports = {
  addModel: function (json) {
    return addModel(json);
  },
};
