const express = require('express');
const path = require('path');
const Post = require('./models/Posts');
const Destinations = require('./models/Destinations');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// Allow override of HTTP methods based on the query string ?_method=DELETE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4567;
app.use(  express.static('client'));
// Set the folder for where our views are.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (request, response) => {
  Post.all().then(postsData => {
    response.render('homepage', { posts: postsData });
  });
});

app.get('/posts', (request, response) => {
  Post.all().then(postsData => {
    console.log(postsData);
    response.render('posts/index', { posts: postsData });
  });
});

app.get('/posts/:id', (request, response) => {
  const id = request.params.id;
  Post.one(id).then(postData => {
    response.render('posts/show', { posts: postData });
  });
});

app.post('/posts', (request, response) => {
  newPost = {
    article: request.body.article,
    image: request.body.image
  };
  Post.create(newPost).then(postData => {
    response.redirect(302, '/posts');
  });
});

app.put("/posts/:id", (request, response) => {
  const updatePost = request.body;
  updatePost.id = request.params.id;
  Post.update(updatePost).then(postData => {
    response.redirect(302, `/posts/ ${updatePost.id}`);
  });
});

app.delete("/posts/:id", (request, response) => {
  const id = request.params.id;
  Post.delete(id).then(post => {
    response.redirect(302, "/posts");
  });
});

app.get('/destinations', (request, response) => {
  Destinations.all().then(destinationsData => {
    response.render('destinations/index', { destinations: destinationsData });
  });
});

app.post('/posts', (request, response) => {
  const newDest = request.body;
  Destinations.createDest(newDest).then(destData => {
    response.redirect(302, '/posts');
  });
});

app.put("/posts/:id", (request, response) => {
  const updateDest = request.body;
  updateDest.id = request.params.id;
  Destinations.updateDest(updateDest).then(destData => {
    response.redirect(302, `/posts/ ${updateDest.id}`);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


