import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "Navigating Divorce: Finding the Right Lawyer in Miami | Bo Porta",
  description: "Six essential considerations when selecting Miami divorce attorney. Experience, compatibility, and cost transparency determine whether your divorce protects or damages your future.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-midnight text-bone pt-20 pb-16">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <Link href="/blog" className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider text-bone/60 hover:text-bone transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-xs uppercase tracking-wider text-crimson">
                Family Law
              </span>
              <span className="text-bone/40">•</span>
              <span className="font-sans text-xs uppercase tracking-wider text-bone/60">
                October 3, 2025
              </span>
              <span className="text-bone/40">•</span>
              <span className="font-sans text-xs uppercase tracking-wider text-bone/60">
                6 min read
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Navigating Divorce: Finding the Right Lawyer in Miami, Florida
            </h1>

            <p className="font-body text-xl text-bone/80 leading-relaxed">
              Divorce ends marriages. Poor legal representation extends damage for years through unfavorable custody arrangements, inadequate support, and inequitable asset division.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-bone">
        <div className="container-custom max-w-3xl">
          <article className="font-body text-lg leading-relaxed space-y-8">
            <ScrollReveal>
              <p className="text-midnight/90">
                Selecting the right divorce attorney in Miami requires more than reviewing websites or trusting referrals. Your attorney's competence determines custody outcomes, property distribution, spousal support obligations, and post-divorce financial stability. These six considerations separate competent representation from costly mistakes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-crimson">
                  1. Understand Your Specific Needs
                </h2>
                <p className="text-midnight/80 mb-4">
                  Divorce cases range from uncontested dissolutions with full agreement on all terms to high-conflict litigation involving custody battles, hidden assets, and domestic violence allegations. Your case complexity determines required attorney experience.
                </p>
                <p className="text-midnight/80 mb-4">
                  Uncontested divorces with no children, minimal assets, and mutual agreement require less specialized representation. High-conflict cases with contested custody, complex asset division (businesses, offshore accounts, real estate portfolios), or domestic violence injunctions demand attorneys with extensive trial experience and forensic discovery capabilities.
                </p>
                <p className="text-midnight/80">
                  Identify your priorities: custody protection, asset preservation, minimizing spousal support obligations, or expedited resolution. Different attorneys excel in different areas. Match your needs to attorney strengths.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-crimson">
                  2. Seek Recommendations and Conduct Independent Research
                </h2>
                <p className="text-midnight/80 mb-4">
                  Personal referrals from friends or family who have navigated divorce provide starting points. However, their case circumstances differ from yours. An attorney effective in amicable divorce may lack skills for contested custody litigation.
                </p>
                <p className="text-midnight/80 mb-4">
                  Supplement referrals with Florida Bar directory searches, legal review platforms (Avvo, Martindale-Hubbell), and court record research. Public court files reveal actual litigation results, not marketing claims. Review filed motions, hearing transcripts, and final judgments to assess attorney competence.
                </p>
                <p className="text-midnight/80">
                  Verify Florida Bar membership, disciplinary history, and professional certifications. Board certification in Marital and Family Law from The Florida Bar demonstrates tested expertise through rigorous examination and peer review.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-crimson">
                  3. Evaluate Experience and Local Court Familiarity
                </h2>
                <p className="text-midnight/80 mb-4">
                  Florida family law varies by jurisdiction. Miami-Dade County judges apply different evidentiary standards and have distinct preferences regarding testimony, expert witnesses, and settlement conferences. Attorneys practicing exclusively in Miami-Dade courts understand these nuances.
                </p>
                <p className="text-midnight/80 mb-4">
                  Trial experience matters. Many divorce attorneys avoid trial, pressuring clients to accept unfavorable settlements. Opposing counsel knows which attorneys will capitulate rather than litigate. Attorneys with trial experience negotiate better settlements because opposition knows the alternative is costly litigation.
                </p>
                <p className="text-midnight/80">
                  Ask specific questions: How many family law trials have you conducted? How many before Judge [assigned judge]? What percentage of your practice is family law versus other areas? Years practicing family law specifically in Miami-Dade County? General practice attorneys handling occasional divorces lack specialized expertise.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-crimson">
                  4. Schedule Consultations and Assess Strategy
                </h2>
                <p className="text-midnight/80 mb-4">
                  Most Miami divorce attorneys offer initial consultations—some complimentary, others at reduced rates. Use consultations to evaluate attorney knowledge, strategic thinking, and realistic outcome assessment.
                </p>
                <p className="text-midnight/80 mb-4">
                  Competent attorneys provide honest assessments, not guarantees. If your prospective attorney promises specific custody arrangements or asset distributions before discovery, seek different counsel. Florida divorce outcomes depend on evidence, judicial discretion, and case-specific facts. No attorney controls outcomes.
                </p>
                <p className="text-midnight/80">
                  Discuss preliminary strategy: discovery plans for hidden assets, witness preparation, expert witnesses (forensic accountants, child psychologists, property appraisers), and settlement versus trial approach. Attorneys who cannot articulate clear strategies lack preparation or experience.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-crimson">
                  5. Assess Compatibility and Communication Style
                </h2>
                <p className="text-midnight/80 mb-4">
                  Divorce proceedings span months, sometimes years. You will communicate frequently with your attorney regarding discovery, negotiations, hearings, and strategic decisions. Incompatible communication styles create frustration and misunderstanding.
                </p>
                <p className="text-midnight/80 mb-4">
                  Determine preferred communication methods: email, phone, text, or in-person meetings. Clarify response time expectations and attorney availability. High-volume practices struggle to provide individualized attention. Ask about caseload and whether the attorney or associates handle most communication.
                </p>
                <p className="text-midnight/80">
                  Personality compatibility matters less than professional competence—but chronic communication failures indicate disorganization or overextension. Your attorney should provide regular updates, explain strategic decisions, and respond to substantive questions within reasonable timeframes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-crimson">
                  6. Consider Cost, Fee Structures, and Transparency
                </h2>
                <p className="text-midnight/80 mb-4">
                  Divorce attorney fees vary significantly based on attorney experience, case complexity, and billing structure. Most Miami divorce attorneys charge hourly rates ranging from $250 to $600+ per hour for partners. Some offer flat fees for uncontested divorces or specific services.
                </p>
                <p className="text-midnight/80 mb-4">
                  Retainer agreements should specify: hourly rates for attorneys and associates, billing increments (6-minute, 10-minute, 15-minute), costs excluded from hourly fees (court filing fees, process servers, expert witnesses, depositions, copying), payment schedules, and retainer replenishment requirements.
                </p>
                <p className="text-midnight/80 mb-4">
                  Request detailed monthly billing statements itemizing time entries by task, date, attorney, and time spent. Vague billing descriptions ("legal research," "case preparation") prevent cost verification. Specific entries ("Research Florida case law regarding parental relocation—1.5 hours") enable informed evaluation.
                </p>
                <p className="text-midnight/80">
                  Expensive attorneys are not always better—but experienced specialists command higher rates for valid reasons. Conversely, bargain rates often indicate inexperience or overextended practices. Balance cost against case stakes. Inadequate representation in high-conflict custody cases costs more than higher hourly rates through unfavorable outcomes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="border-t border-titanium/20 pt-8 mt-8">
                <h2 className="font-display text-3xl font-bold mb-4 text-midnight">
                  Your Choice Determines Your Future
                </h2>
                <p className="text-midnight/80 mb-4">
                  Divorce attorney selection is not merely finding someone to file paperwork. Your attorney's competence, experience, and commitment directly affect custody arrangements, financial stability, and post-divorce quality of life.
                </p>
                <p className="text-midnight/80 mb-4">
                  High-conflict divorces involving custody battles, hidden assets, or domestic violence allegations require specialized expertise. General practice attorneys or those primarily handling uncontested cases lack the investigative resources, expert witness relationships, and courtroom experience necessary for complex litigation.
                </p>
                <p className="text-midnight/80 font-semibold">
                  Choose your divorce attorney with the same care you apply to protecting your children, assets, and future. The decision affects all three.
                </p>
              </div>
            </ScrollReveal>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-midnight text-bone">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Facing Divorce or Custody Battle?
            </h2>
            <p className="font-body text-xl text-bone/80 mb-12 leading-relaxed">
              25+ years protecting families in Miami-Dade courts. High-conflict divorce, custody litigation, complex asset division. Schedule confidential consultation.
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
