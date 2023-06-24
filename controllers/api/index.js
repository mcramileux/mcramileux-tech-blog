// calling and locating the user and proj routes
const router = require('express').Router();
const clientRoutes = require('./clientRoutes');
const postRoutes = require('./postRoutes');

router.use('/clients', clientRoutes);
router.use('/post', postRoutes);

module.exports = router;
