
module.exports.sessionSearch = (req, res) => {
  console.log('Session Search', req.params);
  // Search Functionality
  res.send(req.params);
}