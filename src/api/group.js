module.exports = app => {
  app.get("/groups", (req, res) => {
    setTimeout(() => {
      res
        .status(200)
        .json(require(`../mocks/app/locales/${req.params.lang}.json`));
    }, 100);
  });
};
