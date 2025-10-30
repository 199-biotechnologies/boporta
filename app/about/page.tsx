import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "About Bo Porta | Miami Trial Attorney",
  description: "Learn about Bolívar C. Porta, experienced Miami trial attorney with 25+ years in family law and criminal defense.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-midnight text-bone">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                  BOLÍVAR C. PORTA
                </h1>
                <div className="font-sans text-base text-bone/70 mb-2">(Bo Porta)</div>
                <div className="font-sans text-lg uppercase tracking-wider text-bone/60 mb-8">
                  Trial Attorney | Miami, Florida
                </div>
                <p className="font-body text-xl leading-relaxed text-bone/80 mb-6">
                  25+ years of dedicated advocacy in Florida's most challenging family law and criminal defense cases.
                </p>
                <p className="font-body text-lg leading-relaxed text-bone/70">
                  Florida Bar Member Since 1996<br />
                  U.S. District Court, Southern District of Florida<br />
                  Tulane University Law School, J.D.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-crimson/20 translate-x-4 translate-y-4"></div>
                <Image
                  src="/portrait-bo-porta.webp"
                  alt="Bolivar C. Porta"
                  width={315}
                  height={420}
                  className="relative z-10 w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Experience & Expertise
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={100}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-crimson">
                  DUAL PRACTICE FOCUS
                </h3>
                <p className="font-body text-lg leading-relaxed text-midnight/80 mb-4">
                  Attorney Porta's practice encompasses both family law and criminal defense—a unique combination that provides strategic advantages when cases overlap. His experience representing clients who face domestic violence allegations while navigating divorce proceedings gives him insight few attorneys possess.
                </p>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  This cross-disciplinary expertise allows him to protect clients' rights in both criminal and family court settings simultaneously, ensuring comprehensive legal protection.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-crimson">
                  TRIAL EXPERIENCE
                </h3>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  Over 25 years of courtroom advocacy, including bench trials, jury trials, and adversarial evidentiary hearings across South Florida. Attorney Porta has represented clients in both state and federal courts, handling complex cases involving financial misconduct, controlled substances, violent crimes, high-net-worth divorce, and contested custody matters.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-crimson">
                  FORMER PUBLIC DEFENDER
                </h3>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  As a Specially Appointed Public Defender for Miami-Dade County (1997–2006), Attorney Porta gained invaluable trial experience defending clients facing serious criminal charges. This experience refined his courtroom skills and deepened his understanding of prosecution strategies and courtroom dynamics.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-24 md:py-32 bg-midnight text-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Education & Credentials
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal delay={100}>
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-bone/60 mb-2">EDUCATION</h3>
                <ul className="space-y-4 font-body text-bone/80">
                  <li>
                    <div className="font-semibold text-bone">Tulane University Law School</div>
                    <div>J.D., 1996</div>
                  </li>
                  <li>
                    <div className="font-semibold text-bone">Tulane University</div>
                    <div>B.A., International Studies, 1993</div>
                  </li>
                  <li>
                    <div className="font-semibold text-bone">Additional Studies</div>
                    <div>Loyola University New Orleans College of Law</div>
                    <div>Cambridge University (Trinity College, UK)</div>
                    <div>Université de Paris (La Sorbonne)</div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-bone/60 mb-2">LICENSES</h3>
                <ul className="space-y-4 font-body text-bone/80 mb-8">
                  <li>
                    <div className="font-semibold text-bone">Florida Bar</div>
                    <div>Member in Good Standing Since 1996</div>
                  </li>
                  <li>
                    <div className="font-semibold text-bone">U.S. District Court</div>
                    <div>Southern District of Florida</div>
                  </li>
                </ul>

                <h3 className="font-sans text-sm uppercase tracking-wider text-bone/60 mb-2">HONORS</h3>
                <ul className="space-y-4 font-body text-bone/80">
                  <li>
                    <div className="font-semibold text-bone">Warren E. Mouledoux Fellowship</div>
                    <div>Legal Aid New Orleans, 1994</div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Professional Experience
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <div className="border-l-2 border-crimson pl-6">
                <div className="font-display text-xl font-bold mb-2">Trial Attorney</div>
                <div className="font-sans text-sm uppercase tracking-wider text-titanium mb-2">Bolivar C. Porta, P.A. | 1998–Present</div>
                <p className="font-body text-midnight/80 leading-relaxed">
                  Independent practice focused on family law and criminal defense throughout South Florida.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="border-l-2 border-crimson pl-6">
                <div className="font-display text-xl font-bold mb-2">Specially Appointed Public Defender</div>
                <div className="font-sans text-sm uppercase tracking-wider text-titanium mb-2">Miami-Dade Public Defender's Office | 1997–2006</div>
                <p className="font-body text-midnight/80 leading-relaxed">
                  Represented indigent defendants in serious criminal cases, gaining extensive trial experience.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-l-2 border-crimson pl-6">
                <div className="font-display text-xl font-bold mb-2">Senior Associate</div>
                <div className="font-sans text-sm uppercase tracking-wider text-titanium mb-2">Multiple Miami-Based Firms | 1998–2003</div>
                <p className="font-body text-midnight/80 leading-relaxed">
                  Developed litigation skills across various practice areas in South Florida legal community.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="border-l-2 border-crimson pl-6">
                <div className="font-display text-xl font-bold mb-2">Associate Attorney</div>
                <div className="font-sans text-sm uppercase tracking-wider text-titanium mb-2">Soven & Wax, P.A. | 1996–1997</div>
                <p className="font-body text-midnight/80 leading-relaxed">
                  Early practice experience at established Miami firm specializing in civil and criminal litigation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="border-l-2 border-crimson pl-6">
                <div className="font-display text-xl font-bold mb-2">Law Clerk</div>
                <div className="font-sans text-sm uppercase tracking-wider text-titanium mb-2">U.S. Magistrate Judge Linnea Johnson | 1996–1997</div>
                <p className="font-body text-midnight/80 leading-relaxed">
                  Federal clerkship providing foundational understanding of federal court procedures and judicial decision-making.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Professional Associations */}
      <section className="py-24 md:py-32 bg-midnight text-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Professional Associations
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-2 gap-8 font-body text-bone/80">
              <ul className="space-y-4">
                <li>• Florida Bar (Family Law Section)</li>
                <li>• Florida Bar (Trial Lawyers Section)</li>
                <li>• Florida Bar (Criminal Law Section)</li>
                <li>• Florida Criminal Defense Lawyers Association</li>
              </ul>
              <ul className="space-y-4">
                <li>• Dade County Bar Association</li>
                <li>• American Bar Association</li>
                <li>• Former Speaker: Tulane Alumni Association (2014)</li>
                <li>• Topic: DUI & Criminal Defense Practice</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-bone">
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Ready to Discuss Your Case?
            </h2>
            <p className="font-body text-xl text-midnight/80 mb-12 leading-relaxed">
              Whether you're facing family law challenges or criminal charges, experience matters. Contact the Law Office of Bolívar C. Porta today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:3053715060" className="btn-primary">
                Call (305) 371-5060
              </a>
              <a href="/#contact" className="btn-secondary !border-midnight !text-midnight hover:!bg-midnight hover:!text-bone">
                Contact Form
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
