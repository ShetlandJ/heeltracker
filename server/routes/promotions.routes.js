const router = require('express').Router();
const promotions = require("../controllers/promotions.controller.js");

// Retrieve all wrestlers
router.get("/:alias/wrestlers", promotions.getWrestlersByAlias);
// router.get("/", wrestlers.findAll);
module.exports = router
