'use client';

import { trackPhoneCall } from './GoogleAnalytics';

interface PhoneLinkProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Phone link component with Google Analytics tracking
 * Tracks phone_call events when clicked
 */
export default function PhoneLink({ className, children }: PhoneLinkProps) {
  const handleClick = () => {
    trackPhoneCall();
  };

  return (
    <a
      href="tel:3053715060"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
