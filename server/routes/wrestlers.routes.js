const router = require('express').Router();
const wrestlers = require("../controllers/wrestlers.controller.js");

// Retrieve all wrestlers
router.get("/slug/:slug", wrestlers.findBySlug);
router.get("/", wrestlers.findAll);
module.exports = router
