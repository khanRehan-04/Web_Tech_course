const adminOnly = (req, res, next) => {
    const user = req.session.user;
    if (user && user.usertype === 'admin') {
      next();
    } else {
      res.status(403).send('Unauthorized');
    }
  };
  
  module.exports = { adminOnly };
  