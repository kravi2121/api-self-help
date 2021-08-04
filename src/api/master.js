module.exports = app => {
  app.get("/v1/master/members", (req, res) => {
    setTimeout(() => {
      res.status(200).json(require(`../mocks/masters/members.json`));
    }, 100);
  });
};
