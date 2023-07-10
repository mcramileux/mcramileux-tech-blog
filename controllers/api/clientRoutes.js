// Client Route
const router = require('express').Router();
const { Client } = require('../../models');
// const withAuth = require('../../utils/auth');

// Create a new client
router.post('/', async (req, res) => {
  try {
    const clientData = await Client.create(req.body);

    req.session.save(() => {
      req.session.client_id = clientData.id;
      req.session.logged_in = true;

      res.status(200).json(clientData);
      // res.json({ user: clientData, message: "You are now signed up!"});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const clientData = await Client.findOne({ where: { email: req.body.email } });

    if (!clientData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await clientData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.client_id = clientData.id;
      req.session.logged_in = true;

      res.json({ client: clientData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
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