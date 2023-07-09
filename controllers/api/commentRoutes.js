// Comment Route
const router = require('express').Router();
const { Comment, Client, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/', (req, res) => {
  Comment.findAll({
    include: Post,
  })
    .then((comment) => res.status(200).json(comment))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Create new comment
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      client_id: req.session.client_id,
      post_id: req.body.post_id
    })
      .then(comment => res.json(comment))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    }
  });

// Get a single comment by its 'id'
router.get('/:id', (req, res) => {
  Comment.findByPk(req.params.id, {
    include: Post,
  })
    .then((comment) => {
      if (!comment) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, async (req, res) => {
  try {
      const comment = await Comment.findOne({ where: { id: req.params.id }});
      console.log(req.body, comment);
      const commentData = await Comment.update(req.body, {
          where: {
              id: req.params.id,
          },
      });
      console.log(commentData, 'commentData')
      if (!commentData) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
      }
      res.status(200).json(commentData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// Delete a comment
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
      client_id: req.session.client_id,
    },
  })
    .then((comment) => {
      console.log(comment);
      res.json(comment);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;