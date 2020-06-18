var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

let questions = [

    {

        question: "What is Guam considered?",

        choiceA: "US territory",

        choiceB: "Their own State",

        choiceC: "Their own Country",

        correct: "A"

    }, {

        question: "What is the native language of Guam?",

        choiceA: "Chuukese",

        choiceB: "Micronesian",

        choiceC: "Chamorro",

        correct: "C"

    }, {

        question: "Where is Guam located?",

        choiceA: "Eastern Pacific Ocean",

        choiceB: "Western Pacific Ocean",

        choiceC: "Northern Atlantic Ocean",

        correct: "B"

    }

];
var lastQuestion = questions.length - 1;

let runningQuestion = 0;
let count = 0;
var questionTime = 5;
var gaugeWidth = 150;
var gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion() {

    let q = questions[runningQuestion];



    question.innerHTML = "<p>" + q.question + "</p>";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;


}
start.addEventListener("click", startQuiz);


function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}
function renderProgress() {

    for (let i = 0; i <= lastQuestion; i++) {

        progress.innerHTML += "<div class='prog' id=" + i + "></div>";

    }
}


function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            
        }
    }

}
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
    }
}
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

function myFunction() {
    document.getElementById("demo").innerHTML = ("You scored " + score + " out of " + questions.length);

}
