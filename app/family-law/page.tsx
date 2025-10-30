import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Family Law Attorney Miami | Divorce, Custody, Support | Bo Porta",
  description: "Experienced Miami family law attorney. Divorce, child custody, timesharing, alimony, property division. 25 years protecting families.",
};

export default function FamilyLawPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[500px] md:min-h-[600px] flex items-center bg-midnight text-bone">
        <div className="container-custom max-w-4xl text-center">
          <ScrollReveal>
            <div className="inline-block mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative">
                <Image
                  src="/family-law.svg"
                  alt="Family Law"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              FAMILY LAW
            </h1>
            <p className="font-body text-xl md:text-2xl text-bone/80 leading-relaxed max-w-3xl mx-auto">
              When your family's foundation faces attack, precision wins.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-custom max-w-5xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Practice Areas
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Divorce & Dissolution",
                description: "Contested and uncontested divorce. Property division. Marital asset protection. Strategic dissolution planning.",
              },
              {
                title: "Child Custody & Timesharing",
                description: "Parental responsibility. Time-sharing schedules. Relocation cases. Emergency custody motions.",
              },
              {
                title: "Child Support",
                description: "Establishment, modification, enforcement. Income calculations. Deviation arguments. Arrears collection.",
              },
              {
                title: "Alimony & Spousal Support",
                description: "Permanent, bridge-the-gap, rehabilitative, durational. Modification. Termination. Enforcement.",
              },
              {
                title: "Property Division",
                description: "Equitable distribution. Marital vs. separate property. Business valuation. Complex asset division.",
              },
              {
                title: "Prenuptial & Postnuptial Agreements",
                description: "Asset protection. Estate planning integration. Contract negotiation. Enforcement defense.",
              },
              {
                title: "Modifications & Contempt",
                description: "Change in circumstances. Income adjustments. Relocation modifications. Enforcement proceedings.",
              },
              {
                title: "Domestic Violence Injunctions",
                description: "Defense against false allegations. Pursuit when necessary. Impact on custody and divorce.",
              },
              {
                title: "Grandparents' Rights",
                description: "Visitation petitions. Custody in certain circumstances. Third-party intervention.",
              },
              {
                title: "Same-Sex Family Law",
                description: "Marriage, adoption, parentage rights. Unique legal considerations for LGBTQ+ families.",
              },
            ].map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 50}>
                <div className="group">
                  <h3 className="font-display text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-gold">
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

      {/* The Difference */}
      <section className="py-24 md:py-32 bg-midnight text-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Why Experience Matters
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={100}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-gold">
                  HIGH-CONFLICT DIVORCE
                </h3>
                <p className="font-body text-lg text-bone/80 leading-relaxed">
                  When spouses weaponize the system—false domestic violence allegations, hidden assets, parental alienation—you need an attorney who's seen every tactic. 25 years means I know what's coming before it arrives.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-gold">
                  COMPLEX ASSET DIVISION
                </h3>
                <p className="font-body text-lg text-bone/80 leading-relaxed">
                  High-net-worth divorce requires forensic analysis. Business interests, offshore accounts, retirement assets, real estate portfolios—opposition hides what they can. I find what they don't want found.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-gold">
                  CUSTODY BATTLES
                </h3>
                <p className="font-body text-lg text-bone/80 leading-relaxed">
                  Florida courts prioritize the child's best interests. Judges have seen every argument. What matters is preparation, evidence, and knowing which judge responds to which presentation. Experience wins custody cases.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-gold">
                  DUAL PRACTICE ADVANTAGE
                </h3>
                <p className="font-body text-lg text-bone/80 leading-relaxed">
                  Domestic violence allegations often arise during divorce. My criminal defense background allows me to defend you in both courts simultaneously—protecting your freedom AND your custody rights.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              The Process
            </h2>
          </ScrollReveal>

          <div className="space-y-16">
            <ScrollReveal delay={100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center font-display text-2xl font-bold text-midnight">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Initial Consultation</h3>
                  <p className="font-body text-midnight/80 leading-relaxed">
                    We discuss your situation, goals, and opposition strategy. I provide realistic assessment of outcomes, timeline, and costs. No false promises.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center font-display text-2xl font-bold text-midnight">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Investigation & Discovery</h3>
                  <p className="font-body text-midnight/80 leading-relaxed">
                    Financial records, communications, witnesses. Opposition will hide what damages their case. We find it through formal discovery, subpoenas, and forensic analysis.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center font-display text-2xl font-bold text-midnight">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Strategic Positioning</h3>
                  <p className="font-body text-midnight/80 leading-relaxed">
                    Mediation, settlement negotiations, or trial preparation. Each case has leverage points. When we have it, we negotiate. When they won't settle reasonably, we prepare for trial.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center font-display text-2xl font-bold text-midnight">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Resolution</h3>
                  <p className="font-body text-midnight/80 leading-relaxed">
                    Settlement or trial. Either path, you're protected. My preparation ensures opposition knows what they face if we proceed to trial—often leading to better settlements.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-midnight text-bone">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Your Family Deserves Experienced Protection
            </h2>
            <p className="font-body text-xl text-bone/80 mb-12 leading-relaxed">
              Custody, assets, your children's future. The other side retained counsel. When do you?
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
