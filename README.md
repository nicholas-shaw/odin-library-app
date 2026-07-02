# odin-library-app

A small client-side library app built for The Odin Project JavaScript lesson.
Available to view at [https://nicholas-shaw.github.io/odin-library-app](https://nicholas-shaw.github.io/odin-library-app/)

## Project contents

- `index.html` — the app shell and container for the library UI.
- `style.css` — responsive styling for the page, cards, buttons, and form elements.
- `main.js` — library data, book model, and rendering logic for dynamic book cards.
- `LICENSE` — repository license file.

## Features

- Displays a set of sample books using a JavaScript `library` array.
- Uses Open Library cover images for sample books.
- Renders each book as a responsive card with title, author, page count, and read status.
- Uses a card grid layout, which is responsive focusing on a mobile friendly layout.

## Usage

1. Open `index.html` in a browser.
2. The sample library is loaded, and the app displays the book cards.
3. Book cards include buttons to toggle read status and remove books (if implemented).
4. There is no database. Any changes made will not survive a refresh.

## Future ideas
- Local storage to simulate a data base.
