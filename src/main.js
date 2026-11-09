import { images as I } from "./data/media.js";
import {
  finishingProjects,
  filterProjects,
  getProjectCategories,
  projects,
} from "./data/projects.js";

const $ = (s) => document.querySelector(s);
document.querySelectorAll("[data-k]").forEach((e) => (e.src = I[e.dataset.k]));
const A = [
  ["Featured projects and videos", "مشروعات وفيديوهات مميزة"],
  ["Show featured slide", "عرض الشريحة"],
  ["Choose a featured slide", "اختر شريحة مميزة"],
  ["Project video 1", "فيديو المشروع الأول"],
  ["Project video 2", "فيديو المشروع الثاني"],
  ["Obour Land", "عبور لاند"],
  ["About", "من نحن"],
  ["Expertise", "خبراتنا"],
  ["Projects", "المشاريع"],
  ["Design vs Site", "التصميم والتنفيذ"],
  ["Contact", "تواصل معنا"],
  ["Part of Eng. Sherif Al-Otaibi Group", "جزء من مجموعة م. شريف العتيبي"],
  ["Eng. Sherif Al-Otaibi Group", "مجموعة م. شريف العتيبي"],
  [
    "Commercial Registration No. 10230 07000 20743",
    "رقم السجل التجاري 10230 07000 20743",
  ],
  ["From Design to Execution…", "من التصميم إلى التنفيذ، نتحكم في كل التفاصيل"],
  [
    "Engineering and construction across Egypt.",
    "هندسة وإنشاءات متكاملة في أنحاء مصر",
  ],
  [
    "Integrated engineering and construction firm…",
    "شركة هندسة وإنشاءات متكاملة تنفّذ مشروعات صناعية وإدارية وطبية ودينية في مختلف أنحاء مصر.",
  ],
  ["View projects", "استعرض المشاريع"],
  ["About KEMET EG", "عن كيميت EG"],
  ["One team, from first sketch…", "فريق واحد من أول رسمة حتى التسليم النهائي"],
  [
    "KEMET EG is an integrated…",
    "كيميت EG شركة هندسة وإنشاءات متكاملة، تأسست كمنشأة فردية على خبرة قيادية في إدارة وتسليم المشروعات الكبرى، مع تركيز على التنفيذ المبني على التصميم والتحكم في التكلفة.",
  ],
  [
    "Our Executive Manager…",
    "يقود الشركة مدير تنفيذي ومدير مشروعات خاض مشروعات في عدة شركات، من مراحل التصميم الأولى حتى التنفيذ الكامل والتسليم. وهذا يمنحنا تحكمًا كاملًا في تنسيق التصميم وإدارة التكلفة وأعمال الموقع والجدول الزمني.",
  ],
  ["Company information", "بيانات الشركة"],
  ["Legal structure…", "الشكل القانوني: منشأة فردية"],
  ["Showcased projects", "مشروعات معروضة"],
  ["Sectors served", "قطاعات نخدمها"],
  ["Largest single facility", "أكبر منشأة منفردة"],
  ["Core services under one roof", "خدمات أساسية تحت سقف واحد"],
  ["Core expertise", "مجالات خبرتنا"],
  [
    "Design and construction run…",
    "التصميم والإنشاء في يد واحدة، فما يُقرَّر على الورق يصمد في الموقع.",
  ],
  ["Design", "التصميم"],
  ["Build", "التنفيذ"],
  ["Architectural Design", "التصميم المعماري"],
  ["Interior Design", "التصميم الداخلي"],
  ["Structural Design", "التصميم الإنشائي"],
  ["MEP Design", "تصميم الأعمال الكهروميكانيكية MEP"],
  ["BIM Solutions", "حلول BIM"],
  ["Construction & Finishing", "الإنشاءات والتشطيبات"],
  ["Administrative Buildings", "المباني الإدارية"],
  ["Steel Structures & Concrete Works", "المنشآت المعدنية والأعمال الخرسانية"],
  ["Firefighting Systems", "أنظمة مكافحة الحريق"],
  ["Selected projects", "مشروعات مختارة"],
  [
    "Open a project to swipe…",
    "افتح أي مشروع لتتصفح صور التصميم وصور الموقع بالسحب.",
  ],
  ["Design vs. as built", "التصميم مقابل التنفيذ"],
  [
    "Drag the handle…",
    "اسحب المؤشر للمقارنة بين التصميم ثلاثي الأبعاد المعتمد والمساحة المنفّذة فعليًا.",
  ],
  ["As built", "بعد التنفيذ"],
  ["Cold storage", "مخزن التبريد"],
  ["DSV boardroom", "قاعة اجتماعات DSV"],
  ["MBC reception", "استقبال MBC"],
  ["Textile hall", "صالة المصنع"],
  ["Obour warehouse", "مخزن العبور"],
  ["Planning a project?", "تخطط لمشروع؟"],
  [
    "Send us your brief…",
    "أرسل لنا وصف مشروعك وسنعود إليك بخطة تصميم وتنفيذ. بيانات التواصل بالأسفل.",
  ],
  ["Design-driven execution", "تنفيذ مبني على التصميم"],
  ["Architecture, interiors…", "العمارة والتصميم الداخلي والإنشائي وMEP وBIM"],
  ["Turnkey construction…", "إنشاء وتشطيب بنظام تسليم المفتاح"],
  ["Firefighting and fire alarm…", "دمج أنظمة الإطفاء وإنذار الحريق"],
  ["Cost and schedule…", "التحكم في التكلفة والجدول الزمني"],
  ["Email us", "راسلنا"],
  [
    "KEMET EG – From Design…",
    "كيميت EG – من التصميم إلى التنفيذ، نتحكم في كل التفاصيل.",
  ],
  ["© 2026…", "© 2026 كيميت EG. جميع الحقوق محفوظة."],
  ["Cold Storage Facility", "مخزن تبريد"],
  ["Textile Manufacturing Facility", "مصنع نسيج"],
  ["Warehouse Upgrade – Park Ville Stores", "تطوير مخزن – باركفيل ستورز"],
  ["Warehouse Upgrade – Obour Land", "تطوير مخزن – عبور لاند"],
  [
    "Refrigerated Food Packaging Hall – DSV",
    "صالة تعبئة الأغذية المبردة – DSV",
  ],
  ["DSV Egypt Head Office", "المقر الرئيسي لـ DSV مصر"],
  [
    "Arab Center for Education Consultancy",
    "المركز العربي للاستشارات التعليمية",
  ],
  ["MBC Medical Beauty Center", "مركز MBC للتجميل الطبي"],
  ["Mosque Project", "مشروع المساجد"],
  ["Interior Design Solutions", "حلول التصميم الداخلي"],
  ["Finishing Works", "أعمال التشطيبات"],
  ["Gallery coming soon", "المعرض قريبًا"],
  ["Obour City", "مدينة العبور"],
  ["Industrial Zone A7…", "المنطقة الصناعية A7، العاشر من رمضان"],
  ["Egypt", "مصر"],
  ["6th of October City", "مدينة 6 أكتوبر"],
  ["First Settlement…", "التجمع الأول، القاهرة الجديدة"],
  ["Agouza, Giza", "العجوزة، الجيزة"],
  ["10th of Ramadan City & Ismailia", "العاشر من رمضان والإسماعيلية"],
  ["Apartments, villas…", "شقق وفيلات ومنزل وشاليه وصالون حلاقة"],
  ["Project Manager", "مدير المشروع"],
  ["Design Lead & Project Manager", "قائد التصميم ومدير المشروع"],
  ["All", "الكل"],
  ["Industrial", "صناعي"],
  ["Administrative", "إداري"],
  ["Medical", "طبي"],
  ["Religious", "ديني"],
  ["Interior", "تصميم داخلي"],
  ["Finishing", "تشطيبات"],
  ["Site", "الموقع"],
  ["Completed", "منفّذ"],
  ["Apartment", "شقة"],
  ["Villa", "فيلا"],
  ["Barber shop", "صالون حلاقة"],
  ["House", "منزل"],
  ["Chalet", "شاليه"],
  ["Location:", "الموقع:"],
  ["Area:", "المساحة:"],
  ["Type:", "النوع:"],
  ["Role:", "الدور:"],
  [
    "Full turnkey delivery…",
    "تسليم متكامل بنظام تسليم المفتاح يشمل الإنشاء والتشغيل التجريبي والأعمال الخارجية وسور المحيط وتنسيق الموقع.",
  ],
  [
    "Delivered from concept…",
    "نُفّذ من التصميم المبدئي حتى التنفيذ الكامل والتشغيل التجريبي، لضمان كفاءة التشغيل وتكامل الأنظمة.",
  ],
  [
    "Industrial flooring…",
    "أرضيات صناعية، وعزل حراري للسقف والحوائط، واستبدال التكسيات، وتركيب بوابات جديدة، وأنظمة إطفاء وإنذار حريق كاملة.",
  ],
  [
    "Roof refurbishment…",
    "تجديد السقف، وتكسية كاملة للحوائط بألواح الساندوتش بانل، وتركيب بوابات جديدة، ودمج أنظمة الإطفاء وإنذار الحريق.",
  ],
  [
    "Delivered to meet strict…",
    "نُفّذت وفق معايير تشغيل ونظافة صارمة لبيئات إنتاج الغذاء.",
  ],
  [
    "Delivered under a tight…",
    "نُفّذ في وقت قياسي داخل منشأة صناعية عاملة، بتشطيب راقٍ يتوافق مع المعايير العالمية لـ DSV.",
  ],
  [
    "A functional and welcoming…",
    "بيئة عملية ومرحّبة تتوافق مع احتياجات العميل التشغيلية.",
  ],
  [
    "High standards of functionality…",
    "معايير عالية من الأداء الوظيفي والراحة والجودة الجمالية داخل بيئة طبية.",
  ],
  [
    "Design and construction of two…",
    "تصميم وإنشاء مسجدين كبيرين، قيد التنفيذ حاليًا.",
  ],
  [
    "Innovative interiors…",
    "تصاميم داخلية مبتكرة للمساحات السكنية والتجارية والإدارية، مصممة لأفضل استغلال للمساحة وتعكس هوية العميل وتوفر الراحة والجودة والأداء.",
  ],
];
A.push(
  ...[
    ["Process", "منهجيتنا"],
    ["How we deliver", "كيف ننفّذ مشروعك"],
    [
      "Five stages, one team…",
      "خمس مراحل بفريق واحد، من وصف مشروعك حتى استلام المفتاح.",
    ],
    ["Brief & feasibility", "الفكرة وجدوى المشروع"],
    ["We define scope…", "نحدد معك النطاق والميزانية والجدول الزمني."],
    ["Design & BIM", "التصميم وBIM"],
    [
      "Architecture, structure, MEP…",
      "العمارة والإنشاء وMEP والتصميم الداخلي منسقة في نموذج واحد.",
    ],
    ["Costing & planning", "التكلفة والتخطيط"],
    ["Quantities, procurement…", "حصر الكميات وخطة التوريد وجدول زمني واقعي."],
    ["Site execution", "التنفيذ في الموقع"],
    [
      "Supervised works…",
      "أعمال تحت إشراف مباشر مع رقابة على الجودة والسلامة.",
    ],
    ["Commissioning & handover", "التشغيل والتسليم"],
    ["Testing, snagging…", "اختبارات ومعالجة الملاحظات والمستندات والتسليم."],
    ["Selected clients", "بعض عملائنا"],
    ["Quality, safety and delivery", "الجودة والسلامة والتسليم"],
    [
      "How we protect your budget…",
      "كيف نحافظ على ميزانيتك وجدولك وسلامة فريق العمل.",
    ],
    ["Design coordination first", "تنسيق التصميم أولًا"],
    [
      "Architecture, structure and MEP are coordinated…",
      "يتم تنسيق العمارة والإنشاء وMEP قبل بدء العمل في الموقع، مما يقلل التعارضات وإعادة التنفيذ.",
    ],
    ["Cost control", "التحكم في التكلفة"],
    ["Costs are tracked…", "تُتابع التكاليف مقابل النطاق المعتمد في كل مرحلة."],
    ["Supervised execution", "تنفيذ تحت إشراف"],
    [
      "Site operations, quality checks…",
      "يدير مدير المشروع أعمال الموقع وفحوصات الجودة وإجراءات السلامة حتى التسليم.",
    ],
    ["Questions we hear often", "أسئلة شائعة"],
    ["What does KEMET EG do?", "ماذا تقدم كيميت EG؟"],
    [
      "KEMET EG is an integrated engineering and construction firm. We handle…",
      "شركة هندسة وإنشاءات متكاملة. نقدم التصميم المعماري والداخلي والإنشائي وMEP وBIM، والإنشاءات والتشطيبات، والمنشآت المعدنية والأعمال الخرسانية، وأنظمة مكافحة الحريق.",
    ],
    [
      "Can you handle both design and construction?",
      "هل تتولون التصميم والتنفيذ معًا؟",
    ],
    [
      "Yes. Design and execution…",
      "نعم. التصميم والتنفيذ تحت إدارة واحدة، فيبقى تنسيق التصميم والتكلفة وأعمال الموقع والجدول الزمني تحت سيطرة واحدة.",
    ],
    [
      "Which types of projects do you deliver?",
      "ما أنواع المشروعات التي تنفذونها؟",
    ],
    [
      "Industrial facilities and warehouses…",
      "منشآت ومخازن صناعية، ومبانٍ إدارية، ومساحات طبية وتجارية، ومبانٍ دينية، وتصميمات داخلية سكنية.",
    ],
    ["Where do you work?", "أين تعملون؟"],
    [
      "Our projects are in Egypt…",
      "مشروعاتنا في مصر، منها العبور والعاشر من رمضان و6 أكتوبر والقاهرة الجديدة والجيزة والإسماعيلية.",
    ],
    ["How do I request a quote?", "كيف أطلب عرض سعر؟"],
    [
      "Fill in the quote form…",
      "املأ نموذج عرض السعر في قسم التواصل، أو راسلنا على info@kemeteg-group.com مع نوع المشروع ومساحته وموقعه.",
    ],
    ["Request a quote", "اطلب عرض سعر"],
    [
      "Tell us about your project…",
      "حدثنا عن مشروعك وسنرد عليك بخطة تصميم وتنفيذ.",
    ],
    ["DIRECT TO KEMET EG", "تواصل مباشر مع كيميت EG"],
    ["Send your brief directly to", "أرسل تفاصيل مشروعك مباشرة إلى"],
    [
      "Your request is delivered to KEMET EG by email. We only use your information to respond to your inquiry.",
      "يُرسل طلبك إلى كيميت EG عبر البريد الإلكتروني، ونستخدم بياناتك للرد على استفسارك فقط.",
    ],
    ["Name", "الاسم"],
    ["Company", "الشركة"],
    ["Email", "البريد الإلكتروني"],
    ["Phone", "الهاتف"],
    ["Project type", "نوع المشروع"],
    ["Area (m²)", "المساحة (م²)"],
    ["Location", "الموقع"],
    ["Project details", "تفاصيل المشروع"],
    ["Medical / commercial", "طبي / تجاري"],
    ["Interior & finishing", "تصميم داخلي وتشطيبات"],
    ["Other", "أخرى"],
    ["Send project inquiry", "إرسال استفسار المشروع"],
    [
      "Send your inquiry by email instead",
      "أرسل استفسارك بالبريد الإلكتروني بدلًا من ذلك",
    ],
    [
      "This opens your email app…",
      "سيفتح تطبيق البريد ببياناتك جاهزة. وإن لم يفتح، راسلنا على info@kemeteg-group.com.",
    ],
    ["Privacy", "الخصوصية"],
    [
      "Your quote request is sent through an external form delivery service to KEMET EG and used to respond to you. This site stores your language and theme preferences on your device.",
      "يُرسل طلب عرض السعر عبر خدمة خارجية لإيصاله إلى كيميت EG، ويُستخدم للرد عليك. يحفظ الموقع تفضيلات اللغة والمظهر على جهازك.",
    ],
  ],
);
A.push(
  ...[
    ["FAQ", "الأسئلة الشائعة"],
    ["Team", "الفريق"],
    ["Back to top ↑", "للأعلى ↑"],
    ["Have a project in mind?", "لديك مشروع في بالك؟"],
    ["Commercial Registration No. 10…", "رقم السجل التجاري 10230 07000 20743"],
    ["Case studies", "دراسات حالة"],
    [
      "How we solved real project challenges.",
      "كيف حللنا تحديات حقيقية في مشروعاتنا.",
    ],
    ["Challenge", "التحدي"],
    ["Solution", "الحل"],
    ["Result", "النتيجة"],
    ["Duration", "المدة"],
    ["Case study coming soon", "دراسة الحالة قريبًا"],
    ["What clients say", "آراء العملاء"],
    ["Client testimonial coming soon", "رأي العميل قريبًا"],
    ["Certifications & accreditations", "الشهادات والاعتمادات"],
    [
      "Quality, safety and contractor classifications.",
      "شهادات الجودة والسلامة وتصنيف المقاولات.",
    ],
    ["Certificate coming soon", "الشهادة قريبًا"],
    ["Our team", "فريقنا"],
    [
      "The people who manage your project…",
      "الأشخاص الذين يديرون مشروعك من التصميم حتى التسليم.",
    ],
    ["Team member coming soon", "عضو الفريق قريبًا"],
    ["Download company profile", "تحميل بروفايل الشركة"],
    ["Discuss your project", "ناقش مشروعك معنا"],
    ["KEMET EG · DESIGN TO EXECUTION", "كيميت EG · من التصميم إلى التنفيذ"],
  ],
);
A.push(
  ...[
    ["Phone / WhatsApp", "الهاتف / واتساب"],
    ["Call us directly", "اتصل بنا مباشرة"],
    ["We use your details only…", "نستخدم بياناتك للرد على طلبك فقط."],
    ["Please enter your name…", "من فضلك أدخل اسمك وبريدًا إلكترونيًا صحيحًا."],
    ["Sending…", "جارٍ الإرسال…"],
    [
      "Thank you. Your request was sent…",
      "شكرًا لك، تم إرسال طلبك وسنتواصل معك قريبًا.",
    ],
    [
      "We could not send this automatically…",
      "تعذر الإرسال تلقائيًا. سيفتح تطبيق البريد لإرسال الطلب.",
    ],
    [
      "We could not send your request automatically. Your details are still here; try again or send it by email.",
      "تعذر إرسال طلبك تلقائيًا. بياناتك ما زالت محفوظة؛ حاول مرة أخرى أو أرسله عبر البريد الإلكتروني.",
    ],
  ],
);
let lang = "en";
const DESC = document.querySelector("meta[name=description]"),
  OG_TITLE = document.querySelector('meta[property="og:title"]'),
  OG_DESCRIPTION = document.querySelector('meta[property="og:description"]'),
  OG_LOCALE = document.querySelector('meta[property="og:locale"]'),
  TWITTER_TITLE = document.querySelector('meta[name="twitter:title"]'),
  TWITTER_DESCRIPTION = document.querySelector(
    'meta[name="twitter:description"]',
  ),
  TT = document.title,
  DD = DESC.content,
  OG_DD = OG_DESCRIPTION.content;
const T = (s) => {
  if (lang != "ar") return s;
  let e = A.find((x) => x[0] == s);
  if (e) return e[1];
  e = A.find((x) => x[0].endsWith("…") && s.startsWith(x[0].slice(0, -1)));
  return e ? e[1] : s;
};
/* ===== EDIT YOUR DATA HERE (add "ar":{field:"Arabic"} to any entry for an Arabic version) ===== */
const CONTACT = {
  contactPerson: "م. شريف العتيبي",
  contactPersonEn: "Eng. Sherif Al-Otaby",
  contactEmail: "sherifsoliman@kemeteg-group.com",
  email: "info@kemeteg-group.com",
  phone: "01028594967",
  address: "",
  hours: "",
  map: "",
}; // whatsapp: digits with country code, e.g. 2010xxxxxxxx
const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@kemeteg-group.com";
const PROFILE_URL = ""; // link to company profile PDF
const CASES = []; // {t,duration,challenge,solution,result}
const TESTI = []; // {text,name,role}
const CERTS = []; // {name,issuer}
const TEAM = []; // {name,role}
const FIN = finishingProjects; // finishing projects, same shape as projects below: {t,loc,a,r,d,v,i:[["imageKey","Site"]]}
const P = [...projects, ...FIN.map((f) => ({ ...f, c: "Finishing" }))];
const FEATURED = [P[0], P[1], P[5], P[7]];
const HERO_VIDEOS = [
  {
    src: "/assets/Hero/5.mp4",
    poster: "/assets/Hero/5-poster.webp",
    title: "Project video 1",
  },
  {
    src: "/assets/Hero/6.mp4",
    poster: "/assets/Hero/6-poster.webp",
    title: "Project video 2",
  },
];
const HERO_SLIDES = [
  ...FEATURED.map((project) => ({
    type: "image",
    src: I[project.v],
    title: project.t,
  })),
  ...HERO_VIDEOS.map((video) => ({ ...video, type: "video" })),
];
const heroCarousel = $("#home-carousel");
let heroIndex = 0;
const heroImage = $("[data-hero-image]");
const heroVideo = $("[data-hero-video]");
const heroReducedMotion = matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
let heroTimer;

function drawHero() {
  const slide = HERO_SLIDES[heroIndex];
  const isVideo = slide.type === "video";
  heroImage.hidden = isVideo;
  heroVideo.hidden = !isVideo;

  if (isVideo) {
    heroVideo.poster = slide.poster;
    if (heroVideo.getAttribute("src") !== slide.src) {
      heroVideo.pause();
      heroVideo.src = slide.src;
      heroVideo.load();
    }
    if (!heroReducedMotion) {
      heroVideo
        .play()
        .catch((error) => console.warn("Could not play hero video.", error));
    }
  } else {
    heroVideo.pause();
    if (heroImage.getAttribute("src") !== slide.src) {
      heroImage.classList.add("is-changing");
      requestAnimationFrame(() => {
        heroImage.src = slide.src;
        heroImage.onload = () => heroImage.classList.remove("is-changing");
      });
    }
  }

  const pagination = $(".hero-pagination");
  if (pagination.childElementCount !== HERO_SLIDES.length) {
    pagination.innerHTML = HERO_SLIDES.map(
      (_, index) =>
        `<button class="hero-dot" type="button" data-hero-dot="${index}"><span></span></button>`,
    ).join("");
  }
  pagination.querySelectorAll(".hero-dot").forEach((dot, index) => {
    dot.setAttribute("aria-current", index === heroIndex ? "true" : "false");
    const item = HERO_SLIDES[index];
    const title = T(item.title);
    dot.setAttribute(
      "aria-label",
      `${T("Show featured slide")} ${index + 1}: ${title}`,
    );
  });

  heroCarousel.setAttribute(
    "aria-label",
    `${T("Featured projects and videos")} ${heroIndex + 1} / ${HERO_SLIDES.length}`,
  );
  pagination.setAttribute("aria-label", T("Choose a featured slide"));

  scheduleHero();
}

function scheduleHero() {
  clearTimeout(heroTimer);
  if (heroReducedMotion || document.hidden) return;
  heroTimer = setTimeout(() => {
    if (
      !heroCarousel.matches(":hover") &&
      !heroCarousel.contains(document.activeElement)
    ) {
      heroIndex = (heroIndex + 1) % HERO_SLIDES.length;
      drawHero();
    } else {
      scheduleHero();
    }
  }, 7000);
}

function showHeroSlide(index) {
  heroIndex = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
  drawHero();
}

heroCarousel
  .querySelector(".hero-pagination")
  .addEventListener("click", (e) => {
    const dot = e.target.closest("[data-hero-dot]");
    if (dot) showHeroSlide(Number(dot.dataset.heroDot));
  });
heroCarousel.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showHeroSlide(heroIndex + 1);
  if (e.key === "ArrowRight") showHeroSlide(heroIndex - 1);
});
let heroTouchStart;
heroCarousel.addEventListener(
  "touchstart",
  (e) => {
    heroTouchStart = e.changedTouches[0].clientX;
  },
  { passive: true },
);
heroCarousel.addEventListener(
  "touchend",
  (e) => {
    if (heroTouchStart === undefined) return;
    const distance = e.changedTouches[0].clientX - heroTouchStart;
    heroTouchStart = undefined;
    if (Math.abs(distance) < 48) return;
    const advances = lang == "ar" ? distance > 0 : distance < 0;
    showHeroSlide(heroIndex + (advances ? 1 : -1));
  },
  { passive: true },
);
document.addEventListener("visibilitychange", scheduleHero);
window.addEventListener("pageshow", scheduleHero);

const cats = getProjectCategories(P);
let cur = "All";
function drawC() {
  $("#chips").innerHTML = cats
    .map(
      (c) =>
        `<button class="chip" aria-pressed="${c == cur}" data-c="${c}">${T(c)}</button>`,
    )
    .join("");
}
function drawG() {
  const grid = $("#grid");
  if (grid.dataset.rendered !== "true") {
    grid.innerHTML =
      P.map(
        (p, n) =>
          `<button class="card" data-n="${n}" data-c="${p.c}"><img src="${I[p.v]}" alt="${T(p.t)}" loading="lazy" decoding="async"><div><h3 dir="auto">${T(p.t)}</h3><small dir="auto">${T(p.loc)}${p.a ? " · " + p.a : ""}</small></div></button>`,
      ).join("") +
      (FIN.length
        ? ""
        : `<div class="card soon" data-c="Finishing"><div><h3>${T("Finishing Works")}</h3><small>${T("Gallery coming soon")}</small></div></div>`);
    grid.dataset.rendered = "true";
  } else {
    grid.querySelectorAll(".card[data-n]").forEach((card) => {
      const project = P[Number(card.dataset.n)];
      card.querySelector("img").alt = T(project.t);
      card.querySelector("h3").textContent = T(project.t);
      card.querySelector("small").textContent =
        T(project.loc) + (project.a ? " · " + project.a : "");
    });
    const placeholder = grid.querySelector(".card.soon");
    if (placeholder) {
      placeholder.querySelector("h3").textContent = T("Finishing Works");
      placeholder.querySelector("small").textContent = T("Gallery coming soon");
    }
  }
  filt();
}
function filt() {
  const visibleProjects = new Set(filterProjects(P, cur));
  document.querySelectorAll(".card").forEach((card) => {
    const projectIndex = card.dataset.n;
    const isProject = projectIndex !== undefined;
    const isHidden = isProject
      ? !visibleProjects.has(P[Number(projectIndex)])
      : cur !== "All" && card.dataset.c !== cur;
    card.classList.toggle("hid", isHidden);
  });
}
$("#chips").onclick = (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  cur = b.dataset.c;
  drawC();
  filt();
};
const mod = $("#mod"),
  trk = $("#trk");
let last, openProject;
function drawProjectModal(project, rebuildGallery = false) {
  $("#mt").textContent = T(project.t);
  $("#mt").dir = "auto";
  $("#md").textContent = T(project.d);
  $("#md").dir = "auto";
  $("#mm").innerHTML =
    `<span dir="auto"><b>${T("Location:")}</b> ${T(project.loc)}</span>${project.a ? `<span dir="auto"><b>${T("Area:")}</b> ${project.a}</span>` : ""}<span dir="auto"><b>${T("Type:")}</b> ${T(project.c)}</span><span dir="auto"><b>${T("Role:")}</b> ${T(project.r)}</span>`;
  if (rebuildGallery) {
    trk.innerHTML = project.i
      .map(
        ([key, caption]) =>
          `<figure><img src="${I[key]}" alt="${T(project.t)} – ${T(caption)}" loading="lazy" decoding="async"><figcaption>${T(caption)}</figcaption></figure>`,
      )
      .join("");
  } else {
    trk.querySelectorAll("figure").forEach((figure, index) => {
      const caption = project.i[index][1];
      figure.querySelector("img").alt = `${T(project.t)} – ${T(caption)}`;
      figure.querySelector("figcaption").textContent = T(caption);
    });
  }
}
function cnt() {
  const f = trk.children;
  const w = f[0].offsetWidth + 12;
  const i = Math.min(f.length, Math.round(trk.scrollLeft / w) + 1);
  $("#cnt").textContent = i + " / " + f.length;
}
$("#grid").onclick = (e) => {
  const c = e.target.closest(".card");
  if (!c || c.dataset.n === undefined) return;
  const p = P[c.dataset.n];
  last = c;
  openProject = p;
  drawProjectModal(p, true);
  mod.hidden = false;
  document.body.style.overflow = "hidden";
  trk.scrollLeft = 0;
  cnt();
  $("#cl").focus();
};
function close() {
  mod.hidden = true;
  document.body.style.overflow = "";
  openProject = undefined;
  last && last.focus();
}
$("#cl").onclick = close;
mod.addEventListener("click", close);
const go = (d) =>
  trk.scrollBy({
    left: d * (trk.children[0].offsetWidth + 12),
    behavior: "smooth",
  });
mod.querySelector(".p").onclick = () => go(-1);
mod.querySelector(".n").onclick = () => go(1);
trk.onscroll = cnt;
addEventListener("keydown", (e) => {
  if (mod.hidden) return;
  if (e.key == "Escape") close();
  if (e.key == "ArrowRight") go(1);
  if (e.key == "ArrowLeft") go(-1);
});
let dn = 0,
  sx = 0,
  sl = 0;
trk.onpointerdown = (e) => {
  if (e.pointerType != "mouse") return;
  dn = 1;
  sx = e.clientX;
  sl = trk.scrollLeft;
  trk.style.scrollSnapType = "none";
  trk.style.cursor = "grabbing";
};
addEventListener("pointermove", (e) => {
  if (dn) trk.scrollLeft = sl - (e.clientX - sx);
});
addEventListener("pointerup", () => {
  if (!dn) return;
  dn = 0;
  trk.style.scrollSnapType = "";
  trk.style.cursor = "";
  go(0);
});
const B = [
  ["Cold storage", "cs8", "cs_s9"],
  ["DSV boardroom", "dsv3", "dsv_s4"],
  ["MBC reception", "mbc1", "mbc_s2"],
  ["Textile hall", "tx4", "tx_s2"],
  ["Obour warehouse", "ob1", "ob_s8"],
];
const ba = $("#ba"),
  rg = ba.querySelector("input");
let bi = 0;
function drawB() {
  $("#bat").innerHTML = B.map(
    (b, i) =>
      `<button class="chip" aria-pressed="${i == bi}" data-i="${i}">${T(b[0])}</button>`,
  ).join("");
}
function pick(i) {
  const b = B[i];
  ba.querySelector("[data-bot]").src = I[b[2]];
  ba.querySelector("[data-top]").src = I[b[1]];
  set(50);
}
function set(v) {
  rg.value = v;
  ba.style.setProperty("--p", v + "%");
}
$("#bat").onclick = (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  bi = +b.dataset.i;
  drawB();
  pick(bi);
  sweep();
};
rg.oninput = () => set(rg.value);
pick(0);
function sweep() {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  let t0;
  const f = (t) => {
    t0 = t0 || t;
    const k = (t - t0) / 1800;
    if (k >= 1) return set(50);
    set(50 + 38 * Math.sin(k * Math.PI * 2) * (1 - k));
    requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
}
new IntersectionObserver(
  (en, o) =>
    en.forEach((x) => {
      if (x.isIntersecting) {
        sweep();
        o.disconnect();
      }
    }),
  { threshold: 0.5 },
).observe(ba);

const fmt = (n) => n.toLocaleString("en-US");

document.querySelectorAll("[data-n]").forEach((e) => {
  if (e.dataset.n && e.tagName == "STRONG")
    new IntersectionObserver(
      (en, o) =>
        en.forEach((x) => {
          if (!x.isIntersecting) return;
          o.disconnect();
          const n = +e.dataset.n,
            s = e.dataset.s || "",
            t0 = performance.now();
          const f = (t) => {
            const k = Math.min(1, (t - t0) / 1400);
            e.textContent = fmt(Math.round(n * (1 - Math.pow(1 - k, 3)))) + s;
            k < 1 && requestAnimationFrame(f);
          };
          requestAnimationFrame(f);
        }),
      { threshold: 0.6 },
    ).observe(e);
});

function setLang(l) {
  lang = l;
  const h = document.documentElement;
  h.lang = l;
  h.dir = l == "ar" ? "rtl" : "ltr";
  document.querySelectorAll("body *").forEach((e) => {
    if (
      e.children.length ||
      e.tagName == "SCRIPT" ||
      e.closest("#chips,#grid,#bat,#mod,.tools,h1,strong")
    )
      return;
    const s = e.dataset.en || e.textContent.trim();
    if (!s) return;
    e.dataset.en = s;
    e.textContent = T(s);
  });
  document.title = l == "ar" ? "كيميت EG | هندسة وإنشاءات" : TT;
  DESC.content =
    l == "ar"
      ? "كيميت EG شركة هندسة وإنشاءات مصرية تنفّذ مشروعات صناعية وإدارية وطبية ودينية بتصميم داخلي متكامل وBIM وMEP وتحكم كامل في التكلفة."
      : DD;
  const title = l == "ar" ? "كيميت EG | هندسة وإنشاءات" : TT;
  const description = l == "ar" ? DESC.content : OG_DD;
  OG_TITLE.content = title;
  OG_DESCRIPTION.content = description;
  OG_LOCALE.content = l == "ar" ? "ar_EG" : "en_US";
  TWITTER_TITLE.content = title;
  TWITTER_DESCRIPTION.content = description;
  $("#lg").textContent = l == "ar" ? "EN" : "عربي";
  drawHero();
  drawManagerContact();
  drawC();
  drawG();
  if (openProject) drawProjectModal(openProject);
  drawB();
  drawS();
}
$("#lg").onclick = () => {
  setLang(lang == "ar" ? "en" : "ar");
  try {
    localStorage.setItem("kl", lang);
  } catch (e) {}
};
const th = $("#th"),
  rt = document.documentElement,
  mq = matchMedia("(prefers-color-scheme:dark)"),
  dk = () => (rt.dataset.theme ? rt.dataset.theme == "dark" : mq.matches);
function setTh(v) {
  if (v) rt.dataset.theme = v;
  th.textContent = dk() ? "☀" : "☾";
  th.setAttribute(
    "aria-label",
    dk() ? "Switch to light mode" : "Switch to dark mode",
  );
}
th.onclick = () => {
  const v = dk() ? "light" : "dark";
  setTh(v);
  try {
    localStorage.setItem("kt", v);
  } catch (e) {}
};
const nav = $("header nav");
$("#bg").onclick = () =>
  $("#bg").setAttribute("aria-expanded", nav.classList.toggle("open"));
function closeNav() {
  nav.classList.remove("open");
  $("#bg").setAttribute("aria-expanded", "false");
}
nav.onclick = (e) => {
  if (e.target.closest("a")) {
    closeNav();
  }
};
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("open") &&
    !nav.contains(e.target) &&
    !$("#bg").contains(e.target)
  ) {
    closeNav();
  }
});
addEventListener("keydown", (e) => {
  if (e.key == "Escape" && nav.classList.contains("open")) {
    closeNav();
    $("#bg").focus();
  }
});
$("#rfq").onsubmit = async (e) => {
  e.preventDefault();
  const fm = e.target,
    st = $("#fs"),
    bt = fm.querySelector("button"),
    f = new FormData(fm),
    g = (k) => (f.get(k) || "").toString().trim();
  const say = (m, c) => {
    st.textContent = T(m);
    st.className = "f st " + (c || "");
  };
  if (f.get("_honey")) return;
  if (!g("name") || !/^\S+@\S+\.\S+$/.test(g("email")))
    return say("Please enter your name and a valid email.", "er");
  const data = {
    _subject: "Quote request – " + g("type") + " – " + g("name"),
    _replyto: g("email"),
    _template: "table",
    _captcha: "false",
    name: g("name"),
    company: g("company"),
    email: g("email"),
    phone: g("phone"),
    project_type: g("type"),
    area_m2: g("area"),
    location: g("location"),
    details: g("details"),
  };
  const mailto = () => {
    const b = Object.entries(data)
      .filter(([k]) => !k.startsWith("_"))
      .map(([k, v]) => k + ": " + (v || "-"))
      .join("\n");
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(b)}`;
  };
  bt.disabled = true;
  fm.setAttribute("aria-busy", "true");
  mailFallback.hidden = true;
  say("Sending…");
  try {
    const r = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!r.ok) throw new Error(`Request failed with status ${r.status}.`);
    const result = await r.json();
    if (result.success !== true && result.success !== "true") {
      throw new Error(
        result.message || "The form provider did not accept the request.",
      );
    }
    fm.reset();
    say(
      "Thank you. Your request was sent. We will get back to you soon.",
      "ok",
    );
  } catch (error) {
    console.error("Quote request submission failed.", error);
    mailFallback.href = mailto();
    mailFallback.hidden = false;
    say(
      "We could not send your request automatically. Your details are still here; try again or send it by email.",
      "er",
    );
  } finally {
    bt.disabled = false;
    fm.removeAttribute("aria-busy");
  }
};
const prv = $("#prv");
let privacyTrigger;
$("#pvl").onclick = (e) => {
  e.preventDefault();
  privacyTrigger = e.currentTarget;
  prv.hidden = false;
  document.body.style.overflow = "hidden";
  $("#pcl").focus();
};
const pc = () => {
  prv.hidden = true;
  document.body.style.overflow = "";
  privacyTrigger?.focus();
};
$("#pcl").onclick = pc;
prv.addEventListener("click", (e) => {
  if (e.target === prv) pc();
});
addEventListener("keydown", (e) => {
  if (!prv.hidden && e.key == "Escape") {
    pc();
  }
});
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
function drawManagerContact() {
  const name = lang == "ar" ? CONTACT.contactPerson : CONTACT.contactPersonEn;
  $("#ct").innerHTML =
    `<b>${esc(name)}</b><a href="mailto:${CONTACT.contactEmail}" dir="ltr">${CONTACT.contactEmail}</a>`;
}
const G = (o, k) => (lang == "ar" && o.ar && o.ar[k] ? o.ar[k] : o[k] || "");
function fill(id, list, tpl) {
  const s = $("#" + id),
    items = list.map(tpl);
  s.hidden = !items.length;
  s.querySelector(".dyn").innerHTML = items.join("");
}
function drawS() {
  fill(
    "cases",
    CASES,
    (c) =>
      `<article class="cc"><h3>${esc(G(c, "t"))}</h3>${c.duration ? `<p>${T("Duration")}: ${esc(c.duration)}</p>` : ""}<dl><dt>${T("Challenge")}</dt><dd>${esc(G(c, "challenge"))}</dd><dt>${T("Solution")}</dt><dd>${esc(G(c, "solution"))}</dd><dt>${T("Result")}</dt><dd>${esc(G(c, "result"))}</dd></dl></article>`,
  );
  fill(
    "testi",
    TESTI,
    (c) =>
      `<figure class="tq"><p>“${esc(G(c, "text"))}”</p><b>${esc(G(c, "name"))}</b><span>${esc(G(c, "role"))}</span></figure>`,
  );
  fill(
    "certs",
    CERTS,
    (c) =>
      `<div class="cf"><b>${esc(G(c, "name"))}</b><span>${esc(G(c, "issuer"))}</span></div>`,
  );
  fill(
    "team",
    TEAM,
    (c) =>
      `<div class="tm"><div class="av">${esc((G(c, "name") || "?").trim()[0])}</div><b>${esc(G(c, "name"))}</b><span>${esc(G(c, "role"))}</span></div>`,
  );
}
const directEmail = $("#direct-email"),
  directEmailAddress = $("#direct-email-address"),
  directPhone = $("#direct-phone"),
  directPhoneNumber = $("#direct-phone-number"),
  mailFallback = $("#mail-fallback");
directEmail.href = `mailto:${CONTACT.email}`;
directEmailAddress.textContent = CONTACT.email;
directPhone.href = `tel:${CONTACT.phone.replace(/\s/g, "")}`;
directPhoneNumber.textContent = CONTACT.phone.replace(
  /^(\d{3})(\d{4})(\d{4})$/,
  "$1 $2 $3",
);
if (PROFILE_URL)
  $(".hero-actions").insertAdjacentHTML(
    "beforeend",
    `<a class="btn" href="${PROFILE_URL}" target="_blank" rel="noopener">Download company profile</a>`,
  );
document.querySelectorAll("[data-f]").forEach(
  (a) =>
    (a.onclick = () => {
      cur = a.dataset.f;
      drawC();
      filt();
    }),
);
let kt = null,
  kl = null;
try {
  kt = localStorage.getItem("kt");
  kl = localStorage.getItem("kl");
} catch (e) {}
setTh(kt);
setLang(kl || ((navigator.language || "").startsWith("ar") ? "ar" : "en"));
