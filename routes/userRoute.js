const router = require("express").Router();
const userRouter = require("../controllers/userController");

router.post("/SignUp", userRouter.signUpUser);
router.post("/Login", userRouter.loginUser);

module.exports = router