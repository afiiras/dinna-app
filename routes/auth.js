const router = require("express").Router();

const {
  Signup,
  Signin,
  ForgetPassword,
  ResetPassword,
} = require("../controllers/auth");

router.route("/signup").post(Signup);

router.route("/signin").post(Signin);

router.route("/ForgetPassword").post(ForgetPassword);

router.route("/ResetPassword/:resetToken").put(ResetPassword);

module.exports = router;
