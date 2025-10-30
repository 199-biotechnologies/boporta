import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-midnight">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/portrait-bo-porta.webp"
            alt="Bo Porta"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container-custom text-center text-bone">
          {/* Logo */}
          <div className="mb-16 animate-fade-in">
            <h1 className="font-display text-6xl md:text-7xl font-black tracking-[0.15em] mb-2 text-bone">
              B<span className="inline-block w-px h-20 bg-bone mx-4 align-middle"></span>P
            </h1>
            <div className="text-sm md:text-base font-sans uppercase tracking-[0.2em] text-bone/60">
              Trial Attorney
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-bone animate-fade-in-delay-1">
            FAMILY<span className="inline-block w-px h-16 md:h-20 bg-bone/80 mx-6 align-middle"></span>CRIMINAL
          </h2>

          <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-bone/90 animate-fade-in-delay-2">
            Two worlds collide.<br />
            One lawyer who operates in both.
          </p>

          <div className="font-sans text-sm md:text-base uppercase tracking-[0.15em] mb-12 text-bone/60 animate-fade-in-delay-3">
            Miami, Florida <span className="mx-3">|</span> 25 Years
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-4">
            <a href="tel:3053715060" className="btn-primary group">
              <span className="relative">Consultation</span>
            </a>
            <a href="tel:3053715060" className="btn-secondary group">
              <span className="relative">(305) 371-5060</span>
            </a>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-16 bg-midnight border-t border-bone/10">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {/* Florida Bar */}
              <div className="group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-crimson/40 transition-all duration-300 group-hover:border-crimson group-hover:scale-110">
                  <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-bone mb-1">Florida Bar</div>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">Licensed 1996</div>
              </div>

              {/* Federal Court */}
              <div className="group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-crimson/40 transition-all duration-300 group-hover:border-crimson group-hover:scale-110">
                  <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-bone mb-1">Federal Court</div>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">Southern District FL</div>
              </div>

              {/* Tulane JD */}
              <div className="group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-crimson/40 transition-all duration-300 group-hover:border-crimson group-hover:scale-110">
                  <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-bone mb-1">Tulane JD</div>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">Law School 1996</div>
              </div>

              {/* 25+ Years */}
              <div className="group">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border-2 border-crimson/40 transition-all duration-300 group-hover:border-crimson group-hover:scale-110">
                  <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="font-display text-xl font-bold text-bone mb-1">25+ Years</div>
                <div className="font-sans text-xs uppercase tracking-wider text-bone/60">Trial Experience</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Practices Section */}
      <section className="section-padding bg-bone">
        <div className="container-custom">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Two Practices. One Standard.
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 md:gap-0">
            {/* Family Law */}
            <ScrollReveal delay={100}>
              <div className="md:pr-12 md:border-r md:border-titanium transition-all duration-300 hover:translate-x-[-4px]">
                <h4 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold">
                  FAMILY LAW
                </h4>
                <p className="font-body text-lg md:text-xl leading-relaxed mb-6 text-midnight/80">
                  Custody. Assets. Future. Your family's foundation under attack requires precision, strategy, and resolve.
                </p>
                <p className="font-body text-lg md:text-xl font-semibold text-midnight">
                  I protect what matters most.
                </p>
              </div>
            </ScrollReveal>

            {/* Criminal Defense */}
            <ScrollReveal delay={200}>
              <div className="md:pl-12 transition-all duration-300 hover:translate-x-[4px]">
                <h4 className="font-display text-2xl md:text-3xl font-bold mb-6 text-steel">
                  CRIMINAL DEFENSE
                </h4>
                <p className="font-body text-lg md:text-xl leading-relaxed mb-6 text-midnight/80">
                  Your freedom. Your name. Your life as you know it. Charges don't disappear by hoping. They end through preparation and execution.
                </p>
                <p className="font-body text-lg md:text-xl font-semibold text-midnight">
                  I end what shouldn't begin.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Trial */}
          <ScrollReveal delay={300}>
            <div className="mt-20 pt-20 border-t border-titanium/30 text-center max-w-4xl mx-auto">
              <h4 className="font-display text-2xl md:text-3xl font-bold mb-6">
                TRIAL
              </h4>
              <p className="font-body text-lg md:text-xl leading-relaxed text-midnight/80">
                The courtroom is where preparation meets consequence. 25 years. I know what the other side doesn't.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              Outcomes Speak
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Case 1 */}
            <ScrollReveal delay={100}>
              <div className="border border-titanium/40 p-8 transition-all duration-300 hover:border-crimson/60 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(139,0,0,0.2)] group">
                <div className="font-display text-4xl font-bold text-crimson mb-4 transition-transform duration-300 group-hover:scale-110">
                  $2.1M
                </div>
                <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm text-bone/70">
                  High-Net-Worth Family Case
                </h5>
                <p className="font-body text-base leading-relaxed text-bone/80">
                  Marital assets protected. Full custody secured. Opposition learned the cost of underestimation.
                </p>
              </div>
            </ScrollReveal>

            {/* Case 2 */}
            <ScrollReveal delay={200}>
              <div className="border border-titanium/40 p-8 transition-all duration-300 hover:border-crimson/60 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(139,0,0,0.2)] group">
                <div className="font-display text-4xl font-bold text-crimson mb-4 transition-transform duration-300 group-hover:scale-110">
                  Full Recovery
                </div>
                <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm text-bone/70">
                  Faena House Litigation
                </h5>
                <p className="font-body text-base leading-relaxed text-bone/80">
                  Construction defect case. Client made whole. The other side's attorneys are no longer returning calls.
                </p>
              </div>
            </ScrollReveal>

            {/* Case 3 */}
            <ScrollReveal delay={300}>
              <div className="border border-titanium/40 p-8 transition-all duration-300 hover:border-crimson/60 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(139,0,0,0.2)] group">
                <div className="font-display text-4xl font-bold text-crimson mb-4 transition-transform duration-300 group-hover:scale-110">
                  Dismissed
                </div>
                <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm text-bone/70">
                  Criminal Defense - Domestic Violence
                </h5>
                <p className="font-body text-base leading-relaxed text-bone/80">
                  Charges withdrawn. Record clean. Client's freedom intact. The prosecution knew they couldn't prove what wasn't true.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="section-padding bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
              The Approach
            </h3>
          </ScrollReveal>

          <div className="space-y-16">
            <ScrollReveal delay={100}>
              <div className="group">
                <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-crimson">
                  Consultation
                </h4>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  You speak. I listen. We identify what must happen. No false promises. Only realistic paths to winning.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="group">
                <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-crimson">
                  Strategy
                </h4>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  Every case has a pressure point. I find it. I apply force. They fold or we proceed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="group">
                <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-crimson">
                  Execution
                </h4>
                <p className="font-body text-lg leading-relaxed text-midnight/80">
                  Negotiation when leverage exists. Trial when it doesn't. Either way, you're protected.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom max-w-4xl text-center">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-12 uppercase tracking-wide">
              Why Experience Matters
            </h3>
          </ScrollReveal>

          <div className="space-y-8 font-body text-lg md:text-xl leading-relaxed">
            <ScrollReveal delay={100}>
              <p className="text-bone/80">
                25 years means I've seen the move your opponent's attorney thinks is clever.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-bone/80">
                25 years means I know which judge responds to which argument.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-bone/80">
                25 years means when we walk into court, they know who's across the table.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-2xl font-semibold pt-8 text-bone">
                Preparation isn't everything. It's the only thing.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-bone">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wide">
              The Clock Is Running
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center mb-16 font-body text-lg md:text-xl leading-relaxed space-y-4 text-midnight/80">
              <p>Your spouse retained counsel.</p>
              <p>The prosecution filed charges.</p>
              <p>Their timeline began.</p>
              <p className="text-2xl font-bold pt-4 text-midnight">When does yours?</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-midnight text-bone p-12 mb-12 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(10,25,41,0.3)]">
              <div className="text-center mb-8">
                <div className="font-display text-2xl font-bold mb-2">BO PORTA</div>
                <div className="font-sans text-sm uppercase tracking-wider text-bone/60">
                  Family & Criminal Defense Trial Lawyer
                </div>
              </div>

              <div className="text-center font-body space-y-2 mb-8 text-bone/80">
                <p>2000 S. Dixie Hwy, Suite 108</p>
                <p>Miami, Florida 33133</p>
              </div>

              <div className="text-center mb-12">
                <a
                  href="tel:3053715060"
                  className="font-display text-4xl md:text-5xl font-bold text-crimson hover:text-crimson/80 transition-all duration-300 hover:tracking-wider inline-block"
                >
                  (305) 371-5060
                </a>
              </div>

              <div className="text-center">
                <a
                  href="mailto:info@boporta.com"
                  className="font-sans text-lg text-bone/60 hover:text-bone transition-colors duration-300"
                >
                  info@boporta.com
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={300}>
            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="group">
                <label className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-2 transition-colors duration-300 group-focus-within:text-crimson">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-titanium/40 p-4 font-body text-midnight focus:outline-none focus:border-2 focus:border-crimson transition-all duration-300 hover:border-titanium"
                  required
                />
              </div>

              <div className="group">
                <label className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-2 transition-colors duration-300 group-focus-within:text-crimson">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-white border border-titanium/40 p-4 font-body text-midnight focus:outline-none focus:border-2 focus:border-crimson transition-all duration-300 hover:border-titanium"
                  required
                />
              </div>

              <div className="group">
                <label className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-2 transition-colors duration-300 group-focus-within:text-crimson">
                  What happened?
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-white border border-titanium/40 p-4 font-body text-midnight focus:outline-none focus:border-2 focus:border-crimson transition-all duration-300 resize-none hover:border-titanium"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full group">
                <span className="relative">Begin</span>
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight text-bone py-16">
        <div className="container-custom text-center font-sans text-sm">
          <div className="mb-4">
            <span className="font-display text-xl font-bold">B<span className="inline-block w-px h-6 bg-bone mx-2 align-middle"></span>P</span>
          </div>
          <p className="text-titanium">
            Licensed Florida Bar | Trial Attorney | Family Law | Criminal Defense
          </p>
          <p className="text-titanium mt-2">
            1999–2025
          </p>
          <p className="text-titanium mt-4 text-xs">
            Appointments by arrangement only
          </p>
        </div>
      </footer>
    </main>
  );
}
