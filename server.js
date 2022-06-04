const reviewsData = require('./reviews-data')

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Brew Maps Reviews';
app.locals.reviews = reviewsData;

app.get('/api/v1/reviews', (request, response) => {
  response.send(reviewsData);
});

app.get('/api/v1/reviews/:id', (request, response) => {
  const { breweryID } = request.params;
  const breweryReviews = app.locals.reviews.filter(review => breweryID === review.id)

  if (!breweryReviews) {
    return response.sendStatus(404);
  }

  response.status(200).json(breweryReviews)
});

app.post('/api/v1/reviews', (request, response) => {
  const { breweryID } = request.params;
  const breweryReviews = app.locals.reviews.filter(review => breweryID === review.id)
  reviewsData.push(request.body)

  response.status(201).json({message: 'good job', post: request.body});
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
