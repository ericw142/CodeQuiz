var questions = {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
}
var startbtn = document.querySelector("#startQuizbtn");
var resetbtn = document.getElementById('reset');
var quizdiv = document.querySelector("#quiz-div");
var questionDisplay = document.querySelector("#q-span");
// Score will be set to the same number that the timer is when quiz is finished
var score = 0;
var startingTime = 75;


function timerReset() {
  clearInterval();
  startingTime = 75;
  timer.textContent = startingTime;
}


// Function to run on wrong answer
function wrongAnswer() {
  startingTime = startingTime - 25;
  timer.textContent = startingTime;
}

// Function to start and run the quiz
function startQuiz(){
  questionDisplay.textContent = questions.title;
  var interval = setInterval(timer, 1000);
  function timer() {
    if (startingTime >0) {
      startingTime--;
      $("#timer").html(startingTime);
    } else {
      clearInterval(interval);
    }
  }
}


startbtn.addEventListener("click", startQuiz);
resetbtn.addEventListener('click', timerReset);

$("#down").on("click", wrongAnswer);