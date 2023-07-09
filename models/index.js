const Client = require('./Client');
const Post = require('./Post');
const Comment = require('./Comment');

// Client.hasMany(Post, {
//   foreignKey: 'client_id',
//   onDelete: 'CASCADE'
// });

Post.belongsTo(Client, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Client, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
// });

// Client.hasMany(Comment, {
//   foreignKey: 'client_id',
//   onDelete: 'CASCADE',
// });



module.exports = { Client, Post, Comment };
