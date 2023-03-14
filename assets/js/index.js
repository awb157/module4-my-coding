// wrapper: verbile holds the HTML element div with ID wrapper
var wrapper = document.querySelector("#wrapper");
//  startBtn: verbile holds the HTML element Button with the id startBtn
var startBtn = document.querySelector("#startBtn");
//  timerEl: verbile holds the HTML element span with id timer
var timerEl = document.querySelector("#timer");
// hold the remaining time value
var time = 90;
// variable to hold a set intervol so that we can stop it later with a clear intervol
var timeInterval = null;

//  it looks in the HTML for the element div with the id questionList
var questionList = document.querySelector("#questionList");
//  it looks in the HTML for the element h1 for the id question
var question = document.querySelector("#question");
//  it looks in the HTML for the element button for the id option number
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

// questions: a list of question title, options list and the correct answer
var questions = [
  {
    title: "Fuction that allows you to set a timer?",
    options: [
      "Set Time()",
      "Timer Interval()",
      "Start Interval()",
      "Set Interval()",
    ],
    answer: "set Interval()",
  },
  {
    title: "What is the function called that listens and fires arguments?",
    options: ["Add Listener", "click On", "on click", ".add EventListener"],
    answer: "AddEventListener",
  },
  {
    title: "What do you need to do after an element is created in JavaScript?",
    options: ["Concatenate", ".addto", "Set", "Append"],
    answer: "Append",
  },
  {
    title: "What is the fuction that stops an event from bubbling up?",
    options: [
      "Propogate",
      "BrowswerStorage",
      "SessionStorage",
      "StopPropogation",
    ],
    answer: "StopPropogation",
  },
  {
    title:
      "This attribute can be used to change your app from Dark mode to Light mode",
    options: ["Element", "#", "ID", "Class"],
    answer: "Class",
  },
];

// add event listeners for the click event on the startBtn
startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", question1);

// countDown: updates the time interval by decreasing by one,
//  updates timer element and sleeps for a second till timer is zero
function countDown() {
  // start timer with set interval that subtracks time and updates screen
  timeInterval = setInterval(function () {
    // update text for timer element
    timerEl.textContent = time;
    time--;

    if (time === 0) {
      // set text for the timer element to 0
      timerEl.textContent = 0;
      // clear interval stops timer when reaches zero
      clearInterval(timeInterval);
      // initiate challenge summation
      enterInitials();
    }
  }, 1000);
}

// timeOff: decrease time by five seconds for the wrong answer
function timeOff() {
  time -= 5;
}

//  addPoints: increment score by one
function addPoints() {
  quizScore++;
}

// question1: hides wrapper, displays question one and adds options to decrease
//  timer for wrong answers or increase score for correct answer and
//  link for next question
function question1() {
  // sets wrapper div display to none so that its hidden
  wrapper.setAttribute("style", "display: none");
  questionList.setAttribute(
    "style",
    "display: flex",
    "justify-content: center"
  );
// populates question title and answers in the question index
  question.innerText = questions[0].title;
  option1.innerText = questions[0].options[0];
  option2.innerText = questions[0].options[1];
  option3.innerText = questions[0].options[2];
  option4.innerText = questions[0].answer;
// add click events to each answer chose 
  option1.addEventListener("click", timeOff);
  option1.addEventListener("click", question2);
  option2.addEventListener("click", timeOff);
  option2.addEventListener("click", question2);
  option3.addEventListener("click", timeOff);
  option3.addEventListener("click", question2);
  option4.addEventListener("click", addPoints);
  option4.addEventListener("click", question2);
}

// question2: displays question two and adds options to decrease
//  timer for wrong answers or increase score for correct answer and
//  link for next question

function question2() {
  question.innerText = questions[1].title;
  option1.innerText = questions[1].options[0];
  option2.innerText = questions[1].options[1];
  option3.innerText = questions[1].options[2];
  option4.innerText = questions[1].answer;

  option1.addEventListener("click", timeOff);
  option1.addEventListener("click", question3);
  option2.addEventListener("click", timeOff);
  option2.addEventListener("click", question3);
  option3.addEventListener("click", timeOff);
  option3.addEventListener("click", question3);
  option4.addEventListener("click", addPoints);
  option4.addEventListener("click", question3);
}

// question3: displays question three and adds options to decrease
//  timer for wrong answers or increase score for correct answer and
//  link for next question
function question3() {
  question.innerText = questions[2].title;
  option1.innerText = questions[2].options[0];
  option2.innerText = questions[2].options[1];
  option3.innerText = questions[2].options[2];
  option4.innerText = questions[2].answer;

  option1.addEventListener("click", timeOff);
  option1.addEventListener("click", question4);
  option2.addEventListener("click", timeOff);
  option2.addEventListener("click", question4);
  option3.addEventListener("click", timeOff);
  option3.addEventListener("click", question4);
  option4.addEventListener("click", addPoints);
  option4.addEventListener("click", question4);
}

// question4: displays question four and adds options to decrease
//  timer for wrong answers or increase score for correct answer and
//  link for next question
function question4() {
  question.innerText = questions[3].title;
  option1.innerText = questions[3].options[0];
  option2.innerText = questions[3].options[1];
  option3.innerText = questions[3].options[2];
  option4.innerText = questions[3].answer;

  option1.addEventListener("click", timeOff);
  option1.addEventListener("click", question5);
  option2.addEventListener("click", timeOff);
  option2.addEventListener("click", question5);
  option3.addEventListener("click", timeOff);
  option3.addEventListener("click", question5);
  option4.addEventListener("click", addPoints);
  option4.addEventListener("click", question5);
}

// question5: displays question five and adds options to set
//  timer to zero for wrong answers or increase score for correct answer and initiate submission
function question5() {
  question.innerText = questions[4].title;
  option1.innerText = questions[4].options[0];
  option2.innerText = questions[4].options[1];
  option3.innerText = questions[4].options[2];
  option4.innerText = questions[4].answer;

  option1.addEventListener("click", stopTimer);
  option1.addEventListener("click", enterInitials);
  option2.addEventListener("click", stopTimer);
  option2.addEventListener("click", enterInitials);
  option3.addEventListener("click", stopTimer);
  option3.addEventListener("click", enterInitials);
  option4.addEventListener("click", stopTimer);
  option4.addEventListener("click", addPoints);
  option4.addEventListener("click", enterInitials);
}

// stopTimer: sets timer to 0 and clears timeInterval
function stopTimer() {
  // set text for the timer element to 0 after the last question
  timerEl.textContent = 0;
  // stops timer
  clearInterval(timeInterval);
}

//  it looks in the HTML for the element for the id that passes the string
var quizScore = 0;
// it looks in the HTML for the element span with the id score
var scoreEl = document.querySelector("#score");
// it looks in the HTML for the element input type text id initialsInput
var initialsInputEl = document.querySelector("#initialsInput");
// it looks in the HTML for the element is button id submitBtn
var submitBtn = document.querySelector("#submitBtn");
// it looks in the HTML for the element P with id msg
var msgEl = document.querySelector("#msg");
// it looks in the HTML for the element div yourScoreBox by id
var yourScoreBox = document.querySelector("#yourScoreBox");
// it looks in the HTML for the element div yourScore by id
var yourScoreEl = document.querySelector("#yourScore");
// it looks in the HTML for the element button clearBtn by id
var clearBtn = document.querySelector("#clearBtn");

// enterInitials: hides wrapper and shows initials
function enterInitials() {
  // enterInitials: sets wrapper div display to none so that it's hidden
  wrapper.setAttribute("style", "display: none");
  initials.setAttribute("style", "display: flex");
  scoreEl.textContent = "Your Final Score: " + quizScore;
}

// add event listeners for the click event on the submitBtn to save score 
// and iniatials  in local storage
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  //  this pulls data from the input type text for the initials
  var records = {
    initials: initialsInputEl.value,
    score: quizScore,
  };
  //  display error if initials are empty
  if (records.initials === "") {
    msgEl.textContent = "Initials cannot be blank";
    return;
  }
  // showYourScore: display score, hide initials input
  function showYourScore() {
    initials.setAttribute("style", "display: none");
    yourScoreBox.setAttribute("style", "display: flex");
    yourScoreEl.textContent = initialsInputEl.value + " - " + quizScore + "/5";
  }
  // adds a listener to clear score button click event
  clearBtn.addEventListener("click", clearScores);

  // clearScores: clears the quiz score form your score HTML element and
  // variable
  function clearScores() {
    yourScoreEl.textContent = "";
    localStorage.clear();
    quizScore = 0;
  }
//  paces score in to local storage 
  localStorage.setItem("records", JSON.stringify(records));
  // displays all scores from local storage
  showYourScore();
});
