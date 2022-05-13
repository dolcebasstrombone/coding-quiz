function highScoreHandler() {
  //get all scores from local storage
  var allHighScores = JSON.parse(localStorage.getItem("allHighScores"));
  //sort the array in descending order by score
  allHighScores.sort(function(score1, score2) {
      return score2.score - score1.score;
  })
  //display all scores
  allHighScores.forEach(function (scores) {
    var containerEl = document.querySelector("#container");
    var highscoreListEl = document.createElement("li");
    highscoreListEl.textContent = scores.initials + ": " + scores.score;
    containerEl.appendChild(highscoreListEl);
  });
}

highScoreHandler();
