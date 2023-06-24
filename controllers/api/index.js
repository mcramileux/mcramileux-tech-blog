// calling and locating the routes
const router = require('express').Router();

const clientRoutes = require('./clientRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

router.use('/clients', clientRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;
