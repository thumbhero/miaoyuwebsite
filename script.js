/* =============================================================
   MEMO: script.js — Miaoyu Luginbühl-Hung Personal Website
   Responsibilities:
     1. Multilingual content (EN / DE / ZH-TW) — dynamic, no reload
     2. Language switcher UI
     3. Navbar scroll behaviour
     4. Mobile hamburger menu
     5. Contact form validation & success feedback
     6. Footer year
   ============================================================= */

/* -------- 1. TRANSLATIONS -------- */
const translations = {

  en: {
    // Nav
    nav_about:     'About',
    nav_career:    'Career',
    nav_ensembles: 'Ensembles',
    nav_awards:    'Awards',
    nav_contact:   'Contact',

    // Hero
    hero_pretitle: 'Violinist &amp; Musician',
    hero_tagline:  'Violinist &nbsp;·&nbsp; Chamber Musician &nbsp;·&nbsp; Performer',
    hero_based:    'Based in Vienna &nbsp;·&nbsp; Performing internationally',
    hero_cta:      'Booking &amp; Enquiries',

    // About
    about_title: 'About',
    about_p1: 'Miaoyu Luginbühl-Hung is a Taiwanese violinist based in Vienna, Austria, active in orchestral performance, chamber music, and contemporary repertoire. Born in Taipei, she was drawn to the violin from an early age, pursuing her studies with distinction through Taiwan and ultimately to the heart of the European classical music world.',
    about_p2: 'She completed her undergraduate studies at the National Taiwan Normal University before being awarded the prestigious National Taiwan Ministry of Education Arts Scholarship, enabling her to pursue postgraduate violin studies at the University of Music and Performing Arts Vienna under Prof. Jan Pospichal — former concertmaster of the Vienna Symphony Orchestra.',
    about_p3: 'Her concert activity has taken her to landmark stages across Europe and Asia, including the Berlin Philharmonie, Cologne Philharmonie, and Tokyo Opera City. She is a member of the Synchron Stage Orchestra, Vienna Cathedral Orchestra, St. Pölten Cathedral Orchestra, and Ensemble Wiener Collage, and was selected for the elite Lucerne Festival Academy in both 2017 and 2018.',
    about_p4: 'Fluent in Mandarin, German, English, and Japanese, Miaoyu bridges musical cultures across East Asia and Central Europe — available for orchestral engagements, chamber music collaborations, and concert bookings internationally.',
    instr_violin: 'Violin',
    instr_viola:  'Viola',
    instr_piano:  'Piano',

    // Education
    nav_education:  'Education',
    edu_title:      'Education',
    edu_profile_link: 'View Profile ↗',
    edu1_year:   '2008–2013',
    edu1_school: 'National Taiwan Normal University',
    edu1_degree: 'Bachelor of Arts — Music',
    edu1_desc:   'Foundational training in music performance, theory, and pedagogy at one of Taiwan\'s leading universities for the arts.',
    edu2_year:   '2013–2019',
    edu2_school: 'University of Music and Performing Arts Vienna',
    edu2_degree: 'Postgraduate Studies — Violin',
    edu2_desc:   'Advanced violin studies under Prof. Jan Pospichal, former concertmaster of the Vienna Symphony Orchestra. One of Europe\'s most prestigious conservatories.',
    edu3_school: 'Lucerne Festival Academy',
    edu3_degree: 'Selected Participant &amp; Alumni Ensemble',
    edu3_desc:   'An elite international academy for advanced orchestral musicians, founded by Pierre Boulez. Selected in both 2017 and 2018, and subsequently invited to join the Alumni Ensemble.',

    // Career
    career_title: 'Performance Career',
    career_intro: 'An internationally active performer with engagements across Europe and Asia, appearing regularly in landmark concert halls.',
    venue_berlin:  'Berlin, Germany',
    venue_cologne: 'Cologne, Germany',
    venue_tokyo:   'Tokyo, Japan',
    venue_vienna:  'Vienna, Austria',
    career_2012: 'Began professional performance career in Taipei, Taiwan.',
    career_2017: 'Accepted to Lucerne Festival Academy; performed with its Alumni Ensemble.',
    career_2018: 'Joined Vienna Cathedral Orchestra and St. Pölten Cathedral Orchestra.',
    career_2019: 'Established Vienna violin activities; joined Synchron Stage Orchestra.',
    career_2021: 'Became member of Ensemble Wiener Collage.',

    // Ensembles
    ensembles_title: 'Ensembles &amp; Orchestras',
    ens1_name: 'Synchron Stage Orchestra',
    ens1_desc: 'A leading recording ensemble for film, television, and video game soundtracks, performing for international productions at Synchron Stage Vienna.',
    ens2_name: 'Vienna Cathedral Orchestra',
    ens2_desc: 'Regular orchestral performances at the historic Stephansdom and other sacred venues in Vienna, combining sacred music with concert repertoire.',
    ens3_name: 'St. Pölten Cathedral Orchestra',
    ens3_desc: 'Orchestral and chamber music performances at the Cathedral of St. Pölten, Lower Austria.',
    ens4_name: 'Ensemble Wiener Collage',
    ens4_desc: 'A contemporary chamber ensemble based in Vienna, dedicated to bridging classical and modern repertoire in innovative concert formats.',

    // Awards
    awards_title: 'Awards &amp; Recognition',
    award1_name: '27th CHIMEI Arts Award',
    award1_desc: 'One of Taiwan\'s most prestigious arts prizes, awarded annually to exceptional emerging classical musicians — equivalent in standing to a national arts excellence award.',
    award2_name: 'Ministry of Education Arts Scholarship',
    award2_desc: 'A highly competitive scholarship granted by the National Taiwan Ministry of Education to outstanding artists for advanced study abroad. Enabled her postgraduate studies at the University of Music and Performing Arts Vienna.',
    award3_name: 'Lucerne Festival Academy',
    award3_desc: 'Selected in 2017 and 2018 for one of the world\'s most prestigious summer academies for advanced orchestral musicians, founded by composer and conductor Pierre Boulez. Subsequently invited to join the Alumni Ensemble.',

    // Contact
    social_email: 'Email',

    contact_title: 'Get in Touch',
    contact_desc:  'For concert bookings, orchestral engagements, collaborations, or general enquiries, please use the form below. Responses are provided in English, German, Mandarin, or Japanese.',
    contact_lang_label: 'Languages:',
    form_name:               'Name',
    form_email:              'Email',
    form_org:                'Organization / Ensemble',
    form_subject:            'Subject',
    form_subject_placeholder:'— Please select —',
    form_subject_concert:    'Concert Booking',
    form_subject_collab:     'Collaboration',
    form_subject_other:      'Other Enquiry',
    form_message:            'Message',
    form_submit:             'Send Message',
    form_success:            'Thank you — your message has been received. We will be in touch shortly.',
    form_error:              'Please fill in all required fields.',

    // Videos
    nav_videos:      'Videos',
    videos_title:    'Videos',
    videos_intro:    'Watch selected performances and recordings.',
    video1_caption:  'Performance — coming soon',
    video2_caption:  'Performance — coming soon',
    video3_caption:  'Performance — coming soon',

    // Footer
    footer_rights: 'All rights reserved.',
  },

  de: {
    nav_about:     'Über mich',
    nav_career:    'Karriere',
    nav_ensembles: 'Ensembles',
    nav_awards:    'Auszeichnungen',
    nav_contact:   'Kontakt',

    hero_pretitle: 'Violinistin &amp; Musikerin',
    hero_tagline:  'Violinistin &nbsp;·&nbsp; Kammermusikerin &nbsp;·&nbsp; Performerin',
    hero_based:    'Wohnhaft in Wien &nbsp;·&nbsp; International tätig',
    hero_cta:      'Buchung &amp; Anfragen',

    about_title: 'Über mich',
    about_p1: 'Miaoyu Luginbühl-Hung ist eine taiwanesische Violinistin mit Wohnsitz in Wien, aktiv in Orchestermusik, Kammermusik und zeitgenössischem Repertoire. In Taipeh geboren, widmete sie sich schon früh der Geige und verfolgte ihre Ausbildung mit Auszeichnung — von Taiwan bis ins Herz der europäischen Klassikwelt.',
    about_p2: 'Nach ihrem Bachelorstudium an der National Taiwan Normal University wurde ihr das renommierte Kunststipendium des taiwanesischen Bildungsministeriums verliehen, das ihr ein Postgradualstudium an der Universität für Musik und darstellende Kunst Wien bei Prof. Jan Pospichal — dem ehemaligen Konzertmeister der Wiener Symphoniker — ermöglichte.',
    about_p3: 'Ihre Konzerttätigkeit führte sie auf bedeutende Bühnen in Europa und Asien, darunter die Berliner Philharmonie, die Kölner Philharmonie und das Tokyo Opera City. Sie ist Mitglied des Synchron Stage Orchestra, des Wiener Dommusikverein, des Dommusikverein St. Pölten und des Ensemble Wiener Collage sowie Alumna der Lucerne Festival Academy (2017, 2018).',
    about_p4: 'Fließend in Mandarin, Deutsch, Englisch und Japanisch verbindet Miaoyu musikalische Kulturen aus Ostasien und Mitteleuropa — verfügbar für Orchesterengagements, Kammermusikkooperationen und Konzertbuchungen weltweit.',
    instr_violin: 'Violine',
    instr_viola:  'Viola',
    instr_piano:  'Klavier',

    // Education
    nav_education:  'Ausbildung',
    edu_title:      'Ausbildung',
    edu_profile_link: 'Profil ansehen ↗',
    edu1_year:   '2008–2013',
    edu1_school: 'Nationale Taiwan Normal University',
    edu1_degree: 'Bachelor of Arts — Musik',
    edu1_desc:   'Grundlegende Ausbildung in Musikperformance, Theorie und Pädagogik an einer der führenden Kunstuniversitäten Taiwans.',
    edu2_year:   '2013–2019',
    edu2_school: 'Universität für Musik und darstellende Kunst Wien',
    edu2_degree: 'Postgradualstudium — Violine',
    edu2_desc:   'Fortgeschrittenes Violinstudium bei Prof. Jan Pospichal, ehemaliger Konzertmeister der Wiener Symphoniker. Eine der renommiertesten Musikhochschulen Europas.',
    edu3_school: 'Lucerne Festival Academy',
    edu3_degree: 'Ausgewählte Teilnehmerin &amp; Alumni-Ensemble',
    edu3_desc:   'Eine der weltweit selektivsten Akademien für fortgeschrittene Orchestermusiker, gegründet von Pierre Boulez. Teilnahme 2017 und 2018, anschließend Einladung ins Alumni-Ensemble.',

    career_title: 'Karriere',
    career_intro: 'International tätige Konzertmusikerin mit regelmäßigen Engagements in Europa und Asien.',
    venue_berlin:  'Berlin, Deutschland',
    venue_cologne: 'Köln, Deutschland',
    venue_tokyo:   'Tokio, Japan',
    venue_vienna:  'Wien, Österreich',
    career_2012: 'Beginn der professionellen Konzerttätigkeit in Taipeh, Taiwan.',
    career_2017: 'Teilnahme an der Lucerne Festival Academy; Mitwirkung im Alumni-Ensemble.',
    career_2018: 'Eintritt in das Wiener Dommusikverein und das Dommusikverein St. Pölten.',
    career_2019: 'Aufbau der Wiener Violintätigkeit; Eintritt in das Synchron Stage Orchestra.',
    career_2021: 'Mitglied des Ensemble Wiener Collage.',

    ensembles_title: 'Ensembles &amp; Orchester',
    ens1_name: 'Synchron Stage Orchestra',
    ens1_desc: 'Führendes Aufnahmeensemble für Film-, Fernseh- und Videospielmusik; Produktionen für internationale Auftraggeber im Synchron Stage Vienna.',
    ens2_name: 'Wiener Dommusikverein',
    ens2_desc: 'Regelmäßige Orchesteraufführungen am Wiener Stephansdom und weiteren Sakralstätten — geistliche Musik und Konzertrepertoire.',
    ens3_name: 'Dommusikverein St. Pölten',
    ens3_desc: 'Orchester- und Kammermusikaufführungen am Dom zu St. Pölten, Niederösterreich.',
    ens4_name: 'Ensemble Wiener Collage',
    ens4_desc: 'Zeitgenössisches Kammerensemble aus Wien, das klassisches und modernes Repertoire in innovativen Konzertformaten verbindet.',

    awards_title: 'Auszeichnungen',
    award1_name: '27. CHIMEI Arts Award',
    award1_desc: 'Renommierter taiwanesischer Kunstpreis für herausragende Leistungen aufstrebender Klassikmusiker.',
    award2_name: 'Kunststipendium des taiwanesischen Bildungsministeriums',
    award2_desc: 'Vergeben vom taiwanesischen Bildungsministerium zur Förderung des künstlerischen Auslandsstudiums — ermöglichte das Postgradualstudium in Wien.',
    award3_name: 'Lucerne Festival Academy',
    award3_desc: 'Teilnahme 2017 und 2018 sowie anschließende Aufnahme in das Alumni-Ensemble. Die von Pierre Boulez gegründete Akademie gehört zu den weltweit selektivsten Programmen für fortgeschrittene Orchestermusiker.',

    contact_title: 'Kontakt',
    contact_desc:  'Für Konzertbuchungen, Orchesterengagements, Kooperationen oder allgemeine Anfragen nutzen Sie bitte das folgende Formular. Antworten erfolgen auf Englisch, Deutsch, Mandarin oder Japanisch.',
    contact_lang_label: 'Sprachen:',
    form_name:               'Name',
    form_email:              'E-Mail',
    form_org:                'Organisation / Ensemble',
    form_subject:            'Betreff',
    form_subject_placeholder:'— Bitte auswählen —',
    form_subject_concert:    'Konzertbuchung',
    form_subject_collab:     'Zusammenarbeit',
    form_subject_other:      'Sonstige Anfrage',
    form_message:            'Nachricht',
    form_submit:             'Nachricht senden',
    form_success:            'Vielen Dank — Ihre Nachricht ist eingegangen. Wir melden uns in Kürze.',
    form_error:              'Bitte füllen Sie alle Pflichtfelder aus.',

    nav_videos:      'Videos',
    videos_title:    'Videos',
    videos_intro:    'Ausgewählte Aufführungen und Aufnahmen.',
    video1_caption:  'Aufführung — demnächst verfügbar',
    video2_caption:  'Aufführung — demnächst verfügbar',
    video3_caption:  'Aufführung — demnächst verfügbar',

    footer_rights: 'Alle Rechte vorbehalten.',
  },

  zh: {
    nav_about:     '關於',
    nav_career:    '演出經歷',
    nav_ensembles: '樂團',
    nav_awards:    '獎項',
    nav_contact:   '聯絡',

    hero_pretitle: '小提琴家 &amp; 音樂家',
    hero_tagline:  '小提琴家 &nbsp;·&nbsp; 室內樂演奏家 &nbsp;·&nbsp; 音樂表演者',
    hero_based:    '定居維也納 &nbsp;·&nbsp; 活躍於國際舞台',
    hero_cta:      '預約與洽詢',

    about_title: '關於',
    about_p1: '洪妙瑜（Miaoyu Luginbühl-Hung）出生於台灣台北，現定居奧地利維也納，活躍於管弦樂、室內樂與當代音樂演出。自幼習琴，以優異成績完成台灣至歐洲的完整音樂訓練歷程。',
    about_p2: '畢業於國立臺灣師範大學音樂系後，獲頒中華民國教育部藝術類公費留學獎學金，赴維也納音樂暨表演藝術大學，師從維也納交響樂團前首席 Prof. Jan Pospichal，完成小提琴研究所進階訓練。',
    about_p3: '演出足跡遍及歐亞各地頂尖音樂廳，包括柏林愛樂廳、科隆愛樂廳與東京歌劇城。現為 Synchron Stage Orchestra、維也納大教堂管弦樂團、聖珀爾滕大教堂管弦樂團及 Ensemble Wiener Collage 成員，並於2017、2018年獲選盧賽恩音樂節學院。',
    about_p4: '流利使用華語、德語與英語。誠摯歡迎來自世界各地的管弦樂演出邀約、室內樂合作及音樂會洽詢。',
    instr_violin: '小提琴',
    instr_viola:  '中提琴',
    instr_piano:  '鋼琴',

    // Education
    nav_education:  '學歷',
    edu_title:      '學歷',
    edu_profile_link: '查看個人資料 ↗',
    edu1_year:   '2008–2013',
    edu1_school: '國立臺灣師範大學',
    edu1_degree: '音樂學士',
    edu1_desc:   '於台灣頂尖藝術大學接受音樂演奏、樂理與教學的紮實培訓。',
    edu2_year:   '2013–2019',
    edu2_school: '維也納音樂暨表演藝術大學',
    edu2_degree: '小提琴研究所進階課程',
    edu2_desc:   '師從維也納交響樂團前首席 Prof. Jan Pospichal，完成小提琴進階研習。為歐洲最享負盛名的音樂院之一。',
    edu3_school: '盧賽恩音樂節學院',
    edu3_degree: '獲選學員 &amp; 校友合奏團',
    edu3_desc:   '由皮耶爾·布列茲創立，為全球最頂尖的管弦樂進修學院之一。2017、2018年獲選參與，並受邀加入校友合奏團。',

    career_title: '演出經歷',
    career_intro: '活躍於歐亞各地的國際演奏家，定期登台於世界知名音樂廳。',
    venue_berlin:  '德國 · 柏林',
    venue_cologne: '德國 · 科隆',
    venue_tokyo:   '日本 · 東京',
    venue_vienna:  '奧地利 · 維也納',
    career_2012: '於台灣台北展開職業演奏生涯。',
    career_2017: '獲選盧賽恩音樂節學院，並隨校友合奏團演出。',
    career_2018: '加入維也納大教堂管弦樂團及聖珀爾滕大教堂管弦樂團。',
    career_2019: '於維也納建立小提琴演出事業；加入 Synchron Stage Orchestra。',
    career_2021: '成為 Ensemble Wiener Collage 成員。',

    ensembles_title: '所屬樂團',
    ens1_name: 'Synchron Stage Orchestra',
    ens1_desc: '維也納頂尖電影、電視及電子遊戲配樂錄音樂團，服務眾多國際製作。',
    ens2_name: '維也納大教堂管弦樂團',
    ens2_desc: '定期在維也納史蒂芬大教堂及其他神聖場所演出，涵蓋宗教音樂與音樂會曲目。',
    ens3_name: '聖珀爾滕大教堂管弦樂團',
    ens3_desc: '於下奧地利聖珀爾滕大教堂定期舉辦管弦樂及室內樂演出。',
    ens4_name: 'Ensemble Wiener Collage',
    ens4_desc: '維也納現代室內樂團，以創新音樂會形式融合古典與當代曲目。',

    awards_title: '獎項與殊榮',
    award1_name: '第27屆奇美藝術獎',
    award1_desc: '台灣著名藝術獎項，表彰新銳古典音樂家之傑出成就。',
    award2_name: '教育部藝術類公費留學獎學金',
    award2_desc: '由中華民國教育部頒發，支持優秀藝術人才赴海外深造，助其完成維也納研究所學業。',
    award3_name: '盧賽恩音樂節學院',
    award3_desc: '於2017及2018年獲選參與，並受邀加入校友合奏團。該學院由皮耶爾·布列茲創立，為全球最具競爭力的進階管弦樂訓練項目之一。',

    contact_title: '聯絡我們',
    contact_desc:  '如需演出預約、樂團合作、聯演邀約或其他相關事宜，歡迎透過下方表單與我們聯繫。我們可以英文、德文或華語回覆。',
    contact_lang_label: '語言：',
    form_name:               '姓名',
    form_email:              '電子郵件',
    form_org:                '機構 / 樂團',
    form_subject:            '主旨',
    form_subject_placeholder:'— 請選擇 —',
    form_subject_concert:    '演出預約',
    form_subject_collab:     '合作邀約',
    form_subject_other:      '其他洽詢',
    form_message:            '訊息內容',
    form_submit:             '送出訊息',
    form_success:            '感謝您的來信，我們已收到您的訊息，將盡快與您聯絡。',
    form_error:              '請填寫所有必填欄位。',

    nav_videos:      '影片',
    videos_title:    '影片',
    videos_intro:    '精選演出與錄音影片。',
    video1_caption:  '演出影片——即將上線',
    video2_caption:  '演出影片——即將上線',
    video3_caption:  '演出影片——即將上線',

    footer_rights: '版權所有。',
  },

  ja: {
    nav_about:     '紹介',
    nav_career:    'キャリア',
    nav_ensembles: 'アンサンブル',
    nav_awards:    '受賞歴',
    nav_contact:   'お問い合わせ',

    hero_pretitle: 'ヴァイオリニスト &amp; 音楽家',
    hero_tagline:  'ヴァイオリニスト &nbsp;·&nbsp; 室内楽奏者 &nbsp;·&nbsp; パフォーマー',
    hero_based:    'ウィーン在住 &nbsp;·&nbsp; 国際的に活動',
    hero_cta:      '出演依頼・お問い合わせ',

    about_title: '紹介',
    about_p1: 'ミャオユー・ルギンビュール＝フン（洪妙瑜）は、台湾・台北出身のヴァイオリニスト。オーストリア・ウィーンを拠点に、オーケストラ演奏・室内楽・現代音楽を中心に国際的な活動を展開しています。幼少期より才能を開花させ、台湾からヨーロッパ古典音楽の中心地へと研鑽の場を広げてきました。',
    about_p2: '国立台湾師範大学を卒業後、台湾教育部の芸術類国費留学奨学金を獲得。ウィーン国立音楽大学にてウィーン交響楽団元コンサートマスター、Jan Pospichal 教授のもとで上級ヴァイオリンを修めました。',
    about_p3: 'ベルリン・フィルハーモニー、ケルン・フィルハーモニー、東京オペラシティをはじめとする世界有数のステージに立ち、Synchron Stage Orchestra・ウィーン大聖堂管弦楽団・ザンクト・ペルテン大聖堂管弦楽団・Ensemble Wiener Collage のメンバーとして活躍。ルツェルン・フェスティバル・アカデミーには2017・2018年に選出されました。',
    about_p4: '華語・ドイツ語・英語・日本語に対応可能。東アジアと中央ヨーロッパの音楽文化を結ぶ架け橋として、オーケストラ出演・室内楽共演・コンサート出演依頼を国際的に受け付けています。',
    instr_violin: 'ヴァイオリン',
    instr_viola:  'ヴィオラ',
    instr_piano:  'ピアノ',

    // Education
    nav_education:  '学歴',
    edu_title:      '学歴',
    edu_profile_link: 'プロフィールを見る ↗',
    edu1_year:   '2008–2013',
    edu1_school: '国立台湾師範大学',
    edu1_degree: '音楽学士',
    edu1_desc:   '台湾を代表する芸術大学にて、音楽演奏・楽理・教育の基礎を修める。',
    edu2_year:   '2013–2019',
    edu2_school: 'ウィーン国立音楽大学',
    edu2_degree: 'ヴァイオリン専攻 大学院課程',
    edu2_desc:   'ウィーン交響楽団元コンサートマスター、Jan Pospichal 教授のもとで上級ヴァイオリンを研鑽。ヨーロッパ屈指の名門音楽大学。',
    edu3_school: 'ルツェルン・フェスティバル・アカデミー',
    edu3_degree: '選抜参加者 &amp; アルムナイ・アンサンブル',
    edu3_desc:   'ピエール・ブーレーズ設立の世界最高峰オーケストラ研修機関。2017・2018年に選出され、アルムナイ・アンサンブルにも招待される。',

    career_title: '演奏活動',
    career_intro: 'ヨーロッパとアジアを舞台に国際的な演奏活動を行い、世界各地の著名なコンサートホールに定期的に出演しています。',
    venue_berlin:  'ベルリン、ドイツ',
    venue_cologne: 'ケルン、ドイツ',
    venue_tokyo:   '東京、日本',
    venue_vienna:  'ウィーン、オーストリア',
    career_2012: '台湾・台北にてプロとしての演奏活動を開始。',
    career_2017: 'ルツェルン・フェスティバル・アカデミーに選出；校友アンサンブルにて演奏。',
    career_2018: 'ウィーン大聖堂管弦楽団およびザンクト・ペルテン大聖堂管弦楽団に加入。',
    career_2019: 'ウィーンにてヴァイオリン演奏活動を本格化；Synchron Stage Orchestra に参加。',
    career_2021: 'Ensemble Wiener Collage のメンバーに就任。',

    ensembles_title: 'アンサンブル・オーケストラ',
    ens1_name: 'Synchron Stage Orchestra',
    ens1_desc: 'ウィーンを拠点とする映画・テレビ・ゲーム音楽の一流レコーディングオーケストラ。国際的なプロダクションに数多く参加しています。',
    ens2_name: 'ウィーン大聖堂管弦楽団',
    ens2_desc: 'シュテファン大聖堂をはじめとするウィーンの由緒ある聖堂にて、宗教音楽とコンサートレパートリーを定期演奏。',
    ens3_name: 'ザンクト・ペルテン大聖堂管弦楽団',
    ens3_desc: '下オーストリア州ザンクト・ペルテン大聖堂にてオーケストラ・室内楽演奏を行う団体。',
    ens4_name: 'Ensemble Wiener Collage',
    ens4_desc: 'ウィーンを拠点とする現代室内楽アンサンブル。古典から現代まで幅広いレパートリーを革新的な形式で届けています。',

    awards_title: '受賞歴・栄誉',
    award1_name: '第27回 奇美芸術賞',
    award1_desc: '新進クラシック音楽家の卓越した業績を称える台湾の権威ある芸術賞。',
    award2_name: '教育部芸術類国費留学奨学金',
    award2_desc: '台湾教育部が優秀な芸術家の海外研鑽を支援するために授与。ウィーンでの大学院留学を可能にしました。',
    award3_name: 'ルツェルン・フェスティバル・アカデミー',
    award3_desc: '2017・2018年に選出され、その後アルムナイ・アンサンブルにも招待。ピエール・ブーレーズが設立した、世界最高峰の水準を誇るオーケストラ研修プログラムのひとつです。',

    contact_title: 'お問い合わせ',
    contact_desc:  'コンサート出演依頼、オーケストラへのご招待、共演のご提案、その他のお問い合わせは、下記フォームよりご連絡ください。英語・ドイツ語・華語・日本語で対応いたします。',
    contact_lang_label: '対応言語：',
    form_name:               'お名前',
    form_email:              'メールアドレス',
    form_org:                '団体名 / アンサンブル名',
    form_subject:            'お問い合わせ種別',
    form_subject_placeholder:'— お選びください —',
    form_subject_concert:    'コンサート出演依頼',
    form_subject_collab:     '共演・コラボレーション',
    form_subject_other:      'その他のお問い合わせ',
    form_message:            'メッセージ',
    form_submit:             '送信する',
    form_success:            'お問い合わせありがとうございます。メッセージを受け取りました。近日中にご連絡いたします。',
    form_error:              '必須項目をすべてご入力ください。',

    nav_videos:      '動画',
    videos_title:    '動画',
    videos_intro:    '演奏・録音の厳選動画をご覧ください。',
    video1_caption:  '演奏動画 — 近日公開',
    video2_caption:  '演奏動画 — 近日公開',
    video3_caption:  '演奏動画 — 近日公開',

    footer_rights: '無断転載を禁じます。',
  }
};

/* -------- 2. APPLY LANGUAGE -------- */
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Update html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang === 'ja' ? 'ja' : lang;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update lang button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Persist preference
  try { localStorage.setItem('mly_lang', lang); } catch(e) {}
}

/* -------- 3. NAVBAR SCROLL -------- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* -------- 4. HAMBURGER MENU -------- */
const hamburger = document.getElementById('navHamburger');
const navLinks  = document.querySelector('.nav-links');
const langSw    = document.querySelector('.lang-switcher');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  langSw.classList.toggle('open');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    langSw.classList.remove('open');
  });
});

/* -------- 5. LANGUAGE BUTTONS -------- */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
  });
});

/* -------- 6. CONTACT FORM -------- */
const form     = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  const t = translations[currentLang];

  const name    = form.f_name.value.trim();
  const email   = form.f_email.value.trim();
  const message = form.f_message.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = t.form_error;
    feedback.className   = 'form-feedback error';
    return;
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.className   = 'form-feedback error';
    return;
  }

  /* NOTE (MEMO): No backend wired yet.
     To activate, add Formspree action attribute to the <form> tag:
       action="https://formspree.io/f/YOUR_ID" method="POST"
     And remove the e.preventDefault() call.
     Alternatively, integrate Netlify Forms by adding data-netlify="true". */

  feedback.textContent = t.form_success;
  feedback.className   = 'form-feedback success';
  form.reset();
});

/* -------- 7. FOOTER YEAR -------- */
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* -------- 8. INIT -------- */
(function init() {
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('mly_lang') || 'en'; } catch(e) {}
  // Only use saved lang if valid
  if (!translations[savedLang]) savedLang = 'en';
  applyLanguage(savedLang);
})();
