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
    en:"If you feel drowsy during operation, which action is correct?",
    zh:"如果操作过程中感到困倦，正确的做法是什么？",
    ms:"Jika anda berasa mengantuk semasa operasi, tindakan yang manakah betul?",
    th:"หากรู้สึกง่วงระหว่างปฏิบัติงาน ควรปฏิบัติอย่างไรจึงจะถูกต้อง?",
    id:"Jika Anda merasa mengantuk saat bekerja, tindakan manakah yang benar?",
    hi:"यदि संचालन के दौरान आपको नींद आने लगे, तो सही कार्रवाई क्या है?",
    ar:"إذا شعرت بالنعاس أثناء العمل، فما الإجراء الصحيح؟",
    tl:"Kung inaantok ka habang nagtatrabaho, alin ang tamang gawin?"
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

    explanation:{
        en:"Driving while drowsy may cause a serious accident. Stop the operation and report to your supervisor immediately.",
        zh:"疲劳驾驶可能导致严重事故。请立即停止操作并向主管报告。",
        ms:"Memandu ketika mengantuk boleh menyebabkan kemalangan serius. Hentikan operasi dan laporkan kepada penyelia anda.",
        th:"การขับขี่ขณะง่วงอาจทำให้เกิดอุบัติเหตุร้ายแรง ควรหยุดปฏิบัติงานและแจ้งหัวหน้างานทันที",
        id:"Mengemudi saat mengantuk dapat menyebabkan kecelakaan serius. Hentikan pekerjaan dan segera laporkan kepada atasan.",
        hi:"नींद की स्थिति में वाहन चलाना गंभीर दुर्घटना का कारण बन सकता है। तुरंत कार्य रोकें और अपने पर्यवेक्षक को सूचित करें।",
        ar:"قد يؤدي العمل أثناء الشعور بالنعاس إلى حادث خطير. أوقف العمل وأبلغ مشرفك فورًا.",
        tl:"Ang pagmamaneho habang inaantok ay maaaring magdulot ng malubhang aksidente. Itigil ang trabaho at ipaalam agad sa iyong superbisor."
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

explanation:{
    en:"The maximum driving speed inside the vessel is 20 km/h. Always obey the speed limit to ensure safe cargo operations.",
    zh:"船内最高行驶速度为20公里/小时。请遵守限速，以确保安全。",
    ms:"Had laju maksimum di dalam kapal ialah 20 km/j. Sentiasa patuhi had laju untuk memastikan operasi kargo yang selamat.",
    th:"ความเร็วสูงสุดในการขับขี่ภายในเรือคือ 20 กม./ชม. โปรดปฏิบัติตามข้อจำกัดความเร็วเพื่อความปลอดภัยในการปฏิบัติงาน",
    id:"Batas kecepatan maksimum di dalam kapal adalah 20 km/jam. Selalu patuhi batas kecepatan demi keselamatan operasi kargo.",
    hi:"जहाज के अंदर अधिकतम गति सीमा 20 किमी/घंटा है। सुरक्षित कार्गो संचालन के लिए हमेशा गति सीमा का पालन करें।",
    ar:"الحد الأقصى للسرعة داخل السفينة هو 20 كم/ساعة. التزم دائمًا بالسرعة المحددة لضمان سلامة عمليات الشحن.",
    tl:"Ang pinakamataas na bilis sa loob ng barko ay 20 km/h. Laging sundin ang speed limit upang matiyak ang ligtas na cargo operations."
},

    answer:0
},

{
    no:3,

question:{
    en:"Should drivers wear gloves during cargo operations?",
    zh:"驾驶员在驾驶汽车时需要戴手套吗？",
    ms:"Adakah pemandu perlu memakai sarung tangan semasa operasi kargo?",
    th:"ผู้ขับขี่ควรสวมถุงมือระหว่างการปฏิบัติงานขนถ่ายสินค้าหรือไม่?",
    id:"Apakah pengemudi harus memakai sarung tangan selama operasi kargo?",
    hi:"क्या कार्गो संचालन के दौरान चालक को दस्ताने पहनने चाहिए?",
    ar:"هل يجب على السائق ارتداء القفازات أثناء عمليات مناولة البضائع؟",
    tl:"Dapat bang magsuot ng guwantes ang drayber habang nagsasagawa ng cargo operations?"
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

explanation:{
    en:"Drivers must wear gloves during cargo operations to prevent damage to cargo caused by fingernails or rings.",
    zh:"驾驶员在货物操作时必须佩戴手套，以防止指甲或戒指划伤货物。",
    ms:"Pemandu mesti memakai sarung tangan semasa operasi kargo untuk mengelakkan kerosakan pada kargo akibat kuku atau cincin.",
    th:"ผู้ขับขี่ต้องสวมถุงมือระหว่างการปฏิบัติงานขนถ่ายสินค้า เพื่อป้องกันความเสียหายต่อสินค้าที่อาจเกิดจากเล็บหรือแหวน",
    id:"Pengemudi harus memakai sarung tangan selama operasi kargo untuk mencegah kerusakan pada muatan akibat kuku atau cincin.",
    hi:"कार्गो संचालन के दौरान चालक को दस्ताने पहनने चाहिए ताकि नाखून या अंगूठी से माल को नुकसान न पहुंचे।",
    ar:"يجب على السائق ارتداء القفازات أثناء عمليات مناولة البضائع لمنع تلف الشحنة بسبب الأظافر أو الخواتم.",
    tl:"Dapat magsuot ng guwantes ang drayber sa cargo operations upang maiwasan ang pagkasira ng kargamento na dulot ng kuko o singsing."
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

explanation:{
    en:"Always keep a minimum driving distance of 15 meters from the vehicle ahead to ensure enough time to stop safely and avoid collisions.",
    zh:"必须保持15米的安全距离，以确保有足够的停车时间。防止发生碰撞。",
    ms:"Sentiasa kekalkan jarak sekurang-kurangnya 15 meter dari kenderaan di hadapan bagi memastikan masa yang mencukupi untuk berhenti dengan selamat dan mengelakkan pelanggaran.",
    th:"ควรรักษาระยะห่างจากรถคันหน้าอย่างน้อย 15 เมตร เพื่อให้มีระยะเบรกเพียงพอและป้องกันการชน",
    id:"Selalu jaga jarak minimal 15 meter dari kendaraan di depan agar memiliki waktu yang cukup untuk berhenti dengan aman dan menghindari tabrakan.",
    hi:"सुरक्षित रूप से रुकने और टक्कर से बचने के लिए आगे वाले वाहन से हमेशा कम से कम 15 मीटर की दूरी बनाए रखें।",
    ar:"حافظ دائمًا على مسافة لا تقل عن 15 مترًا من المركبة التي أمامك لضمان وجود مسافة كافية للتوقف بأمان وتجنب الاصطدام.",
    tl:"Palaging panatilihin ang hindi bababa sa 15 metrong distansya mula sa sasakyan sa unahan upang magkaroon ng sapat na distansya sa paghinto at maiwasan ang banggaan."
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

explanation:{
    en:"Reverse driving without a signalman is strictly prohibited. Always ensure a signalman is present to guide the vehicle and prevent accidents.",
    zh:"严禁在没有指挥员的情况下倒车。倒车时必须有指挥员引导车辆，以防止事故发生。",
    ms:"Pemanduan mengundur tanpa signalman adalah dilarang sama sekali. Sentiasa pastikan signalman hadir untuk membimbing kenderaan dan mencegah kemalangan.",
    th:"ห้ามขับรถถอยหลังโดยไม่มีผู้ให้สัญญาณ (Signalman) อย่างเด็ดขาด ต้องมีผู้ให้สัญญาณคอยนำทางทุกครั้งเพื่อป้องกันอุบัติเหตุ",
    id:"Mengemudi mundur tanpa signalman dilarang keras. Pastikan selalu ada signalman yang memandu arah kendaraan untuk mencegah kecelakaan.",
    hi:"सिग्नलमैन के बिना रिवर्स ड्राइविंग करना सख्त मना है। दुर्घटनाओं से बचने के लिए वाहन को मार्गदर्शन देने हेतु हमेशा सिग्नलमैन मौजूद होना चाहिए।",
    ar:"يُمنع منعًا باتًا القيادة للخلف بدون مُوجِّه (Signalman). يجب دائمًا وجود مُوجِّه لتوجيه المركبة ومنع وقوع الحوادث.",
    tl:"Mahigpit na ipinagbabawal ang pagmamaneho nang paatras nang walang signalman. Laging tiyaking may signalman na gumagabay sa sasakyan upang maiwasan ang aksidente."
},
    answer:0
},

{
    no:6,

    question:{
        en:"Is the action shown in the picture correct?",
        zh:"图片中的行为正确吗？",
        ms:"Adakah tindakan dalam gambar ini betul?",
        th:"การกระทำในภาพนี้ถูกต้องหรือไม่?",
        id:"Apakah tindakan pada gambar ini benar?",
        hi:"क्या चित्र में दिखाया गया कार्य सही है?",
        ar:"هل السلوك الظاهر في الصورة صحيح؟",
        tl:"Tama ba ang kilos na ipinapakita sa larawan?"
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

    explanation:{
        en:"These actions are strictly prohibited. Do not bring unnecessary items into the vehicle and always concentrate on driving.",
        zh:"这些行为是严格禁止的。不要将无关物品带入车内，应始终专注于驾驶。",
        ms:"Tindakan ini adalah dilarang sama sekali. Jangan bawa barang yang tidak diperlukan ke dalam kenderaan dan sentiasa fokus pada pemanduan.",
        th:"พฤติกรรมเหล่านี้เป็นสิ่งต้องห้าม ห้ามนำสิ่งของที่ไม่จำเป็นเข้ามาในรถ และต้องมีสมาธิกับการขับขี่เท่านั้น",
        id:"Tindakan ini dilarang keras. Jangan membawa barang yang tidak diperlukan ke dalam kendaraan dan fokuslah hanya pada mengemudi.",
        hi:"ये कार्य सख्त वर्जित हैं। वाहन में अनावश्यक वस्तुएँ न लाएँ और केवल ड्राइविंग पर ध्यान दें।",
        ar:"هذه التصرفات ممنوعة تمامًا. لا تُدخل أشياء غير ضرورية إلى المركبة وركز فقط على القيادة.",
        tl:"Mahigpit na ipinagbabawal ang mga gawaing ito. Huwag magdala ng hindi kailangang gamit sa sasakyan at magpokus lamang sa pagmamaneho."
    },

    answer:1
},

{
 no:7,

    question:{
        en:"Is the gear position of manual and automatic vehicles always the same as shown in the illustration?",
        zh:"手动挡和自动挡车辆的挡位位置是否总是与图示相同？",
        ms:"Adakah kedudukan gear kenderaan manual dan automatik sentiasa sama seperti dalam ilustrasi?",
        th:"ตำแหน่งเกียร์ของรถ MT และ AT เหมือนกับภาพประกอบเสมอหรือไม่?",
        id:"Apakah posisi gigi kendaraan manual dan otomatis selalu sama seperti pada ilustrasi?",
        hi:"क्या MT और AT वाहनों का गियर हमेशा चित्र जैसा ही होता है?",
        ar:"هل يكون موضع ناقل الحركة في السيارات اليدوية والأوتوماتيكية دائمًا كما هو موضح في الرسم؟",
        tl:"Palagi bang pareho ang posisyon ng gear ng MT at AT tulad ng nasa larawan?"
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

    explanation:{
        en:"Gear positions vary depending on the vehicle model. Always check the gear position before moving the vehicle.",
        zh:"不同车型的挡位位置不同。启动车辆前必须确认挡位位置。",
        ms:"Kedudukan gear berbeza mengikut jenis kenderaan. Sentiasa periksa kedudukan gear sebelum bergerak.",
        th:"ตำแหน่งเกียร์แตกต่างกันไปตามแต่ละรุ่นรถ ควรตรวจสอบตำแหน่งเกียร์ทุกครั้งก่อนเคลื่อนรถ",
        id:"Posisi gigi berbeda tergantung jenis kendaraan. Selalu periksa posisi gigi sebelum menjalankan kendaraan.",
        hi:"गियर की स्थिति वाहन के मॉडल के अनुसार अलग हो सकती है। वाहन चलाने से पहले हमेशा गियर की स्थिति जांचें।",
        ar:"يختلف موضع ناقل الحركة حسب نوع المركبة. تحقق دائمًا من موضعه قبل تحريك المركبة.",
        tl:"Nagkakaiba ang posisyon ng gear depende sa sasakyan. Palaging suriin ang gear bago paandarin ang sasakyan."
    },

    answer:1
},

{
    no:8,

    question:{
        en:"What should you do if you accidentally find a cargo key in your pocket?",
        zh:"如果你无意中发现货物钥匙在自己口袋里，应该怎么办？",
        ms:"Apakah yang perlu anda lakukan jika anda mendapati kunci kargo berada di dalam poket anda secara tidak sengaja?",
        th:"หากพบกุญแจรถสินค้าอยู่ในกระเป๋าของคุณโดยไม่ตั้งใจ คุณควรทำอย่างไร?",
        id:"Apa yang harus Anda lakukan jika tanpa sengaja menemukan kunci kendaraan di saku Anda?",
        hi:"यदि गलती से कार्गो की चाबी आपकी जेब में मिल जाए तो आप क्या करेंगे?",
        ar:"ماذا يجب أن تفعل إذا وجدت مفتاح الشحنة في جيبك دون قصد؟",
        tl:"Ano ang gagawin mo kung hindi sinasadyang makita mo ang susi ng cargo sa iyong bulsa?"
    },

    choices:{
        en:["Keep it","Report it immediately"],
        zh:["继续保管","立即报告"],
        ms:["Simpan sahaja","Laporkan segera"],
        th:["เก็บไว้","รายงานทันที"],
        id:["Simpan saja","Segera laporkan"],
        hi:["अपने पास रखें","तुरंत रिपोर्ट करें"],
        ar:["احتفظ به","أبلغ فورًا"],
        tl:["Itago ito","Iulat agad"]
    },

    explanation:{
        en:"Keeping cargo keys may be regarded as theft and seriously damage the customer's trust. Report the key immediately.",
        zh:"私自保留钥匙可能被视为盗窃，并严重损害客户信任。请立即报告。",
        ms:"Menyimpan kunci kargo boleh dianggap sebagai kecurian dan menjejaskan kepercayaan pelanggan. Laporkan dengan segera.",
        th:"การเก็บกุญแจรถสินค้าไว้อาจถือเป็นการลักทรัพย์และทำลายความน่าเชื่อถือของบริษัท ต้องรายงานทันที",
        id:"Menyimpan kunci kendaraan dapat dianggap sebagai pencurian dan merusak kepercayaan pelanggan. Segera laporkan.",
        hi:"चाबी अपने पास रखना चोरी माना जा सकता है और ग्राहक का विश्वास खो सकता है। तुरंत रिपोर्ट करें।",
        ar:"قد يُعتبر الاحتفاظ بالمفتاح سرقة ويؤثر على ثقة العميل. أبلغ عنه فورًا.",
        tl:"Ang pagtatago ng susi ay maaaring ituring na pagnanakaw at makasira sa tiwala ng customer. Iulat ito agad."
    },

    answer:1
},

{
no:9,

    question:{
        en:"Which route is safer?",
        zh:"哪条路线更安全？",
        ms:"Laluan manakah yang lebih selamat?",
        th:"เส้นทางใดปลอดภัยกว่ากัน?",
        id:"Rute mana yang lebih aman?",
        hi:"कौन सा मार्ग अधिक सुरक्षित है?",
        ar:"أي طريق أكثر أمانًا؟",
        tl:"Aling ruta ang mas ligtas?"
    },

    choices:{
        en:["Red Route","Blue Route"],
        zh:["红色路线","蓝色路线"],
        ms:["Laluan Merah","Laluan Biru"],
        th:["เส้นทางสีแดง","เส้นทางสีน้ำเงิน"],
        id:["Rute Merah","Rute Biru"],
        hi:["लाल मार्ग","नीला मार्ग"],
        ar:["المسار الأحمر","المسار الأزرق"],
        tl:["Pulang Ruta","Asul na Ruta"]
    },

    explanation:{
        en:"Always choose a route that provides sufficient turning space to ensure safe vehicle operation.",
        zh:"应选择有足够转弯空间的路线，以确保安全驾驶。",
        ms:"Sentiasa pilih laluan yang mempunyai ruang membelok yang mencukupi untuk memastikan operasi yang selamat.",
        th:"ควรเลือกเส้นทางที่มีพื้นที่เพียงพอสำหรับการเลี้ยว เพื่อความปลอดภัยในการขับขี่",
        id:"Selalu pilih rute yang memiliki ruang belok yang cukup agar kendaraan dapat dioperasikan dengan aman.",
        hi:"हमेशा ऐसा मार्ग चुनें जहाँ सुरक्षित मोड़ लेने के लिए पर्याप्त जगह हो।",
        ar:"اختر دائمًا مسارًا يوفر مساحة كافية للانعطاف لضمان التشغيل الآمن للمركبة.",
        tl:"Palaging piliin ang rutang may sapat na espasyo para sa ligtas na pagliko."
    },

    answer:1
},

{
    no:10,

    question:{
        en:"Which route is the safest?",
        zh:"哪条路线最安全？",
        ms:"Laluan manakah yang paling selamat?",
        th:"เส้นทางใดปลอดภัยที่สุด?",
        id:"Rute mana yang paling aman?",
        hi:"कौन सा मार्ग सबसे सुरक्षित है?",
        ar:"أي طريق هو الأكثر أمانًا؟",
        tl:"Aling ruta ang pinakaligtas?"
    },

    choices:{
        en:["Red Direction","Green Direction","Blue Direction"],
        zh:["红色路线","绿色路线","蓝色路线"],
        ms:["Laluan Merah","Laluan Hijau","Laluan Biru"],
        th:["เส้นทางสีแดง","เส้นทางสีเขียว","เส้นทางสีน้ำเงิน"],
        id:["Rute Merah","Rute Hijau","Rute Biru"],
        hi:["लाल मार्ग","हरा मार्ग","नीला मार्ग"],
        ar:["المسار الأحمر","المسار الأخضر","المسار الأزرق"],
        tl:["Pulang Ruta","Berdeng Ruta","Asul na Ruta"]
    },

    explanation:{
        en:"The wider the angle, the higher the risk of a collision.",
        zh:"务必选择转弯空间最宽敞且碰撞风险最低的路线。",
        ms:"Sentiasa pilih laluan yang mempunyai ruang membelok paling luas dan risiko pelanggaran paling rendah.",
        th:"ควรเลือกเส้นทางที่มีพื้นที่เลี้ยวกว้างที่สุดและมีความเสี่ยงต่อการชนต่ำที่สุด",
        id:"Selalu pilih rute dengan ruang belok paling luas dan risiko tabrakan paling rendah.",
        hi:"हमेशा ऐसा मार्ग चुनें जहाँ मुड़ने की पर्याप्त जगह हो और टक्कर का जोखिम सबसे कम हो।",
        ar:"اختر دائمًا المسار الذي يوفر أكبر مساحة للانعطاف وأقل خطر للاصطدام.",
        tl:"Palaging piliin ang rutang may pinakamalawak na espasyo para sa pagliko at pinakamababang panganib ng banggaan."
    },

    answer:1
},

{
    no:11,

    question:{
        en:"The Driver Leader should conduct a trial run before cargo operations to check the driving route inside the vessel.",
        zh:"司机组长应在货物操作开始前进行试运行，以确认船内行驶路线。",
        ms:"Ketua pemandu perlu menjalankan percubaan pemanduan sebelum operasi kargo bermula untuk memeriksa laluan pemanduan di dalam kapal.",
        th:"หัวหน้าคนขับควรทำการทดลองขับก่อนเริ่มปฏิบัติงานขนถ่ายสินค้า เพื่อตรวจสอบเส้นทางการขับขี่ภายในเรือ",
        id:"Pemimpin pengemudi harus melakukan uji coba berkendara sebelum operasi muatan dimulai untuk memeriksa rute berkendara di dalam kapal.",
        hi:"कार्गो संचालन शुरू होने से पहले केवल ड्राइवर लीडर को जहाज़ के अंदर ड्राइविंग मार्ग की पुष्टि करने के लिए ट्रायल रन करना चाहिए।",
        ar:"يجب على قائد السائقين إجراء جولة تجريبية قبل بدء عمليات الشحن للتحقق من مسار القيادة داخل السفينة.",
        tl:"Dapat bang ang Driver Leader lamang ang magsagawa ng trial run bago magsimula ang cargo operation upang suriin ang driving route sa loob ng barko?"
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

explanation:{
    en:"Not only the Driver Leader, but all drivers must participate in the trial run. Everyone must confirm the driving route, hazardous areas, and deck height before cargo operations. Accidents can occur if every driver does not understand the correct route.",
    zh:"不仅司机组长，所有司机都必须参加试运行。所有人员都必须确认行驶路线、危险区域以及甲板高度。如果所有司机都不了解正确路线，就可能发生事故。",
    ms:"Bukan hanya Ketua Pemandu, tetapi semua pemandu mesti menyertai percubaan pemanduan. Semua pemandu perlu mengesahkan laluan pemanduan, kawasan berbahaya dan ketinggian dek sebelum operasi kargo bermula. Kemalangan boleh berlaku jika semua pemandu tidak memahami laluan yang betul.",
    th:"ไม่ใช่เฉพาะหัวหน้าคนขับเท่านั้น แต่คนขับทุกคนต้องเข้าร่วมการทดลองขับ ทุกคนต้องตรวจสอบเส้นทางการขับขี่ จุดอันตราย และความสูงของดาดฟ้าก่อนเริ่มปฏิบัติงาน หากคนขับทุกคนไม่เข้าใจเส้นทางที่ถูกต้อง อาจเกิดอุบัติเหตุได้",
    id:"Bukan hanya pemimpin pengemudi, tetapi semua pengemudi harus mengikuti uji coba berkendara. Semua pengemudi harus memastikan rute, area berbahaya, dan tinggi dek sebelum operasi muatan dimulai. Kecelakaan dapat terjadi jika semua pengemudi tidak memahami rute yang benar.",
    hi:"केवल ड्राइवर लीडर ही नहीं, बल्कि सभी ड्राइवरों को ट्रायल रन में भाग लेना चाहिए। सभी को ड्राइविंग मार्ग, खतरनाक स्थानों और डेक की ऊँचाई की पुष्टि करनी चाहिए। यदि सभी ड्राइवर सही मार्ग नहीं समझेंगे तो दुर्घटनाएँ हो सकती हैं।",
    ar:"لا يجب أن يشارك قائد السائقين فقط، بل يجب أن يشارك جميع السائقين في الجولة التجريبية. يجب على الجميع التأكد من مسار القيادة، والمناطق الخطرة، وارتفاعات الأسطح قبل بدء عمليات الشحن. قد تقع حوادث إذا لم يفهم جميع السائقين المسار الصحيح.",
    tl:"Hindi lamang ang Driver Leader ang dapat magsagawa ng trial run. Dapat lumahok ang lahat ng driver upang suriin ang driving route, mga mapanganib na lugar, at taas ng deck bago magsimula ang cargo operation. Maaaring magkaroon ng aksidente kung hindi nauunawaan ng lahat ng driver ang tamang ruta."
},
    answer:1
},

{
    no:12,

    question:{
        en:"The structure and composition of the deck depend on the vessel.",
        zh:"甲板的结构和组成因船舶而异。",
        ms:"Struktur dan komposisi dek bergantung pada jenis kapal.",
        th:"โครงสร้างและองค์ประกอบของดาดฟ้าขึ้นอยู่กับเรือแต่ละลำ",
        id:"Struktur dan komposisi dek bergantung pada jenis kapal.",
        hi:"डेक की संरचना और बनावट जहाज़ के अनुसार अलग-अलग होती है।",
        ar:"يعتمد هيكل وتكوين سطح السفينة على نوع السفينة.",
        tl:"Ang istruktura at komposisyon ng deck ay nakadepende sa bawat barko."
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

    explanation:{
        en:"The deck structure and composition vary from vessel to vessel. Always check the Stowage Plan and confirm the route during the Trial Run before cargo operations.",
        zh:"不同船舶的甲板结构和组成各不相同。开始装卸前，请务必查看 Stowage Plan，并在 Trial Run 时确认行驶路线。",
        ms:"Struktur dan komposisi dek berbeza mengikut kapal. Sentiasa semak Stowage Plan dan sahkan laluan semasa Trial Run sebelum operasi kargo.",
        th:"โครงสร้างและองค์ประกอบของดาดฟ้าแตกต่างกันไปในแต่ละลำ ควรตรวจสอบ Stowage Plan และยืนยันเส้นทางระหว่าง Trial Run ก่อนเริ่มปฏิบัติงาน",
        id:"Struktur dan komposisi dek berbeda pada setiap kapal. Selalu periksa Stowage Plan dan pastikan rute saat Trial Run sebelum operasi muatan dimulai.",
        hi:"हर जहाज़ में डेक की संरचना और बनावट अलग होती है। कार्गो संचालन से पहले हमेशा Stowage Plan की जाँच करें और Trial Run के दौरान मार्ग की पुष्टि करें।",
        ar:"يختلف هيكل وتكوين سطح السفينة من سفينة إلى أخرى. احرص دائمًا على مراجعة Stowage Plan والتأكد من مسار القيادة أثناء Trial Run قبل بدء عمليات الشحن.",
        tl:"Magkakaiba ang istruktura at komposisyon ng deck sa bawat barko. Palaging suriin ang Stowage Plan at kumpirmahin ang ruta sa Trial Run bago magsimula ang cargo operation."
    },

    answer:0
},

{
    no:13,

    question:{
        en:"The deck height will not change if it is the same vessel type.",
        zh:"如果是同一船型，甲板高度就不会改变。",
        ms:"Ketinggian dek tidak akan berubah jika jenis kapal adalah sama.",
        th:"หากเป็นเรือประเภทเดียวกัน ความสูงของดาดฟ้าจะไม่เปลี่ยนแปลง",
        id:"Ketinggian dek tidak akan berubah jika jenis kapalnya sama.",
        hi:"यदि जहाज़ का प्रकार एक ही है, तो डेक की ऊँचाई नहीं बदलती।",
        ar:"إذا كان نوع السفينة هو نفسه، فلن يتغير ارتفاع سطح السفينة.",
        tl:"Kung pareho ang uri ng barko, hindi magbabago ang taas ng deck."
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

    explanation:{
        en:"The deck height changes depending on the stowage plan for each voyage. Always check the Stowage Plan and confirm the deck height during the Trial Run before cargo operations.",
        zh:"甲板高度会因每次积载计划而有所不同。作业前务必查看 Stowage Plan，并在 Trial Run 时确认甲板高度。",
        ms:"Ketinggian dek berubah mengikut pelan stowage bagi setiap pelayaran. Sentiasa semak Stowage Plan dan sahkan ketinggian dek semasa Trial Run sebelum operasi kargo.",
        th:"ความสูงของดาดฟ้าจะเปลี่ยนไปตาม Stowage Plan ของแต่ละเที่ยวเรือ ควรตรวจสอบ Stowage Plan และยืนยันความสูงของดาดฟ้าระหว่าง Trial Run ก่อนเริ่มปฏิบัติงาน",
        id:"Ketinggian dek dapat berubah sesuai dengan Stowage Plan pada setiap pelayaran. Selalu periksa Stowage Plan dan pastikan tinggi dek saat Trial Run sebelum operasi muatan dimulai.",
        hi:"हर यात्रा में Stowage Plan के अनुसार डेक की ऊँचाई बदल सकती है। कार्गो संचालन से पहले हमेशा Stowage Plan की जाँच करें और Trial Run के दौरान डेक की ऊँचाई की पुष्टि करें।",
        ar:"قد يختلف ارتفاع سطح السفينة في كل رحلة وفقًا لـ Stowage Plan. احرص دائمًا على مراجعة Stowage Plan والتأكد من ارتفاع السطح أثناء Trial Run قبل بدء عمليات الشحن.",
        tl:"Maaaring magbago ang taas ng deck depende sa Stowage Plan ng bawat biyahe. Palaging suriin ang Stowage Plan at kumpirmahin ang taas ng deck sa Trial Run bago magsimula ang cargo operation."
    },

    answer:1
},

{
    no:14,

    question:{
        en:"The angle of the vessel's stern ramp is always the same.",
        zh:"船舶尾跳板的角度始终相同。",
        ms:"Sudut stern ramp kapal sentiasa sama.",
        th:"มุมของ Stern Ramp ของเรือจะเหมือนเดิมเสมอ",
        id:"Sudut stern ramp kapal selalu sama.",
        hi:"जहाज़ के स्टर्न रैम्प का कोण हमेशा एक जैसा होता है।",
        ar:"زاوية المنحدر الخلفي (Stern Ramp) للسفينة تكون دائمًا نفسها.",
        tl:"Palaging pareho ang anggulo ng stern ramp ng barko."
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

    explanation:{
        en:"The stern ramp angle changes during cargo operations depending on the vessel's draft, heel, and tidal conditions.",
        zh:"尾跳板角度会因船舶吃水、横倾以及潮汐情况而变化，装卸过程中也可能发生变化。",
        ms:"Sudut stern ramp berubah semasa operasi kargo bergantung pada draft kapal, sengetan (heel) dan keadaan pasang surut.",
        th:"มุมของ Stern Ramp จะเปลี่ยนแปลงระหว่างการปฏิบัติงาน ขึ้นอยู่กับกินน้ำของเรือ การเอียงของเรือ และระดับน้ำขึ้นน้ำลง",
        id:"Sudut stern ramp dapat berubah selama operasi muatan tergantung pada draft kapal, kemiringan kapal (heel), dan kondisi pasang surut.",
        hi:"कार्गो संचालन के दौरान जहाज़ के ड्राफ्ट, हील (झुकाव) और ज्वार-भाटा की स्थिति के अनुसार स्टर्न रैम्प का कोण बदल सकता है।",
        ar:"قد تتغير زاوية المنحدر الخلفي أثناء عمليات الشحن تبعًا لغاطس السفينة وميلها وحالة المد والجزر.",
        tl:"Maaaring magbago ang anggulo ng stern ramp habang isinasagawa ang cargo operation depende sa draft, heel, at kondisyon ng pagtaas at pagbaba ng tubig."
    },

    answer:1
},

{
    no:15,

    question:{
        en:"The gear was shifted to 'D', the brake pedal was firmly depressed, and the driver waited until the distance to the vehicle ahead exceeded 15 m. Is this the correct procedure?",
        zh:"先将挡位挂入 D 挡，并踩住刹车，等待与前车距离超过15米。这一操作正确吗？",
        ms:"Gear ditukar ke 'D', brek ditekan dengan kuat, dan pemandu menunggu sehingga jarak dengan kenderaan di hadapan melebihi 15 m. Adakah prosedur ini betul?",
        th:"เข้าเกียร์ D เหยียบเบรกไว้ และรอจนกว่าระยะห่างจากรถคันหน้าจะมากกว่า 15 เมตร ขั้นตอนนี้ถูกต้องหรือไม่?",
        id:"Gigi dipindahkan ke posisi 'D', pedal rem diinjak kuat, lalu menunggu hingga jarak dengan kendaraan di depan lebih dari 15 m. Apakah prosedur ini benar?",
        hi:"गियर को 'D' में डालकर ब्रेक दबाए रखा गया और सामने वाले वाहन से 15 मीटर से अधिक दूरी होने तक प्रतीक्षा की गई। क्या यह सही प्रक्रिया है?",
        ar:"تم نقل ناقل الحركة إلى الوضع D مع الضغط بقوة على الفرامل، ثم الانتظار حتى تصبح المسافة مع المركبة الأمامية أكثر من 15 مترًا. هل هذا الإجراء صحيح؟",
        tl:"Inilipat ang gear sa 'D', mahigpit na inapakan ang preno, at naghintay hanggang lumampas sa 15 m ang distansya sa sasakyan sa unahan. Tama ba ang pamamaraang ito?"
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

    explanation:{
        en:"To prevent collisions caused by unintended vehicle movement, do not shift the gear to 'D' until a sufficient distance from the vehicle ahead has been secured.",
        zh:"为防止因误起步造成碰撞，在与前车保持足够安全距离之前，不要将挡位挂入 D 挡。",
        ms:"Bagi mengelakkan perlanggaran akibat kenderaan bergerak secara tidak sengaja, jangan tukar gear ke 'D' sehingga jarak yang mencukupi dengan kenderaan di hadapan dipastikan.",
        th:"เพื่อป้องกันการชนจากการออกตัวโดยไม่ตั้งใจ ห้ามเข้าเกียร์ D จนกว่าจะมีระยะห่างจากรถคันหน้าเพียงพอ",
        id:"Untuk mencegah tabrakan akibat kendaraan bergerak tanpa sengaja, jangan pindahkan gigi ke posisi 'D' sampai jarak aman dengan kendaraan di depan telah dipastikan.",
        hi:"गलती से वाहन चल पड़ने के कारण होने वाली टक्कर को रोकने के लिए, सामने वाले वाहन से पर्याप्त दूरी सुनिश्चित होने तक गियर को 'D' में न डालें।",
        ar:"لمنع الاصطدام الناتج عن تحرك المركبة بشكل غير مقصود، لا تنقل ناقل الحركة إلى الوضع D حتى يتم تأمين مسافة كافية من المركبة التي أمامك.",
        tl:"Upang maiwasan ang banggaan dulot ng hindi sinasadyang pag-andar ng sasakyan, huwag ilagay sa 'D' ang gear hangga't hindi pa sapat ang distansya sa sasakyan sa unahan."
    },

    answer:1
},

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

    document.getElementById("btn1").style.display = "inline";
    document.getElementById("btn2").style.display = "inline";

    if(quiz[current].choices[language].length == 3){

        document.getElementById("btn3").innerText =
            quiz[current].choices[language][2];

        document.getElementById("btn3").style.display = "inline";

    }else{

        document.getElementById("btn3").style.display = "none";

    }

    //
    document.getElementById("result").innerText = "";

    document.getElementById("nextBtn").style.display = "none";

    document.getElementById("nextBtn").innerText =
        text[language].next;
}

function judge(choice){

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";

    document.getElementById("question").innerText = "";

if(choice == quiz[current].answer){

    score++;

    // 正解画像
    if(quiz[current].no == 10){

        document.getElementById("quizImage").src = "images/10-1.png";

    }else{

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-1.png";

    }

    document.getElementById("result").innerHTML =
        "<b style='color:green'>" +
        text[language].correct +
        "</b><br><br>" +
        quiz[current].explanation[language];

}else{

    // 不正解画像
    if(quiz[current].no == 10){

        if(choice == 2){

            // Blue Direction
            document.getElementById("quizImage").src = "images/10-3.png";

        }else{

            // Red Direction
            document.getElementById("quizImage").src = "images/10-2.png";

        }

    }else{

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-2.png";

    }

    document.getElementById("result").innerHTML =
        "<b style='color:red'>" +
        text[language].wrong +
        "</b><br><br>" +
        quiz[current].explanation[language];

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
        document.getElementById("btn3").style.display = "none";
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