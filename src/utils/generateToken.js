const jwt = require('jsonwebtoken');
const JWT_SECRET  = process.env.JWT_SECRET;

const generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
};

module.exports = generateToken;