const router = require("express").Router();
const blogRoute = require("../controllers/blogController");

router.post("/Blog", blogRoute.createBlog);

module.exports = router