const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (validPassword) {
        var token = jwt.sign(
          { email: req.body.email },
          process.env.TOKEN_SECRET,
          {
            expiresIn: "365d",
          }
        );
        res.status(200).send({ token });
      } else {
        throw new Error();
      }
    } else {
      res
        .status(404)
        .send(`Unable to find user name with email : ${req.body.email}`);
    }
  } catch {
    res.status(400).send("Please provide valid Email and Password!");
  }
};

module.exports = {
  loginUser,
};
