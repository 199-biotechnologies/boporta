import Image from "next/image";

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
          <div className="mb-16">
            <h1 className="font-display text-6xl md:text-7xl font-black tracking-[0.15em] mb-2">
              B<span className="inline-block w-px h-20 bg-bone mx-4 align-middle"></span>P
            </h1>
            <div className="text-sm md:text-base font-sans uppercase tracking-[0.2em] text-titanium">
              Trial Attorney
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            FAMILY<span className="inline-block w-px h-16 md:h-20 bg-titanium mx-6 align-middle"></span>CRIMINAL
          </h2>

          <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Two worlds collide.<br />
            One lawyer who operates in both.
          </p>

          <div className="font-sans text-sm md:text-base uppercase tracking-[0.15em] mb-12 text-titanium">
            Miami, Florida <span className="mx-3">|</span> 25 Years
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:3053715060" className="btn-primary">
              Consultation
            </a>
            <a href="tel:3053715060" className="btn-secondary">
              (305) 371-5060
            </a>
          </div>
        </div>
      </section>

      {/* Two Practices Section */}
      <section className="section-padding bg-bone">
        <div className="container-custom">
          <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
            Two Practices. One Standard.
          </h3>

          <div className="grid md:grid-cols-2 gap-16 md:gap-0">
            {/* Family Law */}
            <div className="md:pr-12 md:border-r md:border-titanium">
              <h4 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gold">
                FAMILY LAW
              </h4>
              <p className="font-body text-lg md:text-xl leading-relaxed mb-6">
                Custody. Assets. Future. Your family's foundation under attack requires precision, strategy, and resolve.
              </p>
              <p className="font-body text-lg md:text-xl font-semibold">
                I protect what matters most.
              </p>
            </div>

            {/* Criminal Defense */}
            <div className="md:pl-12">
              <h4 className="font-display text-2xl md:text-3xl font-bold mb-6 text-steel">
                CRIMINAL DEFENSE
              </h4>
              <p className="font-body text-lg md:text-xl leading-relaxed mb-6">
                Your freedom. Your name. Your life as you know it. Charges don't disappear by hoping. They end through preparation and execution.
              </p>
              <p className="font-body text-lg md:text-xl font-semibold">
                I end what shouldn't begin.
              </p>
            </div>
          </div>

          {/* Trial */}
          <div className="mt-20 pt-20 border-t border-titanium text-center max-w-4xl mx-auto">
            <h4 className="font-display text-2xl md:text-3xl font-bold mb-6">
              TRIAL
            </h4>
            <p className="font-body text-lg md:text-xl leading-relaxed">
              The courtroom is where preparation meets consequence. 25 years. I know what the other side doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom">
          <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
            Outcomes Speak
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Case 1 */}
            <div className="border border-titanium p-8">
              <div className="font-display text-3xl font-bold text-crimson mb-4">
                $2.1M
              </div>
              <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm">
                High-Net-Worth Family Case
              </h5>
              <p className="font-body text-base leading-relaxed text-bone/80">
                Marital assets protected. Full custody secured. Opposition learned the cost of underestimation.
              </p>
            </div>

            {/* Case 2 */}
            <div className="border border-titanium p-8">
              <div className="font-display text-3xl font-bold text-crimson mb-4">
                Full Recovery
              </div>
              <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm">
                Faena House Litigation
              </h5>
              <p className="font-body text-base leading-relaxed text-bone/80">
                Construction defect case. Client made whole. The other side's attorneys are no longer returning calls.
              </p>
            </div>

            {/* Case 3 */}
            <div className="border border-titanium p-8">
              <div className="font-display text-3xl font-bold text-crimson mb-4">
                Dismissed
              </div>
              <h5 className="font-sans font-semibold uppercase tracking-wide mb-4 text-sm">
                Criminal Defense - Domestic Violence
              </h5>
              <p className="font-body text-base leading-relaxed text-bone/80">
                Charges withdrawn. Record clean. Client's freedom intact. The prosecution knew they couldn't prove what wasn't true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="section-padding bg-bone">
        <div className="container-custom max-w-4xl">
          <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">
            The Approach
          </h3>

          <div className="space-y-16">
            <div>
              <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide">
                Consultation
              </h4>
              <p className="font-body text-lg leading-relaxed">
                You speak. I listen. We identify what must happen. No false promises. Only realistic paths to winning.
              </p>
            </div>

            <div>
              <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide">
                Strategy
              </h4>
              <p className="font-body text-lg leading-relaxed">
                Every case has a pressure point. I find it. I apply force. They fold or we proceed.
              </p>
            </div>

            <div>
              <h4 className="font-display text-2xl font-bold mb-4 uppercase tracking-wide">
                Execution
              </h4>
              <p className="font-body text-lg leading-relaxed">
                Negotiation when leverage exists. Trial when it doesn't. Either way, you're protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-midnight text-bone">
        <div className="container-custom max-w-4xl text-center">
          <h3 className="font-display text-3xl md:text-5xl font-bold mb-12 uppercase tracking-wide">
            Why Experience Matters
          </h3>

          <div className="space-y-8 font-body text-lg md:text-xl leading-relaxed">
            <p>
              25 years means I've seen the move your opponent's attorney thinks is clever.
            </p>
            <p>
              25 years means I know which judge responds to which argument.
            </p>
            <p>
              25 years means when we walk into court, they know who's across the table.
            </p>
            <p className="text-2xl font-semibold pt-8">
              Preparation isn't everything. It's the only thing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-bone">
        <div className="container-custom max-w-4xl">
          <h3 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wide">
            The Clock Is Running
          </h3>

          <div className="text-center mb-16 font-body text-lg md:text-xl leading-relaxed space-y-4">
            <p>Your spouse retained counsel.</p>
            <p>The prosecution filed charges.</p>
            <p>Their timeline began.</p>
            <p className="text-2xl font-bold pt-4">When does yours?</p>
          </div>

          <div className="bg-midnight text-bone p-12 mb-12">
            <div className="text-center mb-8">
              <div className="font-display text-2xl font-bold mb-2">BO PORTA</div>
              <div className="font-sans text-sm uppercase tracking-wider text-titanium">
                Family & Criminal Defense Trial Lawyer
              </div>
            </div>

            <div className="text-center font-body space-y-2 mb-8">
              <p>2000 S. Dixie Hwy, Suite 108</p>
              <p>Miami, Florida 33133</p>
            </div>

            <div className="text-center mb-12">
              <a
                href="tel:3053715060"
                className="font-display text-4xl md:text-5xl font-bold text-crimson hover:text-crimson/80 transition-colors"
              >
                (305) 371-5060
              </a>
            </div>

            <div className="text-center">
              <a
                href="mailto:info@boporta.com"
                className="font-sans text-lg text-titanium hover:text-bone transition-colors"
              >
                info@boporta.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-bone border border-titanium p-4 font-body text-midnight focus:outline-none focus:border-2 focus:border-crimson transition-all"
                required
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-bone border border-titanium p-4 font-body text-midnight focus:outline-none focus:border-2 focus:border-crimson transition-all"
                required
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-2">
                What happened?
              </label>
              <textarea
                rows={6}
                className="w-full bg-bone border border-titanium p-4 font-body text-midnight focus:outline-none focus:border-2 focus:border-crimson transition-all resize-none"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Begin
            </button>
          </form>
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
