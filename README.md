# react-assessment

A take-home coding assignment for React/front-end job candidates.

## Building and running in development mode

Install dependencies with `yarn` or `npm install`.

Run in development mode with `yarn start` or `npm run start`, view at `http://localhost:8080/`.

## Instructions

The sample app is just one page representing a users-management UI in a typical web app. Please complete the tasks below in any way you feel is effective and efficient — you can approach state management however you see fit, add dependencies if necessary, etc.

### Features

1. Make a network request to [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) and use the response to populate the `UsersTable`, sorted by the `Username` field, when the page loads.
2. Extend the `UsersForm` to allow for rendering a new user into the `UsersTable`. All three fields should be required to make an addition.
3. [stretch goal] Refactor the the `UsersTable` so that entries contain an “Edit” link on the right. When clicked, populate the form with the user details and allow updating the local view of that user from the form with changes.
