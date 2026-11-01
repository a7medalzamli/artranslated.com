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
  text: Record<Locale, { title: string; excerpt: string; seoTitle: string; content: string }>;
};

/* ------------------------------------------------------------------ */
/* 1. Modern Standard Arabic vs dialects                               */
/* ------------------------------------------------------------------ */

const msaVsDialects: CodePost = {
  slug: "which-arabic-msa-vs-dialects",
  category: "Localization",
  cover: "/images/blog/which-arabic.jpg",
  publishedAt: "2026-11-01T09:00:00Z",
  updatedAt: "2026-11-01T09:00:00Z",
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
      title: "أي عربية تستخدم؟ الفصحى المعاصرة أم اللهجات",
      seoTitle: "الفصحى أم اللهجات العربية: أي عربية تناسب شركتك؟",
      excerpt:
        "الفصحى المعاصرة أم الخليجية أم المصرية أم الشامية أم المغاربية؟ دليل عملي لاختيار العربية المناسبة لمستنداتك وموقعك وتطبيقك وتسويقك.",
      content: `يتحدث العربية أكثر من 400 مليون شخص في أكثر من 20 دولة، لكنها ليست تنوعًا واحدًا. فقبل أن تترجم أي شيء، عليك أن تقرر **أي عربية** سيقرؤها جمهورك. ويعتمد الاختيار الصحيح على نوع ما تنشره ومن سيقرؤه.

## العربية الفصحى المعاصرة

الفصحى المعاصرة هي اللغة المكتوبة المشتركة في العالم العربي. تُستخدم في الصحف والكتب والمستندات الرسمية والعقود والتعليم ونشرات الأخبار ومعظم المواقع الإلكترونية، ويفهمها كل متعلّم ناطق بالعربية من المغرب إلى عُمان.

**استخدم الفصحى في:**

- العقود والسياسات والمستندات القانونية والمالية
- الوثائق التقنية والأدلة ومراكز المساعدة
- واجهات البرامج والتطبيقات التي تخدم عدة دول
- مواقع الشركات الموجّهة إلى العالم العربي كله
- المحتوى الطبي والتعليمي

ولا يعني ذلك أن تبدو الفصحى جامدة؛ فالمترجم الجيد يكتب فصحى واضحة ومعاصرة بنبرة تناسب علامتك، من الرسمية إلى الودّية.

## مجموعات اللهجات الرئيسية

يتحدث الناس لهجاتهم المحلية في حياتهم اليومية، وأبرز مجموعاتها:

- **الخليجية:** السعودية والإمارات والكويت وقطر والبحرين وعُمان
- **المصرية:** مفهومة على نطاق واسع في المنطقة بفضل السينما والدراما المصرية
- **الشامية:** فلسطين والأردن ولبنان وسوريا
- **العراقية:** العراق
- **المغاربية (الدارجة):** المغرب والجزائر وتونس وليبيا، وهي الأبعد عن الفصحى

اللهجات منطوقة في الأساس، لذا نادرًا ما تُستخدم في الكتابة الرسمية، لكنها مناسبة حين تريد أن تبدو قريبًا وشخصيًا من سوق بعينها.

## أيهما تختار؟

| المحتوى | العربية المقترحة |
|---|---|
| العقود والسياسات والتقارير المالية | فصحى رسمية |
| الأدلة ومراكز المساعدة والوثائق | فصحى واضحة |
| واجهة تطبيق أو منصة SaaS لعدة دول | فصحى بنبرة بسيطة وودّية |
| موقع للعالم العربي كله | الفصحى |
| تسويق لدولة واحدة | فصحى بلمسة محلية، أو لهجة تلك الدولة |
| وسائل التواصل والإعلانات لسوق واحدة | اللهجة المحلية غالبًا الأفضل أداءً |
| فيديو لجمهور واسع | الفصحى، أو المصرية للمحتوى غير الرسمي |
| خدمة العملاء في دولة واحدة | فصحى مبسّطة مع كلمات محلية حيث يكون ذلك طبيعيًا |

## قاعدة عملية

إذا كان جمهورك في **أكثر من دولة**، أو كان المحتوى **رسميًا أو تقنيًا أو طويل الأمد**، فاستخدم الفصحى. وإذا كان المحتوى **قصيرًا وعاطفيًا وموجّهًا إلى دولة واحدة**، كحملة على وسائل التواصل في السعودية، ففكّر في اللهجة المحلية أو فصحى بنكهة محلية.

وتجمع علامات تجارية كثيرة بين الاثنين: الفصحى للموقع والمنتج والوثائق، ونبرة محلية خفيفة لوسائل التواصل والحملات، فتبقى العلامة متّسقة وتبدو طبيعية في كل سوق.

## أخطاء شائعة يجب تجنّبها

- **خلط اللهجات** في نص واحد، ما يربك القارئ
- **استخدام اللهجة في المحتوى الرسمي**، ما قد يبدو غير احترافي
- **كتابة فصحى ثقيلة وقديمة الأسلوب** للتسويق، ما يجعلها بعيدة عن القارئ
- **ترجمة الشعارات حرفيًا** بدل تكييفها عبر [الترجمة الإبداعية](/ar/services/transcreation)

## لست متأكدًا أي عربية تناسب جمهورك؟

اختيار التنوع المناسب جزء من كل مشروع أعمل عليه. إن لم تكن متأكدًا، [أخبرني عن جمهورك وأهدافك](/ar/contact) وسأقترح الخيار الأنسب قبل بدء الترجمة. ويمكنك أيضًا الاطلاع على [خدمة الاستشارات](/ar/services/consulting) التي تتناول هذا القرار في عمليات الإطلاق الكبيرة.`,
    },
    fr: {
      title: "Quel arabe choisir ? L’arabe standard moderne ou les dialectes",
      seoTitle: "Arabe standard ou dialectes : quel arabe pour votre entreprise ?",
      excerpt:
        "Arabe standard moderne, du Golfe, égyptien, levantin ou maghrébin ? Un guide pratique pour choisir le bon arabe pour vos documents, votre site, votre application et votre marketing.",
      content: `L’arabe est parlé par plus de 400 millions de personnes dans plus de 20 pays, mais ce n’est pas une seule variété. Avant de traduire quoi que ce soit, vous devez décider **quel arabe** votre public lira. Le bon choix dépend de ce que vous publiez et de qui le lira.

## L’arabe standard moderne (ASM)

L’arabe standard moderne, appelé *al-fuṣḥā* en arabe, est la langue écrite commune du monde arabe. On l’utilise dans la presse, les livres, les documents officiels, les contrats, l’enseignement, les journaux télévisés et la plupart des sites web. Tout arabophone instruit le comprend, du Maroc à Oman.

**Utilisez l’ASM pour :**

- Les contrats, politiques, documents juridiques et financiers
- La documentation technique, les manuels et les centres d’aide
- Les interfaces de logiciels et d’applications destinées à plusieurs pays
- Les sites d’entreprise visant l’ensemble du monde arabe
- Les contenus médicaux et éducatifs

L’ASM n’a pas à sonner rigide : un bon traducteur écrit un arabe standard clair et moderne, avec un ton adapté à votre marque, du plus formel au plus convivial.

## Les principaux groupes de dialectes

Au quotidien, on parle son dialecte local. Les principaux groupes sont :

- **Golfe (khaliji) :** Arabie saoudite, Émirats arabes unis, Koweït, Qatar, Bahreïn et Oman
- **Égyptien :** largement compris dans la région grâce au cinéma et aux séries égyptiens
- **Levantin (shami) :** Palestine, Jordanie, Liban et Syrie
- **Irakien :** Irak
- **Maghrébin (darija) :** Maroc, Algérie, Tunisie et Libye, le plus éloigné de l’ASM

Les dialectes sont surtout parlés et rarement utilisés à l’écrit formel. Ils fonctionnent bien quand vous voulez paraître proche d’un marché précis.

## Lequel choisir ?

| Contenu | Arabe recommandé |
|---|---|
| Contrats, politiques, rapports financiers | ASM formel |
| Manuels, centres d’aide, documentation | ASM clair |
| Interface d’application ou de SaaS pour plusieurs pays | ASM au ton simple et convivial |
| Site web pour tout le monde arabe | ASM |
| Marketing pour un seul pays | ASM avec une touche locale, ou le dialecte du pays |
| Réseaux sociaux et publicités pour un seul marché | Le dialecte local est souvent le plus efficace |
| Vidéo pour un large public | ASM, ou égyptien pour un contenu informel |
| Service client dans un seul pays | ASM simple, avec des mots locaux quand c’est naturel |

## Une règle pratique

Si votre public se trouve dans **plusieurs pays**, ou si le contenu est **officiel, technique ou durable**, utilisez l’ASM. Si votre contenu est **court, émotionnel et destiné à un seul pays**, comme une campagne sur les réseaux sociaux en Arabie saoudite, envisagez le dialecte local ou un ASM aux accents locaux.

Beaucoup de marques combinent les deux : l’ASM pour le site, le produit et la documentation, et un ton local léger pour les réseaux sociaux et les campagnes. La marque reste cohérente tout en sonnant naturelle sur chaque marché.

## Erreurs fréquentes à éviter

- **Mélanger les dialectes** dans un même texte, ce qui déroute le lecteur
- **Utiliser un dialecte pour un contenu formel**, ce qui peut paraître peu professionnel
- **Écrire un ASM lourd et vieilli** pour le marketing, ce qui crée de la distance
- **Traduire les slogans mot à mot** au lieu de les adapter par la [transcréation](/fr/services/transcreation)

## Vous hésitez sur l’arabe qui convient à votre public ?

Le choix de la bonne variété fait partie de chaque projet que j’accepte. En cas de doute, [parlez-moi de votre public et de vos objectifs](/fr/contact) et je vous recommanderai la meilleure option avant le début de la traduction. Vous pouvez aussi découvrir mon [service de conseil](/fr/services/consulting), qui couvre cette décision pour les lancements plus importants.`,
    },
    es: {
      title: "¿Qué árabe usar? Árabe estándar moderno o dialectos",
      seoTitle: "Árabe estándar o dialectos: ¿qué árabe necesita tu empresa?",
      excerpt:
        "¿Árabe estándar moderno, del Golfo, egipcio, levantino o magrebí? Una guía práctica para elegir el árabe adecuado para tus documentos, tu web, tu app y tu marketing.",
      content: `El árabe lo hablan más de 400 millones de personas en más de 20 países, pero no es una sola variedad. Antes de traducir nada, tienes que decidir **qué árabe** va a leer tu público. La elección correcta depende de lo que publiques y de quién lo vaya a leer.

## Árabe estándar moderno (AEM)

El árabe estándar moderno, llamado *al-fuṣḥā* en árabe, es la lengua escrita común del mundo árabe. Se usa en la prensa, los libros, los documentos oficiales, los contratos, la educación, los informativos y la mayoría de los sitios web. Cualquier hablante de árabe con estudios lo entiende, de Marruecos a Omán.

**Usa el AEM para:**

- Contratos, políticas, documentos jurídicos y financieros
- Documentación técnica, manuales y centros de ayuda
- Interfaces de software y apps para varios países
- Webs corporativas dirigidas a todo el mundo árabe
- Contenido sanitario y educativo

El AEM no tiene por qué sonar rígido: un buen traductor escribe un árabe estándar claro y moderno, con un tono adecuado a tu marca, de formal a cercano.

## Los principales grupos de dialectos

En el día a día, la gente habla su dialecto local. Los grupos principales son:

- **Del Golfo (jaliyi):** Arabia Saudí, Emiratos Árabes Unidos, Kuwait, Catar, Baréin y Omán
- **Egipcio:** muy entendido en toda la región gracias al cine y las series egipcias
- **Levantino (shami):** Palestina, Jordania, Líbano y Siria
- **Iraquí:** Irak
- **Magrebí (dariya):** Marruecos, Argelia, Túnez y Libia, el más alejado del AEM

Los dialectos son sobre todo orales, así que rara vez se usan en la escritura formal. Funcionan bien cuando quieres sonar cercano a un mercado concreto.

## ¿Cuál elegir?

| Contenido | Árabe recomendado |
|---|---|
| Contratos, políticas, informes financieros | AEM formal |
| Manuales, centros de ayuda, documentación | AEM claro |
| Interfaz de app o SaaS para varios países | AEM con un tono sencillo y cercano |
| Web para todo el mundo árabe | AEM |
| Marketing para un solo país | AEM con un toque local, o el dialecto de ese país |
| Redes sociales y anuncios para un solo mercado | El dialecto local suele funcionar mejor |
| Vídeo para un público amplio | AEM, o egipcio para contenido informal |
| Atención al cliente en un solo país | AEM sencillo, con palabras locales cuando resulte natural |

## Una regla práctica

Si tu público está en **más de un país**, o el contenido es **oficial, técnico o duradero**, usa el AEM. Si tu contenido es **breve, emotivo y dirigido a un solo país**, como una campaña en redes sociales en Arabia Saudí, plantéate el dialecto local o un AEM con sabor local.

Muchas marcas combinan ambos: AEM para la web, el producto y la documentación, y un tono local ligero para redes sociales y campañas. Así la marca se mantiene coherente y suena natural en cada mercado.

## Errores frecuentes que debes evitar

- **Mezclar dialectos** en un mismo texto, lo que confunde al lector
- **Usar un dialecto en contenido formal**, lo que puede parecer poco profesional
- **Escribir un AEM pesado y anticuado** para marketing, lo que resulta distante
- **Traducir eslóganes palabra por palabra** en lugar de adaptarlos con la [transcreación](/es/services/transcreation)

## ¿No sabes qué árabe encaja con tu público?

Elegir la variedad adecuada forma parte de cada proyecto que acepto. Si tienes dudas, [cuéntame tu público y tus objetivos](/es/contact) y te recomendaré la mejor opción antes de empezar a traducir. También puedes conocer mi [servicio de consultoría](/es/services/consulting), que cubre esta decisión en lanzamientos más grandes.`,
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
  updatedAt: "2026-11-01T10:00:00Z",
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
      title: "مسرد مصطلحات التوطين: 15 مصطلحًا بشرح مبسّط",
      seoTitle: "مسرد مصطلحات الترجمة والتوطين: MTPE وLQA وTEP وأدوات CAT",
      excerpt:
        "MTPE وLQA وTEP وأدوات CAT وذاكرة الترجمة (TM) والكتابة من اليمين إلى اليسار (RTL)… قطاع الترجمة مليء بالاختصارات، وإليك شرحها بلغة بسيطة.",
      content: `إن تلقيت يومًا عرض سعر أو نموذج تسجيل من وكالة ترجمة، فربما واجهت سيلًا من الاختصارات. يشرح هذا المسرد أكثر المصطلحات شيوعًا بلغة بسيطة، مع ملاحظات حول معناها في العربية.

## التوطين (Localization)

تكييف المنتج أو المحتوى لسوق بعينها، لا مجرد ترجمة الكلمات. ويشمل في العربية اتجاه الكتابة من اليمين إلى اليسار (RTL) والتواريخ والأرقام والعملات والصور والمراجع الثقافية. انظر [توطين SaaS](/ar/services/saas-localization).

## التدويل (i18n)

تهيئة البرمجيات لتكون *قابلة* للتوطين لاحقًا: فصل النصوص عن الشيفرة، ودعم اللغات التي تُكتب من اليمين إلى اليسار، وترك مساحة للنصوص الأطول. ويرمز «i18n» إلى الأحرف الثمانية عشر بين «i» و«n» في الكلمة الإنجليزية.

## الكتابة من اليمين إلى اليسار (RTL)

تُكتب العربية من اليمين إلى اليسار، فيجب أن تنعكس واجهات المواقع والتطبيقات، بما فيها القوائم والأيقونات والأسهم وأشرطة التقدّم، بينما تبقى الأرقام والكلمات اللاتينية من اليسار إلى اليمين داخل النص العربي.

## النص المصدر والنص الهدف

**المصدر** هو النص الأصلي، و**الهدف** هو الترجمة. وعادةً ما تُسعَّر الترجمة لكل كلمة في النص المصدر.

## أدوات الترجمة بمساعدة الحاسوب (CAT)

برامج مثل Trados وmemoQ وWordfast. وهي ليست ترجمة آلية، بل تساعد المترجم البشري على العمل باتساق باستخدام ذاكرات الترجمة (TM) والمسارد، وتحافظ على تنسيق الملف.

## ذاكرة الترجمة (TM)

قاعدة بيانات بالجمل التي سبقت ترجمتها. فإذا تكررت الجملة نفسها أو جملة مشابهة، يُعاد استخدامها، فتبقى الصياغة متّسقة وتصبح التحديثات أسرع.

## التطابق الجزئي (Fuzzy match)

جملة *مشابهة* لجملة في ذاكرة الترجمة (TM) لكنها غير مطابقة تمامًا، فيراجعها المترجم ويعدّلها بدل ترجمتها من الصفر.

## المسرد أو قاعدة المصطلحات (Termbase)

قائمة بالترجمات المعتمدة لمصطلحاتك الأساسية، كأسماء المنتجات والميزات ومفردات القطاع، تضمن اتساق كل مترجم وكل مستند.

## الترجمة الآلية (MT)

ترجمة تنتجها البرامج تلقائيًا. وهي سريعة، لكنها في العربية تخطئ كثيرًا في القواعد والتذكير والتأنيث والمصطلحات والنبرة.

## التحرير اللاحق للترجمة الآلية (MTPE)

يصحّح لغوي بشري مخرجات الترجمة الآلية (MT). فـ**التحرير الخفيف** يجعلها دقيقة ومفهومة، و**التحرير الكامل** يجعلها تُقرأ كأنها مكتوبة بيد إنسان. انظر [MTPE](/ar/services/mtpe).

## الترجمة والتحرير والتدقيق (TEP)

سير عمل الجودة المعياري: خطوة للترجمة، وثانية لمقارنة الترجمة بالمصدر (التحرير)، وأخيرة لفحص النص العربي نفسه (التدقيق).

## التحرير مقابل التدقيق

**التحرير** ثنائي اللغة: تُراجَع الترجمة مقابل المصدر. و**التدقيق** أحادي اللغة: يُفحص النص العربي النهائي من حيث القواعد والإملاء وعلامات الترقيم والتنسيق. انظر [التحرير والتدقيق](/ar/services/editing).

## تقييم جودة اللغة (LQA)

طريقة موضوعية لقياس جودة الترجمة: تُسجَّل الأخطاء حسب الفئة، كالدقة أو المصطلحات أو الأسلوب، وحسب الخطورة، ثم تتحول إلى درجة جودة وتقرير.

## إطار MQM

مقاييس الجودة متعددة الأبعاد، وهو إطار شائع يحدد فئات الأخطاء ودرجات خطورتها المستخدمة في تقييم الجودة (LQA).

## الترجمة الإبداعية (Transcreation)

إعادة صياغة الرسالة، كالشعار أو الحملة، لتُحدث الأثر نفسه في ثقافة أخرى، بدل ترجمتها حرفيًا. وغالبًا ما تُرفق بـ**ترجمة عكسية** إلى الإنجليزية لتعرف ما يقوله النص العربي. انظر [الترجمة الإبداعية](/ar/services/transcreation).

## هل لديك مصطلح غير موجود هنا؟

إذا ورد في عرض سعر أو نموذج تسجيل مصطلح لا تعرفه، [فاسألني](/ar/contact). يسعدني أن أشرح كيف ينطبق على مشروعك.`,
    },
    fr: {
      title: "Glossaire de la localisation en arabe : 15 termes expliqués simplement",
      seoTitle: "Glossaire de la traduction et de la localisation : MTPE, LQA, TEP, TAO",
      excerpt:
        "MTPE, LQA, TEP, outils de TAO, mémoire de traduction, RTL… Le secteur de la traduction regorge d’abréviations. Les voici, expliquées simplement.",
      content: `Si vous avez déjà reçu un devis ou un formulaire prestataire d’une agence de traduction, vous avez sans doute croisé une avalanche d’abréviations. Ce glossaire explique les termes les plus courants en langage simple, avec ce qu’ils impliquent pour l’arabe.

## Localisation

Adapter un produit ou un contenu à un marché précis, pas seulement en traduire les mots. Pour l’arabe, cela inclut la mise en page de droite à gauche, les dates, les nombres, les devises, les images et les références culturelles. Voir [localisation SaaS](/fr/services/saas-localization).

## Internationalisation (i18n)

Préparer un logiciel pour qu’il *puisse* être localisé ensuite : séparer le texte du code, prendre en charge les langues de droite à gauche et prévoir de la place pour des textes plus longs. « i18n » désigne les 18 lettres entre le « i » et le « n » du mot anglais.

## Droite à gauche (RTL)

L’arabe s’écrit de droite à gauche. Sites et applications doivent inverser leur mise en page, y compris menus, icônes, flèches et barres de progression, tandis que les chiffres et les mots en caractères latins se lisent toujours de gauche à droite dans le texte arabe.

## Source et cible

La **source** est le texte d’origine ; la **cible** est la traduction. La traduction est généralement facturée au mot source.

## Outil de TAO

Logiciel de traduction assistée par ordinateur, comme Trados, memoQ ou Wordfast. Ce n’est pas de la traduction automatique : il aide le traducteur humain à travailler de façon cohérente grâce aux mémoires de traduction et aux glossaires, et il préserve la mise en forme du fichier.

## Mémoire de traduction (TM)

Une base de données des phrases déjà traduites. Lorsqu’une phrase identique ou proche réapparaît, elle est réutilisée, ce qui garantit la cohérence et accélère les mises à jour.

## Correspondance partielle (fuzzy match)

Une phrase *proche*, mais pas identique, d’une phrase de la mémoire de traduction. Le traducteur la vérifie et l’ajuste au lieu de tout retraduire.

## Glossaire ou base terminologique

Une liste des traductions validées de vos termes clés, comme les noms de produits, les fonctionnalités et le vocabulaire du secteur. Elle assure la cohérence de chaque traducteur et de chaque document.

## Traduction automatique (TA)

Une traduction produite automatiquement par un logiciel. Rapide, mais en arabe elle commet souvent des erreurs de grammaire, d’accord en genre, de terminologie et de ton.

## MTPE (post-édition de traduction automatique)

Un linguiste humain corrige la traduction automatique. La **post-édition légère** la rend exacte et compréhensible ; la **post-édition complète** la rend aussi naturelle qu’un texte écrit par un humain. Voir [MTPE](/fr/services/mtpe).

## TEP (traduction, révision, relecture)

Le processus qualité standard : une étape de traduction, une deuxième qui compare la traduction à la source (révision) et une dernière qui vérifie l’arabe lui-même (relecture).

## Révision ou relecture

La **révision** est bilingue : la traduction est comparée à la source. La **relecture** est unilingue : l’arabe final est vérifié pour la grammaire, l’orthographe, la ponctuation et la mise en forme. Voir [révision et relecture](/fr/services/editing).

## LQA (évaluation de la qualité linguistique)

Une méthode objective pour mesurer la qualité d’une traduction. Les erreurs sont consignées par catégorie, comme l’exactitude, la terminologie ou le style, et par gravité, puis converties en note de qualité et en rapport.

## MQM

Multidimensional Quality Metrics, un référentiel très utilisé qui définit les catégories d’erreurs et les niveaux de gravité employés en LQA.

## Transcréation

Recréer un message, comme un slogan ou une campagne, pour qu’il produise le même effet dans une autre culture, au lieu de le traduire mot à mot. Elle s’accompagne souvent d’une **rétrotraduction** pour que vous sachiez ce que dit le texte arabe. Voir [transcréation](/fr/services/transcreation).

## Un terme manque à l’appel ?

Si un devis ou un formulaire prestataire contient un terme que vous ne connaissez pas, [demandez-moi](/fr/contact). Je vous expliquerai volontiers ce qu’il signifie pour votre projet.`,
    },
    es: {
      title: "Glosario de localización al árabe: 15 términos explicados de forma sencilla",
      seoTitle: "Glosario de traducción y localización: MTPE, LQA, TEP, TAO y más",
      excerpt:
        "MTPE, LQA, TEP, herramientas TAO, memoria de traducción, RTL… El sector de la traducción está lleno de siglas. Aquí las tienes, explicadas con sencillez.",
      content: `Si alguna vez has recibido un presupuesto o un formulario de proveedor de una agencia de traducción, seguramente te has encontrado con un aluvión de siglas. Este glosario explica los términos más habituales en lenguaje sencillo, con lo que significan para el árabe.

## Localización

Adaptar un producto o contenido a un mercado concreto, no solo traducir sus palabras. En árabe incluye el diseño de derecha a izquierda, las fechas, los números, las monedas, las imágenes y las referencias culturales. Consulta [localización de SaaS](/es/services/saas-localization).

## Internacionalización (i18n)

Preparar el software para que *pueda* localizarse después: separar el texto del código, admitir idiomas de derecha a izquierda y dejar espacio para textos más largos. «i18n» se refiere a las 18 letras entre la «i» y la «n» de la palabra inglesa.

## De derecha a izquierda (RTL)

El árabe se escribe de derecha a izquierda. Webs y apps deben invertir su diseño, incluidos menús, iconos, flechas y barras de progreso, mientras que los números y las palabras en alfabeto latino se siguen leyendo de izquierda a derecha dentro del texto árabe.

## Original y destino

El **original** (o texto de origen) es el texto inicial; el **destino** es la traducción. La traducción suele cobrarse por palabra del original.

## Herramienta TAO

Software de traducción asistida por ordenador, como Trados, memoQ o Wordfast. No es traducción automática: ayuda al traductor humano a trabajar con coherencia gracias a memorias de traducción y glosarios, y conserva el formato del archivo.

## Memoria de traducción (TM)

Una base de datos con las frases ya traducidas. Cuando vuelve a aparecer la misma frase o una parecida, se reutiliza, lo que mantiene la coherencia y agiliza las actualizaciones.

## Coincidencia parcial (fuzzy match)

Una frase *parecida*, pero no idéntica, a otra de la memoria de traducción. El traductor la revisa y la ajusta en lugar de traducirla desde cero.

## Glosario o base terminológica

Una lista con las traducciones aprobadas de tus términos clave, como nombres de productos, funciones y vocabulario del sector. Garantiza la coherencia de cada traductor y de cada documento.

## Traducción automática (TA)

Traducción generada automáticamente por un software. Es rápida, pero en árabe suele cometer errores de gramática, concordancia de género, terminología y tono.

## MTPE (posedición de traducción automática)

Un lingüista humano corrige la traducción automática. La **posedición ligera** la hace precisa y comprensible; la **posedición completa** hace que se lea como si la hubiera escrito una persona. Consulta [MTPE](/es/services/mtpe).

## TEP (traducción, edición y revisión)

El proceso de calidad estándar: un paso de traducción, un segundo que compara la traducción con el original (edición) y uno final que revisa el propio texto árabe (revisión).

## Edición frente a revisión

La **edición** es bilingüe: la traducción se compara con el original. La **revisión** es monolingüe: se comprueba la gramática, la ortografía, la puntuación y el formato del árabe final. Consulta [edición y revisión](/es/services/editing).

## LQA (evaluación de la calidad lingüística)

Una forma objetiva de medir la calidad de una traducción. Los errores se registran por categoría, como exactitud, terminología o estilo, y por gravedad, y se convierten en una puntuación de calidad y un informe.

## MQM

Multidimensional Quality Metrics, un marco muy utilizado que define las categorías de error y los niveles de gravedad que se usan en la LQA.

## Transcreación

Recrear un mensaje, como un eslogan o una campaña, para que tenga el mismo efecto en otra cultura, en lugar de traducirlo palabra por palabra. Suele ir acompañada de una **retrotraducción** para que sepas qué dice el texto árabe. Consulta [transcreación](/es/services/transcreation).

## ¿Falta algún término?

Si un presupuesto o un formulario de proveedor incluye un término que no conoces, [pregúntame](/es/contact). Te explicaré encantado cómo se aplica a tu proyecto.`,
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

export const codePosts: CodePost[] = [msaVsDialects, glossary, raasVsSaas];
