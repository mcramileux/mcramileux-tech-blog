const sequelize = require('../config/connection');
const { Client, Post } = require('../models');

const clientData = require('./clientData.json');
const postData = require('./postData.json');

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

  process.exit(0);
};

seedDatabase();
