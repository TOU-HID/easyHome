const jwt = require('jsonwebtoken');
const User = require('../models/user.schema');
const SECRET_KEY = 'hello1234';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(400).send({ Message: 'No Header auth' });
  const token = authHeader.split(' ')[1];
  try {
    const { uid } = jwt.verify(token, SECRET_KEY);
    // console.log(jwt.verify(token, SECRET_KEY));
    const user = await User.findOne({ _id: uid });
    if (!user) return res.status(401);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).send({ Messages: ' Some error occures' });
  }
};

module.exports = authMiddleware;
