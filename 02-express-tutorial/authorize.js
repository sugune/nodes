const authorize = (req, res, next) => {
  const {user} = req.query;
  if (user === 'myka') {
    req.user = {user: "myka", id: "22"}
    return next();
  }
  res.status(401).send('<h1 style="color: red">unauthorized</h1>');
}

module.exports = authorize;