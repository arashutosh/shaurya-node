const router = require("express").Router();
const ForumRoute = require("../controllers/discussionController");

router.post("/discuss", ForumRoute.creatediscussion);
router.get("/discusses", ForumRoute.getAllDiscussions);

module.exports = router