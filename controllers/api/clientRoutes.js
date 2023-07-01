// Client Route
const router = require('express').Router();
const { Client, Post, Comment } = require('../../models');

// Get all clients
router.get('/', (req, res) => {
  Client.findAll({
          attributes: {
              exclude: ['password']
          }
      })
      .then(dbClientData => res.json(dbClientData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// Get a specific client
router.get('/:id', (req, res) => {
  Client.findOne({
          attributes: {
              exclude: ['password']
          },
          where: {
              id: req.params.id
          },
          include: [{
                  model: Post,
                  attributes: ['id', 'title', 'content', 'created_at']
              },
              {
                  model: Comment,
                  attributes: ['id', 'comment_text', 'created_at'],
                  include: {
                      model: Post,
                      attributes: ['title']
                  }
              }
          ]
      })
      .then(dbClientData => {
          if (!dbClientData) {
              res.status(404).json({
                  message: 'No client found with this id'
              });
              return;
          }
          res.json(dbClientData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});
// Create a new client
router.post('/', (req, res) => {
  Client.create({
          username: req.body.username,
          password: req.body.password
      })
      .then(dbClientData => {
          // save the session
          req.session.save(() => {
              req.session.user_id = dbClientData.id;
              req.session.username = dbClientData.username;
              req.session.loggedIn = true;

              res.json(dbClientData);
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
})

// Client logging in
router.post('/login', async (req, res) => {
    Client.findOne({ 
      where: { 
        email: req.body.email
      } 
    })
    .then(dbClientData => {
      if (!dbClientData) {
          res.status(400).json({
              message: 'No client with that username!'
          });
          return;
      }

    //   req.session.save(() => {
    //       req.session.user_id = dbClientData.id;
    //       req.session.username = dbClientData.username;
    //       req.session.loggedIn = true;

    //       res.json({
    //           user: dbClientData,
    //           message: 'You are now logged in!'
    //       });
    //   });

      const validPassword = dbClientData.checkPassword(req.body.password);

      if (!validPassword) {
          res.status(400).json({
              message: 'Incorrect password!'
          });
          return;
      }
      //save the session
      req.session.save(() => {
          req.session.user_id = dbClientData.id;
          req.session.username = dbClientData.username;
          req.session.loggedIn = true;

          res.json({
              user: dbClientData,
              message: 'You are now logged in!'
          });
      });
  });
});

// Client logging out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
