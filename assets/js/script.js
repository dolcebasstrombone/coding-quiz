//quesitons object, at the top cause i want it to be, dont move it thanks
var questionsObj = [
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: [
      "1. Javascript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. Console.log",
    ],
    correct: "4. Console.log",
  },
  {
    question: "Commonly used data types do NOT include:",
    answer: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correct: "3. Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with _____.",
    answer: [
      "1. Quotes",
      "2. Curly brackets",
      "3. Parenthesis",
      "4. Square brackets",
    ],
    correct: "3. Parenthesis",
  },
  {
    question: "Arrays in Javascript can be used to store _____.",
    answer: [
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
    answer: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
    correct: "3. Quotes",
  },
];
var timerEl = document.querySelector('#timer');

//------------------------------page with title and start button, that when clicked, starts the quiz.
// get DOM reference for button
var startQuizButton = document.querySelector("#start-quiz");
//add event listener to button
startQuizButton.addEventListener("click", startQuiz);
//called by event listener
var startQuiz = function () {
  window.alert("you did it!");
};
///-----------------------------event listener not working correctly, alerts when page is loaded, whyyyyyyyyyyyyyy

//starting the quiz starts a countdown. a question is shown with four clickable answers
var timeLeft = 120;
//--------------------------copied from activity, dont forget to make sure vars match up with my own code
//stopping the timer and capturing it could be here or in another funtion
var timer = setInterval(function () {
  // if time left is more than 1, count down, text content shows plural
  if (timeLeft > 1) {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
  } // if time left is one, count down, text content shows singular
  else if (timeLeft === 1) {
    timerEl.textContent = timeLeft + " second remaining";
    timeLeft--;
  } // if there is no time left, stop the counter
  else { //--------------------------------------this is what might need to be changed
    timerEl.textContent = "";
    clearInterval(timer);
  }
//1000 represents milliseconds
}, 1000);
//-----------------------------end activity code

//for loop, put inside start quiz function
for (var i = 0; i < questionsObj.length; i++ /*&& as long as timeLeft > 0?*/) {
  //display a question
  // after clicking an answer, the next question is displayed
  var nextQuestion = function () {
    //handles displaying the question. display next question in questionsObj
    //add correct class to correct, wrong class to wrong
  };
  //if answer is right or wrong
  var checkAnswer = function () {
    //if right display "correct" and move on
    //else wrong display "wrong", move on, deduct time
    //return timeLeft
  };
}

// if the timer runs out, the game ends and the player is shown the submit score screen (inside for loop statement?)
// run end quiz function, also called when/if questions run out
//after all questions have been displayed, the time remaining is displayed as the score. the latest correct/wrong label is underneath
// run end quiz function, also called when/if questions run out
var endQuiz = function () {
  //capture time left as score
  var score = timeLeft;
  //let user input initials
  //button to store initials and score in local storage
  //move to new html page that displays all scores highest to lowest
  window.location.pathname(highscore.html); //find out if this actually works, also try window.location.href = ""; or window.replace();
};

//from start to finish, a veiw high score link is available. clicking it shows highscores in local storage. same html page as in endQuiz
