import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Criminal Defense Lawyer Miami | DUI, Domestic Violence | Bo Porta",
  description: "Aggressive Miami criminal defense attorney. DUI, domestic violence, drug offenses, white collar crime. Former public defender. 25 years trial experience.",
};

export default function CriminalDefensePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom max-w-4xl text-center">
          <ScrollReveal>
            <div className="inline-block mb-8">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-steel">
                <svg className="w-8 h-8 text-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
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
      <section className="section-padding bg-bone">
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
      <section className="section-padding bg-midnight text-bone">
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
      <section className="section-padding bg-bone">
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
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              The Prosecution Has Already Started
            </h2>
            <p className="font-body text-xl text-bone/80 mb-12 leading-relaxed">
              Every hour you wait, they build their case. Evidence disappears. Witnesses forget. Rights get waived. Call now.
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
