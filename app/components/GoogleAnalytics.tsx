'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

/**
 * Google Analytics 4 Component (2025 Best Practices)
 *
 * Uses official @next/third-parties/google package for Next.js 15 App Router
 *
 * Features:
 * - Automatic pageview tracking (no manual router listeners needed)
 * - Enhanced measurement enabled by default
 * - Client-side navigation tracking via browser history API
 * - Production-only tracking (respects NODE_ENV)
 *
 * Setup:
 * 1. Add NEXT_PUBLIC_GA_MEASUREMENT_ID to .env.local
 * 2. Include this component in root layout.tsx
 * 3. Enable "Enhanced Measurement" in GA4 Admin panel
 * 4. Verify "Page changes based on browser history events" is checked
 */
export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Only load in production to avoid tracking dev/staging traffic
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}

// Event tracking helper functions for custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for common conversion events
export const trackPhoneCall = () => {
  trackEvent('phone_call', 'contact', 'click_to_call');
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', 'contact', formName);
};

export const trackPracticeAreaView = (practiceArea: string) => {
  trackEvent('page_view', 'engagement', practiceArea);
};

export const trackCTAClick = (ctaLocation: string, ctaType: string) => {
  trackEvent('cta_click', 'engagement', `${ctaLocation}_${ctaType}`);
};
