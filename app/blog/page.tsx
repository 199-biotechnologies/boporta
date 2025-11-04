import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Legal Insights Blog | Family Law & Criminal Defense | Bo Porta",
  description: "Strategic insights on family law and criminal defense from 25+ years of trial experience. Miami attorney Bo Porta on custody, divorce, criminal charges.",
  alternates: { canonical: 'https://bolivarporta.com/blog' },
};

const blogPosts = [
  {
    slug: "protecting-your-rights-criminal-defense-lawyer",
    title: "Protecting Your Rights: Finding the Best Criminal Defense Lawyer",
    excerpt: "Criminal charges in domestic disputes require specialized defense. Six critical factors when choosing representation—because the wrong attorney costs more than money.",
    category: "Criminal Defense",
    date: "May 9, 2024",
    readTime: "5 min read",
  },
  {
    slug: "navigating-divorce-right-lawyer-miami",
    title: "Navigating Divorce: Finding the Right Lawyer in Miami, Florida",
    excerpt: "Divorce ends marriages. Poor representation extends damage for years. Six essential considerations when selecting Miami family law counsel—from credentials to compatibility.",
    category: "Family Law",
    date: "October 3, 2025",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[400px] md:min-h-[500px] flex items-center bg-midnight text-bone">
        <div className="container-custom max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              LEGAL INSIGHTS
            </h1>
            <p className="font-body text-xl md:text-2xl text-bone/80 leading-relaxed max-w-3xl mx-auto">
              Strategic perspectives from 25+ years defending families and freedom in South Florida courts.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-bone">
        <div className="container-custom max-w-5xl">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 100}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="group border border-titanium/20 bg-white p-8 md:p-12 transition-all duration-300 hover:border-crimson/40 hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-sans text-xs uppercase tracking-wider text-crimson">
                        {post.category}
                      </span>
                      <span className="text-titanium/40">•</span>
                      <span className="font-sans text-xs uppercase tracking-wider text-titanium/60">
                        {post.date}
                      </span>
                      <span className="text-titanium/40">•</span>
                      <span className="font-sans text-xs uppercase tracking-wider text-titanium/60">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-crimson transition-colors">
                      {post.title}
                    </h2>

                    <p className="font-body text-lg text-midnight/80 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 font-sans text-sm uppercase tracking-wider text-crimson group-hover:gap-4 transition-all">
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </article>
                </Link>
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
              Your Case Requires More Than Articles
            </h2>
            <p className="font-body text-xl text-bone/80 mb-12 leading-relaxed">
              General information informs. Specific strategy wins. Discuss your case with an attorney who's tried hundreds.
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
