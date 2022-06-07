# Brew Maps API

This repo was created to be used with the [Brew Maps](https://github.com/stephanie-roe/brew-maps/tree/main) project.

## Set Up

Clone this down, and cd into it. Then run:

`npm install`

`npm start`

## Endpoints
| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all reviews|`http://localhost:3001/api/v1/reviews`| GET  | none | object with `reviewsData` property containing an array of all reviews |
| Add new review |`http://localhost:3001/api/v1/reviews`| POST | `{ "id": "banjo-brewing-fayetteville", "name": "rachel", "review": "Awesome beer!" }` | `{ message: 'Good job'}`|
