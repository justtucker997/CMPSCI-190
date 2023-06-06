var timer1 = null;
var el = null;
var score = 0; // number of 'hits'
var shots = 0; // total 'shots'
var horizontalDirection = 1; // 1 for moving right, -1 for moving left
var verticalDirection = 1; // 1 for moving down, -1 for moving up

function moveIt() {
  // animate the image
  var left = parseInt(el.style.left);
  var top = parseInt(el.style.top);

  // Check if the UFO is at the screen edges
  if (left >= (screen.width - 50) || left <= 0)
    horizontalDirection *= -1;
  if (top >= (screen.height - 50) || top <= 0)
    verticalDirection *= -1;

  // Update the position based on directions
  left += 6 * horizontalDirection;
  top += 6 * verticalDirection;

  // Set the updated position
  el.style.left = left + 'px';
  el.style.top = top + 'px';

  // Set the timer
  timer1 = setTimeout(moveIt, 25);
}

function scoreUp() {
  // increment the player's score
  score++;
}

function scoreboard() {
  // display the scoreboard
  document.getElementById("score").innerHTML = "Shots: " + shots + " Score: " + score;
}

window.onload = function() {
  el = document.getElementById("img1");

  // onClick handler calls scoreUp()
  // when the image is clicked
  el.onclick = scoreUp;

  // update total number of shots
  // for every click within play field
  document.getElementById("range").onclick = function() {
    shots++;
    // update scoreboard
    scoreboard();
  }

  // initialize game
  scoreboard();
  el.style.left = '50px';
  el.style.top = '50px';
  moveIt();
}
