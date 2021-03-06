var $beginBtn = document.querySelector("#beginBtn");
var $greeting = document.querySelector(".greeting");
var $quiz = document.querySelector("#quiz");
var $question = document.querySelector("#question");
var $answer = document.querySelector("#answers");
var questionIndex = 0;
var $amountCorrect = document.querySelector("#amountCorrect");
var amountCorrect = 0;
var $amountAsked = document.querySelector("#amountAsked");
var amountAsked = 0;
var $timer = document.querySelector("#timer");
var $gameOver = document.querySelector(".gameOver");
var $results = document.querySelector("#results");
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "Strings", isCorrect: false },
      { text: "Booleans", isCorrect: false },
      { text: "Alerts", isCorrect: true, },
      { text: "Numbers", isCorrect: false }
    ]
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______.",
    answers: [
      { text: "Quotes", isCorrect: false },
      { text: "Curly Brackets", isCorrect: false },
      { text: "Parenthesis", isCorrect: true },
      { text: "Square Brackets", isCorrect: false }
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store ________.",
    answers: [
      { text: "Numbers and Strings", isCorrect: false },
      { text: "Other Arrays", isCorrect: false },
      { text: "Booleans", isCorrect: false },
      { text: "All of the Above", isCorrect: true }
    ]
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    answers: [
      { text: "Commas", isCorrect: false },
      { text: "Curly Brackets", isCorrect: false },
      { text: "Quotes", isCorrect: true },
      { text: "Parenthesis", isCorrect: false }
    ]
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", isCorrect: false },
      { text: "Terminal/Bash", isCorrect: false },
      { text: "For Loops", isCorrect: false },
      { text: "Console.log", isCorrect: true }
    ]
  }
];
// when user clicks 'begin quiz' button this will hide the greeting and display the quiz
$beginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  $greeting.style.display = "none";
  renderQuestion();
  $quiz.style.display = "block";
  $timer.style.display = "block";
  counter = setInterval(timer, 1000);
});

// this runs the users click against the array of correct answers corresponding
// with the questions in the array above.
$answer.addEventListener("click", function (e) {
  if (!e.target.matches("li")) return;
  var index = e.target.dataset.index;
  var correct = questions[questionIndex].answers[index].isCorrect;
  if (correct) {
    amountAsked++;
    amountCorrect++;
  } else {
    amountAsked++;
  }

  $amountCorrect.innerHTML = "Amount Correct: " + amountCorrect;
  $amountAsked.innerHTML = "Amount Asked: " + amountAsked;
  questionIndex++;
  renderQuestion();
});

// this adds an effect to highlight the mouseover of the user blue and remove it when
// they are no longer mousing over.
$answer.addEventListener("mouseover", function (e) {
  if (!e.target.matches("li")) return;
  e.target.classList.add("active");
});
$answer.addEventListener("mouseout", function (e) {
  if (!e.target.matches("li")) return;
  e.target.classList.remove("active");
});

var count = 60;
var counter;
var running = false;
function timer() {
  $timer.textContent = count;
  count = count - 1;
  if (count < 0) {
    clearInterval(counter);
    endGame();
    return;
  }
}

function renderQuestion() {
  if (questionIndex === questions.length) {
    endGame();
    return;
  }


  var question = questions[questionIndex];
  $question.textContent = question.question;
  $answer.innerHTML = "";
  question.answers.forEach(function (answer, i) {
    var li = document.createElement("li");
    li.textContent = answer.text;
    li.setAttribute("data-index", i);
    li.setAttribute("class", "list-group-item");
    $answer.append(li);
  });
}

function endGame() {
  $quiz.style.display = "none";
  $beginBtn.style.display = "none";
  $gameOver.style.display = "block";
  $results.innerHTML = amountCorrect + " out of " + amountAsked;
  clearInterval(counter);


}