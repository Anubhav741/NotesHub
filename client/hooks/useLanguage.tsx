import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi";

const translations = {
  en: {
    // Header
    header: {
      streams: "Streams",
      features: "Features",
      help: "Help",
      searchPlaceholder: "Search notes...",
    },
    // Hero
    hero: {
      title: "Your Complete Study Hub for Board & Competitive Exams",
      subtitle: "Organized notes, structured study plans, and AI-powered explanations. Everything you need to ace JEE, NEET, CA, and beyond.",
      startLearning: "Start Learning Now",
      exploreStreams: "Explore Streams",
      materials: "Study Materials",
      students: "Active Students",
      successRate: "Success Rate",
    },
    // Streams
    streams: {
      title: "Choose Your Stream",
      subtitle: "Tailored study materials for your exam board",
      jee: "JEE",
      jeeDesc: "Physics, Chemistry & Mathematics notes for JEE Mains & Advanced",
      neet: "NEET",
      neetDesc: "Biology, Chemistry & Physics comprehensive study material for NEET",
      ca: "CA",
      caDesc: "Accounts, Laws & Economics notes for CA Foundation & Intermediate",
      iitNit: "IIT/NIT",
      iitNitDesc: "Advanced CS courses and interview preparation materials",
      explore: "Explore",
    },
    // Features
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need for effective studying",
      creditScore: "Credit Score",
      creditScoreDesc: "Earn credits by completing notes and milestones. Track your progress with our gamified credit system.",
      tasks: "Smart Tasks",
      tasksDesc: "Personalized task lists and study schedules. Never miss important topics or revision deadlines.",
      aiExplanation: "AI Explanations",
      aiDesc: "Get instant, AI-powered explanations for complex concepts. Available 24/7 for quick doubts.",
      downloadNotes: "Download Notes",
      downloadDesc: "Download notes in PDF, DOCX, or images. Study offline with no internet required.",
      markComplete: "Mark Completed",
      markDesc: "Track completed chapters and topics. Visual progress indicators keep you motivated.",
      multiLang: "Multi-Language",
      multiLangDesc: "Study in English or Hindi. Switch languages anytime while learning.",
    },
    // Upload Notes
    upload: {
      title: "Share Your Knowledge & Earn Credits",
      subtitle: "Upload your notes and help fellow students while earning credits",
      uploadNotes: "Upload Notes",
      uploadDesc: "Share your study materials with the community",
      earnCredits: "Earn Credits",
      earnCreditsDesc: "Get rewarded for each upload that helps students",
      getVerified: "Get Verified",
      getVerifiedDesc: "Build your reputation as a knowledge contributor",
      howItWorks: "How It Works",
      step1: "Prepare Your Notes",
      step1Desc: "Organize your study materials in a clear format",
      step2: "Upload to Platform",
      step2Desc: "Share PDFs, images, or documents with the community",
      step3: "Earn Credits",
      step3Desc: "Get credits for each verified and useful note",
      startUploading: "Start Uploading Notes",
    },
    // CTA
    cta: {
      title: "Ready to Transform Your Studies?",
      subtitle: "Join students who are already acing their exams with NotesHub",
      getStarted: "Get Started Today",
    },
    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Get answers to common questions",
      q1: "Is NotesHub free to use?",
      a1: "Yes! NotesHub offers a free tier with access to thousands of study materials. Premium features are available at affordable prices.",
      q2: "Can I download notes for offline use?",
      a2: "Absolutely! You can download any notes in PDF or DOCX format and study offline anytime.",
      q3: "How often are notes updated?",
      a3: "We update our content regularly based on exam patterns, student feedback, and curriculum changes.",
      q4: "Is the AI explanation feature always available?",
      a4: "Yes, our AI-powered explanation feature is available 24/7 to answer your academic questions.",
      q5: "Can I switch between streams?",
      a5: "Yes, you can explore and access multiple streams based on your educational needs.",
      q6: "How do I track my progress?",
      a6: "Use our credit score system and progress tracker to monitor your learning journey and earned achievements.",
    },
    // Footer
    footer: {
      about: "Your all-in-one platform for organized study materials and exam preparation.",
      quickLinks: "Quick Links",
      resources: "Resources",
      getInTouch: "Get in Touch",
      startJourney: "Start Your Learning Journey Today",
      description: "Join thousands of students preparing for JEE, NEET, and CA exams",
      getStartedFree: "Get Started Free",
      copyright: "© 2024 NotesHub. All rights reserved.",
    },
    // 404
    notFound: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist. Let's get you back on track!",
      returnHome: "Return to Home",
    },
    // Placeholder
    placeholder: {
      featureComingSoon: "Feature Coming Soon",
      inDevelopment: "This feature is currently in development. We're working hard to bring you an amazing experience!",
      explore: "Explore other features or return to the homepage to get started with your studies.",
      backHome: "Back to Home",
      exploreFeatures: "Explore Features",
      feedback: "Want this feature sooner? Let us know your feedback!",
      sendFeedback: "Send Feedback →",
    },
  },
  hi: {
    // Header
    header: {
      streams: "विषय",
      features: "विशेषताएं",
      help: "मदद",
      searchPlaceholder: "नोट्स खोजें...",
    },
    // Hero
    hero: {
      title: "बोर्ड और प्रतियोगी परीक्षाओं के लिए आपका पूर्ण अध्ययन केंद्र",
      subtitle: "संगठित नोट्स, संरचित अध्ययन योजनाएं, और AI-संचालित व्याख्याएं। JEE, NEET, CA और अन्य परीक्षाओं में सफल होने के लिए आपको आवश्यक सब कुछ।",
      startLearning: "अभी शुरू करें",
      exploreStreams: "विषय देखें",
      materials: "अध्ययन सामग्री",
      students: "सक्रिय छात्र",
      successRate: "सफलता दर",
    },
    // Streams
    streams: {
      title: "अपना विषय चुनें",
      subtitle: "आपकी परीक्षा बोर्ड के लिए तैयार किए गए अध्ययन सामग्री",
      jee: "JEE",
      jeeDesc: "JEE Mains और Advanced के लिए भौतिकी, रसायन विज्ञान और गणित के नोट्स",
      neet: "NEET",
      neetDesc: "NEET के लिए जीव विज्ञान, रसायन विज्ञान और भौतिकी की व्यापक सामग्री",
      ca: "CA",
      caDesc: "CA Foundation और Intermediate के लिए लेखांकन, कानून और अर्थशास्त्र के नोट्स",
      iitNit: "IIT/NIT",
      iitNitDesc: "उन्नत CS पाठ्यक्रम और साक्षात्कार की तैयारी सामग्री",
      explore: "देखें",
    },
    // Features
    features: {
      title: "शक्तिशाली विशेषताएं",
      subtitle: "प्रभावी अध्ययन के लिए आपको आवश्यक सब कुछ",
      creditScore: "क्रेडिट स्कोर",
      creditScoreDesc: "नोट्स और मील के पत्थर पूरा करके क्रेडिट अर्जित करें। हमारे गेमिफाइड क्रेडिट सिस्टम के साथ अपनी प्रगति ट्रैक करें।",
      tasks: "स्मार्ट कार्य",
      tasksDesc: "व्यक्तिगत कार्य सूचियां और अध्ययन अनुसूचियां। महत्वपूर्ण विषयों या संशोधन समय सीमा को कभी न भूलें।",
      aiExplanation: "AI व्याख्याएं",
      aiDesc: "जटिल अवधारणाओं के लिए तत्काल, AI-संचालित व्याख्याएं प्राप्त करें। 24/7 त्वरित संदेह के लिए उपलब्ध।",
      downloadNotes: "नोट्स डाउनलोड करें",
      downloadDesc: "PDF, DOCX, या छवियों में नोट्स डाउनलोड करें। इंटरनेट के बिना ऑफलाइन पढ़ें।",
      markComplete: "पूर्ण चिह्नित करें",
      markDesc: "पूर्ण किए गए अध्यायों और विषयों को ट्रैक करें। दृश्य प्रगति सूचक आपको प्रेरित रखते हैं।",
      multiLang: "बहुभाषी",
      multiLangDesc: "अंग्रेजी या हिंदी में पढ़ें। अध्ययन करते समय कभी भी भाषा बदलें।",
    },
    // Upload Notes
    upload: {
      title: "अपना ज्ञान साझा करें और क्रेडिट अर्जित करें",
      subtitle: "अपने नोट्स अपलोड करें और साथी छात्रों की मदद करते हुए क्रेडिट अर्जित करें",
      uploadNotes: "नोट्स अपलोड करें",
      uploadDesc: "समुदाय के साथ अपनी अध्ययन सामग्री साझा करें",
      earnCredits: "क्रेडिट अर्जित करें",
      earnCreditsDesc: "प्रत्येक अपलोड के लिए पुरस्कार प्राप्त करें जो छात्रों की मदद करता है",
      getVerified: "सत्यापित करें",
      getVerifiedDesc: "ज्ञान योगदानकर्ता के रूप में अपनी प्रतिष्ठा बनाएं",
      howItWorks: "यह कैसे काम करता है",
      step1: "अपने नोट्स तैयार करें",
      step1Desc: "अपनी अध्ययन सामग्री को स्पष्ट प्रारूप में व्यवस्थित करें",
      step2: "प्लेटफॉर्म पर अपलोड करें",
      step2Desc: "समुदाय के साथ PDFs, छवियों या दस्तावेज़ साझा करें",
      step3: "क्रेडिट अर्जित करें",
      step3Desc: "प्रत्येक सत्यापित और उपयोगी नोट के लिए क्रेडिट प्राप्त करें",
      startUploading: "नोट्स अपलोड करना शुरू करें",
    },
    // CTA
    cta: {
      title: "अपनी पढ़ाई को बदलने के लिए तैयार हैं?",
      subtitle: "उन छात्रों के साथ जुड़ें जो पहले से ही NotesHub के साथ परीक्षाएं पास कर रहे हैं",
      getStarted: "आज ही शुरू करें",
    },
    // FAQ
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      subtitle: "सामान्य प्रश्नों के उत्तर प्राप्त करें",
      q1: "क्या NotesHub का उपयोग करना मुफ़्त है?",
      a1: "हाँ! NotesHub एक मुफ़्त स्तर प्रदान करता है जिसमें हज़ारों अध्ययन सामग्री तक पहुँच है। प्रीमियम सुविधाएं सस्ती कीमतों पर उपलब्ध हैं।",
      q2: "क्या मैं ऑफलाइन उपयोग के लिए नोट्स डाउनलोड कर सकता हूँ?",
      a2: "बिल्कुल! आप किसी भी नोट्स को PDF या DOCX प्रारूप में डाउनलोड कर सकते हैं और कभी भी ऑफलाइन पढ़ सकते हैं।",
      q3: "नोट्स कितनी बार अपडेट होते हैं?",
      a3: "हम परीक्षा पैटर्न, छात्र प्रतिक्रिया और पाठ्यक्रम परिवर्तनों के आधार पर नियमित रूप से सामग्री को अपडेट करते हैं।",
      q4: "क्या AI व्याख्या सुविधा हमेशा उपलब्ध है?",
      a4: "हाँ, हमारी AI-संचालित व्याख्या सुविधा आपके शैक्षणिक प्रश्नों का उत्तर देने के लिए 24/7 उपलब्ध है।",
      q5: "क्या मैं विषयों के बीच स्विच कर सकता हूँ?",
      a5: "हाँ, आप अपनी शैक्षणिक आवश्यकताओं के आधार पर कई विषयों का पता लगा सकते हैं और उन तक पहुँच सकते हैं।",
      q6: "मैं अपनी प्रगति को कैसे ट्रैक करूँ?",
      a6: "अपनी सीखने की यात्रा और अर्जित उपलब्धियों की निगरानी करने के लिए हमारे क्रेडिट स्कोर सिस्टम और प्रगति ट्रैकर का उपयोग करें।",
    },
    // Footer
    footer: {
      about: "संगठित अध्ययन सामग्री और परीक्षा की तैयारी के लिए आपका सर्वव्यापी मंच।",
      quickLinks: "त्वरित लिंक",
      resources: "संसाधन",
      getInTouch: "हमसे संपर्क करें",
      startJourney: "आज ही अपनी सीखने की यात्रा शुरू करें",
      description: "JEE, NEET और CA परीक्षाओं की तैयारी कर रहे हज़ारों छात्रों के साथ जुड़ें",
      getStartedFree: "मुफ़्त शुरू करें",
      copyright: "© 2024 NotesHub। सर्वाधिकार सुरक्षित।",
    },
    // 404
    notFound: {
      title: "पृष्ठ नहीं मिला",
      description: "आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है। आइए आपको सही रास्ते पर वापस लाएं!",
      returnHome: "होम पर लौटें",
    },
    // Placeholder
    placeholder: {
      featureComingSoon: "जल्द आने वाली सुविधा",
      inDevelopment: "यह सुविधा वर्तमान में विकास में है। हम आपके लिए एक अद्भुत अनुभव लाने के लिए कड़ी मेहनत कर रहे हैं!",
      explore: "अन्य सुविधाओं का पता लगाएं या अपनी पढ़ाई शुरू करने के लिए होमपेज पर लौटें।",
      backHome: "होम पर वापस",
      exploreFeatures: "सुविधाओं का पता लगाएं",
      feedback: "क्या आप इस सुविधा को जल्दी चाहते हैं? हमें अपनी प्रतिक्रिया बताएं!",
      sendFeedback: "प्रतिक्रिया भेजें →",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keys: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (keys: string): string => {
    const keyPath = keys.split(".");
    let value: any = translations[language];

    for (const key of keyPath) {
      value = value?.[key];
      if (!value) return keys;
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
