# Bolívar C. Porta, P.A. - Law Firm Website

Professional website for Miami-based trial attorney Bo Porta, specializing in Family Law and Criminal Defense.

**Live Site:** https://bolivarporta.com
**Repository:** https://github.com/199-biotechnologies/boporta

---

## Technology Stack

- **Framework:** Next.js 15.1.6 (App Router) - *Latest stable v15*
- **Language:** TypeScript 5 - *Latest stable*
- **UI Library:** React 19.0.0 - *Latest stable*
- **Styling:** Tailwind CSS 3.4.18 - *Latest v3*
- **Email:** Resend 6.3.0
- **Fonts:** Google Fonts (Playfair Display, Crimson Text, Inter)
- **Deployment:** Vercel (Edge Network)
- **Version Control:** Git + GitHub

### Version Notes

**Why Not Next.js 16 or Tailwind v4?**
- Next.js 16.0.1 is available but recently released (stability concerns)
- Tailwind CSS v4 (4.1.16) has significant breaking changes requiring migration
- Current stack (Next.js 15.1.6 + Tailwind 3.4.18) is production-proven and stable
- Will evaluate upgrading after Next.js 16.1+ and community testing confirms stability

---

## Project Structure

```
legal/
├── app/
│   ├── layout.tsx                  # Root layout with metadata, fonts, navigation
│   ├── page.tsx                    # Homepage with hero, credentials, testimonials
│   ├── globals.css                 # Global styles, Tailwind config, animations
│   ├── opengraph-image.tsx         # Dynamic OG image generator (homepage)
│   ├── robots.ts                   # Dynamic robots.txt
│   ├── sitemap.ts                  # Dynamic XML sitemap
│   ├── manifest.ts                 # PWA manifest
│   │
│   ├── components/
│   │   ├── Navigation.tsx          # Fixed nav with scroll effects, mobile menu
│   │   ├── CallbackWidget.tsx      # Floating contact widget
│   │   ├── ContactForm.tsx         # Contact form with validation
│   │   ├── SchemaMarkup.tsx        # JSON-LD schema component
│   │   └── ScrollReveal.tsx        # Intersection Observer animation wrapper
│   │
│   ├── about/
│   │   ├── page.tsx                # Attorney bio and credentials
│   │   └── opengraph-image.tsx     # Custom OG image for About page
│   │
│   ├── family-law/
│   │   ├── page.tsx                # Family law practice area
│   │   └── opengraph-image.tsx     # Custom OG image with gold accent
│   │
│   ├── criminal-defense/
│   │   ├── page.tsx                # Criminal defense practice area
│   │   └── opengraph-image.tsx     # Custom OG image with steel accent
│   │
│   ├── faq/
│   │   ├── page.tsx                # Server component with metadata
│   │   ├── FAQClient.tsx           # Client component with accordion UI
│   │   └── opengraph-image.tsx     # Custom OG image for FAQ
│   │
│   └── blog/
│       ├── page.tsx                # Blog listing
│       ├── [slug]/
│       │   ├── page.tsx            # Individual blog post
│       │   └── opengraph-image.tsx # Dynamic OG image per blog post
│       ├── navigating-divorce-right-lawyer-miami/
│       │   └── page.tsx
│       └── protecting-your-rights-criminal-defense-lawyer/
│           └── page.tsx
│
├── public/
│   ├── bp-logo.svg                 # Full B|P logo
│   ├── bp-mini-logo.svg            # Mini logo for navigation
│   ├── family-law.svg              # Family law hero icon
│   ├── criminal-law.svg            # Criminal defense hero icon
│   └── portrait-bo-porta.webp      # Attorney portrait (optimized)
│
├── tailwind.config.ts              # Tailwind configuration with custom theme
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies and scripts
└── CLAUDE.md                       # Project documentation for AI assistant
```

---

## Features Implemented

### Pages
1. **Homepage** (`/`) - Full viewport hero, dual practice positioning, credentials, case results, contact form
2. **About** (`/about`) - Attorney biography, education, experience, professional associations
3. **Family Law** (`/family-law`) - Divorce, custody, support services
4. **Criminal Defense** (`/criminal-defense`) - DUI, domestic violence, federal defense
5. **FAQ** (`/faq`) - 15 comprehensive Q&A with accordion UI
6. **Blog** (`/blog`) - Two published articles with dedicated pages

### Components

#### Navigation System
- Fixed positioning with scroll-based transparency
- Mobile hamburger menu with full-screen overlay
- Smooth transitions and backdrop blur effects
- Logo variants (full/mini) with hover animations

#### Contact Features
- Professional contact form with real-time validation
- Floating callback widget with phone CTA
- Direct phone number: (305) 371-5060
- Email: info@boporta.com

#### Animation System
- Custom `ScrollReveal` component using Intersection Observer
- Configurable delays for staggered animations
- FAMILY | CRIMINAL divider animation with scale/fade
- Button hover effects (lift + shine)
- Respects `prefers-reduced-motion`

#### Schema Markup
- Attorney schema with full credentials
- LocalBusiness schema for local SEO
- FAQPage schema for rich snippets
- Review schema with peer testimonials
- Person schema for E-E-A-T signals
- Breadcrumb schema for navigation

### SEO Implementation

#### Traditional SEO
- ✅ Dynamic sitemap (`/sitemap.xml`)
- ✅ Dynamic robots.txt (`/robots`)
- ✅ PWA manifest (`/manifest.json`)
- ✅ Meta tags (title, description, canonical)
- ✅ OpenGraph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Image alt text and optimization
- ✅ Semantic HTML structure
- ✅ Internal linking strategy

#### OpenGraph Images
- ✅ Homepage: FAMILY | CRIMINAL branding (1200x630)
- ✅ Family Law: Gold accent with practice focus
- ✅ Criminal Defense: Steel accent with trial messaging
- ✅ About: Credentials showcase
- ✅ FAQ: Common questions preview
- ✅ Blog: Dynamic per-post images with titles

All OG images generated using Next.js `ImageResponse` API (edge runtime).

#### AI Search Optimization (GEO/LLMO/AEO)

**Advanced AI Visibility Strategy:**

**Entity Recognition & Knowledge Graph Integration:**
- ✅ Multi-source entity verification (sameAs schema: Avvo, Florida Bar, Yelp, YellowPages)
- ✅ Person schema with E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)
- ✅ Professional credentials verification (Florida Bar #109742 since 1996, Federal Court admission)
- ✅ Educational provenance (Tulane University Law School J.D. 1996)
- ✅ Professional associations (6 legal organizations for entity authority)
- ✅ Geographic entity optimization (geo coordinates, Miami-Dade County served)
- ✅ Aggregate ratings schema (5.0/5.0 from 20 reviews)

**AI Crawler Access & Indexing:**
- ✅ ChatGPT (OAI-SearchBot) - Full access granted
- ✅ Claude (ClaudeBot) - Full access granted
- ✅ Perplexity (PerplexityBot) - Full access granted
- ✅ Google Gemini (GoogleOther, Google-Extended) - Full access granted
- ✅ Meta AI (FacebookBot) - Full access granted
- ✅ Common Crawl (CCBot) - For AI training datasets
- ✅ Dynamic robots.ts with sitemap reference

**Citation Optimization (+40% GEO Boost):**
- ✅ Government statistics integration (Florida DHSMV, FBI UCR, Miami-Dade Courts)
- ✅ Legal statute citations (Florida Statute §61.19, §61.30, §316.193, etc.)
- ✅ Authoritative source attribution (American Academy of Matrimonial Lawyers, Florida Bar)
- ✅ Case law references (Miranda v. Arizona, 384 U.S. 436)
- ✅ Research-backed claims with inline sources
- ✅ Statistical evidence throughout (33,140 DUI arrests, 40% first-time offenders)

**Structured Data for AI Parsing:**
- ✅ FAQPage schema with 15 comprehensive Q&A pairs
- ✅ Comparison tables (Florida DUI Penalty matrix with 7 categories)
- ✅ Quick Answer format optimized for voice search and AI extraction
- ✅ Hierarchical heading structure (H1 → H6 semantic organization)
- ✅ BreadcrumbList schema for navigation context
- ✅ Review schema with peer attorney testimonials

**Voice Search & Featured Snippet Optimization:**
- ✅ Natural language query matching ("How much does divorce cost in Miami?")
- ✅ Immediate answer format (Quick Answer → Detailed Explanation → Sources)
- ✅ Conversational tone for voice assistant compatibility
- ✅ Question-based heading structure

**Recency & Freshness Signals:**
- ✅ Last updated timestamps on all pages ("Last Updated: March 2025")
- ✅ Current year in all citations and statistics (2024/2025)
- ✅ article:modified_time metadata
- ✅ Dynamic sitemap with lastModified dates

**Social Signals & Brand Mentions:**
- ✅ Enhanced OpenGraph metadata with absolute URLs
- ✅ Twitter Cards (summary_large_image)
- ✅ Professional social media presence indicators
- ✅ Third-party validation (Avvo 8.6 rating, Client's Choice Award 2022)
- ✅ Peer endorsements from fellow attorneys

**Content Architecture for AI:**
- ✅ Topic clustering (Family Law, Criminal Defense as distinct entities)
- ✅ Semantic keyword optimization (natural language, not keyword stuffing)
- ✅ Long-form comprehensive content (FAQ answers 200-500 words)
- ✅ Specific over vague (29 years, 1,550+ cases, $2.1M vs. generic claims)
- ✅ Evidence-based claims (every statistic cited with source)

**AI Testing & Validation:**
- Manual testing protocol for ChatGPT, Perplexity, Claude
- Query monitoring: "best criminal defense lawyer Miami", "DUI attorney Miami"
- Citation tracking and optimization based on AI responses
- Iterative content refinement based on AI feedback patterns

### Design System

#### Colors
- **Midnight** (`#0A1929`) - Primary dark background
- **Bone** (`#FAFAFA`) - Light background/text
- **Crimson** (`#DC143C`) - Primary accent (CTAs)
- **Gold** (`#D4AF37`) - Family Law accent
- **Steel** (`#5D7FA3`) - Criminal Defense accent
- **Titanium** (`#4A5568`) - Neutral gray

#### Typography
- **Playfair Display** - Headings (serif, high contrast)
- **Crimson Text** - Body copy (serif, readable)
- **Inter** - UI elements (sans-serif, modern)

#### Spacing System
- 8-point grid system for consistency
- Responsive scaling (mobile → desktop)
- Section padding: 80px → 128px
- Component gap: 16px → 32px

---

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Clone repository
git clone https://github.com/199-biotechnologies/boporta.git
cd boporta

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000

### Build & Deploy
```bash
# Production build
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel --prod
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
# Google Analytics 4 Measurement ID (optional)
# Get from: https://analytics.google.com/ → Admin → Data Streams → Web
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Note:** Without `NEXT_PUBLIC_GA_MEASUREMENT_ID`, the site functions normally but analytics won't be tracked. GA only loads in production (not development).

---

## Key Technical Decisions

### Next.js 15 App Router
- Server Components by default for better performance
- Client Components only where interactivity needed (FAQ accordion, contact form)
- Automatic code splitting per route
- Built-in image optimization

### TypeScript
- Full type safety across components
- Better developer experience with IntelliSense
- Catch errors at compile time

### Tailwind CSS
- Utility-first approach for rapid development
- Custom design system via `tailwind.config.ts`
- Consistent spacing with predefined values
- Dark mode support (not implemented yet)

### Dynamic Routes
- OpenGraph images generated per-page using `opengraph-image.tsx`
- Blog posts use `[slug]` dynamic routing
- Sitemap auto-generates from page structure
- Robots.txt generated dynamically

---

## Performance

### Optimizations
- Image optimization (WebP format, lazy loading)
- Font optimization (preload critical fonts, display: swap)
- Code splitting (automatic per route)
- Edge deployment (Vercel global CDN)
- Minimal JavaScript (Server Components where possible)

### Targets
- Lighthouse Performance: 90+ (desktop), 80+ (mobile)
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## Deployment

**Platform:** Vercel
**Domain:** bolivarporta.com
**SSL:** Automatic (Let's Encrypt)
**CDN:** Vercel Edge Network (global)

### Deployment Workflow
1. Push to `main` branch on GitHub
2. Vercel automatically builds and deploys
3. Preview deployments for all branches
4. Production deployment requires manual trigger: `vercel --prod`

---

## Contact Information

**Attorney:** Bolívar C. Porta
**Phone:** (305) 371-5060
**Email:** info@boporta.com
**Address:** 2000 S. Dixie Hwy, Suite 108, Miami, FL 33133
**Hours:** Mon-Fri 9AM-5PM (By Appointment Only)

---

## License & Credits

**Copyright © 2025 Bolívar C. Porta, P.A.**
All rights reserved.

**Website Design & Development:** Boris Djordjevic
**Tech Stack:** Next.js 15, React 19, TypeScript 5, Tailwind CSS 3.4
**Deployed on:** Vercel Edge Network
**Version Control:** GitHub (199-biotechnologies/boporta)

---

## Recent Updates

**November 2025:**
- ✅ **Google Analytics 4 Integration** (2025 Best Practices)
  - Implemented using official `@next/third-parties/google` package
  - Automatic pageview tracking (App Router compatible)
  - Event tracking for phone calls and form submissions
  - Production-only tracking (excludes dev/staging traffic)
  - Enhanced measurement enabled by default
- ✅ Enhanced Service schema on Family Law and Criminal Defense pages
  - Added LegalService schema with comprehensive service catalogs
  - Included contact points and available channels for voice search
  - Optimized for Siri, Google Assistant, and Alexa queries
- ✅ Added HowTo schema for arrest procedures (FAQ page)
  - Step-by-step guide optimized for voice assistants
  - Featured snippet optimization for "what to do after arrest"
- ✅ Cleaned up repository (removed OCD changelog files)
- ✅ Enhanced AI SEO documentation in README
- ✅ Added version stability notes (Next.js 15, Tailwind 3.4)
- ✅ Added Boris Djordjevic as website developer in credits
- ✅ Added Grokipedia to SEO roadmap
- ✅ Created voice search & local SEO priority roadmap
- ✅ Repository renamed from "legal" to "boporta"
- ✅ Repository made public on GitHub (199-biotechnologies/boporta)

**March 2025:**
- ✅ Added dynamic OpenGraph image generation for all pages
- ✅ Implemented blog post dynamic OG images
- ✅ Created robots.ts (replaced static robots.txt)
- ✅ Added PWA manifest for mobile support
- ✅ Enhanced metadata across all pages
- ✅ Implemented comprehensive sitemap
- ✅ Fixed FAQ page client/server component split
- ✅ Made repository public on GitHub

**Technical Improvements:**
- Enhanced schema markup for voice search optimization
- Added Service schema with OfferCatalog and ContactPoint
- Implemented HowTo schema for FAQ procedures
- Split FAQ into server (`page.tsx`) and client (`FAQClient.tsx`) components
- Resolved Next.js 15 metadata export restrictions
- Optimized OpenGraph images for social sharing (1200x630px)

---

## Future Roadmap

### Planned Features
- [x] Google Analytics 4 integration (implemented November 2025)
- [ ] Call tracking system
- [ ] A/B testing implementation
- [ ] Blog CMS integration
- [ ] Interactive legal calculators (DUI penalty, child support, divorce cost)
- [ ] Video content integration
- [ ] Newsletter signup
- [ ] Client portal

### Voice Search & Local SEO (Critical Priority)
- [ ] **Apple Maps / Apple Business Connect** ⚠️ **CRITICAL**
  - Claim business listing at https://business.apple.com
  - Verification via phone call or document upload
  - Essential for Siri voice search ("find criminal defense lawyer Miami")
  - Impact: 75-100M monthly Apple Maps users
  - Timeline: 5-10 business days for verification
- [ ] **Yelp Business Listing** ⚠️ **HIGH PRIORITY**
  - Claim/verify listing at https://biz.yelp.com
  - Siri pulls business data from Yelp
  - Add reviews, photos, complete NAP (Name, Address, Phone)
  - Respond to reviews for engagement

### SEO Enhancements
- [ ] Blog content expansion (10+ articles)
- [ ] Local business citations (Google Business Profile, Bing Places, etc.)
- [ ] Wikipedia/Wikidata entity creation
- [ ] Grokipedia entity submission (xAI's AI encyclopedia - launched Oct 2025)
  - Submit corrections/entity information through Grokipedia feedback system
  - Requires X/Google/Email/Apple account login
  - AI-verified submissions with primary source evidence
  - Complements traditional Wikipedia for AI search visibility
- [ ] Guest posts on legal authority sites
- [ ] Media presence (podcasts, interviews)
- [ ] Reddit/Quora engagement

---

**Built for performance. Optimized for results. Engineered for the future.**
