# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bo Porta's law firm website - a professional law practice site for a Miami-based trial attorney specializing in Family Law and Criminal Defense. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 3.4.

**Tech Stack:**
- Next.js 15.1.6 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 3.4.18
- Google Fonts: Playfair Display, Crimson Text, Inter

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
- **Remote:** https://github.com/199-biotechnologies/legal.git
- Always push to this organization repository
- Commit messages should be detailed and descriptive

## Architecture

### App Structure (Next.js App Router)

```
app/
├── layout.tsx          # Root layout with fonts, metadata, Navigation, CallbackWidget
├── page.tsx            # Homepage (hero, credentials, two practices, results, testimonials, contact)
├── globals.css         # Global styles, Tailwind config, animations
├── components/
│   ├── Navigation.tsx      # Fixed nav with scroll effect, mobile menu
│   ├── CallbackWidget.tsx  # Contact widget
│   └── ScrollReveal.tsx    # Intersection Observer animation wrapper
├── about/page.tsx
├── family-law/page.tsx
├── criminal-defense/page.tsx
├── faq/page.tsx
└── blog/
    ├── page.tsx
    └── [slug]/page.tsx

public/
├── bp-logo.svg
├── bp-mini-logo.svg
└── portrait-bo-porta.webp
```

### Key Design Patterns

**1. Navigation Component (app/components/Navigation.tsx)**
- Client component (`'use client'`)
- Scroll-based background transition
- Mobile hamburger menu with overlay
- B|P logo SVG inline
- Fixed positioning with z-index management

**2. ScrollReveal Component (app/components/ScrollReveal.tsx)**
- Intersection Observer-based animation trigger
- Wraps content sections for entrance animations
- Configurable delay prop for staggered animations

**3. Layout System (app/layout.tsx)**
- Global font configuration via CSS variables
- Metadata for SEO
- Shared Navigation + CallbackWidget across all pages

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

## Critical Implementation Details

### Path Aliases
- `@/*` maps to root directory (configured in tsconfig.json)
- Example: `import Navigation from '@/app/components/Navigation'`

### Image Optimization
- Use Next.js `<Image>` component
- WebP format for photos
- SVG for logos and icons
- `priority` prop for above-the-fold images

### TypeScript Configuration
- Strict mode enabled
- Target: ES2017
- JSX: preserve (handled by Next.js)

### SEO & Metadata
- Metadata configured in layout.tsx
- Keywords: Miami lawyer, family law, criminal defense, trial attorney
- Structured heading hierarchy (H1 → H6)

## Content Guidelines

### Writing Tone
- Direct, assertive, no-nonsense
- Short, punchy sentences
- Outcome-focused ("Results speak", "Trial", "Dismissed")
- Avoids generic legal marketing fluff
- Uses specific examples (dollar amounts, case outcomes)

### Brand Identity
- B|P logo (vertical divider between initials)
- Dual practice focus: FAMILY | CRIMINAL
- 25+ years experience emphasized
- Florida Bar since 1996
- Tulane Law School JD

### Contact Information
- Phone: (305) 371-5060
- Email: info@boporta.com
- Address: 2000 S. Dixie Hwy, Suite 108, Miami, FL 33133
- Hours: Mon-Fri 9AM-5PM, By Appointment Only

## Common Modifications

### Adding a New Page
1. Create `app/[pagename]/page.tsx`
2. Add route to Navigation.tsx navLinks array
3. Follow existing section structure with ScrollReveal
4. Use semantic HTML (section, h2/h3, etc.)
5. Maintain color scheme (midnight bg / bone bg alternation)

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
- [ ] Deploy with `vercel --prod` (NOT automatic)
