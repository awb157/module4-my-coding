var wrapper = document.querySelector("#wrapper");
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var time = 90;
var timeInterval = null;

// question variables
var questionList = document.querySelector("#questionList");
var question = document.querySelector('#question');
var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')


var questions = [
    {
        title: "Fuction that allows you to set a timer?",
        options: ["Set Time()", "Timer Interval()", "Start Interval()", "Set Interval()"],
        answer: "set Interval()"
    },
    {
        title: "What is the function called that listens and fires arguments?",
        options: ["Add Listener", "click On", "on click", ".add EventListener"],
        answer: "AddEventListener"
    },
    {
        title: "What do you need to do after an element is created in JavaScript?",
        options: ["Concatenate", ".addto", "Set", "Append"],
        answer: "Append"
    },
    {
        title: "What is the fuction that stops an event from bubbling up?",
        options: ["Propogate", "BrowswerStorage", "SessionStorage", "StopPropogation"],
        answer: "StopPropogation"

    },
    {
        title: "This attribute can be used to change your app from Dark mode to Light mode",
        options: ["Element", "#", "ID", "Class"],
        answer: "Class"
    },
]

startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", question1);


function countDown() {
    timeInterval = setInterval(function () {
        timerEl.textContent = time;
        time--;

        if (time === 0) {
            timerEl.textContent = 0;
            clearInterval(timeInterval);
            enterInitials();
        };

    }, 1000);
}



function timeOff() {
    time -= 10;
}

function addPoints() {
    quizScore++
}

function question1() {
    wrapper.setAttribute("style", "display: none");
    questionList.setAttribute("style", "display: flex", "justify-content: center");

    question.innerText = questions[0].title;
    option1.innerText = questions[0].options[0];
    option2.innerText = questions[0].options[1];
    option3.innerText = questions[0].options[2];
    option4.innerText = questions[0].answer;

    option1.addEventListener("click", timeOff);
    option1.addEventListener("click", question2);
    option2.addEventListener("click", timeOff);
    option2.addEventListener("click", question2);
    option3.addEventListener("click", timeOff);
    option3.addEventListener("click", question2);
    option4.addEventListener("click", addPoints);
    option4.addEventListener("click", question2);
}
// Show Question 2
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

//Stop Timer with Click on Question 5
function stopTimer() {
    timerEl.textContent = 0;
    clearInterval(timeInterval);
}

//Score & Enter Initials Variables
var quizScore = 0;
var scoreEl = document.querySelector("#score"); 
var enterInitialsBox = document.querySelector("#enterInitialsBox");
var initialsInputEl = document.querySelector("#initialsInput");
var submitBtn = document.querySelector("#submitBtn");
var msgEl = document.querySelector("#msg");
var yourScoreBox = document.querySelector("#yourScoreBox");
var yourScoreEl = document.querySelector("#yourScore");
var clearBtn = document.querySelector("#clearBtn");
var backBtn = document.querySelector("#backBtn");


//function that allows somone to enter initials(hides questions/displays enter initials)
function enterInitials() {
    wrapper.setAttribute("style", "display: none");
    initials.setAttribute("style", "display: flex");
    scoreEl.textContent = "Your Final Score: " + quizScore;
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var records = {
        initials: initialsInputEl.value,
        score: quizScore,
    };

    if (records.initials === "") {
        msgEl.textContent = "Initials cannot be blank";
        return;
    };
    function showYourScore () {
        initials.setAttribute("style", "display: none");
        yourScoreBox.setAttribute("style", "display: flex");
        yourScoreEl.textContent = initialsInputEl.value + " - " + quizScore + "/5";
    }    
    
    clearBtn.addEventListener("click", clearScores);

function clearScores () {
    yourScoreEl.textContent = "";
    localStorage.clear();
    quizScore = 0;
}

localStorage.setItem("records", JSON.stringify(records));
showYourScore();
});