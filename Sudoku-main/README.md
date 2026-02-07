Sudoku Game

A simple and interactive Sudoku game built with JavaScript, HTML, and CSS. The game allows users to play Sudoku at various difficulty levels, provides an easy-to-use interface, and supports direct keyboard input for number entry.

Features

  Multiple Difficulty Levels: Play Sudoku in different levels — Easy, Medium, Hard, Very Hard, Insane, and Inhuman.

  Interactive Grid: Click on any cell to select it and enter a number using the keyboard.

  Mobile Responsive: The game is designed to work seamlessly across different devices, from desktops to mobile phones.

  Puzzle Generation: Sudoku puzzles are randomly generated and vary in difficulty.

  User-Friendly Interface: A simple, clean interface with grid highlights for selected cells and easy-to-read numbers.


Technologies Used

  HTML5: For the structure of the web page.

  CSS3: For styling the game and ensuring it’s mobile-responsive.

  JavaScript (ES6): For the game logic and interactivity.


Installation
  To run the Sudoku game on your local machine, follow these steps:

  1. Clone this repository to your local machine:

    git clone https://github.com/mahanaatma1/Sudoku.git

  2. Navigate to the project directory:

    cd Sudoku

  3. Open the index.html file in your preferred web browser:

    open index.html


File Structure

   /sudoku-game
  ├── /static
  │    ├── constant.js    # Contains constants for grid size, difficulty levels, etc.
  │    ├── sudoku.js     # Game logic for Sudoku generation and validation.
  │    ├── app.js         # Main JavaScript file for rendering the grid and handling user input.
  │    └── app.css        # Styling for the game, including grid layout and mobile responsiveness.
  ├── index.html         # HTML file that sets up the game interface.
  └── README.md           # Project documentation (this file).


How It Works
  Grid Generation and Sudoku Validation

  The game generates a Sudoku puzzle and validates the entries in the following way:

  A grid of size 9x9 is created, initialized with empty cells.

  The grid is populated by recursively placing numbers that satisfy the Sudoku rules (no duplicates in rows, columns, or 3x3 subgrids).

  The puzzle is then randomized by removing a number of cells to create the question.

License

  This project is open source and available under the MIT License.

