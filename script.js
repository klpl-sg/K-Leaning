function judge(answer){

    const correctAnswer = true;

    if(answer === correctAnswer){

        document.getElementById("result").innerText = "Correct！";

    }else{

        document.getElementById("result").innerText = "Oops!";

    }

}