import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Card, CardGrid } from "@/components/Card/Card";
import { CTA } from "@/components/CTA/CTA";
import { specializations } from "@/content/specializations";
import {
  getServicePages,
  isServiceSlug,
  serviceImages,
  serviceSlugs,
} from "@/content/servicePages";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getServiceSeoTitles } from "@/content/seoText";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { getServiceDetails } from "@/content/serviceDetails";
import { siteUrl } from "@/lib/seo";
import { ids, breadcrumbs } from "@/lib/entity";
import { Faq } from "@/components/Faq/Faq";
import { QuoteForm } from "../../contact/QuoteForm";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { AiVisibility } from "@/components/AiVisibility/AiVisibility";
import { RelatedGuides } from "@/components/RelatedGuides/RelatedGuides";
import type { ClusterKey } from "@/content/postCategories";
import { getFaqs } from "@/content/faqs";
import styles from "./servicePage.module.css";

type Params = Promise<{ locale: string; service: string }>;

/** Photo for each specialization card on the Translation page. */
const specializationImages: Record<string, string> = {
  technical: "/images/photos/spec-technical.jpg",
  legal: "/images/photos/spec-legal.jpg",
  financial: "/images/photos/spec-financial.jpg",
  healthcare: "/images/photos/spec-healthcare.jpg",
  audiovisual: "/images/photos/spec-audiovisual.jpg",
};

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, service } = await params;
  if (!isServiceSlug(service)) return {};
  const page = getServicePages(locale).pages[service];
  return buildCmsMetadata({
    path: `/services/${service}`,
    locale,
    defaultTitle: getServiceSeoTitles(locale)[service],
    defaultDescription: page.description,
    defaultOgImage: serviceImages[service],
  });
}

/** Translation page: links to the language-pair pages and the Arabic markets hub. */
const PAIRS: Record<
  Locale,
  { title: string; intro: string; cards: { href: string; title: string; text: string; image: string }[] }
> = {
  en: {
    title: "Language pairs and markets",
    intro: "Direct translation into Arabic from three languages, with no relay language, and from Arabic into English.",
    cards: [
      { href: routes.frenchToArabic, title: "French → Arabic", text: "For companies and agencies across the French-speaking world.", image: "/images/photos/service-consulting.jpg" },
      { href: routes.spanishToArabic, title: "Spanish → Arabic", text: "For Spain, Latin America and the Spanish-speaking world.", image: "/images/photos/spec-website-marketing.jpg" },
      { href: routes.arabicMarkets, title: "Arabic markets", text: "The Gulf, the Levant, Egypt, the Maghreb and Iraq: which Arabic each one reads.", image: "/images/photos/services-hero.jpg" },
    ],
  },
  ar: {
    title: "أزواج اللغات والأسواق",
    intro: "ترجمة مباشرة إلى العربية من ثلاث لغات دون لغة وسيطة، ومن العربية إلى الإنجليزية.",
    cards: [
      { href: routes.frenchToArabic, title: "الفرنسية ← العربية", text: "للشركات والوكالات في العالم الناطق بالفرنسية.", image: "/images/photos/service-consulting.jpg" },
      { href: routes.spanishToArabic, title: "الإسبانية ← العربية", text: "لإسبانيا وأمريكا اللاتينية والعالم الناطق بالإسبانية.", image: "/images/photos/spec-website-marketing.jpg" },
      { href: routes.arabicMarkets, title: "الأسواق العربية", text: "الخليج والشام ومصر والمغرب العربي والعراق: أي عربية يقرؤها كل منها.", image: "/images/photos/services-hero.jpg" },
    ],
  },
  fr: {
    title: "Combinaisons de langues et marchés",
    intro: "Traduction directe vers l’arabe depuis trois langues, sans langue relais, et de l’arabe vers l’anglais.",
    cards: [
      { href: routes.frenchToArabic, title: "Français → arabe", text: "Pour les entreprises et agences de tout l’espace francophone.", image: "/images/photos/service-consulting.jpg" },
      { href: routes.spanishToArabic, title: "Espagnol → arabe", text: "Pour l’Espagne, l’Amérique latine et le monde hispanophone.", image: "/images/photos/spec-website-marketing.jpg" },
      { href: routes.arabicMarkets, title: "Marchés arabophones", text: "Golfe, Levant, Égypte, Maghreb et Irak : quel arabe lit chacun d’eux.", image: "/images/photos/services-hero.jpg" },
    ],
  },
  es: {
    title: "Combinaciones de idiomas y mercados",
    intro: "Traducción directa al árabe desde tres idiomas, sin idioma puente, y del árabe al inglés.",
    cards: [
      { href: routes.frenchToArabic, title: "Francés → árabe", text: "Para empresas y agencias de todo el mundo francófono.", image: "/images/photos/service-consulting.jpg" },
      { href: routes.spanishToArabic, title: "Español → árabe", text: "Para España, Latinoamérica y el mundo hispanohablante.", image: "/images/photos/spec-website-marketing.jpg" },
      { href: routes.arabicMarkets, title: "Mercados árabes", text: "Golfo, Levante, Egipto, Magreb e Irak: qué árabe lee cada uno.", image: "/images/photos/services-hero.jpg" },
    ],
  },
};

/** Topic clusters whose articles appear under "Related guides" on each service page. */
const serviceClusters: Record<string, ClusterKey[]> = {
  translation: ["translation", "arabic-markets"],
  editing: ["quality"],
  mtpe: ["machine-translation", "quality"],
  transcreation: ["marketing"],
  consulting: ["arabic-markets", "marketing", "translation"],
  "digital-marketing": ["seo-ai", "marketing"],
};

export default async function ServicePage({ params }: { params: Params }) {
  const { locale, service } = await params;
  if (!isServiceSlug(service)) notFound();

  const t = await getContent(locale as Locale);
  const { shared, pages } = getServicePages(locale);
  const page = pages[service];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url: `${siteUrl}/${locale}/services/${service}`,
    inLanguage: locale,
    areaServed: "Worldwide",
    provider: { "@id": ids.business },
    serviceType: page.title,
  };
  const crumbs = breadcrumbs(locale, t.common.homeCrumb, [
    { name: t.services.crumb, path: routes.services },
    { name: page.title, path: `/services/${service}` },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={crumbs} />
      <PageHeader title={page.title} />

      <Section>
        <p className={styles.lead}>{page.description}</p>
        <div className={styles.intro}>
          <div className={`prose ${styles.introText}`}>
            {page.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.introMedia}>
            <Image
              src={serviceImages[service]}
              alt=""
              fill
              sizes="(min-width: 60em) 40vw, 100vw"
              priority
            />
          </div>
        </div>
      </Section>

      {service === "digital-marketing" && <AiVisibility locale={locale} />}

      {service === "translation" && (
        <Section tinted title={shared.specTitle} intro={shared.specIntro}>
          <CardGrid columns={3}>
            {specializations.map((spec, i) => (
              <Card
                key={spec.slug}
                title={t.cards.specializations[i]?.title ?? spec.title}
                href={spec.href}
                image={specializationImages[spec.slug]}
              >
                {t.cards.specializations[i]?.summary ?? spec.summary}
              </Card>
            ))}
            {shared.extraSpecializations.map((spec) => (
              <Card key={spec.title} title={spec.title} image={spec.image} href={spec.href}>
                {spec.summary}
              </Card>
            ))}
          </CardGrid>
        </Section>
      )}

      {service === "translation" && (
        <Section title={PAIRS[locale as Locale].title} intro={PAIRS[locale as Locale].intro}>
          <CardGrid columns={3}>
            {PAIRS[locale as Locale].cards.map((card) => (
              <Card key={card.href} title={card.title} href={card.href} image={card.image}>
                {card.text}
              </Card>
            ))}
          </CardGrid>
        </Section>
      )}

      <Section>
        <div className={styles.details}>
          {getServiceDetails(locale)[service].map((block) => (
            <div key={block.title} className={styles.detail}>
              <h2 className={styles.detailTitle}>{block.title}</h2>
              <p>{block.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={page.includedTitle ?? shared.includedTitle}>
        <ul className={styles.included}>
          {page.included.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {service === "translation" && <Testimonials locale={locale} />}

      <RelatedGuides locale={locale} clusters={serviceClusters[service]} />

      {getFaqs(locale)[service] && (
        <Faq title={getFaqs(locale).title} items={getFaqs(locale)[service] ?? []} tinted />
      )}

      {service === "editing" ? (
        // Editing page: the quote form itself, with the service pre-selected.
        <Section title={page.ctaTitle} intro={page.ctaDescription} narrow>
          <QuoteForm
            labels={t.form}
            locale={locale}
            defaultService={page.title}
            specializationOptions={[
              ...t.cards.specializations.map((s) => s.title),
              ...shared.extraSpecializations.map((s) => s.title),
            ]}
            serviceOptions={serviceSlugs.map((slug) => pages[slug].title)}
          />
        </Section>
      ) : (
        <CTA
          title={page.ctaTitle}
          description={page.ctaDescription}
          primary={{ label: t.common.letsTalk, href: routes.contact }}
          secondary={{ label: t.common.viewServices, href: routes.services }}
        />
      )}
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="m7.5 12.5 3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
