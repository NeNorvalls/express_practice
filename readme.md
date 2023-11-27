# Guess Number Game Project

![Guessing Game](https://i.ibb.co/7CQFJ1T/sample.png)

## Overview

This project is a simple web application that integrates frontend technologies (HTML, CSS, JavaScript) with a Node.js backend using Express. The game involves guessing a number within a specified range, and the results are saved to a file on the server.

## Frontend (HTML, CSS, JavaScript) with Bootstrap v5

- **HTML:** Defines the structure of the webpage.
- **CSS:** Custom styling for the game interface is provided in the `styles.css` file, enhanced by Bootstrap v5.
- **JavaScript:** The game logic is implemented using JavaScript in the `script.js` file.

## Styling (`styles.css`) with Bootstrap v5

- Custom styling for the game interface is defined in the `styles.css` file, complemented by Bootstrap v5 for a responsive and modern design.
- The `body` element has a background color of `#f0f0f0`.
- The game container has a maximum width of `450px`, a background color of `#8b0000`, border radius of `10px`, and is centered on the page.
- The primary button has a Bootstrap class (`btn btn-primary`) for styling (`background-color: #ffc107;`, `color: #8b0000;`).
- The game interface benefits from Bootstrap's utility classes for spacing (`mt-3`, `mb-3`) and text alignment (`text-center`).
- Responsive design is enhanced using Bootstrap's grid system.

## Media Queries

- Responsive design is implemented using media queries in the CSS to adjust the layout for different screen sizes.
- For screens with a maximum width of `768px`, the container's width is set to `90%`.

## Game Logic (in `script.js`)

- The game logic is implemented in JavaScript, handling user input, checking if the guess is correct, and providing feedback.
- The game randomly generates a secret number between 1 and 100.
- User attempts are tracked, and feedback is provided on whether the guess is too high, too low, or correct.
- The game result is displayed on the webpage.

## AJAX Request

- The game result is saved asynchronously using an AJAX request to the "/saveGameResult" endpoint.
- The AJAX request is handled using jQuery.

## Backend (Node.js with Express)

- The backend is built with Node.js and uses the Express framework.
- The server listens on port 3000.
- The `express.static` middleware serves static files from the "public" directory.
- The `/saveGameResult` endpoint receives a POST request with the game result, appends it to the "game_results.txt" file, and sends a response.
- The home route ("/") serves the main HTML file.

## Dependencies

- [Express](https://www.npmjs.com/package/express): A fast, unopinionated, minimalist web framework for Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser): Middleware to parse incoming request bodies.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the server with `node server.js`.
4. Access the application at [http://localhost:3000](http://localhost:3000).
