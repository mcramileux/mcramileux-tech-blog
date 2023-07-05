const Client = require('./Client');
const Post = require('./Post');

Client.hasMany(Post, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Client, {
  foreignKey: 'client_id'
});

module.exports = { Client, Post };
