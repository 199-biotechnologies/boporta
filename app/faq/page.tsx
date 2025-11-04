import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ | Bo Porta – Miami Criminal Defense & Family Law',
  description: 'Frequently asked questions about divorce, custody, support, arrests, and criminal charges in Miami. Practical answers from a 25+ year trial attorney.',
  alternates: { canonical: 'https://bolivarporta.com/faq' },
};

export default function FAQPage() {
  return <FAQClient />;
}
