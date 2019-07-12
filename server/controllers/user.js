const _ = require("lodash");
const { User, Validate, loginValidate } = require("../models/User");
const { sendMail } = require("../config/mailer");
const mongoose = require("mongoose");
const jwtDecode = require("jwt-decode");

const registerUser = async (req, res) => {
  // try {
  console.log(req.body);
  //validate the user coming from the req.body
  const { error } = Validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  // check if email is unique
  const email = req.body.email;
  const emailExist = await User.findOne({ email });
  if (emailExist)
    return res.status(400).send({ error: "User with email already exists" });

  const newUser = _.pick(req.body, [
    "firstName",
    "lastName",
    "phoneNumber",
    "email",
    "address",
    "password"
  ]);

  let user = new User(newUser);
  console.log(user.firstName);

  //   generate a verification token for the user with the referral
  const token = user.generateAuthToken();

  // send the verification email to the user

  sendMail(user.email, token);

  const data = await user.save();

  // res.header('x-auth-token', token).send({
  //     success: 'Account successfully registered, please check your email for verification'
  // });

  res.header("x-auth-token", token).send(data);

  // } catch (err) {
  //     res.status(500).send({ error: err.message })
  // }
};

const confirmUser = async (req, res) => {
  // Get the token from the url
  const token = req.params.token;
  let decode;
  // try and decode the token received

  try {
    // decode = await jwt.verify(token, config.get('coPrivateKey'));
    decode = await jwtDecode(token);
  } catch (error) {
    res.status(400).send({ error: "Invalid token" });
    // throw the error
    throw new Error(error);
  }

  //   find the user in the database and confirm his account
  await User.findOneAndUpdate(
    {
      _id: decode._id,
      username: decode.username
    },
    {
      isVerified: true
    }
  );

  // here we can automatically add the user to the provide help  and also match the user to someone in the gh

  res.send({ success: "Your account has been verified, you can now log in" });
};

const loginUser = async (req, res) => {
  // validate the username/email and password
  const { error } = loginValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  // validate the username/email and password

  // find the user by credential
  const userCredential = _.pick(req.body, ["username", "password"]);

  try {
    const user = await User.findByCredentials(userCredential);
    // check if the user's account has been verified
    if (!user) {
      return res.status(400).send({ error: "username or password is wrong" });
    }

    if (!user.isVerified) {
      return res.status(400).send({
        error: `Please ${
          req.body.username
        } check your email to confirm your account `
      });
      // create a button on the client side the resends the token for account confirmation
    }
    // generate an authentication token for the user
    res
      .header("xAuthToken", user.generateAuthToken())
      .send(_.pick(user, ["_id", "email", "isAdmin"]));
  } catch (error) {
    res.status(400).send({ error: error.message });

    // log the error
  }
};

// this function gets the current user
//note the user id is sent from the header file to  from authentication
const currentUser = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send({ user });
};

// this function gets the all user
const allUsers = async (req, res) => {
  const user = await User.find().select("-password");
  res.send(user);
};

const editUser = async (req, res) => {
  // const { error } = Validate(req.body);
  // if (error) return res.status(400).send({ error: error.details[0].message });

  // validate req.params.id
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send({ error: "Invalid user" });

  const user = await User.findByIdAndUpdate(req.params.id, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  });

  if (!user)
    return res
      .status(400)
      .send({ error: "invalid request, user does not exist" });

  res.send({ user });
};

module.exports = {
  registerUser,
  confirmUser,
  loginUser,
  currentUser,
  editUser,
  allUsers
};
