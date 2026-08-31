import { Chapter, GlossaryItem, ReferenceItem } from '../types';

export const ASK_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "Faham & Kenali Tekanan dalam Hidup",
    slug: "faham-kenali-tekanan",
    tagline: "Mengenal pasti punca tekanan, tanda-tanda stres, serta ancaman ejekan & pembulian siber",
    themeColor: "sky",
    estimatedMinutes: 10,
    featuredStudent: {
      name: "Adam",
      role: "Pelajar Tingkatan 3 Bestari (Umur 15 Tahun)",
      ethnicity: "Melayu",
      avatarKey: "adam",
      quote: "Tekanan itu norma hidup remaja, tetapi apabila kita faham puncanya—sama ada kerja sekolah atau ejekan rakan—kita boleh bertindak sebelum emosi terjejas!"
    },
    summary: "Dalam bab ini, murid Tingkatan 3 akan memahami konsep tekanan (stres), membezakan eustres (tekanan positif) dan distres (tekanan negatif), mengenali tanda-tanda fizikal & emosi, serta kesan pembulian terhadap kesihatan mental.",
    learningOutcomes: [
      "Menerangkan maksud tekanan (stres) serta perbezaan antara eustres dan distres dalam kehidupan harian.",
      "Mengenal pasti indikator fizikal, emosi, dan tingkah laku apabila mengalami tekanan berlebihan.",
      "Menganalisis kaitan antara gangguan rakan sebaya (ejekan, buli fizikal/siber) dengan tingkat tekanan perasaan."
    ],
    sections: [
      {
        id: "sec-1-1",
        title: "1.1 Memahami Konsep Tekanan (Stres) & Anksietas",
        subtitle: "Tindak Balas Semula Jadi Badan Terhadap Cabaran & Pentaksiran Sekolah",
        audioText: "Tekanan atau stres ialah tindak balas fizikal dan emosi terhadap tuntutan harian seperti pentaksiran sekolah, harapan keluarga, dan hubungan rakan sebaya.",
        paragraphs: [
          "Sebagai murid Tingkatan 3 berumur 15 tahun, anda menghadapi pelbagai perubahan cabaran pembelajaran, tugasan sekolah, dan persediaan penilaian sekolah.",
          "Stres terbahagi kepada dua jenis utama: Eustres (tekanan positif yang memberi motivasi untuk belajar) dan Distres (tekanan negatif yang menyebabkan keletihan dan kebimbangan berlebihan)."
        ],
        infographicPoints: [
          {
            title: "Eustres (Tekanan Positif)",
            description: "Tekanan jangka pendek yang memberi dorongan untuk menyiapkan tugasan sekolah tepat pada waktunya.",
            icon: "Sparkles",
            tag: "Motivasi",
            color: "emerald"
          },
          {
            title: "Distres (Tekanan Negatif)",
            description: "Tekanan berpanjangan yang menyebabkan rasa gelisah, letih, dan panik apabila menghadapi masalah.",
            icon: "Bug",
            tag: "Bahaya",
            color: "rose"
          },
          {
            title: "Anksietas (Kebimbangan)",
            description: "Rasa risau atau takut melampau terhadap sesuatu yang belum berlaku semasa persediaan pembelajaran.",
            icon: "Search",
            tag: "Emosi",
            color: "amber"
          }
        ],
        keyTakeaway: "Eustres membakar semangat, manakala distres perlu diurus sebelum mengganggu kesihatan diri."
      },
      {
        id: "sec-1-2",
        title: "1.2 Tanda-tanda Fizikal, Emosi & Tingkah Laku Stres",
        subtitle: "Isyarat Tubuh dan Minda yang Mesti Diambil Perhatian",
        audioText: "Tubuh dan fikiran kita memberi amaran apabila tekanan mula melebihi kapasiti kebiasaan.",
        paragraphs: [
          "Bila mengalami tekanan yang tinggi, tubuh menunjukkan gejala melalui tiga saluran utama:"
        ],
        bulletPoints: [
          "🧠 Tanda Emosi: Mudah marah, rasa kecewa, risau melampau, dan rasa sunyi atau tidak difahami.",
          "💓 Tanda Fizikal: Sakit kepala, otot tegang pada leher, jantung berdegup pantas, dan kerap rasa letih.",
          "🚶 Tanda Tingkah Laku: Mengasingkan diri daripada kawan-kawan, hilang selera makan atau makan berlebihan, dan sukar tidur malam."
        ],
        dialogue: [
          {
            speaker: "Adam",
            avatar: "adam",
            text: "Cikgu, kadang-kadang bila malam sebelum minggu penilaian sekolah, saya rasa sesak dada dan susah nak tidur. Adakah itu tanda distres?",
            type: "example"
          },
          {
            speaker: "Cikgu Hafiz",
            avatar: "cikgu",
            text: "Ya Adam. Itu ialah isyarat fizikal kecemasan minda. Penting untuk kamu berehat seketika dan amalkan pernafasan mendalam!",
            type: "advice"
          }
        ]
      },
      {
        id: "sec-1-3",
        title: "1.3 Hubungan Tekanan dengan Ejekan & Pembulian (Cyberbullying)",
        subtitle: "Menyedar Kesan Buli Terhadap Emosi Murid Sekolah",
        audioText: "Ejekan fizikal, panggilan nama gelaran, pulau-memulau, dan cemuhan di media sosial adalah bentuk buli yang mencetuskan tekanan emosi amat berat.",
        paragraphs: [
          "Buli bukan sekadar pergaduhan fizikal. Buli lisan (ejekan, fitnah) dan buli siber (mesej jelik, penyebaran foto tanpa kebenaran) sering membuat mangsa berasa malu dan gelisah.",
          "Murid yang dibuli berhak mendapat persekitaran sekolah yang selamat dan bebas daripada ancaman."
        ],
        keyTakeaway: "Jangan sesekali menganggap ejekan sebagai gurauan jika ia menyakiti perasaan rakan sekolah!"
      }
    ],
    activity: {
      type: "analisis-tekanan",
      title: "Aktiviti Interaktif: Analyzer Punca Tekanan & Indikator Stres",
      description: "Uji kepekaan anda mengelaskan punca tekanan serta indikator emosi dan fizikal secara tepat!",
      instructions: "Kelaskan punca tekanan harian dan pilih tindakan positif yang patut diambil mengikut situasi."
    },
    quiz: [
      {
        id: "q1-1",
        scenario: "Adam rasa cemas dan letih kerana dihujani pelbagai kerja rumah dan ejekan rakan di media sosial.",
        question: "Apakah jenis tekanan yang dialami oleh Adam ini?",
        options: [
          { id: "a", text: "Eustres (Tekanan Positif)", isCorrect: false, explanation: "Salah. Eustres memberi motivasi, bukan rasa letih dan cemas." },
          { id: "b", text: "Distres (Tekanan Negatif)", isCorrect: true, explanation: "Tepat! Distres berlaku apabila tekanan berlebihan sehingga menjejas kesihatan emosi dan fizikal." },
          { id: "c", text: "Stres Sifar", isCorrect: false, explanation: "Salah. Adam jelas menunjukkan gejala stres." },
          { id: "d", text: "Hiper-Eustres", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q1-2",
        scenario: "Seorang rakan sekelas kerap dipulaukan dan dilemparkan kata-kata ejekan fizikal di dewan sekolah.",
        question: "Manakah antara berikut tindakan yang SALAH jika anda menyaksikan situasi ini?",
        options: [
          { id: "a", text: "Melaporkan kejadian kepada Guru Bimbingan dan Kaunseling.", isCorrect: false, explanation: "Tindakan ini betul." },
          { id: "b", text: "Mengabaikan kejadian dan mentertawakan rakan tersebut bersama pembuli.", isCorrect: true, explanation: "Tepat! Mentertawakan atau mengabaikan menjadikan anda sorang pembantu buli (bystander pasif)." },
          { id: "c", text: "Memberikan sokongan moral kepada mangsa buli.", isCorrect: false, explanation: "Tindakan ini betul." },
          { id: "d", text: "Menegur pembuli secara sopan dan tegas jika selamat.", isCorrect: false, explanation: "Tindakan ini betul." }
        ]
      },
      {
        id: "q1-3",
        scenario: "Antara berikut, manakah merupakan tanda FIZIKAL seseorang mengalami stres berlebihan?",
        question: "Pilih tanda fizikal yang tepat:",
        options: [
          { id: "a", text: "Sakit kepala dan degupan jantung terlalu pantas", isCorrect: true, explanation: "Tepat! Jantung berdegup laju dan sakit kepala ialah respons fizikal badan terhadap stres." },
          { id: "b", text: "Rasa gembira melampau sepanjang hari", isCorrect: false, explanation: "Salah. Ini emosi positif." },
          { id: "c", text: "Kecekapan daya ingatan meningkat 100%", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "Gigi memanjang secara automatik", isCorrect: false, explanation: "Salah." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Kenali & Urus Perasaan Sendiri",
    slug: "kenali-urus-perasaan-sendiri",
    tagline: "Kecerdasan emosi (EQ), teknik kesedaran kendiri (Grounding 5-4-3-2-1) & pengurusan marah",
    themeColor: "emerald",
    estimatedMinutes: 10,
    featuredStudent: {
      name: "Siti",
      role: "Pelajar Tingkatan 3 Cerdas (Umur 15 Tahun)",
      ethnicity: "Melayu",
      avatarKey: "siti",
      quote: "Semua emosi adalah sah—marah, sedih, gelisah. Perkara utama ialah bagaimana kita memilih untuk menyalurkannya tanpa melukai diri atau rakan lain!"
    },
    summary: "Fahami konsep Kecerdasan Emosi (EQ), amalkan Roda Emosi untuk menamakan perasaan, dan pelajari Teknik Grounding 5-4-3-2-1 serta latihan pernafasan diagfragma untuk menenangkan fikiran.",
    learningOutcomes: [
      "Menjelaskan konsep Kecerdasan Emosi (EQ) dan pentingnya kesedaran kendiri.",
      "Menguasai Teknik Grounding 5-4-3-2-1 untuk mengawal impulsif dan keresahan tumpuan.",
      "Mengamalkan strategi pengurusan marah dan kesedihan secara berhemah dan selamat."
    ],
    sections: [
      {
        id: "sec-2-1",
        title: "2.1 Kecerdasan Emosi (EQ) & Roda Perasaan",
        subtitle: "Keupayaan Memahami dan Mengawal Emosi Diri",
        audioText: "Kecerdasan emosi atau EQ ialah kebolehan mengenali, memahami, dan mengurus perasaan sendiri serta empati terhadap emosi orang lain.",
        paragraphs: [
          "Banyak konflik dan kes buli berlaku apabila seseorang tidak mampu mengawal perasaan marah lalu melepaskannya kepada orang lain.",
          "Dengan mengamalkan Roda Emosi, murid boleh menamakan perasaan secara spesifik: bukannya sekadar 'rasa teruk', tetapi 'rasa diabaikan', 'rasa cemas', atau 'rasa tidak dihargai'."
        ],
        infographicPoints: [
          {
            title: "Kesedaran Kendiri",
            description: "Memahami emosi diri sendiri pada waktu tertentu.",
            icon: "Search",
            tag: "EQ Asas",
            color: "emerald"
          },
          {
            title: "Pengawalan Kendiri",
            description: "Mampu menahan emosi marah daripada meletup secara agresif.",
            icon: "CheckSquare",
            tag: "Kawalan",
            color: "amber"
          },
          {
            title: "Empati Rakan",
            description: "Mempunyai sifat prihatin terhadap perasaan dan penderitaan rakan.",
            icon: "Sparkles",
            tag: "Saling Menghormati",
            color: "indigo"
          }
        ],
        keyTakeaway: "Mengetahui nama emosi anda ialah langkah pertama untuk mengawalnya."
      },
      {
        id: "sec-2-2",
        title: "2.2 Teknik Grounding 5-4-3-2-1 & Pernafasan 4-7-8",
        subtitle: "Menstabilkan Minda dalam Masa 60 Saat",
        audioText: "Apabila emosi panik atau marah menyerang, amalkan teknik sensorik 5-4-3-2-1 untuk membawa minda kembali ke saat ini.",
        paragraphs: [
          "Teknik Grounding 5-4-3-2-1 membantu mengalihkan tumpuan minda daripada fikiran negatif yang berserabut kepada pancaindera fizikal:"
        ],
        bulletPoints: [
          "👀 5 Perkara yang anda NAMPAK di sekeliling anda (contoh: meja, pemadam, tingkap).",
          "✋ 4 Perkara yang anda boleh SENTUH atau RASAI (contoh: fabrik baju sekolah, permukaan meja).",
          "👂 3 Perkara yang anda DENGAR (contoh: kipas angin, guruh di luar, bunyi tapak kaki).",
          "👃 2 Perkara yang anda BISA BAU (contoh: wangi pemadam, bau kertas buku).",
          "👅 1 Perkara yang anda BOLEH RASA (contoh: rasa air minuman atau rasa selesa pernafasan)."
        ],
        dialogue: [
          {
            speaker: "Siti",
            avatar: "siti",
            text: "Bila rasa nak marah sangat sebab ada yang mengejek, saya tarik nafas dalam-dalam 4 saat, tahan 7 saat, dan hembus perlahan 8 saat.",
            type: "example"
          },
          {
            speaker: "Cikgu Hafiz",
            avatar: "cikgu",
            text: "Syabas Siti! Itu dipanggil pernafasan diagfragma yang mengaktifkan sistem saraf bertenang badan kita.",
            type: "advice"
          }
        ]
      },
      {
        id: "sec-2-3",
        title: "2.3 Strategi Pengurusan Marah secara Sihat",
        subtitle: "Mengelakkan Pertengkaran Fizikal dan Lisan Jelik",
        audioText: "Marah ialah emosi semula jadi, tetapi meluahkan marah dengan membuli atau menengking adalah tindakan salah.",
        paragraphs: [
          "Gunakan kaedah 'Time-Out' 10 saat sebelum bertindak balas apabila berasa terlalu marah atau dihina oleh orang lain."
        ],
        keyTakeaway: "Kawal reaksi anda. Kebijaksanaan anda diukur daripada sejauh mana anda mampu mengawal kemarahan."
      }
    ],
    activity: {
      type: "teknik-grounding",
      title: "Aktiviti Interaktif: Simulator Teknik Grounding 5-4-3-2-1 & Diari Emosi",
      description: "Jalankan simulasi kesedaran sensorik 5-4-3-2-1 dan catat diari emosi harian anda secara interaktif!",
      instructions: "Ikuti panduan pacer pernafasan dan lengkapkan 5 sensor amalan grounding."
    },
    quiz: [
      {
        id: "q2-1",
        scenario: "Siti berasa sangat cemas dan dadanya berdebar pantas sebelum pembentangan tugasan kelas.",
        question: "Apakah kaedah sensorik yang sesuai diamalkan Siti untuk menenangkan minda serta merta?",
        options: [
          { id: "a", text: "Menjerit di hadapan kawan-kawan", isCorrect: false, explanation: "Salah. Ini mengganggu orang lain." },
          { id: "b", text: "Teknik Grounding 5-4-3-2-1 dan pernafasan mendalam", isCorrect: true, explanation: "Tepat! Teknik Grounding memfokuskan semula pancaindera dan mengurangkan cemas." },
          { id: "c", text: "Lari keluar dari kawasan sekolah", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "Membuli murid di tingkatan 1", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q2-2",
        scenario: "Dalam Teknik Grounding 5-4-3-2-1, apakah yang diwakili oleh angka '5'?",
        question: "Nombor 5 mewakili:",
        options: [
          { id: "a", text: "5 perkara yang anda NAMPAK di sekeliling anda", isCorrect: true, explanation: "Tepat! 5 perkara visual di sekeliling." },
          { id: "b", text: "5 barang yang anda beli di kantin", isCorrect: false, explanation: "Salah." },
          { id: "c", text: "5 lagu kegemaran anda", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "5 perkataan kesat", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q2-3",
        scenario: "Apakah kelebihan utama seseorang yang mempunyai Kecerdasan Emosi (EQ) yang tinggi?",
        question: "Kelebihan utama EQ tinggi:",
        options: [
          { id: "a", text: "Mampu mengawal kemarahan dan berempati terhadap perasaan orang lain", isCorrect: true, explanation: "Tepat! EQ merangkumi kawalan diri dan empati." },
          { id: "b", text: "Boleh membaca fikiran orang lain tanpa berborak", isCorrect: false, explanation: "Salah." },
          { id: "c", text: "Suka menyebarkan gosip dan fitnah di media sosial", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "Tidak pernah berasa sedih sepanjang hidup", isCorrect: false, explanation: "Salah. EQ bukan bermaksud tiada emosi tetapi bijak mengurusnya." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Keseimbangan: Belajar & Rehat",
    slug: "keseimbangan-belajar-rehat",
    tagline: "Keseimbangan akademik & rehat mental, pengurusan masa, serta menetapkan sempadan diri daripada buli",
    themeColor: "amber",
    estimatedMinutes: 10,
    featuredStudent: {
      name: "Kavita",
      role: "Pelajar Tingkatan 3 Dinamik (Umur 15 Tahun)",
      ethnicity: "India",
      avatarKey: "kavita",
      quote: "Masa itu sangat berharga! Bila kita susun jadual belajar dan rehat dengan seimbang, minda kita tidak mudah lesu dan lebih tegas menjaga sempadan diri."
    },
    summary: "Pelajari cara mengurus masa belajar dan rehat secara sihat, mengelakkan sindrom burnout (kelesuan mental), serta memupuk kemahiran menetapkan sempadan diri (personal boundaries) daripada sebarang bentuk buli.",
    learningOutcomes: [
      "Menggunakan Matriks Pengurusan Masa untuk mengimbangi antara kerja sekolah, hobi, dan waktu tidur.",
      "Mengenal pasti tanda-tanda awal kelesuan mental (burnout) dan langkah pencegahannya.",
      "Membina kemahiran menetapkan sempadan diri (personal boundaries) secara tegas dan berhemah."
    ],
    sections: [
      {
        id: "sec-3-1",
        title: "3.1 Keseimbangan Masa & Teknik Pomodoro",
        subtitle: "Membagi Masa Antara Akademik, Riadah & Tidur 8 Jam",
        audioText: "Belajar berterusan tanpa rehat yang mencukupi akan mengurangkan prestasi pembelajaran dan menyebabkan keletihan emosi.",
        paragraphs: [
          "Bagi murid Tingkatan 3, pengurusan masa yang seimbang merangkumi 3 tiang utama: Pembelajaran Sekolah, Masa Berdaya (Hobi & Bersukan), serta Tidur Berkualiti (7-8 jam semalam).",
          "Teknik Pomodoro menggalakkan sesi belajar fokus 25 minit diikuti rehat pendek 5 minit untuk menyegarkan semula minda."
        ],
        infographicPoints: [
          {
            title: "Belajar Fokus (25 Minit)",
            description: "Fokus sepenuhnya pada satu tugasan tanpa gangguan telefon bimbit.",
            icon: "BookOpen",
            tag: "Pomodoro",
            color: "amber"
          },
          {
            title: "Rehat Minda (5 Minit)",
            description: "Berdiri, meregangkan badan atau minum air masak.",
            icon: "Clock",
            tag: "Rehat",
            color: "emerald"
          },
          {
            title: "Tidur Sihat (8 Jam)",
            description: "Membiarkan sel otak berehat dan menyusun semula memori hafalan.",
            icon: "Sparkles",
            tag: "Pemulihan",
            color: "indigo"
          }
        ],
        keyTakeaway: "Rehat yang cukup bukanlah malas, tetapi keperluan asas kesihatan fizikal dan mental!"
      },
      {
        id: "sec-3-2",
        title: "3.2 Mengenal Pasti Burnout (Kelesuan Minda)",
        subtitle: "Apabila Keletihan Emosi Mula Mengatasi Semangat Belajar",
        audioText: "Burnout ialah keadaan keletihan fizikal, emosi, dan mental melampau akibat stres berpanjangan yang tidak diurus.",
        paragraphs: [
          "Gejala burnout termasuk rasa tidak bermotivasi, tumpuan merosot semasa kelas, rasa sinis atau benci terhadap aktiviti yang diminati sebelum ini.",
          "Jika anda merasakan gejala ini, berhenti sejenak dan dapatkan sokongan daripada ibu bapa atau guru bimbingan."
        ],
        keyTakeaway: "Cegah burnout awal dengan mengimbangi beban tugasan dan aktiviti riadah."
      },
      {
        id: "sec-3-3",
        title: "3.3 Menetapkan Sempadan Diri (Setting Boundaries)",
        subtitle: "Menolak Permintaan Buruk & Menghadapi Gangguan Buli Siber",
        audioText: "Sempadan diri ialah garis panduan yang anda tetapkan tentang bagaimana orang lain boleh melayan anda.",
        paragraphs: [
          "Menetapkan sempadan diri bermaksud berani berkata 'TIDAK' kepada paksaan rakan yang menyalahi undang-undang atau menyakitkan hati.",
          "Contoh sempadan diri siber: Berhak memadam atau memblokir akaun yang menghantar mesej makian dan ejekan tanpa perlu rasa bersalah."
        ],
        dialogue: [
          {
            speaker: "Kavita",
            avatar: "kavita",
            text: "Cikgu, ada rakan suruh saya tolong buatkan tugasan dia sebab dia ancam nak pulaukan saya kalau saya tak buat. Apa patut saya buat?",
            type: "example"
          },
          {
            speaker: "Cikgu Hafiz",
            avatar: "cikgu",
            text: "Itu adalah bentuk pembulian manipulatif Kavita. Katakan tegas: 'Saya sudi bantu terangkan, tapi saya tidak akan buat tugasan anda.' Berdiri teguh pada sempadan diri anda!",
            type: "advice"
          }
        ]
      }
    ],
    activity: {
      type: "keseimbangan-masa",
      title: "Aktiviti Interaktif: Perancang Keseimbangan Masa & Sempadan Diri",
      description: "Rancang pembahagian masa 24 jam anda dan pilih tindakan menegakkan sempadan diri bagi situasi pembulian!",
      instructions: "Imbangi jam belajar, rehat dan tidur serta uji respons ketegasan sempadan diri."
    },
    quiz: [
      {
        id: "q3-1",
        scenario: "Kavita berasa sangat keletihan, tidak dapat menumpukan perhatian dalam kelas dan selalu berasa tidak berguna.",
        question: "Apakah sindrom yang berkemungkinan dialami oleh Kavita akibat stres berpanjangan tanpa rehat?",
        options: [
          { id: "a", text: "Burnout (Kelesuan Minda & Emosi)", isCorrect: true, explanation: "Tepat! Keletihan melampau akibat stres tanpa rehat seimbang." },
          { id: "b", text: "Insomnia Positif", isCorrect: false, explanation: "Salah." },
          { id: "c", text: "Demam Malaria", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "Kelajuan Belajar Maksimum", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q3-2",
        scenario: "Seorang murid memaksa anda menyerahkan duit wang saku sekolah secara harian.",
        question: "Apakah tindakan menegakkan 'Sempadan Diri' (Personal Boundary) yang paling tepat?",
        options: [
          { id: "a", text: "Menyerahkan semua wang dan berdiam diri sepanjang tahun", isCorrect: false, explanation: "Salah. Ini menyerah kepada buli." },
          { id: "b", text: "Berkata 'TIDAK' secara tegas dan melaporkan kes pemerasan ini kepada guru dengan segera", isCorrect: true, explanation: "Tepat! Menolak pemerasan dan melaporkan kepada pihak berkuasa sekolah." },
          { id: "c", text: "Memukul murid tersebut menggunakan kerusi", isCorrect: false, explanation: "Salah. Kekerasan fizikal bukan penyelesaian." },
          { id: "d", text: "Mencuri wang ibu bapa untuk bayar pembuli", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q3-3",
        scenario: "Apakah faedah mengamalkan Teknik Pomodoro semasa menyusun sesi belajar?",
        question: "Faedah Teknik Pomodoro:",
        options: [
          { id: "a", text: "Mengekalkan tumpuan minda dengan selang masa rehat pendek secara berstruktur", isCorrect: true, explanation: "Tepat! 25 minit belajar + 5 minit rehat menyegarkan semula tumpuan." },
          { id: "b", text: "Membuatkan anda boleh belajar 24 jam tanpa tidur langsung", isCorrect: false, explanation: "Salah." },
          { id: "c", text: "Menukarkan buku teks kepada bentuk audio automatik", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "Menghapuskan semua tugasan sekolah secara ajaib", isCorrect: false, explanation: "Salah." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Kekuatan Diri di Masa Sukar",
    slug: "kekuatan-diri-masa-sukar",
    tagline: "Membina daya tahan (resilience), self-talk positif & ketegasan berhemah menghadapi cabaran",
    themeColor: "indigo",
    estimatedMinutes: 10,
    featuredStudent: {
      name: "Wong",
      role: "Pelajar Tingkatan 3 Inovatif (Umur 15 Tahun)",
      ethnicity: "Cina",
      avatarKey: "wong",
      quote: "Daya tahan (resilience) bukan bermaksud kita tidak pernah jatuh, tetapi kebolehan kita bangkit semula dan tidak membiarkan kata-kata ejekan menentukan siapa kita!"
    },
    summary: "Fahami konsep Daya Tahan Mental (Resilience), amalkan pertukaran bisikan hati negatif kepada Self-Talk Positif (Cognitive Reframing), dan kuasai gaya komunikasi Ketegasan Berhemah (Assertiveness).",
    learningOutcomes: [
      "Menerangkan maksud Daya Tahan (Resilience) dan cara memupuk pemikiran berkembang (growth mindset).",
      "Mengamalkan pertukaran pemikiran negatif (self-talk jahat) kepada dialog kendiri positif yang realistik.",
      "Menggunakan teknik komunikasi Ketegasan Berhemah (Assertiveness) apabila berdepan konflik."
    ],
    sections: [
      {
        id: "sec-4-1",
        title: "4.1 Membina Daya Tahan Mental (Resilience)",
        subtitle: "Keupayaan Bangkit Semula Daripada Kecewaan dan Ejekan",
        audioText: "Daya tahan atau resilience ialah kekuatan dalaman yang membolehkan seseorang bangkit daripada kesukaran, kegagalan, atau pengalaman dibuli.",
        paragraphs: [
          "Setiap orang pasti pernah berhadapan dengan situasi sukar—keputusan ujian sekolah yang tidak memuaskan atau kata-kata hinaan daripada individu yang tidak matang.",
          "Murid yang mempunyai daya tahan yang tinggi tidak menganggap masalah sebagai penamat hidup, sebaliknya sebagai pengajaran untuk menjadi lebih matang."
        ],
        infographicPoints: [
          {
            title: "Minda Berkembang (Growth Mindset)",
            description: "Percaya bahawa kebolehan dan kekuatan emosi boleh dipupuk melalui latihan dan usaha.",
            icon: "Sparkles",
            tag: "Mindset",
            color: "indigo"
          },
          {
            title: "Sokongan Rakan Positif",
            description: "Dikelilingi kawan-kawan yang membina dan saling menyokong antara satu sama lain.",
            icon: "CheckSquare",
            tag: "Sokongan",
            color: "emerald"
          },
          {
            title: "Penyelesaian Masalah",
            description: "Fokus kepada perkara yang boleh dikawal bukannya perkara yang di luar kawalan.",
            icon: "Search",
            tag: "Tindakan",
            color: "amber"
          }
        ],
        keyTakeaway: "Anda tidak boleh mengawal tindakan pembuli, tetapi anda sentiasa boleh mengawal tindak balas dan nilai diri anda sendiri!"
      },
      {
        id: "sec-4-2",
        title: "4.2 Teknik Reframing Minda: Bisikan Hati Positif",
        subtitle: "Menukar 'Saya Tidak Boleh' Kepada 'Saya Sedang Belajar'",
        audioText: "Reframing minda membantu menukar pola fikiran toksik kepada perspektif yang sihat dan realistik.",
        paragraphs: [
          "Bila dibuli atau diejek, minda kerap membisikkan dialog negatif yang tidak benar. Reframing mengajar kita menyemak fakta:"
        ],
        bulletPoints: [
          "❌ Fikiran Toksik: 'Kawan-kawan ejek fizikal saya, maknanya saya langsung tak berharga.'",
          "✅ Reframing Positif: 'Ejekan mereka mencerminkan ketidakmatangan mereka sendiri, bukan nilai sebenar diri saya.'",
          "❌ Fikiran Toksik: 'Saya gagal dalam penilaian sekolah ini, saya memang bodoh.'",
          "✅ Reframing Positif: 'Keputusan ini adalah maklum balas untuk saya perbaiki strategi belajar saya pada masa depan.'"
        ],
        dialogue: [
          {
            speaker: "Wong",
            avatar: "wong",
            text: "Bila saya kena perlekeh di padang sekolah, saya selalu ingatkan diri: Kata-kata mereka bukan fakta diri saya!",
            type: "example"
          },
          {
            speaker: "Cikgu Hafiz",
            avatar: "cikgu",
            text: "Sangat bagus Wong! Itu adalah pertahanan emosi utama seorang murid yang berdaya tahan tinggi.",
            type: "advice"
          }
        ]
      },
      {
        id: "sec-4-3",
        title: "4.3 Ketegasan Berhemah (Assertiveness)",
        subtitle: "Mempertahankan Diri Tanpa Perlu Menjadi Agresif atau Pasif",
        audioText: "Terdapat tiga gaya komunikasi utama: Pasif, Agresif, dan Tegas Berhemah (Assertive).",
        paragraphs: [
          "Pasif bermaksud membiarkan orang lain memijak hak anda. Agresif bermaksud menyerang secara fizikal atau lisan.",
          "Tegas Berhemah (Assertive) ialah gaya komunikasi paling matang: menyatakan hak dan perasaan anda dengan tenang, jelas, dan bersopan tanpa melepaskan ketegasan."
        ],
        keyTakeaway: "Gaya Tegas Berhemah menunjukkan harga diri yang tinggi dan menghalang pembuli daripada terus mengganggu anda."
      }
    ],
    activity: {
      type: "reframing-minda",
      title: "Aktiviti Interaktif: Simulator Reframing Minda & Latihan Ketegasan Berhemah",
      description: "Tukar bisikan hati negatif kepada penyataan positif dan pilih dialog tegas berhemah mengikut situasi!",
      instructions: "Ubah 4 fikiran toksik dan pilih jawapan gaya berkomunikasi tegas berhemah."
    },
    quiz: [
      {
        id: "q4-1",
        scenario: "Wong berhadapan situasi diejek rupa paras di kantin sekolah.",
        question: "Apakah penyataan 'Reframing Positif' yang paling membina untuk Wong gunakan pada diri sendiri?",
        options: [
          { id: "a", text: "'Ejekan mereka menunjukkan ketidakmatangan mereka, bukan menentukan harga diri saya.'", isCorrect: true, explanation: "Tepat! Ini ialah reframing minda yang sihat dan berdaya tahan." },
          { id: "b", text: "'Saya memang teruk dan patut berhenti sekolah.'", isCorrect: false, explanation: "Salah. Ini pemikiran toksik pasif." },
          { id: "c", text: "'Saya akan bawa kayu untuk balas dendam esok.'", isCorrect: false, explanation: "Salah. Ini respons agresif berbahaya." },
          { id: "d", text: "'Semua orang di dunia ini musuh saya.'", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q4-2",
        scenario: "Manakah antara berikut menerangkan ciri gaya komunikasi 'Tegas Berhemah' (Assertive)?",
        question: "Ciri Tegas Berhemah:",
        options: [
          { id: "a", text: "Berdiri tegak, menyatakan pendirian dengan tenang, jelas, dan bersopan tanpa kekerasan", isCorrect: true, explanation: "Tepat! Menyatakan hak secara jelas dan menghormati diri serta orang lain." },
          { id: "b", text: "Menjerit dan menumbuk muka orang yang tidak bersetuju", isCorrect: false, explanation: "Salah. Ini gaya agresif." },
          { id: "c", text: "Menangis mengasingkan diri dalam tandas tanpa berbuat apa-apa", isCorrect: false, explanation: "Salah. Ini gaya pasif." },
          { id: "d", text: "Menyebarkan rahsia orang lain di kumpulan perbualan siber", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q4-3",
        scenario: "Apakah maksud Daya Tahan Mental (Resilience)?",
        question: "Definisi Daya Tahan:",
        options: [
          { id: "a", text: "Keupayaan bangkit semula dan belajar daripada kesukaran atau pengalaman buruk", isCorrect: true, explanation: "Tepat! Resilience ialah kebolehan pulih daripada cabaran hidup." },
          { id: "b", text: "Kebolehan bertumbuk tanpa rasa sakit fizikal", isCorrect: false, explanation: "Salah." },
          { id: "c", text: "Perasaan bangga diri dan memandang rendah orang lain", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "Tidak mempunyai sebarang masalah langsung sepanjang hayat", isCorrect: false, explanation: "Salah." }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Minta Bantuan Bukan Tanda Lemah",
    slug: "minta-bantuan-bukan-tanda-lemah",
    tagline: "Meruntuhkan stigma, saluran bantuan rasmi KPM/KKM & ikrar tindakan rakan sebaya anti-buli",
    themeColor: "rose",
    estimatedMinutes: 10,
    featuredStudent: {
      name: "Cikgu Hafiz / Puan Salmah",
      role: "Guru Bimbingan & Kaunseling Sekolah KPM",
      ethnicity: "Melayu",
      avatarKey: "cikgu",
      quote: "Meminta bantuan bukannya tanda anda lemah atau kalah—ia adalah langkah paling berani dan bijak untuk mengambil semula kawalan ke atas hidup dan emosi anda!"
    },
    summary: "Runtuhkan stigma membisu apabila dibuli, kenali saluran bantuan rasmi KPM & KKM (Unit Bimbingan & Kaunseling, Talian HEAL 15555, Talian Kasih 15999), serta lengkapkan Ikrar Pelajar Anti-Buli KPM.",
    learningOutcomes: [
      "Mengikis stigma negatif bahawa meminta bantuan kaunselor atau guru adalah tanda kelemahan.",
      "Mengenal pasti saluran bantuan rasmi sekolah dan talian bantuan krisis emosi di Malaysia.",
      "Melaksanakan ikrar kepimpinan rakan sebaya sebagai pembela (defender) persekitaran sekolah selamat."
    ],
    sections: [
      {
        id: "sec-5-1",
        title: "5.1 Meruntuhkan Stigma & Keberanian Melapor",
        subtitle: "Menolak Budaya Membisu (Break the Silence)",
        audioText: "Banyak kes buli dan tekanan berpanjangan berlaku kerana mangsa berasa malu atau takut untuk bercerita.",
        paragraphs: [
          "Membisu tidak akan membuatkan pembuli berhenti; sebaliknya ia memberi kuasa kepada pembuli untuk meneruskan perbuatan buruk mereka.",
          "Membuka mulut dan meminta bantuan daripada orang dewasa yang dipercayai ialah bukti keberanian dan perlindungan untuk diri anda dan kawan-kawan."
        ],
        infographicPoints: [
          {
            title: "Unit Bimbingan Kaunseling (UBK)",
            description: "Pintu sentiasa terbuka di sekolah untuk perbualan sulit dan kaunseling mesra murid.",
            icon: "BookOpen",
            tag: "Sekolah",
            color: "rose"
          },
          {
            title: "Talian HEAL 15555 (KKM)",
            description: "Talian Bantuan Sokongan Kesihatan Mental rasmi percuma kendalian pegawai psikologi.",
            icon: "Sparkles",
            tag: "24 Jam",
            color: "emerald"
          },
          {
            title: "Talian Kasih 15999",
            description: "Talian am krisis sosial dan perlindungan kanak-kanak/remaja Malaysia.",
            icon: "Search",
            tag: "Kebajikan",
            color: "amber"
          }
        ],
        keyTakeaway: "Guru Bimbingan dan Kaunseling di sekolah sedia mendengar tanpa menghakimi anda!"
      },
      {
        id: "sec-5-2",
        title: "5.2 Peranan Rakan Sebaya: Menjadi Defender, Bukan Bystander",
        subtitle: "Bagaimana Kelompok Rakan Boleh Menghentikan Buli di Sekolah",
        audioText: "Apabila rakan sebaya bersatu menolak pembulian, perbuatan buli akan terhenti dalam masa kurang 10 saat.",
        paragraphs: [
          "Jangan jadi Bystander Pasif (orang yang melihat tetapi berdiam diri). Jadilah 'Upstander / Defender':",
          "Dampingi mangsa buli, ajak mereka duduk bersama di kantin, dan bantu mereka menemui guru kaunseling."
        ],
        dialogue: [
          {
            speaker: "Adam & Siti",
            avatar: "adam",
            text: "Cikgu, kami berikrar untuk jaga keselamatan rakan-rakan di sekolah dan takkan biarkan sesiapa pun dibuli di hadapan kami!",
            type: "example"
          },
          {
            speaker: "Cikgu Hafiz",
            avatar: "cikgu",
            text: "Tahniah murid-murid! Semangat persahabatan dan integriti inilah yang menjadikan sekolah kita harmoni dan bahagia.",
            type: "advice"
          }
        ]
      },
      {
        id: "sec-5-3",
        title: "5.3 Pelan Tindakan & Ikrar Pelajar Anti-Buli KPM",
        subtitle: "Komitmen Bersama Membina Persekitaran Sekolah Bebas Buli",
        audioText: "Setiap murid Tingkatan 3 bertanggungjawab menandatangani ikrar solidariti menentang pembulian dan mengurus emosi dengan bijak.",
        paragraphs: [
          "Lengkapkan borang ikrar pelajar pada bahagian aktiviti untuk menjana Sijil Pencapaian Digital rasmi anda!"
        ],
        keyTakeaway: "Bersatu menentang buli, bersama menyokong kesihatan emosi!"
      }
    ],
    activity: {
      type: "saluran-bantuan",
      title: "Aktiviti Interaktif: Simulator Saluran Bantuan & Borang Ikrar Anti-Buli KPM",
      description: "Uji kefahaman saluran bantuan rasmi dan lengkapkan Borang Ikrar Solidariti Anti-Buli KPM!",
      instructions: "Pilih nombor talian bantuan yang betul dan tandatangani borang aku janji ikrar pelajar."
    },
    quiz: [
      {
        id: "q5-1",
        scenario: "Apakah nombor Talian HEAL bantuan sokongan kesihatan mental rasmi di bawah Kementerian Kesihatan Malaysia (KKM)?",
        question: "Nombor Talian HEAL KKM:",
        options: [
          { id: "a", text: "15555", isCorrect: true, explanation: "Tepat! Talian HEAL 15555 ialah talian rasmi sokongan kesihatan mental." },
          { id: "b", text: "999", isCorrect: false, explanation: "Salah. 999 ialah talian kecemasan polis/ambulans." },
          { id: "c", text: "12345", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "100", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q5-2",
        scenario: "Mengapa tindakan meminta bantuan daripada Guru Kaunseling dianggap sebagai satu kekuatan dan bukannya kelemahan?",
        question: "Sebab meminta bantuan adalah kekuatan:",
        options: [
          { id: "a", text: "Kerana ia menunjukkan keberanian mengambil tindakan bertanggungjawab untuk melindungi emosi dan keselamatan diri", isCorrect: true, explanation: "Tepat! Berani meminta bantuan ialah langkah bertindak matured." },
          { id: "b", text: "Kerana ia membolehkan anda mendapat hadiah wang percuma", isCorrect: false, explanation: "Salah." },
          { id: "c", text: "Kerana guru kaunseling akan denda semua murid sekolah", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "Kerana ia menyusahkan ibu bapa", isCorrect: false, explanation: "Salah." }
        ]
      },
      {
        id: "q5-3",
        scenario: "Apakah peranan paling ideal bagi seorang 'Upstander / Defender' apabila melihat rakan dipulaukan di sekolah?",
        question: "Peranan Upstander:",
        options: [
          { id: "a", text: "Mendampingi mangsa buli, memberi sokongan moral dan membimbingnya mendapatkan bantuan guru", isCorrect: true, explanation: "Tepat! Memberi sokongan moral dan merujuk pihak berkuasa sekolah." },
          { id: "b", text: "Merekam video dan memuat naik ke akaun TikTok untuk kejar tontonan", isCorrect: false, explanation: "Salah. Ini menyebarkan buli siber." },
          { id: "c", text: "Menyertai ejekan bersama pembuli", isCorrect: false, explanation: "Salah." },
          { id: "d", text: "Pura-pura tidak nampak dan melangkah pergi", isCorrect: false, explanation: "Salah." }
        ]
      }
    ]
  }
];

export const ASK_GLOSSARY: GlossaryItem[] = [
  {
    term: "Stres (Tekanan)",
    category: "Pengurusan Emosi",
    meaning: "Tindakbalas fizikal dan emosi terhadap sebarang perubahan atau cabaran yang memerlukan penyesuaian diri.",
    example: "Rasa cemas sebelum penilaian sekolah atau pembentangan kerja projek."
  },
  {
    term: "Eustres",
    category: "Pengurusan Emosi",
    meaning: "Tekanan positif jangka pendek yang memberi motivasi untuk berusaha mencapai matlamat secara positif.",
    example: "Semangat ulang kaji pelajaran kerana ingin mencapai sasaran markah peribadi."
  },
  {
    term: "Distres",
    category: "Pengurusan Emosi",
    meaning: "Tekanan negatif berpanjangan yang menyebabkan keletihan emosi, hilang tumpuan, dan gangguan kesihatan.",
    example: "Rasa penat dan panik akibat kerja sekolah terkumpul bertimbun dan ancaman buli."
  },
  {
    term: "Kecerdasan Emosi (EQ)",
    category: "Daya Tahan & EQ",
    meaning: "Keupayaan mengenali, mengawal dan menyalurkan emosi diri secara bijak serta berempati terhadap orang lain.",
    example: "Menahan marah apabila diejek dan sebaliknya bercakap dengan tegas berhemah."
  },
  {
    term: "Teknik Grounding 5-4-3-2-1",
    category: "Daya Tahan & EQ",
    meaning: "Teknik kesedaran sensorik yang menggunakan 5 pancaindera untuk menenangkan fikiran berserabut dalam saat cemas.",
    example: "Melihat 5 objek di kelas, menyentuh 4 permukaan meja, mendengar 3 bunyi, membau 2 aroma, merasai 1 nafas."
  },
  {
    term: "Buli Fizikal",
    category: "Jenis Buli & Siber",
    meaning: "Perbuatan tingkah laku ganas secara fizikal seperti memukul, menendang, menolak, atau merosakkan harta benda murid.",
    example: "Merampas beg sekolah atau merosakkan buku teks rakan sekelas."
  },
  {
    term: "Buli Lisan (Verbal)",
    category: "Jenis Buli & Siber",
    meaning: "Menggunakan kata-kata nista, ejekan rupa paras fizikal, panggilan nama hinaan, atau sorakan maki.",
    example: "Mengejek berat badan atau bentuk fizikal rakan di tempat awam."
  },
  {
    term: "Cyberbullying (Buli Siber)",
    category: "Jenis Buli & Siber",
    meaning: "Penggunaan teknologi digital seperti perkhidmatan mesej, media sosial, atau permainan dalam talian untuk menakutkan atau menghina.",
    example: "Menyebarkan gambar atau mesej fitnah dalam kumpulan sembang."
  },
  {
    term: "Burnout (Kelesuan Minda)",
    category: "Pengurusan Emosi",
    meaning: "Keadaan keletihan emosi, fizikal, dan mental melampau akibat stres berterusan tanpa rehat seimbang.",
    example: "Rasa malas melampau, mengasingkan diri, dan hilang selera untuk belajar."
  },
  {
    term: "Sempadan Diri (Boundaries)",
    category: "Daya Tahan & EQ",
    meaning: "Had fizikal dan emosi yang anda tetapkan untuk menentukan cara orang lain boleh melayan anda dengan hormat.",
    example: "Tegas menolak daripada meminjamkan wang saku kepada individu pemeras."
  },
  {
    term: "Daya Tahan (Resilience)",
    category: "Daya Tahan & EQ",
    meaning: "Kekuatan dalaman untuk pulih, adaptasi, dan bangkit semula daripada kesukaran atau pengalaman buruk.",
    example: "Memperbaiki kaedah belajar selepas keputusan penilaian sekolah yang kurang memuaskan."
  },
  {
    term: "Reframing Minda",
    category: "Daya Tahan & EQ",
    meaning: "Teknik mengubah sudut pandang daripada pemikiran negatif toksik kepada pemikiran positif berlandaskan fakta.",
    example: "Menukar 'Saya bodoh' kepada 'Saya sedang belajar kemahiran baharu ini'."
  },
  {
    term: "Ketegasan Berhemah (Assertive)",
    category: "Daya Tahan & EQ",
    meaning: "Gaya komunikasi yang tenang dan jelas mempertahankan hak diri tanpa perlu bersikap pasif atau agresif.",
    example: "Menyatakan 'Saya tidak selesa dengan panggilan nama itu, sila henti panggilan tersebut' secara tenang."
  },
  {
    term: "Upstander / Defender",
    category: "Saluran Bantuan",
    meaning: "Individu atau kumpulan murid yang mengambil tindakan membantu dan membela mangsa buli secara berhemah.",
    example: "Mendampingi murid yang dipulaukan dan membimbingnya melapor kepada guru kaunseling."
  },
  {
    term: "Talian HEAL 15555",
    category: "Saluran Bantuan",
    meaning: "Talian perkhidmatan sokongan kesihatan mental percuma Kementerian Kesihatan Malaysia (KKM).",
    example: "Menelefon 15555 untuk sesi perbualan sokongan emosi percuma 24 jam."
  },
  {
    term: "Unit Bimbingan & Kaunseling (UBK)",
    category: "Saluran Bantuan",
    meaning: "Unit rasmi di sekolah yang menyediakan khidmat kaunseling, bimbingan kerjaya, dan sokongan emosi murid.",
    example: "Berjumpa Guru Kaunseling Sekolah untuk berbincang secara sulit mengenai tekanan emosi."
  }
];

export const ASK_REFERENCES: ReferenceItem[] = [
  {
    name: "Talian HEAL 15555 (KKM)",
    category: "Saluran Bantuan Krisis",
    type: "helpline",
    codeOrInfo: "HUBUNGI: 15555 (24 Jam Percuma)",
    description: "Talian sokongan kesihatan mental KKM khusus untuk remaja dan awam yang menghadapi tekanan, cemas, atau gangguan emosi."
  },
  {
    name: "Talian Kasih 15999 & WhatsApp 019-2615999",
    category: "Perkhidmatan Kebajikan & Perlindungan",
    type: "helpline",
    codeOrInfo: "TEL: 15999 | WA: 019-2615999",
    description: "Talian sokongan kebajikan dan perlindungan kanak-kanak/remaja di bawah KPWKM."
  },
  {
    name: "Portal Aduan Buli KPM",
    category: "Aduan Rasmi Sekolah",
    type: "helpline",
    codeOrInfo: "PORTAL: aduanbuli.moe.gov.my | E-MEL: aduanbuli@moe.gov.my",
    description: "Saluran aduan rasmi Kementerian Pendidikan Malaysia untuk melaporkan kes buli sekolah secara selamat dan sulit."
  },
  {
    name: "Formula Grounding 5-4-3-2-1",
    category: "Teknik Ketenangan Sensorik",
    type: "teknik",
    codeOrInfo: "5 Nampak ➔ 4 Sentuh ➔ 3 Dengar ➔ 2 Bau ➔ 1 Rasa",
    description: "Langkah pantas menstabilkan degupan jantung dan kebimbangan fikiran dalam masa 1 minit."
  },
  {
    name: "Matriks Pernafasan 4-7-8",
    category: "Kawal Gelisah & Panik",
    type: "teknik",
    codeOrInfo: "Tarik Nafas (4s) ➔ Tahan (7s) ➔ Hembus Perlahan (8s)",
    description: "Mengaktifkan sistem parasimpatetik tubuh untuk menurunkan tekanan darah dan keresahan emosi."
  },
  {
    name: "Hak Hak Pelajar Bebas Daripada Buli KPM",
    category: "Hak & Peraturan Sekolah",
    type: "hak",
    codeOrInfo: "Surat Pekeliling Ikhtisas KPM Bil. 8/2010 & Panduan Pengurusan Buli",
    description: "Setiap murid berhak mendapat perlindungan, persekitaran sekolah yang selamat, dan layanan adil tanpa sebarang bentuk diskriminasi atau pembulian."
  }
];
