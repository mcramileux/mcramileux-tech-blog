const router = require('express').Router();
const { Post, Client } = require('../models'); 
const withAuth = require('../utils/auth');

// get all posts
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with client data
    const postData = await Post.findAll({
      include: [
        {
          model: Client,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
      } catch (err) {
        res.status(500).json(err);
    }
  });

// login
router.get('/login', (req, res) => {
  // If the client is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// signup
router.get('/signup/', (req, res) => {
  if (req.session.logged_in) {
      res.redirect('/');
      return;
  }
  res.render('signup');
});

// Get one post
router.get('/posts/:id', (req, res) => {
  Post.findOne({
      where: {
          id: req.params.id
      },
      include: [
          {
              model: Client
          },
          {
              model: Comment
          }
      ]
  }).then((post) => {
      if (!post) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }
      post = post.get({ plain: true });
      res.render('edit-post', { post, logged_in: req.session.logged_in });
  });
  
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, (req, res) => {
  Post.findAll({
      where: {
          client_id: req.session.client_id
      },
      include: [
          {
              model: Client
          }
      ]
  }).then((posts) => {
      posts = posts.map((post) => post.get({ plain: true }));
      res.render('dashboard', { posts, logged_in: req.session.logged_in });
  });
});

router.get('/comment/:id', (req, res) => {
  Post.findOne({
      where: {
          id: req.params.id
      },
      include: [
          { model: Client },
            {
              model: Comment,
              include: [
                  { model: Client }
              ]
          }
        ]
  }).then((post) => {
      if (!post) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }
      post = post.get({ plain: true });
      // console.log(post)
      res.render('comment', { post, logged_in: req.session.logged_in });
  });
});

router.get('/edit-comment/:id', withAuth, (req, res) => {
  Comment.findOne({
      where: {
          id: req.params.id
      },
      include: [
          {
              model: Client
          },
      ]
  }).then((comment) => {
      if (!comment) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
      }
      comment = comment.get({ plain: true });
      // console.log(comment)
      res.render('edit-comment', { comment, logged_in: req.session.logged_in });
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
      res.redirect('/');
  });
});

module.exports = router;
