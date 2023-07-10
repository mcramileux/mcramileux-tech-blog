const router = require('express').Router();
const { Post, Client, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts
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
    console.log(posts);
    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets all existing post created by client
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with client data
    const postData = await Post.findAll({
      where: {
        client_id: req.session.client_id,
      },
      include: [
        {
          model: Client,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData.map((post) => post.get({ plain: true }));

    const clientData = await Client.findByPk(req.session.client_id);
    const client = clientData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('dashboard', {
      post,
      logged_in: req.session.logged_in,
      client_name: client.name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets all posts by id
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Client,
          attributes: ['name'],
        },
        {
          model: Comment,
          include: [{ model: Client }]
        },
      ],
    });

    const post = postData.get({ plain: true });
    console.log(post);
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get to edit a post
router.get('/edit-post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      where: { client_id: req.session.client_id },
      include: [
        {
          model: Client,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('edit-post', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in client based on the session ID
    const clientData = await Client.findByPk(req.session.client_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = clientData.get({ plain: true });

    res.render('dashboard', {
      ...Client,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get to login
router.get('/login', (req, res) => {
  // If the client is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Get to signup
router.get('/signup/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
