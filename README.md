# News Aggregator API

## Objective
Build a RESTful API that allows users to fetch news articles from multiple sources based on their preferences.

## Project Description
In this project, we will create a RESTful API using Node.js, Express.js, and NPM packages. The API will allow users to register, log in, and set their news preferences (e.g., categories, sources). The API will then fetch news articles from multiple sources using external news APIs (e.g., NewsAPI). The fetched articles should be processed and filtered asynchronously based on user preferences.

## Project Requirements
- POST /register: Register a new user.
- POST /login: Log in a user.
- GET /preferences: Retrieve the news preferences for the logged-in user.
- PUT /preferences: Update the news preferences for the logged-in user.
- GET /news: Fetch news articles based on the logged-in user's preferences.

Use external news APIs to fetch news articles from multiple sources. Incorporate async/await and Promises in the process of fetching news data and filtering it based on user preferences.
Implement proper error handling for invalid requests, authentication errors, and authorization errors.
Add input validation for user registration and news preference updates.

## Solution
### Technologies Used:
- Node.js
- Express.js

### How to run the application?
- Clone the repository
- Run `npm install` to install the dependencies
- Run `npm start` to start the application
- Open Postman and test the endpoints [Task Manager API.json](Task%20Manager%20API.json)

Folder Structure:
```tree
src
├───utils
├───v1
    ├───models
    │   ├───task.model.js
    ├───routes
    │   ├───task.route.js
    ├───services
    │   ├───task.service.js
    ├───controllers
        ├───task.controller.js
```
v1 - version 1 of the API
utils - contains the utility functions

For modular code structure the logic is divided into these directories and files.

**Models** - The schema definition of the Model

**Routes** - The API routes maps to the Controllers

**Controllers** - The controllers handles all the logic behind validating request parameters, query, Sending Responses with correct codes.

**Services** - The services contains the database queries and returning objects or throwing errors

