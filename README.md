# React Router Dom Nested Route Error: Missing Route Definition

This repository demonstrates a common error in React Router Dom v6 related to missing route definitions for nested routes.

## The Problem

The `App.js` file demonstrates a scenario where nested routes are used without explicitly defining a route for the nested path. In this specific example, the `/about` route contains a link to `/about/details`, but there is no corresponding `<Route>` element for `/about/details` within the `Routes` component. This will cause the application to render nothing or throw an error when navigating to the nested path.

## The Solution

The `bugSolution.js` file provides the corrected version of `App.js` where a `<Route>` element is added for the `/about/details` path.  This ensures that the application can correctly navigate to and render the nested `AboutDetails` component.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/about/details` in your browser. You should see an error with the original code and the corrected page with the solution.