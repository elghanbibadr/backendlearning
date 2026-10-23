const router = require("express").Router();
const {registerUser } = require("../controllers/user.controller");

router.route("/").post(registerUser);

module.exports = router;
