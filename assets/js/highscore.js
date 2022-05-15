function highScoreHandler() {
  //get all scores from local storage
  var allHighScores = JSON.parse(localStorage.getItem("allHighScores"));
  //sort the array in descending order by score
  allHighScores.sort(function(score1, score2) {
      return score2.score - score1.score;
  })
  //only use the top 5 scores
  var topHighScores = allHighScores.slice(0, 5);
  //display the top scores
  topHighScores.forEach(function (scores) {
    var containerEl = document.querySelector("#container");
    var highscoreListEl = document.createElement("li");
    highscoreListEl.className = "list-group-item bg-light border-dark";
    highscoreListEl.textContent = scores.initials + ": " + scores.score;
    containerEl.appendChild(highscoreListEl);
  });
}
highScoreHandler();
