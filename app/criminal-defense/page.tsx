import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import SchemaMarkup from "../components/SchemaMarkup";
import PhoneLink from "../components/PhoneLink";

export const metadata = {
  title: "Criminal Defense Lawyer Miami | DUI, Domestic Violence | Bo Porta",
  description: "Aggressive Miami criminal defense attorney. DUI, domestic violence, drug offenses, white collar crime. Former public defender. 25 years trial experience.",
  alternates: { canonical: 'https://bolivarporta.com/criminal-defense' },
};

export default function CriminalDefensePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Criminal Defense Attorney Services',
    description: 'Comprehensive criminal defense representation including DUI, domestic violence, drug offenses, white collar crime, and federal court defense in Miami, Florida.',
    serviceType: 'Criminal Defense Attorney',
    provider: {
      '@type': 'Attorney',
      name: 'Bolívar C. Porta',
      telephone: '+1-305-371-5060',
      email: 'info@boporta.com',
      url: 'https://bolivarporta.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2000 S Dixie Highway, Suite 108',
        addressLocality: 'Miami',
        addressRegion: 'FL',
        postalCode: '33133',
        addressCountry: 'US'
      }
    },
    areaServed: [
      { '@type': 'City', name: 'Miami' },
      { '@type': 'AdministrativeArea', name: 'Miami-Dade County' },
      { '@type': 'State', name: 'Florida' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Criminal Defense Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DUI Defense',
            description: 'DUI defense including breathalyzer challenges and license suspension hearings'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Domestic Violence Defense',
            description: 'Defense against domestic violence charges and false accusations'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drug Offense Defense',
            description: 'Defense for possession, trafficking, and drug-related charges'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Federal Court Defense',
            description: 'Federal criminal defense in U.S. District Court'
          }
        }
      ]
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://bolivarporta.com/criminal-defense',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+1-305-371-5060',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      }
    }
  };
  return (
    <main id="main-content" className="min-h-screen">
      <SchemaMarkup schema={serviceSchema} />
      {/* Hero */}
      <section className="min-h-[500px] md:min-h-[600px] flex items-center bg-midnight text-bone">
        <div className="container-custom max-w-4xl text-center">
          <ScrollReveal>
            <div className="inline-block mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative animate-hero-icon">
                <Image
                  src="/criminal-law.svg"
                  alt="Criminal Defense"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              CRIMINAL DEFENSE
            </h1>
            <p className="font-body text-xl md:text-2xl text-bone/80 leading-relaxed max-w-3xl mx-auto">
              Your freedom. Your name. Your life. Charges end through preparation, not hope.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-custom max-w-5xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Defense Practice Areas
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Domestic Violence",
                description: "Battery, assault, violation of injunctions. False accusations during divorce. Cross-examination of alleged victims. Impeachment evidence.",
              },
              {
                title: "DUI & Traffic Violations",
                description: "Field sobriety tests. Breathalyzer challenges. License suspension hearings. CDL defense. Multiple offenses.",
              },
              {
                title: "Drug Offenses",
                description: "Possession, trafficking, distribution. Search and seizure violations. Confidential informant issues. Prescription fraud.",
              },
              {
                title: "White Collar Crime",
                description: "Fraud, embezzlement, money laundering. Securities violations. Tax evasion. Federal court defense.",
              },
              {
                title: "Violent Crimes",
                description: "Assault, battery, aggravated offenses. Self-defense claims. Witness credibility attacks. Forensic evidence challenges.",
              },
              {
                title: "Federal Court Defense",
                description: "U.S. District Court Southern District of Florida. Federal sentencing guidelines. Cooperation agreements. Appeal practice.",
              },
              {
                title: "Expungement & Sealing",
                description: "Record clearing. Eligibility determination. Post-conviction relief. Restoration of rights.",
              },
              {
                title: "Juvenile Defense",
                description: "Delinquency proceedings. Diversion programs. Sealing of juvenile records. Status offenses.",
              },
            ].map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 50}>
                <div className="group">
                  <h3 className="font-display text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-steel">
                    {service.title}
                  </h3>
                  <p className="font-body text-midnight/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Former Public Defender Advantage */}
      <section className="py-24 md:py-32 bg-midnight text-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              The Former Public Defender Advantage
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={100}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-steel">
                  I KNOW HOW PROSECUTORS THINK
                </h3>
                <p className="font-body text-lg text-bone/80 leading-relaxed">
                  As a Specially Appointed Public Defender for Miami-Dade County (1997–2006), I defended hundreds of criminal cases. I know prosecution strategies, pressure tactics, and which cases they'll actually take to trial. This insider knowledge is your advantage.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-steel">
                  TRIAL EXPERIENCE MATTERS
                </h3>
                <p className="font-body text-lg text-bone/80 leading-relaxed">
                  Most criminal cases never go to trial—because most defense attorneys avoid trial. Prosecutors know this. When they know your attorney won't fight, you lose negotiating leverage. I've tried cases for 25 years. They know I'll go to trial. That changes negotiations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-steel">
                  CONSTITUTIONAL RIGHTS VIOLATIONS
                </h3>
                <p className="font-body text-lg text-bone/80 leading-relaxed">
                  Illegal searches. Miranda violations. Coerced confessions. Due process failures. Police and prosecutors cut corners. I file motions to suppress. Evidence gets excluded. Cases get dismissed. Your constitutional rights matter.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-steel">
                  BOTH STATE AND FEDERAL COURT
                </h3>
                <p className="font-body text-lg text-bone/80 leading-relaxed">
                  Licensed in U.S. District Court, Southern District of Florida. Federal charges carry severe mandatory minimums. Federal sentencing guidelines require specialized knowledge. Federal prosecutors are highly trained. You need an attorney with federal experience.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What To Do If Arrested */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              If You're Arrested
            </h2>
          </ScrollReveal>

          <div className="bg-midnight text-bone p-8 md:p-12 mb-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-crimson flex items-center justify-center font-display text-2xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-crimson">REMAIN SILENT</h3>
                  <p className="font-body text-bone/80 leading-relaxed">
                    "I want a lawyer." Say nothing else. Not your side of the story. Not "I didn't do it." Nothing. Everything you say will be used against you. Silence cannot.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-crimson flex items-center justify-center font-display text-2xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-crimson">DO NOT CONSENT TO SEARCHES</h3>
                  <p className="font-body text-bone/80 leading-relaxed">
                    "I do not consent to searches." If they had probable cause, they wouldn't ask. Your consent waives Fourth Amendment protection. Never consent.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-crimson flex items-center justify-center font-display text-2xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-crimson">CALL IMMEDIATELY</h3>
                  <p className="font-body text-bone/80 leading-relaxed">
                    (305) 371-5060. Prosecution starts building their case the moment you're arrested. Every hour you wait gives them an advantage. Call now.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-crimson flex items-center justify-center font-display text-2xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-crimson">DO NOT TALK TO ANYONE</h3>
                  <p className="font-body text-bone/80 leading-relaxed">
                    Not cellmates. Not jail staff. Not family on recorded lines. Not "friends" who might testify. Only your attorney. Attorney-client privilege protects our conversations. Nothing else does.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center">
              <p className="font-display text-2xl font-bold mb-4 text-crimson">
                Police will lie. "It'll be better if you cooperate." It won't.
              </p>
              <p className="font-body text-lg text-midnight/80">
                Cooperation means confession. Let your attorney negotiate cooperation if it benefits you. Never do it without counsel.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-midnight text-bone">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              The Prosecution Has Already Started
            </h2>
            <p className="font-body text-xl text-bone/80 mb-12 leading-relaxed">
              Every hour you wait, they build their case. Evidence disappears. Witnesses forget. Rights get waived. Call now.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <PhoneLink className="btn-primary">
                Call (305) 371-5060
              </PhoneLink>
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
