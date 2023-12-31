const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    
    const newComment = await Comment.create({
      description:req.body.description, 
      post_id: req.body.postId, 
      client_id: req.session.client_id,
    }
    
      );
      console.log(newComment);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;