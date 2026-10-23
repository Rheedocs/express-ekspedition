const express = require("express");
const controller = require("../controllers/pageController");

const router = express.Router();

router.get("/", controller.home);
router.get("/about", controller.about);
router.get("/json", controller.json);
router.post("/submit", controller.submit);
router.get("/user/:id", controller.user);
router.get("/error", controller.error);
router.get("/hello/:name", controller.hello);
router.post("/calculate", controller.calculate);

module.exports = router;