//Followed the solved folder in the mini-project

const router = require('express').Router();
const { Post, Client } = require('../models'); 
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with client data
    const postData = await Post.findAll({
      include: [
        {
          model: Client,
          // attributes: ['name'],
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

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in client based on the session ID
    const clientData = await Client.findByPk(req.session.client_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const client = clientData.get({ plain: true });

    res.render('dashboard', {
      // username: client.name,
      // blogPosts: client.posts,
      ...client,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the client is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
