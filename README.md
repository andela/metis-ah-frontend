## Authors Haven - A Social platform for the creative at heart.


## Vision
Create a community of like minded authors to foster inspiration and innovation
by leveraging the modern web.

## Metis-ah-frontend 
[![CircleCI](https://circleci.com/gh/andela/metis-ah-frontend/tree/develop.svg?style=svg)](https://circleci.com/gh/andela/metis-ah-frontend/tree/develop) [![Test Coverage](https://api.codeclimate.com/v1/badges/93530611b5b0d23beebf/test_coverage)](https://codeclimate.com/github/andela/metis-ah-frontend/test_coverage) [![Build Status](https://travis-ci.org/andela/metis-ah-frontend.svg?branch=develop)](https://travis-ci.org/andela/metis-ah-frontend)


## Description

This project creates a platform for Authors to create and share articles. It is equally a platform that allows users to read articles, react to them and socialize with one another.

### Website url
[view live app](https://metis-ah-frontend.herokuapp.com/)


## Documentation

API Documentation is hosted on [Swagger docs](https://metis-ah-staging.herokuapp.com/api-docs)

### Covered End-points
Below are the end-points that have currrently been implemented on this project:
* `/` - Landing page `Unprotected`
* `/users/:userId` - Profile page `Protected`
* `/social/:type` - Social Authentication page `Unprotected`
* `/auth/reset-password/` - Password Reset Verification page `Unprotected`
* `/auth/reset-password/:token` - Update Password page `Unprotected`
* `/verifyemail/:token` - Email verification page `Unprotected`
* `/articles/new` - Create new article page `Protected`
* `/articles/:category` - Article Categories page `Unprotected`
* `/articles/:articleId/view` - Single Article page `Unprotected`
* `/successSignup` - Successful Signup page `Unprotected`
* `/*` - 404 page `Unprotected`



## Setup

Below are step by step instructions on how to get the code setup locally

### Dependencies
This project is dependent on the following technologies

* **ReactJS** - Javascript library for building user interfaces
* **Redux** - State management tool for javascript front-end applications
* **Jest** - Test runner
* **Enzyme** - Assertion library
* **CKEditor** - Document Editor library
* **NodeJS** - Javascript runtime environment for running javascript code
* **npm** - node package manager
* **Webpack** - Module bundler and task runner for javascript applications
* **EsLint** - Code linter configured to use **Airbnb Style Guide**


### Getting Started
* clone this repository
* change directory into the project folder
* install dependencies by running `npm install` on your *command-line* opened in the project's root directory
* run `npm run dev` to start development server
* Your default browser automatically opens at `http://localhost:3500/`



## Testing
* clone this repository
* switch into the project folder
* install dependencies by running `npm install` on your *command-line* opened in the project's root directory
* run `npm test` run test



## Deployment
* All pull request raised on this project is automatically deployed to **Heroku** as a preview app. The link to this app is accessible via the PR's page.
* The **develop** branch automatically deploys whenever a pull request is merged.


Author's Haven © 2018
