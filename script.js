const text = {

en:{
 correct:"Correct!",
 wrong:"Oops!",
 next:"Next Question",
 retry:"Retry Quiz",
 name:"Please enter your name.",
 start:"Start Quiz"
},

zh:{
 correct:"正确！",
 wrong:"错误！",
 next:"下一题",
 retry:"重新测验",
 name:"请输入姓名。",
 start:"开始测验"
},

ms:{
 correct:"Betul!",
 wrong:"Salah!",
 next:"Soalan Seterusnya",
 retry:"Cuba Lagi",
 name:"Sila masukkan nama anda.",
 start:"Mula Kuiz"
},

th:{
 correct:"ถูกต้อง!",
 wrong:"ไม่ถูกต้อง!",
 next:"ข้อถัดไป",
 retry:"ทำแบบทดสอบอีกครั้ง",
 name:"กรุณากรอกชื่อของคุณ",
 start:"เริ่มแบบทดสอบ"
},

id:{
 correct:"Benar!",
 wrong:"Salah!",
 next:"Pertanyaan Berikutnya",
 retry:"Ulangi Kuis",
 name:"Silakan masukkan nama Anda.",
 start:"Mulai Kuis"
},

hi:{
 correct:"सही!",
 wrong:"गलत!",
 next:"अगला प्रश्न",
 retry:"क्विज़ फिर से करें",
 name:"कृपया अपना नाम दर्ज करें।",
 start:"क्विज़ प्रारंभ करें"
},

ar:{
 correct:"صحيح!",
  wrong:"خطأ!",
  next:"السؤال التالي",
  retry:"إعادة الاختبار",
 name:"يرجى إدخال اسمك.",
 start:"ابدأ الاختبار"
},

tl:{
 correct:"Tama!",
 wrong:"Mali!",
 next:"Susunod na Tanong",
 retry:"Subukang Muli",
 name:"Pakilagay ang iyong pangalan.",
 start:"Simulan ang Pagsusulit"
},

tw: {
 correct: "正確！",
 wrong: "錯誤！",
 next: "下一題",
 retry: "重新挑戰",
 name:"請輸入您的姓名。",
 start:"開始測驗"
},

vi:{
 correct:"Chính xác!",
 wrong:"Rất tiếc!",
 next:"Câu hỏi tiếp theo",
 retry:"Làm lại bài kiểm tra" ,
 name:"Vui lòng nhập tên của bạn.",
 start:"Bắt đầu bài kiểm tra"
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
  tl:"Kung inaantok ka habang nagtatrabaho, alin ang tamang gawin?",
 tw:"如果作業時感到困倦，正確的做法是什麼？",
 vi:"Nếu bạn cảm thấy buồn ngủ trong lúc làm việc, hành động nào sau đây là đúng?"
},

choices:{
 en:["Still driving","Inform your supervisor"],
 zh:["继续驾驶","立即报告"],
 ms:["Terus memandu","Laporkan segera"],
 th:["ขับต่อไป","แจ้งทันที"],
 id:["Tetap mengemudi","Segera laporkan"],
 hi:["चलाते रहें","तुरंत सूचित करें"],
 ar:["استمر في القيادة","أبلغ فورًا"],
 tl:["Magpatuloy sa pagmamaneho","Iulat agad"],
 tw:["繼續駕駛","立即通報"],
 vi:["Tiếp tục lái xe","Báo cáo với người giám sát"]
},

explanation:{
 en:"Driving while drowsy may cause a serious accident. Stop the operation and report to your supervisor immediately.",
 zh:"疲劳驾驶可能导致严重事故。请立即停止操作并向主管报告。",
 ms:"Memandu ketika mengantuk boleh menyebabkan kemalangan serius. Hentikan operasi dan laporkan kepada penyelia anda.",
 th:"การขับขี่ขณะง่วงอาจทำให้เกิดอุบัติเหตุร้ายแรง ควรหยุดปฏิบัติงานและแจ้งหัวหน้างานทันที",
 id:"Mengemudi saat mengantuk dapat menyebabkan kecelakaan serius. Hentikan pekerjaan dan segera laporkan kepada atasan.",
 hi:"नींद की स्थिति में वाहन चलाना गंभीर दुर्घटना का कारण बन सकता है। तुरंत कार्य रोकें और अपने पर्यवेक्षक को सूचित करें।",
 ar:"قد يؤدي العمل أثناء الشعور بالنعاس إلى حادث خطير. أوقف العمل وأبلغ مشرفك فورًا.",
  tl:"Ang pagmamaneho habang inaantok ay maaaring magdulot ng malubhang aksidente. Itigil ang trabaho at ipaalam agad sa iyong superbisor.",
 tw: "疲勞駕駛可能導致嚴重事故。請立即停止操作並向主管報告。",
 vi:"Lái xe khi buồn ngủ có thể gây ra tai nạn nghiêm trọng. Hãy dừng công việc và báo cáo ngay cho người giám sát của bạn."
},

answer:1
},

{
no:2,

question:{
 en:"Regarding the driving speed limit inside the vessel, please select the correct answer.",
 zh:"关于船内行驶速度限制，请选择正确答案。",
 ms:"Mengenai had laju kenderaan di dalam kapal, sila pilih jawapan yang betul.",
 th:"เกี่ยวกับจำกัดความเร็วในการขับขี่ภายในเรือ โปรดเลือกคำตอบที่ถูกต้อง",
 id:"Mengenai batas kecepatan kendaraan di dalam kapal, silakan pilih jawaban yang benar.",
 hi:"जहाज के अंदर वाहन चलाने की गति सीमा के बारे में सही उत्तर चुनें।",
 ar:"فيما يتعلق بحد السرعة المسموح بها للقيادة داخل السفينة، يرجى اختيار الإجابة الصحيحة.",
 tl:"Tungkol sa limitasyon ng bilis ng pagmamaneho sa loob ng barko, piliin ang tamang sagot.",
 tw:"關於船內行駛速度限制，請選擇正確答案。",
 vi:"Về giới hạn tốc độ lái xe bên trong tàu, vui lòng chọn câu trả lời đúng."
},

choices:{
 en:["20 km/h","30 km/h"],
 zh:["20公里/小时","30公里/小时"],
 ms:["20 km/j","30 km/j"],
 th:["20 กม./ชม.","30 กม./ชม."],
 id:["20 km/jam","30 km/jam"],
 hi:["20 किमी/घंटा","30 किमी/घंटा"],
 ar:["20 كم/ساعة","30 كم/ساعة"],
 tl:["20 km/h","30 km/h"],
 tw:["時速20公里","時速30公里"],
  vi:["20 km/h","30 km/h"]
},

explanation:{
 en:"The maximum driving speed inside the vessel is 20 km/h. Always obey the speed limit to ensure safe cargo operations.",
 zh:"船内最高行驶速度为20公里/小时。请务必遵守限速，以确保车辆操作安全。",
 ms:"Had laju maksimum di dalam kapal ialah 20 km/j. Sentiasa patuhi had laju untuk memastikan operasi kargo yang selamat.",
 th:"ความเร็วสูงสุดในการขับขี่ภายในเรือคือ 20 กม./ชม. โปรดปฏิบัติตามจำกัดความเร็วเพื่อความปลอดภัยในการปฏิบัติงานขนถ่ายสินค้า",
 id:"Batas kecepatan maksimum di dalam kapal adalah 20 km/jam. Selalu patuhi batas kecepatan demi keselamatan operasi kargo.",
 hi:"जहाज के अंदर अधिकतम गति सीमा 20 किमी/घंटा है। सुरक्षित कार्ゴ संचालन के लिए हमेशा गति सीमा का पालन करें।",
 ar:"الحد الأقصى للسرعة داخل السفينة هو 20 كم/ساعة. التزم دائمًا بحد السرعة لضمان سلامة عمليات مناولة البضائع.",
 tl:"Ang pinakamataas na bilis sa loob ng barko ay 20 km/h. Laging sundin ang speed limit upang matiyak ang ligtas na cargo operations.",
 tw:"船內最高行駛速度為時速20公里。請務必遵守限速，以確保車輛操作安全。",
 vi:"Tốc độ lái xe tối đa bên trong tàu là 20 km/h. Luôn tuân thủ giới hạn tốc độ để đảm bảo an toàn cho hoạt động hàng hóa."
},

answer:0
},

{
no:3,

question:{
 en:"Should drivers wear gloves during cargo operations?",
 zh:"驾驶员在车辆操作時需要戴手套吗？",
 ms:"Adakah pemandu perlu memakai sarung tangan semasa operasi kargo?",
 th:"ผู้ขับขี่ควรสวมถุงมือระหว่างการปฏิบัติงานขนถ่ายสินค้าหรือไม่?",
 id:"Apakah pengemudi harus memakai sarung tangan selama operasi kargo?",
 hi:"क्या कार्गो संचालन के दौरान चालक को दस्ताने पहनने चाहिए?",
 ar:"هل يجب على السائق ارتداء القفازات أثناء عمليات مناولة البضائع؟",
 tl:"Dapat bang magsuot ng guwantes ang drayber habang nagsasagawa ng cargo operations?",
 tw:"駕駛員在車輛操作時需要戴手套嗎？",
 vi:"Tài xế có nên đeo găng tay trong quá trình thao tác hàng hóa không?"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"Drivers must wear gloves during cargo operations to prevent damage to cargo caused by fingernails or rings.",
 zh:"驾驶员在车辆操作时必须佩戴手套，以防止指甲或戒指划伤货物。",
 ms:"Pemandu mesti memakai sarung tangan semasa operasi kargo untuk mengelakkan kerosakan pada kargo akibat kuku atau cincin.",
 th:"ผู้ขับขี่ต้องสวมถุงมือระหว่างการปฏิบัติงานขนถ่ายสินค้า เพื่อป้องกันความเสียหายต่อสินค้าที่อาจเกิดจากเล็บหรือแหวน",
 id:"Pengemudi harus memakai sarung tangan selama operasi kargo untuk mencegah kerusakan pada muatan akibat kuku atau cincin.",
 hi:"कार्गो संचालन के दौरान चालक को दस्ताने पहनने चाहिए ताकि नाखून या अंगूठी से माल को नुकसान न पहुंचे।",
 ar:"يجب على السائق ارتداء القفازات أثناء عمليات مناولة البضائع لمنع تلف الشحنة بسبب الأظافر أو الخواتم.",
 tl:"Dapat magsuot ng guwantes ang drayber sa cargo operations upang maiwasan ang pagkasira ng kargamento na dulot ng kuko o singsing.",
 tw:"駕駛員在車輛操作時必須佩戴手套，以防止指甲或戒指劃傷貨物。",
 vi:"Tài xế phải đeo găng tay trong quá trình thao tác hàng hóa để tránh làm hư hỏng hàng hóa do móng tay hoặc nhẫn gây ra.",
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
  tl:"Tungkol sa ligtas na distansya sa pagmamaneho, piliin ang tamang sagot.",
 tw:"關於安全跟車距離，請選擇正確答案。",
 vi:"Về khoảng cách lái xe an toàn, vui lòng chọn câu trả lời đúng."
},

choices:{
 en:["More than 10 m","More than 15 m"],
 zh:["10米以上","15米以上"],
 ms:["Lebih daripada 10 m","Lebih daripada 15 m"],
 th:["มากกว่า 10 เมตร","มากกว่า 15 เมตร"],
 id:["Lebih dari 10 m","Lebih dari 15 m"],
 hi:["10 मीटर से अधिक","15 मीटर से अधिक"],
 ar:["أكثر من 10 أمتار","أكثر من 15 مترًا"],
 tl:["Higit sa 10 m","Higit sa 15 m"],
 tw:["10公尺以上","15公尺以上"],
 vi:["Trên 10 m","Trên 15 m"]
},

explanation:{
 en:"Always keep a minimum driving distance of 15 meters from the vehicle ahead to ensure enough time to stop safely and avoid collisions.",
 zh:"必须与前车保持至少15米的安全跟车距离，以确保有足够的安全停止時間並防止发生碰撞。",
 ms:"Sentiasa kekalkan jarak sekurang-kurangnya 15 meter dari kenderaan di hadapan bagi memastikan masa yang mencukupi untuk berhenti dengan selamat dan mengelakkan pelanggaran.",
 th:"ควรรักษาระยะห่างจากรถคันหน้าอย่างน้อย 15 เมตร เพื่อให้มีระยะเบรกเพียงพอและป้องกันการชน",
 id:"Selalu jaga jarak minimal 15 meter dari kendaraan di depan agar memiliki waktu yang cukup untuk berhenti dengan aman dan menghindari tabrakan.",
 hi:"सुरक्षित रूप से रुकने और टक्कर से बचने के लिए आगे वाले वाहन से हमेशा कम से कम 15 मीटर की दूरी बनाए रखें।",
 ar:"حافظ دائمًا على مسافة لا تقل عن 15 مترًا من المركبة التي أمامك لضمان وجود مسافة كافية للتوقف بأمان وتجنب الاصطدام.",
 tl:"Palaging panatilihin ang hindi bababa sa 15 metrong distansya mula sa sasakyan sa unahan upang magkaroon ng sapat na distansya sa paghinto at maiwasan ang banggaan.",
 tw:"必須與前車保持至少15公尺的安全跟車距離，以確保有足夠的安全停止時間並防止發生碰撞。",
 vi:"Luôn giữ khoảng cách tối thiểu 15 mét với xe phía trước để đảm bảo có đủ thời gian dừng xe an toàn và tránh va chạm."
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
 hi:"रिवर्स driving के संबंध में, क्या यह तरीका सही है?",
 ar:"فيما يتعلق بالقيادة للخلف، هل هذه العملية صحيحة؟",
  tl:"Tungkol sa pagmamanehong paatras, tama ba ang paraang ito?",
 tw:"關於倒車操作，此操作是否正確？",
 vi:"Về việc lái xe lùi, thao tác này có đúng không?"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"Reverse driving without a signalman is strictly prohibited. Always ensure a signalman is present to guide the vehicle and prevent accidents.",
 zh:"严禁在没有指挥员（Signalman）的情况下进行倒车操作。必须确保有指挥员引导车辆，以防止事故发生。",
 ms:"Pemanduan mengundur tanpa signalman adalah dilarang sama sekali. Sentiasa pastikan signalman hadir untuk membimbing kenderaan dan mencegah kemalangan.",
 th:"ห้ามขับรถถอยหลังโดยไม่มีผู้ให้สัญญาณ (Signalman) อย่างเด็ดขาด ต้องมีผู้ให้สัญญาณคอยนำทางทุกครั้งเพื่อป้องกันอุบัติเหตุ",
 id:"Mengemudi mundur tanpa signalman dilarang keras. Pastikan selalu ada signalman yang memandu arah kendaraan untuk mencegah kecelakaan.",
 hi:"सिग्नलमैन के बिना रिवर्स ड्राइविंग करना सख्त मना है। दुर्घटनाओं से बचने के लिए वाहन को मार्गदर्शन देने हेतु हमेशा सिग्नलमैन मौजूद होना चाहिए।",
 ar:"يُمنع منعًا باتًا القيادة للخلف بدون مُوجِّه (Signalman). يجب دائمًا وجود مُوجِّه لتوجيه المركبة ومنع وقوع الحوادث.",
  tl:"Mahigpit na ipinagbabawal ang pagmamaneho nang paatras nang walang signalman. Laging tiyaking may signalman na gumagabay sa sasakyan upang maiwasan ang aksidente.",
 tw:"嚴禁在沒有指揮員（Signalman）的情況下進行倒車操作。必須確保有指揮員引導車輛，以防止事故發生。",
 vi:"Nghiêm cấm lái xe lùi mà không có người ra tín hiệu (signalman). Luôn đảm bảo có người ra tín hiệu để hướng dẫn xe và phòng tránh tai nạn."
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
  tl:"Tama ba ang kilos na ipinapakita sa larawan?",
 tw:"圖片中的行為正確嗎？",
 vi:"Hành động trong hình có đúng không?"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"These actions are strictly prohibited. Do not bring unnecessary items into the vehicle and always concentrate on driving.",
 zh:"这些行为是严格禁止的。不要将无关物品带入车内，必须始终专注于车辆操作。",
 ms:"Tindakan ini adalah dilarang sama sekali. Jangan bawa barang yang tidak diperlukan ke dalam kenderaan dan sentiasa fokus pada pemanduan.",
 th:"พฤติกรรมเหล่านี้เป็นสิ่งต้องห้าม ห้ามนำสิ่งของที่ไม่จำเป็นเข้ามาในรถ และต้องมีสมาธิกับการขับขี่เสมอ",
 id:"Tindakan ini dilarang keras. Jangan membawa barang yang tidak diperlukan ke dalam kendaraan dan fokuslah hanya pada mengemudi.",
 hi:"ये कार्य सख्त वर्जित हैं। वाहन में अनावश्यक वस्तुएँ न लाएँ और केवल ड्राइविंग पर ध्यान दें।",
 ar:"هذه التصرفات ممنوعة تمامًا. لا تُدخل أشياء غير ضرورية إلى المركبة وركز فقط على القيادة.",
  tl:"Mahigpit na ipinagbabawal ang mga gawaing ito. Huwag magdala ng hindi kailangang gamit sa sasakyan at magpokus lamang sa pagmamaneho.",
 tw:"這些行為是嚴格禁止的。不要將無關物品帶入車內，必須始終專注於車輛操作。",
 vi:"Những hành động này bị nghiêm cấm. Không mang các vật dụng không cần thiết vào trong xe và luôn tập trung vào việc lái xe."
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
  tl:"Palagi bang pareho ang posisyon ng gear ng MT at AT tulad ng nasa larawan?",
 tw:"手排檔和自排檔車輛的檔位位置是否總是與圖示相同？",
 vi:"Vị trí số của xe số sàn (MT) và xe số tự động (AT) có luôn giống như trong hình minh họa không?"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"Gear positions vary depending on the vehicle model. Always check the gear position before moving the vehicle.",
 zh:"不同车型的挡位位置不同。起步或移动车辆前必须确认挡位位置。",
 ms:"Kedudukan gear berbeza mengikut jenis kenderaan. Sentiasa periksa kedudukan gear sebelum bergerak.",
 th:"ตำแหน่งเกียร์แตกต่างกันไปตามแต่ละรุ่นรถ ควรตรวจสอบตำแหน่งเกียร์ทุกครั้งก่อนเคลื่อนรถ",
 id:"Posisi gigi berbeda tergantung jenis kendaraan. Selalu periksa posisi gigi sebelum menjalankan kendaraan.",
 hi:"गियर की स्थिति वाहन के मॉडल के अनुसार अलग हो सकती है। वाहन चलाने से पहले हमेशा गियर की स्थिति जांचें।",
 ar:"يختلف موضع ناقل الحركة حسب نوع المركبة. تحقق دائمًا من موضعه قبل تحريك المركبة.",
  tl:"Nagkakaiba ang posisyon ng gear depende sa sasakyan. Palaging suriin ang gear bago paandarin ang sasakyan.",
 tw:"不同車型的檔位位置不同。起步或移動車輛前必須確認檔位位置。",
 vi:"Vị trí số thay đổi tùy thuộc vào từng dòng xe. Luôn kiểm tra vị trí số trước khi di chuyển xe."
},

answer:1
},

{
no:8,

question:{
 en:"What should you do if you accidentally find a cargo key in your pocket?",
 zh:"如果你无意中发现货物钥匙在自己口袋里，应该怎么办？",
 ms:"Apakah yang perlu anda lakukan jika anda mendapati kunci kargo berada di dalam poket anda secara tidak sengaja?",
 th:"หากพบกุญแจสินค้าอยู่ในกระเป๋าของคุณโดยไม่ตั้งใจ คุณควรทำอย่างไร?",
 id:"Apa yang harus Anda lakukan jika tanpa sengaja menemukan kunci kargo di saku Anda?",
 hi:"यदि गलती से कार्गो की चाबी आपकी जेब में मिल जाए तो आप क्या करेंगे?",
 ar:"ماذا يجب أن تفعل إذا وجدت مفتاح الشحنة في جيبك دون قصد؟",
  tl:"Ano ang gagawin mo kung hindi sinasadyang makita mo ang susi ng cargo sa iyong bulsa?",
 tw:"如果你無意中發現貨物鑰匙在自己口袋裡，應該怎麼辦？",
 vi:"Bạn nên làm gì nếu vô tình tìm thấy chìa khóa hàng hóa trong túi của mình?",
},

choices:{
 en:["Keep it","Report it immediately"],
 zh:["私自保留","立即向主管报告"],
 ms:["Simpan sahaja","Laporkan segera"],
 th:["เก็บไว้","รายงานทันที"],
 id:["Simpan saja","Segera laporkan"],
 hi:["अपने पास रखें","तुरंत रिपोर्ट करें"],
 ar:["احتفظ به","أبلغ فورًا"],
 tl:["Itago ito","Iulat agad"],
 tw:["私自保留","立即向主管報告"],
 vi:["Tự giữ lại","Báo cáo ngay lập tức"]
},

explanation:{
 en:"Keeping cargo keys may be regarded as theft and seriously damage the customer's trust. Report the key immediately.",
 zh:"私自保留货物钥匙可能被视为盗窃，并严重损害客户的信任。请立即向主管报告。",
 ms:"Menyimpan kunci kargo boleh dianggap sebagai kecurian dan menjejaskan kepercayaan pelanggan. Laporkan dengan segera.",
 th:"การเก็บกุญแจสินค้าไว้อาจถือเป็นการลักทรัพย์และทำลายความเชื่อมั่นของลูกค้าอย่างร้ายแรง ต้องรายงานทันที",
 id:"Menyimpan kunci kargo dapat dianggap sebagai pencurian dan merusak kepercayaan pelanggan secara serius. Segera laporkan.",
 hi:"चाबी अपने पास रखना चोरी माना जा सकता है और ग्राहक का विश्वास खो सकता है। तुरंत रिपोर्ट करें।",
 ar:"قد يُعتبر الاحتفاظ بمفاتيح الشحنة سرقة ويضر بثقة العميل بشكل خطير. أبلغ عنها فورًا.",
  tl:"Ang pagtatago ng susi ay maaaring ituring na pagnanakaw at makasira sa tiwala ng customer. Iulat ito agad.",
 tw:"私自保留貨物鑰匙可能被視為盜竊，並嚴重損害客戶的信任。請立即向主管報告。",
 vi:"Việc tự ý giữ chìa khóa hàng hóa có thể bị coi là hành vi trộm cắp và làm ảnh hưởng nghiêm trọng đến niềm tin của khách hàng. Hãy báo cáo ngay lập tức."
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
  tl:"Aling ruta ang mas ligtas?",
 tw:"哪條路線更安全？",
  vi:"Tuyến đường nào an toàn hơn?"
},

choices:{
 en:["Red Route","Blue Route"],
 zh:["红色路线","蓝色路线"],
 ms:["Laluan Merah","Laluan Biru"],
 th:["เส้นทางสีแดง","เส้นทางสีน้ำเงิน"],
 id:["Rute Merah","Rute Biru"],
 hi:["लाल मार्ग","नीला मार्ग"],
 ar:["المسار الأحمر","المسار الأزرق"],
 tl:["Pulang Ruta","Asul na Ruta"],
 tw:["紅色路線","藍色路線"],
 vi:["Tuyến đường màu đỏ","Tuyến đường màu xanh dương"]
},

explanation:{
 en:"Always choose a route that provides sufficient turning space to ensure safe vehicle operation.",
 zh:"必须始终选择有足够转弯空间的路线，以确保车辆操作安全。",
 ms:"Sentiasa pilih laluan yang mempunyai ruang membelok yang mencukupi untuk memastikan operasi yang selamat.",
 th:"ควรเลือกเส้นทางที่มีพื้นที่เพียงพอสำหรับการเลี้ยว เพื่อความปลอดภัยในการปฏิบัติงานขับขี่",
 id:"Selalu pilih rute yang memiliki ruang belok yang cukup agar kendaraan dapat dioperasikan dengan aman.",
 hi:"हमेशा ऐसा मार्ग चुनें जहाँ सुरक्षित मोड़ लेने के लिए पर्याप्त जगह हो।",
 ar:"اختر دائمًا مسارًا يوفر مساحة كافية للانعطاف لضمان التشغيل الآمن للمركبة.",
  tl:"Palaging piliin ang rutang may sapat na espasyo para sa ligtas na pagliko.",
 tw:"必須始終選擇有足夠轉彎空間的路線，以確保車輛操作安全。",
 vi:"Luôn chọn tuyến đường có đủ không gian quay đầu/rẽ để đảm bảo thao tác lái xe an toàn."
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
  tl:"Aling ruta ang pinakaligtas?",
 tw:"哪條路線最安全？",
 vi:"Hướng đi nào là an toàn nhất?"
},

choices:{
 en:["Red Direction","Green Direction","Blue Direction"],
 zh:["红色方向","绿色方向","蓝色方向"],
 ms:["Arah Merah","Arah Hijau","Arah Biru"],
 th:["ทิศทางสีแดง","ทิศทางสีเขียว","ทิศทางสีน้ำเงิน"],
 id:["Arah Merah","Arah Hijau","Arah Biru"],
 hi:["लाल दिशा","हरी दिशा","नीली दिशा"],
 ar:["الاتجاه الأحمر","الاتجاه الأخضر","الاتجاه الأزرق"],
 tl:["Pulang Direksyon","Berdeng Direksyon","Asul na Direksyon"],
 tw:["紅色方向","綠色方向","藍色方向"],
 vi:["Hướng màu đỏ","Hướng màu xanh lá","Hướng màu xanh dương"]
},

explanation:{
 en:"The wider the angle, the higher the risk of a collision. Avoid sudden steering when breaking out.",
 zh:"转弯角度越大，发生碰撞的风险就越高。切出（Break out）時请勿猛打方向盘。",
 ms:"Semakin besar sudut belokan, semakin tinggi risiko pelanggaran. Elakkan membelok stereng secara mengejut semasa keluar (break out).",
 th:"ยิ่งมุมเลี้ยวกว้างมากเท่าใด ความเสี่ยงต่อการชนก็ยิ่งสูงขึ้นเท่านั้น หลีกเลี่ยงการหักพวงมาลัยอย่างกะทันหันขณะเลี้ยวตัดออก (Break out)",
 id:"Semakin lebar sudut belokan, semakin tinggi risiko tabrakan. Hindari memutar setir secara mendadak saat keluar (break out).",
 hi:"मोड़ का कोण जितना बड़ा होगा, टक्कर का जोखिम उतना ही अधिक होगा। ब्रेक आउट (break out) करते समय अचानक स्टीयरिंग घुमाने से बचें।",
 ar:"كلما زادت زاوية الانعطاف، زاد خطر الاصطدام. تجنب توجيه عجلة القيادة بشكل مفاجئ عند الخروج (Break out).",
 tl:"Habang lumalaki ang anggulo ng pagliko, mas tumataas ang panganib ng banggaan. Iwasan ang biglaang pagpihit ng manibela kapag lumালabas (break out).",
 tw:"轉彎角度越大，發生碰撞的風險就越高。切出（Break out）時請勿猛打方向盤。",
 vi:"Góc rẽ càng rộng thì nguy cơ va chạm càng cao. Tránh đánh lái đột ngột khi chuyển hướng/đánh lái gắt (break out)."
},

answer:1
},

{
no:11,

question:{
 en:"Should only the Driver Leader conduct a trial run before cargo operations to check the driving route inside the vessel?",
 zh:"是否只需司机组长在车辆操作开始前进行试运行，以确认船内行驶路线？",
 ms:"Adakah hanya Ketua Pemandu sahaja yang perlu menjalankan percubaan pemanduan sebelum operasi kargo bermula untuk memeriksa laluan pemanduan di dalam kapal?",
 th:"ควรให้หัวหน้าคนขับเพียงคนเดียวทำการทดลองขับก่อนเริ่มปฏิบัติงานขนถ่ายสินค้า เพื่อตรวจสอบเส้นทางการขับขี่ภายในเรือหรือไม่?",
 id:"Apakah hanya pemimpin pengemudi yang harus melakukan uji coba berkendara sebelum operasi muatan dimulai untuk memeriksa rute berkendara di dalam kapal?",
 hi:"क्या वाहन संचालन शुरू होने से पहले केवल ड्राइवर लीडर को जहाज़ के अंदर ड्राइविंग मार्ग की जांच करने के लिए ट्रायल रन करना चाहिए?",
 ar:"هل يجب على قائد السائقين بمفرده فقط إجراء جولة تجريبية قبل بدء عمليات مناولة البضائع للتحقق من مسار القيادة داخل السفينة؟",
  tl:"Dapat bang ang Driver Leader lamang ang magsagawa ng trial run bago magsimula ang cargo operation upang suriin ang driving route sa loob ng barko?",
 tw:"是否只需駕駛組長在車輛操作開始前進行試運行，以確認船內行駛路線？",
  vi:"Có phải chỉ riêng Trưởng nhóm tài xế (Driver Leader) thực hiện chạy thử trước khi thao tác hàng hóa để kiểm tra tuyến đường lái xe bên trong tàu không?"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"Not only the Driver Leader, but all drivers must participate in the trial run. Everyone must confirm the driving route, hazardous areas, and deck height before cargo operations. Accidents can occur if every driver does not understand the correct route.",
 zh:"不仅是司机组长，所有司机都必须参加试运行。在车辆操作开始前，所有人都必须确认行驶路线、危险区域以及甲板高度。如果所有司机都不了解正确路线，就可能发生事故。",
 ms:"Bukan hanya Ketua Pemandu, tetapi semua pemandu mesti menyertai percubaan pemanduan. Semua pemandu perlu mengesahkan laluan pemanduan, kawasan berbahaya dan ketinggian dek sebelum operasi kargo bermula. Kemalangan boleh berlaku jika semua pemandu tidak memahami laluan yang betul.",
 th:"ไม่ใช่เฉพาะหัวหน้าคนขับเท่านั้น แต่คนขับทุกคนต้องเข้าร่วมการทดลองขับ ทุกคนต้องตรวจสอบเส้นทางการขับขี่ จุดอันตราย และความสูงของดาดฟ้าก่อนเริ่มปฏิบัติงานขนถ่ายสินค้า หากคนขับทุกคนไม่เข้าใจเส้นทางที่ถูกต้อง อาจเกิดอุบัติเหตุได้",
 id:"Bukan hanya pemimpin pengemudi, tetapi semua pengemudi harus mengikuti uji coba berkendara. Semua pengemudi harus memastikan rute, area berbahaya, dan tinggi dek sebelum operasi muatan dimulai. Kecelakaan dapat terjadi jika semua pengemudi tidak memahami rute yang benar.",
 hi:"केवल ड्राइवर लीडर ही नहीं, बल्कि सभी ड्राइवरों को ट्रायल रन में भाग लेना चाहिए。 कार्गो संचालन से पहले सभी को ड्राइविंग मार्ग, खतरनाक स्थानों और डेक की ऊँचाई की पुष्टि करनी चाहिए। यदि सभी ड्राइवर सही मार्ग नहीं समझेंगे तो दुर्घटनाएँ हो सकती हैं।",
 ar:"لا يجب أن يشارك قائد السائقين فقط، بل يجب أن يشارك جميع السائقين في الجولة التجريبية. يجب على الجميع التأكد من مسار القيادة، والمناطق الخطرة، وارتفاعات الأسطح قبل بدء عمليات مناولة البضائع. قد تقع حوادث إذا لم يفهم جميع السائقين المسار الصحيح.",
  tl:"Hindi lamang ang Driver Leader ang dapat magsagawa ng trial run. Dapat lumahok ang lahat ng driver upang suriin ang driving route, mga mapanganib na lugar, at taas ng deck bago magsimula ang cargo operation. Maaaring magkaroon ng aksidente kung hindi nauunawaan ng lahat ng driver ang tamang ruta.",
 tw:"不僅是駕駛組長，所有駕駛員都必須參加試運行。在車輛操作開始前，所有人都必須確認行駛路線、危險區域以及甲板高度。如果所有駕駛員都不了解正確路線，就可能發生事故。",
 vi:"Không chỉ Trưởng nhóm tài xế mà tất cả tài xế đều phải tham gia chạy thử. Mọi người phải xác nhận tuyến đường lái xe, các khu vực nguy hiểm và chiều cao boong tàu trước khi thao tác hàng hóa. Tai nạn có thể xảy ra nếu mọi tài xế không nắm rõ tuyến đường đúng."
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
  tl:"Ang istruktura at komposisyon ng deck ay nakadepende sa bawat barko.",
 tw:"甲板的結構和組成因船舶而異。",
 vi:"Cấu trúc và thành phần của boong tàu phụ thuộc vào từng con tàu."
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"The deck structure and composition vary from vessel to vessel. Always check the Stowage Plan and confirm the route during the Trial Run before cargo operations.",
 zh:"不同船舶的甲板结构和组成各不相同。在车辆操作开始前，请务必查看 Stowage Plan，并在 Trial Run 时确认行驶路线。",
 ms:"Struktur dan komposisi dek berbeza mengikut kapal. Sentiasa semak Stowage Plan dan sahkan laluan semasa Trial Run sebelum operasi kargo.",
 th:"โครงสร้างและองค์ประกอบของดาดฟ้าแตกต่างกันไปในแต่ละลำ ควรตรวจสอบ Stowage Plan และยืนยันเส้นทางระหว่าง Trial Run ก่อนเริ่มปฏิบัติงานขนถ่ายสินค้า",
 id:"Struktur dan komposisi dek berbeda pada setiap kapal. Selalu periksa Stowage Plan dan pastikan rute saat Trial Run sebelum operasi muatan dimulai.",
 hi:"हर जहाज़ में डेक की संरचना और बनावट अलग होती है। वाहन संचालन से पहले हमेशा Stowage Plan की जाँच करें और Trial Run के दौरान मार्ग की पुष्टि करें।",
 ar:"يختلف هيكل وتكوين سطح السفينة من سفينة إلى أخرى. احرص دائمًا على مراجعة Stowage Plan والتأكد من مسار القيادة أثناء Trial Run قبل بدء عمليات مناولة البضائع.",
  tl:"Magkakaiba ang istruktura at komposisyon ng deck sa bawat barko. Palaging suriin ang Stowage Plan at kumpirmahin ang ruta sa Trial Run bago magsimula ang cargo operation.",
 tw:"不同船舶的甲板結構和組成各不相同。在車輛操作開始前，請務必查看 Stowage Plan，並在 Trial Run 時確認行駛路線。",
 vi:"Cấu trúc và thành phần boong tàu thay đổi tùy theo từng con tàu. Luôn kiểm tra Sơ đồ xếp hàng (Stowage Plan) và xác nhận tuyến đường trong quá trình Chạy thử (Trial Run) trước khi thao tác hàng hóa."
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
  tl:"Kung pareho ang uri ng barko, hindi magbabago ang taas ng deck.",
 tw:"如果是同一船型，甲板高度就不會改變。",
 vi:"Chiều cao boong tàu sẽ không thay đổi nếu đó là cùng một loại tàu."
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"The deck height changes depending on the stowage plan for each voyage. Always check the Stowage Plan and confirm the deck height during the Trial Run before cargo operations.",
 zh:"甲板高度会因每次航次的积载计划而有所不同。在车辆操作开始前，请务必查看 Stowage Plan，并在 Trial Run 时确认甲板高度。",
 ms:"Ketinggian dek berubah mengikut pelan stowage bagi setiap pelayaran. Sentiasa semak Stowage Plan dan sahkan ketinggian dek semasa Trial Run sebelum operasi kargo.",
 th:"ความสูงของดาดฟ้าจะเปลี่ยนไปตาม Stowage Plan ของแต่ละเที่ยวเรือ ควรตรวจสอบ Stowage Plan และยืนยันความสูงของดาดฟ้าระหว่าง Trial Run ก่อนเริ่มปฏิบัติงานขนถ่ายสินค้า",
 id:"Ketinggian dek dapat berubah sesuai dengan Stowage Plan pada setiap pelayaran. Selalu periksa Stowage Plan dan pastikan tinggi dek saat Trial Run sebelum operasi muatan dimulai.",
 hi:"हर यात्रा में Stowage Plan के अनुसार डेक की ऊँचाई बदल सकती है। वाहन संचालन से पहले हमेशा Stowage Plan की जाँच करें और Trial Run के दौरान डेक की ऊँचाई की पुष्टि करें।",
 ar:"قد يختلف ارتفاع سطح السفينة في كل رحلة وفقًا لـ Stowage Plan. احرص دائمًا على مراجعة Stowage Plan والتأكد من ارتفاع السطح أثناء Trial Run قبل بدء عمليات مناولة البضائع.",
  tl:"Maaaring magbago ang taas ng deck depende sa Stowage Plan ng bawat biyahe. Palaging suriin ang Stowage Plan at kumpirmahin ang taas ng deck sa Trial Run bago magsimula ang cargo operation.",
 tw:"甲板高度會因每次航次的積載計劃而有所不同。在車輛操作開始前，請務必查看 Stowage Plan，並在 Trial Run 時確認甲板高度。",
 vi:"Chiều cao boong tàu thay đổi tùy thuộc vào sơ đồ xếp hàng của từng chuyến đi. Luôn kiểm tra Sơ đồ xếp hàng (Stowage Plan) và xác nhận chiều cao boong tàu trong quá trình Chạy thử (Trial Run) trước khi thao tác hàng hóa."
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
  tl:"Palaging pareho ang anggulo ng stern ramp ng barko.",
 tw:"船舶尾跳板的角度始終相同。",
 vi:"Góc của cầu đuôi tàu (stern ramp) luôn luôn giống nhau."
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"The stern ramp angle changes during cargo operations depending on the vessel's draft, heel, and tidal conditions.",
 zh:"尾跳板的角度会因船舶吃水、横倾以及潮汐情况而变化，在车辆操作过程中也可能随时发生变化。",
 ms:"Sudut stern ramp berubah semasa operasi kargo bergantung pada draft kapal, sengetan (heel) dan keadaan pasang surut.",
 th:"มุมของ Stern Ramp จะเปลี่ยนแปลงระหว่างการปฏิบัติงานขนถ่ายสินค้า ขึ้นอยู่กับกินน้ำของเรือ การเอียงของเรือ และระดับน้ำขึ้นน้ำลง",
 id:"Sudut stern ramp dapat berubah selama operasi muatan tergantung pada draft kapal, kemiringan kapal (heel), dan kondisi pasang surut.",
 hi:"वाहन संचालन के दौरान जहाज़ के ड्राफ्ट, हील (झुकाव) और ज्वार-भाटा की स्थिति के अनुसार स्टर्न रैम्प का कोण बदल सकता है।",
 ar:"قد تتغير زاوية المنحدر الخلفي أثناء عمليات مناولة البضائع تبعًا لغاطس السفينة وميلها وحالة المد والجزر.",
  tl:"Maaaring magbago ang anggulo ng stern ramp habang isinasagawa ang cargo operation depende sa draft, heel, at kondisyon ng pagtaas at pagbaba ng tubig.",
 tw:"尾跳板的角度會因船舶吃水、橫傾以及潮汐情況而變化，在車輛操作過程中也可能隨時發生變化。",
 vi:"Góc cầu đuôi tàu sẽ thay đổi trong quá trình thao tác hàng hóa tùy thuộc vào độ mớn nước (draft), độ nghiêng của tàu (heel) và điều kiện thủy triều."
},

answer:1
},

{
no:15,

question:{
 en:"The gear was shifted to 'D', the brake pedal was firmly depressed, and the driver waited until the distance to the vehicle ahead exceeded 15 m. Is this the correct procedure?",
 zh:"先将挡位挂入 D 挡并踩住刹车，等待与前车距离超过15米。这一车辆操作程序正确吗？",
 ms:"Gear ditukar ke 'D', brek ditekan dengan kuat, dan pemandu menunggu sehingga jarak dengan kenderaan di hadapan melebihi 15 m. Adakah prosedur ini betul?",
 th:"เข้าเกียร์ D เหยียบเบรกไว้ และรอจนกว่าระยะห่างจากรถคันหน้าจะมากกว่า 15 เมตร ขั้นตอนปฏิบัติงานนี้ถูกต้องหรือไม่?",
 id:"Gigi dipindahkan ke posisi 'D', pedal rem diinjak kuat, lalu menunggu hingga jarak dengan kendaraan di depan lebih dari 15 m. Apakah prosedur ini benar?",
 hi:"गियर को 'D' में डालकर ब्रेक दबाए रखा गया और सामने वाले वाहन से 15 मीटर से अधिक दूरी होने तक प्रतीक्षा की गई। क्या यह वाहन संचालन प्रक्रिया सही है?",
 ar:"تم نقل ناقل الحركة إلى الوضع D مع الضغط بقوة على الفرامل، ثم الانتظار حتى تصبح المسافة مع المركبة الأمامية أكثر من 15 مترًا. هل إجراء مناولة المركبة هذا صحيح؟",
  tl:"Inilipat ang gear sa 'D', mahigpit na inapakan ang preno, at naghintay hanggang lumampas sa 15 m ang distansya sa sasakyan sa unahan. Tama ba ang pamamaraang ito?",
 tw:"先將檔位打入 D 檔並踩住煞車，等待與前車距離超過15公尺。這一車輛操作程序正確嗎？",
 vi:"Cần số được chuyển sang vị trí 'D', bàn đạp phanh được nhấn chặt và tài xế chờ cho đến khi khoảng cách với xe phía trước vượt quá 15 m. Quy trình này có đúng không?"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 tw:["正確","錯誤"],
 vi:["Đúng","Sai"]
},

explanation:{
 en:"To prevent collisions caused by unintended vehicle movement, do not shift the gear to 'D' until a sufficient distance from the vehicle ahead has been secured.",
 zh:"为防止因车辆意外移动造成碰撞，在与前车保持足够安全距离之前，切勿在等待时将挡位挂入 D 挡。应在确保车间距后再进行车辆操作。",
 ms:"Bagi mengelakkan perlanggaran akibat kenderaan bergerak secara tidak sengaja, jangan tukar gear ke 'D' sehingga jarak yang mencukupi dengan kenderaan di hadapan dipastikan.",
 th:"เพื่อป้องกันการชนจากการออกตัวโดยไม่ตั้งใจ ห้ามเข้าเกียร์ D จนกว่าจะมีระยะห่างจากรถคันหน้าเพียงพอสำหรับการปฏิบัติงานขนถ่ายสินค้า",
 id:"Untuk mencegah tabrakan akibat kendaraan bergerak tanpa sengaja, jangan pindahkan gigi ke posisi 'D' sampai jarak aman dengan kendaraan di depan telah dipastikan.",
 hi:"गलती से वाहन चल पड़ने के कारण होने वाली टक्कर को रोकने के लिए, सामने वाले वाहन से पर्याप्त दूरी सुनिश्चित होने तक गियर को 'D' में न डालें।",
 ar:"لمنع الاصطدام الناتج عن تحرك المركبة بشكل غير مقصود، لا تنقل ناقل الحركة إلى الوضع D حتى يتم تأمين مسافة كافية وآمنة من المركبة التي أمامك أثناء عمليات مناولة البضائع.",
  tl:"Upang maiwasan ang banggaan dulot ng hindi sinasadyang pag-andar ng sasakyan, huwag ilagay sa 'D' ang gear hangga't hindi pa sapat ang distansya sa sasakyan sa unahan.",
 tw:"為防止因車輛意外移動造成碰撞，在與前車保持足夠安全距離之前，切勿在等待時將檔位打入 D 檔。應在確保車間距後再進行車輛操作。",
 vi:"Để tránh va chạm do xe di chuyển ngoài ý muốn, không chuyển số sang 'D' cho đến khi đã đảm bảo đủ khoảng cách an toàn với xe phía trước."
},

answer:1
},

{
no:16,

question:{
 en:"During B/O, the signalman instructed the vehicle to proceed straight, but the driver turned the steering wheel slightly to the right for safety because he felt it might hit the left pillar.",
 zh:"在 B/O 时，指挥员指示直行，但司机认为可能会撞到左侧立柱，为了安全起见向右稍稍打了一点方向盘。",
 ms:"Semasa B/O, signalman memberi arahan untuk jalan terus, tetapi pemandu memutar stereng sedikit ke kanan demi keselamatan kerana merasakan ia mungkin melanggar tiang sebelah kiri.",
 th:"ระหว่าง B/O สัญญาณมือสั่งให้ขับตรงไป แต่คนขับคิดว่าจะชนเสาด้านซ้าย จึงหักพวงมาลัยไปทางขวาเล็กน้อยเพื่อความปลอดภัย",
 id:"Saat B/O, signalman memberi petunjuk untuk jalan lurus, tetapi pengemudi memutar setir sedikit ke kanan demi keselamatan karena merasa akan menabrak pilar kiri.",
 hi:"B/O के दौरान, सिग्नलमैन ने सीधे जाने का निर्देश दिया था, लेकिन ड्राइवर ने सुरक्षा के लिए स्टीयरिंग को थोड़ा दाईं ओर मोड़ दिया क्योंकि उन्हें लगा कि यह बाएं पिलर से टकरा सकता है।",
 ar:"أثناء B/O، أعطى الموجه (Signalman) تعليمات بالمضي قدمًا إلى الأمام مباشرة، لكن السائق قام بتوجيه عجلة القيادة قليلاً إلى اليمين من أجل السلامة لشعوره بأن المركبة قد تصطدم بالعمود الأيسر.",
   tl:"Habang nagse-signalman, nag-utos ang signalman na dumiretso, ngunit pinihit ng driver ang manibela nang kaunti sa kanan para sa kaligtasan dahil naramdaman niyang tatama ito sa kaliwang poste.",
 vi:"Trong quá trình B/O, người ra tín hiệu (signalman) đã hướng dẫn đi thẳng, nhưng tài xế nghĩ rằng xe có thể va vào trụ bên trái nên đã đánh lái sang phải một chút để đảm bảo an toàn.",
 tw:"在 B/O 時，指揮員指示直行，但駕駛員認為可能會撞到左側立柱，為了安全起見向右稍稍打了一點方向盤。"
},

choices:{
 en:["Correct","Wrong"],
 zh:["正确","错误"],
 ms:["Betul","Salah"],
 th:["ถูกต้อง","ไม่ถูกต้อง"],
 id:["Benar","Salah"],
 hi:["सही","गलत"],
 ar:["صحيح","خطأ"],
 tl:["Tama","Mali"],
 vi:["Đúng","Sai"],
 tw:["正確","錯誤"]
},

explanation:{
 en:"Always follow the signalman's instructions. If you feel something is wrong, do not move the vehicle on your own judgment. Stop the vehicle completely, call the signalman, and confirm.",
 zh:"务必始终遵循指挥员的指示。如果感觉有异常，切勿自行判断移动车辆。必须将车辆完全停止后，呼叫指挥员进行确认。",
 ms:"Sentiasa patuhi arahan signalman. Jika berasa ada yang tidak kena, jangan gerakkan kenderaan mengikut pertimbangan sendiri. Berhentikan kenderaan sepenuhnya, panggil signalman, dan buat pengesahan.",
 th:"ต้องปฏิบัติตามคำสั่งของสัญญาณมือเสมอ หากรู้สึกว่ามีสิ่งผิดปกติ อย่าเคลื่อนรถตามการตัดสินใจของตนเอง ให้หยุดรถอย่างสมบูรณ์ เรียกสัญญาณมือ และทำการตรวจสอบ",
 id:"Selalu ikuti petunjuk dari signalman. Jika merasa ada yang tidak beres, jangan menggerakkan kendaraan atas keputusan sendiri. Hentikan kendaraan secara total, panggil signalman, dan lakukan konfirmasi.",
 hi:"हमेशा सिग्नलमैन के निर्देशों का पालन करें। यदि आपको कुछ असामान्य लगता है, तो अपने निर्णय से वाहन न चलाएँ। वाहन को पूरी तरह से रोकें, सिग्नलमैन को बुलाएँ और पुष्टि करें।",
 ar:"اتبع دائمًا تعليمات الموجه (Signalman). إذا شعرت بأي أمر غير طبيعي، فلا تحرك المركبة بناءً على تقديرك الشخصي. أوقف المركبة تمامًا، واستدعِ الموجه للتأكد.",
  tl:"Palaging sundin ang mga tagubilin ng signalman. Kung nakakaramdam ng hindi tama, huwag galawin ang sasakyan sa sariling pagpapasya. Ganap na ihinto ang sasakyan, tawagin ang signalman, at kumpirmahin.",
 vi:"Luôn tuân thủ hướng dẫn của người ra tín hiệu (signalman). Nếu cảm thấy có điều bất thường, không tự ý di chuyển xe theo phán đoán cá nhân. Hãy dừng xe hoàn toàn, gọi người ra tín hiệu và xác nhận lại.",
 tw:"務必始終遵循指揮員的指示。如果感覺有異常，切勿自行判斷移動車輛。必須將車輛完全停止後，呼叫指揮員進行確認。"
},

answer:1
},

{
no:17,

question:{
 en:"You discovered damage during the round check before entering the vehicle. What is your next action?",
 zh:"在乘车前进行巡视检查（Round check）时发现了划痕。你的下一步行动是什么？",
 ms:"Anda menemui kerosakan semasa pusingan pemeriksaan (round check) sebelum masuk ke dalam kenderaan. Apakah tindakan anda yang seterusnya?",
 th:"คุณพบรอยความเสียหายระหว่างการตรวจรอบ车（Round check）ก่อนขึ้นรถ Action ต่อไปของคุณคืออะไร?",
 id:"Anda menemukan kerusakan saat round check sebelum masuk ke kendaraan. Apa tindakan Anda selanjutnya?",
 hi:"वाहन में सवार होने से पहले राउंड चेक (round check) के दौरान आपको क्षति (खरोंच) मिली। आपकी अगली कार्रवाई क्या होगी?",
 ar:"اكتشفت وجود تفقد/خدش أثناء جولة الفحص (Round check) قبل الصعود إلى المركبة. ما هو تصرفك التالي؟",
  tl:"Nakatagpo ka ng sira o gasgas sa ginawang round check bago sumakay sa sasakyan. Ano ang susunod mong gagawin?",
 vi:"Bạn phát hiện vết xước/hư hỏng trong quá trình kiểm tra xung quanh (round check) trước khi lên xe. Hành động tiếp theo của bạn là gì?",
 tw:"在乘車前進行巡視檢查（Round check）時發現了劃痕。你的下一步行動是什麼？"
},

choices:{
 en:["Load as it is","Report to the Hatch Boss"],
 zh:["直接装载","向舱口长（Hatch Boss）报告"],
 ms:["Muat terus seperti sedia ada","Laporkan kepada Hatch Boss"],
 th:["โหลดลงเรือตามปกติ","รายงานต่อ Hatch Boss"],
 id:["Langsung muat begitu saja","Lapor ke Hatch Boss"],
 hi:["वैसे ही लोड करें","हैच बॉस (Hatch Boss) को रिपोर्ट करें"],
 ar:["تحميلها كما هي","الإبلاغ إلى مسؤول العنبر (Hatch Boss)"],
 tl:["Ikarsona na lang nang diritso","I-report sa Hatch Boss"],
 vi:["Cứ thế bốc hàng lên","Báo cáo cho Trưởng khoang (Hatch Boss)"],
 tw:["直接裝載","向艙口長（Hatch Boss）報告"]
},

explanation:{
 en:"Always report and record any damage discovered before boarding (before loading or discharging). Otherwise, you may be held responsible for causing the damage.",
 zh:"在乘车前（装船前、卸船前）发现的任何损伤必须进行报告并记录。如果不报告，您可能会被指责为造成该损伤的责任人。",
 ms:"Sebarang kerosakan yang ditemui sebelum masuk ke dalam kenderaan (sebelum muat atau bongkar) mesti dilaporkan dan direkodkan. Jika tidak, anda mungkin dipertanggungjawabkan atas kerosakan tersebut.",
 th:"ความเสียหายที่พบก่อนขึ้นรถ (ก่อนการโหลดขึ้นเรือ或การขนถ่ายลงเรือ) ต้องได้รับการรายงานและบันทึกไว้เสมอ มิฉะนั้น คุณอาจต้องรับผิดชอบในฐานะผู้ทำให้เกิดความเสียหายนั้น",
 id:"Kerusakan yang ditemukan sebelum masuk ke kendaraan (sebelum pemuatan atau pembongkaran) harus selalu dilaporkan dan dicatat. Jika tidak, Anda dapat dimintai pertanggungjawaban atas kerusakan tersebut.",
 hi:"सवार होने से पहले (लोडिंग या अनलोडिंग से पहले) मिली किसी भी क्षति की रिपोर्ट करना और रिकॉर्ड करना अनिवार्य है। अन्यथा, उस क्षति को पहुँचाने के लिए आपको जिम्मेदार ठहराया जा सकता है।",
 ar:"يجب دائمًا الإبلاغ عن أي تلفيات يتم اكتشافها قبل الصعود إلى المركبة (قبل التحميل أو التفريغ) وتسجيلها. وإلا، فقد تُحَمَّل المسؤولية عن التسبب في ذلك التلف.",
  tl:"Laging i-report at itala ang anumang pinsalang natagpuan bago sumakay (bago magkarga o magbaba). Kung hindi, baka ikaw ang papanagutin sa pagkakaron ng pinsalang iyon.",
 vi:"Bất kỳ hư hỏng nào được phát hiện trước khi lên xe (trước khi xếp hàng hoặc dỡ hàng) đều phải được báo cáo và ghi lại. Nếu không, bạn có thể bị chịu trách nhiệm vì đã gây ra hư hỏng đó.",
 tw:"在乘車前（裝船前、卸船前）發現的任何損傷必須進行報告並記錄。如果不報告，您可能會被指責為造成該損傷的責任人。"
},

answer:1
},

{
no:18,

question:{
    en:"When the vehicle ahead is driving on the ramp, which is the correct action?",
    zh:"当前车正在跳板（Ramp）上行驶时，哪种行为是正确的？",
    ms:"Apabila kenderaan di hadapan sedang memandu di atas ramp, apakah tindakan yang betul?",
    th:"เมื่อรถคันหน้ากำลังขับอยู่บนทางลาด (Ramp) Action ที่ถูกต้องคือข้อใด?",
    id:"Saat kendaraan di depan sedang melintas di atas ramp, manakah tindakan yang benar?",
    hi:"जब आगे वाला वाहन रैम्प पर चल रहा हो, तो सही कार्रवाई कौन-सी है?",
    ar:"عندما تكون المركبة التي أمامك تسير على المنحدر (Ramp)، ما هو التصرف الصحيح؟",
    tl:"Kapag ang sasakyan sa unahan ay tumatakbo sa ramp, alin ang tamang gagawin?",
    vi:"Khi xe phía trước đang di chuyển trên cầu dẫn (ramp), hành động nào là đúng?",
    tw:"當前車正在跳板（Ramp）上行駛時，哪種行為是正確的？"
},

choices:{
    en:["Follow the vehicle ahead immediately","Wait until the vehicle ahead finishes driving on the ramp"],
    zh:["直接跟在前面车辆后面","等待前车完全驶离跳板"],
    ms:["Terus mengikut kenderaan di hadapan","Tunggu sehingga kenderaan di hadapan selesai melintasi ramp"],
    th:["ขับตามรถคันหน้าไปทันที","รอจนกว่ารถคันหน้าจะขับผ่านทางลาดเสร็จสิ้น"],
    id:["Langsung mengikuti kendaraan di depan","Tunggu hingga kendaraan di depan selesai melintasi ramp"],
    hi:["तुरंत आगे वाले वाहन के पीछे जाएँ","जब तक आगे वाला वाहन रैम्प पार न कर ले तब तक प्रतीक्षा करें"],
    ar:["متابعة المركبة التي أمامك مباشرة","الانتظار حتى تنتهي المركبة التي أمامك من عبور المنحدر"],
    tl:["Sumunod agad sa sasakyan sa unahan","Maghintay hanggang sa makalampas ang sasakyan sa unahan sa ramp"],
    vi:["Đi theo xe phía trước ngay lập tức","Chờ cho đến khi xe phía trước đi hết cầu dẫn"],
    tw:["直接跟在前面車輛後面","等待前車完全駛離跳板"]
},

explanation:{
    en:"Please wait until the vehicle ahead finishes driving on the ramp. Only one vehicle is allowed on the ramp at a time. An unexpected malfunction may cause the vehicle ahead to stop or roll backward on the ramp.",
    zh:"请等待前方车辆完全驶离跳板。跳板上每次仅限一台车辆行驶。如果发生意外故障，前方车辆可能会在跳板上停止或向后下滑。",
    ms:"Sila tunggu sehingga kenderaan di hadapan selesai melintasi ramp. Hanya satu kenderaan dibenarkan di atas ramp pada satu-satu masa. Masalah teknikal yang tidak dijangka boleh menyebabkan kenderaan di hadapan terhenti atau mengundur ke belakang.",
    th:"กรุณารอจนกว่ารถคันหน้าจะขับผ่านทางลาดเสร็จสิ้น อนุญาตให้รถวิ่งบนทางลาดได้ครั้งละ 1 คันเท่านั้น หากเกิดขัดข้องโดย kคาดไม่ถึง รถคันหน้าอาจหยุดหรือไหลถอยหลังลงมาบนทางลาดได้",
    id:"Harap tunggu hingga kendaraan di depan selesai melintasi ramp. Kendaraan yang melintas di atas ramp hanya diperbolehkan 1 unit dalam satu waktu. Gangguan tak terduga dapat menyebabkan kendaraan di depan berhenti atau mundur di atas ramp.",
    hi:"कृपया तब तक प्रतीक्षा करें जब तक कि आगे वाला वाहन रैम्प पार न कर ले। रैम्प पर एक समय में केवल 1 वाहन चलने की अनुमति है। किसी अप्रत्याशित खराबी के कारण आगे वाला वाहन रैम्प पर रुक सकता है या पीछे की ओर आ सकता है।",
    ar:"يرجى الانتظار حتى تنتهي المركبة التي أمامك من عبور المنحدر. يُسمح بمرور مركبة واحدة فقط على المنحدر في كل مرة. قد تؤدي الأعطال غير المتوقعة إلى توقف المركبة التي أمامك أو تراجعها إلى الخلف على المنحدر.",
    tl:"Mangyaring maghintay hanggang sa makalampas ang sasakyan sa unahan sa ramp. Isang sasakyan lamang ang pinapayagang tumakbo sa ramp sa bawat pagkakataon. Ang hindi inaasahang sira ay maaaring magdulot ng paghinto o pag-atras ng sasakyan sa unahan habang nasa ramp.",
    vi:"Vui lòng chờ cho đến khi xe phía trước đi hết cầu dẫn. Chỉ cho phép từng xe một di chuyển trên cầu dẫn. Sự cố bất ngờ có thể khiến xe phía trước bị dừng lại hoặc trôi lùi xuống trên cầu dẫn.",
    tw:"請等待前方車輛完全駛離跳板。跳板上每次僅限一台車輛行駛。如果發生意外故障，前方車輛可能會在跳板上停止或向後下滑。"
},

answer:1
},

{
no:19,

question:{
    en:"What should you do if you make a mistake in the driving route?",
    zh:"如果在行驶过程中走错了路线，应该怎么做？",
    ms:"Apakah yang perlu anda lakukan jika tersilap laluan semasa memandu?",
    th:"เมื่อขับรถผิดเส้นทาง ควรทำอย่างไร?",
    id:"Apa yang harus Anda lakukan jika salah mengambil rute saat mengemudi?",
    hi:"ड्राइविंग के दौरान रास्ता गलत होने पर आपको क्या करना चाहिए?",
    ar:"ماذا يجب عليك أن تفعل إذا أخطأت في مسار القيادة؟",
    tl:"Ano ang dapat mong gawin kapag nagkamali ka ng ruta habang nagmamaneho?",
    vi:"Bạn nên làm gì nếu đi sai tuyến đường khi đang di chuyển?",
    tw:"如果在行駛過程中走錯了路線，應該怎麼做？"
},

choices:{
    en:["Stop and call for help","U-turn and return to the correct route"],
    zh:["停车并呼叫人员","掉头（Uターン）返回正确路线"],
    ms:["Berhenti dan panggil bantuan","Buat pusingan U dan kembali ke laluan yang betul"],
    th:["หยุดรถและเรียกคนมาช่วย","กลับรถ (U-turn) เพื่อกลับเข้าสู่เส้นทางที่ถูกต้อง"],
    id:["Berhenti dan panggil bantuan","Putar balik (U-turn) dan kembali ke rute yang benar"],
    hi:["गाड़ी रोकें और सहायता के लिए किसी को बुलाएँ","यू-टर्न (U-turn) लें और सही रास्ते पर वापस आएँ"],
    ar:["التوقف واستدعاء المساعدة","الاستدارة (U-turn) والعودة إلى المسار الصحيح"],
    tl:["Huminto at tumawag ng tulong","Mag-U-turn at bumalik sa tamang ruta"],
    vi:["Dừng xe và gọi người hỗ trợ","Quay đầu xe (U-turn) và quay lại đúng tuyến đường"],
    tw:["停車並呼叫人員","迴轉（U-turn）返回正確路線"]
},

explanation:{
    en:"Making a U-turn is dangerous. Always return to the correct route under the instructions of the signalman.",
    zh:"掉头是十分危险的行为。请务必在指挥员的指示下返回正确路线。",
    ms:"Pusingan U adalah berbahaya. Sentiasa kembali ke laluan yang betul di bawah arahan signalman.",
    th:"การกลับรถเป็นสิ่งอันตราย ต้องกลับเข้าสู่เส้นทางที่ถูกต้องภายใต้คำสั่งของสัญญาณมือเสมอ",
    id:"Melakukan putar balik (U-turn) sangat berbahaya. Selalu kembali ke rute yang benar di bawah petunjuk dari signalman.",
    hi:"यू-टर्न लेना खतरनाक है। हमेशा सिग्नलमैन के निर्देशों के तहत ही सही रास्ते पर वापस आएँ।",
    ar:"إجراء الاستدارة (U-turn) أمر خطير. عُد دائمًا إلى المسار الصحيح تحت تعليمات وإرشادات الموجه (Signalman).",
    tl:"Delikado ang mag-U-turn. Palaging bumalik sa tamang ruta sa ilalim ng gabay at tagubilin ng signalman.",
    vi:"Quay đầu xe là hành động nguy hiểm. Luôn quay lại đúng tuyến đường theo hướng dẫn của người ra tín hiệu (signalman).",
    tw:"迴轉是十分危險的行為。請務必在指揮員的指示下返回正確路線。"
},

answer:0
},

{
no:20,

question:{
    en:"Turn on the headlights during Break Out (B/O).",
    zh:"在 Break Out (B/O) 时打开前大灯。",
    ms:"Hidupkan lampu hadapan semasa Break Out (B/O).",
    th:"เปิดไฟหน้าเมื่อทำ Break Out (B/O)",
    id:"Nyalakan lampu depan saat Break Out (B/O).",
    hi:"ब्रेक आउट (Break Out) के दौरान हेडलाइट्स ऑन करें।",
    ar:"قم بتشغيل المصابيح الأمامية أثناء Break Out (B/O).",
    tl:"I-on ang mga headlight habang nagbe-Break Out (B/O).",
    vi:"Bật đèn pha khi làm Break Out (B/O).",
    tw:"在 Break Out (B/O) 時打開前大燈。"
},

choices:{
    en:["Correct","Wrong"],
    zh:["正确","错误"],
    ms:["Betul","Salah"],
    th:["ถูกต้อง","ไม่ถูกต้อง"],
    id:["Benar","Salah"],
    hi:["सही","गलत"],
    ar:["صحيح","خطأ"],
    tl:["Tama","Mali"],
    vi:["Đúng","Sai"],
    tw:["正確","錯誤"]
},

explanation:{
    en:"Always turn on the headlights to improve visibility and to inform people around that the vehicle is about to move.",
    zh:"请务必开启前大灯，以提高能见度，并向周围人员提示车辆即将移动。",
    ms:"Sentiasa hidupkan lampu hadapan untuk meningkatkan jarak penglihatan dan memberi tahu orang di sekeliling bahawa kenderaan akan bergerak.",
    th:"ต้องเปิดไฟหน้าเสมอเพื่อเพิ่มการมองเห็น และแจ้งให้คนรอบข้างทราบว่ารถกำลังจะเคลื่อนตัว",
    id:"Selalu nyalakan lampu depan untuk meningkatkan visibilitas dan memberi tahu orang-orang di sekitar bahwa kendaraan akan bergerak.",
    hi:"दृश्यता (visibility) में सुधार करने और आसपास के लोगों को यह सूचित करने के लिए कि वाहन हिलने वाला है, हेडलाइट्स हमेशा ऑन रखें।",
    ar:"قم بتشغيل المصابيح الأمامية دائمًا لتحسين الرؤية ولإعلام الأشخاص المحيطين بأن المركبة على وشك التحرك.",
    tl:"Palaging i-on ang mga headlight upang mapabuti ang kakayahang makakita at ipaalam sa mga tao sa paligid na moving na ang sasakyan.",
    vi:"Luôn bật đèn pha để cải thiện tầm nhìn và thông báo cho mọi người xung quanh biết rằng xe sắp di chuyển.",
    tw:"請務必開啟前大燈，以提高能見度，並向周圍人員提示車輛即將移動。"
},

answer:0
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

    document.getElementById("nameLabel").innerText =
    text[language].name;

    document.getElementById("startBtn").innerText =
    text[language].start;

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

"<img src='images/certificate_bg.png' id='certBg'>" +

"<div id='certText1'>This certifies that</div>" +

"<div id='certName'>" + playerName + "</div>" +

"<div id='certText2'>has successfully completed</div>" +

"<div id='certCourse'>K-Learning for Driver</div>" +

"<div id='certText3'>with a perfect score of 20/20</div>" +

"<div id='certScore'>100%</div>" +

"<div id='certDate'>Issue Date : " + date + "</div>" +

"<div id='certSign'><img src='images/signature.png'></div>";

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