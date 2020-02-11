//high scores HTML
var $highScoreInput = document.querySelector("#highScoreText");
var $highScoreForm = document.querySelector("#highScoreForm");
var $highScoreList = document.querySelector("#highScoreList");
var $highScoreCountSpan = document.querySelector("#highScoreCount");
var $clearScores = document.querySelector("#clearScores");
var highScores = [];

renderHighScores();

function renderHighScores() {
  $highScoreList.innerHTML = "";
  $highScoreCountSpan.textContent = highScores.length;

  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];
    var li = document.createElement("li");
    li.textContent = highScore;
    $highScoreList.appendChild(li);
  }
}

$highScoreForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var highScoreText = $highScoreInput.value.trim();

  if (highScoreText === "") {
    //will return to top of function if input is blank
    return;
  }
  highScores.push(highScoreText);
  $highScoreInput.value = "";

  renderHighScores();
});

$clearScores.addEventListener("click", function(e) {
  e.preventDefault();

  var element = e.target;

  if (element.matches("button")) {
    highScores = [];
  }
  renderHighScores();
});
