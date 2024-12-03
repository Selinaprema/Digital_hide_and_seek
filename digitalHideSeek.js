// Define a hide function, storing it in a local variable
function hide(basement) {
  let hideLocation = basement;

  // Define a seek function
  function seek() {
    return hideLocation;
  }
  return seek;
}

const startGame = hide("Bottom floor");
console.log(startGame());

console.log(hideLocation);

//When attempting to log hidelocation, it says 'hideLocation is not defined'

// This occurs because it is an example of a local scope. The variable has been declared in the hide function and
// cannot be accessed from outside that. Variable declared in a local scope are scoped the block in which they are defined.
