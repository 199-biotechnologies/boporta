'use client';

import { useState } from 'react';
import { trackFormSubmission, trackCTAClick } from './GoogleAnalytics';

export default function CallbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmission('callback_widget');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const handleWidgetOpen = () => {
    trackCTAClick('floating_widget', 'callback_open');
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleWidgetOpen}
          className="fixed bottom-8 right-8 z-40 bg-crimson text-bone px-6 py-4 font-sans font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group"
          aria-label="Request callback"
        >
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="hidden sm:inline">Callback</span>
          </div>
        </button>
      )}

      {/* Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-40 w-80 sm:w-96 bg-midnight text-bone shadow-2xl animate-fade-in-scale">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-display text-xl font-bold mb-1">
                  Request Callback
                </h3>
                <p className="font-sans text-sm text-bone/60">
                  We'll call you back
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-bone/60 hover:text-bone transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Form or Success Message */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-bone/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-bone/10 border border-bone/20 p-3 font-body text-bone focus:outline-none focus:border-crimson transition-all"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-bone/60 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-bone/10 border border-bone/20 p-3 font-body text-bone focus:outline-none focus:border-crimson transition-all"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-bone/60 mb-2">
                    Best Time
                  </label>
                  <select
                    required
                    className="w-full bg-bone/10 border border-bone/20 p-3 font-body text-bone focus:outline-none focus:border-crimson transition-all"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 7 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-crimson text-bone px-6 py-3 font-sans font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-crimson/90"
                >
                  Request Callback
                </button>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-crimson/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-crimson"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-display text-lg font-bold mb-2">
                  Request Received
                </p>
                <p className="font-body text-sm text-bone/80">
                  We'll call you back shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
