// Try creating an array of objects to store each question - that way you can access an entire question, all possible choices, and answer by choosing a random index from the array
var questions = [{
  title: "Commonly used data types DO NOT include:",
  choices: ["strings", "booleans", "alerts", "numbers"],
  answer: "alerts"
  }, 
  {
  title: 'The condition in an if/else statement is enclosed in',
  choices: ['quotes','curly brackets','parentheses','square brackets'],
  answer: 'parentheses'
  },
  {
    title: 'Arrays in JavaScript can be used to store:',
    choices: ['numbers and strings','other arrays','booleans','all of the above'],
    answer: 'all of the above'
  },
  {
    title: 'String values must be enclosed within ______ when being assigned to variables',
    choices: ['commas','curly brackets','quotes','parentheses'],
    answer: 'quotes'
  }
];
var startbtn = document.querySelector("#startQuizbtn");
var resetbtn = document.getElementById('reset');
var answerdiv = document.querySelector("#answer-div");
var questionDisplay = document.querySelector("#q-span");
var resultDisplay = document.getElementById('result');
var timer = document.getElementById('timer');
var startingTime = 75;
var e = 0;

// Function to start and then run the quiz
function createQuiz(){
  // Timer
  if (e === 0){
  setInterval(myTimer, 1000);
  startbtn.setAttribute('style','display:none');
  }
  if (questions[e] === undefined) {
    // Set score equal to time
    localStorage.setItem('score', startingTime);
    // Change to Highscore Page
    window.location.href = 'assets/highscore.html';
  }
  questionDisplay.textContent = questions[e].title;
  createAnswers(e);
}

function myTimer() {
  if (startingTime >0) {
    startingTime--;
    timer.textContent = "Timer: " + startingTime;
  } else {
    clearInterval();
  }
}


// Creating answer buttons
function createAnswers(index) {
  for (var i = 0; i < questions[index].choices.length; i++) {
    var a = document.createElement('button');
    a.textContent = questions[index].choices[i];
    a.className += 'btn btn-primary';
    a.addEventListener('click', function(){
      if (this.textContent === questions[index].answer) {
        resultDisplay.textContent = "Correct!";
        setNextQuestion();
      } else {
        wrongAnswer();
      }
    });
    answerdiv.appendChild(a);
  }};
  
  // Function to run on wrong answer
  function wrongAnswer() {
    startingTime = startingTime - 25;
    resultDisplay.textContent = 'Wrong!'
    if (startingTime >= 0) {
      timer.textContent = startingTime;
    } else {
      startingTime = 0;
      timer.textContent = startingTime;
    }
    setNextQuestion();
  }
  
  function setNextQuestion() {
    e++;
    removeAllChildren(answerdiv);
    createQuiz();
  }

// // Function to generate random index for array
// function randIndex() {
//   var x = Math.floor(Math.random() * 4);
//   console.log(x);
//   return x;
// }

// Function to remove child elements/nodes
function removeAllChildren(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
// Function to reset the quiz
function pageReset() {
  questionDisplay.textContent = "";
  removeAllChildren(answerdiv);
  resultDisplay.textContent = '';
  clearInterval(myTimer);
  startingTime = 75;
}


// Adding initial event listeners
startbtn.addEventListener("click", createQuiz);