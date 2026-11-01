import type { Locale } from "@/i18n";

/**
 * Blog articles written in code, with a version for each language. They are
 * listed alongside the posts published from the admin panel (which have one
 * language only). Content is Markdown; links point to the same language.
 */
export type CodePost = {
  slug: string;
  category: string;
  cover: string;
  publishedAt: string;
  updatedAt: string;
  /** Each language is a separate article; `publishedAt` here overrides the post date, so
   *  language versions can go out on different days (they stay hidden until then). */
  text: Record<Locale, { title: string; excerpt: string; seoTitle: string; content: string; publishedAt?: string }>;
};

/* ------------------------------------------------------------------ */
/* 1. Modern Standard Arabic vs dialects                               */
/* ------------------------------------------------------------------ */

const msaVsDialects: CodePost = {
  slug: "which-arabic-msa-vs-dialects",
  category: "Localization",
  cover: "/images/blog/which-arabic.jpg",
  publishedAt: "2026-11-01T09:00:00Z",
  updatedAt: "2026-11-01T14:00:00Z",
  text: {
    en: {
      title: "Which Arabic should you use? Modern Standard Arabic vs dialects",
      seoTitle: "MSA vs Arabic Dialects: Which Arabic Should Your Business Use?",
      excerpt:
        "Modern Standard Arabic, Gulf, Egyptian, Levantine or Maghrebi? A practical guide to choosing the right Arabic for your documents, website, app and marketing.",
      content: `Arabic is spoken by more than 400 million people across more than 20 countries, but it is not one single variety. Before you translate anything, you need to decide **which Arabic** your audience should read. The right choice depends on what you are publishing and who will read it.

## Modern Standard Arabic (MSA)

Modern Standard Arabic, called *al-fuṣḥā* in Arabic, is the shared written language of the Arab world. It is used in newspapers, books, official documents, contracts, education, news broadcasts and most websites. Every educated Arabic speaker understands it, from Morocco to Oman.

**Use MSA for:**

- Contracts, policies, legal and financial documents
- Technical documentation, manuals and help centers
- Software and app interfaces that serve several countries
- Corporate websites aimed at the whole Arab world
- Healthcare and education content

MSA does not have to sound stiff. A good translator writes clear, modern MSA with a tone that suits your brand, from formal to friendly.

## The main dialect groups

People speak their local dialect in daily life. The main groups are:

- **Gulf (Khaleeji):** Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain and Oman
- **Egyptian:** widely understood across the region thanks to Egyptian film and TV
- **Levantine (Shami):** Palestine, Jordan, Lebanon and Syria
- **Iraqi:** Iraq
- **Maghrebi (Darija):** Morocco, Algeria, Tunisia and Libya, the most different from MSA

Dialects are mainly spoken, so they are rarely used for formal writing. They work well when you want to sound close and personal to one specific market.

## Which one should you choose?

| Content | Recommended Arabic |
|---|---|
| Contracts, policies, financial reports | Formal MSA |
| Manuals, help centers, documentation | Clear MSA |
| App or SaaS interface for several countries | MSA with a simple, friendly tone |
| Website for the whole Arab world | MSA |
| Marketing for one country | MSA with a local touch, or that country’s dialect |
| Social media and ads for one market | The local dialect often performs best |
| Video for a broad audience | MSA, or Egyptian for informal content |
| Customer support for one country | Simple MSA, with local words where natural |

## A practical rule

If your audience is in **more than one country**, or the content is **official, technical or long-lasting**, use MSA. If your content is **short, emotional and aimed at one country**, such as a social media campaign in Saudi Arabia, consider the local dialect or MSA with a local flavor.

Many brands combine both: MSA for the website, product and documentation, and a light local tone for social media and campaigns. This keeps the brand consistent while still sounding natural in each market.

## Common mistakes to avoid

- **Mixing dialects** in the same text, which confuses readers
- **Using a dialect for formal content**, which can look unprofessional
- **Writing heavy, old-fashioned MSA** for marketing, which feels distant
- **Translating slogans word for word** instead of adapting them through [transcreation](/en/services/transcreation)

## Not sure which Arabic fits your audience?

Choosing the right variety is part of every project I take on. If you are unsure, [tell me about your audience and goals](/en/contact) and I’ll recommend the best option before any translation begins. You can also read about my [consulting service](/en/services/consulting), which covers this decision for larger launches.`,
    },
    ar: {
      title: "الفصحى أم العامية في محتوى علامتك التجارية؟ دليل عملي للمسوّقين العرب",
      seoTitle: "الفصحى أم العامية في التسويق؟ دليل اختيار لغة علامتك التجارية",
      excerpt:
        "هل تكتب منشوراتك بالفصحى أم باللهجة؟ وهل يبحث عملاؤك في Google بالكلمات نفسها؟ دليل عملي لاختيار لغة علامتك التجارية في كل قناة.",
      content: `كل مسوّق عربي يواجه السؤال نفسه عاجلًا أو آجلًا: **هل نكتب بالفصحى أم بالعامية؟** والإجابة ليست واحدة لكل المحتوى، بل تختلف حسب القناة والجمهور والهدف.

## الفصحى ليست «لغة رسمية» فقط

يربط كثيرون الفصحى بالأسلوب الجاف أو الرسمي، لكن هناك فصحى مبسّطة وعصرية تستخدمها اليوم علامات تجارية كبيرة في مواقعها وتطبيقاتها: جمل قصيرة، وكلمات مألوفة، ونبرة ودّية. هذه الفصحى يفهمها الجميع من المغرب إلى الخليج، وتمنح العلامة صورة موثوقة ومحترفة.

## متى تنجح العامية؟

تنجح اللهجة المحلية حين تريد أن تبدو **قريبًا وعفويًا** من جمهور بلد بعينه:

- منشورات وسائل التواصل الاجتماعي والإعلانات القصيرة
- مقاطع الفيديو والإعلانات الصوتية
- الحملات الموسمية والمحتوى الفكاهي
- الرسائل المباشرة وخدمة العملاء في بلد واحد

لكن انتبه: اللهجة الخليجية في حملة موجّهة إلى مصر، أو المصرية في حملة مغاربية، قد تبدو غريبة أو مصطنعة.

## العملاء يبحثون بكلمات مختلفة

هنا نقطة يغفل عنها كثيرون في **تحسين محركات البحث (SEO)**: الناس لا يبحثون دائمًا بالفصحى. قد يكتب المستخدم «أسعار تكييف» في بلد، و«أسعار مكيف» في بلد آخر، أو يستخدم كلمة إنجليزية مكتوبة بحروف عربية. لذلك:

- ابحث عن الكلمات التي يستخدمها جمهورك فعلًا في كل سوق
- اكتب صفحاتك بالفصحى، لكن أدخل الكلمات المحلية الشائعة في العناوين والأسئلة الشائعة حيث يكون ذلك طبيعيًا
- لا تفترض أن ترجمة الكلمة المفتاحية الإنجليزية حرفيًا هي ما يبحث عنه العميل

## قاعدة بسيطة لكل قناة

| القناة | اللغة المقترحة |
|---|---|
| الموقع الإلكتروني والتطبيق | فصحى مبسّطة وعصرية |
| المستندات والعقود والسياسات | فصحى رسمية |
| مركز المساعدة | فصحى واضحة وقصيرة |
| وسائل التواصل في بلد واحد | لهجة ذلك البلد أو فصحى بنكهة محلية |
| الإعلانات المدفوعة | حسب السوق المستهدفة لكل حملة |
| البريد الإلكتروني التسويقي | فصحى ودّية |

## اجعل قرارك مكتوبًا

أفضل ما تفعله علامتك هو **دليل أسلوب** قصير يحدد: متى نستخدم الفصحى، ومتى نستخدم اللهجة، وكيف نخاطب العميل (أنتَ أم أنتم؟)، وما الكلمات المعتمدة لأسماء المنتجات والخدمات. هذا الدليل يحمي اتساق علامتك مهما تعدّد الكتّاب والمترجمون.

## كيف أساعدك

أكتب وأترجم وأكيّف المحتوى العربي منذ عام 2014، وأساعد العلامات التجارية على اختيار النبرة المناسبة لكل سوق عبر [الاستشارات](/ar/services/consulting) و[الترجمة الإبداعية](/ar/services/transcreation). وإن كنت مترددًا بين الفصحى واللهجة في حملتك القادمة، [فتواصل معي](/ar/contact).`,
    },
    fr: {
      title: "Arabe standard, darija ou arabe du Golfe : quel arabe pour vos marchés ?",
      seoTitle: "Arabe standard, darija ou arabe du Golfe : quel arabe choisir ?",
      excerpt:
        "Maghreb ou Moyen-Orient ? Pour une entreprise française, le choix de l’arabe dépend du marché visé. Arabe standard, darija, arabe du Golfe : le guide pour décider.",
      content: `Pour une entreprise française, « traduire en arabe » n’est pas une décision unique. Viser Casablanca, Alger, Tunis, Le Caire, Dubaï ou Riyad n’implique ni le même public, ni les mêmes habitudes linguistiques. Avant de lancer une traduction, il faut savoir **quel arabe** parler à qui.

## L’arabe standard moderne, socle commun

L’arabe standard moderne (ASM) est la langue écrite commune à tous les pays arabes : presse, administration, contrats, enseignement, la plupart des sites institutionnels. Il est compris partout. Pour un site d’entreprise, une documentation, une application ou des conditions générales destinés à plusieurs pays, c’est le choix le plus sûr.

## Le Maghreb : un cas particulier

Au Maroc, en Algérie et en Tunisie, la situation est singulière :

- **la darija** (l’arabe dialectal maghrébin) est la langue du quotidien, très différente de l’arabe standard et parfois difficile à comprendre pour un public du Moyen-Orient ;
- **le français** reste très présent dans les affaires, l’enseignement supérieur et une partie de l’administration ;
- **l’arabe standard** domine l’écrit officiel et les médias.

Conséquence pratique : pour le Maghreb, un contenu en français peut suffire pour certains publics professionnels, mais une version en arabe standard élargit nettement votre audience. Pour une campagne grand public sur les réseaux sociaux, une touche de darija peut créer de la proximité, à condition d’être écrite par quelqu’un qui la maîtrise.

## Le Golfe et le Moyen-Orient

Dans le Golfe (Arabie saoudite, Émirats, Qatar, Koweït…), l’anglais est très présent dans les affaires, mais l’arabe reste indispensable pour toucher le grand public et les institutions. On y privilégie un arabe standard moderne, clair et soigné, avec parfois une touche du dialecte du Golfe dans le marketing local. En Égypte, le dialecte égyptien est compris dans toute la région grâce au cinéma et aux séries, ce qui en fait une option pour certains contenus vidéo informels.

## Grille de décision

| Votre projet | Choix recommandé |
|---|---|
| Site institutionnel pour plusieurs pays arabes | Arabe standard |
| Contrats, CGV, documentation | Arabe standard formel |
| Campagne réseaux sociaux au Maroc | Darija ou arabe standard avec touche locale |
| Clientèle B2B au Maghreb | Français et arabe standard |
| Marketing grand public dans le Golfe | Arabe standard, avec touche du Golfe si pertinent |
| Vidéo informelle pour un large public | Arabe standard, ou égyptien |

## Le piège à éviter

Traduire le même texte français mot à mot pour tous les marchés arabes. Les références culturelles, le ton et même certains termes changent d’un pays à l’autre. Un slogan qui fonctionne à Paris peut tomber à plat à Riyad : c’est le rôle de la [transcréation](/fr/services/transcreation).

## Mon accompagnement

Je traduis vers l’arabe depuis 2014, notamment depuis le français, et j’aide les entreprises à choisir la bonne variété pour chaque marché dans le cadre de mon [service de conseil](/fr/services/consulting). Vous hésitez entre Maghreb et Golfe, arabe standard et dialecte ? [Parlons de votre projet](/fr/contact).`,
    },
    es: {
      title: "¿Existe un «árabe neutro»? Cómo elegir el árabe adecuado si vienes del mundo hispano",
      seoTitle: "¿Existe un árabe neutro? Árabe estándar y dialectos explicados para hispanohablantes",
      excerpt:
        "Igual que el español tiene variantes y un «español neutro», el árabe tiene un estándar común y muchos dialectos. Una guía pensada para empresas de España y Latinoamérica.",
      content: `Si trabajas en una empresa de España o Latinoamérica, ya conoces el problema: ¿escribimos para México, para Argentina o para España? ¿Usamos «tú», «vos» o «usted»? Muchas marcas resuelven esto con un **español neutro** que entienden todos.

El árabe tiene una situación parecida, pero aún más marcada.

## El árabe estándar: el «árabe neutro»

El **árabe estándar moderno** es la lengua escrita común de todos los países árabes. Es el árabe de la prensa, los libros, los contratos, la televisión informativa y la mayoría de las webs. Cualquier persona con estudios lo entiende, de Marruecos a Omán.

Es, por tanto, lo más parecido a un «árabe neutro», y es la elección adecuada para:

- webs corporativas y tiendas online para varios países
- apps y plataformas de software
- documentación técnica, contratos y políticas
- contenido sanitario, educativo o institucional

## La gran diferencia con el español

Entre el español de Madrid y el de Buenos Aires hay diferencias, pero se entienden sin esfuerzo. Entre los **dialectos árabes**, la distancia puede ser mucho mayor: un marroquí y un iraquí hablando cada uno su dialecto pueden tener dificultades para entenderse. Por eso los dialectos casi nunca se usan para textos formales escritos.

Los grandes grupos son:

- **Golfo:** Arabia Saudí, Emiratos, Kuwait, Catar, Baréin y Omán
- **Egipcio:** muy conocido en toda la región por el cine y las series
- **Levantino:** Palestina, Jordania, Líbano y Siria
- **Magrebí (dariya):** Marruecos, Argelia, Túnez y Libia

## Dos mercados que interesan especialmente

**Marruecos**, por cercanía con España, comercio y turismo: la dariya es la lengua del día a día, el árabe estándar domina lo escrito y el francés está muy presente en los negocios. Para una web, árabe estándar; para redes sociales locales, la dariya puede acercarte al público.

**Los países del Golfo**, por turismo, inversión y comercio: el inglés se usa mucho en los negocios, pero para llegar al gran público necesitas un árabe estándar cuidado, con un toque local en el marketing si quieres sonar cercano.

## Cómo decidir

| Tu contenido | Árabe recomendado |
|---|---|
| Web o app para varios países | Árabe estándar |
| Contratos, políticas, manuales | Árabe estándar formal |
| Campaña en redes en un solo país | Dialecto local o estándar con toque local |
| Vídeo informal para mucho público | Árabe estándar o egipcio |
| Atención al cliente en un país | Árabe estándar sencillo |

## Un consejo final

No traduzcas tu eslogan palabra por palabra. Igual que un chiste de Madrid puede no funcionar en Lima, una frase publicitaria pensada en español rara vez funciona igual en árabe. Para eso existe la [transcreación](/es/services/transcreation).

Traduzco al árabe desde el español desde hace años y ayudo a empresas hispanas a elegir la variedad adecuada para cada mercado con mi [servicio de consultoría](/es/services/consulting). ¿Dudas sobre qué árabe usar? [Cuéntame tu proyecto](/es/contact).`,
    },
  },
};

/* ------------------------------------------------------------------ */
/* 2. Arabic localization glossary                                     */
/* ------------------------------------------------------------------ */

const glossary: CodePost = {
  slug: "arabic-localization-glossary",
  category: "Terminology",
  cover: "/images/blog/localization-glossary.jpg",
  publishedAt: "2026-11-01T10:00:00Z",
  updatedAt: "2026-11-01T14:00:00Z",
  text: {
    en: {
      title: "Arabic localization glossary: 15 terms explained simply",
      seoTitle: "Translation & Localization Glossary: MTPE, LQA, TEP, CAT and More",
      excerpt:
        "MTPE, LQA, TEP, CAT tools, translation memory, RTL… The translation industry is full of abbreviations. Here they are, explained in plain language.",
      content: `If you have ever received a quote or a vendor form from a translation agency, you have probably met a wall of abbreviations. This glossary explains the most common terms in plain language, with notes on what they mean for Arabic.

## Localization

Adapting a product or content for a specific market, not just translating the words. For Arabic this includes right-to-left layout, dates, numbers, currencies, images and cultural references. See [SaaS localization](/en/services/saas-localization).

## Internationalization (i18n)

Preparing software so it *can* be localized later: separating text from code, supporting right-to-left languages and leaving room for longer text. "i18n" stands for the 18 letters between the "i" and the "n".

## Right-to-left (RTL)

Arabic is written from right to left. Websites and apps must mirror their layout, including menus, icons, arrows and progress bars, while numbers and Latin words still read left to right inside Arabic text.

## Source and target

The **source** is the original text; the **target** is the translation. Translation is usually priced per source word.

## CAT tool

Computer-assisted translation software, such as Trados, memoQ or Wordfast. It is not machine translation: it helps a human translator work consistently, using translation memories and glossaries, and it keeps the file’s formatting intact.

## Translation memory (TM)

A database of sentences you have already had translated. When the same or a similar sentence appears again, it is reused, which keeps wording consistent and makes updates faster.

## Fuzzy match

A sentence that is *similar*, but not identical, to one in the translation memory. Translators review and adjust it rather than translating from scratch.

## Glossary or termbase

A list of approved translations for your key terms, such as product names, features and industry vocabulary. It keeps every translator, and every document, consistent.

## Machine translation (MT)

Translation produced automatically by software. It is fast, but for Arabic it often makes mistakes in grammar, gender agreement, terminology and tone.

## MTPE (machine translation post-editing)

A human linguist corrects machine translation output. **Light post-editing** makes it accurate and understandable; **full post-editing** makes it read as if written by a human. See [MTPE](/en/services/mtpe).

## TEP (translation, editing, proofreading)

The standard quality workflow: one step translates, a second compares the translation with the source (editing), and a final step checks the Arabic itself (proofreading).

## Editing vs proofreading

**Editing** is bilingual: the translation is checked against the source. **Proofreading** is monolingual: the final Arabic is checked for grammar, spelling, punctuation and formatting. See [editing and proofreading](/en/services/editing).

## LQA (language quality assessment)

An objective way to measure translation quality. Errors are logged by category, such as accuracy, terminology or style, and by severity, then turned into a quality score and report.

## MQM

Multidimensional Quality Metrics, a widely used framework that defines the error categories and severity levels used in LQA.

## Transcreation

Recreating a message, such as a slogan or campaign, so it has the same effect in another culture, rather than translating it word for word. It often comes with a **back-translation** into English so you can see what the Arabic says. See [transcreation](/en/services/transcreation).

## Have a term that isn’t here?

If a quote or a vendor form uses a term you don’t recognize, [just ask me](/en/contact). I’m happy to explain how it applies to your project.`,
    },
    ar: {
      title: "مصطلحات ستقرؤها في عروض أسعار الترجمة: دليل العميل العربي",
      seoTitle: "مصطلحات عروض أسعار الترجمة والتوطين: دليل مبسّط للعميل العربي",
      excerpt:
        "تصلك عروض الأسعار والعقود مليئة بمصطلحات مثل TEP وMTPE وTM وLQA؟ هذا الدليل يشرحها بالعربية مع اختصاراتها الإنجليزية، لتعرف بالضبط ما الذي تدفع مقابله.",
      content: `حين تطلب ترجمة موقعك أو تطبيقك أو مستنداتك من مترجم أو وكالة، قد يصلك عرض سعر مليء بمصطلحات واختصارات إنجليزية. ولأن معظم هذه المصطلحات تُستخدم في القطاع كما هي، جمعت لك أهمها مع مقابلها العربي وشرح مبسّط لما يعنيه لك كعميل.

## مصطلحات الخدمة

**الترجمة والتحرير والتدقيق (TEP):** سير العمل المعياري للجودة: ترجمة، ثم مراجعة الترجمة مقابل النص الأصلي، ثم تدقيق النص العربي النهائي. إذا رأيت TEP في العرض، فأنت تحصل على ثلاث مراحل لا مرحلة واحدة.

**التحرير اللاحق للترجمة الآلية (MTPE):** يصحّح مترجم بشري نصًا أنتجته الترجمة الآلية (MT). وهو مناسب للأحجام الكبيرة والمحتوى الداخلي، لكنه يختلف عن الترجمة البشرية الكاملة. انظر [خدمة MTPE](/ar/services/mtpe).

**الترجمة الإبداعية (Transcreation):** إعادة صياغة الشعارات والحملات لتؤدي الأثر نفسه في الثقافة العربية، لا ترجمتها حرفيًا. وغالبًا ما تُسعَّر حسب المشروع لا حسب الكلمة. انظر [الترجمة الإبداعية](/ar/services/transcreation).

**التوطين (Localization):** تكييف المنتج أو الموقع كله للسوق العربية: النصوص، والاتجاه من اليمين إلى اليسار (RTL)، والتواريخ، والعملات، والصور.

## مصطلحات الأدوات والحساب

**أدوات الترجمة بمساعدة الحاسوب (CAT):** برامج مثل Trados وmemoQ يعمل بها المترجم. ليست ترجمة آلية، بل تساعده على الاتساق وتحفظ تنسيق ملفاتك.

**ذاكرة الترجمة (TM):** قاعدة بيانات بالجمل التي سبقت ترجمتها لك. وهي ملك لمشروعك، وتجعل التحديثات اللاحقة أسرع وأكثر اتساقًا. اسأل دائمًا: هل سأحصل على نسخة من ذاكرة الترجمة (TM)؟

**التكرارات والتطابقات (Repetitions / Matches):** الجمل المكررة داخل ملفك، أو الموجودة سابقًا في ذاكرة الترجمة (TM). قد تظهر في العرض كبنود منفصلة لأنها تحتاج إلى جهد أقل من النص الجديد.

**عدد الكلمات المصدرية (Source word count):** عدد كلمات النص الأصلي، وهو الأساس المعتاد لحساب حجم مشروع الترجمة.

**المسرد (Glossary):** قائمة بالمصطلحات المعتمدة لعلامتك ومنتجاتك. وإعداده في بداية المشروع يوفّر عليك تصحيحات كثيرة لاحقًا.

## مصطلحات الجودة

**ضمان الجودة (QA):** الفحوص التي تُجرى قبل التسليم، يدويًا وبأدوات متخصصة، للتأكد من الأرقام والمصطلحات والتنسيق.

**تقييم جودة اللغة (LQA):** تقييم موضوعي للترجمة تُسجَّل فيه الأخطاء حسب نوعها وخطورتها، وينتج عنه درجة جودة وتقرير. مفيد إذا أردت التحقق من جودة ترجمة استلمتها من جهة أخرى. انظر [التحرير والتدقيق](/ar/services/editing).

**اتفاقية عدم الإفصاح (NDA):** اتفاقية تضمن سرية ملفاتك. يمكنك طلب توقيعها قبل إرسال أي مستند.

## نصيحة أخيرة

إن ورد في عرض السعر مصطلح لا تعرفه، فاسأل عنه قبل الموافقة. المزوّد المحترف يشرح لك بوضوح ما الذي تدفع مقابله. وإن أردت عرض سعر واضحًا لمشروعك، [فتواصل معي](/ar/contact).`,
    },
    fr: {
      title: "Comment lire un devis de traduction : les termes à connaître",
      seoTitle: "Lire un devis de traduction : mots source, TAO, mémoire, révision, LQA",
      excerpt:
        "Mots source, répétitions, correspondances, révision, relecture, PAO, post-édition… Les termes qui figurent sur un devis de traduction, expliqués pour les acheteurs.",
      content: `Un devis de traduction peut sembler opaque la première fois qu’on en reçoit un. Lignes séparées pour les « répétitions », mention de « TAO », distinction entre « révision » et « relecture »… Voici les termes que vous croiserez le plus souvent, et ce qu’ils signifient concrètement pour vous.

## Le volume

**Mots source.** La traduction se compte généralement sur le nombre de mots du document d’origine, et non de la traduction. Un texte français et sa version arabe n’ont d’ailleurs pas le même nombre de mots.

**Répétitions.** Les phrases qui apparaissent plusieurs fois dans vos fichiers. Elles demandent moins de travail que le texte nouveau, c’est pourquoi elles figurent souvent sur une ligne à part.

**Correspondances (matches).** Les phrases déjà traduites lors de projets précédents et enregistrées dans votre mémoire de traduction. On parle de correspondance exacte (100 %) ou partielle (*fuzzy match*) lorsqu’une phrase est seulement proche.

## Les outils

**TAO (traduction assistée par ordinateur).** Des logiciels comme Trados, memoQ ou Wordfast, qui aident le traducteur à rester cohérent et conservent la mise en forme de vos fichiers. Ce n’est **pas** de la traduction automatique.

**Mémoire de traduction.** La base de vos phrases déjà traduites. Elle appartient à votre projet : n’hésitez pas à en demander une copie, elle vous servira pour les mises à jour et si vous changez de prestataire.

**Glossaire.** La liste de vos termes validés (noms de produits, vocabulaire métier). Il garantit que tous les traducteurs utilisent les mêmes mots.

## Les étapes de qualité

**Traduction.** Le premier passage, réalisé par un traducteur professionnel de langue maternelle.

**Révision.** Un contrôle **bilingue** : le texte traduit est comparé à l’original pour vérifier l’exactitude, les omissions et la terminologie.

**Relecture.** Un contrôle **unilingue** du texte final : grammaire, orthographe, ponctuation, mise en forme.

**LQA (évaluation de la qualité linguistique).** Une notation objective de la traduction, erreur par erreur, avec un rapport. Utile pour contrôler un prestataire ou valider un lot important. Voir [révision et relecture](/fr/services/editing).

## Les options

**Post-édition (MTPE).** Correction humaine d’une traduction automatique, légère ou complète selon l’usage du texte. Voir [MTPE](/fr/services/mtpe).

**PAO (publication assistée par ordinateur).** La remise en page du document traduit, particulièrement importante pour l’arabe, qui s’écrit de droite à gauche.

**Urgence.** Un délai plus court que le rythme habituel du traducteur, qui peut demander une organisation particulière.

## Avant de signer

Vérifiez que le devis précise : les langues, le volume, les étapes de qualité incluses, le format de livraison, le délai et les conditions de confidentialité. Un bon prestataire répond volontiers à vos questions. Pour un devis clair sur votre projet vers l’arabe, [contactez-moi](/fr/contact).`,
    },
    es: {
      title: "Diccionario técnico del árabe para gestores de proyecto y desarrolladores",
      seoTitle: "Localizar software al árabe: RTL, plurales, números y calendario explicados",
      excerpt:
        "RTL, seis formas de plural, cifras arábigas orientales, calendario hégira… Lo que todo gestor de proyecto o desarrollador debe saber antes de localizar una app al árabe.",
      content: `Si eres gestor de proyecto, product manager o desarrollador y te toca lanzar una app o una web en árabe, descubrirás que no basta con «traducir los textos». El árabe tiene particularidades técnicas que conviene conocer **antes** de empezar. Este pequeño diccionario reúne las más importantes.

## RTL (de derecha a izquierda)

El árabe se escribe de derecha a izquierda. Toda la interfaz debe reflejarse: menús, iconos de flecha, barras de progreso, carruseles y la posición de los botones. Lo que no se invierte: los números, los fragmentos en alfabeto latino (como nombres de marca o URLs) y ciertos iconos, como el de reproducir un vídeo.

## Texto bidireccional (bidi)

Cuando una frase árabe incluye palabras en inglés o números, el texto mezcla dos direcciones. Si la interfaz no lo gestiona bien, aparecen signos de puntuación en el lugar equivocado o frases desordenadas. Es uno de los fallos más visibles en apps mal localizadas.

## Plurales

El español tiene dos formas: singular y plural. El árabe distingue hasta **seis categorías** gramaticales en las reglas de software (cero, uno, dos, pocos, muchos y otros). Si tu código solo prevé «1 elemento / X elementos», el árabe mostrará frases incorrectas. Usa bibliotecas que admitan las reglas de plural de cada idioma.

## Género

Los verbos y adjetivos cambian según el género, también en la segunda persona. Un mensaje como «Bienvenido» puede necesitar variantes, o una formulación que evite el problema. Conviene decidirlo con el traductor desde el principio.

## Números y cifras

En muchos países árabes se usan las cifras habituales (0-9), pero en otros, como en parte de Oriente Medio, son frecuentes las **cifras arábigas orientales** (٠١٢٣…). Decide cuáles usará tu producto en cada mercado y prueba fechas, precios y teléfonos.

## Calendario y formatos

Además del calendario gregoriano, en algunos contextos se usa el **calendario hégira**. Revisa también el formato de fechas, monedas y el primer día de la semana, que en varios países no es el lunes.

## Tipografía

Elige fuentes con buen soporte para árabe y prueba los tamaños: la escritura árabe necesita más altura de línea y no admite cursiva ni separación de letras como el alfabeto latino.

## i18n y cadenas

La **internacionalización (i18n)** consiste en preparar el código para cualquier idioma: textos fuera del código, en archivos de **cadenas** (JSON, XLIFF…), con espacio para textos más largos y sin concatenar frases. Una buena i18n abarata enormemente la localización.

## Pseudolocalización

Una prueba previa que sustituye los textos por versiones simuladas para detectar textos cortados, cadenas sin traducir o problemas RTL antes de traducir nada.

## MTPE y LQA

**MTPE**: traducción automática corregida por un lingüista. **LQA**: evaluación objetiva de la calidad con puntuación e informe. Ambas son útiles en productos con muchas actualizaciones. Consulta [localización de SaaS](/es/services/saas-localization).

¿Preparas el lanzamiento de tu producto en árabe? [Escríbeme](/es/contact) y revisamos juntos qué hay que tener en cuenta.`,
    },
  },
};

/* ------------------------------------------------------------------ */
/* 3. Results as a Service vs SaaS (scheduled for 4 November 2026)     */
/* ------------------------------------------------------------------ */

const raasVsSaas: CodePost = {
  slug: "results-as-a-service-vs-saas",
  category: "Localization",
  cover: "/images/blog/raas-vs-saas.jpg",
  publishedAt: "2026-11-04T08:00:00Z",
  updatedAt: "2026-11-04T08:00:00Z",
  text: {
    en: {
      publishedAt: "2026-11-04T08:00:00Z",
      title: "Results as a Service (RaaS) vs SaaS: what it means for localization",
      seoTitle: "Results as a Service (RaaS) vs SaaS: What It Means for Localization",
      excerpt:
        "SaaS sells you a tool; Results as a Service sells you the outcome. Here is what the shift means, why AI is driving it, and how to buy Arabic localization as a result.",
      content: `For twenty years, software has mostly been sold as **SaaS**: you pay a monthly subscription and your team uses the tool. A newer model is gaining ground, especially with AI: **Results as a Service (RaaS)**, where you pay for the outcome itself, not for the tool or the hours behind it.

## What is SaaS?

Software as a Service gives you **access to a tool**: a CRM, a design app, an SEO platform or a translation management system. The provider maintains the software; you do the work with it. You pay per user or per month, whether or not you get the result you wanted.

## What is Results as a Service?

With RaaS, the provider delivers a **finished, measurable outcome**. Behind the scenes they may use software, AI and human experts, but you don’t manage any of it. You agree on the result, such as "our app live in Arabic" or "every support ticket answered within an hour", and the provider is responsible for getting there.

## SaaS vs RaaS at a glance

| | SaaS | RaaS |
|---|---|---|
| What you buy | Access to a tool | A finished outcome |
| Who does the work | Your team | The provider |
| What you pay for | Seats or subscriptions | Results or clearly scoped deliverables |
| Who carries the risk | Mostly you | Shared, or mostly the provider |
| What you need in-house | People to run the tool | Someone to define and approve the result |

## Why RaaS is growing now

AI has made much routine work faster and cheaper to produce. Companies are asking a simple question: **why pay for software my team has to operate, when I could pay for the result?** At the same time, many teams are short on time and specialist skills. A provider who combines tools, AI and expertise can often deliver the outcome more reliably than a company learning a new platform from scratch.

## What it means for localization

Localization has long been sold as tools (translation platforms, machine translation) or as time (per hour, per word). But what a software company actually needs is a **result**: an Arabic product that users can rely on.

Thinking in results changes the conversation:

- **Instead of** "We bought a translation platform and machine translation," **ask** "Is our Arabic release ready to ship?"
- **Instead of** "How many hours did the reviewer spend?", **ask** "What is the quality score, and which issues were fixed?"
- **Instead of** "Who manages the translators?", **ask** "Who is accountable for Arabic being ready in every release?"

## How to buy localization as a result

1. **Define the outcome.** For example: interface, help center and app store listing in Arabic, ready for the next release.
2. **Agree on how it will be measured.** In-context review completed, right-to-left issues reported, an LQA score above an agreed threshold.
3. **Fix the scope and timing.** Which content, which release, which deadline.
4. **Keep it continuous.** For SaaS products, results matter in every release, not only at launch.

## What to watch out for

RaaS works best when results are **measurable and within the provider’s control**. A translator can guarantee an accurate, consistent, launch-ready Arabic product; nobody can honestly guarantee how many users it will win. Be wary of promises about outcomes no one controls, and make sure the scope is clear before work starts.

## How I work

This is how I approach [SaaS localization](/en/services/saas-localization): we agree on the result you need, and I take care of everything required to deliver it, from translation and review to in-context checks and quality reporting. If you are planning an Arabic launch, [tell me about your product](/en/contact) and I’ll suggest a clear, results-based scope.`,
    },
    ar: {
      publishedAt: "2026-11-05T08:00:00Z",
      title: "ادفع مقابل النتيجة لا الأداة: ما الذي تعنيه «النتائج كخدمة (RaaS)» للشركات العربية؟",
      seoTitle: "النتائج كخدمة (RaaS) للشركات العربية: ادفع مقابل النتيجة لا الأداة",
      excerpt:
        "اشتراكات كثيرة وأدوات ذكاء اصطناعي لا تُحسن العربية ونتائج لا تتحقق؟ إليك كيف يساعد نموذج «النتائج كخدمة (RaaS)» الشركات العربية على شراء ما تحتاجه فعلًا.",
      content: `تشترك كثير من الشركات العربية اليوم في عشرات الأدوات الرقمية: منصات للتسويق، وأدوات لكتابة المحتوى بالذكاء الاصطناعي، وبرامج لإدارة وسائل التواصل، وأنظمة للترجمة الآلية. ومع نهاية الشهر تصل الفواتير، لكن السؤال يبقى: **هل تحققت النتيجة؟**

هنا يبرز نموذج **النتائج كخدمة (Results as a Service أو RaaS)**: بدل أن تشتري أداة وتتولى تشغيلها بنفسك، تتفق مع مزوّد على نتيجة واضحة، ويتولى هو كل ما يلزم لتحقيقها.

## الفرق ببساطة

- في **البرمجيات كخدمة (SaaS)** تدفع اشتراكًا مقابل أداة، وفريقك هو من يعمل بها.
- في **النتائج كخدمة (RaaS)** تدفع مقابل نتيجة محددة، والمزوّد هو من يعمل.

مثال: بدل الاشتراك في منصة لتحسين محركات البحث (SEO) وتكليف موظف بتعلّمها، تتفق مع مختص على أن يظهر موقعك في نتائج البحث عن الكلمات التي يستخدمها عملاؤك، مع تقرير شهري يوضح ما تحقق.

## لماذا يهمّ هذا الشركات العربية بالذات؟

**أولًا: الأدوات أضعف في العربية.** معظم أدوات الكتابة والترجمة بالذكاء الاصطناعي (AI) صُمّمت أولًا للإنجليزية، ولا تزال تخطئ في العربية: في القواعد، والتذكير والتأنيث، والمصطلحات، والنبرة المناسبة لكل سوق. فالأداة وحدها لا تكفي، ويبقى الفرق في الخبرة البشرية التي تراجع وتصحّح وتكيّف.

**ثانيًا: العربية ليست سوقًا واحدة.** ما يناسب جمهورًا في الرياض قد لا يناسب جمهورًا في القاهرة أو الدار البيضاء. والنتيجة الجيدة تحتاج إلى من يعرف الفرق بين الفصحى واللهجات، ومتى يستخدم كلًا منها.

**ثالثًا: الفرق الصغيرة لا تملك وقتًا لإدارة الأدوات.** في الشركات الناشئة والمتوسطة، يقوم الشخص الواحد بأكثر من دور، وتعلّم أداة جديدة كل شهر عبء لا يحتاجه.

## أين يناسبك هذا النموذج؟

- **ترجمة موقعك أو تطبيقك:** النتيجة نسخة عربية أو إنجليزية جاهزة للنشر، مراجَعة ومدقّقة، لا «ملف مترجَم آليًا» عليك تصحيحه.
- **المحتوى والتسويق الرقمي:** النتيجة محتوى منشور بانتظام، وظهور أفضل في محركات البحث، وتقارير بالأرقام.
- **الظهور في البحث بالذكاء الاصطناعي (AI):** النتيجة أن تُعرض شركتك بمعلومات صحيحة ومتّسقة حين يسأل العملاء أدوات الذكاء الاصطناعي عن مجالك.

## كيف تتفق على نتيجة واضحة؟

1. **صِف النتيجة بجملة واحدة:** «موقعنا متاح بالعربية والإنجليزية وجاهز للإطلاق في نهاية الشهر».
2. **اتفقا على طريقة القياس:** مراجعة كاملة، أو تقرير جودة، أو ترتيب كلمات محددة، أو عدد منشورات.
3. **حدّدا النطاق والموعد:** أي صفحات، وأي محتوى، ومتى.
4. **اطلب تقريرًا في النهاية:** ما الذي أُنجز، وما الذي تغيّر، وما الخطوة التالية.

## انتبه لهذه النقطة

لا تقبل وعودًا بنتائج لا يتحكم فيها أحد. يستطيع المختص أن يضمن جودة الترجمة ودقتها وجاهزيتها، وأن يحسّن ظهورك بخطوات مدروسة، لكن لا أحد يستطيع بصدق أن يضمن عدد العملاء الذين ستكسبهم أو ترتيبك الأول في Google. النتيجة الجيدة هي النتيجة الواضحة والقابلة للقياس.

## كيف أعمل

أطبّق هذا النهج في [توطين منتجات SaaS](/ar/services/saas-localization) وفي [التسويق الرقمي والظهور في الذكاء الاصطناعي (AI)](/ar/services/digital-marketing): نتفق أولًا على النتيجة، ثم أتولى العمل كله حتى أسلّمها جاهزة. وإن أردت أن نحدد معًا النتيجة التي تحتاجها شركتك، [فتواصل معي](/ar/contact).`,
    },
    fr: {
      publishedAt: "2026-11-06T08:00:00Z",
      title: "Obligation de moyens ou de résultat ? Le Results as a Service appliqué à la localisation",
      seoTitle: "Results as a Service (RaaS) : passer à l’obligation de résultat en localisation",
      excerpt:
        "Licences SaaS, heures facturées… ou résultat garanti ? Le RaaS remet au goût du jour une distinction bien connue en France : l’obligation de moyens et l’obligation de résultat.",
      content: `En droit français, on distingue depuis longtemps deux façons de s’engager. Avec une **obligation de moyens**, le prestataire promet de tout mettre en œuvre pour atteindre un objectif, sans le garantir. Avec une **obligation de résultat**, il s’engage sur le résultat lui-même.

Cette distinction éclaire parfaitement un modèle qui monte dans l’économie numérique : le **Results as a Service (RaaS)**.

## Du SaaS au RaaS

Le **SaaS** (Software as a Service) vous vend l’accès à un outil : une licence par utilisateur, un abonnement mensuel. Le fournisseur s’engage à ce que le logiciel fonctionne, pas à ce que vous obteniez quoi que ce soit avec. C’est vous qui faites le travail.

Le **RaaS** vous vend un résultat défini à l’avance. Le prestataire mobilise ses outils, l’IA et son expertise, mais vous n’achetez ni le logiciel ni les heures : vous achetez le livrable final.

Autrement dit, on passe d’une logique proche de l’obligation de moyens à une logique proche de l’**obligation de résultat**.

## Pourquoi maintenant ?

L’IA a fait baisser le coût de nombreuses tâches répétitives. Les directions financières et les acheteurs se demandent donc, à juste titre, pourquoi multiplier les licences et les heures quand ce qu’ils veulent, c’est un résultat. Le RaaS répond à cette attente : un périmètre clair, un livrable vérifiable, un engagement lisible.

## Le cas de la localisation vers l’arabe

Pour une entreprise française qui se développe au Maghreb, au Moyen-Orient ou dans le Golfe, la localisation en arabe est souvent achetée de deux façons :

- **en outils** : une plateforme de traduction, de la traduction automatique, puis une équipe interne qui « corrige » ;
- **en temps** : un tarif horaire ou au mot, sans engagement clair sur l’état final du texte.

Dans les deux cas, personne ne s’engage vraiment sur ce qui compte : **un produit arabe juste, cohérent et prêt à être publié**. Or c’est précisément là que l’arabe pose des difficultés spécifiques : écriture de droite à gauche, choix entre arabe standard et dialectes, terminologie et ton adaptés à chaque marché.

## À quoi ressemble un engagement de résultat en localisation ?

Un résultat se définit par des critères vérifiables :

- **le périmètre** : quelles interfaces, quelles pages, quels documents ;
- **l’état attendu** : traduit, révisé, vérifié en contexte, prêt à déployer ;
- **la mesure de la qualité** : une note LQA selon un référentiel comme MQM, avec un seuil convenu ;
- **le calendrier** : pour quelle version, pour quelle date.

## Les limites à garder en tête

Une obligation de résultat n’a de sens que sur ce que le prestataire maîtrise. Un traducteur peut s’engager sur l’exactitude, la cohérence et la conformité d’un livrable ; il ne peut pas s’engager sur le chiffre d’affaires que votre produit réalisera en Arabie saoudite. Méfiez-vous des promesses qui dépassent ce cadre.

## Mon approche

C’est dans cet esprit que je travaille en [localisation SaaS](/fr/services/saas-localization) et en [révision et LQA](/fr/services/editing) : nous définissons ensemble le résultat attendu et la façon de le mesurer, puis je prends en charge tout le travail nécessaire pour le livrer. Pour définir le vôtre, [écrivez-moi](/fr/contact).`,
    },
    es: {
      publishedAt: "2026-11-07T08:00:00Z",
      title: "Pago por resultados: guía de Results as a Service para entrar en el mercado árabe",
      seoTitle: "Results as a Service (RaaS): pago por resultados para entrar en el mercado árabe",
      excerpt:
        "Si tu startup quiere vender en el mundo árabe con un equipo pequeño, pagar por herramientas no basta. Así funciona Results as a Service y cómo aplicarlo paso a paso.",
      content: `Si diriges una startup o una pyme en España o Latinoamérica y quieres vender en el mundo árabe, seguramente ya lo has notado: hay herramientas para todo, pero **nadie en tu equipo habla árabe** ni tiene tiempo de aprender a usarlas bien.

Aquí es donde encaja **Results as a Service (RaaS)**, una idea que el marketing en español conoce bien con otro nombre: el **pago por resultados**.

## La diferencia en una frase

- Con el **SaaS**, pagas una suscripción por una herramienta y tu equipo hace el trabajo.
- Con el **RaaS**, acuerdas un resultado concreto y el proveedor se encarga de conseguirlo.

No compras horas ni licencias: compras el resultado terminado.

## Por qué tiene sentido para entrar en mercados árabes

**El idioma es la mayor barrera.** El árabe se escribe de derecha a izquierda, tiene una variedad estándar y muchos dialectos, y las herramientas de traducción automática todavía cometen errores que un cliente árabe detecta enseguida. Sin un especialista, la herramienta no basta.

**Los equipos pequeños no pueden con todo.** En una startup, la misma persona lleva producto, marketing y ventas. Gestionar traductores, plataformas y revisiones en un idioma que no lee es tiempo que no tiene.

**Lo que cuenta es estar listo.** Para lanzar en Emiratos, Arabia Saudí o Marruecos necesitas una web, una app o un catálogo que funcionen en árabe desde el primer día.

## Ejemplos de resultados que puedes contratar

- **Web lista en árabe:** páginas traducidas, revisadas y comprobadas en diseño de derecha a izquierda.
- **App o SaaS en árabe en cada versión:** las cadenas nuevas se localizan en cada sprint, sin retrasos.
- **Catálogo o ficha de producto para un marketplace:** textos adaptados al público del Golfo o del Magreb.
- **Visibilidad en búsquedas:** contenido optimizado para que tus clientes árabes te encuentren en Google y en las respuestas de la IA.

## Cómo contratar por resultados, paso a paso

1. **Escribe el resultado en una frase.** «Nuestra tienda online disponible en árabe y lista para recibir pedidos el día 30».
2. **Elige cómo medirlo.** Revisión completa, informe de calidad (LQA), páginas publicadas, palabras clave posicionadas.
3. **Cierra el alcance.** Qué contenido entra, qué no, y para cuándo.
4. **Pide un informe final.** Qué se ha hecho, qué problemas se han encontrado y qué conviene hacer después.

## Una advertencia honesta

El pago por resultados funciona cuando el resultado depende del proveedor. Un traductor puede garantizar que tu web en árabe esté bien escrita, sea coherente y esté lista para publicar. Nadie puede garantizar honestamente cuántas ventas harás en Dubái. Desconfía de quien lo prometa.

## Cómo trabajo yo

Así trabajo en la [localización de SaaS](/es/services/saas-localization) y en el [marketing digital y la visibilidad en IA](/es/services/digital-marketing): primero acordamos el resultado y cómo medirlo, y después me encargo de todo hasta entregarlo listo. Si estás preparando tu entrada en el mercado árabe, [cuéntame tu proyecto](/es/contact).`,
    },
  },
};

/* ------------------------------------------------------------------ */
/* 4. AI search visibility — a different article per language,        */
/*    published on different days (ar 2 Nov, fr 3 Nov, es 4 Nov,      */
/*    en 8 Nov)                                                        */
/* ------------------------------------------------------------------ */

const aiSearchVisibility: CodePost = {
  slug: "ai-search-visibility",
  category: "AI & data",
  cover: "/images/blog/ai-search-visibility.jpg",
  publishedAt: "2026-11-02T08:00:00Z",
  updatedAt: "2026-11-02T08:00:00Z",
  text: {
    en: {
      publishedAt: "2026-11-08T08:00:00Z",
      title: "How to get your business cited in AI answers: SEO, AEO and GEO explained",
      seoTitle: "How to Get Cited in AI Answers: SEO, AEO and GEO Explained",
      excerpt:
        "More buyers now ask AI assistants instead of scrolling search results. Here is how SEO, AEO and GEO work together, and seven practical steps to make your business the source AI quotes.",
      content: `A growing share of buyers no longer scroll through ten blue links. They ask an AI assistant a full question, such as "Which Arabic translator should I hire for my SaaS?", and read a single generated answer. That answer usually names a few businesses and cites a few sources. The question for every company is simple: **will you be one of them?**

## Three layers of visibility

- **SEO (search engine optimization)** gets your pages ranked in Google and Bing. It is still the foundation: AI tools often build their answers from pages that already rank well.
- **AEO (answer engine optimization)** shapes your content so it can be lifted directly as an answer: clear questions, short direct answers, and well-structured pages.
- **GEO (generative engine optimization)** makes your business easy for AI systems to understand, trust and cite when they generate a response.

You do not choose one. Each layer builds on the one below it.

## What AI tools look for

AI systems are trying to give a confident, correct answer. They favour sources that are:

- **Clear:** they say exactly who you are, what you do and for whom.
- **Consistent:** the same name, services and facts appear on your website and on other trusted sites.
- **Specific:** they answer real questions with concrete details, not vague marketing claims.
- **Credible:** they show experience, qualifications and independent reviews.

## Seven practical steps

1. **Describe your business in one plain sentence** on your homepage, and use the same wording everywhere.
2. **Keep your name and facts identical** across your website, LinkedIn, directories and review platforms.
3. **Add a real FAQ** to your key pages, answering the questions clients actually ask, in one or two sentences each.
4. **Use structured data (schema)** so machines can read your business, services, people and FAQs without guessing.
5. **Write specific pages** for each service and audience instead of one general page.
6. **Collect independent reviews** on trusted platforms, because AI tools weigh what others say about you.
7. **Publish useful guides** in your area of expertise, so you become the source worth citing.

## Measuring progress

There is no single ranking report for AI answers yet. Track a mix of signals: rankings for your main keywords, traffic from AI tools in your analytics, how often your brand is mentioned, and how AI assistants describe you when you ask them about your field.

## A note for multilingual businesses

AI visibility is decided language by language. A business that is well described in English may be invisible when the same question is asked in Arabic, French or Spanish. Each market needs its own clear, natively written content.

That is where my background helps: I combine [digital marketing and AI visibility](/en/services/digital-marketing) with translation and localization into Arabic. If you want to know how AI tools describe your business today, [get in touch](/en/contact) for an audit.`,
    },
    ar: {
      publishedAt: "2026-11-02T08:00:00Z",
      title: "لماذا قد يتجاهلك الذكاء الاصطناعي (AI) حين يسأل العملاء بالعربية؟",
      seoTitle: "كيف تظهر شركتك في إجابات الذكاء الاصطناعي (AI) بالعربية؟",
      excerpt:
        "يسأل العملاء اليوم أدوات الذكاء الاصطناعي (AI) بالعربية عن الشركات والخدمات. لكن المحتوى العربي الجيد على الإنترنت قليل، وهذه فرصة لمن يبادر أولًا.",
      content: `جرّب أن تسأل أداة ذكاء اصطناعي (AI) بالعربية: «ما أفضل شركة لترجمة المواقع في الرياض؟» أو «من يقدّم خدمات تسويق رقمي للشركات الناشئة في عمّان؟». ستلاحظ أن الإجابة تذكر أسماء قليلة، وتستشهد بمصادر محدودة، وأحيانًا تقدّم معلومات قديمة أو غير دقيقة.

السبب بسيط: **المحتوى العربي الجيد والموثوق على الإنترنت ما زال قليلًا** مقارنة بالإنجليزية، وأدوات الذكاء الاصطناعي (AI) لا تستطيع أن تستشهد بما لم يُكتب.

## الخبر الجيد: الفرصة ما زالت مفتوحة

في الإنجليزية، تتنافس آلاف الشركات على أن تكون المصدر الذي يستشهد به الذكاء الاصطناعي (AI). أما في العربية، فما زال المجال أوسع بكثير. والشركة التي تنشر اليوم محتوى عربيًا واضحًا ودقيقًا ومنظّمًا، تزيد فرصتها في أن تكون من المصادر التي تعتمد عليها هذه الأدوات حين يسأل العملاء بالعربية.

## ثلاث طبقات للظهور

- **تحسين محركات البحث (SEO):** أن تظهر صفحاتك في نتائج Google وBing.
- **تحسين محركات الإجابة (AEO):** أن يُكتب محتواك بصيغة أسئلة وأجوبة واضحة يمكن عرضها إجابةً مباشرة.
- **تحسين محركات البحث التوليدية (GEO):** أن تكون شركتك سهلة الفهم والاستشهاد بها لدى أدوات الذكاء الاصطناعي (AI) عند توليد الإجابات.

## أخطاء شائعة في المحتوى العربي

- **الاعتماد على الترجمة الآلية (MT) دون مراجعة:** النص الركيك يفقد ثقة القارئ والآلة معًا.
- **اسم الشركة يُكتب بأكثر من طريقة:** مرة بالعربية ومرة بالإنجليزية ومرة بتهجئة مختلفة، فلا تعرف الأدوات أنها الشركة نفسها.
- **صفحات عامة بلا تفاصيل:** «نقدّم أفضل الخدمات» لا تجيب عن أي سؤال حقيقي.
- **غياب الأسئلة الشائعة بالعربية:** مع أنها أسهل طريقة لتقديم إجابات جاهزة.

## خطوات عملية للبدء

1. **اكتب تعريفًا واضحًا لشركتك بجملة واحدة** بالعربية والإنجليزية، واستخدمه في كل مكان.
2. **وحّد اسم شركتك وبياناتها** في موقعك وملفاتك على LinkedIn وGoogle والأدلة المحلية.
3. **أنشئ صفحة لكل خدمة** تشرح لمن هي، وكيف تعمل، وماذا يستلم العميل.
4. **أضف أسئلة شائعة حقيقية بالعربية** بإجابات قصيرة ومباشرة.
5. **استخدم البيانات المنظّمة (Schema)** لتعريف شركتك وخدماتك بلغة تفهمها الآلات.
6. **اكتب بعربية سليمة وطبيعية،** بالفصحى أو بنبرة محلية حسب جمهورك، لا بترجمة حرفية.
7. **شجّع العملاء على كتابة تقييمات** على المنصات الموثوقة.

## كيف تعرف أنك تتقدّم؟

اسأل أدوات الذكاء الاصطناعي (AI) بالعربية عن مجالك كل شهر، ولاحظ هل تُذكر شركتك وكيف تُوصف. وتابع في أدوات التحليل الزيارات القادمة من هذه الأدوات، وترتيب كلماتك المفتاحية الأساسية.

## كيف أساعدك

أجمع بين [التسويق الرقمي والظهور في الذكاء الاصطناعي (AI)](/ar/services/digital-marketing) وخبرة الكتابة والترجمة إلى العربية منذ عام 2014، لأكتب لك محتوى عربيًا يفهمه القارئ وتستشهد به الأدوات. وإن أردت أن تعرف كيف تصف أدوات الذكاء الاصطناعي (AI) شركتك اليوم، [فتواصل معي](/ar/contact) لإجراء تقييم.`,
    },
    fr: {
      publishedAt: "2026-11-03T08:00:00Z",
      title: "Être cité par l’IA sur les marchés arabophones : SEO, AEO et GEO pour les entreprises françaises",
      seoTitle: "Visibilité IA sur les marchés arabophones : SEO, AEO et GEO",
      excerpt:
        "Votre entreprise est bien référencée en France, mais l’est-elle quand un prospect pose la question en arabe à un assistant IA ? Les clés d’une visibilité multilingue dans la recherche générative.",
      content: `Beaucoup d’entreprises françaises soignent leur référencement en français, parfois en anglais. Mais lorsqu’un prospect à Casablanca, Dubaï ou Riyad pose sa question **en arabe** à un assistant IA, la réponse s’appuie sur d’autres sources. Et votre entreprise n’y figure souvent pas.

## La visibilité IA se joue langue par langue

Les assistants IA construisent leurs réponses à partir des contenus disponibles dans la langue de la question. Une excellente page en français ne garantit rien pour une requête en arabe. Si votre site arabe est absent, traduit automatiquement ou très incomplet, d’autres acteurs occuperont la place.

## SEO, AEO, GEO : de quoi parle-t-on ?

- **SEO** (référencement naturel) : être bien positionné dans Google et Bing.
- **AEO** (optimisation pour les moteurs de réponse) : structurer vos contenus en questions-réponses claires, reprises telles quelles comme réponse.
- **GEO** (référencement génératif) : rendre votre entreprise facile à comprendre, à vérifier et à citer par les outils d’IA.

Ces trois niveaux s’additionnent, et doivent être travaillés **dans chaque langue cible**.

## Les erreurs fréquentes des sites multilingues

- **Une version arabe traduite automatiquement** : les erreurs de grammaire, de terminologie et de ton sautent aux yeux d’un lecteur arabophone et nuisent à la crédibilité.
- **Des informations différentes d’une langue à l’autre** : nom de marque, services ou coordonnées incohérents brouillent l’identité de l’entreprise.
- **Une architecture mal balisée** : sans balises hreflang ni pages distinctes par langue, les moteurs ne savent pas quelle version afficher.
- **L’absence de FAQ en arabe** : précisément le format que les moteurs de réponse aiment reprendre.

## Une méthode en cinq étapes

1. **Définissez vos marchés et vos requêtes** : quelles questions vos clients posent-ils, en arabe standard ou en dialecte ?
2. **Créez des pages arabes rédigées pour ce public,** et non calquées sur la version française.
3. **Harmonisez votre identité** : même nom, mêmes services, mêmes faits sur le site, LinkedIn, les annuaires et les plateformes d’avis.
4. **Balisez correctement** : hreflang, données structurées (schema) pour l’entreprise, les services et la FAQ.
5. **Mesurez** : positions, trafic issu des assistants IA, et manière dont ces outils décrivent votre entreprise en arabe.

## Mon accompagnement

Traducteur vers l’arabe depuis 2014 et spécialisé en [marketing digital et visibilité IA](/fr/services/digital-marketing), j’aide les entreprises francophones à exister dans la recherche, classique comme générative, sur les marchés arabophones. Pour un audit de votre visibilité en arabe, [contactez-moi](/fr/contact).`,
    },
    es: {
      publishedAt: "2026-11-04T16:00:00Z",
      title: "Visibilidad en la IA: checklist para pymes que quieren vender en el mundo árabe",
      seoTitle: "Visibilidad en la IA para pymes: checklist SEO, AEO y GEO para el mercado árabe",
      excerpt:
        "Tus clientes de Emiratos o Marruecos ya preguntan a asistentes de IA antes de comprar. Esta checklist te ayuda a que tu pyme aparezca en esas respuestas.",
      content: `Si tienes una pyme, un hotel, una tienda online o una consultora en España o Latinoamérica y quieres clientes en el mundo árabe, hay un cambio que conviene entender: **cada vez más compradores preguntan a un asistente de IA antes de buscar en Google**. Y la respuesta suele mencionar solo a unas pocas empresas.

## Tres siglas que conviene conocer

- **SEO:** posicionarte en Google y Bing con las palabras que usan tus clientes.
- **AEO:** escribir contenido en formato de pregunta y respuesta para que se muestre como respuesta directa.
- **GEO:** que las herramientas de IA entiendan bien tu empresa y la citen como fuente.

No hace falta ser una gran empresa para trabajarlas. Hace falta orden y constancia.

## Checklist para tu pyme

**Tu identidad**

- [ ] Una frase clara que diga qué haces, para quién y dónde, en la portada de tu web.
- [ ] El mismo nombre, dirección y servicios en tu web, Google, LinkedIn y directorios.
- [ ] Reseñas reales en plataformas de confianza, también de clientes internacionales.

**Tu contenido**

- [ ] Una página por servicio, con detalles concretos y no solo frases comerciales.
- [ ] Preguntas frecuentes reales, con respuestas de una o dos frases.
- [ ] Una versión de la web en **árabe escrita por un profesional**, no traducida automáticamente.

**La parte técnica**

- [ ] Datos estructurados (schema) para tu empresa, tus servicios y tus preguntas frecuentes.
- [ ] Etiquetas de idioma (hreflang) para que cada versión llegue a su público.
- [ ] Una web rápida y que funcione bien en móvil.

**El seguimiento**

- [ ] Preguntar cada mes a los asistentes de IA por tu sector, en árabe y en español, y anotar si apareces.
- [ ] Revisar en Analytics las visitas que llegan desde herramientas de IA.

## El error más común: el árabe automático

Muchas pymes activan un plugin de traducción automática y dan por hecho que ya tienen web en árabe. El resultado suele ser un texto con errores que un lector árabe detecta en segundos, y que tampoco ayuda a que la IA te recomiende. Para el mercado árabe, la calidad del idioma es parte de tu visibilidad.

## Cómo te puedo ayudar

Trabajo el [marketing digital y la visibilidad en IA](/es/services/digital-marketing) junto con la traducción al árabe desde 2014, así que puedo ocuparme de las dos partes: un árabe natural y una web preparada para aparecer en buscadores e IA. Si quieres saber cómo te ven hoy los asistentes de IA, [escríbeme](/es/contact) y lo revisamos.`,
    },
  },
};

export const codePosts: CodePost[] = [msaVsDialects, glossary, raasVsSaas, aiSearchVisibility];
