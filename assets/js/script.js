//quesitons object, at the top cause i want it to be, dont move it thanks
var questionsObj = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["1. Javascript", "2. Terminal/Bash", "3. For Loops", "4. Console.log"],
        correct: "4. Console.log",
    },
    {
        question: "Commonly used data types do NOT include:",
        answer: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correct: "3. Alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        answer: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
        correct: "3. Parenthesis",
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        answer: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the Above"],
        correct: "4. All of the Above",
    },
    {
        question: "String values must be enclosed within _____ when being assigned to values.",
        answer: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
        correct: "3. Quotes"
    }
];

//page with title and start button, that when clicked, starts the quiz.
var startQuizButton = document.querySelector('#start-quiz');
startQuizButton.addEventListener("click", startQuiz);
var startQuiz = function () {};

//starting the quiz starts a countdown. a question is shown with four clickable answers
var timeLeft = 120;
var timer = function() {
    //return something into timeLeft
};

    //for loop, put inside start quiz function
    for (var i = 0; i < questionsObj.length; i++ /*&& as long as timeLeft > 0?*/) {
        //display a question
        // after clicking an answer, the next question is displayed
        var nextQuestion = function() {
            //handles displaying the question. display next question in questionsObj
            //add correct class to correct, wrong class to wrong
        }
        //if answer is right or wrong
        var checkAnswer = function() {
            //if right display "correct" and move on
            //else wrong display "wrong", move on, deduct time
            //return timeLeft
        }
    };

// if the timer runs out, the game ends and the player is shown the submit score screen
    // run end quiz function, also called when/if questions run out
//after all questions have been displayed, the time remaining is displayed as the score. the latest correct/wrong label is underneath
    // run end quiz function, also called when/if questions run out
var endQuiz = function() {
    //capture time left as score
    //let user input initials
    //button to store initials and score in local storage
    //move to new html page that displays all scores highest to lowest
};

//from start to finish, a veiw high score link is available. clicking it shows highscores in local storage. same html page as in endQuiz