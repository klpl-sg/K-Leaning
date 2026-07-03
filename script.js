const quiz = [

{
    no:1,
    question:"All the above actions can perform during operation?",
    choices:["Still driving","Voice out"],
    answer:1
},

{
    no:2,
    question:"Regarding driving speed in vessel, please select correct answer",
    choices:["20km","30km"],
    answer:0
},

{
    no:3,
    question:"Regarding driver's gloves, please select correct answer",
    choices:["Correct","Wrong"],
    answer:0
},

{
    no:4,
    question:"Regarding driving distance, please select correct answer",
    choices:["More than 10m","More than 15m"],
    answer:1
},

{
    no:5,
    question:"Regarding backward operation, is this correct?",
    choices:["Correct","Wrong"],
    answer:0
}

];

let current = 0;
let score = 0;
let playerName = "";

function showQuestion(){

    document.getElementById("quizImage").src =
        "images/" + quiz[current].no + ".png";

    document.getElementById("question").innerText =
        quiz[current].question;

    document.getElementById("btn1").innerText =
        quiz[current].choices[0];

    document.getElementById("btn2").innerText =
        quiz[current].choices[1];

    document.getElementById("result").innerText = "";

    document.getElementById("btn1").style.display = "inline";
    document.getElementById("btn2").style.display = "inline";
    document.getElementById("nextBtn").style.display = "none";
}

function judge(choice){

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";

    document.getElementById("question").innerText = "";

    if(choice == quiz[current].answer){

        score++;

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-1.png";

        document.getElementById("result").innerText = "Correct!";

    }else{

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-2.png";

        document.getElementById("result").innerText = "Oops!";

    }

    document.getElementById("nextBtn").style.display = "inline";
}

function nextQuestion(){

    current++;

    if(current >= quiz.length){

        let percent = Math.round(score / quiz.length * 100);

        document.getElementById("question").innerHTML =
            "<h2>Finished!</h2>" +
            "<p><b>Name:</b> " + playerName + "</p>" +
            "<p><b>Score:</b> " + score + " / " + quiz.length + "</p>" +
            "<p><b>Accuracy:</b> " + percent + "%</p>";

        document.getElementById("quizImage").style.display = "none";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("result").innerText = "";
        document.getElementById("nextBtn").style.display = "none";

        document.getElementById("certificate").style.display = "block";

if(percent == 100){

    let today = new Date();

    let date =
    today.getFullYear() + " / " +
    (today.getMonth()+1) + " / " +
    today.getDate();

    document.getElementById("certificate").innerHTML =

    "<div class='certificate-title'>🏆 CERTIFICATE OF COMPLETION 🏆</div>" +

    "<p class='certificate-text'>This certifies that</p>" +

    "<div class='certificate-name'>" + playerName + "</div>" +

    "<p class='certificate-text'>has successfully completed</p>" +

    "<div class='certificate-name'>K-Learning</div>" +

    "<p class='certificate-text'>with a perfect score of</p>" +

    "<div class='score'>100%</div>" +

"<div class='certificate-footer'>" +

"<div>Issue Date : " + date + "</div>" +

"<div><img src='images/signature.png' style='height:60px;'></div>" +

"</div>";

}else{

    document.getElementById("certificate").innerHTML =
        "<button onclick='retryQuiz()'>Retry Quiz</button>";

}

        return;
    }

    showQuestion();
}

function startQuiz(){

    playerName = document.getElementById("playerName").value;

    if(playerName == ""){

        alert("Please enter your name.");
        return;

    }

    current = 0;
    score = 0;

    document.getElementById("certificate").style.display = "none";
    document.getElementById("quizImage").style.display = "block";
    document.getElementById("result").innerText = "";

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";

    showQuestion();
}

function retryQuiz(){

    current = 0;
    score = 0;

    document.getElementById("certificate").style.display = "none";

    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";

    document.getElementById("playerName").value = "";
    document.getElementById("question").innerHTML = "";

}