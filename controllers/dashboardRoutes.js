// might delete

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Client, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
                model: Client
            }
        ],
        where: {
            client_id: req.session.client_id
        }
    }).then((posts) => {
        posts = posts.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts });
    });
});

module.exports = router;