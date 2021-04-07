const { Router } = require('express');
const controllers = require('../controllers/wrestlers.controller.js');
const router = Router();

router.get('/', controllers.getAll)
router.get('/slug/:slug', controllers.getWrestlerBySlug)
router.post('/new', controllers.createWrestler)
router.post('/new-state', controllers.createWrestlerState)

module.exports = router;
