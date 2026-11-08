import type { Metadata } from "next";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { Reveal } from "@/components/Reveal/Reveal";
import { CountUp } from "@/components/CountUp/CountUp";
import { AvailabilityHours } from "@/components/AvailabilityHours/AvailabilityHours";
import { Flag, type LanguageCode } from "@/components/Flag/Flag";
import { getLocalizedHome } from "@/lib/content/getLocalizedHome";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getHomeSummary, getSeoText } from "@/content/seoText";
import { getDictionary, type Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { Faq } from "@/components/Faq/Faq";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { RelatedServices } from "@/components/RelatedServices/RelatedServices";
import { RelatedGuides } from "@/components/RelatedGuides/RelatedGuides";
import { clusters } from "@/content/postCategories";
import { getFaqs } from "@/content/faqs";
import { fitTitle } from "@/lib/fitTitle";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "",
    locale,
    defaultTitle: getSeoText(locale).homeTitle,
    defaultDescription: getSeoText(locale).home,
    seo: t.seo.home,
  });
}

const sourceLanguages: LanguageCode[] = ["en", "fr", "es"];
// Read by screen readers between the source languages and Arabic.
const intoWord: Record<Locale, string> = { en: "into", ar: "إلى", fr: "vers", es: "al" };

/** Headings of the homepage link sections (services and latest guides). */
const HOME_LINKS: Record<Locale, { services: string; guides: string }> = {
  en: { services: "Services", guides: "Latest guides" },
  ar: { services: "الخدمات", guides: "أحدث الأدلة" },
  fr: { services: "Services", guides: "Derniers guides" },
  es: { services: "Servicios", guides: "Últimas guías" },
};

/**
 * Hero call to action and the credentials shown under it. A specific offer
 * ("free quote") converts better than a general "Let's talk", and proof
 * right under the button answers "can I trust this person?" early.
 */
const HERO: Record<Locale, { cta: string; proof: string[] }> = {
  en: {
    cta: "Get a free quote",
    proof: ["ProZ.com Certified PRO", "Certified by Alconost", "Accredited by ArTA", "Five-star client reviews"],
  },
  ar: {
    cta: "احصل على عرض سعر مجاني",
    proof: ["ProZ.com Certified PRO", "شهادة من Alconost", "اعتماد جمعية المترجمين العرب (ArTA)", "تقييمات عملاء من خمس نجوم"],
  },
  fr: {
    cta: "Obtenir un devis gratuit",
    proof: ["Certifié PRO ProZ.com", "Certifié par Alconost", "Accrédité par l’ArTA", "Avis clients cinq étoiles"],
  },
  es: {
    cta: "Pide un presupuesto gratis",
    proof: ["Certified PRO de ProZ.com", "Certificado por Alconost", "Acreditado por la ArTA", "Opiniones de cinco estrellas"],
  },
};

/** Two entry points under the hero: direct clients and translation agencies. */
const audience: Record<
  Locale,
  { aria: string; cards: { href: string; label: string; text: string; cta: string }[] }
> = {
  en: {
    aria: "Who I work with",
    cards: [
      {
        href: routes.forBusinesses,
        label: "I’m a business",
        text: "Need your documents, website or marketing in Arabic? See how it works, step by step.",
        cta: "For businesses",
      },
      {
        href: routes.forAgencies,
        label: "I’m a translation agency",
        text: "Looking for a reliable Arabic linguist? Capacity, CAT tools and workflow.",
        cta: "For agencies",
      },
    ],
  },
  ar: {
    aria: "مع من أعمل",
    cards: [
      {
        href: routes.forBusinesses,
        label: "أنا صاحب شركة",
        text: "هل تحتاج إلى مستنداتك أو موقعك أو تسويقك بالعربية؟ تعرّف على طريقة العمل خطوة بخطوة.",
        cta: "للشركات",
      },
      {
        href: routes.forAgencies,
        label: "أنا وكالة ترجمة",
        text: "هل تبحث عن مترجم عربي موثوق؟ الطاقة الإنتاجية وأدوات الترجمة وسير العمل.",
        cta: "للوكالات",
      },
    ],
  },
  fr: {
    aria: "Avec qui je travaille",
    cards: [
      {
        href: routes.forBusinesses,
        label: "Je suis une entreprise",
        text: "Besoin de vos documents, de votre site ou de votre marketing en arabe ? Découvrez comment ça marche, étape par étape.",
        cta: "Pour les entreprises",
      },
      {
        href: routes.forAgencies,
        label: "Je suis une agence de traduction",
        text: "Vous cherchez un linguiste arabe fiable ? Capacité, outils de TAO et méthode de travail.",
        cta: "Pour les agences",
      },
    ],
  },
  es: {
    aria: "Con quién trabajo",
    cards: [
      {
        href: routes.forBusinesses,
        label: "Soy una empresa",
        text: "¿Necesitas tus documentos, tu web o tu marketing en árabe? Descubre cómo funciona, paso a paso.",
        cta: "Para empresas",
      },
      {
        href: routes.forAgencies,
        label: "Soy una agencia de traducción",
        text: "¿Buscas un lingüista de árabe fiable? Capacidad, herramientas TAO y forma de trabajo.",
        cta: "Para agencias",
      },
    ],
  },
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const content = await getLocalizedHome(loc);
  const t = await getContent(loc);
  // Stats are numbers, so every language shows the English values (edited in the CMS).
  const statValues = loc === "en" ? t.home.statValues : (await getContent("en")).home.statValues;

  return (
    <>

      {/* ---- Hero ---- */}
      <section className={styles.hero}>
        <Container>
          <div className={`${styles.heroInner} fit-box`}>
            {content.hero.label && <p className={styles.heroLabel}>{content.hero.label}</p>}
            <h1 className={`${styles.heroTitle} fit-title`} style={fitTitle(content.hero.title)}>
              {content.hero.title}
            </h1>
            <p className={styles.heroLead}>{getHomeSummary(locale)}</p>
            <div className={styles.heroActions}>
              <Button href={routes.contact} variant="primary" size="lg">
                {HERO[loc].cta}
              </Button>
              <Link href={routes.about} className={styles.heroSecondary}>
                {getDictionary(loc).nav.about}
              </Link>
            </div>
            <ul className={styles.heroProof}>
              {HERO[loc].proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* Language pair: source languages → Arabic. Names stay as text
                so search engines read them; the arrow is decorative. */}
            <div className={styles.heroLanguages} aria-labelledby="languages-title">
              <h2 id="languages-title" className={styles.languagesTitle}>
                {t.home.languagesTitle}
              </h2>
              <div className={styles.languagePair}>
                <ul className={styles.languageList}>
                  {sourceLanguages.map((code) => (
                    <li key={code} className={styles.languageItem}>
                      <Flag code={code} size={34} />
                      <span>{t.home.langNames[code]}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.languageArrow}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 12h15m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="visually-hidden">{intoWord[loc]}</span>
                </div>
                <div className={`${styles.languageItem} ${styles.languageTarget}`}>
                  <Flag code="ar" size={34} />
                  <span>{t.home.langNames.ar}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Who is it for: businesses / agencies ---- */}
      <section className={styles.audience} aria-label={audience[loc].aria}>
        <Container>
          <div className={styles.audienceGrid}>
            {audience[loc].cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.audienceCard}>
                <span className={styles.audienceLabel}>{card.label}</span>
                <span className={styles.audienceText}>{card.text}</span>
                <span className={styles.audienceCta}>
                  {card.cta}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ---- Past experience (animated counters) ---- */}
      <section className={`${styles.stats} ${styles.tinted}`} aria-labelledby="stats-title">
        <Container>
          <div className={`${styles.servicesHead} ${styles.statsHead}`}>
            <h2 id="stats-title" className={styles.servicesTitle}>
              {t.home.pastExperienceTitle}
            </h2>
          </div>
          <ul className={styles.statGrid}>
            {(["years", "words", "projects", "languages"] as const).map((id) => (
              <li key={id} className={styles.statItem}>
                <span className={styles.statValue}>
                  <CountUp value={statValues[id].value} suffix={statValues[id].suffix} />
                </span>
                <span className={styles.statLabel}>{t.home.stats[id]}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Availability ---- */}
      <section className={styles.availability} aria-labelledby="availability-title">
        <Container>
          <Reveal from="up" className={styles.availabilityCard}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            <div>
              <h2 id="availability-title" className={styles.availabilityTitle}>
                {t.home.availabilityEyebrow}
              </h2>
              <AvailabilityHours labels={t.home.availability} />
            </div>
            <Button href={routes.contact} variant="primary" size="lg">
              {t.common.letsTalk}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ---- Why partner / QA ---- */}
      <section className={styles.section}>
        <Container>
          <div className={`${styles.whyHead} fit-box`}>
            {content.why.eyebrow && <p className={styles.label}>{content.why.eyebrow}</p>}
            <h2 className={`${styles.whyTitle} fit-title`} style={fitTitle(content.why.title)}>
              {content.why.title}
            </h2>
            <p className={styles.whyIntro}>{content.why.intro}</p>
          </div>
          <ul className={styles.whyList}>
            {content.why.items.map((item, i) => (
              <Reveal as="li" key={item.title} from="up" delay={(i % 3) * 90} className={styles.whyItem}>
                <span className={styles.whyCheck} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m5 12 5 5 9-11"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className={styles.whyItemTitle}>{item.title}</h3>
                  <p className={styles.whyItemText}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Services: links from the homepage to each pillar page ---- */}
      <RelatedServices
        locale={locale}
        title={HOME_LINKS[loc].services}
        links={["translation", "editing", "mtpe", "transcreation", "saas", "consulting", "digital-marketing"]}
        tinted
      />

      {/* ---- Client reviews (ProZ.com) ---- */}
      <Testimonials locale={locale} />

      {/* ---- Frequently asked questions ---- */}
      <Faq title={getFaqs(locale).title} items={getFaqs(locale).home} tinted />

      {/* ---- Latest guides from the blog ---- */}
      <RelatedGuides
        locale={locale}
        title={HOME_LINKS[loc].guides}
        clusters={clusters.map((c) => c.key)}
        limit={3}
      />

      {/* ---- Partners / credentials ---- */}
      <section className={styles.partners} aria-label="Partners">
        <Container>
          <ul className={styles.partnerList}>
            {content.partners.map((badge, i) => (
              <li key={`${badge.src}-${i}`} className={styles.partnerItem}>
                <Image
                  src={badge.src}
                  alt={badge.label}
                  width={280}
                  height={140}
                  className={styles.partnerImg}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
