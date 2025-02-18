# Digital Hide & Seek

## Description
This project demonstrates the concept of **closures** in JavaScript using a **digital hide-and-seek game**. It defines a function that hides a location and another function that retrieves the hidden location while maintaining **encapsulation** through closures.

## Features
- Defines a **closure** using:
  - `hide(location)`: Stores a **hiding location** in a local variable.
  - `seek()`: Returns the **hidden location** when called.
  - `hide()` returns `seek()`, forming a **closure** around `hideLocation`.
- Calls `hide()` with a **hiding spot** and assigns the returned `seek()` function to `startGame`.
- Logs the **hidden location** by calling `startGame()`.
- Demonstrates **scope** by attempting to access `hideLocation` from outside the function.

## Files Included
- `digitalHideSeek.js` - JavaScript file containing all function definitions and execution.
- 
## How to Use
1. Run `digitalHideSeek.js` in a JavaScript environment.
2. Modify the hiding location to test different outputs.
3. Observe how closures work by attempting to access `hideLocation` directly.

## Technologies Used
- JavaScript

## Author
- Selina Prema

## License
This project is licensed under the **MIT License**.

