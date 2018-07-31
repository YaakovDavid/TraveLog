const db = require('../database/connection');
const Post = {};


Post.all = () => {
  return db.any('SELECT * FROM posts');
};

Post.one = (id) => {
  return db.one('SELECT * FROM posts WHERE id = ${id}', { id: id });
};

Post.create = (newPost) => {
  return db.one(
    'INSERT INTO posts (article, image) VALUES (${article}, ${image}) RETURNING *', newPost);
};

Post.update = (updatePost) => {
  return db.none("UPDATE posts SET article = ${article}, image = ${image} WHERE id = ${id}", updatePost);
};

Post.delete = (id) => {
  return db.result("DELETE FROM posts WHERE id = ${id}", { id: id });
};


module.exports = Post;
