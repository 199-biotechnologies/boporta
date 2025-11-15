# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bo Porta's law firm website - a professional law practice site for a Miami-based trial attorney specializing in Family Law and Criminal Defense. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 3.4.

**Tech Stack:**
- Next.js 15.1.6 (App Router)
- React 19.0.0
- TypeScript 5
- Tailwind CSS 3.4.18
- Google Fonts: Playfair Display, Crimson Text, Inter
- Resend 6.3.0 (email)
- @next/third-parties (Google Analytics)

**Version Stability:** This project intentionally uses Next.js 15.1.6 (not 16) and Tailwind 3.4.18 (not v4) for production stability. Do not upgrade unless explicitly requested.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment

```bash
# Deploy to Vercel production
vercel --prod
```

**Important:** Deployment is NOT automatic. Must manually run `vercel --prod` to deploy.

## Repository & Git

- **Organization:** 199-biotechnologies (NOT personal GitHub)
- **Repository:** https://github.com/199-biotechnologies/boporta (renamed from "legal")
- **Live Site:** https://bolivarporta.com
- Always push to this organization repository
- Commit messages should be detailed and descriptive

## Architecture

### App Structure (Next.js App Router)

```
app/
├── layout.tsx                    # Root layout with fonts, metadata, GA, Navigation, CallbackWidget
├── page.tsx                      # Homepage (hero, credentials, practices, results, testimonials, contact)
├── globals.css                   # Global styles, Tailwind config, animations
├── opengraph-image.tsx           # Dynamic OG image for homepage
├── robots.ts                     # Dynamic robots.txt with AI crawler access
├── sitemap.ts                    # Dynamic XML sitemap
├── manifest.ts                   # PWA manifest
│
├── components/
│   ├── Navigation.tsx            # Fixed nav with scroll effect, mobile menu
│   ├── CallbackWidget.tsx        # Floating contact widget
│   ├── ContactForm.tsx           # Contact form with validation
│   ├── GoogleAnalytics.tsx       # GA4 integration (@next/third-parties)
│   ├── SchemaMarkup.tsx          # JSON-LD schema injection component
│   ├── ScrollReveal.tsx          # Intersection Observer animation wrapper
│   └── PhoneLink.tsx             # Phone number component with analytics
│
├── about/
│   ├── page.tsx                  # Attorney bio and credentials
│   └── opengraph-image.tsx       # Custom OG image
│
├── family-law/
│   ├── page.tsx                  # Family law practice area with Service schema
│   └── opengraph-image.tsx       # Gold-accented OG image
│
├── criminal-defense/
│   ├── page.tsx                  # Criminal defense practice area with Service schema
│   └── opengraph-image.tsx       # Steel-accented OG image
│
├── faq/
│   ├── page.tsx                  # Server component (metadata only)
│   ├── FAQClient.tsx             # Client component (accordion UI, FAQPage/HowTo schema)
│   └── opengraph-image.tsx       # Custom OG image
│
└── blog/
    ├── page.tsx                  # Blog listing
    ├── [slug]/
    │   ├── page.tsx              # Individual blog post
    │   └── opengraph-image.tsx   # Dynamic OG image per blog post
    ├── navigating-divorce-right-lawyer-miami/
    │   └── page.tsx
    └── protecting-your-rights-criminal-defense-lawyer/
        └── page.tsx

public/
├── bp-logo.svg                   # Full B|P logo
├── bp-mini-logo.svg              # Mini logo for navigation
├── family-law.svg                # Family law hero icon
├── criminal-law.svg              # Criminal defense hero icon
└── portrait-bo-porta.webp        # Attorney portrait (optimized)
```

### Critical Architectural Patterns

**1. Client/Server Component Split (FAQ Pattern)**

The FAQ page demonstrates the proper pattern for Next.js 15 when you need both metadata AND client interactivity:

- `app/faq/page.tsx` - Server Component (exports metadata, renders FAQClient)
- `app/faq/FAQClient.tsx` - Client Component ('use client', accordion state, schema injection)

This pattern is required because Next.js 15 App Router does NOT allow metadata exports from client components.

**2. Schema Markup Architecture**

JSON-LD structured data is injected via the `SchemaMarkup` component, which wraps schemas in `<Script type="application/ld+json">` tags. Multiple schemas can be passed as an array:

```tsx
<SchemaMarkup schema={[faqSchema, breadcrumbSchema, howToSchema]} />
```

Key schema types implemented:
- **Attorney** schema (credentials, education, bar admissions)
- **LocalBusiness** schema (NAP, hours, service area)
- **FAQPage** schema (15 Q&A pairs with detailed answers)
- **HowTo** schema (step-by-step arrest procedures for voice search)
- **Service** schema (LegalService with OfferCatalog and ContactPoint)
- **Review** schema (peer attorney testimonials)
- **Person** schema (E-E-A-T signals for entity recognition)
- **BreadcrumbList** schema (navigation hierarchy)

**3. OpenGraph Image Generation**

Each route with `opengraph-image.tsx` uses Next.js ImageResponse API (edge runtime) to dynamically generate 1200x630px social sharing images. Pattern:

```tsx
import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (<div style={{ ... }}>Content</div>),
    { ...size }
  );
}
```

Practice area pages use accent colors (gold for Family Law, steel for Criminal Defense).

**4. Navigation Component (app/components/Navigation.tsx)**

Client component with:
- Scroll-based background transition (useEffect + scroll listener)
- Mobile hamburger menu with full-screen overlay
- Logo variants (full B|P logo / mini logo based on scroll position)
- Fixed positioning with z-index management
- ARIA attributes for accessibility

**5. ScrollReveal Component (app/components/ScrollReveal.tsx)**

Intersection Observer wrapper for entrance animations:
- Triggers once on viewport intersection
- Configurable delay prop for staggered animations
- Respects `prefers-reduced-motion`
- Wraps sections/elements that need reveal effects

**6. Google Analytics Integration**

GA4 implemented using official `@next/third-parties/google` package:
- Component: `app/components/GoogleAnalytics.tsx`
- Loaded in `app/layout.tsx` (outside `<body>`)
- Production-only (checks `process.env.NODE_ENV === 'production'`)
- Requires `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`
- Automatic pageview tracking (App Router compatible)
- Event tracking for phone clicks and form submissions

### Design System

**Color Palette (tailwind.config.ts):**
- `midnight: #0A1929` - Primary dark background
- `titanium: #4A5568` - Secondary gray
- `bone: #FAFAFA` - Light background/text
- `crimson: #DC143C` - Primary accent (CTAs, highlights)
- `gold: #D4AF37` - Family Law accent
- `steel: #5D7FA3` - Criminal Defense accent

**Typography:**
- `font-display` (Playfair Display) - Headlines, emphasis
- `font-body` (Crimson Text) - Body copy
- `font-sans` (Inter) - UI elements, labels

Google Fonts configured in `app/layout.tsx` with CSS variables, referenced in `tailwind.config.ts`.

**Custom Classes (globals.css):**
- `.section-padding` - Vertical spacing (py-32 md:py-64)
- `.container-custom` - Max-width container with responsive padding
- `.btn-primary` - Crimson button with hover effects
- `.btn-secondary` - Outline button with fill animation
- Keyframe animations: fade-in, slideInLeft, slideInRight, fadeInScale

### Animation Strategy

**Homepage Hero:**
- Logo: fade-in
- "FAMILY" text: slideInLeft with cubic-bezier(0.16,1,0.3,1)
- Center divider: fadeInScale
- "CRIMINAL" text: slideInRight
- Staggered delays for subheading, meta info, CTAs

**Section Reveals:**
- Use `<ScrollReveal>` wrapper with optional delay prop
- Triggers on intersection (once)
- Staggered children with incremental delays (100ms, 200ms, 300ms)

## SEO Implementation

### Traditional SEO
- Dynamic sitemap (`app/sitemap.ts` - MetadataRoute.Sitemap)
- Dynamic robots.txt (`app/robots.ts` - MetadataRoute.Robots)
- PWA manifest (`app/manifest.ts`)
- Metadata configured in `app/layout.tsx` with metadataBase
- OpenGraph tags (Facebook, LinkedIn)
- Twitter Cards (summary_large_image)
- Semantic HTML structure (proper heading hierarchy)

### AI Search Optimization (GEO/LLMO)

**AI Crawler Access (robots.ts):**
- ChatGPT (OAI-SearchBot) - Full access
- Claude (ClaudeBot) - Full access
- Perplexity (PerplexityBot) - Full access
- Google Gemini (GoogleOther, Google-Extended) - Full access
- Meta AI (FacebookBot) - Full access
- Common Crawl (CCBot) - For AI training datasets

**Citation Optimization:**
- Government statistics integration (Florida DHSMV, FBI UCR, Miami-Dade Courts)
- Legal statute citations (Florida Statute §61.19, §61.30, §316.193, etc.)
- Authoritative source attribution (American Academy of Matrimonial Lawyers, Florida Bar)
- Case law references (Miranda v. Arizona, 384 U.S. 436)
- Research-backed claims with inline sources

**Voice Search Optimization:**
- HowTo schema for procedural questions ("what to do after arrest")
- Service schema with ContactPoint and availableChannel
- Natural language query matching ("How much does divorce cost in Miami?")
- Quick Answer format (Quick Answer → Detailed Explanation → Sources)

## Critical Implementation Details

### Path Aliases
- `@/*` maps to root directory (configured in tsconfig.json)
- Example: `import Navigation from '@/app/components/Navigation'`

### Image Optimization
- Use Next.js `<Image>` component from 'next/image'
- WebP format for photos
- SVG for logos and icons
- `priority` prop for above-the-fold images

### TypeScript Configuration
- Strict mode enabled
- Target: ES2017
- JSX: preserve (handled by Next.js)
- Path aliases: `@/*` → root

### Environment Variables

Create `.env.local` in project root:

```bash
# Google Analytics 4 Measurement ID (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Without GA measurement ID, site functions normally but analytics won't track.

## Content Guidelines

### Writing Tone
- Direct, assertive, no-nonsense
- Short, punchy sentences
- Outcome-focused ("Results speak", "Trial", "Dismissed")
- Avoids generic legal marketing fluff
- Uses specific examples (dollar amounts, case outcomes, years of experience)
- Evidence-based claims with citations

### Brand Identity
- B|P logo (vertical divider between initials)
- Dual practice focus: FAMILY | CRIMINAL
- 29 years experience (Florida Bar since 1996)
- Tulane Law School JD 1996
- Former Public Defender
- Federal Court admitted (U.S. District Court, Southern District of Florida)
- Avvo 8.6 Excellent rating
- 1,550+ cases (750+ criminal defense, 500+ family law)

### Contact Information
- Phone: (305) 371-5060
- Email: info@boporta.com
- Address: 2000 S. Dixie Hwy, Suite 108, Miami, FL 33133
- Hours: Mon-Fri 9AM-5PM, By Appointment Only

## Common Modifications

### Adding a New Page

1. Create `app/[pagename]/page.tsx`
2. Add route to Navigation.tsx navLinks array
3. Create `opengraph-image.tsx` for social sharing
4. Follow existing section structure with ScrollReveal
5. Use semantic HTML (section, h2/h3, etc.)
6. Maintain color scheme (midnight bg / bone bg alternation)
7. Add schema markup (Attorney, BreadcrumbList, etc.)
8. Update `app/sitemap.ts` with new route

### Adding Schema Markup

1. Define schema object(s) in component
2. Import `SchemaMarkup` component
3. Pass schema as prop: `<SchemaMarkup schema={yourSchema} />`
4. For multiple schemas: `<SchemaMarkup schema={[schema1, schema2]} />`

Schema resources:
- https://schema.org/Attorney
- https://schema.org/LocalBusiness
- https://schema.org/FAQPage
- https://schema.org/HowTo
- https://schema.org/Service

### Styling Changes
- Modify `tailwind.config.ts` for theme extensions
- Add utility classes in `globals.css` @layer utilities
- Custom components in `globals.css` @layer components
- Keep animations subtle and purposeful

### Font Customization
- Configure in `app/layout.tsx` (Google Fonts imports)
- Update CSS variables in `globals.css` :root
- Reference via Tailwind classes: font-display, font-body, font-sans

## Production Checklist

Before deploying:
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful build
- [ ] Test mobile responsiveness
- [ ] Verify all CTAs point to correct phone/email
- [ ] Check ScrollReveal animations on all pages
- [ ] Confirm navigation works across all routes
- [ ] Verify OpenGraph images generate correctly
- [ ] Test schema markup with Google Rich Results Test
- [ ] Deploy with `vercel --prod` (NOT automatic)
