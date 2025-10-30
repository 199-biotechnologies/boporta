'use client';

import { useState } from 'react';
import ScrollReveal from "../components/ScrollReveal";
import SchemaMarkup from "../components/SchemaMarkup";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does a divorce cost in Miami?",
      answer: "Cost depends on complexity and conflict level. Uncontested divorces with agreed terms cost less than high-conflict cases requiring extensive discovery, depositions, and trial. Factors include: contested custody, complex assets, spousal support disputes, and domestic violence allegations. Initial consultation provides realistic cost assessment based on your specific situation."
    },
    {
      question: "How long does a Florida divorce take?",
      answer: "Florida law requires a minimum 20-day waiting period after filing. Uncontested divorces with full agreement can finalize in 1-2 months. Contested cases typically take 6-18 months, depending on court calendar, discovery disputes, and settlement negotiations. High-conflict cases with custody battles or complex assets may extend longer."
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
      answer: "Florida uses statutory guidelines based on both parents' combined net income, number of children, and overnight timesharing percentage. The court considers healthcare costs, daycare expenses, and other factors. Deviation from guidelines requires specific justification. Income includes salary, bonuses, commissions, rental income, and other sources. Intentional unemployment or underemployment can be imputed."
    },
    {
      question: "What should I do immediately after being arrested?",
      answer: "Remain silent. Say only 'I want a lawyer.' Do not explain, justify, or tell your side. Everything you say will be used against you. Do not consent to searches. Do not waive rights. Call (305) 371-5060 immediately. Do not discuss the case with anyone except your attorney—not cellmates, not family on recorded jail lines, not friends. Only attorney-client conversations are protected."
    },
    {
      question: "Will I go to jail for a first-time DUI in Florida?",
      answer: "First-time DUI without aggravating factors (high BAC, accident, injury, minor in vehicle) typically does not result in jail time if properly defended. Consequences include probation, fines, license suspension, DUI school, community service, and ignition interlock device. However, aggravating factors or prior offenses increase jail likelihood. Immediate attorney consultation protects your rights and license."
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
    <main className="min-h-screen">
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
      <section className="py-20 md:py-28 bg-bone">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 30}>
                <div className="border border-titanium/20 bg-white">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-bone/50 transition-colors"
                  >
                    <h3 className="font-display text-lg md:text-xl font-bold flex-1">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 font-body text-midnight/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-midnight text-bone">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Still Have Questions?
            </h2>
            <p className="font-body text-xl text-bone/80 mb-12 leading-relaxed">
              Every case is unique. Get answers specific to your situation in a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:3053715060" className="btn-primary">
                Call (305) 371-5060
              </a>
              <a href="/#contact" className="btn-secondary">
                Contact Form
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
