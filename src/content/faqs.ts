import type { Locale } from "@/i18n";
import type { ServiceSlug } from "./servicePages";

/**
 * Frequently asked questions, in all four languages. "home" appears on the
 * homepage, "translation" on the Translation service page. Each answer may end
 * with one link. Published as FAQPage structured data as well.
 */
export type FaqItem = {
  q: string;
  a: string;
  /** Optional link after the answer; internal paths start with "/". */
  link?: { label: string; href: string };
};

/** Homepage questions plus questions for each service page that has them. */
type FaqSet = { title: string; home: FaqItem[] } & Partial<Record<ServiceSlug, FaqItem[]>>;

const PROZ = "https://www.proz.com/profile/2522215";

const en: FaqSet = {
  title: "Frequently asked questions",
  home: [
    {
      q: "Which languages do you translate between?",
      a: "I translate from English, French and Spanish into Arabic, my native language, so the result reads as if it had been written in Arabic for your audience.",
    },
    {
      q: "Do you work with translation agencies or direct clients?",
      a: "Both. Translation agencies work with me as a dedicated Arabic linguist on one-off and ongoing projects, following their style guides, CAT tools and deadlines. Direct clients get a ready-to-use Arabic translation and one person to deal with, from the quote to final delivery.",
    },
    {
      q: "Will you sign a non-disclosure agreement (NDA)?",
      a: "Yes. I’m happy to sign your NDA, or provide one, before you share any files. Documents are handled confidentially and transferred securely.",
      link: { label: "How your files are protected", href: "/confidentiality" },
    },
    {
      q: "Where can I see reviews from your clients?",
      a: "Feedback from clients I have worked with is published on my ProZ.com profile, the largest professional network for translators.",
      link: { label: "Read client reviews on ProZ.com", href: PROZ },
    },
    {
      q: "Do you provide sworn or certified translation?",
      a: "No. I don’t provide sworn or certified translations with an official stamp, such as for immigration or court documents. I focus on commercial, technical, legal, financial, healthcare, marketing and software content.",
    },
  ],
  translation: [
    {
      q: "Do you translate websites and software, not just documents?",
      a: "Yes. Besides documents, I translate websites, web and mobile apps, software interfaces, help centers and marketing content. I can work in the files your team exports, such as XLIFF, HTML or spreadsheets, and check the Arabic in context for right-to-left layout.",
    },
    {
      q: "Can you handle large or ongoing projects?",
      a: "Yes. Large and recurring projects run through an organized workflow: the work is planned in stages with agreed delivery dates, and translation memories and glossaries keep terminology consistent across files, batches and updates. On ongoing accounts, each new job builds on the previous ones, so quality stays consistent from one delivery to the next.",
    },
    {
      q: "Is editing and proofreading included?",
      a: "Yes. For direct clients, every project goes through translation, editing and proofreading (TEP) followed by quality checks, so you receive a document that is ready to publish or use, not a draft. Agencies that run their own review step can order translation only.",
    },
  ],
  editing: [
    {
      q: "What is the difference between editing and proofreading?",
      a: "Editing is a bilingual check: I compare the Arabic translation with the source sentence by sentence to correct mistranslations, omissions, terminology and style. Proofreading is a final monolingual check of the Arabic text itself, for grammar, spelling, punctuation, consistency and formatting, before it is published.",
    },
    {
      q: "Do you review other translators’ work?",
      a: "Yes. I regularly review translations done by other translators, in-house teams and machine translation, and I give specific, constructive feedback so the translator understands each change.",
    },
    {
      q: "What does a review check?",
      a: "Accuracy (mistranslations, omissions and additions), terminology and glossary compliance, grammar and spelling, Arabic punctuation and typography, consistency across the document, locale conventions such as dates, numbers and currencies, register and style for the audience, and formatting, tags and layout, including right-to-left issues.",
    },
    {
      q: "What is LQA, and how do you score translations?",
      a: "Language quality assessment (LQA) measures translation quality objectively. Each error is logged by category, such as accuracy, terminology, fluency, style or locale conventions, and by severity (minor, major or critical), using the MQM framework or your agency’s own scorecard. The result is a quality score and a short report with examples and recommendations.",
    },
    {
      q: "Will you change the translator’s style?",
      a: "No. I avoid preferential changes: I correct errors and inconsistencies, not personal word choices, so the review stays objective and the translator’s work is respected. Suggestions that would only improve style are marked as optional.",
    },
    {
      q: "Which file formats do you work with?",
      a: "Word, Excel, PowerPoint and PDF; bilingual CAT formats such as XLIFF, SDLXLIFF and MQXLIFF; Trados and memoQ project packages; and HTML, XML, JSON and SRT subtitle files. If your format isn’t listed, just ask.",
    },
    {
      q: "Do I receive tracked changes or a clean file?",
      a: "Whichever you prefer: tracked changes, a clean final version, or both, together with a log of significant changes and any questions about the source text.",
    },
  ],
  mtpe: [
    {
      q: "Will post-edited Arabic read like a human translation?",
      a: "Yes. With full post-editing, I rework the machine output until it reads naturally, as if it had been written by a professional Arabic translator. Meaning, terminology, grammar, style and flow are all corrected, so readers can’t tell a machine was involved.",
    },
    {
      q: "Is MTPE cheaper than human translation?",
      a: "Yes. Because the machine produces a first draft, post-editing usually costs less and takes less time than translating from scratch. The exact saving depends on the quality of the raw output and the level of editing you need, and is agreed in the quote.",
    },
    {
      q: "Do you offer light or full post-editing?",
      a: "Both. Light post-editing makes the text accurate and understandable, which suits internal documents and large volumes of reference content. Full post-editing brings the Arabic up to publication quality for anything your customers will read.",
    },
  ],
  transcreation: [
    {
      q: "How is transcreation different from translation?",
      a: "Translation carries the meaning of a text from one language to another. Transcreation is closer to copywriting: it starts from your creative brief and recreates the message in Arabic so it keeps the same intent, tone and emotional impact, even when the words, wordplay or cultural references have to change. It is used for slogans, campaigns, brand messages and product copy.",
    },
    {
      q: "Do you provide back-translations?",
      a: "Yes. Each Arabic option comes with a back-translation and notes explaining the choices, so colleagues who don’t read Arabic can review and approve it with confidence.",
    },
    {
      q: "Can you fit Arabic into tight space limits in apps and websites?",
      a: "Yes. Interface text such as buttons, menus and notifications is written to fit the character or space limits you set without losing clarity, and checked for right-to-left layout. Where possible, I review it in screenshots or a test version of your product.",
    },
  ],
  consulting: [
    {
      q: "Should we use Modern Standard Arabic or a regional dialect?",
      a: "It depends on your audience and the type of content. Modern Standard Arabic is understood across the Arab world and suits documentation, legal, corporate and most website content. A regional dialect, such as Gulf or Egyptian Arabic, can work better for marketing, social media and video aimed at one country. I help you choose the right mix for each market and type of content.",
    },
    {
      q: "Is consulting a one-off service or ongoing?",
      a: "Consulting is an ongoing service. We start with a review of your markets, content and workflow, then I stay involved as your Arabic content grows: answering terminology and style questions, updating glossaries and guides, and checking quality as you add new products, markets or vendors.",
    },
    {
      q: "What does a localization-readiness review include?",
      a: "Before translation starts, I check whether your website or app is technically and culturally ready for Arabic: text kept outside the code so it can be translated, right-to-left layout and mirrored icons, mixed Arabic and English text and numbers, room for longer or shorter text, Arabic plural forms, date, number and currency formats, fonts, and images or names that may need cultural adaptation. You receive a prioritized list of fixes, which saves time and cost once translation begins.",
    },
  ],
  "digital-marketing": [
    {
      q: "Which markets do you work with?",
      a: "I mainly work with businesses in Europe and North America, as well as clients around the world, that want to reach Arabic-speaking audiences.",
    },
    {
      q: "Do you manage social media accounts, or only write the content?",
      a: "Both. I write and localize your Arabic posts, and I can also manage your accounts: planning the content calendar, scheduling and publishing posts, and reviewing performance to improve results.",
    },
    {
      q: "Which marketing tools do you use?",
      a: "I work with the industry’s standard tools, including Google Analytics, Google Search Console, Google Ads, Meta Business Suite, LinkedIn Campaign Manager, Semrush, Ahrefs, Hootsuite, Mailchimp and Canva, and I adapt to the tools your team already uses.",
    },
  ],
};

const ar: FaqSet = {
  title: "الأسئلة الشائعة",
  home: [
    {
      q: "ما اللغات التي تترجم منها وإليها؟",
      a: "أترجم من الإنجليزية والفرنسية والإسبانية إلى العربية، لغتي الأم، ليُقرأ النص كأنه كُتب بالعربية أصلًا لجمهورك.",
    },
    {
      q: "هل تعمل مع وكالات الترجمة أم مع العملاء المباشرين؟",
      a: "مع الطرفين. تتعاون معي وكالات الترجمة بصفتي لغويًا مختصًا بالعربية في مشاريع فردية ومستمرة، مع الالتزام بأدلة الأسلوب وأدوات الترجمة والمواعيد الخاصة بها. أما العملاء المباشرون فيحصلون على ترجمة عربية جاهزة للاستخدام وشخص واحد يتعاملون معه من عرض السعر حتى التسليم النهائي.",
    },
    {
      q: "هل توقّع اتفاقية عدم إفصاح (NDA)؟",
      a: "نعم. يسعدني توقيع اتفاقيتك أو تقديم اتفاقية خاصة بي قبل أن تشارك أي ملفات. وتُعامَل المستندات بسرية تامة وتُنقل بطرق آمنة.",
      link: { label: "كيف تُحمى ملفاتك", href: "/confidentiality" },
    },
    {
      q: "أين يمكنني الاطلاع على تقييمات عملائك؟",
      a: "آراء العملاء الذين عملت معهم منشورة في ملفي على ProZ.com، أكبر شبكة مهنية للمترجمين.",
      link: { label: "اقرأ تقييمات العملاء على ProZ.com", href: PROZ },
    },
    {
      q: "هل تقدّم ترجمة محلّفة أو معتمدة؟",
      a: "لا. لا أقدّم ترجمات محلّفة أو معتمدة بختم رسمي، كتلك المطلوبة لمعاملات الهجرة أو المحاكم. أركّز على المحتوى التجاري والتقني والقانوني والمالي والطبي والتسويقي والبرمجي.",
    },
  ],
  translation: [
    {
      q: "هل تترجم المواقع الإلكترونية والبرمجيات، لا المستندات فقط؟",
      a: "نعم. إلى جانب المستندات، أترجم المواقع الإلكترونية وتطبيقات الويب والهاتف وواجهات البرمجيات ومراكز المساعدة والمحتوى التسويقي. ويمكنني العمل على الملفات التي يصدّرها فريقك، مثل XLIFF وHTML وجداول البيانات، ومراجعة النص العربي في سياقه للتأكد من سلامة الاتجاه من اليمين إلى اليسار.",
    },
    {
      q: "هل يمكنك التعامل مع المشاريع الكبيرة أو المستمرة؟",
      a: "نعم. تسير المشاريع الكبيرة والمتكررة وفق منهجية عمل منظّمة: يُقسَّم العمل إلى مراحل بمواعيد تسليم متفق عليها، وتحافظ ذاكرات الترجمة ومسارد المصطلحات على اتساق المصطلحات عبر الملفات والدفعات والتحديثات. وفي المشاريع المستمرة، يُبنى كل عمل جديد على ما سبقه، فتبقى الجودة ثابتة من تسليم إلى آخر.",
    },
    {
      q: "هل يشمل العمل التحرير والتدقيق؟",
      a: "نعم. بالنسبة للعملاء المباشرين، يمرّ كل مشروع بمراحل الترجمة والتحرير والتدقيق (TEP) ثم فحوص الجودة، لتستلم مستندًا جاهزًا للنشر أو الاستخدام لا مسودة. ويمكن للوكالات التي تتولى المراجعة بنفسها طلب الترجمة فقط.",
    },
  ],
  editing: [
    {
      q: "ما الفرق بين التحرير والتدقيق؟",
      a: "التحرير مراجعة ثنائية اللغة: أقارن الترجمة العربية بالنص المصدر جملةً جملة لتصحيح أخطاء الترجمة والسقط والمصطلحات والأسلوب. أما التدقيق فمراجعة نهائية أحادية اللغة للنص العربي نفسه، من حيث القواعد والإملاء وعلامات الترقيم والاتساق والتنسيق، قبل نشره.",
    },
    {
      q: "هل تراجع أعمال مترجمين آخرين؟",
      a: "نعم. أراجع بانتظام ترجمات أنجزها مترجمون آخرون وفرق داخلية والترجمة الآلية، وأقدّم ملاحظات محددة وبنّاءة ليفهم المترجم سبب كل تعديل.",
    },
    {
      q: "ماذا تشمل المراجعة؟",
      a: "الدقة (أخطاء الترجمة والسقط والإضافات)، والالتزام بالمصطلحات والمسرد، والقواعد والإملاء، وعلامات الترقيم العربية وقواعد الطباعة، والاتساق في المستند كله، والأعراف المحلية كالتواريخ والأرقام والعملات، والأسلوب المناسب للجمهور، والتنسيق والوسوم والتخطيط، بما في ذلك مشكلات الكتابة من اليمين إلى اليسار.",
    },
    {
      q: "ما تقييم جودة اللغة (LQA)، وكيف تقيّم الترجمات؟",
      a: "تقييم جودة اللغة (LQA) يقيس جودة الترجمة بموضوعية. يُسجَّل كل خطأ حسب فئته، كالدقة أو المصطلحات أو السلاسة أو الأسلوب أو الأعراف المحلية، وحسب خطورته (بسيط أو جوهري أو حرج)، وفق إطار MQM أو بطاقة التقييم الخاصة بوكالتك. والنتيجة درجة للجودة وتقرير موجز يتضمن أمثلة وتوصيات.",
    },
    {
      q: "هل ستغيّر أسلوب المترجم؟",
      a: "لا. أتجنّب التعديلات التفضيلية: أصحّح الأخطاء وأوجه عدم الاتساق، لا الاختيارات الشخصية للكلمات، لتبقى المراجعة موضوعية ويُحترم عمل المترجم. وتُعلَّم الاقتراحات التي تحسّن الأسلوب فقط على أنها اختيارية.",
    },
    {
      q: "ما صيغ الملفات التي تعمل عليها؟",
      a: "Word وExcel وPowerPoint وPDF؛ وصيغ أدوات الترجمة ثنائية اللغة مثل XLIFF وSDLXLIFF وMQXLIFF؛ وحزم مشاريع Trados وmemoQ؛ وملفات HTML وXML وJSON وملفات الترجمة المرئية SRT. وإن لم تجد صيغتك هنا، فاسألني.",
    },
    {
      q: "هل أستلم الملف بتعديلات متتبَّعة أم نسخة نظيفة؟",
      a: "كما تفضّل: تعديلات متتبَّعة، أو نسخة نهائية نظيفة، أو كلتاهما، مع سجل بأهم التعديلات وأي استفسارات حول النص المصدر.",
    },
  ],
  mtpe: [
    {
      q: "هل يُقرأ النص العربي بعد التحرير اللاحق كأنه ترجمة بشرية؟",
      a: "نعم. في التحرير اللاحق الكامل، أعيد صياغة مخرجات الآلة حتى يُقرأ النص بسلاسة كأنه من عمل مترجم عربي محترف، فأصحّح المعنى والمصطلحات والقواعد والأسلوب والسلاسة، بحيث لا يلاحظ القارئ أن الآلة شاركت في العمل.",
    },
    {
      q: "هل التحرير اللاحق للترجمة الآلية أقل تكلفة من الترجمة البشرية؟",
      a: "نعم. لأن الآلة تقدّم مسودة أولى، فإن التحرير اللاحق عادةً أقل تكلفة وأسرع من الترجمة من الصفر. ويعتمد مقدار التوفير على جودة المخرجات الأولية ومستوى التحرير الذي تحتاجه، ويُتفق عليه في عرض السعر.",
    },
    {
      q: "هل تقدّم التحرير اللاحق الخفيف أم الكامل؟",
      a: "الاثنين معًا. يجعل التحرير الخفيف النص دقيقًا ومفهومًا، وهو مناسب للمستندات الداخلية والكميات الكبيرة من المحتوى المرجعي. أما التحرير الكامل فيرتقي بالنص العربي إلى جودة النشر لكل ما سيقرؤه عملاؤك.",
    },
  ],
  transcreation: [
    {
      q: "ما الفرق بين الترجمة الإبداعية والترجمة؟",
      a: "تنقل الترجمة معنى النص من لغة إلى أخرى. أما الترجمة الإبداعية فأقرب إلى كتابة المحتوى الإعلاني: تنطلق من موجزك الإبداعي وتعيد صياغة الرسالة بالعربية لتحافظ على المقصد والنبرة والأثر العاطفي نفسه، حتى لو تطلّب ذلك تغيير الكلمات أو التلاعب اللفظي أو المرجعيات الثقافية. وتُستخدم في الشعارات والحملات ورسائل العلامة التجارية ونصوص المنتجات.",
    },
    {
      q: "هل تقدّم ترجمة عكسية؟",
      a: "نعم. ترافق كل صيغة عربية ترجمة عكسية وملاحظات توضّح سبب الاختيارات، ليتمكن زملاؤك الذين لا يقرؤون العربية من مراجعتها واعتمادها بثقة.",
    },
    {
      q: "هل يمكنك ملاءمة النص العربي لمساحات ضيقة في التطبيقات والمواقع؟",
      a: "نعم. تُكتب نصوص الواجهات، كالأزرار والقوائم والإشعارات، لتناسب حدود الأحرف أو المساحة التي تحدّدها دون أن تفقد وضوحها، وتُراجَع وفق اتجاه الكتابة من اليمين إلى اليسار. وكلما أمكن، أراجعها عبر لقطات الشاشة أو نسخة تجريبية من منتجك.",
    },
  ],
  consulting: [
    {
      q: "هل نستخدم العربية الفصحى المعاصرة أم لهجة محلية؟",
      a: "يعتمد ذلك على جمهورك ونوع المحتوى. العربية الفصحى المعاصرة مفهومة في أنحاء العالم العربي، وتناسب الوثائق والمحتوى القانوني والمؤسسي ومعظم محتوى المواقع. أما اللهجة المحلية، كالخليجية أو المصرية، فقد تكون أنسب للتسويق ووسائل التواصل الاجتماعي ومقاطع الفيديو الموجّهة إلى بلد بعينه. وأساعدك على اختيار المزيج المناسب لكل سوق ونوع محتوى.",
    },
    {
      q: "هل الاستشارة خدمة لمرة واحدة أم مستمرة؟",
      a: "الاستشارة خدمة مستمرة. نبدأ بمراجعة أسواقك ومحتواك وسير عملك، ثم أواكبك مع نمو محتواك العربي: أجيب عن أسئلة المصطلحات والأسلوب، وأحدّث المسارد والأدلة، وأراجع الجودة كلما أضفت منتجات أو أسواقًا أو مورّدين جددًا.",
    },
    {
      q: "ماذا تشمل مراجعة الجاهزية للتوطين؟",
      a: "قبل بدء الترجمة، أتحقق من جاهزية موقعك أو تطبيقك تقنيًا وثقافيًا للعربية: فصل النصوص عن الشيفرة البرمجية لتسهل ترجمتها، والتصميم من اليمين إلى اليسار وعكس الأيقونات، والنصوص والأرقام المختلطة بين العربية والإنجليزية، والمساحة الكافية للنصوص الأطول أو الأقصر، وصيغ الجمع العربية، وتنسيقات التاريخ والأرقام والعملات، والخطوط، والصور أو الأسماء التي قد تحتاج إلى تكييف ثقافي. وتحصل على قائمة إصلاحات مرتّبة حسب الأولوية توفّر الوقت والتكلفة عند بدء الترجمة.",
    },
  ],
  "digital-marketing": [
    {
      q: "ما الأسواق التي تعمل معها؟",
      a: "أعمل أساسًا مع شركات في أوروبا وأمريكا الشمالية، إضافةً إلى عملاء من مختلف أنحاء العالم، ممن يريدون الوصول إلى الجمهور الناطق بالعربية.",
    },
    {
      q: "هل تدير حسابات وسائل التواصل الاجتماعي أم تكتب المحتوى فقط؟",
      a: "الاثنين معًا. أكتب منشوراتك العربية وأوطّنها، ويمكنني أيضًا إدارة حساباتك: تخطيط تقويم المحتوى، وجدولة المنشورات ونشرها، ومراجعة الأداء لتحسين النتائج.",
    },
    {
      q: "ما أدوات التسويق التي تستخدمها؟",
      a: "أعمل بالأدوات المعتمدة في المجال، ومنها Google Analytics وGoogle Search Console وGoogle Ads وMeta Business Suite وLinkedIn Campaign Manager وSemrush وAhrefs وHootsuite وMailchimp وCanva، وأتكيّف مع الأدوات التي يستخدمها فريقك.",
    },
  ],
};

const fr: FaqSet = {
  title: "Questions fréquentes",
  home: [
    {
      q: "Dans quelles langues traduisez-vous ?",
      a: "Je traduis de l’anglais, du français et de l’espagnol vers l’arabe, ma langue maternelle, pour un texte qui se lit comme s’il avait été écrit directement en arabe pour votre public.",
    },
    {
      q: "Travaillez-vous avec des agences de traduction ou des clients directs ?",
      a: "Les deux. Les agences de traduction font appel à moi comme linguiste arabe dédié pour des projets ponctuels ou réguliers, en respectant leurs guides de style, leurs outils TAO et leurs délais. Les clients directs reçoivent une traduction arabe prête à l’emploi et ont un seul interlocuteur, du devis à la livraison finale.",
    },
    {
      q: "Signez-vous un accord de confidentialité (NDA) ?",
      a: "Oui. Je signe volontiers votre accord de confidentialité, ou je vous en propose un, avant que vous ne partagiez le moindre fichier. Les documents sont traités en toute confidentialité et transférés de manière sécurisée.",
      link: { label: "Comment vos fichiers sont protégés", href: "/confidentiality" },
    },
    {
      q: "Où puis-je consulter les avis de vos clients ?",
      a: "Les avis des clients avec qui j’ai travaillé sont publiés sur mon profil ProZ.com, le plus grand réseau professionnel de traducteurs.",
      link: { label: "Lire les avis clients sur ProZ.com", href: PROZ },
    },
    {
      q: "Proposez-vous des traductions assermentées ou certifiées ?",
      a: "Non. Je ne fournis pas de traductions assermentées ou certifiées avec cachet officiel, comme pour les démarches d’immigration ou les tribunaux. Je me concentre sur les contenus commerciaux, techniques, juridiques, financiers, médicaux, marketing et logiciels.",
    },
  ],
  translation: [
    {
      q: "Traduisez-vous aussi des sites web et des logiciels, pas seulement des documents ?",
      a: "Oui. En plus des documents, je traduis des sites web, des applications web et mobiles, des interfaces logicielles, des centres d’aide et des contenus marketing. Je peux travailler directement sur les fichiers exportés par votre équipe, comme XLIFF, HTML ou des tableurs, et vérifier l’arabe en contexte pour la mise en page de droite à gauche.",
    },
    {
      q: "Pouvez-vous gérer des projets volumineux ou réguliers ?",
      a: "Oui. Les projets volumineux et récurrents suivent un flux de travail organisé : le travail est planifié par étapes avec des dates de livraison convenues, et les mémoires de traduction et glossaires assurent une terminologie cohérente d’un fichier, d’un lot et d’une mise à jour à l’autre. Sur les comptes réguliers, chaque nouveau travail s’appuie sur les précédents, pour une qualité constante d’une livraison à l’autre.",
    },
    {
      q: "La révision et la relecture sont-elles incluses ?",
      a: "Oui. Pour les clients directs, chaque projet passe par la traduction, la révision et la relecture (TEP), suivies de contrôles qualité : vous recevez un document prêt à être publié ou utilisé, pas un brouillon. Les agences qui assurent leur propre relecture peuvent commander la traduction seule.",
    },
  ],
  editing: [
    {
      q: "Quelle différence entre révision et relecture ?",
      a: "La révision est un contrôle bilingue : je compare la traduction arabe à la source phrase par phrase pour corriger contresens, omissions, terminologie et style. La relecture est un contrôle final unilingue du texte arabe lui-même, pour la grammaire, l’orthographe, la ponctuation, la cohérence et la mise en forme, avant publication.",
    },
    {
      q: "Révisez-vous le travail d’autres traducteurs ?",
      a: "Oui. Je révise régulièrement des traductions réalisées par d’autres traducteurs, par des équipes internes ou par traduction automatique, avec des commentaires précis et constructifs pour que le traducteur comprenne chaque modification.",
    },
    {
      q: "Que vérifie une révision ?",
      a: "L’exactitude (contresens, omissions et ajouts), le respect de la terminologie et du glossaire, la grammaire et l’orthographe, la ponctuation et la typographie arabes, la cohérence dans tout le document, les conventions locales comme les dates, nombres et devises, le registre et le style adaptés au public, ainsi que la mise en forme, les balises et la mise en page, y compris les problèmes d’écriture de droite à gauche.",
    },
    {
      q: "Qu’est-ce que la LQA, et comment notez-vous les traductions ?",
      a: "L’évaluation de la qualité linguistique (LQA) mesure objectivement la qualité d’une traduction. Chaque erreur est consignée par catégorie, comme l’exactitude, la terminologie, la fluidité, le style ou les conventions locales, et par gravité (mineure, majeure ou critique), selon le référentiel MQM ou la grille de votre agence. Le résultat : une note de qualité et un court rapport avec exemples et recommandations.",
    },
    {
      q: "Allez-vous modifier le style du traducteur ?",
      a: "Non. J’évite les modifications de préférence : je corrige les erreurs et les incohérences, pas les choix de mots personnels, pour que la révision reste objective et respecte le travail du traducteur. Les suggestions purement stylistiques sont signalées comme facultatives.",
    },
    {
      q: "Avec quels formats de fichiers travaillez-vous ?",
      a: "Word, Excel, PowerPoint et PDF ; les formats bilingues TAO comme XLIFF, SDLXLIFF et MQXLIFF ; les packages de projet Trados et memoQ ; ainsi que les fichiers HTML, XML, JSON et les sous-titres SRT. Si votre format n’est pas cité, n’hésitez pas à demander.",
    },
    {
      q: "Est-ce que je reçois un fichier avec suivi des modifications ou une version propre ?",
      a: "Comme vous préférez : suivi des modifications, version finale propre, ou les deux, avec un journal des modifications importantes et des éventuelles questions sur le texte source.",
    },
  ],
  mtpe: [
    {
      q: "L’arabe post-édité se lit-il comme une traduction humaine ?",
      a: "Oui. En post-édition complète, je retravaille la sortie de la machine jusqu’à ce que le texte se lise naturellement, comme s’il avait été écrit par un traducteur arabe professionnel. Le sens, la terminologie, la grammaire, le style et la fluidité sont corrigés, si bien que le lecteur ne devine pas qu’une machine est intervenue.",
    },
    {
      q: "La post-édition coûte-t-elle moins cher que la traduction humaine ?",
      a: "Oui. Comme la machine produit un premier jet, la post-édition coûte généralement moins cher et prend moins de temps qu’une traduction à partir de zéro. L’économie exacte dépend de la qualité de la sortie brute et du niveau de révision souhaité, et elle est fixée dans le devis.",
    },
    {
      q: "Proposez-vous une post-édition légère ou complète ?",
      a: "Les deux. La post-édition légère rend le texte exact et compréhensible, ce qui convient aux documents internes et aux gros volumes de contenu de référence. La post-édition complète amène l’arabe au niveau de publication pour tout ce que liront vos clients.",
    },
  ],
  transcreation: [
    {
      q: "Quelle différence entre transcréation et traduction ?",
      a: "La traduction transpose le sens d’un texte d’une langue à une autre. La transcréation se rapproche de la rédaction publicitaire : elle part de votre brief créatif et recrée le message en arabe pour en conserver l’intention, le ton et l’impact émotionnel, même si les mots, les jeux de mots ou les références culturelles doivent changer. Elle sert aux slogans, aux campagnes, aux messages de marque et aux textes produits.",
    },
    {
      q: "Fournissez-vous des rétrotraductions ?",
      a: "Oui. Chaque proposition arabe est accompagnée d’une rétrotraduction et de notes expliquant les choix, pour que vos collègues qui ne lisent pas l’arabe puissent la relire et la valider en toute confiance.",
    },
    {
      q: "Pouvez-vous faire tenir l’arabe dans des espaces réduits sur les applications et les sites ?",
      a: "Oui. Les textes d’interface, comme les boutons, menus et notifications, sont rédigés pour respecter les limites de caractères ou d’espace que vous fixez sans perdre en clarté, et vérifiés pour la lecture de droite à gauche. Dans la mesure du possible, je les contrôle sur captures d’écran ou sur une version de test de votre produit.",
    },
  ],
  consulting: [
    {
      q: "Faut-il utiliser l’arabe standard moderne ou un dialecte régional ?",
      a: "Cela dépend de votre public et du type de contenu. L’arabe standard moderne est compris dans tout le monde arabe et convient à la documentation, aux contenus juridiques et institutionnels et à la plupart des sites web. Un dialecte régional, comme l’arabe du Golfe ou l’égyptien, peut être plus efficace pour le marketing, les réseaux sociaux et les vidéos destinés à un seul pays. Je vous aide à choisir le bon équilibre pour chaque marché et chaque type de contenu.",
    },
    {
      q: "Le conseil est-il ponctuel ou suivi ?",
      a: "Le conseil est un service suivi. Nous commençons par examiner vos marchés, vos contenus et votre flux de travail, puis je vous accompagne à mesure que vos contenus arabes se développent : réponses aux questions de terminologie et de style, mise à jour des glossaires et des guides, et contrôle de la qualité lorsque vous ajoutez de nouveaux produits, marchés ou prestataires.",
    },
    {
      q: "Que comprend un audit de préparation à la localisation ?",
      a: "Avant le début de la traduction, je vérifie que votre site ou votre application est prêt pour l’arabe, sur le plan technique comme culturel : textes séparés du code pour pouvoir être traduits, mise en page de droite à gauche et icônes inversées, mélange de texte et de chiffres arabes et latins, place suffisante pour des textes plus longs ou plus courts, formes du pluriel arabe, formats de date, de nombre et de devise, polices, et images ou noms à adapter culturellement. Vous recevez une liste de corrections classées par priorité, qui fait gagner du temps et de l’argent une fois la traduction lancée.",
    },
  ],
  "digital-marketing": [
    {
      q: "Avec quels marchés travaillez-vous ?",
      a: "Je travaille principalement avec des entreprises d’Europe et d’Amérique du Nord, ainsi qu’avec des clients du monde entier, qui veulent toucher un public arabophone.",
    },
    {
      q: "Gérez-vous les comptes de réseaux sociaux, ou seulement la rédaction des contenus ?",
      a: "Les deux. Je rédige et localise vos publications en arabe, et je peux aussi gérer vos comptes : planification du calendrier éditorial, programmation et publication des posts, et analyse des performances pour améliorer les résultats.",
    },
    {
      q: "Quels outils marketing utilisez-vous ?",
      a: "Je travaille avec les outils de référence du secteur, notamment Google Analytics, Google Search Console, Google Ads, Meta Business Suite, LinkedIn Campaign Manager, Semrush, Ahrefs, Hootsuite, Mailchimp et Canva, et je m’adapte aux outils que votre équipe utilise déjà.",
    },
  ],
};

const es: FaqSet = {
  title: "Preguntas frecuentes",
  home: [
    {
      q: "¿Entre qué idiomas traduces?",
      a: "Traduzco del inglés, el francés y el español al árabe, mi lengua materna, para que el texto se lea como si se hubiera escrito directamente en árabe para tu público.",
    },
    {
      q: "¿Trabajas con agencias de traducción o con clientes directos?",
      a: "Con ambos. Las agencias de traducción trabajan conmigo como lingüista de árabe dedicado en proyectos puntuales y recurrentes, siguiendo sus guías de estilo, herramientas TAO y plazos. Los clientes directos reciben una traducción al árabe lista para usar y tratan con una sola persona, desde el presupuesto hasta la entrega final.",
    },
    {
      q: "¿Firmas un acuerdo de confidencialidad (NDA)?",
      a: "Sí. Firmo con gusto tu acuerdo de confidencialidad, o te facilito uno, antes de que compartas cualquier archivo. Los documentos se tratan de forma confidencial y se transfieren de manera segura.",
      link: { label: "Cómo se protegen tus archivos", href: "/confidentiality" },
    },
    {
      q: "¿Dónde puedo ver opiniones de tus clientes?",
      a: "Las opiniones de los clientes con los que he trabajado están publicadas en mi perfil de ProZ.com, la mayor red profesional de traductores.",
      link: { label: "Leer opiniones de clientes en ProZ.com", href: PROZ },
    },
    {
      q: "¿Ofreces traducción jurada o certificada?",
      a: "No. No ofrezco traducciones juradas ni certificadas con sello oficial, como las que se piden para trámites de inmigración o tribunales. Me centro en contenido comercial, técnico, jurídico, financiero, sanitario, de marketing y de software.",
    },
  ],
  translation: [
    {
      q: "¿Traduces sitios web y software, no solo documentos?",
      a: "Sí. Además de documentos, traduzco sitios web, aplicaciones web y móviles, interfaces de software, centros de ayuda y contenido de marketing. Puedo trabajar en los archivos que exporta tu equipo, como XLIFF, HTML u hojas de cálculo, y revisar el árabe en contexto para la lectura de derecha a izquierda.",
    },
    {
      q: "¿Puedes encargarte de proyectos grandes o continuos?",
      a: "Sí. Los proyectos grandes y recurrentes siguen un flujo de trabajo organizado: el trabajo se planifica por etapas con fechas de entrega acordadas, y las memorias de traducción y los glosarios mantienen la terminología coherente entre archivos, lotes y actualizaciones. En las cuentas continuas, cada nuevo encargo se apoya en los anteriores, de modo que la calidad se mantiene de una entrega a otra.",
    },
    {
      q: "¿Incluye edición y revisión?",
      a: "Sí. Para los clientes directos, cada proyecto pasa por traducción, edición y revisión (TEP), seguidas de controles de calidad, así que recibes un documento listo para publicar o usar, no un borrador. Las agencias que hacen su propia revisión pueden pedir solo la traducción.",
    },
  ],
  editing: [
    {
      q: "¿Qué diferencia hay entre edición y revisión?",
      a: "La edición es una comprobación bilingüe: comparo la traducción al árabe con el original frase por frase para corregir errores de traducción, omisiones, terminología y estilo. La revisión es una comprobación final monolingüe del propio texto en árabe, de gramática, ortografía, puntuación, coherencia y formato, antes de publicarlo.",
    },
    {
      q: "¿Revisas el trabajo de otros traductores?",
      a: "Sí. Reviso con regularidad traducciones hechas por otros traductores, equipos internos y traducción automática, con comentarios concretos y constructivos para que el traductor entienda cada cambio.",
    },
    {
      q: "¿Qué se comprueba en una revisión?",
      a: "La exactitud (errores de traducción, omisiones y añadidos), el cumplimiento de la terminología y el glosario, la gramática y la ortografía, la puntuación y tipografía árabes, la coherencia en todo el documento, las convenciones locales como fechas, números y monedas, el registro y el estilo adecuados al público, y el formato, las etiquetas y el diseño, incluidos los problemas de escritura de derecha a izquierda.",
    },
    {
      q: "¿Qué es la LQA y cómo puntúas las traducciones?",
      a: "La evaluación de la calidad lingüística (LQA) mide la calidad de una traducción de forma objetiva. Cada error se registra por categoría, como exactitud, terminología, fluidez, estilo o convenciones locales, y por gravedad (leve, grave o crítico), con el marco MQM o la ficha de tu agencia. El resultado es una puntuación de calidad y un breve informe con ejemplos y recomendaciones.",
    },
    {
      q: "¿Vas a cambiar el estilo del traductor?",
      a: "No. Evito los cambios preferenciales: corrijo errores e incoherencias, no elecciones personales de palabras, para que la revisión sea objetiva y se respete el trabajo del traductor. Las sugerencias que solo mejoran el estilo se marcan como opcionales.",
    },
    {
      q: "¿Con qué formatos de archivo trabajas?",
      a: "Word, Excel, PowerPoint y PDF; formatos bilingües TAO como XLIFF, SDLXLIFF y MQXLIFF; paquetes de proyecto de Trados y memoQ; y archivos HTML, XML, JSON y subtítulos SRT. Si tu formato no aparece, pregúntame.",
    },
    {
      q: "¿Recibo el archivo con control de cambios o una versión limpia?",
      a: "Como prefieras: con control de cambios, una versión final limpia o ambas, junto con un registro de los cambios importantes y las dudas sobre el texto original.",
    },
  ],
  mtpe: [
    {
      q: "¿El árabe poseditado se lee como una traducción humana?",
      a: "Sí. Con la posedición completa, reelaboro el resultado de la máquina hasta que el texto se lee con naturalidad, como si lo hubiera escrito un traductor profesional de árabe. Corrijo sentido, terminología, gramática, estilo y fluidez, de modo que el lector no nota que intervino una máquina.",
    },
    {
      q: "¿La posedición es más barata que la traducción humana?",
      a: "Sí. Como la máquina genera un primer borrador, la posedición suele costar menos y llevar menos tiempo que traducir desde cero. El ahorro exacto depende de la calidad del resultado en bruto y del nivel de edición que necesites, y se acuerda en el presupuesto.",
    },
    {
      q: "¿Ofreces posedición ligera o completa?",
      a: "Las dos. La posedición ligera deja el texto preciso y comprensible, lo que sirve para documentos internos y grandes volúmenes de contenido de referencia. La posedición completa lleva el árabe a calidad de publicación para todo lo que vayan a leer tus clientes.",
    },
  ],
  transcreation: [
    {
      q: "¿En qué se diferencia la transcreación de la traducción?",
      a: "La traducción traslada el sentido de un texto de un idioma a otro. La transcreación se parece más a la redacción publicitaria: parte de tu brief creativo y recrea el mensaje en árabe para conservar la intención, el tono y el impacto emocional, aunque haya que cambiar las palabras, los juegos de palabras o las referencias culturales. Se usa en eslóganes, campañas, mensajes de marca y textos de producto.",
    },
    {
      q: "¿Ofreces retrotraducciones?",
      a: "Sí. Cada propuesta en árabe incluye una retrotraducción y notas que explican las decisiones, para que tus compañeros que no leen árabe puedan revisarla y aprobarla con confianza.",
    },
    {
      q: "¿Puedes ajustar el árabe a espacios reducidos en aplicaciones y sitios web?",
      a: "Sí. Los textos de interfaz, como botones, menús y notificaciones, se redactan para respetar los límites de caracteres o de espacio que fijes sin perder claridad, y se revisan para la lectura de derecha a izquierda. Siempre que es posible, los reviso sobre capturas de pantalla o una versión de prueba de tu producto.",
    },
  ],
  consulting: [
    {
      q: "¿Debemos usar árabe estándar moderno o un dialecto regional?",
      a: "Depende de tu público y del tipo de contenido. El árabe estándar moderno se entiende en todo el mundo árabe y es adecuado para documentación, contenido jurídico y corporativo y la mayoría de los sitios web. Un dialecto regional, como el árabe del Golfo o el egipcio, puede funcionar mejor en marketing, redes sociales y vídeos dirigidos a un solo país. Te ayudo a elegir la combinación adecuada para cada mercado y tipo de contenido.",
    },
    {
      q: "¿La consultoría es puntual o continua?",
      a: "La consultoría es un servicio continuo. Empezamos revisando tus mercados, tu contenido y tu flujo de trabajo, y después te acompaño a medida que crece tu contenido en árabe: resuelvo dudas de terminología y estilo, actualizo glosarios y guías, y reviso la calidad cuando incorporas nuevos productos, mercados o proveedores.",
    },
    {
      q: "¿Qué incluye una revisión de preparación para la localización?",
      a: "Antes de empezar a traducir, compruebo si tu sitio web o aplicación está preparado para el árabe, a nivel técnico y cultural: textos separados del código para poder traducirlos, diseño de derecha a izquierda e iconos invertidos, mezcla de texto y números en árabe y en alfabeto latino, espacio para textos más largos o más cortos, formas del plural árabe, formatos de fecha, número y moneda, tipografías, e imágenes o nombres que puedan necesitar adaptación cultural. Recibes una lista de correcciones ordenada por prioridad, que ahorra tiempo y dinero cuando empieza la traducción.",
    },
  ],
  "digital-marketing": [
    {
      q: "¿Con qué mercados trabajas?",
      a: "Trabajo sobre todo con empresas de Europa y Norteamérica, además de clientes de todo el mundo, que quieren llegar al público de habla árabe.",
    },
    {
      q: "¿Gestionas cuentas de redes sociales o solo redactas el contenido?",
      a: "Las dos cosas. Redacto y localizo tus publicaciones en árabe, y también puedo gestionar tus cuentas: planificar el calendario de contenidos, programar y publicar las publicaciones, y analizar los resultados para mejorarlos.",
    },
    {
      q: "¿Qué herramientas de marketing utilizas?",
      a: "Trabajo con las herramientas de referencia del sector, como Google Analytics, Google Search Console, Google Ads, Meta Business Suite, LinkedIn Campaign Manager, Semrush, Ahrefs, Hootsuite, Mailchimp y Canva, y me adapto a las que ya use tu equipo.",
    },
  ],
};

const all: Record<Locale, FaqSet> = { en, ar, fr, es };

export function getFaqs(locale: string): FaqSet {
  return all[locale as Locale] ?? en;
}
