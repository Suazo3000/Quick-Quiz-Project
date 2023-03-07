// Selects element by class
var timeEl = document.querySelector(".time");
var startEl = document.querySelector("#start");
// Selects element by id
var mainEl = document.getElementById("main");

startEl.addEventListener('click', setTime());

 var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Seconds left in this Quiz.";

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      alert("Quiz is over, time is up!");
    }

  }, 1000);
}


setTime();
