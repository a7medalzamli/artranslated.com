-- Replaces the draft article "results-as-a-service-vs-saas" (RaaS) with a new
-- SaaS localization article in four languages, each with its own angle.
-- New address: /<lang>/blog/arabic-saas-localization. The posts stay drafts;
-- publish each language from the admin panel.

update public.posts set
  slug = 'arabic-saas-localization',
  title = $tia$Arabic SaaS localization: how to launch your product in Arabic$tia$,
  excerpt = $tia$What to localize first, how to prepare your code for right-to-left, which Arabic to use and how to keep Arabic in every release. A practical guide for SaaS teams.$tia$,
  seo_title = $tia$Arabic SaaS Localization: How to Launch Your Product$tia$,
  seo_description = $tia$What to localize first, how to prepare your code for right-to-left, which Arabic to use and how to keep Arabic in every release. A guide for SaaS teams.$tia$,
  category = $tia$SaaS localization$tia$,
  cover_image_url = $tia$/images/blog/saas-localization.jpg$tia$,
  content = $tia$Arabic-speaking users, from the Gulf and Egypt to the Maghreb, expect the software they pay for to work in their language. Localizing a SaaS product into Arabic is more than translating strings: the layout flips to right-to-left, the grammar changes how messages are built, and the product keeps changing with every sprint. This guide walks you through a launch, step by step.

## What to localize first

You don’t have to translate everything on day one. Start with what users see while they decide whether to stay.

| Content | Why it matters | When |
|---|---|---|
| Interface and onboarding | The first impression of the product | Launch |
| Pricing, sign-up and checkout | Where users decide to pay | Launch |
| Emails and notifications | Users read them outside the app | Launch |
| Top help center articles | Fewer support tickets | Launch, then in batches |
| App store listing and landing pages | How Arabic users find you | Launch |
| Full documentation and blog | Depth and SEO over time | After launch |

## Prepare the product before translation

Most localization problems are created in the code, long before a translator sees the text. Before you send anything, check that:

- **All text is outside the code**, in resource files such as JSON, XLIFF or XML.
- **Sentences are not built from pieces.** "You have" + number + "new messages" cannot be translated correctly into Arabic.
- **Placeholders have clear names**, such as `{userName}` instead of `{0}`, so the translator knows what goes there.
- **Plural rules are supported.** Arabic has six plural categories, not two.
- **The layout can mirror.** Use `dir="rtl"` and logical CSS properties (start and end instead of left and right).
- **Fonts support Arabic** and there is room for longer or taller text.

## Choose the right Arabic

For the interface, help center and documentation, most SaaS products use **Modern Standard Arabic**, because it is understood in every Arabic-speaking market. It can still sound friendly and modern. Decide early how you address the user and keep it consistent. For more on this choice, read [Which Arabic should you use?](/en/blog/which-arabic-msa-vs-dialects)

## Agree on a glossary and a voice

Is a "workspace" مساحة العمل or بيئة العمل? Is a "dashboard" لوحة التحكم or لوحة المعلومات? Decide once, write it in a glossary and use it everywhere: interface, emails and help center. A short style guide on tone, forms of address and brand names saves many corrections later.

## Translate with context, then review in the product

A word like "Save", "Order" or "Free" can be translated in several ways, and the right one depends on where it appears. Share screenshots, a staging link or string descriptions with your translator. Then review the Arabic **inside the product**: truncated buttons, icons that should mirror, mixed Arabic and English text in the wrong order, and how dates, numbers and currencies appear.

## Keep Arabic in every release

The launch is only the start. Every sprint adds new strings, and if Arabic falls behind, users end up with half the product in English. Connect your localization platform or repository, send new strings in small batches, and reuse your translation memory so that wording stays consistent. With a regular rhythm, new strings come back in one to two working days, and Arabic ships at the same time as your other languages.

## Measure quality

Don’t take quality on trust. A periodic **language quality assessment (LQA)** gives you a score and a list of issues to fix. Combine it with what users tell you: support tickets and app store reviews in Arabic show quickly where the wording is unclear.

## How I can help

I have been translating into Arabic since 2014 and work with software teams on interfaces, help centers and continuous releases. See my [SaaS localization service](/en/services/saas-localization), or [tell me about your product](/en/contact) and I’ll suggest a clear scope for your Arabic launch.$tia$,
  updated_at = now()
where locale = 'en' and slug = 'results-as-a-service-vs-saas';

update public.posts set
  slug = 'arabic-saas-localization',
  title = $tia$سبعة أخطاء شائعة في تعريب منتجات البرمجيات كخدمة (SaaS) وكيف تتجنبها$tia$,
  excerpt = $tia$أزرار مقطوعة، ومصطلحات متضاربة، وتحديثات تصدر بلا ترجمة: سبعة أخطاء شائعة في تعريب منتجات البرمجيات كخدمة (SaaS)، وطريقة تجنب كل منها.$tia$,
  seo_title = $tia$أخطاء تعريب منتجات SaaS وكيف تتجنبها$tia$,
  seo_description = $tia$أزرار مقطوعة، ومصطلحات متضاربة، وتحديثات تصدر بلا ترجمة: سبعة أخطاء شائعة في تعريب منتجات البرمجيات كخدمة (SaaS)، وطريقة تجنب كل منها.$tia$,
  category = $tia$SaaS localization$tia$,
  cover_image_url = $tia$/images/blog/saas-localization.jpg$tia$,
  content = $tia$سواء كانت شركتك عربية تطوّر منتجها بالإنجليزية أولًا، أو شركة أجنبية تريد الوصول إلى المستخدم العربي، فإن تعريب منتج من **البرمجيات كخدمة (SaaS)** يختلف عن ترجمة مستند عادي. المستخدم يرى العربية في كل زر ورسالة وبريد إلكتروني، ويلاحظ أي خطأ فورًا. إليك أكثر الأخطاء شيوعًا، وكيف تتجنبها.

## 1. ترجمة النصوص دون رؤيتها داخل المنتج

كلمة مثل «Order» قد تعني «طلب» أو «ترتيب»، و«Free» قد تعني «مجاني» أو «متاح». حين يترجم المترجم قائمة نصوص منفصلة دون أن يرى مكانها، تظهر ترجمات صحيحة لغويًا وخاطئة في سياقها، أو أزرار مقطوعة لأن النص العربي أطول.

**الحل:** أرسل لقطات شاشة أو رابط بيئة تجريبية مع النصوص، ثم راجع العربية داخل المنتج نفسه قبل الإطلاق.

## 2. نسيان الاتجاه من اليمين إلى اليسار (RTL)

ترجمة النصوص لا تكفي إذا بقيت الواجهة من اليسار إلى اليمين. أسهم «التالي» و«السابق»، وأشرطة التقدم، والقوائم الجانبية، وترتيب الأعمدة، كلها يجب أن تنعكس. ويظهر خلل آخر حين تمتزج كلمات إنجليزية أو أرقام داخل الجملة العربية (النص ثنائي الاتجاه)، فتنتقل علامات الترقيم إلى غير مكانها.

**الحل:** اختبر الواجهة كاملة بالاتجاه من اليمين إلى اليسار (RTL)، لا الصفحة الرئيسية وحدها.

## 3. ترجمة المصطلح الواحد بأكثر من كلمة

«Workspace» تصبح «مساحة العمل» في الواجهة، و«بيئة العمل» في مركز المساعدة، و«الحساب» في البريد الإلكتروني. النتيجة: مستخدم لا يعرف إن كانت هذه أشياء مختلفة.

**الحل:** مسرد (Glossary) للمصطلحات المعتمدة يُعدّ في بداية المشروع، وذاكرة ترجمة (TM) تضمن تكرار الصياغة نفسها في كل مكان.

## 4. تجاهل قواعد العربية في الجمع والتذكير والتأنيث

رسالة مثل «لديك 3 رسالة جديدة» تكشف فورًا أن المنتج لم يُعدّ للعربية. فللعربية ست فئات للجمع في قواعد البرمجيات، والفعل يتغير بحسب المخاطَب: «أنتَ» أم «أنتِ» أم «أنتم».

**الحل:** استخدم مكتبات تدعم قواعد الجمع العربية، واتفق مع المترجم على صيغة مخاطبة موحدة، أو على صياغات محايدة تتجنب المشكلة.

## 5. الاعتماد على الترجمة الآلية (MT) دون مراجعة بشرية

الترجمة الآلية (MT) سريعة، لكنها في العربية تخطئ كثيرًا في المطابقة بين المذكر والمؤنث، وفي المصطلحات، وفي النبرة. والنتيجة واجهة «مفهومة تقريبًا» لكنها تُشعر المستخدم بأن المنتج لا يحترمه.

**الحل:** إن أردت السرعة، فاختر التحرير اللاحق للترجمة الآلية (MTPE) على يد لغوي محترف، لا الترجمة الآلية الخام. انظر [خدمة MTPE](/ar/services/mtpe).

## 6. تعريب الواجهة وترك الباقي بالإنجليزية

يدخل المستخدم إلى واجهة عربية، ثم يصله بريد التفعيل بالإنجليزية، وتظهر له رسالة خطأ بالإنجليزية، ويجد مركز المساعدة بالإنجليزية. التجربة المجزأة تفقد المستخدم الثقة.

**الحل:** ضع في خطة الإطلاق: رسائل البريد الإلكتروني والإشعارات، ورسائل الخطأ، وصفحة الأسعار والدفع، وأهم مقالات مركز المساعدة.

## 7. التوقف بعد الإطلاق

يُطلق المنتج بالعربية، ثم تضيف كل دورة تطوير (Sprint) نصوصًا جديدة لا يترجمها أحد. بعد بضعة أشهر يصبح نصف المنتج بالإنجليزية.

**الحل:** التوطين المستمر: تُرسل النصوص الجديدة على دفعات صغيرة مع كل تحديث، وتعود مترجمة ومراجعة خلال يوم إلى يومي عمل، فتصدر العربية مع بقية اللغات في الوقت نفسه.

## قائمة فحص سريعة قبل الإطلاق

| السؤال | نعم / لا |
|---|---|
| هل راجعنا العربية داخل المنتج لا في الملفات فقط؟ | |
| هل تنعكس الواجهة كاملة من اليمين إلى اليسار (RTL)؟ | |
| هل لدينا مسرد (Glossary) معتمد؟ | |
| هل تظهر صيغ الجمع والمخاطبة صحيحة؟ | |
| هل رسائل البريد والأخطاء والدفع بالعربية؟ | |
| هل لدينا خطة لترجمة كل تحديث؟ | |

## كيف يمكنني أن أساعدك؟

أترجم إلى العربية منذ عام 2014، وأعمل مع فرق تطوير البرمجيات على الواجهات ومراكز المساعدة والتحديثات المستمرة، مع مراجعة داخل المنتج وتقييم لجودة اللغة (LQA) عند الطلب. تعرّف على [خدمة توطين منتجات البرمجيات كخدمة (SaaS)](/ar/services/saas-localization)، أو [تواصل معي](/ar/contact) لنراجع منتجك معًا قبل الإطلاق.$tia$,
  updated_at = now()
where locale = 'ar' and slug = 'results-as-a-service-vs-saas';

update public.posts set
  slug = 'arabic-saas-localization',
  title = $tia$Ajouter l’arabe à votre SaaS : ce qui change par rapport aux autres langues$tia$,
  excerpt = $tia$Votre logiciel existe déjà en français et en anglais ? Ajouter l’arabe demande quelques choix de plus : RTL, traduction depuis le français, Maghreb ou Golfe, mises à jour continues.$tia$,
  seo_title = $tia$Localiser un SaaS en arabe : ce qui change vraiment$tia$,
  seo_description = $tia$Votre logiciel existe en français et en anglais ? Ajouter l’arabe : RTL, traduction depuis le français, Maghreb ou Golfe, mises à jour à chaque version.$tia$,
  category = $tia$SaaS localization$tia$,
  cover_image_url = $tia$/images/blog/saas-localization.jpg$tia$,
  content = $tia$Votre logiciel est déjà disponible en français, peut-être aussi en anglais, en espagnol ou en allemand. Vos équipes connaissent le processus : on exporte les chaînes, on les traduit, on les réintègre. Avec l’arabe, ce processus reste valable, mais plusieurs choses changent. Voici ce qu’il faut prévoir pour qu’une version arabe soit aussi solide que les autres.

## Ce qui ne change pas

Le socle reste le même : des chaînes de texte sorties du code (JSON, XLIFF, XML…), une plateforme de localisation ou un dépôt, un glossaire, une mémoire de traduction et une relecture avant chaque mise en production. Si votre internationalisation (i18n) est propre pour le français et l’anglais, vous avez déjà fait une bonne partie du travail.

## Ce qui change avec l’arabe

**Le sens de lecture.** L’arabe s’écrit de droite à gauche (RTL). Toute l’interface doit se refléter : menus, flèches, barres de progression, alignements. C’est souvent la première langue RTL d’un produit, et donc le premier vrai test de son architecture.

**La grammaire dans l’interface.** L’arabe compte six catégories de pluriel, et les verbes changent selon que l’on s’adresse à un homme, à une femme ou à plusieurs personnes. Les phrases construites par morceaux (« Vous avez » + nombre + « messages ») ne fonctionnent pas.

**Le choix de la variété.** Pour une interface, on utilise presque toujours l’arabe standard moderne, compris partout. Les dialectes peuvent servir au marketing local. Voir [Arabe standard, darija ou arabe du Golfe](/fr/blog/which-arabic-msa-vs-dialects).

**La typographie.** Il faut une police qui gère bien l’arabe, plus de hauteur de ligne, et pas d’italique ni d’espacement entre les lettres.

## Traduire depuis le français, sans passer par l’anglais

Beaucoup d’éditeurs francophones envoient la version anglaise au traducteur arabe, par habitude. Chaque passage par une langue intermédiaire ajoute un risque d’écart de sens et de ton. Si votre produit est conçu en français, faites-le traduire **directement depuis le français**, par un traducteur qui maîtrise les deux langues et le vocabulaire du logiciel.

## Maghreb, Golfe ou les deux ?

| Votre marché | À prévoir |
|---|---|
| Maroc, Algérie, Tunisie | Le français reste très utilisé en entreprise ; l’arabe élargit votre public, notamment hors des grandes villes et dans le secteur public |
| Arabie saoudite, Émirats, Qatar | L’anglais est courant dans les affaires, mais une interface en arabe est souvent attendue, voire exigée dans les appels d’offres publics |
| Tous les pays arabes | Une seule version en arabe standard moderne, avec un glossaire commun |

Dans la plupart des cas, une seule version arabe suffit pour tous les marchés : ce sont les pages marketing qui peuvent ensuite être adaptées par région.

## Garder l’arabe à jour à chaque version

Un SaaS évolue en continu. Si l’arabe n’est traduit qu’au lancement, il prend vite du retard. La bonne pratique : envoyer les nouvelles chaînes par petits lots à chaque sprint, avec des captures d’écran pour le contexte, et les recevoir traduites et relues sous un à deux jours ouvrés. La mémoire de traduction garantit que les mêmes termes reviennent d’une version à l’autre.

## Budget et délais

Le coût dépend surtout du nombre de mots source, de la part de répétitions et de la relecture en contexte. Côté délais, je traduis au moins 5 000 mots par jour : l’interface d’une application web ou mobile type est généralement prête en quelques jours, puis vérifiée dans le produit. Pour comprendre les lignes d’un devis, lisez [Comment lire un devis de traduction](/fr/blog/arabic-localization-glossary).

## Mon accompagnement

Je traduis vers l’arabe depuis 2014, notamment depuis le français, et j’accompagne les éditeurs de logiciels du lancement aux mises à jour continues. Découvrez mon service de [localisation SaaS](/fr/services/saas-localization), ou [parlons de votre produit](/fr/contact).$tia$,
  updated_at = now()
where locale = 'fr' and slug = 'results-as-a-service-vs-saas';

update public.posts set
  slug = 'arabic-saas-localization',
  title = $tia$Localización continua: cómo mantener tu SaaS en árabe en cada versión$tia$,
  excerpt = $tia$Lanzar en árabe es solo el principio. Cómo integrar el árabe en cada sprint, con contexto para el traductor, memoria de traducción y revisión, sin retrasar tus lanzamientos.$tia$,
  seo_title = $tia$Localización continua al árabe para productos SaaS$tia$,
  seo_description = $tia$Cómo integrar el árabe en cada sprint: plataforma de localización, contexto para el traductor, memoria de traducción y revisión, sin retrasar tus lanzamientos.$tia$,
  category = $tia$SaaS localization$tia$,
  cover_image_url = $tia$/images/blog/saas-localization.jpg$tia$,
  content = $tia$Es una historia habitual: una empresa lanza su producto en árabe con todo cuidado, la interfaz queda perfecta… y tres meses después la mitad de las funciones nuevas aparecen en inglés. No es un problema de traducción, sino de proceso. Un producto **SaaS** cambia en cada sprint, y el árabe tiene que cambiar con él.

Esto es la **localización continua**: traducir poco y a menudo, al ritmo del desarrollo, en lugar de hacer un gran proyecto cada año.

## Cómo encaja el árabe en tu sprint

| Momento del sprint | Qué pasa con el árabe |
|---|---|
| Diseño de la función | Se prevé espacio para textos más largos y el diseño de derecha a izquierda |
| Desarrollo | Los textos nuevos se añaden al archivo de cadenas, nunca dentro del código |
| Fin del desarrollo | Las cadenas nuevas o modificadas llegan al traductor con su contexto |
| 1–2 días hábiles después | El árabe vuelve traducido y revisado a la plataforma o al repositorio |
| Antes de publicar | Revisión rápida en el entorno de pruebas |
| Publicación | El árabe sale a la vez que los demás idiomas |

## Los cinco elementos del proceso

**1. Una plataforma o un repositorio conectado.** Ya uses una plataforma de localización (TMS) como Crowdin, Lokalise o Phrase, o archivos JSON o XLIFF en tu repositorio, lo importante es que el traductor trabaje sobre las cadenas reales y que estas vuelvan al producto sin copiar y pegar.

**2. Contexto para cada cadena.** Una palabra suelta como «Open» puede ser «abrir», «abierto» o «pendiente». Una captura de pantalla, una descripción breve o un límite de caracteres evitan la mayoría de los errores.

**3. Memoria de traducción y glosario.** La memoria de traducción (TM) reutiliza lo ya traducido y el glosario fija los términos de tu producto. Así, cada versión suena igual que la anterior y solo pagas de verdad el texto nuevo.

**4. Lotes pequeños y plazos fijos.** Es más fácil revisar 300 palabras cada semana que 30 000 a final de año. Con un ritmo acordado, el árabe deja de ser el idioma que retrasa el lanzamiento.

**5. Revisión en contexto.** Antes de publicar, alguien que lee árabe revisa la versión de pruebas: botones cortados, iconos que no se han invertido, frases con palabras en inglés desordenadas.

## Errores que rompen el flujo

- **Textos escritos directamente en el código**, que nunca llegan al traductor.
- **Frases construidas por partes**, que el árabe no puede ordenar correctamente.
- **Cambios de última hora sin aviso**, que dejan cadenas en inglés en producción.
- **Ningún canal para preguntas**: el traductor necesita poder preguntar qué significa una función nueva.

Si quieres repasar los conceptos técnicos (RTL, plurales, i18n), consulta el [diccionario técnico del árabe](/es/blog/arabic-localization-glossary).

## Cómo trabajo

Traduzco al árabe desde 2014 y trabajo con equipos de producto al ritmo de sus sprints: cadenas nuevas traducidas y revisadas en uno o dos días hábiles, con glosario, memoria de traducción y revisión en contexto. Conoce mi servicio de [localización de SaaS](/es/services/saas-localization) o [cuéntame cómo trabaja tu equipo](/es/contact) y vemos cómo encajar el árabe en tu proceso.$tia$,
  updated_at = now()
where locale = 'es' and slug = 'results-as-a-service-vs-saas';
