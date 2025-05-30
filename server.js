// IMPORTANT: USE CODE 1 (AND COMMENT OUT CODE 2) IF YOU ARE NOT USING DEPLOYED LINK AND
// WANT TO SET UP BREW MAPS API LOCALLY!!! (use it if Render's server side is not working)
// CODE 1: 👇

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

///////////////////////////////////////////////////////////////////////////////////////////

// IMPORTANT: USE CODE 2 (AND COMMENT OUT CODE 1) IF YOU ARE USING DEPLOYED LINK AND DO NOT
// WANT TO SET UP BREW MAPS API LOCALLY!!! (as long as Render's server side is working and
// you are not getting: 500 (Internal Server Error))
// CODE 2: 👇

// const express = require('express');
// const app = express();
// const cors = require('cors');

// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// app.use(express.json());
// app.use(cors());

// app.set('port', process.env.PORT || 3001);
// app.locals.title = 'Brew Maps Reviews';

// app.get('/api/v1/reviews', async (req, res) => {
//   try {
//     const response = await fetch('https://brew-maps-api.onrender.com/api/v1/reviews');
//     if (!response.ok) {
//       throw new Error(`API error: ${response.status}`);
//     }
//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     res.sendStatus(500);
//   }
// });

// app.get('/api/v1/reviews/:id', async (req, res) => {
//   const { breweryID } = req.params;
//   try {
//     const response = await fetch('https://brew-maps-api.onrender.com/api/v1/reviews');
//     if (!response.ok) {
//       throw new Error(`API error: ${response.status}`);
//     }
//     const data = await response.json();
//     const breweryReviews = data.filter(review => breweryID === review.id);

//     if (breweryReviews.length === 0) {
//       return response.sendStatus(404);
//     }

//     res.status(200).json(breweryReviews);
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     res.sendStatus(500);
//   }
// });

// app.listen(app.get('port'), () => {
//   console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
// });