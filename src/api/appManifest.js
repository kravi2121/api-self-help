"use strict";

module.exports = (app) => {
  app.get("/v1/app/manifest", (req, res) => {
    try {
      res.status(200).json(require("../mocks/app/app.json"));
    } catch (err) {
      res.sendStatus(404);
    }
  });

  app.get("/v1/locale/:lang", (req, res) => {
    setTimeout(() => {
      res
        .status(200)
        .json(require(`../mocks/app/locales/${req.params.lang}.json`));
    }, 100);
  });

  app.get("/v1/languages", (req, res) => {
    try {
      res.status(200).json(require("../mocks/app/languages.json"));
    } catch (err) {
      res.sendStatus(404);
    }
  });
};
