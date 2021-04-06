const { Router } = require('express');
const controllers = require('../controllers/wrestlers.controller.js');
const router = Router();

router.get('/', controllers.getAll)

module.exports = router;
