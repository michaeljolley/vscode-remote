
exports.helloWorld = (req, res) => {
  const message = req.query.message || req.body.message || 'Hello GDG DevFest 2019!';
  res.status(200).send(message);
}
