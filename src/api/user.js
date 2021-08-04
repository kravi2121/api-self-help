module.exports = app => {
  app.get("/v1/users/:userId", (req, res) => {
    setTimeout(() => {
      res.status(200).json(require(`../mocks/users/${req.params.userId}.json`));
    }, 100);
  });
};
