const USER = require('../models/user.schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'hello1234';
// create user
const createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email });
  if (user) {
    res.status(401).send({ error: '400', message: 'user already exists' });
  } else {
    try {
      if (password === '') throw new Error();
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new USER({
        ...req.body,
        password: hashedPassword,
      });
      const userRes = await newUser.save();
      // FOR JWT
      const uid = userRes._id;
      const accessToken = jwt.sign({ uid }, SECRET_KEY);
      res.status(201).send({ data: userRes, accessToken: accessToken });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: '400', message: 'could not create user' });
    }
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findedUser = await USER.findOne({ email });

    // console.log(findedUser);
    const validatePassword = await bcrypt.compare(
      password,
      findedUser.password
    );
    // console.log(validatePassword);
    if (!validatePassword) throw new Error();
    // const Uuid = findedUser._id;
    const accessToken = jwt.sign({ uid: findedUser._id }, SECRET_KEY);
    res.status(200).send({ data: findedUser, accessToken: accessToken });
  } catch (error) {
    res.status(400).send({ error: '400', message: 'Incorrect Information' });
  }
};

// get user by id
const getUserProfile = (req, res) => {
  try {
    const { _id, userName, email, role } = req.user;
    const user = { _id, userName, email, role };
    res.status(200).send(user);
    // console.log(req.user);
  } catch (error) {
    res.status(400).send({ error: '400', message: ' resources not found ' });
  }
};

module.exports = { createUser, getUserProfile, login };
