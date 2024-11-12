# Random Quote Generator

This project is a web-based Random Quote Generator that displays a new, inspiring quote each time the user clicks a button. Built with JavaScript, HTML, and CSS, it leverages a small array of famous quotes and authors to provide users with motivating and thought-provoking content.

## Demo

Check out the live version of the project [here](https://faresahmed50.github.io/quotes-generator/).

## Features

- **Randomized Quotes**: Displays a different quote each time the button is clicked.
- **Non-Repetitive Display**: Ensures that each quote is displayed only once until all have been shown, after which the list resets.
- **Dynamic User Interface**: A simple, visually engaging interface that encourages interaction.

## Project Structure

The project consists of:

- **HTML**: Provides the page structure and layout, including a header, button, and placeholders for the quote and author.
- **JavaScript**: Contains the logic to randomly generate quotes, track which quotes have been shown, and reset once all quotes have been displayed.
- **CSS**: Adds basic styling for the text and layout, ensuring a clean and visually appealing user interface.

### File Overview

- `index.html`: The main HTML file containing the page structure, including the button to trigger a new quote and placeholders to display each quote and its author.
- `js/script.js`: Contains the JavaScript code responsible for managing the quotes array, generating random quotes, and tracking which quotes have been displayed.
- `css/main.css` and `css/bootstrap.min.css`: Stylesheets to handle the design and layout of the application, utilizing Bootstrap for responsive design.

## How It Works

1. **Quotes Array**: The `quotes` array in `script.js` holds multiple objects, each with a `quote` and `quote_author`.
2. **Quote Display**: When the user clicks the "New Quote" button, the `generateQuotes()` function:
    - Selects a random quote that hasn’t been shown yet.
    - Updates the `quote` and `quote-author` elements in the HTML with the new quote.
    - Tracks displayed quotes using a `visited` array.
3. **Reset Logic**: Once all quotes have been displayed, the `visited` array resets, allowing each quote to be shown again.

## Usage

1. Open `index.html` in a browser.
2. Click the "New Quote" button to display a random quote from the array.
3. Each click generates a unique quote until all quotes are displayed, then the list resets for continuous inspiration.

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/random-quote-generator.git
