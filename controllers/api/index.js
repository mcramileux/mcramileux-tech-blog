// calling and locating the routes
const router = require('express').Router();

const clientRoutes = require('./clientRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/client', clientRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
