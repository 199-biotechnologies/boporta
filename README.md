# Bolívar C. Porta, P.A. - Law Firm Website

Professional website for Miami-based trial attorney Bo Porta, specializing in Family Law and Criminal Defense.

**Live Site:** https://bolivarporta.com
**Repository:** https://github.com/199-biotechnologies/boporta

---

## Technology Stack

- **Framework:** Next.js 15.1.6 (App Router)
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3.4.18
- **Fonts:** Google Fonts (Playfair Display, Crimson Text, Inter)
- **Deployment:** Vercel (Edge Network)
- **Version Control:** Git + GitHub

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

#### AI Search Optimization
- ✅ AI crawler access (ChatGPT, Claude, Perplexity, Gemini)
- ✅ Entity verification with sameAs schema (4 external sources)
- ✅ Citations and statistics throughout content
- ✅ Quick Answer format for voice search
- ✅ Comparison tables for structured data
- ✅ Recency signals (last updated dates)

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

### Environment
No environment variables required for basic functionality.

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

**Website Design & Development:** Built with Next.js, React, TypeScript, and Tailwind CSS
**Deployed on:** Vercel Edge Network
**Version Control:** GitHub (199-biotechnologies/boporta)

---

## Recent Updates

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
- Split FAQ into server (`page.tsx`) and client (`FAQClient.tsx`) components
- Resolved Next.js 15 metadata export restrictions
- Optimized OpenGraph images for social sharing (1200x630px)
- Enhanced schema markup for better SEO

---

## Future Roadmap

### Planned Features
- [ ] Google Analytics integration
- [ ] Call tracking system
- [ ] A/B testing implementation
- [ ] Blog CMS integration
- [ ] Interactive legal calculators (DUI penalty, child support, divorce cost)
- [ ] Video content integration
- [ ] Newsletter signup
- [ ] Client portal

### SEO Enhancements
- [ ] Blog content expansion (10+ articles)
- [ ] Local business citations
- [ ] Wikipedia/Wikidata entity creation
- [ ] Guest posts on legal authority sites
- [ ] Media presence (podcasts, interviews)
- [ ] Reddit/Quora engagement

---

**Built for performance. Optimized for results. Engineered for the future.**
