export const i18n = {
  en: {
    nav: {
      home: "Home",
      research: "Research & Projects",
      publications: "Publications",
      synthesis: "Synthesis Lab",
      join: "Join Us"
    },
    hero: {
      title: "Synthesizing the Future of Reliable Software",
      subtitle: "Welcome to the ΣλMPL∃ (Simple) Lab at IIT Hyderabad. We design robust programming languages, automate program synthesis, and verify software using formal logic.",
      ctaResearch: "Explore Research",
      ctaPlayground: "Launch Synthesis Lab",
      newsTitle: "Latest Updates"
    },
    home: {
      visionTitle: "Our Scientific Vision",
      visionDesc: "At the ΣλMPL∃ Lab, we view programming languages not merely as notation, but as the core logical machinery for solving computation problems. Our mission is to develop scalable techniques that automatically synthesize programs from specifications, mathematically verify their correctness, and design expressive type systems that prevent bugs by construction.",
      pillarsTitle: "Research Pillars",
      pillars: [
        {
          title: "Program Synthesis",
          desc: "Automatically generating executable programs from high-level specifications, types, or examples. We specialize in type-driven synthesis, component-based synthesis, and neurosymbolic hybrid architectures."
        },
        {
          title: "Automated Verification",
          desc: "Mathematically proving that software matches its formal requirements. We focus on under-approximate reasoning, incorrectness logic, and building scalable static analyzers."
        },
        {
          title: "Type Systems & Lean Proofs",
          desc: "Developing rich mathematical models such as refinement types and DSLs, and automating mathematical proofs using modern theorem provers like Lean."
        }
      ],
      highlightsTitle: "Research Impact",
      highlightsText: "Our tools and frameworks (such as Cobalt, Cobb, and Poirot) are published in top-tier international programming language forums (PLDI, OOPSLA, CAV). We bridging the gap between high-level logic and real-world system reliability."
    },
    research: {
      title: "Core Research & Projects",
      subtitle: "Discover the software tools, mathematical formalisms, and synthesis engines developed in our lab.",
      visitGithub: "Source Repository",
      activeProjects: "Active Software Systems"
    },
    publications: {
      title: "Research Publications",
      subtitle: "Our papers in leading Programming Languages and Formal Methods conferences and journals.",
      filterAll: "All Venues",
      searchPlaceholder: "Search papers by title, author, or venue...",
      viewPaper: "Read Paper",
      viewPreprint: "Preprint",
      abstract: "Abstract",
      bibtex: "BibTeX Citation"
    },
    synthesis: {
      title: "Interactive Synthesis Lab",
      subtitle: "Experience type-driven program synthesis firsthand. Choose a functional specification and watch our visual solver construct a verified implementation step-by-step.",
      selectSpec: "Select Type Specification",
      synthesizeBtn: "Start Synthesis Engine",
      solverLogs: "Synthesis Execution Log",
      synthesizedCode: "Generated & Verified Code",
      idleState: "Select a specification above and trigger the engine to witness deductive code search in action.",
      steps: {
        parsing: "Parsing refinement type specification and loading base libraries...",
        unification: "Executing type unification and resolving components...",
        tree: "Building deductive search tree... expanding AST nodes...",
        backtrack: "Type mismatch detected! Backtracking to previous search branch...",
        success: "Valid program successfully constructed! Verification proof generated."
      }
    },
    join: {
      title: "Join Our Research Group",
      subtitle: "We are actively looking for highly motivated PhD, M.Tech, and B.Tech research interns to solve foundational PL problems.",
      challengeCardTitle: "Internship Admissions Logic Challenge",
      challengeCardSubtitle: "Prove your PL instincts! Solve the simple functional programming logic puzzle below to unlock Dr. Ashish Mishra's direct recruitment application portal.",
      solvedCongrats: "Challenge Solved Successfully!",
      solvedRevealText: "Excellent job! You have demonstrated strong logic skills. Apply by sending your CV to: ",
      solvedInstruction: "Subject line should start with: [SIMPLE-LAB-INTERN-SUCCESS]",
      positionsTitle: "Open Research Positions",
      positions: [
        {
          role: "PhD Researcher (Programming Languages / Formal Methods)",
          desc: "Work on deep program synthesis or Lean automated verification. Requires strong mathematical foundations and a passion for compilers/logic."
        },
        {
          role: "M.Tech / B.Tech Thesis Interns",
          desc: "Open to IIT Hyderabad students. Develop active tools (Cobalt/Hegel extensions) and participate in core PL publications."
        },
        {
          role: "Summer Research Interns (External)",
          desc: "Fully funded summer internship working on neurosymbolic synthesis or incorrectness logic. Requires proficiency in functional programming (Haskell, OCaml, or Rust)."
        }
      ]
    }
  },
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      research: "शोध और परियोजनाएं",
      publications: "प्रकाशन",
      synthesis: "सिंथेसिस लैब",
      join: "हमारे साथ जुड़ें"
    },
    hero: {
      title: "विश्वसनीय सॉफ्टवेयर के भविष्य का निर्माण",
      subtitle: "आईआईटी हैदराबाद में ΣλMPL∃ (सिंपल) लैब में आपका स्वागत है। हम मजबूत प्रोग्रामिंग भाषाएं डिजाइन करते हैं, प्रोग्राम सिंथेसिस को स्वचालित करते हैं, और औपचारिक तर्क का उपयोग करके सॉफ्टवेयर का सत्यापन करते हैं।",
      ctaResearch: "शोध का अन्वेषण करें",
      ctaPlayground: "सिंथेसिस लैब शुरू करें",
      newsTitle: "नवीनतम समाचार"
    },
    home: {
      visionTitle: "हमारा वैज्ञानिक दृष्टिकोण",
      visionDesc: "ΣλMPL∃ लैब में, हम प्रोग्रामिंग भाषाओं को केवल नोटेशन के रूप में नहीं, बल्कि कम्प्यूटेशन समस्याओं को हल करने के लिए मुख्य तार्किक मशीनरी के रूप में देखते हैं। हमारा मिशन ऐसी स्केलेबल तकनीक विकसित करना है जो स्वचालित रूप से विनिर्देशों (specifications) से प्रोग्राम को संश्लेषित करती है, गणितीय रूप से उनकी शुद्धता को सत्यापित करती है, और ऐसे स्पष्ट प्रकार प्रणालियों (type systems) को डिजाइन करती है जो निर्माण द्वारा बग को रोकते हैं।",
      pillarsTitle: "शोध के मुख्य स्तंभ",
      pillars: [
        {
          title: "प्रोग्राम सिंथेसिस (Program Synthesis)",
          desc: "उच्च-स्तरीय विनिर्देशों, प्रकारों या उदाहरणों से स्वचालित रूप से निष्पादन योग्य प्रोग्राम उत्पन्न करना। हम प्रकार-संचालित सिंथेसिस और न्यूरोसिम्बॉलिक हाइब्रिड आर्किटेक्चर में विशेषज्ञ हैं।"
        },
        {
          title: "स्वचालित सॉफ्टवेयर सत्यापन (Automated Verification)",
          desc: "गणितीय रूप से यह साबित करना कि सॉफ्टवेयर अपनी औपचारिक आवश्यकताओं से मेल खाता है। हम इनकरेक्टनेस लॉजिक और स्केलेबल स्टैटिक एनालाइज़र के निर्माण पर ध्यान केंद्रित करते हैं।"
        },
        {
          title: "प्रकार प्रणालियाँ और लीन (Lean) प्रमाण",
          desc: "रिफाइनमेंट प्रकारों (refinement types) जैसे समृद्ध गणितीय मॉडल विकसित करना, और लीन (Lean) जैसे आधुनिक प्रमेय सिद्धकर्ताओं का उपयोग करके गणितीय प्रमाणों को स्वचालित करना।"
        }
      ],
      highlightsTitle: "शोध का प्रभाव",
      highlightsText: "हमारे उपकरण और रूपरेखा (जैसे कोबाल्ट, कॉब, और पोयरोट) शीर्ष अंतरराष्ट्रीय प्रोग्रामिंग भाषा मंचों (PLDI, OOPSLA, CAV) में प्रकाशित होते हैं। हम उच्च-स्तरीय तर्क और वास्तविक दुनिया की विश्वसनीयता के बीच की दूरी को पाटते हैं।"
    },
    research: {
      title: "मुख्य शोध और परियोजनाएं",
      subtitle: "हमारी प्रयोगशाला में विकसित सॉफ्टवेयर टूल, गणितीय औपचारिकताओं और सिंथेसिस इंजनों की खोज करें।",
      visitGithub: "सोर्स रिपोजिटरी",
      activeProjects: "सक्रिय सॉफ्टवेयर सिस्टम"
    },
    publications: {
      title: "शोध प्रकाशन",
      subtitle: "प्रमुख प्रोग्रामिंग भाषाओं और औपचारिक तरीकों के सम्मेलनों और पत्रिकाओं में हमारे पत्र।",
      filterAll: "सभी स्थान",
      searchPlaceholder: "शीर्षक, लेखक या स्थान द्वारा शोध पत्र खोजें...",
      viewPaper: "शोध पत्र पढ़ें",
      viewPreprint: "प्रीप्रिंट",
      abstract: "सार (Abstract)",
      bibtex: "बिबटेक्स प्रशस्ति (BibTeX)"
    },
    synthesis: {
      title: "इंटरैक्टिव सिंथेसिस लैब",
      subtitle: "प्रकार-संचालित कार्यक्रम सिंथेसिस का प्रत्यक्ष अनुभव करें। एक कार्यात्मक विनिर्देश चुनें और देखें कि हमारा विज़ुअल सॉल्वर चरण-दर-चरण सत्यापित कार्यान्वयन का निर्माण कैसे करता है।",
      selectSpec: "प्रकार विनिर्देश (Type Specification) चुनें",
      synthesizeBtn: "सिंथेसिस इंजन शुरू करें",
      solverLogs: "सिंथेसिस निष्पादन लॉग (Log)",
      synthesizedCode: "जनरेट किया गया और सत्यापित कोड",
      idleState: "डिडक्टिव कोड सर्च को लाइव देखने के लिए ऊपर एक विनिर्देश चुनें और इंजन शुरू करें।",
      steps: {
        parsing: "रिफाइनमेंट प्रकार विनिर्देश को पार्स करना और बेस लाइब्रेरी लोड करना...",
        unification: "टाइप यूनिफिकेशन निष्पादित करना और घटकों को हल करना...",
        tree: "डिडक्टिव सर्च ट्री का निर्माण... एएसटी नोड्स का विस्तार...",
        backtrack: "टाइप बेमेल का पता चला! पिछले खोज शाखा में वापस (Backtracking) जाना...",
        success: "वैध प्रोग्राम सफलतापूर्वक निर्मित! सत्यापन प्रमाण उत्पन्न हुआ।"
      }
    },
    join: {
      title: "हमारे शोध समूह में शामिल हों",
      subtitle: "हम बुनियादी पीएल (PL) समस्याओं को हल करने के लिए अत्यधिक प्रेरित पीएचडी, एम.टेक और बी.टेक शोध इंटर्न की तलाश कर रहे हैं।",
      challengeCardTitle: "इंटर्नशिप प्रवेश तार्किक चुनौती",
      challengeCardSubtitle: "अपने पीएल (PL) ज्ञान को साबित करें! डॉ. आशीष मिश्रा के सीधे भर्ती आवेदन पोर्टल को अनलॉक करने के लिए नीचे दी गई कार्यात्मक प्रोग्रामिंग पहेली को हल करें।",
      solvedCongrats: "चुनौती सफलतापूर्वक हल हुई!",
      solvedRevealText: "उत्कृष्ट कार्य! आपने मजबूत तार्किक कौशल का प्रदर्शन किया है। अपना सीवी यहां भेजकर आवेदन करें: ",
      solvedInstruction: "विषय (Subject) पंक्ति इससे शुरू होनी चाहिए: [SIMPLE-LAB-INTERN-SUCCESS]",
      positionsTitle: "खुले शोध पद",
      positions: [
        {
          role: "पीएचडी शोधकर्ता (प्रोग्रामिंग भाषाएं / औपचारिक तरीके)",
          desc: "गहरे प्रोग्राम सिंथेसिस या लीन स्वचालित सत्यापन पर काम करें। मजबूत गणितीय आधार और कंपाइलर/लॉजिक के प्रति जुनून आवश्यक है।"
        },
        {
          role: "एम.टेक / बी.टेक थीसिस इंटर्न",
          desc: "आईआईटी हैदराबाद के छात्रों के लिए खुला है। सक्रिय उपकरण विकसित करें और मुख्य पीएल प्रकाशनों में भाग लें।"
        },
        {
          role: "ग्रीष्मकालीन अनुसंधान इंटर्न (बाहरी)",
          desc: "पूरी तरह से वित्त पोषित समर इंटर्नशिप। कार्यात्मक प्रोग्रामिंग (Haskell, OCaml, या Rust) में दक्षता की आवश्यकता है।"
        }
      ]
    }
  },
  te: {
    nav: {
      home: "ముఖ్య పేజీ",
      research: "పరిశోధనలు",
      publications: "ప్రచురణలు",
      synthesis: "సింథసిస్ ల్యాబ్",
      join: "మాతో చేరండి"
    },
    hero: {
      title: "విశ్వసనీయ సాఫ్ట్‌వేర్ భవిష్యత్తును సృష్టించడం",
      subtitle: "ఐఐటీ హైదరాబాద్‌ లోని ΣλMPL∃ (సింపుల్) ల్యాబ్‌కు స్వాగతం. మేము బలమైన ప్రోగ్రామింగ్ భాషలను డిజైన్ చేస్తాము, ప్రోగ్రామ్ సింథసిస్‌ను ఆటోమేట్ చేస్తాము మరియు ఫార్మల్ లాజిక్ ఉపయోగించి సాఫ్ట్‌వేర్‌ను ధృవీకరిస్తాము.",
      ctaResearch: "పరిశోధనలను అన్వేషించండి",
      ctaPlayground: "సింథసిస్ ల్యాబ్ ప్రారంభించండి",
      newsTitle: "తాజా వార్తలు"
    },
    home: {
      visionTitle: "మా శాస్త్రీయ దృక్పథం",
      visionDesc: "ΣλMPL∃ ల్యాబ్‌లో, మేము ప్రోగ్రామింగ్ భాషలను కేవలం సంకేతాలుగా కాకుండా, కంప్యూటేషన్ సమస్యలను పరిష్కరించడానికి ప్రధాన తార్కిక యంత్రాలుగా చూస్తాము. స్పెసిఫికేషన్‌ల నుండి ఆటోమేటిక్‌గా ప్రోగ్రామ్‌లను సింథసైజ్ చేసే, వాటి గణితపరమైన కచ్చితత్వాన్ని ధృవీకరించే మరియు సాఫ్ట్‌వేర్ బగ్స్ రాకుండా ముందే నిరోధించే టైప్ సిస్టమ్స్‌ను డిజైన్ చేసే సాంకేతికతలను అభివృద్ధి చేయడమే మా లక్ష్యం.",
      pillarsTitle: "పరిశోధనా స్తంభాలు",
      pillars: [
        {
          title: "ప్రోగ్రామ్ సింథసిస్ (Program Synthesis)",
          desc: "స్పెసిఫికేషన్‌లు, టైప్స్ లేదా ఉదాహరణల నుండి ఆటోమేటిక్‌గా రన్ అయ్యే ప్రోగ్రామ్‌లను సృష్టించడం. మేము టైప్-డ్రైవెన్ సింథసిస్ మరియు న్యూరోసింబాలిక్ హైబ్రిడ్ ఆర్కిటెక్చర్‌లలో ప్రత్యేకత కలిగి ఉన్నాము."
        },
        {
          title: "ఆటోమేటెడ్ సాఫ్ట్‌వేర్ ధృవీకరణ",
          desc: "సాఫ్ట్‌వేర్ దాని అధికారిక అవసరాలకు సరిగ్గా సరిపోతుందని గణితశాస్త్రపరంగా నిరూపించడం. మేము ఇన్‌కరెక్ట్‌నెస్ లాజిక్ మరియు స్కేలబుల్ స్టాటిక్ ఎనలైజర్ల నిర్మాణంపై దృష్టి పెడతాము."
        },
        {
          title: "టైప్ సిస్టమ్స్ & లీన్ (Lean) ప్రూఫ్స్",
          desc: "రిఫైన్‌మెంట్ టైప్స్ వంటి గొప్ప గణిత నమూనాలను అభివృద్ధి చేయడం మరియు లీన్ (Lean) వంటి ఆధునిక థియరమ్ ప్రూవర్స్ ఉపయోగించి గణిత ఆధారాలను ఆటోమేట్ చేయడం."
        }
      ],
      highlightsTitle: "పరిశోధనల ప్రభావం",
      highlightsText: "మా ల్యాబ్ రూపొందించిన కోబాల్ట్ (Cobalt), కాబ్ (Cobb) మరియు పాయిరోట్ (Poirot) వంటి టూల్స్ అంతర్జాతీయ ప్రోగ్రామింగ్ లాంగ్వేజెస్ ఫోరమ్స్ (PLDI, OOPSLA, CAV) లో ప్రచురించబడ్డాయి. మేము సైద్ధాంతిక లాజిక్ మరియు నిజ-ప్రపంచ సిస్టమ్ విశ్వసనీయత మధ్య వంతెనను నిర్మిస్తాము."
    },
    research: {
      title: "ప్రధాన పరిశోధనలు & ప్రాజెక్ట్‌లు",
      subtitle: "మా ల్యాబ్‌లో అభివృద్ధి చేసిన సాఫ్ట్‌వేర్ టూల్స్, గణిత శాస్త్ర పద్ధతులు మరియు సింథసిస్ ఇంజన్లను తెలుసుకోండి.",
      visitGithub: "సోర్స్ రిపోజిటరీ",
      activeProjects: "సక్రియ సాఫ్ట్‌వేర్ సిస్టమ్స్"
    },
    publications: {
      title: "పరిశోధనా ప్రచురణలు",
      subtitle: "ప్రముఖ ప్రోగ్రామింగ్ లాంగ్వేజెస్ మరియు ఫార్మల్ మెథడ్స్ కాన్ఫరెన్స్‌లలో మా పరిశోధనా పత్రాలు.",
      filterAll: "అన్ని వేదికలు",
      searchPlaceholder: "శీర్షిక, రచయిత లేదా వేదిక ద్వారా శోధించండి...",
      viewPaper: "పేపర్ చదవండి",
      viewPreprint: "ప్రిప్రింట్",
      abstract: "సారాంశం (Abstract)",
      bibtex: "బిబ్‌టెక్స్ సైటేషన్ (BibTeX)"
    },
    synthesis: {
      title: "ఇంటరాక్టివ్ సింథసిస్ ల్యాబ్",
      subtitle: "టైప్-డ్రైవెన్ ప్రోగ్రామ్ సింథసిస్‌ను స్వయంగా అనుభవించండి. ఒక ఫంక్షనల్ స్పెసిఫికేషన్‌ను ఎంచుకుని, మా విజువల్ సాల్వర్ స్టెప్-బై-స్టెప్ ధృవీకరించబడిన కోడ్‌ను ఎలా నిర్మిస్తుందో చూడండి.",
      selectSpec: "టైప్ స్పెసిఫికేషన్ ఎంచుకోండి",
      synthesizeBtn: "సింథసిస్ ఇంజన్ ప్రారంభించండి",
      solverLogs: "సింథసిస్ ఎగ్జిక్యూషన్ లాగ్ (Log)",
      synthesizedCode: "రూపొందించబడిన & ధృవీకరించబడిన కోడ్",
      idleState: "డిడక్టివ్ కోడ్ సెర్చ్ లైవ్‌గా చూడటానికి పైన ఒక స్పెసిఫికేషన్ ఎంచుకుని ఇంజన్ రన్ చేయండి.",
      steps: {
        parsing: "రిఫైన్‌మెంట్ టైప్ స్పెసిఫికేషన్‌ను పార్స్ చేయడం మరియు బేస్ లైబ్రరీలను లోడ్ చేయడం...",
        unification: "టైప్ యూనిఫికేషన్‌ను రన్ చేయడం మరియు భాగాలను పరిష్కరించడం...",
        tree: "డిడక్టివ్ సెర్చ్ ట్రీని నిర్మించడం... ఎస్.టి (AST) నోడ్స్‌ను విస్తరించడం...",
        backtrack: "టైప్ సరిపోలలేదు! మునుపటి సెర్చ్ బ్రాంచ్‌కు తిరిగి (Backtracking) వెళ్లడం...",
        success: "చెల్లుబాటు అయ్యే ప్రోగ్రామ్ విజయవంతంగా నిర్మించబడింది! ధృవీకరణ రుజువు సృష్టించబడింది."
      }
    },
    join: {
      title: "మా పరిశోధనా బృందంలో చేరండి",
      subtitle: "ఫౌండేషనల్ పిఎల్ (PL) సమస్యలను పరిష్కరించడానికి మేము అత్యంత ప్రేరణ పొందిన పీహెచ్‌డీ, ఎమ్.టెక్ మరియు బీ.టెక్ పరిశోధనా ఇంటర్న్‌ల కోసం చూస్తున్నాము.",
      challengeCardTitle: "ఇంటర్న్‌షిప్ అడ్మిషన్స్ లాజిక్ ఛాలెంజ్",
      challengeCardSubtitle: "మీ పిఎల్ (PL) నైపుణ్యాన్ని నిరూపించుకోండి! డాక్టర్ ఆశిష్ మిశ్రా యొక్క అప్లికేషన్ పోర్టల్‌ను అన్‌లాక్ చేయడానికి క్రింది ఫంక్షనల్ ప్రోగ్రామింగ్ పజిల్ పరిష్కరించండి.",
      solvedCongrats: "ఛాలెంజ్ విజయవంతంగా పరిష్కరించబడింది!",
      solvedRevealText: "అద్భుతమైన పని! మీరు బలమైన తార్కిక నైపుణ్యాలను ప్రదర్శించారు. మీ సివి ని ఇక్కడకు పంపడం ద్వారా దరఖాస్తు చేసుకోండి: ",
      solvedInstruction: "సబ్జెక్ట్ లైన్ తప్పనిసరిగా దీనితో ప్రారంభం కావాలి: [SIMPLE-LAB-INTERN-SUCCESS]",
      positionsTitle: "ఖాళీగా ఉన్న పరిశోధనా స్థానాలు",
      positions: [
        {
          role: "పీహెచ్‌డీ పరిశోధకుడు (ప్రోగ్రామింగ్ లాంగ్వేజెస్ / ఫార్మల్ మెథడ్స్)",
          desc: "డీప్ ప్రోగ్రామ్ సింథసిస్ లేదా లీన్ ఆటోమేటెడ్ వెరిఫికేషన్‌పై పనిచేయండి. బలమైన గణిత పునాదులు మరియు కంపైలర్స్/లాజిక్ పట్ల ఆసక్తి అవసరం."
        },
        {
          role: "ఎమ్.టెక్ / బీ.టెక్ థీసిస్ ఇంటర్న్స్",
          desc: "ఐఐటీ హైదరాబాద్ విద్యార్థులకు మాత్రమే. మా ల్యాబ్ టూల్స్ అభివృద్ధిలో మరియు పరిశోధనా పత్రాల ప్రచురణలో పాల్గొనండి."
        },
        {
          role: "సమ్మర్ రీసెర్చ్ ఇంటర్న్స్ (ఎక్స్‌టర్నల్)",
          desc: "పూర్తిగా నిధులు సమకూర్చిన సమ్మర్ ఇంటర్న్‌షిప్. ఫంక్షనల్ ప్రోగ్రామింగ్ (Haskell, OCaml, లేదా Rust) లో నైపుణ్యం ఉండాలి."
        }
      ]
    }
  }
};
