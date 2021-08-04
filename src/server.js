"use strict";

const express = require("express");
const cors = require("cors");
const path = require("path");

const port = 5000;
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable("x-powered-by");

routes(app, path.join(__dirname, "api"));

app.listen(port, () => {
  console.log(`mock server is started on port ${port}`);
});
