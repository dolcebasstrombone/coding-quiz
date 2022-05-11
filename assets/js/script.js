//quesitons object, at the top cause i want it to be, dont move it thanks
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

//------------------------------page with title and start button, that when clicked, starts the quiz.
// get DOM reference for button
var startQuizButton = document.querySelector("#start-quiz");
//add event listener to button
startQuizButton.addEventListener("click", startQuiz);
///-----------------------------------------------------------end code block of button with listener

//called by event listener (wasnt able to write as var, why?)
function startQuiz() {
  var timeLeft = 120;
  //sets and displays timeLeft
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
    else {
      //-------------------------------------------------------------this is what might need to be changed
      timerEl.textContent = "";
      clearInterval(timer);
    } //-------------------------------------------------------------end suspect code block
  }, 1000); //1000 represents milliseconds

  //for as long as there are questions left, do this
  for (var i = 0; i < questionsObj.length; i++) {
    //if theres still time, show another question
    if (timeLeft > 0) {
      //DOM reference for container element and the current question
      var containerEl = document.querySelector("#container");
      var thisQuestion = questionsObj[i]; //declared as var, the next for loop wouldnt work with 'i' var involved
      //display the next question
      var nextQuestion = function () {
        //erase content from last question or from homepage
        containerEl.innerHTML = "";
        //create question content and append
        var questionContentEl = document.createElement("h2");
        questionContentEl.textContent = thisQuestion.question;
        containerEl.appendChild(questionContentEl);
        //for as long as there are undisplayed answers, create and append answer buttons
        for (var j = 0; j < thisQuestion.answers.length; j++) {
          var answerButtonEl = document.createElement("button");
          answerButtonEl.textContent = questionsObj[i].answers[j];
          answerButtonEl.className = "answer-button";
          containerEl.appendChild(answerButtonEl);
        }
      }; //displays question
      //-------------------------------------------------------------------------------------------------working code end

      //listen for click on an answerContent child, response check answer and move on
      var checkAnswer = function (event) {
        if (event.target.matches('.answer-button')) {
          console.log(thisQuestion.correct); //this works
          if (document.querySelector('.answer-button').value === thisQuestion.correct) { //this doesnt
            console.log('correct');
          } else {
            console.log('wrong');
          }
        }
        //if answer button content matches question[i].correct, create and append correct display
        //else answer button content doesnt match, create and append wrong display, deduct time, return timeLeft
        //else nothing, no need to write an else
      };
      nextQuestion();
      containerEl.addEventListener("click", checkAnswer);
      //break loop needed?
      //if there isnt time or there are no more questions
      //if timeLeft is 0 or if questions run out
    } else {
      //endQuiz (captures score)
      //break loop?
    }
  }
}

var endQuiz = function () {
  //capture time left as score (probably don't need to make a score var, could just use timeLeft)
  var score = timeLeft;
  timerEl.textContent = "Your score: " + score;
  //let user input initials
  //button to store initials and score in local storage
  //move to new html page that displays all scores highest to lowest
  window.location.pathname(highscore.html); //find out if this actually works, also try window.location.href = ""; or window.replace();
};
