# Brew Maps API

This repo was created to be used with the [Brew Maps](https://github.com/userigorgithub/brew-maps) project.

## Set Up for local hosting

Clone this down, and cd into it. Then run:

`npm install`

`node server.js`

## Endpoints (locally)
| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all reviews| `http://localhost:3001/api/v1/reviews` | GET  | none | object with `reviewsData` property containing an array of all reviews |
| Add new review | `http://localhost:3001/api/v1/reviews` | POST | `{ "id": "banjo-brewing-fayetteville", "name": "rachel", "review": "Awesome beer!" }` | `{ message: 'Good job'}` |

## Set Up with Render

None

## Endpoints (using Render)
| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all reviews| `https://brew-maps-api.onrender.com/api/v1/reviews` | GET  | none | object containing an array of all reviews |
| Add new review | `https://brew-maps-api.onrender.com/api/v1/reviews` | POST | `{ "id": "banjo-brewing-fayetteville", "name": "rachel", "review": "Awesome beer!" }` | object containing an array of all reviews |