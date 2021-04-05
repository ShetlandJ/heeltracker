const router = require('express').Router();
const wrestlersRoutes = require('./wrestlers.routes.js');
const promotionRoutes = require('./promotions.routes.js');
// Adding customer routes - can add more routes here

router.use('/wrestlers', wrestlersRoutes);
router.use('/promotions', promotionRoutes);

module.exports = router