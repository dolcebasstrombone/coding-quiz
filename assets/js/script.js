var questionsObj = [
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. Javascript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. Console.log",
    ],
    correct: "4. Console.log",
  },
  {
    question: "Commonly used data types do NOT include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correct: "3. Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with _____.",
    answers: [
      "1. Quotes",
      "2. Curly brackets",
      "3. Parenthesis",
      "4. Square brackets",
    ],
    correct: "3. Parenthesis",
  },
  {
    question: "Arrays in Javascript can be used to store _____.",
    answers: [
      "1. Numbers and strings",
      "2. Other arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    correct: "4. All of the Above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to values.",
    answers: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
    correct: "3. Quotes",
  },
];
var timerEl = document.querySelector("#timer");
var timeLeft = 120;
var questionIndex = 0;
var containerEl = document.querySelector("#container");
var correctnessEl = document.querySelector("#correctness");
var startQuizButton = document.querySelector("#start-quiz");
startQuizButton.addEventListener("click", startQuiz);
var timer;

//called by event listener (line 48)
function startQuiz() {
  //sets and displays timeLeft
  timer = setInterval(function () {
    // if time left is more than 1, count down, text content shows plural
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } // if time left is one, count down, text content shows singular
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } // if there is no time left, stop the counter
    else {
      timerEl.textContent = "";
      clearInterval(timer);
    }
  }, 1000); //1000 represents milliseconds

  //if theres still time, show another question
  if (timeLeft > 0) {
    displayQuestion();
    // else end the quiz
  } else {
    endQuiz();
  }

  //called if timer hasn't run out
  function displayQuestion() {
    //erase content from last question or from homepage
    containerEl.innerHTML = "";
    //create question content and append
    var questionContentEl = document.createElement("h2");
    questionContentEl.textContent = questionsObj[questionIndex].question;
    containerEl.appendChild(questionContentEl);

    //create answer content with listeners and append
    questionsObj[questionIndex].answers.forEach(function (answer) {
      var thisQuestionAnswerButtonEl = document.createElement("button");
      thisQuestionAnswerButtonEl.textContent = answer;
      thisQuestionAnswerButtonEl.className = "answer-button";
      thisQuestionAnswerButtonEl.setAttribute("value", answer);
      thisQuestionAnswerButtonEl.addEventListener("click", answerResponse);
      containerEl.appendChild(thisQuestionAnswerButtonEl);
    });
  }

  function answerResponse(event) {
    if (event.target.textContent === questionsObj[questionIndex].correct) {
      correctnessEl.innerHTML = "";
      var correctAlertEl = document.createElement("h3");
      correctAlertEl.textContent = "Correct!";
      correctnessEl.appendChild(correctAlertEl);
    } else {
      correctnessEl.innerHTML = "";
      var wrongAlertEl = document.createElement("h3");
      wrongAlertEl.textContent = "Wrong!";
      correctnessEl.appendChild(wrongAlertEl);
      timeLeft -= 10;
    }
    questionIndex++;

    if (questionIndex === questionsObj.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
}

function endQuiz() {
  clearInterval(timer);
  correctnessEl.innerHTML = "";
  containerEl.innerHTML = "";
  timerEl.remove();
  //display score (timeLeft)
  var scoreEl = document.createElement("h3");
  scoreEl.textContent = "Your final score is " + timeLeft + "!";
  containerEl.appendChild(scoreEl);
  //display initials input
  var initialsInputEl = document.createElement("div");
  initialsInputEl.innerHTML = "<p>Enter Your Initials:</p><input id='initials' type='text' max='3' />";
  containerEl.appendChild(initialsInputEl);
  //display submit button with listener
  var submitButtonEl = document.createElement("button");
  submitButtonEl.textContent = "Submit";
  submitButtonEl.addEventListener("click", storeScore);
  containerEl.appendChild(submitButtonEl);

  //stores score in local storage and moves to highscore.html
  function storeScore() {
    var allHighScores = JSON.parse(localStorage.getItem('allHighScores')) || [];
    var initials = document.querySelector('#initials').value.trim();
    var userScore = {
      initials: initials,
      score: timeLeft,
    };
    allHighScores.push(userScore);
    localStorage.setItem('allHighScores', JSON.stringify(allHighScores));
    location.href = 'highscore.html';
  }
}