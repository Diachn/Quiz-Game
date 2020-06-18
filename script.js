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

        question: "What color are apples?",

        choiceA: "red",

        choiceB: "blue",

        choiceC: "purple",

        correct: "A"

    }, {

        question: "What color are bananas?",

        choiceA: "pink",

        choiceB: "yellow",

        choiceC: "teal",

        correct: "B"

    }, {

        question: "What color are eggplants?",

        choiceA: "orange",

        choiceB: "red",

        choiceC: "purple",

        correct: "C"

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
            scoreRender();
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
