# Guess Number Game Project

![Guessing Game](https://i.ibb.co/7CQFJ1T/sample.png)

Check out the [demo](https://nenorvalls-guessing-game.netlify.app/) here.

## Preview

This is a simple web application that combines frontend technologies (HTML, CSS, JavaScript) with a Node.js backend using Express. The game logic involves guessing a number within a specified range, and the results are saved to a file on the server.

## Frontend (HTML, CSS, JavaScript)

- **HTML:** The structure of the webpage is defined using HTML.
- **CSS:** Custom styling for the game interface is defined in the `styles.css` file.
- **JavaScript:** The game logic is implemented using JavaScript in the `script.js` file.

## Styling (`styles.css`)

- Custom styling for the game interface is defined in the `styles.css` file.
- The `body` element has a background color of `#f0f0f0`.
- The game container has a maximum width of `450px`, a background color of `#8b0000`, border radius of `10px`, and is centered on the page.
- The primary button has a background color of `#ffc107`, bold white text, and no border.

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
