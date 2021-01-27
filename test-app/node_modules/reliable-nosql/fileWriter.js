const fs = require("fs");
const path = require("path");
let baseDir = path.join(__dirname, "/./models/");

createDir = (model = [{}], modelName = "Model.js") => {
  fs.promises
    .mkdir(`${baseDir}`, { recursive: true })
    .then(() => createFile(model, modelName))
    .then(() => {
      return model, modelName;
    })
    .catch(() => {
      console.error;
    });
};

createFile = (model, modelName) => {
  fs.writeFile(`${baseDir}/${modelName}.js`, model, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
};

writeModel = (model, modelName) => {
  createDir(model, modelName);
};
