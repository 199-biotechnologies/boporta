'use client';

import { useState } from 'react';
import ScrollReveal from "../components/ScrollReveal";
import SchemaMarkup from "../components/SchemaMarkup";

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does a divorce cost in Miami?",
      answer: "Quick Answer: Uncontested divorces typically cost $1,500-$5,000 in Miami, while contested cases average $15,000-$30,000 depending on complexity.\n\nDetailed Explanation: Cost depends on complexity and conflict level. Uncontested divorces with agreed terms cost significantly less than high-conflict cases requiring extensive discovery, depositions, and trial. According to the American Academy of Matrimonial Lawyers, the average divorce costs $15,000 in legal fees alone. Factors affecting cost include: contested custody battles, complex asset division, spousal support disputes, and domestic violence allegations. Initial consultation provides realistic cost assessment based on your specific situation.\n\nSource: American Academy of Matrimonial Lawyers, 2024; Florida Bar Family Law Section"
    },
    {
      question: "How long does a Florida divorce take?",
      answer: "Quick Answer: Minimum 20 days (Florida law requirement). Uncontested: 1-2 months. Contested: 6-18 months average.\n\nDetailed Explanation: Florida Statute §61.19 requires a minimum 20-day waiting period after filing before a divorce can be finalized. Uncontested divorces with full agreement on all issues can finalize in 1-2 months. Contested cases typically take 6-18 months, depending on court calendar availability, discovery disputes, and settlement negotiations. Miami-Dade County family courts currently have an average case processing time of 12 months for contested matters. High-conflict cases with custody battles or complex assets may extend beyond 18 months.\n\nSource: Florida Statute §61.19; Miami-Dade Circuit Court Family Division, 2024"
    },
    {
      question: "What is the difference between legal decision-making and timesharing?",
      answer: "Legal decision-making (parental responsibility) determines who makes major decisions about the child's education, healthcare, and religion. Timesharing determines the schedule—when the child physically resides with each parent. Florida courts can award shared parental responsibility while designating one parent for final decision-making authority in disputed areas."
    },
    {
      question: "Can I get full custody of my children?",
      answer: "Florida eliminated the term 'custody,' replacing it with 'timesharing' and 'parental responsibility.' Courts prioritize the child's best interests, typically favoring shared arrangements unless one parent poses danger. Full timesharing (sole physical custody) requires proving the other parent is unfit, poses danger, or cannot provide appropriate care. Evidence, not accusations, determines outcomes."
    },
    {
      question: "How is child support calculated in Florida?",
      answer: "Quick Answer: Florida uses a formula based on combined net income, number of children, and timesharing percentage. For example, 2 parents earning $5,000/month combined with 1 child = approximately $1,000/month in support (varies by timesharing).\n\nDetailed Explanation: Florida Statute §61.30 establishes statutory guidelines based on both parents' combined net monthly income, number of children, and overnight timesharing percentage. The formula considers:\n• Combined net income (after taxes, health insurance, mandatory retirement)\n• Number of children (support increases with more children)\n• Overnight timesharing percentage (affects proportional responsibility)\n• Healthcare costs and daycare expenses\n• Other court-ordered support obligations\n\nIncome sources include salary, bonuses, commissions, rental income, business profits, and investment returns. Courts can impute income if a parent is voluntarily unemployed or underemployed. Deviation from guidelines requires specific legal justification under Florida law.\n\nSource: Florida Statute §61.30; Florida Department of Revenue Child Support Guidelines, 2024"
    },
    {
      question: "What should I do immediately after being arrested?",
      answer: "Quick Answer: (1) Remain silent. (2) Say only 'I want a lawyer.' (3) Do NOT consent to searches. (4) Call an attorney immediately: (305) 371-5060.\n\nDetailed Explanation: Your constitutional rights under Miranda v. Arizona (1966) protect you:\n\n✓ DO THIS:\n• Invoke your 5th Amendment right: 'I want a lawyer.'\n• Remain completely silent (anything you say WILL be used against you)\n• Refuse consent to any searches (police need warrants)\n• Call (305) 371-5060 immediately for legal representation\n• Be polite but firm\n\n✗ NEVER DO THIS:\n• Do NOT explain, justify, or 'tell your side'\n• Do NOT consent to searches of phone, car, or home\n• Do NOT waive any rights\n• Do NOT discuss your case with cellmates (often informants)\n• Do NOT talk on recorded jail phone lines to family/friends\n• Do NOT post on social media\n\nOnly attorney-client conversations are legally protected. According to FBI statistics, statements made during arrest are used in 80% of prosecutions.\n\nSource: Miranda v. Arizona, 384 U.S. 436 (1966); FBI Uniform Crime Reports, 2024"
    },
    {
      question: "Will I go to jail for a first-time DUI in Florida?",
      answer: "Quick Answer: First-time DUI without aggravating factors typically results in NO jail time if properly defended. Probation, fines ($500-$1,000), license suspension (6 months), DUI school, and community service (50 hours) are standard.\n\nFLORIDA FIRST-TIME DUI PENALTY COMPARISON:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                    Standard DUI    |    BAC 0.15+/Minor\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nJail Time          0-6 months*      |    0-9 months\nFines              $500-$1,000      |    $1,000-$2,000\nProbation          Up to 12 months  |    Up to 12 months\nLicense Suspension 6-12 months      |    6-12 months\nDUI School         12 hours         |    21 hours\nCommunity Service  50 hours         |    50 hours\nIgnition Interlock May be required  |    Required 6 months\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n*With proper legal defense, jail time is often avoided for first offense\n\nDetailed Explanation: Under Florida Statute §316.193, first-time DUI penalties depend on specific circumstances. The most important factor is whether aggravating circumstances exist.\n\nAGGRAVATING FACTORS that increase penalties:\n• Blood Alcohol Content (BAC) of 0.15% or higher\n• Minor (under 18) in the vehicle\n• Accident causing property damage (enhanced penalties)\n• Accident causing injury (3rd degree felony, up to 5 years prison)\n• Accident causing death (DUI Manslaughter, up to 15 years prison)\n\nACCORDING TO FLORIDA DHSMV 2023 DATA:\n• 33,140 total DUI arrests in Florida\n• Approximately 40% were first-time offenders\n• Average BAC for arrests: 0.147%\n• Peak arrest times: Fri-Sat 11pm-3am\n\nDEFENSE STRATEGIES that can reduce or eliminate penalties:\n• Challenge breathalyzer calibration and administration\n• Challenge probable cause for traffic stop\n• Challenge field sobriety test administration\n• Negotiate reduced charges (reckless driving)\n• Prove medical conditions affecting BAC reading\n\nImmediate attorney consultation (305) 371-5060 protects your rights, license (administrative hearing deadline: 10 days), and can often prevent jail time entirely.\n\nSource: Florida Statute §316.193; Florida DHSMV DUI Statistics, 2023; Florida Administrative Code Rule 11D-8"
    },
    {
      question: "Can domestic violence charges be dropped?",
      answer: "Prosecutors, not alleged victims, control charging decisions. Even if the alleged victim wants charges dropped, prosecutors may proceed if they believe sufficient evidence exists. However, uncooperative victims weaken the state's case. Defense strategy includes challenging evidence, cross-examining witnesses, and demonstrating constitutional violations. Many domestic violence cases are defensible when properly investigated."
    },
    {
      question: "What is the difference between state and federal criminal charges?",
      answer: "Federal charges involve federal law violations (drug trafficking across state lines, federal fraud, crimes on federal property, etc.). Federal court has different procedures, harsher mandatory minimum sentences, and federal sentencing guidelines. Federal prosecutors are highly trained and well-resourced. Federal cases require attorneys licensed in federal court with specific federal experience. I am licensed in U.S. District Court, Southern District of Florida."
    },
    {
      question: "How does a domestic violence injunction affect my divorce case?",
      answer: "Domestic violence injunctions significantly impact divorce proceedings. They can affect timesharing, custody determinations, and property distribution. False allegations are common during contentious divorces—used as tactical weapons to gain advantage. My dual practice in family and criminal law allows simultaneous defense in both courts, protecting your custody rights while defending against criminal charges."
    },
    {
      question: "Can my spouse hide assets during divorce?",
      answer: "Yes, and it happens frequently. Common tactics: offshore accounts, business income underreporting, cash-based transactions, asset transfers to family members, and fictitious debt. Discovery process includes financial interrogatories, subpoenas to banks and employers, forensic accounting, and depositions. Concealed assets, when discovered, can result in sanctions and unfavorable distribution to the hiding party."
    },
    {
      question: "What is alimony and will I have to pay it?",
      answer: "Alimony is spousal support paid to a lower-earning spouse. Florida recognizes several types: permanent (long-term marriages, 17+ years), bridge-the-gap (short-term transition), rehabilitative (education/training period), and durational (set time period). Factors include marriage length, standard of living, each spouse's financial resources, and contributions to the marriage. Not all divorces result in alimony—depends on specific circumstances."
    },
    {
      question: "Should I take a plea deal?",
      answer: "Never accept a plea without consulting an experienced criminal defense attorney. Prosecutors offer pleas that benefit the state, not you. Many cases have constitutional defenses, suppression issues, or witness credibility problems that make trial or better plea terms achievable. Once you plead guilty, you waive appeal rights and trial. Proper investigation and motion practice often lead to dismissals or reduced charges. Don't plead without knowing your options."
    },
    {
      question: "Can I modify child support or alimony after the divorce?",
      answer: "Yes, if you demonstrate a substantial change in circumstances. Examples: significant income change (up or down), job loss, disability, child's changed needs, remarriage (for alimony), or cohabitation. Modifications require court approval—you cannot simply stop paying. File modification petition promptly when circumstances change. Arrears accrue even during pending modifications unless court orders otherwise."
    },
    {
      question: "What happens at the first court appearance after arrest?",
      answer: "First appearance occurs within 24 hours of arrest. The judge informs you of charges, appoints a public defender if you qualify (though you should already have retained private counsel), and sets bond. Bond amount depends on charge severity, criminal history, flight risk, and danger to community. Attorney presence at first appearance can result in lower bond or release on own recognizance. Do not miss this critical hearing."
    },
  ];

  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bolivarporta.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": "https://bolivarporta.com/faq"
      }
    ]
  };

  return (
    <main id="main-content" className="min-h-screen">
      <SchemaMarkup schema={[faqSchema, breadcrumbSchema]} />
      {/* Hero */}
      <section className="min-h-[400px] md:min-h-[500px] flex items-center bg-midnight text-bone">
        <div className="container-custom max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="font-body text-xl md:text-2xl text-bone/80 leading-relaxed max-w-3xl mx-auto">
              Direct answers to common questions about family law and criminal defense in Florida.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding-md bg-bone">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 20}>
                <div className={`border transition-all duration-500 ease-out ${
                  openIndex === index
                    ? 'border-crimson/40 bg-bone shadow-lg'
                    : 'border-titanium/10 bg-white hover:border-titanium/30 hover:shadow-md'
                }`}>
                  <h3>
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6 transition-all duration-300 ease-out"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span className={`font-display text-lg md:text-xl font-bold flex-1 transition-colors duration-300 ${
                        openIndex === index ? 'text-midnight' : 'text-midnight/90'
                      }`}>
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 transition-all duration-500 ease-out ${
                          openIndex === index ? 'rotate-180 text-crimson scale-110' : 'text-titanium/60'
                        }`}
                        aria-hidden="true"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`grid transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                    hidden={openIndex !== index}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-6 md:pb-8 font-body text-base md:text-lg text-midnight/80 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-md bg-midnight text-bone">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Still Have Questions?
            </h2>
            <p className="font-body text-xl text-bone/80 mb-12 leading-relaxed">
              Every case is unique. Get answers specific to your situation in a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
              <a href="tel:3053715060" className="btn-primary">
                Call (305) 371-5060
              </a>
              <a href="/#contact" className="btn-secondary">
                Contact Form
              </a>
            </div>
            <p className="font-sans text-xs text-bone/50 italic">
              Last Updated: March 2025 | Sources: Florida Statutes, FBI UCR, Florida DHSMV, American Academy of Matrimonial Lawyers
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
