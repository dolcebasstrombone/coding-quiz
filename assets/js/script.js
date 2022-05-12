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

//called by event listener
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

  //if theres still time, show another question
  if (timeLeft > 0) {
    //for as long as there are questions, loop
    for (var i = 0; i < questionsObj.length; i++) {
      //container DOM reference
      var containerEl = document.querySelector("#container");
      //display question function
      var displayQuestion = function () {
        //erase content from last question or from homepage
        containerEl.innerHTML = "";
        //create question content and append
        var questionContentEl = document.createElement("h2");
        questionContentEl.textContent = questionsObj[i].question;
        containerEl.appendChild(questionContentEl);
      };
      displayQuestion();
      //-----------------------------------------------------------------------
      //display answers function
      function displayAnswers() {
        questionsObj[i].answers.forEach(function (answer) {
          var thisQuestion = questionsObj[i];
          var thisQuestionAnswerButtonEl = document.createElement("button");
          thisQuestionAnswerButtonEl.textContent = answer;
          thisQuestionAnswerButtonEl.className = "answer-button";
          thisQuestionAnswerButtonEl.setAttribute("value", answer);
          containerEl.appendChild(thisQuestionAnswerButtonEl);
        });
      }
      displayAnswers();
    }
    //display next question and answers
    //if right, display right
    //if wrong, display wrong and subtract time left
  } else {
    //run endQuiz
  }
}

// (function (index) { //this function wont get back to the loop
//   thisQuestionAnswerButtonEl.addEventListener("click", function () { //this function is working
//     var correctnessEl = document.querySelector("#correctness");
//     if (index !== thisQuestion.correct) {
//       correctnessEl.innerHTML = '';
//       var wrongAlertEl = document.createElement("h3");
//       wrongAlertEl.textContent = 'Wrong!';
//       correctnessEl.appendChild(wrongAlertEl);
//       timeLeft -= 10;
//     } else {
//       correctnessEl.innerHTML = '';
//       var correctAlertEl = document.createElement("h3");
//       correctAlertEl.textContent = 'Correct!';
//       correctnessEl.appendChild(correctAlertEl);
//     }
//   }); //this function is working
// }/* this function wont go back to the loop */)();

// var endQuiz = function () {
//   //capture time left as score (probably don't need to make a score var, could just use timeLeft)
//   var score = timeLeft;
//   timerEl.textContent = "Your score: " + score;
//   //let user input initials
//   //button to store initials and score in local storage
//   //move to new html page that displays all scores highest to lowest
//   window.location.pathname(highscore.html); //find out if this actually works, also try window.location.href = ""; or window.replace();
//   //window.open?
// };


//var thisQuestion = questionsObj[i];
// for (var j = 0; j < thisQuestion.answers.length; j++) {
//   var thisQuestionAnswerButtonEl = document.createElement("button");
//   thisQuestionAnswerButtonEl.textContent = thisQuestion.answers[j];
//   thisQuestionAnswerButtonEl.className = "answer-button";
//   containerEl.appendChild(thisQuestionAnswerButtonEl);

// //listen for click on answer button
// //display next question
// //add right/wrong alert
// var clickedAnswer = function() {
//   //show next question
//   //add correct or wrong alert
// }
// var answerListener = function() {
//   //create event listener on all answer buttons
//   //listen for click
//   //call next functions
// }

//   //for as long as there are questions left, do this
//   for (var i = 0; i < questionsObj.length; i++) {
//     //if theres still time, show another question
//     while (timeLeft > 0) {
//       //DOM reference for container element and the current question
//       var containerEl = document.querySelector("#container");
//       var thisQuestion = questionsObj[i]; //declared as var, the next for loop wouldnt work with 'i' var involved
//       //display the next question
//       var nextQuestion = function () {
//         //erase content from last question or from homepage
//         containerEl.innerHTML = "";
//         //create question content and append
//         var questionContentEl = document.createElement("h2");
//         questionContentEl.textContent = thisQuestion.question;
//         containerEl.appendChild(questionContentEl);
//         //for as long as there are undisplayed answers, create and append answer buttons
//         for (var j = 0; j < thisQuestion.answers.length; j++) {
//           var answerButtonEl = document.createElement("button");
//           answerButtonEl.textContent = thisQuestion.answers[j];
//           answerButtonEl.className = "answer-button";
//           containerEl.appendChild(answerButtonEl);
//         }
//         //listen for click on an answerContent child, response check answer and move on
//         containerEl.addEventListener("click", checkAnswer);
//       };
//       //-------------------------------------------------------------------------------------------------working code end
//       var checkAnswer = function (event) {
//         if (event.target.matches(".answer-button")) {
//           console.log(thisQuestion.correct);
//           if (document.querySelector(".answer-button").value === thisQuestion.correct) {
//             nextQuestion();
//             console.log("correct");
//           } else {
//             nextQuestion();
//             console.log("wrong");
//           }
//         }
//         //if answer button content matches question[i].correct, create and append correct display
//         //else answer button content doesnt match, create and append wrong display, deduct time, return timeLeft
//         //else nothing, no need to write an else
//       };
//       nextQuestion();
//       //break loop needed?
//       //if there isnt time or there are no more questions
//       //if timeLeft is 0 or if questions run out
//     } else {
//       //endQuiz (captures score)
//       //break loop?
//     }
//   }
