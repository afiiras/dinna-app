const express = require("express");
const router = express.Router();

//Users Model
const Users = require("../../modules/Users");

// @route GET api/Users
// @desc Get All Users
// @access Public

router.get("/", (req, res) => {
  Users.find()
    .sort({ date: -1 })
    .then((Users) => res.json(Users));
});

// @route POST api/Users
// @desc Create A User
// @access Public

router.post("/", (req, res) => {
  const newUser = new Users({
    name: req.body.name,
    password: req.body.password,
    date: req.body.date,
  });

  newUser.save().then((User) => res.json(User));
});

// @route DELETE api/Users/:id
// @desc Delete A User
// @access Public

router.delete("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((Users) => Users.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
