const Client = require('./Client');
const Post = require('./Post');

Client.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Client, {
  foreignKey: 'user_id'
});

module.exports = { Client, Post };
