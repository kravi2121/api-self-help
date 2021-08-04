"use strict";

const fs = require("fs");
const path = require("path");

module.exports = (app, routesDirPath) => {
  const files = fs.readdirSync(routesDirPath);

  files.forEach(filePath => {
    require(path.join(routesDirPath, filePath))(app);
  });
};
