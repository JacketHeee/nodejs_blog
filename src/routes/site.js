const express = require("express");
const siteController = require("../app/controllers/SiteController");
const router = express.Router();

router.get("/", siteController.index);
router.get("/about", siteController.about);
router.get("/search", siteController.search);

console.log("Con bo biet bay       ");

module.exports = router;
