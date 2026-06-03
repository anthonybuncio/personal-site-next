import type { Metadata } from 'next';
import Link from 'next/link';

import EmailLink from '@/components/Contact/EmailLink';
import ContactIcons from '@/components/Contact/ContactIcons';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Anthony Buncio via email @ anthonybuncio.work@gmail.com',
};

export default function Contact() {
  return (
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link href="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  );
}
