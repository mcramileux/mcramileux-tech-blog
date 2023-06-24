// Comment Route
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new comment
router.post('/', withAuth, async (req, res) =>{
    try {
        const newComment = await Comment.create({
            ...req.body,
            post_id: req.body.post_id,
            client_id: req.session.client_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;