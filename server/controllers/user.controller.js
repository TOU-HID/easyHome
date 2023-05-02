const USER = require("../models/user.schema");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email });
  if (user) {
    res.status(401).send({ error: "400", message: "user already exists" });
  } else {
    try {
      if (password === "") throw new Error();
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new USER({
        ...req.body,
        password: hashedPassword,
      });
      const userRes = await newUser.save();
      // FOR JWT
      const uid = userRes._id;
      const accessToken = jwt.sign({ uid }, SECRET_KEY, {
        expiresIn: "24h",
      });
      console.log(accessToken);
      res.status(201).send({ data: userRes, accessToken: accessToken });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "400", message: "could not create user" });
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
    const accessToken = jwt.sign({ uid: findedUser._id }, SECRET_KEY, {
      expiresIn: "24h",
    });
    res.status(200).send({ data: findedUser, accessToken: accessToken });
  } catch (error) {
    res.status(400).send({ error: "400", message: "Incorrect Information" });
  }
};

// Google auth Create User

const googleCreateUser = async (req, res) => {
  const { email } = req.body;
  const user = await USER.findOne({ email });
  if (!user) {
    try {
      const newUser = new USER({
        ...req.body,
      });
      const userRes = await newUser.save();
      // FOR JWT
      const uid = userRes._id;
      const accessToken = jwt.sign({ uid }, SECRET_KEY, {
        expiresIn: "24h",
      });
      //  console.log(accessToken);
      res.status(201).send({ data: userRes, accessToken: accessToken });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: "400", message: "could not create user" });
    }
  } else {
    try {
      const findedUser = user;

      const accessToken = jwt.sign({ uid: findedUser._id }, SECRET_KEY, {
        expiresIn: "24h",
      });
      res.status(200).send({ data: findedUser, accessToken: accessToken });
    } catch (error) {
      res.status(400).send({ error: "400", message: "Incorrect Information" });
    }
  }
};

// Google auth Login user

const getUserProfile = (req, res) => {
  try {
    const { _id, userName, email, role } = req.user;
    const user = { _id, userName, email, role };
    res.status(200).send(user);
    // console.log(req.user);
  } catch (error) {
    res.status(400).send({ error: "400", message: " resources not found " });
  }
};
const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const selectedUser = await USER.findById(userId);
    selectedUser.password = "";
    res.status(200).send(selectedUser);
  } catch (error) {
    console.log(error);
  }
};

const likedHouse = async (req, res) => {
  const { userId, houseId } = req.body;
  try {
    const findedUser = await USER.findOne({ email });
    const isLiked = findedUser.likedHouse.includes(houseId.toString());
    let message = "";
    if (!isLiked) {
      likedHouse.push(houseId.toString());
      message = "Added to wishlist";
    } else {
      const indexOfHouseId = findedUser.likedHouse.indexOf(houseId.toString());
      if (indexOfHouseId > -1) {
        findedUser.likedHouse.splice(indexOfHouseId, 1);
        message = "Removed from wishlist";
      }
    }
    await findedUser.save();
    res.status(200).send({
      message,
      houseId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  createUser,
  getUserProfile,
  login,
  getUserById,
  googleCreateUser,
  likedHouse,
};
