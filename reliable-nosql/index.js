writer = require("./fileWriter");

const addModel = (json, name) => {
  var keys = [];
  var types = [];
  var pair = [];
  var arrTypes = [];
  var val = null;

  for (var k in json) {
    //console.log(json[k]);

    t = typeof json[k];
    pair.push({ k, t });

    // if type is obj or array,
    // get alk leys and types within
    if (t === typeof [] && t !== typeof boolean) {
      console.log(t);
      console.log("value = ", json[k]);
      let arr = json[k];
      let length = arr.length;
      let i = 0;
      while (i < length) {
        console.log("iteration = ", i);

        val = typeof arr[i];
        let name = arr[i];
        arrTypes.push({ val });

        i++;
      }
      let stringified = JSON.stringify(arrTypes);
      writeModel(stringified, name + `_${k}`);
    } else {
      types.push(t);
      keys.push(k);
    }
  }
  let pairsString = JSON.stringify(pair);
  writeModel(pairsString, name + "_index");
};

module.exports = {
  addModel: function (json, name) {
    return addModel(json, name);
  },
};

//// TODO: we need to add an array for sub objects,
//// then separately iterate over those sub objects
//// like json[k][x] and get the types, store them separately in
