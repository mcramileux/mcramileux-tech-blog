//calling and locating the api and home routes
const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/index.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;