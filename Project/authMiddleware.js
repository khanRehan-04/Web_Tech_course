const adminOnly = (req, res, next) => {
    const user = req.session.user;
    if (user && user.usertype === 'admin') {
      next(); // User is authenticated and authorized as admin
    } else {
      res.status(403).send('Unauthorized');
    }
  };
  
  module.exports = { adminOnly };
  