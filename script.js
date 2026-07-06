const text = {

en:{
    correct:"Correct!",
    wrong:"Oops!",
    next:"Next Question",
    retry:"Retry Quiz"
},

zh:{
    correct:"正确！",
    wrong:"错误！",
    next:"下一题",
    retry:"重新测验"
},

ms:{
    correct:"Betul!",
    wrong:"Salah!",
    next:"Soalan Seterusnya",
    retry:"Cuba Lagi"
},

th:{
    correct:"ถูกต้อง!",
    wrong:"ไม่ถูกต้อง!",
    next:"ข้อถัดไป",
    retry:"ทำแบบทดสอบอีกครั้ง"
},

id:{
    correct:"Benar!",
    wrong:"Salah!",
    next:"Pertanyaan Berikutnya",
    retry:"Ulangi Kuis"
},

hi:{
    correct:"सही!",
    wrong:"गलत!",
    next:"अगला प्रश्न",
    retry:"क्विज़ फिर से करें"
},

ar:{
    correct:"صحيح!",
    wrong:"خطأ!",
    next:"السؤال التالي",
    retry:"إعادة الاختبار"
},

tl:{
    correct:"Tama!",
    wrong:"Mali!",
    next:"Susunod na Tanong",
    retry:"Subukang Muli"
}

};
const quiz = [

{
    no:1,

    question:{
        en:"If you feel drowsiness during operation?",
        zh:"如果操作过程中感到困倦怎么办？",
        ms:"Jika anda berasa mengantuk semasa operasi?",
        th:"หากรู้สึกง่วงระหว่างปฏิบัติงาน?",
        id:"Jika Anda merasa mengantuk saat bekerja?",
        hi:"यदि संचालन के दौरान आपको नींद आने लगे तो क्या करना चाहिए?",
        ar:"إذا شعرت بالنعاس أثناء العمل، ماذا يجب أن تفعل؟",
        tl:"Kung inaantok ka habang nagtatrabaho, ano ang dapat mong gawin?"
    },

choices:{
    en:["Still driving","Inform your supervisor"],
    zh:["继续驾驶","立即报告"],
    ms:["Terus memandu","Laporkan segera"],
    th:["ขับต่อไป","แจ้งทันที"],
    id:["Tetap mengemudi","Segera laporkan"],
    hi:["चलाते रहें","तुरंत सूचित करें"],
    ar:["استمر في القيادة","أبلغ فورًا"],
    tl:["Magpatuloy sa pagmamaneho","Iulat agad"]
},

    answer:1
},

{
    no:2,

    question:{
        en:"Regarding the driving speed limit inside the vessel, please select the correct answer.",
        zh:"关于船内行驶速度，请选择正确答案。",
        ms:"Mengenai had laju kenderaan di dalam kapal, sila pilih jawapan yang betul.",
        th:"เกี่ยวกับความเร็วในการขับขี่ภายในเรือ โปรดเลือกคำตอบที่ถูกต้อง",
        id:"Mengenai batas kecepatan kendaraan di dalam kapal, silakan pilih jawaban yang benar.",
        hi:"जहाज के अंदर वाहन चलाने की गति सीमा के बारे में सही उत्तर चुनें।",
        ar:"فيما يتعلق بسرعة القيادة داخل السفينة، يرجى اختيار الإجابة الصحيحة.",
        tl:"Tungkol sa limitasyon ng bilis ng pagmamaneho sa loob ng barko, piliin ang tamang sagot."
    },

    choices:{
        en:["20 km/h","30 km/h"],
        zh:["20 公里/小时","30 公里/小时"],
        ms:["20 km/j","30 km/j"],
        th:["20 กม./ชม.","30 กม./ชม."],
        id:["20 km/jam","30 km/jam"],
        hi:["20 किमी/घंटा","30 किमी/घंटा"],
        ar:["20 كم/ساعة","30 كم/ساعة"],
        tl:["20 km/h","30 km/h"]
    },

    answer:0
},

{
    no:3,

    question:{
        en:"Regarding the driver's gloves, please select the correct answer.",
        zh:"关于驾驶员手套，请选择正确答案。",
        ms:"Mengenai sarung tangan pemandu, sila pilih jawapan yang betul.",
        th:"เกี่ยวกับถุงมือของผู้ขับขี่ โปรดเลือกคำตอบที่ถูกต้อง",
        id:"Mengenai sarung tangan pengemudi, silakan pilih jawaban yang benar.",
        hi:"चालक के दस्तानों के संबंध में सही उत्तर चुनें।",
        ar:"فيما يتعلق بقفازات السائق، يرجى اختيار الإجابة الصحيحة.",
        tl:"Tungkol sa guwantes ng drayber, piliin ang tamang sagot."
    },

    choices:{
        en:["Correct","Wrong"],
        zh:["正确","错误"],
        ms:["Betul","Salah"],
        th:["ถูกต้อง","ไม่ถูกต้อง"],
        id:["Benar","Salah"],
        hi:["सही","गलत"],
        ar:["صحيح","خطأ"],
        tl:["Tama","Mali"]
    },

    answer:0
},

{
    no:4,

    question:{
        en:"Regarding the safe driving distance, please select the correct answer.",
        zh:"关于安全跟车距离，请选择正确答案。",
        ms:"Mengenai jarak pemanduan yang selamat, sila pilih jawapan yang betul.",
        th:"เกี่ยวกับระยะห่างที่ปลอดภัยในการขับขี่ โปรดเลือกคำตอบที่ถูกต้อง",
        id:"Mengenai jarak aman saat mengemudi, silakan pilih jawaban yang benar.",
        hi:"सुरक्षित ड्राइविंग दूरी के संबंध में सही उत्तर चुनें।",
        ar:"فيما يتعلق بمسافة القيادة الآمنة، يرجى اختيار الإجابة الصحيحة.",
        tl:"Tungkol sa ligtas na distansya sa pagmamaneho, piliin ang tamang sagot."
    },

    choices:{
        en:["More than 10 m","More than 15 m"],
        zh:["10米以上","15米以上"],
        ms:["Lebih daripada 10 m","Lebih daripada 15 m"],
        th:["มากกว่า 10 เมตร","มากกว่า 15 เมตร"],
        id:["Lebih dari 10 m","Lebih dari 15 m"],
        hi:["10 मीटर से अधिक","15 मीटर से अधिक"],
        ar:["أكثر من 10 أمتار","أكثر من 15 مترًا"],
        tl:["Higit sa 10 m","Higit sa 15 m"]
    },

    answer:1
},

{
    no:5,

    question:{
        en:"Regarding reverse driving, is this operation correct?",
        zh:"关于倒车操作，此操作是否正确？",
        ms:"Mengenai pemanduan mengundur, adakah operasi ini betul?",
        th:"เกี่ยวกับการขับถอยหลัง การปฏิบัตินี้ถูกต้องหรือไม่?",
        id:"Mengenai pengoperasian mundur, apakah cara ini sudah benar?",
        hi:"रिवर्स ड्राइविंग के संबंध में, क्या यह तरीका सही है?",
        ar:"فيما يتعلق بالقيادة للخلف، هل هذه العملية صحيحة؟",
        tl:"Tungkol sa pagmamanehong paatras, tama ba ang paraang ito?"
    },

    choices:{
        en:["Correct","Wrong"],
        zh:["正确","错误"],
        ms:["Betul","Salah"],
        th:["ถูกต้อง","ไม่ถูกต้อง"],
        id:["Benar","Salah"],
        hi:["सही","गलत"],
        ar:["صحيح","خطأ"],
        tl:["Tama","Mali"]
    },

    answer:0
}

];

let current = 0;
let score = 0;
let playerName = "";
let language = "en";

function changeLanguage(lang, button){

    language = lang;

    let buttons = document.getElementsByClassName("langBtn");

    for(let i=0;i<buttons.length;i++){

        buttons[i].classList.remove("selected");

    }

    button.classList.add("selected");

}
function showQuestion(){

    document.getElementById("quizImage").src =
        "images/" + quiz[current].no + ".png";

    document.getElementById("question").innerText =
quiz[current].question[language];

    document.getElementById("btn1").innerText =
quiz[current].choices[language][0];

    document.getElementById("btn2").innerText =
quiz[current].choices[language][1];

    document.getElementById("result").innerText = "";

    document.getElementById("btn1").style.display = "inline";
    document.getElementById("btn2").style.display = "inline";
    document.getElementById("nextBtn").style.display = "none";

document.getElementById("nextBtn").innerText =
text[language].next;
}

function judge(choice){

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";

    document.getElementById("question").innerText = "";

    if(choice == quiz[current].answer){

        score++;

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-1.png";

        document.getElementById("result").innerText =
text[language].correct;

    }else{

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-2.png";

        document.getElementById("result").innerText =
text[language].wrong;

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
    "<button onclick='retryQuiz()'>" +
    text[language].retry +
    "</button>";

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