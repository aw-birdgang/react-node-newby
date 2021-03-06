const Sequelize = require('sequelize');
const Comment = require('./comment');
const Hashtag = require('./hashtag');
const Image = require('./image');
const Post = require('./post');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

console.log("config.database : " + config.database);
console.log("config.username : " + config.username);
console.log("config.password : " + config.password);
console.log("config.port : " + config.port);

const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

db.Comment = Comment;
db.Hashtag = Hashtag;
db.Image = Image;
db.Post = Post;
db.User = User;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
