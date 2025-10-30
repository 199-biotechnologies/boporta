'use client';

import { useState, useRef, FormEvent } from 'react';
import { sendContactEmail } from '../actions/contact';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    try {
      const result = await sendContactEmail(data);

      if (result.success) {
        setSubmitStatus('success');
        formRef.current?.reset();
        // Auto-hide success message after 10 seconds
        setTimeout(() => setSubmitStatus('idle'), 10000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please call (305) 371-5060 instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div
          className="bg-green-50 border-2 border-green-500 p-6 animate-fade-in"
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-start gap-4">
            <svg
              className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-display text-lg font-bold text-green-900 mb-2">
                Message Received
              </h4>
              <p className="font-body text-green-800 mb-2">
                Your consultation request has been sent successfully. We will respond within 24
                business hours.
              </p>
              <p className="font-sans text-sm text-green-700">
                For immediate assistance, call{' '}
                <a
                  href="tel:3053715060"
                  className="font-semibold underline hover:text-green-900 transition-colors duration-200"
                >
                  (305) 371-5060
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div
          className="bg-crimson/5 border-2 border-crimson p-6 animate-fade-in"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-start gap-4">
            <svg
              className="w-6 h-6 text-crimson flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-display text-lg font-bold text-crimson mb-2">
                Unable to Send Message
              </h4>
              <p className="font-body text-midnight/80 mb-2">{errorMessage}</p>
              <p className="font-sans text-sm text-midnight/70">
                Please call{' '}
                <a
                  href="tel:3053715060"
                  className="font-semibold text-crimson underline hover:text-crimson/80 transition-colors duration-200"
                >
                  (305) 371-5060
                </a>{' '}
                directly.
              </p>
            </div>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate>
        {/* Name */}
        <div className="group">
          <label
            htmlFor="name"
            className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-3 transition-colors duration-300 group-focus-within:text-crimson"
          >
            Full Name <span className="text-crimson">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className="w-full bg-white border-2 border-titanium/30 px-4 py-4 font-body text-midnight placeholder:text-titanium/40 focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson focus:ring-offset-2 transition-all duration-300 ease-out hover:border-titanium/50 disabled:opacity-50 disabled:cursor-not-allowed"
            required
            minLength={2}
            disabled={isSubmitting}
            aria-required="true"
          />
        </div>

        {/* Email & Phone Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="group">
            <label
              htmlFor="email"
              className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-3 transition-colors duration-300 group-focus-within:text-crimson"
            >
              Email <span className="text-crimson">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              className="w-full bg-white border-2 border-titanium/30 px-4 py-4 font-body text-midnight placeholder:text-titanium/40 focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson focus:ring-offset-2 transition-all duration-300 ease-out hover:border-titanium/50 disabled:opacity-50 disabled:cursor-not-allowed invalid:border-crimson/30 [&:not(:placeholder-shown):not(:focus):invalid]:border-crimson [&:not(:placeholder-shown):not(:focus):invalid]:text-crimson"
              required
              disabled={isSubmitting}
              aria-required="true"
            />
          </div>

          {/* Phone */}
          <div className="group">
            <label
              htmlFor="phone"
              className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-3 transition-colors duration-300 group-focus-within:text-crimson"
            >
              Phone <span className="text-crimson">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(305) 000-0000"
              pattern="[\(]?[0-9]{3}[\)]?[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}"
              className="w-full bg-white border-2 border-titanium/30 px-4 py-4 font-body text-midnight placeholder:text-titanium/40 focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson focus:ring-offset-2 transition-all duration-300 ease-out hover:border-titanium/50 disabled:opacity-50 disabled:cursor-not-allowed invalid:border-crimson/30 [&:not(:placeholder-shown):not(:focus):invalid]:border-crimson [&:not(:placeholder-shown):not(:focus):invalid]:text-crimson"
              required
              disabled={isSubmitting}
              aria-required="true"
            />
          </div>
        </div>

        {/* Case Description */}
        <div className="group">
          <label
            htmlFor="message"
            className="block font-sans text-sm font-semibold uppercase tracking-wider text-titanium mb-3 transition-colors duration-300 group-focus-within:text-crimson"
          >
            Brief Case Description <span className="text-crimson">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Provide a brief description of your legal matter. All communications are confidential."
            className="w-full bg-white border-2 border-titanium/30 px-4 py-4 font-body text-midnight placeholder:text-titanium/40 focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson focus:ring-offset-2 transition-all duration-300 ease-out resize-none hover:border-titanium/50 disabled:opacity-50 disabled:cursor-not-allowed"
            required
            minLength={10}
            disabled={isSubmitting}
            aria-required="true"
          />
          <p className="mt-2 text-xs text-titanium/60 font-sans">
            This form creates an inquiry, not an attorney-client relationship
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2 transition-all duration-300 ease-out"
            aria-busy={isSubmitting}
          >
            <span className="relative z-10">
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Request Consultation'
              )}
            </span>
            {!isSubmitting && (
              <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </button>
          {!isSubmitting && (
            <p className="mt-4 text-center text-sm text-titanium/70 font-sans">
              Response within 24 business hours
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
