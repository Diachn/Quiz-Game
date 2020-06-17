const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");

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
const lastQuestion = questions.length - 1;

let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
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

    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {

        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";

    }
}


function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        if (runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }

}
function checkAnswer(answer){
    if (answer == questions [runningQuestion]. correct){
        score ++
        answerIsCorrect();
    }else {
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};