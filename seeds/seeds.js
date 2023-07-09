const sequelize = require('../config/connection');
const { Client, Post, Comment } = require('../models');

const clientData = require('./clientData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const clients = await Client.bulkCreate(clientData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      client_id: clients[Math.floor(Math.random() * clients.length)].id,
    });
  }

  const posts = await Post.findAll(); 

    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            client_id: clients[Math.floor(Math.random() * clients.length)].id,
            post_id: posts[Math.floor(Math.random() * posts.length)].id,
        });
    }
  
  process.exit(0);
};

seedDatabase();
